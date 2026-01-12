// buildGuests.js
import fs from "node:fs";
import { parse } from "csv-parse/sync";

const csvText = fs.readFileSync("./invitados.csv", "utf8");

// Ajusta los nombres de las columnas para que coincidan EXACTO con tu CSV:
// ID, Nombre, Whatsapp, País, Boletos que les dimos
const rows = parse(csvText, {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

const guests = rows
  .map((row) => {
    const id = row["ID"];
    const fullName = row["Nombre"];
    const phoneRaw = row["Whatsapp"];
    const countryRaw = row["País"];
    const ticketsRaw = row["Boletos que les dimos"];
    const willAssist = row["Asistirá"];

    if (!id || !fullName || !!willAssist) return null;

    const phone = phoneRaw ? String(phoneRaw).trim() : "";
    const country = countryRaw ? String(countryRaw).trim() : "México";

    const allowedTickets = ticketsRaw
      ? Number(String(ticketsRaw).replace(/[^\d]/g, ""))
      : 0;

    return {
      id,
      fullName,
      phone,
      country,
      allowedTickets,
    };
  })
  .filter(Boolean);

const guestsCode = "const guests = " + JSON.stringify(guests, null, 2) + ";";

// Leemos whatsapp.js
const whatsappPath = "./links-whatsapp.js";
let whatsappCode = fs.readFileSync(whatsappPath, "utf8");

// Reemplazamos lo que está entre los marcadores
const startMarker = "// <<GUESTS_START>>";
const endMarker = "// <<GUESTS_END>>";

const startIndex = whatsappCode.indexOf(startMarker);
const endIndex = whatsappCode.indexOf(endMarker);

if (startIndex === -1 || endIndex === -1) {
  throw new Error(
    "No encontré los marcadores // <<GUESTS_START>> y // <<GUESTS_END>> en whatsapp.js"
  );
}

const before = whatsappCode.slice(0, startIndex + startMarker.length);
const after = whatsappCode.slice(endIndex);

const newContent = before + "\n" + guestsCode + "\n" + after;

fs.writeFileSync(whatsappPath, newContent, "utf8");

console.log("✅ whatsapp.js actualizado con la nueva constante 'guests'.");

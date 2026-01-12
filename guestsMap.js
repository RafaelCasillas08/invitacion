import fs from "node:fs";
import { parse } from "csv-parse/sync";

const csvText = fs.readFileSync("./invitados.csv", "utf8");

const rows = parse(csvText, {
  columns: true, // usa la primera fila como headers
  skip_empty_lines: true,
  trim: true,
});

// Transformación a guestMap
const guestMap = {};

for (const row of rows) {
  if (!row.ID) continue;
  if (row.ID in guestMap) {
    console.log(row.ID + " esta duplicado");
    continue;
  }
  guestMap[row.ID] = {
    fullName: row.Nombre,
    allowedTickets: Number(row["Boletos que les dimos"]),
  };
}

console.log(guestMap);

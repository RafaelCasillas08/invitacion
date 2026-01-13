// <<GUESTS_START>>
const guests = [];
// <<GUESTS_END>>

// Ajusta esto a tu dominio real
const baseURL = "https://rafaelcasillas08.github.io/invitacion/";

// Mapeo de país -> código de WhatsApp
function getCountryCode(country) {
  if (!country) return "52"; // default México

  if (country === "MX") return "52"; // México
  if (country === "US") return "1"; // USA

  return "52"; // default
}

// Limpia el teléfono y lo deja en solo dígitos
function sanitizePhone(phone) {
  if (!phone) return "";
  return phone.toString().replace(/\D/g, "");
}

// Construye el mensaje con los mismos saltos de línea
function buildMessage(guest) {
  const url = `${baseURL}?id=${encodeURIComponent(guest.id)}`;
  const boletos = guest.allowedTickets || 0;

  // return [
  //   `¡Hola buenas tardes!`,
  //   `Solo para confirmar si podrán acompañarnos a nuestra boda el próximo 7 de febrero 💍`,
  //   `Tienes asignado${boletos > 1 ? "s" : ""} ${boletos} boleto${
  //     boletos > 1 ? "s" : ""
  //   }.`,
  //   ``,
  //   `Para confirmar o declinar tu asistencia, puedes hacerlo contestando este mensaje o con el botón "Confirmar asistencia" que se encuentra dentro del siguiente link:`,
  //   `${url}`,
  // ].join("\n");
  return [
    `¡Hola ${guest.fullName}!`,
    `Te invitamos cordialmente a nuestra boda el próximo 7 de febrero 💍`,
    `Tienes asignado${boletos > 1 ? "s" : ""} ${boletos} boleto${
      boletos > 1 ? "s" : ""
    }.`,
    ``,
    `Puedes ver todos los detalles de tu invitación y confirmar/declinar tu asistencia aquí:`,
    `${url}`,
  ].join("\n");
}

const skippedGuests = [];
const failedGuests = [];

// En vez de automatizar WhatsApp, solo generamos y mostramos los links
guests.forEach((guest) => {
  const phoneDigits = sanitizePhone(guest.phone);

  if (!phoneDigits || phoneDigits.length < 8) {
    console.warn(
      "⏭️  Saltando invitado por teléfono inválido:",
      guest.fullName,
      guest.phone
    );
    skippedGuests.push({ guest, reason: "phone_invalid" });
    return;
  }

  const countryCode = getCountryCode(guest.country);
  const fullPhone = countryCode + phoneDigits;

  try {
    const text = buildMessage(guest); // mismo mensaje con \n
    const encodedText = encodeURIComponent(text);

    const link = `https://api.whatsapp.com/send?phone=${fullPhone}&text=${encodedText}`;

    // Imprime el link con separación (una línea en blanco después)
    console.log(`${guest.fullName}:`);
    console.log(link);
    console.log(""); // línea en blanco
  } catch (e) {
    console.error("❌ Error al generar link para", guest.fullName, e);
    failedGuests.push({ guest, error: e });
  }
});

console.log("✅ Terminado.\n");

// Resumen de errores / saltados
if (skippedGuests.length > 0) {
  console.log("Invitados con teléfono inválido:");
  console.log(
    skippedGuests
      .map((g) => `${g.guest.fullName} - ${g.guest.phone}`)
      .join("\n")
  );
}

if (failedGuests.length > 0) {
  console.log("\nInvitados con error al generar link:");
  console.log(
    failedGuests.map((g) => `${g.guest.fullName} - ${g.guest.phone}`).join("\n")
  );
}

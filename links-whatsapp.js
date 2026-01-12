// <<GUESTS_START>>
const guests = [
  {
    id: "cipriano",
    fullName: "Cipriano",
    phone: "3337243073",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "miguelmelgarejo",
    fullName: "Viky y Miguel Melgarejo",
    phone: "5537222627",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "carlosmelgarejo",
    fullName: "Fer y Carlos Melgarejo",
    phone: "5510031970",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "janeth-christian",
    fullName: "Janeth y Christian",
    phone: "3310166429",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "alan-sulgi",
    fullName: "Sulgi y Alan",
    phone: "3317716382",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "yola-cesar",
    fullName: "Yolanda y Cesar",
    phone: "3312833995",
    country: "MX",
    allowedTickets: 3,
  },
  {
    id: "solecito",
    fullName: "Marisol",
    phone: "3322166414",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "mimiurs",
    fullName: "Mimiurs",
    phone: "3326840348",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "ramy",
    fullName: "Ramy",
    phone: "3311427608",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "garcia-cervantes",
    fullName: "Familia García Cervantes",
    phone: "3929301521",
    country: "MX",
    allowedTickets: 4,
  },
  {
    id: "tiacarmen",
    fullName: "Tia Carmen",
    phone: "3323113766",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "tino",
    fullName: "Tío Tino y Tía Irma",
    phone: "3311667546",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "petrita-beto",
    fullName: "Tia Petrita y Tio Beto",
    phone: "3317377230",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "licha-pelon",
    fullName: "Tía Licha y Padrino José Luis",
    phone: "3312187749",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "melissa",
    fullName: "Melissa y Brett",
    phone: "9726720193",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "jenny",
    fullName: "Jenny y Mario",
    phone: "6828122487",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "isela",
    fullName: "Isela y Alejandro",
    phone: "3334597032",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "andrea-beto",
    fullName: "Andrea y Beto",
    phone: "3310894204",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "anabel",
    fullName: "Anabel y Chava",
    phone: "3339018720",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "jose-briseno",
    fullName: "José",
    phone: "6506792278",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "martin-romero",
    fullName: "Martin y Osiris",
    phone: "7252665324",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "uli-romero",
    fullName: "Ulises y Nataly",
    phone: "7028449449",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "jesus-tesi",
    fullName: "Jesús y Tesi",
    phone: "3921384111",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "lety",
    fullName: "Señora Lety y Ulises",
    phone: "3921593740",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "mtromanuel",
    fullName: "Maestro Manuel",
    phone: "3921073023",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "soco-gonza",
    fullName: "Soco y Gonza",
    phone: "3921071215",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "karisenador",
    fullName: "Kari",
    phone: "3921005928",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "erickatoto",
    fullName: "Erick",
    phone: "3312937723",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "nova",
    fullName: "Christian Kuga",
    phone: "3929293669",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "ana-hernandez",
    fullName: "Ana",
    phone: "6198642569",
    country: "US",
    allowedTickets: 2,
  },
  {
    id: "lourdes",
    fullName: "Lourdes",
    phone: "3929285620",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "angelica-miguel",
    fullName: "Angélica y Miguel",
    phone: "3921000262",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "pepe-godinez",
    fullName: "Pepe y Jesusita",
    phone: "3921220279",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "fatima-pepe",
    fullName: "Fatima y Pepe",
    phone: "3921220984",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "soco-alejandro",
    fullName: "Familia Sanchez Casillas",
    phone: "7714034610",
    country: "MX",
    allowedTickets: 5,
  },
  {
    id: "tere-casillas",
    fullName: "Tia Tere",
    phone: "3921582272",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "gerardo-casillas",
    fullName: "Tio Gera",
    phone: "9811600194",
    country: "MX",
    allowedTickets: 1,
  },
  {
    id: "paulina-casillasjesus",
    fullName: "Paulina",
    phone: "3921130801",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "julieta-casillas",
    fullName: "Julieta",
    phone: "3921320870",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "sandra-casillas",
    fullName: "Sandra y Huguito",
    phone: "3929284771",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "ulises-casillas",
    fullName: "Ulises y Sarahi",
    phone: "3921282092",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "andrea-casillas",
    fullName: "Tía Andrea",
    phone: "3929280279",
    country: "MX",
    allowedTickets: 2,
  },
  {
    id: "isabel-lopez",
    fullName: "Isabel",
    phone: "3921090884",
    country: "MX",
    allowedTickets: 2,
  },
];
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

  return [
    `¡Hola buenas tardes!`,
    `Solo para confirmar si podrán acompañarnos a nuestra boda el próximo 7 de febrero 💍`,
    `Tienes asignado${boletos > 1 ? "s" : ""} ${boletos} boleto${
      boletos > 1 ? "s" : ""
    }.`,
    ``,
    `Para confirmar o declinar tu asistencia, puedes hacerlo contestando este mensaje o con el botón "Confirmar asistencia" que se encuentra dentro del siguiente link:`,
    `${url}`,
  ].join("\n");
  // return [
  //   `¡Hola ${guest.fullName}!`,
  //   `Te invitamos cordialmente a nuestra boda el próximo 7 de febrero 💍`,
  //   `Tienes asignado${boletos > 1 ? "s" : ""} ${boletos} boleto${
  //     boletos > 1 ? "s" : ""
  //   }.`,
  //   ``,
  //   `Puedes ver todos los detalles de tu invitación y confirmar/declinar tu asistencia aquí:`,
  //   `${url}`,
  // ].join("\n");
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

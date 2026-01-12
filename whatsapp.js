// <<GUESTS_START>>
const guests = [
  {
    id: "rafa-karla",
    fullName: "Rafa y Karla",
    phone: "3929284097",
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
  if (country === "ES") return "34"; // España
  if (country === "COL") return "57"; // Colombia

  return "52"; // default
}

// Limpia el teléfono y lo deja en solo dígitos
function sanitizePhone(phone) {
  if (!phone) return "";
  return phone.toString().replace(/\D/g, "");
}

// Abre un chat con texto prellenado
function openChatWithText(fullPhone, text) {
  // Puedes usar whatsapp:// o wa.me, conservamos el estilo del script anterior
  var link = document.createElement("a");
  link.setAttribute(
    "href",
    `whatsapp://send?phone=${fullPhone}&text=${encodeURIComponent(text)}`
  );
  document.body.append(link);
  link.click();
  document.body.removeChild(link);
}

// Hace click en el botón de enviar
function clickSendButton() {
  const interval = setInterval(() => {
    let button = null;

    // 1) Intento nuevo: botón de enviar por data-testid (DOM nuevo)
    button = document.querySelector('button[data-testid="compose-btn-send"]');

    // 2) Intento antiguo, pero clicando el button, no el span
    if (!button) {
      const span = document.querySelector('span[data-icon="send"]');
      if (span) {
        button = span.closest("button");
      }
    }

    // 3) Último recurso: cualquier botón con aria-label Enviar / Send
    if (!button) {
      button =
        document.querySelector('button[aria-label="Enviar"]') ||
        document.querySelector('button[aria-label="Send"]');
    }

    if (button) {
      button.click();
      clearInterval(interval);
    }
  }, 400);
}

function dismissInvalidNumberModal(guest) {
  const interval = setInterval(() => {
    // Modal nuevo tiene botones de este estilo:
    // button[data-testid="popup-controls-ok"]
    let okBtn = document.querySelector(
      'button[data-testid="popup-controls-ok"]'
    );

    // Fallback adicional por si cambian el selector
    if (!okBtn) {
      okBtn = [...document.querySelectorAll("button")].find((b) =>
        /ok/i.test(b.textContent.trim())
      );
    }

    if (okBtn) {
      okBtn.click();
      clearInterval(interval);
    }
  }, 300);
}

// Configuración de envío
let index = 0;
// Intervalo entre invitados (ms) para no saturar: 12 segundos
const SEND_INTERVAL_MS = 12000;

function buildMessage(guest) {
  const url = `${baseURL}?id=${encodeURIComponent(guest.id)}`;
  const boletos = guest.allowedTickets || 0;

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
const failedGuests = [];
const skippedGuests = [];

const intervalId = setInterval(() => {
  if (index >= guests.length) {
    clearInterval(intervalId);
    console.log("✅ Terminado");
    console.log(
      "Invitados sin teléfono o con teléfono inválido:",
      skippedGuests
        .map((g) => `${g.guest.fullName} - ${g.guest.phone}`)
        .join("\n")
    );
    console.log(
      "Invitados con error al intentar abrir chat:\n",
      failedGuests
        .map((g) => `${g.guest.fullName} - ${g.guest.phone}`)
        .join("\n")
    );
    return;
  }

  const guest = guests[index];
  index++;

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
  const text = buildMessage(guest);

  try {
    openChatWithText(fullPhone, text);
    setTimeout(() => {
      clickSendButton();
      dismissInvalidNumberModal(guest);
    }, 2500); // tiempo para que cargue el chat antes de apretar "Enviar"
  } catch (e) {
    console.error("❌ Error al intentar enviar a", guest.fullName, e);
    failedGuests.push({ guest, error: e });
  }
}, SEND_INTERVAL_MS);

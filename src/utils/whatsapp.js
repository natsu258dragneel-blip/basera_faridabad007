// ─────────────────────────────────────────────────────────────
// WHATSAPP ENQUIRY SYSTEM
// Every enquiry on the site funnels through this one helper so the
// number and message format only need to be changed in one place.
// ─────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = "919599714297"; // country code + number, no symbols

/**
 * Opens WhatsApp (web or app) with a pre-filled message.
 * @param {string} message - plain text message, will be URL-encoded.
 */
export function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

/** General enquiry from the floating button / navbar CTA. */
export function generalEnquiryMessage() {
  return `Hello! I'm looking for PG accommodation in Faridabad. Could you please share more details and current availability?`;
}

/** Enquiry pre-filled from a specific room card / details modal. */
export function roomEnquiryMessage(room) {
  return [
    `Hello, I am interested in the following PG:`,
    ``,
    `PG: ${room.name}`,
    `Location: ${room.location}`,
    `Room Type: ${room.roomType}`,
    `Budget: ${room.priceLabel}`,
    ``,
    `Please share availability and further details.`,
  ].join("\n");
}

/** Enquiry built from the full enquiry form. */
export function formEnquiryMessage({ name, phone, location, roomType, moveInDate, message }) {
  const lines = [
    `Hello, I'd like to enquire about a PG in Faridabad.`,
    ``,
    `Name: ${name}`,
    `Phone: ${phone}`,
  ];
  if (location) lines.push(`Preferred Location: ${location}`);
  if (roomType) lines.push(`Room Type: ${roomType}`);
  if (moveInDate) lines.push(`Expected Move-in: ${moveInDate}`);
  if (message) lines.push(``, `Message: ${message}`);
  return lines.join("\n");
}

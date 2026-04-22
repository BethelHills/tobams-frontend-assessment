export const PRIMARY_NAV = [
  { label: "About", href: "#page-top" },
  { label: "What We Do", href: "#hero" },
  { label: "Jobs", href: "#page-top" },
  { label: "Projects", href: "#page-top" },
  { label: "TG Academy", href: "#learning" },
  { label: "Strategic Partnerships", href: "#page-top" },
  { label: "Pricing", href: "#contact" },
  { label: "Book a Consultation", href: "#contact" },
] as const;

export const CONTACT_EMAIL = "hello@tobamsgroup.com";
export const CONTACT_PHONE_DISPLAY = "+234 809 000 7746";
export const CONTACT_PHONE_TEL = "+2348090007746";

export function mailtoConsult(subject: string) {
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}`;
}

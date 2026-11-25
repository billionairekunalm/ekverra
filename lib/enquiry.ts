// Shared by the form (instant feedback) and the API route (trust boundary).
export type Enquiry = { name: string; phone: string; email: string; type: string; location: string; scope: string; message: string; website: string };

export const TYPES = ["Residential", "Commercial", "Turnkey", "Other"];

export function validate(f: Partial<Enquiry>) {
  const e: Partial<Record<keyof Enquiry, string>> = {};
  const name = (f.name ?? "").trim();
  const phone = (f.phone ?? "").replace(/[\s()-]/g, "");
  const email = (f.email ?? "").trim();
  if (name.length < 2 || name.length > 100) e.name = "Please enter your full name.";
  if (!/^\+?\d{10,13}$/.test(phone)) e.phone = "Please enter a valid phone number.";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) e.email = "Please enter a valid email address.";
  if (!TYPES.includes(f.type ?? "")) e.type = "Please choose a project type.";
  if ((f.location ?? "").length > 160) e.location = "Please shorten the location.";
  if ((f.scope ?? "").length > 160) e.scope = "Please choose a requirement.";
  if ((f.message ?? "").length > 3000) e.message = "Please keep the message under 3000 characters.";
  return e;
}

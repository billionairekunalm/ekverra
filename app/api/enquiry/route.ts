import { validate, type Enquiry } from "@/lib/enquiry";

/**
 * Sends enquiries by email through Resend (https://resend.com) — plain fetch, no SDK.
 * Configure in the deployment environment:
 *   RESEND_API_KEY   API key from Resend
 *   ENQUIRY_TO       inbox that receives enquiries (e.g. the company Gmail)
 *   ENQUIRY_FROM     verified sender, e.g. "Ekveera Website <enquiries@yourdomain.com>"
 * Without them the route answers 503 and the form offers WhatsApp / email hand-off instead.
 */
export async function POST(req: Request) {
  let f: Partial<Enquiry>;
  try {
    f = await req.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }
  if (f.website) return Response.json({ ok: true }); // honeypot: silently drop bots

  const errors = validate(f);
  if (Object.keys(errors).length) return Response.json({ error: "invalid", errors }, { status: 422 });

  const { RESEND_API_KEY: key, ENQUIRY_TO: to, ENQUIRY_FROM: from } = process.env;
  if (!key || !to || !from) return Response.json({ error: "not_configured" }, { status: 503 });

  const esc = (s = "") => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
  const rows: [string, string | undefined][] = [
    ["Name", f.name], ["Phone", f.phone], ["Email", f.email], ["Project type", f.type],
    ["Location", f.location], ["Requirement", f.scope], ["Message", f.message],
  ];
  const html = `<h2>New project enquiry</h2><table cellpadding="6">${rows
    .filter(([, v]) => v)
    .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${esc(v).replace(/\n/g, "<br>")}</td></tr>`)
    .join("")}</table>`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: f.email || undefined, subject: `Project enquiry — ${f.name} (${f.type})`, html }),
  });
  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}

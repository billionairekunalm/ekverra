"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { company } from "@/lib/content";
import { validate, type Enquiry } from "@/lib/enquiry";

const empty: Enquiry = { name: "", phone: "", email: "", type: "", location: "", scope: "", message: "", website: "" };
type Status = "idle" | "sending" | "sent" | "fallback" | "error";

const summary = (f: Enquiry) =>
  [`Project enquiry — ${f.name}`, `Phone: ${f.phone}`, f.email && `Email: ${f.email}`, `Project type: ${f.type}`, f.location && `Location: ${f.location}`, f.scope && `Requirement: ${f.scope}`, f.message && `\n${f.message}`]
    .filter(Boolean)
    .join("\n");

export default function Contact() {
  const [f, setF] = useState<Enquiry>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Enquiry, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const set = (k: keyof Enquiry) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setF({ ...f, [k]: e.target.value });
    if (errors[k]) setErrors({ ...errors, [k]: undefined });
  };

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(f);
    setErrors(errs);
    if (Object.keys(errs).length) {
      (e.currentTarget.querySelector(`[name="${Object.keys(errs)[0]}"]`) as HTMLElement | null)?.focus();
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      if (res.ok) { setStatus("sent"); setF(empty); }
      else if (res.status === 503) setStatus("fallback"); // email delivery not configured on the server yet
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const text = encodeURIComponent(summary(f));
  const field = (k: keyof Enquiry, label: string, req: boolean, input: React.ReactNode, full = false) => (
    <div className={`field${full ? " field--full" : ""}`} data-invalid={!!errors[k]}>
      <label htmlFor={`f-${k}`}>{label} {req && <i aria-hidden>*</i>}</label>
      {input}
      <span className="bar" aria-hidden />
      {errors[k] && <span id={`e-${k}`} className="field__err" role="alert">{errors[k]}</span>}
    </div>
  );
  const a11y = (k: keyof Enquiry) => ({ id: `f-${k}`, name: k, value: f[k], onChange: set(k), "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `e-${k}` : undefined });

  return (
    <section id="contact" className="contact sec" aria-labelledby="contact-title">
      <div className="wrap contact__grid">
        <div>
          <p className="eyebrow" data-reveal><b>06</b>&nbsp; Contact</p>
          <h2 id="contact-title" className="h2" data-split>
            <span className="ln"><span>Let&rsquo;s Build Something</span></span>
            <span className="ln"><span><em>Exceptional.</em></span></span>
          </h2>
          <p className="lead" data-reveal>
            Have a residential, commercial or turnkey construction project in mind? Connect with Ekveera Infra Projects LLP to discuss your requirements.
          </p>

          <dl className="contact__details" data-reveal>
            <div className="cd"><dt>Director</dt><dd>{company.director}<small>{company.name}</small></dd></div>
            <div className="cd"><dt>Phone</dt><dd><a className="link-u" href={company.phoneHref}>{company.phone}</a></dd></div>
            <div className="cd"><dt>Email</dt><dd><a className="link-u" href={`mailto:${company.email}`}>{company.email}</a></dd></div>
            <div className="cd"><dt>Office</dt><dd><a href={company.maps} target="_blank" rel="noopener noreferrer">{company.address[0]}<br />{company.address[1]}</a></dd></div>
          </dl>
          <div className="contact__quick" data-reveal>
            <a className="btn btn--line" href={company.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Us <ArrowRight aria-hidden /></a>
            <a className="btn btn--line" href={company.phoneHref}>Call Now</a>
          </div>
        </div>

        <form className="form" onSubmit={submit} noValidate data-reveal aria-describedby="form-note">
          <h3 className="h3">Project Enquiry</h3>
          <p>Share a few details and we&rsquo;ll get back to you to discuss your project.</p>

          <div className="form__grid">
            {field("name", "Full name", true, <input {...a11y("name")} autoComplete="name" />)}
            {field("phone", "Phone number", true, <input {...a11y("phone")} type="tel" inputMode="tel" autoComplete="tel" />)}
            {field("email", "Email address", false, <input {...a11y("email")} type="email" autoComplete="email" />)}
            {field("type", "Project type", true,
              <select {...a11y("type")}>
                <option value="">Select…</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Turnkey</option>
                <option>Other</option>
              </select>)}
            {field("location", "Project location", false, <input {...a11y("location")} placeholder="e.g. Chinchwad, Pune" />)}
            {field("scope", "Approximate requirement", false,
              <select {...a11y("scope")}>
                <option value="">Select…</option>
                <option>Complete construction — groundwork to handover</option>
                <option>Foundation &amp; structure</option>
                <option>Architectural finishes</option>
                <option>Services &amp; systems</option>
                <option>Facade, amenities &amp; handover</option>
                <option>Not sure yet</option>
              </select>)}
            {field("message", "Message", false, <textarea {...a11y("message")} rows={4} placeholder="Plot size, building type, timelines or anything else we should know" />, true)}
            <div className="hp" aria-hidden>
              <label htmlFor="f-website">Website</label>
              <input id="f-website" name="website" tabIndex={-1} autoComplete="off" value={f.website} onChange={set("website")} />
            </div>
          </div>

          <div className="form__foot">
            <small id="form-note">Fields marked * are required. Your details are used only to respond to this enquiry.</small>
            <button className="btn btn--gold" type="submit" disabled={status === "sending"}>
              {status === "sending" ? <>Sending <span className="spin" aria-hidden /></> : <>Send Enquiry <ArrowRight aria-hidden /></>}
            </button>
          </div>

          <div aria-live="polite">
            {status === "sent" && (
              <div className="notice notice--ok"><b>Thank you.</b>Your enquiry has been sent. We&rsquo;ll be in touch shortly.</div>
            )}
            {(status === "fallback" || status === "error") && (
              <div className={`notice ${status === "error" ? "notice--err" : ""}`}>
                <b>{status === "error" ? "Your enquiry could not be sent." : "Almost there."}</b>
                {status === "error"
                  ? "Something went wrong on our side. Please send it directly — your details are already filled in:"
                  : "Online delivery is not available right now. Send your enquiry directly — your details are already filled in:"}
                <div className="row">
                  <a className="btn btn--gold" href={`${company.whatsapp}?text=${text}`} target="_blank" rel="noopener noreferrer">Send via WhatsApp</a>
                  <a className="btn btn--line" href={`mailto:${company.email}?subject=${encodeURIComponent("Project enquiry — " + f.name)}&body=${text}`}>Send via Email</a>
                </div>
              </div>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

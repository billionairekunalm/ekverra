import Image from "next/image";
import { company, groups, nav } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot__top">
          <Image className="foot__logo" src="/img/logo.png" alt="Ekveera Infra Projects LLP — Luxury in Every Structure" width={900} height={875} sizes="290px" />
          <div>
            <p className="foot__statement">Luxury in <em>Every Structure.</em></p>
            <div className="foot__cols">
              <div>
                <h4>Navigate</h4>
                <ul>
                  {nav.map((n) => <li key={n.href}><a href={n.href}>{n.label}</a></li>)}
                </ul>
              </div>
              <div>
                <h4>Services</h4>
                <ul className="foot__svc">
                  {groups.map((g) => <li key={g.key}><a href={`#group-${g.key}`}>{g.title}</a></li>)}
                  <li><a href="#services">All 16 services</a></li>
                </ul>
              </div>
              <div>
                <h4>Contact</h4>
                <ul>
                  <li>{company.director}, {company.role}</li>
                  <li><a href={company.phoneHref}>{company.phone}</a></li>
                  <li><a href={`mailto:${company.email}`} style={{ wordBreak: "break-word" }}>{company.email}</a></li>
                  <li>{company.address[0]} {company.address[1]}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="foot__rule" />
        <div className="foot__base">
          <span>© {new Date().getFullYear()} {company.name}. All rights reserved.</span>
          <span>Scope, specifications, quantities and terms are subject to project quotation.</span>
        </div>
      </div>
      <p className="foot__word" aria-hidden>EKVEERA</p>
    </footer>
  );
}

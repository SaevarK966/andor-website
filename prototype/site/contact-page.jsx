const NS = window.AndOrDesignSystem_fefdfe || {};
const { Icon, IconChip, Input, Button, Card } = NS;
const PageHead = (props) => (window.AndOrWebsite.PageHead)(props);

// [icon, [isLabel, enLabel], value, href]
const CONTACTS = [
  ["phone", ["Sími", "Phone"], "840-8168", "tel:+3548408168"],
  ["mail", ["Netfang", "Email"], "andor@andor.is", "mailto:andor@andor.is"],
  ["pin", ["Heimilisfang", "Address"], "Glerárgata 32, 600 Akureyri", "https://maps.google.com/?q=Glerárgata+32,+600+Akureyri"],
];

function ContactPage() {
  const [sent, setSent] = React.useState(false);
  return (
    <div>
      <PageHead
        tag={L("Hafa samband", "Contact")}
        title={L("Vinnum saman að betri lausnum", "Let's build better solutions together")}
        intro={L("Hafðu samband fyrir frekari upplýsingar eða tilboð.", "Get in touch for more information or a quote.")}
      />
      <section style={{ padding: "70px 20px" }}>
        <div className="contact-layout" style={{ maxWidth: "var(--container)", margin: "0 auto", display: "grid", gap: 40, gridTemplateColumns: "1fr 1.15fr", alignItems: "stretch" }}>
          {/* Contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            {CONTACTS.map(([icon, lbl, val, href]) => (
              <Card key={lbl[0]} interactive={!!href} href={href || undefined} padding="22px 24px" style={{ display: "flex", alignItems: "center", gap: 18, flex: 1 }}>
                <IconChip size={52}><Icon name={icon} /></IconChip>
                <div style={{ textAlign: "left" }}>
                  <div style={{ color: "var(--text-muted)", fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 4 }}>{L(lbl[0], lbl[1])}</div>
                  <div style={{ fontWeight: 600, color: "var(--text-strong)", fontSize: "1.05rem" }}>{val}</div>
                </div>
              </Card>
            ))}
          </div>

          {/* Form */}
          <Card padding="32px" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                <IconChip size={56} style={{ margin: "0 auto 16px" }}><Icon name="check" size={30} /></IconChip>
                <h3 style={{ color: "var(--text-strong)", marginBottom: 8 }}>{L("Takk fyrir!", "Thank you!")}</h3>
                <p style={{ color: "var(--text-muted)", margin: 0 }}>{L("Við höfum samband við þig fljótlega.", "We'll be in touch soon.")}</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <Input label={L("Nafn", "Name")} placeholder={L("Nafnið þitt", "Your name")} required />
                <Input label={L("Netfang", "Email")} type="email" placeholder={L("nafn@example.is", "name@example.com")} required />
                <Input label={L("Sími", "Phone")} type="tel" placeholder={L("Símanúmer (valfrjálst)", "Phone number (optional)")} />
                <Input label={L("Skilaboð", "Message")} as="textarea" placeholder={L("Segðu okkur frá verkefninu…", "Tell us about your project…")} required />
                <Button type="submit">{L("Senda fyrirspurn", "Send enquiry")}</Button>
              </form>
            )}
          </Card>
        </div>
      </section>
    </div>
  );
}

Object.assign((window.AndOrWebsite = window.AndOrWebsite || {}), { ContactPage });

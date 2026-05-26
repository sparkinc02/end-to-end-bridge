import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Plane,
  Ship,
  Truck,
  Warehouse,
  PackageCheck,
  MapPin,
  Mail,
  Phone,
  Globe,
  Clock,
  Check,
  Menu,
  X,
  Linkedin,
  Facebook,
  Instagram,
  ShoppingBag,
  HeartPulse,
  Car,
  Cpu,
  Factory,
  Wheat,
} from "lucide-react";
import { KargoLogo } from "@/components/KargoLogo";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Kargobridge Logistics PVT LTD — A Bridge to Connect Ends" },
      {
        name: "description",
        content:
          "Global freight & logistics partner: air, ocean, road, rail, warehousing and customs clearance. End-to-end supply chain solutions.",
      },
      { property: "og:title", content: "Kargobridge Logistics PVT LTD" },
      {
        property: "og:description",
        content: "Your global logistics partner for end-to-end freight solutions.",
      },
    ],
  }),
});

const nav = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#industries", label: "Industries" },
  { href: "#why-us", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    icon: Plane,
    title: "Air Freight",
    desc: "Swift, secure, and on-time air cargo solutions for urgent and high-value shipments. Competitive rates, priority booking, and real-time tracking.",
  },
  {
    icon: Ship,
    title: "Ocean Freight",
    desc: "FCL and LCL shipments with flexible sailing schedules, global routing, and optimized transit times. We manage all documentation and customs protocols.",
  },
  {
    icon: Truck,
    title: "Road & Rail Transport",
    desc: "Reliable last-mile and long-haul transportation across borders. GPS-tracked vehicles, route optimization, and secure delivery.",
  },
  {
    icon: Warehouse,
    title: "Warehousing & Distribution",
    desc: "Strategically located, temperature-controlled warehouses with inventory management, cross-docking, and fulfillment services.",
  },
  {
    icon: PackageCheck,
    title: "Customs Clearance",
    desc: "Hassle-free import/export compliance and documentation. In-house experts ensure fast customs approvals and minimized delays.",
  },
];

const industries = [
  { icon: ShoppingBag, label: "Retail & E-commerce" },
  { icon: HeartPulse, label: "Pharmaceuticals & Healthcare" },
  { icon: Car, label: "Automotive" },
  { icon: Cpu, label: "Consumer Electronics" },
  { icon: Factory, label: "Industrial Manufacturing" },
  { icon: Wheat, label: "Agriculture & Food" },
];

const reasons = [
  "Global Coverage with Local Expertise",
  "Real-Time Visibility through digital tracking systems",
  "Customized Solutions for complex supply chains",
  "Sustainability Focused, reducing carbon impact",
  "Dedicated Account Managers for personalized support",
];

const stats = [
  { num: 50, suffix: "+", label: "Countries Served" },
  { num: 200, suffix: "+", label: "Trusted Global Partners" },
  { num: 1000, suffix: "+", label: "Shipments Monthly" },
  { num: 24, suffix: "/7", label: "Shipment Monitoring" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      const ids = nav.map((n) => n.href.slice(1));
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVBAR */}
      <header
        className={`sticky top-0 z-50 bg-background/85 backdrop-blur transition-all ${
          scrolled ? "border-b border-border shadow-sm" : "border-b border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3 text-primary">
            <KargoLogo size={38} />
            <span className="font-serif text-xl tracking-[0.18em] text-foreground">
              KARGOBRIDGE
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm tracking-wide transition-colors hover:text-primary ${
                  active === n.href.slice(1)
                    ? "text-primary font-medium"
                    : "text-muted-foreground"
                }`}
              >
                {n.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-dark"
            >
              Get a Quote
            </a>
          </nav>
          <button
            className="md:hidden text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {open && (
          <div className="border-t border-border bg-background md:hidden">
            <div className="flex flex-col gap-1 px-6 py-4">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-foreground"
                >
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <div className="mx-auto mb-10 inline-flex text-primary animate-fade-up">
            <KargoLogo size={140} />
          </div>
          <h1 className="font-serif text-4xl leading-tight text-foreground md:text-6xl animate-fade-up">
            Your Global Logistics Partner for End-to-End Freight Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg animate-fade-up">
            At Kargobridge Logistics, we simplify the complexity of global trade. Whether
            you're a growing e-commerce brand or a multinational corporation, we bridge
            the gap between your business and the world's markets with reliable,
            cost-effective, and customized logistics services.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#services"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
            >
              Explore Our Services
            </a>
            <a
              href="#contact"
              className="rounded-md border border-primary px-6 py-3 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground"
            >
              Contact Us
            </a>
          </div>
          <p className="mt-10 font-serif text-lg italic text-muted-foreground">
            A Bridge to connect ends
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-serif text-4xl text-primary md:text-5xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">What We Offer</p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Comprehensive Logistics Services Designed for Your Business
          </h2>
        </div>
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-lg border-t-2 border-primary bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent text-primary">
                <s.icon size={24} />
              </div>
              <h3 className="mt-5 font-serif text-xl text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-card border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm uppercase tracking-[0.25em] text-primary">Sectors</p>
            <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
              Industries We Serve
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3">
            {industries.map((i) => (
              <div
                key={i.label}
                className="flex items-center gap-4 rounded-md border border-border bg-background px-5 py-5 transition-colors hover:border-primary"
              >
                <div className="text-primary">
                  <i.icon size={22} />
                </div>
                <span className="text-sm font-medium text-foreground">{i.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why-us" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Why Kargobridge?
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Efficiency. Reliability. Innovation.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {reasons.map((r) => (
            <div
              key={r}
              className="flex items-start gap-4 rounded-lg bg-card p-6 shadow-sm"
            >
              <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check size={16} strokeWidth={3} />
              </div>
              <p className="text-base text-foreground">{r}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER CTA */}
      <section className="bg-accent">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center">
          <h2 className="font-serif text-3xl text-foreground md:text-5xl">
            Partner With Us
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground md:text-lg">
            Kargobridge is more than a logistics provider — we're your long-term growth
            partner. Whether you need a single freight shipment or a fully outsourced
            supply chain solution, we're ready to deliver. Let's move forward, together.
          </p>
          <a
            href="#contact"
            className="mt-10 inline-block rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-sm transition-all hover:bg-primary-dark hover:shadow-md"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary">
            Get in Touch
          </p>
          <h2 className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
            Contact Us
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-xl bg-card p-8 shadow-sm md:p-12">
          <div className="grid gap-6 md:grid-cols-2">
            <ContactRow
              icon={<MapPin size={20} />}
              label="Address"
              value="NO 21 North Tank Street, Muthamizh Nagar Kadaperi, Tambaram – 600045"
            />
            <ContactRow
              icon={<Mail size={20} />}
              label="Email"
              value="murugan.s@kargobridge.com"
              href="mailto:murugan.s@kargobridge.com"
            />
            <ContactRow
              icon={<Phone size={20} />}
              label="Phone"
              value="9080054221"
              href="tel:9080054221"
            />
            <ContactRow
              icon={<Globe size={20} />}
              label="Website"
              value="www.Kargobridge.com"
              href="https://www.Kargobridge.com"
            />
            <ContactRow
              icon={<Clock size={20} />}
              label="Support"
              value="24/7 Customer Assistance"
            />
          </div>
          <div className="mt-10 flex items-center justify-center gap-4 border-t border-border pt-8">
            <SocialIcon href="#"><Linkedin size={18} /></SocialIcon>
            <SocialIcon href="#"><Facebook size={18} /></SocialIcon>
            <SocialIcon href="#"><Instagram size={18} /></SocialIcon>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-footer text-footer-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3 text-primary">
              <KargoLogo size={40} />
              <span className="font-serif text-lg tracking-[0.15em] text-footer-foreground">
                KARGOBRIDGE
              </span>
            </div>
            <p className="mt-4 text-sm text-footer-foreground/70">
              KARGOBRIDGE LOGISTICS PVT LTD
            </p>
            <p className="mt-1 font-serif italic text-footer-foreground/70">
              A Bridge to connect ends
            </p>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-primary">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-2 text-sm text-footer-foreground/70">
              <li>murugan.s@kargobridge.com</li>
              <li>9080054221</li>
              <li>Tambaram – 600045, India</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-6 text-center text-xs text-footer-foreground/60">
            © 2025 Kargobridge Logistics PVT LTD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

function ContactRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <>
      <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent text-primary">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="mt-1 text-sm text-foreground">{value}</div>
      </div>
    </>
  );
  return href ? (
    <a href={href} className="flex items-start gap-4 transition-opacity hover:opacity-80">
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-4">{content}</div>
  );
}

function SocialIcon({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-primary text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
    >
      {children}
    </a>
  );
}

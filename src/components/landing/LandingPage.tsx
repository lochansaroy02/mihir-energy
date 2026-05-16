import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";
import {
  ArrowRight,
  Award,
  Check,
  Facebook,
  Globe,
  Headphones,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  ShieldHalf,
  Star,
  SunMedium,
  TrendingUp,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
} as const;

function Logo({ light = false }: { light?: boolean }) {
  const text = light ? "text-white" : "text-[#0B3D91]";
  return (
    <a href="#home" className="flex items-center gap-2.5 group">
      <div className="relative w-10 h-10 rounded-xl brand-gradient flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:scale-105 transition-transform">
        {/* sun rays */}
        <svg viewBox="0 0 40 40" className="absolute inset-0 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <line
              key={i}
              x1="20"
              y1="3"
              x2="20"
              y2="7"
              stroke="#FCD34D"
              strokeWidth="1.6"
              strokeLinecap="round"
              transform={`rotate(${i * 45} 20 20)`}
            />
          ))}
        </svg>
        <span className="relative font-extrabold text-white text-sm tracking-tight">MS</span>
      </div>
      <div className="leading-tight">
        <div className={`font-extrabold tracking-tight text-[15px] ${text}`}>MIHIR SAROY</div>
        <div className={`text-[10px] font-medium tracking-[0.18em] ${light ? "text-blue-200" : "text-[#1976D2]"}`}>
          SOLAR ENERGY
        </div>
      </div>
    </a>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#why", label: "Why Us" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_-8px_rgba(11,61,145,0.15)]" : "bg-white/70 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8 h-18 py-3 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#111111] hover:text-[#1976D2] transition-colors relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1976D2] group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 brand-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105 transition-all"
          >
            Get Free Quote <ArrowRight className="w-4 h-4" />
          </a>
          <button
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center text-[#0B3D91]"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm font-semibold text-[#111111] hover:text-[#1976D2]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex justify-center brand-gradient text-white font-semibold text-sm px-5 py-2.5 rounded-full"
            >
              Get Free Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function SolarPanelIllustration() {
  return (
    <div className="relative w-full max-w-md aspect-square mx-auto">
      {/* Sun */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-4 -right-4 w-44 h-44"
      >
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-yellow-300 to-amber-400 shadow-[0_0_80px_30px_rgba(252,211,77,0.4)]" />
        <svg viewBox="0 0 200 200" className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.line
              key={i}
              x1="100"
              y1="20"
              x2="100"
              y2="40"
              stroke="#FCD34D"
              strokeWidth="3"
              strokeLinecap="round"
              transform={`rotate(${i * 30} 100 100)`}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2.5, delay: i * 0.1, repeat: Infinity }}
            />
          ))}
        </svg>
      </motion.div>

      {/* Solar panel */}
      <motion.div
        initial={{ y: 40, opacity: 0, rotateX: 20 }}
        animate={{ y: 0, opacity: 1, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-8 left-0 right-0 mx-auto w-full max-w-sm"
        style={{ perspective: "800px" }}
      >
        <div
          className="relative rounded-2xl p-3 shadow-2xl"
          style={{
            background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #0c1e4f 100%)",
            transform: "rotateX(28deg)",
          }}
        >
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="aspect-square rounded-sm border border-blue-300/30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(96,165,250,0.5) 0%, rgba(30,64,175,0.9) 100%)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 3, delay: i * 0.08, repeat: Infinity }}
              />
            ))}
          </div>
        </div>
        <div className="mx-auto w-2 h-16 bg-gradient-to-b from-slate-400 to-slate-600 rounded-b" />
      </motion.div>

      {/* Floating particles */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-yellow-300/60"
          style={{
            left: `${15 + i * 13}%`,
            top: `${20 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: i * 0.3 }}
        />
      ))}
    </div>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden brand-gradient text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
            Trusted Solar Energy Partner
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-extrabold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            POWERING A<br />
            <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-amber-300 bg-clip-text text-transparent">
              SUSTAINABLE
            </span>{" "}
            FUTURE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg text-blue-100 max-w-xl leading-relaxed"
          >
            Clean Energy <span className="text-yellow-300">·</span> Brighter Future{" "}
            <span className="text-yellow-300">·</span> Go Solar, Save Energy, Save Tomorrow.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-white text-[#0B3D91] font-bold px-7 py-3.5 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Get Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-2 border-white/80 text-white font-bold px-7 py-3.5 rounded-full hover:bg-white hover:text-[#0B3D91] transition-all"
            >
              View Our Services
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="hidden lg:block"
        >
          <SolarPanelIllustration />
        </motion.div>
      </div>
    </section>
  );
}

function MissionStrip() {
  return (
    <section className="brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-5xl mx-auto px-5 py-10 flex items-center gap-5 text-white"
      >
        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center">
          <Leaf className="w-7 h-7 text-yellow-300" />
        </div>
        <p className="text-center md:text-left text-base md:text-lg font-medium leading-relaxed">
          To deliver sustainable solar energy solutions with quality, reliability and innovation,
          empowering a greener tomorrow.
        </p>
      </motion.div>
    </section>
  );
}

const services = [
  {
    icon: SunMedium,
    title: "Solar Solutions",
    desc: "End-to-end residential, commercial & industrial solar systems tailored to your energy needs.",
  },
  {
    icon: Wrench,
    title: "Installation & Maintenance",
    desc: "Expert installation, periodic servicing and round-the-clock maintenance for peak output.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    desc: "Tier-1 components, certified processes and rigorous safety standards on every project.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    desc: "Smart monitoring, performance tuning and audits that maximise every kilowatt generated.",
  },
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Dedicated support team available 24×7 to answer questions and resolve issues fast.",
  },
];

function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block text-xs font-bold tracking-[0.25em] text-[#1976D2] uppercase mb-3">
            What We Offer
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Complete Solar <span className="text-[#1976D2]">Services</span>
          </h2>
          <p className="mt-4 text-gray-600">
            From consultation to commissioning and beyond, we handle every step of your solar journey.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/15 hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-0 left-6 right-6 h-1 rounded-b brand-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="w-14 h-14 rounded-xl bg-blue-50 group-hover:brand-gradient flex items-center justify-center transition-all">
                  <Icon className="w-7 h-7 text-[#1976D2] group-hover:text-white transition-colors" />
                </div>
                <h3 className="mt-5 font-bold text-lg text-[#111111]">{s.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const pillars = [
  { icon: Leaf, title: "SUSTAINABLE", tag: "Committed to a clean and green future." },
  { icon: ShieldHalf, title: "RELIABLE", tag: "Quality you can trust, performance that lasts." },
  { icon: Users, title: "CUSTOMER FOCUSED", tag: "Building lasting relationships through service excellence." },
  { icon: TrendingUp, title: "INNOVATIVE", tag: "Smart solutions for a better tomorrow." },
  { icon: Award, title: "PROFESSIONAL", tag: "Experienced team, professional approach." },
];

function WhyUs() {
  return (
    <section id="why" className="py-24 bg-[#F2F4F7] relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block text-xs font-bold tracking-[0.25em] text-[#1976D2] uppercase mb-3">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Built on <span className="text-[#1976D2]">Five Pillars</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center bg-white/60 backdrop-blur-md rounded-2xl p-6 border border-white shadow-sm hover:shadow-xl hover:shadow-blue-500/10 transition-all"
              >
                <div className="mx-auto w-16 h-16 rounded-2xl brand-gradient flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="mt-5 font-extrabold text-sm text-[#0B3D91] tracking-wider">{p.title}</h3>
                <p className="mt-2 text-xs text-gray-600 leading-relaxed">{p.tag}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Counter({ end, suffix = "" }: { end: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (latest) => Math.floor(latest));
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, end, { duration: 2.2, ease: "easeOut" });
    const unsub = rounded.on("change", (v) => setVal(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, end, mv, rounded]);

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Free Consultation", desc: "Tell us your needs — we'll analyze your space, usage and savings potential." },
    { n: "02", title: "Custom Design & Installation", desc: "Engineered system design, premium components, installed by certified pros." },
    { n: "03", title: "Support & Maintenance", desc: "Ongoing monitoring, servicing and 24/7 support to keep you producing power." },
  ];
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block text-xs font-bold tracking-[0.25em] text-[#1976D2] uppercase mb-3">
            How It Works
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Three Simple <span className="text-[#1976D2]">Steps</span>
          </h2>
        </motion.div>

        <div className="mt-16 relative grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="mx-auto w-20 h-20 rounded-full brand-gradient text-white font-extrabold text-2xl flex items-center justify-center shadow-xl shadow-blue-500/30 relative z-10 ring-8 ring-white">
                {s.n}
              </div>
              <h3 className="mt-6 font-bold text-xl text-[#111111]">{s.title}</h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Rajesh Patel",
    role: "Homeowner, Surat",
    quote:
      "Switching to solar with Mihir Saroy cut our electricity bill by 80%. The team was professional from day one — couldn't recommend them more.",
  },
  {
    name: "Priya Sharma",
    role: "Factory Owner, Ahmedabad",
    quote:
      "They installed a 200kW rooftop system for our plant. Flawless execution, on time, and the support has been outstanding.",
  },
  {
    name: "Anil Mehta",
    role: "Builder, Vadodara",
    quote:
      "Reliable, innovative and genuinely customer focused. Mihir Saroy is now our preferred solar partner for every project.",
  },
];

function Testimonials() {
  return (
    <section className="py-24 bg-blue-50/60">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-block text-xs font-bold tracking-[0.25em] text-[#1976D2] uppercase mb-3">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#111111] tracking-tight">
            Trusted by <span className="text-[#1976D2]">Hundreds</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-7 shadow-md hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-white"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed text-sm">"{t.quote}"</p>
              <div className="mt-6 pt-5 border-t border-gray-100">
                <div className="font-bold text-[#0B3D91]">{t.name}</div>
                <div className="text-xs text-gray-500">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="contact" className="py-20 brand-gradient relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-yellow-300/10 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-blue-300/20 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative max-w-4xl mx-auto px-5 text-center text-white"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Ready to Switch to <span className="text-yellow-300">Solar Energy?</span>
        </h2>
        <p className="mt-5 text-base md:text-lg text-blue-100 max-w-2xl mx-auto">
          Get a free site visit and customized proposal today.
        </p>
        <a
          href="https://wa.me/+918910458420?text=Hi%2C%20I%27d%20like%20a%20free%20solar%20consultation."
          className="mt-9 inline-flex items-center gap-2 bg-white text-[#0B3D91] font-bold px-8 py-4 rounded-full shadow-2xl hover:scale-105 hover:shadow-[0_20px_50px_-10px_rgba(252,211,77,0.5)] transition-all"
        >
          Book Free Consultation <ArrowRight className="w-5 h-5" />
        </a>
        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100">
          {["No upfront cost", "Free site survey", "25-year warranty"].map((b) => (
            <span key={b} className="inline-flex items-center gap-1.5">
              <Check className="w-4 h-4 text-yellow-300" /> {b}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#06173D] text-blue-100 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[200px] rounded-full bg-blue-600/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <Logo light />
          <p className="mt-5 text-sm text-blue-200/80 leading-relaxed">
            Powering a Sustainable Future with clean, reliable solar energy solutions for homes and businesses.
          </p>
          <div className="mt-5 flex gap-3">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1976D2] hover:border-[#1976D2] transition-all"
                aria-label="Social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            {["Home", "About", "Why Us", "Testimonials", "Contact"].map((l) => (
              <li key={l}>
                <a href="#" className="text-blue-200/80 hover:text-yellow-300 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Services</h4>
          <ul className="space-y-3 text-sm">
            {["Solar Solutions", "Installation", "Maintenance", "Energy Audits", "24/7 Support"].map((l) => (
              <li key={l}>
                <a href="#" className="text-blue-200/80 hover:text-yellow-300 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-5 text-sm tracking-wider uppercase">Contact Info</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 mt-0.5 text-yellow-300 flex-shrink-0" />
              <a href="tel:+911234567890" className="hover:text-yellow-300 transition-colors">
                +91 12345 67890
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Mail className="w-4 h-4 mt-0.5 text-yellow-300 flex-shrink-0" />
              <a href="mailto:info@mihirsaroysolar.com" className="hover:text-yellow-300 transition-colors break-all">
                info@mihirsaroysolar.com
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="w-4 h-4 mt-0.5 text-yellow-300 flex-shrink-0" />
              <span>www.mihirsaroysolar.com</span>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 mt-0.5 text-yellow-300 flex-shrink-0" />
              <span>123, Green Energy Park, Surat, Gujarat - 395001</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-blue-200/60">
        <p>© {new Date().getFullYear()} Mihir Saroy Solar Energy & Services Pvt Ltd. All rights reserved.</p>
        <p>Powering a Sustainable Future</p>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <motion.a
      href="ht  tps://wa.me/911234567890?text=Hi%2C%20I%27d%20like%20a%20free%20solar%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl shadow-green-500/40 hover:scale-110 transition-transform">
        <MessageCircle className="w-7 h-7 fill-white" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white text-[#111111] text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us
      </span>
    </motion.a>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white text-[#111111] antialiased">
      <Navbar />
      <main>
        <Hero />
        <MissionStrip />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
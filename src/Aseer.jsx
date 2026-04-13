import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  BedDouble,
  Bell,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Menu,
  ShieldCheck,
  Sparkles,
  Users,
  Wrench,
  X,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const navItems = ['Features', 'Demo', 'Audience', 'Pricing', 'Contact'];

const statCards = [
  {
    title: 'Streamlined Operations',
    text: 'Automate room allocation, fee collection, staff scheduling, and inventory from one connected dashboard.',
    icon: CalendarCheck2,
  },
  {
    title: 'Enhanced Experience',
    text: 'Give staff and tenants faster communication, smoother service requests, and more transparent billing.',
    icon: Users,
  },
  {
    title: 'Data-Driven Decisions',
    text: 'Use AI-powered analytics, occupancy insights, and performance trends to optimize hostel growth.',
    icon: BarChart3,
  },
];

const problemCards = [
  {
    title: 'Operational Inefficiencies',
    color: 'from-teal-500/20 to-cyan-500/10',
    items: [
      'Manual record-keeping for rooms and fees',
      'Difficult shift coordination across staff',
      'Poor visibility into occupancy and inventory',
    ],
  },
  {
    title: 'Poor Tenant Experience',
    color: 'from-orange-500/20 to-amber-500/10',
    items: [
      'Delayed maintenance and slow complaint handling',
      'Limited transparency in billing and deposits',
      'Friction when requesting services',
    ],
  },
  {
    title: 'Security & Financial Risks',
    color: 'from-rose-500/20 to-orange-500/10',
    items: [
      'Vulnerabilities from physical keys and paper logs',
      'Leakage from manual invoicing and cash handling',
      'Processing errors that create delays',
    ],
  },
];

const featureGroups = [
  {
    title: 'Operations Management',
    icon: BedDouble,
    accent: 'teal',
    items: [
      'Automated room and bed management',
      'Integrated payment tracking',
      'Maintenance request ticketing',
    ],
  },
  {
    title: 'Digital Services',
    icon: CreditCard,
    accent: 'orange',
    items: [
      'Digital check-in and check-out',
      'Communication hub for staff and tenants',
      'Inventory management system',
    ],
  },
  {
    title: 'AI-Powered Innovations',
    icon: Sparkles,
    accent: 'orange',
    items: [
      'AI roommate matching',
      'Predictive maintenance alerts',
      'Optimization and analytics recommendations',
    ],
  },
  {
    title: 'Integrated Security',
    icon: ShieldCheck,
    accent: 'teal',
    items: [
      'Digital or biometric access workflows',
      'Visitor management support',
      'Role-based access control',
    ],
  },
  {
    title: 'Community Building',
    icon: Users,
    accent: 'rose',
    items: [
      'Events and interest groups for residents',
      'Announcements and hostel community updates',
      'A more connected tenant experience',
    ],
  },
  {
    title: 'Real-Time Notifications',
    icon: Bell,
    accent: 'blue',
    items: [
      'Service and ticket updates',
      'Billing reminders and check-in alerts',
      'Staff-side action prompts',
    ],
  },
];

const audienceCards = [
  {
    title: 'Hostel Owners & Providers',
    text: 'Track financial performance, occupancy, and asset-level operations with a business-focused command center.',
  },
  {
    title: 'Hostel Managers & Staff',
    text: 'Handle check-ins, room updates, maintenance, and communication with fewer repetitive tasks.',
  },
  {
    title: 'Tenants',
    text: 'Enjoy transparent billing, easy service requests, improved safety workflows, and a more connected stay.',
  },
];

const revenuePlans = [
  {
    name: 'Basic',
    price: 'Rs. 800',
    rooms: 'Up to 10 rooms',
    features: ['Essential hostel operations', 'Basic reporting', 'Core check-in workflows'],
  },
  {
    name: 'Standard',
    price: 'Rs. 1600',
    rooms: 'Up to 50 rooms',
    features: ['Additional modules', 'Improved automation', 'Communication features'],
    highlighted: true,
  },
  {
    name: 'Premium',
    price: 'Rs. 2400',
    rooms: 'Up to 100 rooms',
    features: ['Advanced analytics', 'Priority support', 'Expanded admin controls'],
  },
];

const roadmap = [
  { title: 'Planning & Development', time: '6 weeks' },
  { title: 'Testing & Training', time: '3 weeks' },
  { title: 'Pilot Launch', time: '4 weeks' },
  { title: 'Full Deployment', time: 'Ongoing' },
];

const chartData = [
  { year: '2024', value: 1.5 },
  { year: '2026', value: 2.2 },
  { year: '2028', value: 3.0 },
  { year: '2030', value: 3.5 },
  { year: '2032', value: 4.06 },
];

function GlowCard({ children, className = '' }) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_80px_rgba(2,12,27,0.45)] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="max-w-3xl space-y-3">
      <div className="inline-flex rounded-full border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-teal-200">
        {eyebrow}
      </div>
      <h2 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-sm leading-7 text-slate-300 md:text-base">{text}</p>
    </div>
  );
}

function AccentPill({ children, color = 'teal' }) {
  const styles = {
    teal: 'border-teal-400/30 bg-teal-400/10 text-teal-100',
    orange: 'border-orange-400/30 bg-orange-400/10 text-orange-100',
    rose: 'border-rose-400/30 bg-rose-400/10 text-rose-100',
    blue: 'border-cyan-400/30 bg-cyan-400/10 text-cyan-100',
  };

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${styles[color] || styles.teal}`}>
      {children}
    </span>
  );
}

export default function SmartHostelLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDemo, setActiveDemo] = useState('dashboard');

  const demoContent = useMemo(
    () => ({
      dashboard: {
        title: 'Operations Dashboard',
        text: 'A single control panel for occupancy, payments, alerts, and maintenance visibility.',
      },
      residents: {
        title: 'Tenant & Community View',
        text: 'A resident-facing portal for service requests, updates, and hostel community engagement.',
      },
      analytics: {
        title: 'Analytics & Optimization',
        text: 'AI-backed trends for occupancy forecasting, operational planning, and pricing guidance.',
      },
    }),
    []
  );

  return (
    <div className="min-h-screen bg-[#07131f] text-white">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(44,210,192,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(255,153,66,0.14),transparent_24%),linear-gradient(180deg,#06111a_0%,#0a1624_55%,#07111b_100%)]" />
        <div className="absolute left-0 right-0 top-0 h-full opacity-[0.16] [background-image:linear-gradient(rgba(67,201,190,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(67,201,190,0.18)_1px,transparent_1px)] [background-size:90px_90px]" />
        <div className="absolute inset-0 opacity-20 [mask-image:radial-gradient(circle_at_center,black,transparent_72%)]">
          <div className="absolute left-[8%] top-[12%] h-64 w-64 rounded-full bg-teal-400/20 blur-3xl" />
          <div className="absolute right-[12%] top-[18%] h-80 w-80 rounded-full bg-orange-400/20 blur-3xl" />
          <div className="absolute bottom-[12%] left-[28%] h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#07131f]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 shadow-[0_0_28px_rgba(45,212,191,0.45)]">
              <Building2 className="h-6 w-6 text-slate-950" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-white">Smart Hostel</p>
              <p className="text-xs text-slate-400">Management System</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300 transition hover:text-white">
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-teal-300/20 bg-teal-400/10 px-4 py-2 text-sm font-medium text-teal-100 transition hover:bg-teal-400/20"
            >
              Book a Demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <button
            onClick={() => setMenuOpen((s) => !s)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-white/10 px-6 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-slate-300" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-6 pb-16 pt-16 lg:px-8 lg:pb-24 lg:pt-20">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-8"
            >
              <AccentPill>Revolutionizing hostel operations</AccentPill>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  The smart business page for a modern{' '}
                  <span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-orange-200 bg-clip-text text-transparent">
                    Hostel Management System
                  </span>
                </h1>
                <p className="max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
                  Present your software, impress project reviewers, and convert future clients with a polished landing page built around automation, digital services, AI analytics, security, and tenant experience.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_32px_rgba(45,212,191,0.35)] transition hover:scale-[1.01]"
                >
                  Preview Demo
                  <ChevronRight className="h-4 w-4" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact the Team
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <GlowCard className="p-5">
                  <p className="text-2xl font-semibold">4.06B</p>
                  <p className="mt-1 text-sm text-slate-400">Projected market size by 2033</p>
                </GlowCard>
                <GlowCard className="p-5">
                  <p className="text-2xl font-semibold">13.8%</p>
                  <p className="mt-1 text-sm text-slate-400">Projected CAGR</p>
                </GlowCard>
                <GlowCard className="p-5">
                  <p className="text-2xl font-semibold">24/7</p>
                  <p className="mt-1 text-sm text-slate-400">Digital-first hostel operations</p>
                </GlowCard>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-teal-400/20 via-transparent to-orange-400/10 blur-2xl" />
              <GlowCard className="relative overflow-hidden rounded-[2rem] p-4">
                <div className="rounded-[1.6rem] border border-white/10 bg-gradient-to-br from-[#0b1d2e] to-[#08131f] p-4 md:p-5">
                  <div className="mb-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.24em] text-teal-200">Live product preview</p>
                      <p className="mt-1 text-lg font-medium text-white">Smart Hostel Control Center</p>
                    </div>
                    <AccentPill color="orange">Cloud based</AccentPill>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-3xl border border-teal-400/20 bg-teal-400/10 p-4">
                          <p className="text-sm text-teal-100">Occupied Beds</p>
                          <p className="mt-2 text-3xl font-semibold">86%</p>
                          <p className="mt-2 text-xs text-teal-50/80">Real-time occupancy tracking</p>
                        </div>
                        <div className="rounded-3xl border border-orange-400/20 bg-orange-400/10 p-4">
                          <p className="text-sm text-orange-100">Open Tickets</p>
                          <p className="mt-2 text-3xl font-semibold">12</p>
                          <p className="mt-2 text-xs text-orange-50/80">Maintenance and service queue</p>
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium text-white">Market Growth Projection</p>
                            <p className="text-xs text-slate-400">Business opportunity for hostel digitization</p>
                          </div>
                          <AccentPill>Analytics</AccentPill>
                        </div>
                        <div className="h-52 w-full">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                              <defs>
                                <linearGradient id="areaFill" x1="0" y1="0" x2="0" y2="1">
                                  <stop offset="5%" stopColor="rgba(45,212,191,0.9)" />
                                  <stop offset="95%" stopColor="rgba(45,212,191,0.02)" />
                                </linearGradient>
                              </defs>
                              <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                              <XAxis dataKey="year" tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }} axisLine={false} tickLine={false} />
                              <YAxis tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
                              <Tooltip
                                contentStyle={{
                                  background: 'rgba(5, 15, 25, 0.92)',
                                  border: '1px solid rgba(255,255,255,0.1)',
                                  borderRadius: '16px',
                                }}
                              />
                              <Area type="monotone" dataKey="value" stroke="#47d9ca" fillOpacity={1} fill="url(#areaFill)" strokeWidth={3} />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm font-medium text-white">Today’s Priorities</p>
                        <div className="mt-4 space-y-3">
                          {['Approve new check-ins', 'Review roommate recommendations', 'Resolve critical maintenance alert'].map((item) => (
                            <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-teal-300" />
                              <p className="text-sm text-slate-300">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-orange-400/10 to-rose-400/10 p-4">
                        <p className="text-sm font-medium text-white">AI Recommendation</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">
                          Occupancy is trending up. Increase focus on automation and predictive maintenance to support higher room turnover.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
            {statCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <GlowCard className="h-full p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-gradient-to-br from-orange-300 to-amber-500 p-3 text-slate-950 shadow-[0_0_24px_rgba(251,146,60,0.35)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                  </GlowCard>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="features" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <SectionTitle
              eyebrow="Problem to solution"
              title="Built around the exact management challenges hostels face"
              text="From the original presentation, the product direction is clear: reduce manual work, improve tenant experience, strengthen security, and use analytics to make better operational decisions."
            />

            <div className="grid gap-6 lg:grid-cols-3">
              {problemCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                >
                  <GlowCard className={`h-full bg-gradient-to-b ${card.color} p-6`}>
                    <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                    <div className="mt-5 space-y-3">
                      {card.items.map((item) => (
                        <div key={item} className="flex gap-3 text-sm leading-7 text-slate-200">
                          <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-teal-300" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {featureGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <GlowCard className="h-full p-6">
                      <div className="mb-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="rounded-2xl bg-white/5 p-3">
                            <Icon className="h-5 w-5 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                        </div>
                        <AccentPill color={group.accent}>{group.accent}</AccentPill>
                      </div>
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <div key={item} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-3 text-sm text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="demo" className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Interactive preview"
                title="Show the software inside the business website"
                text="Instead of a plain brochure site, this landing page includes a built-in product preview so visitors can feel what the hostel management system actually looks like."
              />
              <div className="space-y-3">
                {[
                  ['dashboard', 'Operations Dashboard'],
                  ['residents', 'Tenant & Community Portal'],
                  ['analytics', 'AI Analytics'],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    onClick={() => setActiveDemo(key)}
                    className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                      activeDemo === key
                        ? 'border-teal-300/30 bg-teal-400/10 text-white'
                        : 'border-white/10 bg-white/[0.03] text-slate-300 hover:bg-white/[0.05]'
                    }`}
                  >
                    <span className="font-medium">{label}</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                ))}
              </div>
            </div>

            <GlowCard className="overflow-hidden p-4">
              <div className="rounded-[1.8rem] border border-white/10 bg-[#0b1825] p-4 md:p-6">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-orange-200">Preview mode</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{demoContent[activeDemo].title}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-300">{demoContent[activeDemo].text}</p>
                  </div>
                  <AccentPill color="orange">Demo</AccentPill>
                </div>

                {activeDemo === 'dashboard' && (
                  <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="space-y-4">
                      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm text-slate-400">Revenue this month</p>
                        <p className="mt-2 text-3xl font-semibold">Rs. 284,000</p>
                        <p className="mt-2 text-xs text-teal-200">+12.6% vs last month</p>
                      </div>
                      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                        <p className="text-sm text-slate-400">Upcoming actions</p>
                        <div className="mt-4 space-y-3 text-sm text-slate-300">
                          <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-teal-300" /> Room reallocation for Block A</div>
                          <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-teal-300" /> Visitor approval queue</div>
                          <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-teal-300" /> Fee reminder batch</div>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-teal-400/15 bg-gradient-to-br from-teal-400/10 to-cyan-400/5 p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          ['Rooms Filled', '172'],
                          ['Pending Requests', '19'],
                          ['Check-ins Today', '11'],
                          ['Staff On Duty', '08'],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-2xl border border-white/10 bg-[#0b1825]/70 p-4">
                            <p className="text-xs text-slate-400">{label}</p>
                            <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'residents' && (
                  <div className="grid gap-4 md:grid-cols-[0.82fr_1.18fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm text-slate-400">Resident menu</p>
                      <div className="mt-4 space-y-3">
                        {['Submit maintenance request', 'View bill and payment status', 'Join hostel events', 'Message management'].map((item) => (
                          <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm text-slate-300">
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-3xl border border-orange-400/15 bg-gradient-to-br from-orange-400/10 to-amber-400/5 p-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl border border-white/10 bg-[#0b1825]/70 p-4">
                          <p className="text-xs text-slate-400">Open Ticket</p>
                          <p className="mt-2 text-lg font-semibold">Water dispenser issue</p>
                          <p className="mt-1 text-sm text-orange-200">In progress</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[#0b1825]/70 p-4">
                          <p className="text-xs text-slate-400">Next Event</p>
                          <p className="mt-2 text-lg font-semibold">Community Movie Night</p>
                          <p className="mt-1 text-sm text-teal-200">Friday, 7:30 PM</p>
                        </div>
                        <div className="rounded-2xl border border-white/10 bg-[#0b1825]/70 p-4 sm:col-span-2">
                          <p className="text-xs text-slate-400">Recent announcement</p>
                          <p className="mt-2 text-sm leading-7 text-slate-300">
                            Laundry room maintenance is scheduled for Saturday morning. Residents are encouraged to use alternate blocks during the service window.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeDemo === 'analytics' && (
                  <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4">
                      <p className="text-sm text-slate-400">Optimization signals</p>
                      <div className="mt-4 space-y-3 text-sm text-slate-300">
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">AI roommate matching improves compatibility suggestions.</div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">Predictive maintenance flags equipment failures before downtime.</div>
                        <div className="rounded-2xl border border-white/8 bg-white/[0.04] p-3">Occupancy forecasting supports better allocation and pricing decisions.</div>
                      </div>
                    </div>
                    <div className="rounded-3xl border border-teal-400/15 bg-gradient-to-br from-teal-400/10 to-cyan-400/5 p-4">
                      <p className="text-sm text-slate-400">Performance trend</p>
                      <div className="mt-4 grid gap-3">
                        {[
                          ['Occupancy Forecast Accuracy', '94%'],
                          ['Maintenance Response Improvement', '31%'],
                          ['Communication Handling Time Reduced', '42%'],
                        ].map(([label, value]) => (
                          <div key={label} className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b1825]/70 px-4 py-3">
                            <span className="text-sm text-slate-300">{label}</span>
                            <span className="text-lg font-semibold text-white">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="audience" className="px-6 py-24 lg:px-8">
                    <div className="mx-auto max-w-7xl space-y-12">
            <SectionTitle
              eyebrow="Target audience"
              title="Designed for owners, managers, staff, and tenants"
              text="The platform serves three core groups from the presentation: hostel owners and providers, operational staff, and tenants who want a safer, smoother, and more transparent living experience."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {audienceCards.map((card, index) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                >
                  <GlowCard className="h-full p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-white/5 p-3">
                      <Users className="h-5 w-5 text-teal-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">{card.text}</p>
                  </GlowCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <SectionTitle
              eyebrow="Revenue model"
              title="Flexible pricing for hostels of different sizes"
              text="Use a subscription structure inspired by the presentation’s business model, with room-based plans and the option to extend revenue through premium features, transaction fees, and partnerships."
            />

            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="grid gap-6 md:grid-cols-3">
                {revenuePlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: index * 0.07 }}
                  >
                    <GlowCard
                      className={`h-full p-6 ${
                        plan.highlighted
                          ? 'border-orange-300/20 bg-gradient-to-b from-orange-400/15 to-transparent'
                          : ''
                      }`}
                    >
                      <AccentPill color={plan.highlighted ? 'orange' : 'teal'}>{plan.name} Plan</AccentPill>
                      <p className="mt-5 text-3xl font-semibold text-white">{plan.price}</p>
                      <p className="mt-2 text-sm text-slate-400">{plan.rooms}</p>

                      <div className="mt-6 space-y-3">
                        {plan.features.map((feature) => (
                          <div key={feature} className="flex gap-3 text-sm text-slate-300">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </GlowCard>
                  </motion.div>
                ))}
              </div>

              <GlowCard className="p-6">
                <h3 className="text-2xl font-semibold text-white">Additional monetization channels</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: 'Transaction Fees',
                      text: 'A small fee on integrated payment processing for rent and hostel services.',
                    },
                    {
                      title: 'Premium Features',
                      text: 'Add-ons such as advanced analytics, role expansion, and specialized integrations.',
                    },
                    {
                      title: 'Partnership Commissions',
                      text: 'Revenue from local service partnerships integrated into the platform experience.',
                    },
                    {
                      title: 'Custom University Packages',
                      text: 'Institution-focused onboarding and deployment models for larger hostel ecosystems.',
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="rounded-3xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <p className="text-lg font-medium text-white">{item.title}</p>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </GlowCard>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-6">
              <SectionTitle
                eyebrow="Market viability"
                title="A strong project concept with visible business potential"
                text="The presentation highlights a growing digital hostel market, a clear technology fit, operational feasibility, and a strong opportunity for scalable student housing solutions."
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <GlowCard className="p-5">
                  <p className="text-4xl font-semibold text-white">4.06B</p>
                  <p className="mt-2 text-sm text-slate-400">Projected market size</p>
                </GlowCard>
                <GlowCard className="p-5">
                  <p className="text-4xl font-semibold text-white">13.8%</p>
                  <p className="mt-2 text-sm text-slate-400">Estimated CAGR</p>
                </GlowCard>
              </div>

              <div className="grid gap-4">
                {[
                  'Growing demand for efficient student housing solutions',
                  'Tech-savvy target users including students and property managers',
                  'Cloud-based architecture for scalability and flexibility',
                  'Mobile-first experience for daily operational access',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal-300" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlowCard className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-teal-200">Growth outlook</p>
                  <h3 className="mt-2 text-2xl font-semibold text-white">Digital hostel market trajectory</h3>
                </div>
                <AccentPill>Investor view</AccentPill>
              </div>

              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="marketFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="rgba(56,189,248,0.85)" />
                        <stop offset="95%" stopColor="rgba(56,189,248,0.03)" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                    <XAxis
                      dataKey="year"
                      tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                    />
                    <YAxis
                      tick={{ fill: 'rgba(226,232,240,0.7)', fontSize: 12 }}
                      axisLine={false}
                      tickLine={false}
                      width={36}
                    />
                    <Tooltip
                      contentStyle={{
                        background: 'rgba(5, 15, 25, 0.92)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderRadius: '16px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#67e8f9"
                      fillOpacity={1}
                      fill="url(#marketFill)"
                      strokeWidth={3}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </GlowCard>
          </div>
        </section>

        <section className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-12">
            <SectionTitle
              eyebrow="Implementation strategy"
              title="A phased rollout plan that feels realistic for a university project"
              text="The rollout sequence reflects the presentation’s plan: design and development first, then testing and training, followed by pilot launch and full deployment."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {roadmap.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  className="relative"
                >
                  <GlowCard className="h-full p-6">
                    <div className="mb-5 inline-flex rounded-2xl bg-white/5 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                      Phase {index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-slate-400">{item.time}</p>
                    <div className="mt-6 h-2 rounded-full bg-white/5">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-teal-400 to-cyan-400"
                        style={{ width: `${(index + 1) * 25}%` }}
                      />
                    </div>
                  </GlowCard>
                </motion.div>
              ))}
            </div>

            <GlowCard className="p-6">
              <div className="grid gap-4 md:grid-cols-3">
                {[
                  {
                    title: 'Cloud Infrastructure',
                    text: 'Scalable architecture to support future hostel growth and multi-site operations.',
                  },
                  {
                    title: 'Mobile-First Design',
                    text: 'Fast access for managers, staff, and tenants across everyday workflows.',
                  },
                  {
                    title: 'User-Centered Feedback',
                    text: 'Continuous improvements through pilot feedback and iterative deployment.',
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-lg font-semibold text-white">{item.title}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-8 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <GlowCard className="overflow-hidden">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="border-b border-white/10 bg-gradient-to-br from-teal-400/12 to-cyan-400/8 p-8 lg:border-b-0 lg:border-r">
                  <AccentPill>Contact & conversion</AccentPill>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">
                    Turn the project into a business-ready software showcase
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-8 text-slate-300 md:text-base">
                    Use this section as the final call to action for lecturers, judges, partners, or potential clients.
                    Present the Smart Hostel Management System as both a university project and a practical digital
                    service with real-world value.
                  </p>

                  <div className="mt-8 grid gap-4">
                    {[
                      'Request a live product walkthrough',
                      'Discuss custom hostel deployment needs',
                      'Explore student housing digitization opportunities',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-200"
                      >
                        <CheckCircle2 className="h-4 w-4 text-teal-300" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-300/30"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Email</label>
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-300/30"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm text-slate-300">Organization</label>
                      <input
                        type="text"
                        placeholder="University or company"
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-300/30"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="mb-2 block text-sm text-slate-300">Message</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your hostel, project review, or demo request..."
                        className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-teal-300/30"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-teal-400 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(45,212,191,0.35)] transition hover:scale-[1.01]">
                        Send Inquiry
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-8 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">Smart Hostel Management System</p>
            <p className="mt-1 text-xs text-slate-400">
              A business-style software landing page inspired by the original project presentation.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Automation</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Security</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Analytics</span>
            <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1">Community</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
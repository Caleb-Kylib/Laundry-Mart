import Link from 'next/link'
import Image from 'next/image'
import {
  CheckCircle2,
  ChevronRight,
  Star,
  Clock,
  Shield,
  Sparkles,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowUpRight,
  Package,
  Truck,
  Clock3,
} from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* ─────────────── NAVIGATION ─────────────── */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl shadow-lg shadow-blue-200">
              L
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              Laundry<span className="text-blue-600">OS</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 font-medium text-gray-500">
            <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</Link>
            <Link href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="hidden sm:block text-slate-600 font-semibold hover:text-blue-600 transition-colors text-sm">
              Admin Login
            </Link>
            <Link
              href="/book"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5"
            >
              Book Pickup
            </Link>
          </div>
        </div>
      </nav>

      {/* ─────────────── HERO ─────────────── */}
      <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/laundry.jpg"
            alt="Professional Laundry Service"
            fill
            className="object-cover"
            priority
          />
          {/* Multi-layer gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/75 to-slate-900/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-32 pb-20 lg:pt-0 lg:pb-0">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 text-blue-300 font-medium text-sm mb-6 border border-blue-400/25 backdrop-blur-sm">
              <Sparkles size={14} className="text-blue-400" />
              Nairobi's #1 Laundry Service
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05] text-white">
              Clean clothes,{' '}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                delivered fast.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-xl">
              Professional laundry, dry cleaning & express service with free door-to-door pickup and delivery. Ready in as little as 12 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-2xl shadow-blue-900/50 hover:-translate-y-1"
              >
                Schedule a Pickup <ChevronRight size={20} />
              </Link>
              <Link
                href="#services"
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20"
              >
                View Services
              </Link>
            </div>

            {/* Quick stats row */}
            <div className="flex flex-wrap gap-8">
              {[
                { label: 'Happy Customers', value: '10,000+' },
                { label: 'Stain Removal Rate', value: '99%' },
                { label: 'Avg. Turnaround', value: '24 hrs' },
              ].map((stat, i) => (
                <div key={i} className="text-white">
                  <div className="text-3xl font-black text-blue-400">{stat.value}</div>
                  <div className="text-sm text-slate-400 mt-0.5 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 text-xs">
          <span>Scroll down</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ─────────────── SERVICES ─────────────── */}
      <section id="services" className="py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Services</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 text-slate-900 tracking-tight">
              Everything handled,<br className="hidden md:block" /> perfectly.
            </h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              From everyday wear to delicate fabrics, we use industry-leading equipment to give your garments the care they deserve.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Wash & Fold',
                price: 'from KSh 1,200',
                desc: 'Perfect for your everyday laundry. Washed with premium detergent, dried, and perfectly folded.',
                icon: Package,
                gradient: 'from-blue-600 to-blue-500',
                light: 'bg-blue-50 text-blue-600',
              },
              {
                title: 'Dry Cleaning',
                price: 'from KSh 800',
                desc: 'Expert care for suits, dresses, and delicate fabrics requiring professional chemical treatment.',
                icon: Shield,
                gradient: 'from-indigo-600 to-indigo-500',
                light: 'bg-indigo-50 text-indigo-600',
              },
              {
                title: 'Express 12 hrs',
                price: '+ KSh 500',
                desc: 'In a rush? Get your garments picked up, professionally cleaned, and delivered back within 12 hours.',
                icon: Clock3,
                gradient: 'from-emerald-600 to-teal-500',
                light: 'bg-emerald-50 text-emerald-600',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`} />
                <div className="p-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.light} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    <service.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-extrabold mb-1 text-slate-900">{service.title}</h3>
                  <p className="font-bold text-blue-600 mb-4 text-sm">{service.price}</p>
                  <p className="text-gray-500 leading-relaxed">{service.desc}</p>
                  <Link href="/book" className="inline-flex items-center gap-1 text-blue-600 font-semibold text-sm mt-6 hover:gap-2 transition-all">
                    Book now <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── HOW IT WORKS ─────────────── */}
      <section id="how-it-works" className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-5 text-slate-900 tracking-tight">
              Clean clothes in 3 easy steps.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-blue-200 via-indigo-300 to-blue-200" />
            {[
              { step: '01', title: 'Book a Pickup', desc: 'Schedule your pickup online in under 2 minutes. Choose your service, date, and address.', icon: Phone, color: 'bg-blue-600' },
              { step: '02', title: 'We Collect & Clean', desc: 'Our team picks up your garments and our professionals handle the cleaning with care.', icon: Package, color: 'bg-indigo-600' },
              { step: '03', title: 'Delivered Fresh', desc: 'Your clean, pressed, and perfectly packaged clothes are delivered back to your door.', icon: Truck, color: 'bg-emerald-600' },
            ].map((step, i) => (
              <div key={i} className="text-center relative">
                <div className={`w-24 h-24 rounded-3xl ${step.color} flex items-center justify-center mx-auto mb-6 shadow-xl`}>
                  <step.icon size={36} className="text-white" />
                </div>
                <div className="text-xs font-black text-slate-300 tracking-widest mb-2">{step.step}</div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── WHY CHOOSE US ─────────────── */}
      <section id="why-choose-us" className="py-28 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100 to-transparent rounded-full blur-[80px] opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Why Choose Us</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mt-3 mb-6 text-slate-900 tracking-tight leading-tight">
                The modern way<br />to do laundry.
              </h2>
              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                We've completely reimagined the laundry experience. No more heavy bags, no waiting around — just fresh, clean clothes delivered to your door.
              </p>
              <div className="space-y-7">
                {[
                  { title: 'Eco-Friendly Cleaning', desc: 'Non-toxic, sustainable detergents that are tough on stains, gentle on your skin and the environment.', icon: Leaf, color: 'bg-emerald-50 text-emerald-600' },
                  { title: 'Real-Time Order Tracking', desc: 'Know exactly where your clothes are at every stage — from pickup to delivery.', icon: MapPin, color: 'bg-blue-50 text-blue-600' },
                  { title: '24/7 Customer Support', desc: 'Our team is always available for special requests, rescheduling, or any questions.', icon: Phone, color: 'bg-indigo-50 text-indigo-600' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center ${feature.color}`}>
                      <feature.icon size={22} />
                    </div>
                    <div>
                      <h4 className="text-lg font-extrabold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full order-1 lg:order-2 relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative">
                <Image
                  src="/img/laundry.jpg"
                  alt="Laundry service quality"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/30 to-transparent" />
              </div>
              {/* Floating stats badges */}
              <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl border border-gray-100" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={22} />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">99%</div>
                    <div className="text-xs font-semibold text-gray-500">Stain Removal</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -right-5 bg-white p-5 rounded-2xl shadow-xl border border-gray-100" style={{ animation: 'float 4s ease-in-out infinite 1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                    <Star size={22} fill="currentColor" />
                  </div>
                  <div>
                    <div className="text-2xl font-black text-slate-900">4.9★</div>
                    <div className="text-xs font-semibold text-gray-500">Customer Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────── TESTIMONIALS ─────────────── */}
      <section id="testimonials" className="py-28 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-slate-900 to-slate-900 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Testimonials</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3 text-white tracking-tight">
              Loved by thousands.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', role: 'Marketing Director', quote: "The most reliable laundry service I've used. My clothes always come back smelling fresh and perfectly pressed.", stars: 5 },
              { name: 'James K.', role: 'Software Engineer', quote: "I love the 24-hour turnaround. It's a lifesaver for my busy work week. The pickup process is incredibly seamless.", stars: 5 },
              { name: 'Grace N.', role: 'Boutique Owner', quote: "They managed to get a tough stain out of my favorite silk dress. Outstanding attention to detail and care.", stars: 5 },
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 text-left hover:-translate-y-2 transition-all duration-300 hover:bg-white/10">
                <div className="flex gap-1 mb-5 text-amber-400">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-300 italic mb-8 leading-relaxed text-[15px]">"{review.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center font-extrabold text-lg">
                    {review.name[0]}
                  </div>
                  <div>
                    <p className="font-bold text-white">{review.name}</p>
                    <p className="text-sm text-slate-400">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────── CTA BANNER ─────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/img/laundry.jpg" alt="CTA background" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700/95 to-indigo-700/90" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Ready to reclaim<br className="hidden md:block" /> your weekend?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of happy customers who trust LaundryOS. First-time customers get 15% off their first order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-slate-50 px-10 py-5 rounded-full font-extrabold text-lg transition-all shadow-2xl hover:-translate-y-1">
              Book Your First Pickup <ChevronRight size={20} />
            </Link>
            <Link href="#services" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/25 px-10 py-5 rounded-full font-bold text-lg transition-all">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────── FOOTER ─────────────── */}
      <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/5">

            {/* Brand column */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-extrabold text-xl">L</div>
                <span className="font-extrabold text-xl text-white tracking-tight">Laundry<span className="text-blue-500">OS</span></span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">
                Nairobi's premier laundry service. Professional cleaning, eco-friendly products, and free door-to-door delivery since 2020.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                {[
                  { Icon: Facebook, label: 'Facebook', href: '#' },
                  { Icon: Twitter, label: 'Twitter', href: '#' },
                  { Icon: Instagram, label: 'Instagram', href: '#' },
                  { Icon: Youtube, label: 'YouTube', href: '#' },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-9 h-9 rounded-lg bg-white/5 hover:bg-blue-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                  >
                    <Icon size={17} />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Services</h4>
              <ul className="space-y-3 text-sm">
                {['Wash & Fold', 'Dry Cleaning', 'Express Service', 'Ironing & Pressing', 'Bulk / Business Laundry'].map(s => (
                  <li key={s}>
                    <Link href="/book" className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-200">{s}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Book a Pickup', href: '/book' },
                  { label: 'How It Works', href: '#how-it-works' },
                  { label: 'Why Choose Us', href: '#why-choose-us' },
                  { label: 'Testimonials', href: '#testimonials' },
                  { label: 'Admin Login', href: '/login' },
                ].map(link => (
                  <li key={link.label}>
                    <Link href={link.href} className="hover:text-blue-400 transition-colors hover:translate-x-1 inline-block duration-200">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">Contact Us</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <div className="flex items-start gap-3">
                    <MapPin size={16} className="text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-400 leading-relaxed">Westlands Business Park,<br />Nairobi, Kenya</span>
                  </div>
                </li>
                <li>
                  <a href="tel:+254700000000" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                    <Phone size={16} className="text-blue-500 flex-shrink-0" />
                    <span>+254 700 000 000</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:hello@laundryos.co.ke" className="flex items-center gap-3 hover:text-blue-400 transition-colors group">
                    <Mail size={16} className="text-blue-500 flex-shrink-0" />
                    <span>hello@laundryos.co.ke</span>
                  </a>
                </li>
              </ul>

              {/* Working hours */}
              <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/5">
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-2">Working Hours</p>
                <p className="text-slate-400 text-xs">Mon – Sat: 7:00 AM – 9:00 PM</p>
                <p className="text-slate-400 text-xs">Sunday: 9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              &copy; {new Date().getFullYear()} LaundryOS Kenya Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-xs text-slate-600">
              <Link href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-slate-400 transition-colors">Cookie Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/* Float animation */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
    </div>
  )
}

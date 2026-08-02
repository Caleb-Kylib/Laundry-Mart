import Link from 'next/link'
import { CheckCircle2, ChevronRight, Star, Clock, Shield, Sparkles } from 'lucide-react'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-200">L</div>
            <span className="font-extrabold text-2xl tracking-tight">Laundry<span className="text-blue-600">OS</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
            <Link href="#services" className="hover:text-blue-600 transition-colors">Services</Link>
            <Link href="#how-it-works" className="hover:text-blue-600 transition-colors">How it works</Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="hidden sm:block text-gray-600 font-medium hover:text-gray-900 transition-colors">Admin Login</Link>
            <Link href="#book" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5">
              Book Pickup
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-8 border border-blue-100">
            <Sparkles size={16} /> Premium Care for Your Garments
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Laundry day, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">done in a tap.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of garment care. Professional cleaning, expert pressing, and free door-to-door delivery within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#book" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 flex items-center justify-center gap-2">
              Schedule a Pickup <ChevronRight size={20} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-700 px-8 py-4 rounded-full font-bold text-lg transition-all border border-gray-200 shadow-sm flex items-center justify-center gap-2">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything you need, handled.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">From everyday wear to delicate fabrics, our expert team uses industry-leading technology to ensure the perfect finish.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Wash & Fold', price: 'from KSh 1,200', desc: 'Perfect for your everyday laundry. Washed, dried, and perfectly folded.', icon: Clock, color: 'bg-blue-100 text-blue-600' },
              { title: 'Dry Cleaning', price: 'from KSh 800', desc: 'Expert care for suits, dresses, and delicate fabrics requiring special attention.', icon: Shield, color: 'bg-purple-100 text-purple-600' },
              { title: 'Express Service', price: '+ KSh 500', desc: 'In a rush? Get your garments back perfectly clean within 12 hours.', icon: Sparkles, color: 'bg-amber-100 text-amber-600' },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="font-semibold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Loved by hundreds of customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', quote: "The most reliable laundry service I've ever used. My clothes always come back smelling fresh and perfectly pressed.", stars: 5 },
              { name: 'James K.', quote: "I love the 24-hour turnaround. It's a lifesaver for my busy work week. The pickup process is seamless.", stars: 5 },
              { name: 'Grace N.', quote: "They managed to get a tough stain out of my favorite silk dress. Outstanding attention to detail and customer care.", stars: 5 },
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-gray-50 text-left relative">
                <div className="flex gap-1 mb-4 text-amber-400">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg text-gray-700 italic mb-6">"{review.quote}"</p>
                <p className="font-bold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to reclaim your weekend?</h2>
          <p className="text-xl text-blue-100 mb-10">Join thousands of happy customers who trust LaundryOS with their garments.</p>
          <Link href="#book" className="inline-block bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:-translate-y-1">
            Book Your First Pickup
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
             <div className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-white font-bold text-lg">L</div>
             <span className="font-bold text-xl text-white tracking-tight">LaundryOS</span>
          </div>
          <p>&copy; {new Date().getFullYear()} LaundryOS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

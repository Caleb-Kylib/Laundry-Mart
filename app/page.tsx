import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, ChevronRight, Star, Clock, Shield, Sparkles, Leaf, MapPin, Phone } from 'lucide-react'

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
            <Link href="#why-choose-us" className="hover:text-blue-600 transition-colors">Why Us</Link>
            <Link href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden sm:block text-gray-600 font-medium hover:text-gray-900 transition-colors">Admin Login</Link>
            <Link href="/book" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5">
              Book Pickup
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2000"
            alt="Professional Laundry Service"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40 mix-blend-multiply" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 text-blue-100 font-medium text-sm mb-8 border border-blue-400/30 backdrop-blur-sm">
            <Sparkles size={16} className="text-blue-300" /> Premium Care for Your Garments
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            Laundry day, <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">done in a tap.</span>
          </h1>
          <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the future of garment care. Professional cleaning, expert pressing, and free door-to-door delivery within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/book" className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-900/50 hover:-translate-y-1 flex items-center justify-center gap-2 border border-blue-400/20">
              Schedule a Pickup <ChevronRight size={20} />
            </Link>
            <Link href="#services" className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20 shadow-sm flex items-center justify-center gap-2">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-blue-600 font-bold uppercase tracking-wider mb-3">Our Services</div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">Everything you need, handled.</h2>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">From everyday wear to delicate fabrics, our expert team uses industry-leading technology to ensure the perfect finish.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Wash & Fold', price: 'from KSh 1,200', desc: 'Perfect for your everyday laundry. Washed, dried, and perfectly folded.', icon: Clock, color: 'bg-blue-100 text-blue-600' },
              { title: 'Dry Cleaning', price: 'from KSh 800', desc: 'Expert care for suits, dresses, and delicate fabrics requiring special attention.', icon: Shield, color: 'bg-indigo-100 text-indigo-600' },
              { title: 'Express Service', price: '+ KSh 500', desc: 'In a rush? Get your garments back perfectly clean within 12 hours.', icon: Sparkles, color: 'bg-emerald-100 text-emerald-600' },
            ].map((service, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">{service.title}</h3>
                <p className="font-semibold text-blue-600 mb-4">{service.price}</p>
                <p className="text-gray-500 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-indigo-600 font-bold uppercase tracking-wider mb-3">Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">The modern way to do laundry.</h2>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                We've completely reimagined the laundry experience. No more lugging heavy bags, no more waiting around, and absolutely no compromises on quality.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: 'Eco-Friendly Cleaning', desc: 'We use sustainable, non-toxic detergents that are tough on stains but gentle on the environment and your skin.', icon: Leaf },
                  { title: 'Real-Time Tracking', desc: 'Track your garments through every stage of the cleaning process directly from your phone.', icon: MapPin },
                  { title: 'Premium Support', desc: 'Our dedicated customer success team is always available to handle any special requests or questions.', icon: Phone },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <feature.icon size={24} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">{feature.title}</h4>
                      <p className="text-gray-500">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative">
                <Image 
                  src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&q=80&w=1200"
                  alt="Clean neatly folded clothes"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 animate-bounce" style={{ animationDuration: '3s' }}>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-slate-900">99%</div>
                    <div className="text-sm font-semibold text-gray-500">Stain Removal Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-slate-900 to-slate-900"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-blue-400 font-bold uppercase tracking-wider mb-3">Testimonials</div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-16">Loved by hundreds of customers</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah M.', role: 'Marketing Director', quote: "The most reliable laundry service I've ever used. My clothes always come back smelling fresh and perfectly pressed.", stars: 5 },
              { name: 'James K.', role: 'Software Engineer', quote: "I love the 24-hour turnaround. It's a lifesaver for my busy work week. The pickup process is incredibly seamless.", stars: 5 },
              { name: 'Grace N.', role: 'Boutique Owner', quote: "They managed to get a tough stain out of my favorite silk dress. Outstanding attention to detail and customer care.", stars: 5 },
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-slate-800 border border-slate-700 text-left relative hover:-translate-y-2 transition-transform duration-300">
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(review.stars)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
                </div>
                <p className="text-lg text-slate-300 italic mb-8 leading-relaxed">"{review.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center font-bold text-lg">
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

      {/* Footer CTA */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1545173168-9f1947eebb7f?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay object-cover"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to reclaim your weekend?</h2>
          <p className="text-xl text-blue-100 mb-10 font-medium">Join thousands of happy customers who trust LaundryOS with their garments.</p>
          <Link href="/book" className="inline-block bg-white text-blue-600 hover:bg-gray-50 px-10 py-5 rounded-full font-bold text-xl transition-all shadow-2xl hover:shadow-blue-900/50 hover:-translate-y-1">
            Book Your First Pickup
          </Link>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-12 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 mb-8 opacity-50">
             <div className="w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-lg">L</div>
             <span className="font-bold text-xl text-white tracking-tight">LaundryOS</span>
          </div>
          <p className="font-medium text-slate-500">&copy; {new Date().getFullYear()} LaundryOS. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

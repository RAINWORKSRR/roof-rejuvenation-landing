import React from 'react';
import { CheckCircle, Shield, Sparkles, Timer, Phone, Play, Award, Recycle, ChevronRight } from 'lucide-react';

export default function Landing(){
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gray-900 text-white grid place-items-center font-bold">RR</div>
            <div className="leading-tight">
              <p className="text-sm font-semibold">Roof Rejuvenation</p>
              <p className="text-xs text-gray-500">A modern alternative to replacement</p>
            </div>
          </div>
          <a href="#estimate" className="inline-flex items-center gap-2 rounded-2xl border px-4 py-2 text-sm font-medium shadow-sm hover:shadow transition">
            <Phone className="h-4 w-4" /> Get Free Estimate
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Roof replacement alternative that can save you thousands</h1>
            <p className="mt-4 text-lg text-gray-600">A fast, clean treatment designed to restore flexibility in aging asphalt shingles, boost granule retention, and extend service life—without the mess and disruption of a full tear-off.</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#estimate" className="inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white text-sm font-semibold shadow hover:opacity-95">
                Get Free Estimate <ChevronRight className="h-4 w-4" />
              </a>
              <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-2xl border px-5 py-3 text-sm font-semibold hover:bg-gray-50">
                How it works
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> 5‑year flexibility warranty*</div>
              <div className="flex items-center gap-2"><Timer className="h-4 w-4" /> Install in hours, not days</div>
              <div className="flex items-center gap-2"><Recycle className="h-4 w-4" /> Less waste to landfill</div>
            </div>
            <p className="mt-2 text-xs text-gray-400">*Example warranty terms—replace with your actual coverage.</p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden rounded-2xl border shadow-sm">
            <button className="absolute inset-0 grid place-items-center group" aria-label="Play overview video">
              <div className="rounded-full p-4 bg-white/80 border shadow group-hover:scale-105 transition">
                <Play className="h-8 w-8" />
              </div>
            </button>
            <img src="https://images.unsplash.com/photo-1597002921243-6f9a8a173b1c?q=80&w=1600&auto=format&fit=crop" alt="Roof treatment video placeholder" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-center text-sm uppercase tracking-widest text-gray-500">As featured by</p>
          <div className="mt-6 grid grid-cols-3 gap-6 md:grid-cols-6">
            {["Local News","Home Journal","Energy Today","PBS Local","NBC Affiliate","Inc."].map((name, i) => (
              <div key={i} className="grid place-items-center rounded-xl border py-3 text-sm text-gray-600">{name}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-red-600">Old way</p>
              <h3 className="mt-2 text-xl font-bold">Replacement is expensive, messy, and disruptive</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {[
                  "$20k–$25k+ average replacement cost",
                  "Tear-off debris and days of noise",
                  "Risk to landscaping and property",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-500" /> {item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-green-700">New way</p>
              <h3 className="mt-2 text-xl font-bold">Restore flexibility and extend life at a fraction of the cost</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                {[
                  "Up to ~80% less than replacement (typical)",
                  "No tear-off; minimal disruption",
                  "Enhances granule adhesion to reduce wear",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2"><CheckCircle className="mt-0.5 h-4 w-4" /> {item}</li>
                ))}
              </ul>
              <a href="#estimate" className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white text-sm font-semibold shadow hover:opacity-95">
                Get My Free Assessment <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Why homeowners choose rejuvenation</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Sparkles, title: "Restores shingle pliability", desc: "Penetrates to revitalize aging asphalt and help shingles flex with temperature swings." },
              { icon: Shield, title: "Improves granule retention", desc: "Helps lock down protective granules to reduce UV wear." },
              { icon: Timer, title: "Fast, clean install", desc: "Most homes finished in a few hours with no tear-off mess." },
              { icon: Recycle, title: "Eco-friendlier", desc: "Life-extension means fewer roofs in landfills." },
              { icon: Award, title: "Transferable coverage", desc: "Back your roof with a clear, written warranty." },
              { icon: CheckCircle, title: "Budget-smart", desc: "Typically a small fraction of replacement cost." },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} className="rounded-2xl border p-6 shadow-sm">
                <Icon className="h-6 w-6" />
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Real results, real savings</h2>
              <p className="mt-4 text-gray-700">“We were quoted $22,000 for a replacement. The rejuvenation treatment brought our roof back to life for a fraction of that—and the crew was gone by lunch.”</p>
              <p className="mt-2 text-sm text-gray-500">— Happy Homeowner, Local City</p>
            </div>
            <div className="rounded-2xl border p-6 shadow-sm">
              <dl className="grid grid-cols-2 gap-6">
                <div>
                  <dt className="text-sm text-gray-500">Estimated replacement</dt>
                  <dd className="text-2xl font-bold">$22,400</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Treatment cost</dt>
                  <dd className="text-2xl font-bold">$4,500</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Estimated savings</dt>
                  <dd className="text-2xl font-bold">$17,900</dd>
                </div>
                <div>
                  <dt className="text-sm text-gray-500">Time on site</dt>
                  <dd className="text-2xl font-bold">4 hrs</dd>
                </div>
              </dl>
              <p className="mt-4 text-xs text-gray-500">*Example only. Replace with your actual numbers and proof.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Backed by a clear, written warranty</h2>
          <p className="mt-4 text-gray-700">Every treatment includes a written flexibility warranty. Sell your home? Coverage transfers to the next owner. Re‑treat on schedule to keep protection going.</p>
        </div>
      </section>

      <section id="estimate" className="border-b">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <div className="rounded-2xl border p-6 shadow-sm">
            <h2 className="text-xl font-bold">Get your free roof assessment</h2>
            <p className="mt-2 text-sm text-gray-600">Answer a few quick questions. A local specialist will follow up with a custom quote.</p>
            <form name="contact" data-netlify="true" className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <input type="hidden" name="form-name" value="contact" />
              <input required className="rounded-xl border px-4 py-3 focus:outline-none" placeholder="First name" name="firstName" />
              <input required className="rounded-xl border px-4 py-3 focus:outline-none" placeholder="Last name" name="lastName" />
              <input required type="email" className="rounded-xl border px-4 py-3 focus:outline-none md:col-span-2" placeholder="Email" name="email" />
              <input required className="rounded-xl border px-4 py-3 focus:outline-none md:col-span-2" placeholder="Phone" name="phone" />
              <input required className="rounded-xl border px-4 py-3 focus:outline-none md:col-span-2" placeholder="Property address" name="address" />
              <select className="rounded-xl border px-4 py-3 focus:outline-none md:col-span-2" name="roofAge">
                <option>Roof age</option>
                <option>0–5 years</option>
                <option>6–10 years</option>
                <option>11–15 years</option>
                <option>16–20 years</option>
                <option>21+ years</option>
              </select>
              <textarea className="rounded-xl border px-4 py-3 focus:outline-none md:col-span-2" placeholder="Anything we should know?" rows={4} name="notes" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gray-900 px-5 py-3 text-white text-sm font-semibold shadow hover:opacity-95 md:col-span-2">
                Submit Request
              </button>
              <p className="text-xs text-gray-400 md:col-span-2">By submitting, you agree to be contacted about your project. This is not an offer for credit. Messaging rates may apply.</p>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50">
        <div className="mx-auto max-w-6xl px-4 py-12 text-sm text-gray-600">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Roof Rejuvenation. All rights reserved.</p>
            <nav className="flex gap-4">
              <a href="#" className="hover:underline">Privacy</a>
              <a href="#" className="hover:underline">Terms</a>
              <a href="#estimate" className="hover:underline">Free Estimate</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}

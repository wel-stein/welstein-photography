import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const faqs = [
  {
    question: 'How far in advance should we book?',
    answer: 'Most couples secure their date 12-18 months in advance, especially for popular summer Saturdays. However, please reach out regardless of your timeline to check our current availability.',
  },
  {
    question: 'Do you travel for destination weddings?',
    answer: 'Absolutely. We are available for destination celebrations worldwide. Travel and accommodation fees are tailored to each specific location and are transparently quoted.',
  },
  {
    question: 'When will we receive our wedding gallery?',
    answer: 'A preview gallery of 30-50 images is typically delivered within 48 hours of your wedding. Your full, meticulously curated collection is delivered within 8-10 weeks.',
  },
  {
    question: 'Do we receive the raw unedited files?',
    answer: 'As artists, our editing process is an essential part of the final work. We do not release raw files as they are incomplete representations of our vision and expertise.',
  },
]

const collections = [
  {
    number: 'COLLECTION I',
    name: 'Essential',
    subtitle: 'FOR INTIMATE CELEBRATIONS',
    price: '€3,500',
    features: ['6 Hours Coverage', 'Lead Photographer', '400+ Edited Images', 'Online Gallery'],
    highlighted: false,
    badge: null,
  },
  {
    number: 'COLLECTION II',
    name: 'Premiere',
    subtitle: 'THE STANDARD EXPERIENCE',
    price: '€5,200',
    features: ['10 Hours Coverage', 'Two Photographers', '700+ Edited Images', 'Engagement Session', 'Fine Art Print Box'],
    highlighted: true,
    badge: 'MOST REFINED',
  },
  {
    number: 'COLLECTION III',
    name: 'Legacy',
    subtitle: 'FOR MULTI-DAY EVENTS',
    price: 'FROM €8,500',
    features: ['Full Weekend Coverage', 'Two Photographers', 'High-Res Digital Archive', 'Rehearsal Dinner', 'Handcrafted Heirloom Album'],
    highlighted: false,
    badge: null,
  },
]

export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main className="pt-32">
        {/* Hero Header */}
        <header className="px-margin-x max-w-container-max mx-auto mb-stack-lg">
          <div className="grid grid-cols-12 gap-gutter items-end">
            <div className="col-span-12 md:col-span-7">
              <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-stack-sm">
                Artistry in Every <br />
                <span className="italic text-on-surface/60">Quiet Moment.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface/70 max-w-xl">
                Our services are designed for couples who value timeless storytelling over fleeting trends. We document your celebration with a cinematic eye and a respectful presence.
              </p>
            </div>
          </div>
        </header>

        {/* The Experience Section */}
        <section className="px-margin-x max-w-container-max mx-auto mb-stack-lg">
          <div className="grid grid-cols-12 gap-gutter items-center">
            <div className="col-span-12 md:col-span-6 mb-stack-sm md:mb-0">
              <div className="matted-image">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnR2ywqsVB_PZRVt-cIRx0e7GJJ47JoBmM0vOgzoww_XRbVnSYkn-MFR-QekdCiRgz71vv0F7V4pzr4LvwefealOCpADRNf7NW-ttvqHaqkZv_FKdXPOtCFK6lTyGooSTz1zeFiZ_5zyE1XKXXbfP3OPp59tL0LnXSKzSYRjkz9pjYzUAZxsI7Ud1ldRny0uPF80xNIKDyv6OBMJ0dGnyYsHX0pls_dRmzMTeDytdxnL2rRNmauyFfzyIajt6H4xvJgZV9yTyYsU15"
                  alt="The Experience"
                  className="w-full grayscale brightness-90"
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-5 md:col-start-8">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">THE EXPERIENCE</h2>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">A Deliberate Process</h3>
              <div className="space-y-gutter">
                <div>
                  <h4 className="font-label-sm text-label-sm mb-2 text-on-surface">I. CONSULTATION</h4>
                  <p className="font-body-md text-body-md text-on-surface/60">
                    We begin with a private conversation to understand your vision, the nuances of your venue, and the rhythm of your day.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm mb-2 text-on-surface">II. THE CELEBRATION</h4>
                  <p className="font-body-md text-body-md text-on-surface/60">
                    On your wedding day, we maintain a non-intrusive presence, capturing genuine emotions and architectural beauty as they unfold.
                  </p>
                </div>
                <div>
                  <h4 className="font-label-sm text-label-sm mb-2 text-on-surface">III. THE CURATION</h4>
                  <p className="font-body-md text-body-md text-on-surface/60">
                    Every image is meticulously hand-edited to reflect our signature cinematic style, delivered in a bespoke digital gallery.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="bg-surface-container-low py-stack-lg">
          <div className="px-margin-x max-w-container-max mx-auto">
            <div className="text-center mb-stack-md">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">INVESTMENT</h2>
              <h3 className="font-headline-md text-headline-md">Photography Collections</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter items-start">
              {collections.map((col) => (
                <div
                  key={col.name}
                  className={`p-stack-sm flex flex-col transition-all duration-500 relative ${
                    col.highlighted
                      ? 'border border-on-surface/20 bg-surface-container-highest scale-105 shadow-2xl z-10'
                      : 'border border-outline-variant/10 hover:border-on-surface/20 bg-surface'
                  }`}
                >
                  {col.badge && (
                    <div className="absolute top-0 right-0 p-4 font-label-sm text-[10px] text-secondary tracking-widest">
                      {col.badge}
                    </div>
                  )}
                  <span className="font-label-sm text-label-sm text-on-surface/40 mb-2">{col.number}</span>
                  <h4 className="font-headline-sm text-headline-sm mb-4">{col.name}</h4>
                  <p className="font-label-sm text-label-sm text-on-surface/60 mb-stack-sm">{col.subtitle}</p>
                  <div className="flex-grow">
                    <ul className="space-y-4 font-body-md text-body-md text-on-surface/70 mb-stack-sm">
                      {col.features.map((f) => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary">check</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8 border-t border-outline-variant/10">
                    <p className="font-headline-sm text-headline-sm mb-6">{col.price}</p>
                    <button
                      className={`w-full py-4 text-label-sm font-label-sm transition-all duration-300 ${
                        col.highlighted
                          ? 'bg-on-surface text-surface hover:bg-secondary hover:text-on-secondary'
                          : 'border border-on-surface hover:bg-on-surface hover:text-surface'
                      }`}
                    >
                      INQUIRE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-margin-x max-w-container-max mx-auto py-stack-lg">
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-12 md:col-span-4">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">FAQ</h2>
              <h3 className="font-headline-md text-headline-md">Common Inquiries</h3>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="border-b border-outline-variant/20 pb-4">
                    <button
                      onClick={() => setOpenIndex(openIndex === i ? null : i)}
                      className="flex justify-between items-center w-full py-4 text-left cursor-pointer"
                    >
                      <h4 className="font-body-lg text-body-lg">{faq.question}</h4>
                      <span
                        className={`material-symbols-outlined transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openIndex === i ? 'rotate-45' : ''
                        }`}
                      >
                        add
                      </span>
                    </button>
                    {openIndex === i && (
                      <p className="font-body-md text-body-md text-on-surface/60 px-2 pb-4">
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-stack-lg">
          <div className="relative h-[614px] flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD15eDovFbJpo2ObZ0dh8pIFK3YPZdwAzekBGYXjnvjXJekyW5giDe-hRxGv--WLu0hf5cIFcTE4ktu4KhRHSXFlx_ZDNqzw2spyccM3kkTSqy9LnyTWWC2fdYV2Zcq4bfIXRzV2KhnYsg6IA8oMEFuvNig3oJecQWEYHvV98JVkZRa1ooJ4AhlhFpHiWIpZCIZrEBjLMtAijehGAUXId2xUfiVbvb9QR4hm8758Tj8APQ40y2DS95MSHzUykNi_89kAr8fxiwbxNaE"
                alt="Reception hall"
                className="w-full h-full object-cover opacity-30 grayscale brightness-50"
              />
            </div>
            <div className="relative z-10 text-center px-margin-x">
              <h2 className="font-display-lg text-display-lg mb-stack-sm">Shall we begin?</h2>
              <a
                href="/contact"
                className="inline-block px-12 py-6 bg-on-surface text-surface font-label-sm text-label-sm tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-500"
              >
                BOOK A CONSULTATION
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

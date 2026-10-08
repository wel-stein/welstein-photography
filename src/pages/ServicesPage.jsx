import { useState } from 'react'
import { Link } from 'react-router-dom'
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

const packages = [
  {
    number: 'PACKAGE I',
    name: 'Full-Day Coverage',
    price: 'RM1,700',
    features: [
      '10 hours of coverage',
      'Estimated 500–600 photographs',
      'Every photograph adjusted for color and brightness',
      'All photographs delivered in soft copy',
      'Photo montage of the morning session, shown during dinner',
    ],
    highlighted: true,
  },
  {
    number: 'PACKAGE II',
    name: 'Half-Day Coverage',
    price: 'RM500',
    features: [
      '5 hours of coverage',
      'Estimated 200–400 photographs, depending on the events',
      'Every photograph adjusted for color and brightness',
      'All photographs delivered in soft copy',
    ],
    highlighted: false,
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-end">
            <div className="md:col-span-7">
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
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-6 mb-stack-sm md:mb-0">
              <div className="matted-image">
                <img
                  src="/gallery/ken-cherry/06.jpg"
                  alt="Bride and groom on a sweeping staircase"
                  className="w-full grayscale brightness-90"
                />
              </div>
            </div>

            <div className="md:col-span-5 md:col-start-8">
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
              <h3 className="font-headline-md text-headline-md">Photography Packages</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`p-stack-sm flex flex-col transition-all duration-500 relative ${
                    pkg.highlighted
                      ? 'border border-on-surface/20 bg-surface-container-highest md:scale-105 shadow-2xl z-10'
                      : 'border border-outline-variant/10 hover:border-on-surface/20 bg-surface'
                  }`}
                >
                  <span className="font-label-sm text-label-sm text-on-surface/40 mb-2">{pkg.number}</span>
                  <h4 className="font-headline-sm text-headline-sm mb-stack-sm">{pkg.name}</h4>
                  <div className="flex-grow">
                    <ul className="space-y-4 font-body-md text-body-md text-on-surface/70 mb-stack-sm">
                      {pkg.features.map((f) => (
                        <li key={f} className="flex items-start gap-2">
                          <span className="material-symbols-outlined text-secondary flex-shrink-0">check</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8 border-t border-outline-variant/10">
                    <p className="font-headline-sm text-headline-sm mb-6">{pkg.price}</p>
                    <Link
                      to="/contact"
                      className={`block w-full py-4 text-center text-label-sm font-label-sm transition-all duration-300 ${
                        pkg.highlighted
                          ? 'bg-on-surface text-surface hover:bg-secondary hover:text-on-secondary'
                          : 'border border-on-surface hover:bg-on-surface hover:text-surface'
                      }`}
                    >
                      INQUIRE
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="px-margin-x max-w-container-max mx-auto py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-4">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">FAQ</h2>
              <h3 className="font-headline-md text-headline-md">Common Inquiries</h3>
            </div>
            <div className="md:col-span-8">
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
                src="/gallery/keng-long-alice-wedding/04.jpg"
                alt="Couple entering their wedding banquet"
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

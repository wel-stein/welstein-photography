import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { WHATSAPP_NUMBER, WHATSAPP_DISPLAY, FACEBOOK_URL } from '../data/contact'

const textFields = [
  { name: 'name',    label: 'Your Name',        placeholder: 'YOUR FULL NAME', required: true },
  { name: 'partner', label: "Partner's Name",   placeholder: "YOUR PARTNER'S FULL NAME" },
  { name: 'email',   label: 'Email Address',    placeholder: 'HELLO@EXAMPLE.COM', type: 'email' },
  { name: 'date',    label: 'Wedding Date',     placeholder: `E.G. JUNE 12, ${new Date().getFullYear() + 1}` },
  { name: 'venue',   label: 'Venue & Location', placeholder: 'HOTEL OR BANQUET HALL, CITY', wide: true },
]

const selectFields = [
  {
    name: 'package',
    label: 'Package of Interest',
    options: ['Full-Day Coverage (RM1,700)', 'Half-Day Coverage (RM500)', 'Not sure yet'],
  },
  {
    name: 'source',
    label: 'How did you hear about us?',
    options: ['Facebook', 'Friend or family', 'Wedding planner or vendor', 'Google search', 'Other'],
  },
]

// Order and labels of the lines in the WhatsApp message
const messageLines = [
  ['name', 'Name'],
  ['partner', 'Partner'],
  ['email', 'Email'],
  ['date', 'Wedding date'],
  ['venue', 'Venue'],
  ['package', 'Package'],
  ['source', 'Heard about us via'],
  ['message', 'About our day'],
]

const inputClass =
  'form-underline w-full py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/30'
const labelClass = 'font-label-sm text-label-sm uppercase text-on-surface/50'

function handleSubmit(e) {
  e.preventDefault()
  const data = new FormData(e.currentTarget)
  const details = messageLines
    .map(([key, label]) => {
      const value = (data.get(key) || '').trim()
      return value && `${label}: ${value}`
    })
    .filter(Boolean)
  const text = ["Hi Welstein Photography, I'd like to inquire about wedding photography.", '', ...details].join('\n')
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
}

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main className="md:grid md:grid-cols-2 lg:grid-cols-12">
        {/* Photo panel with bio, pinned while the form scrolls */}
        <aside className="relative h-[75vh] min-h-[560px] md:h-screen md:sticky md:top-0 lg:col-span-5 overflow-hidden">
          <img
            src="/gallery/charles-fiona-wedding/09.jpg"
            alt="Bride and groom walking hand in hand"
            className="absolute inset-0 w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 md:px-12 pb-stack-sm md:pb-stack-md">
            <h2 className="font-label-sm text-label-sm text-secondary mb-4">THE PHOTOGRAPHER</h2>
            <p className="font-headline-sm text-headline-sm italic text-white mb-4 max-w-md">
              I&rsquo;m drawn to the quiet, in-between moments of a wedding day.
            </p>
            <p className="font-body-md text-body-md text-on-surface/70 max-w-md mb-6">
              A held glance, a parent&rsquo;s embrace, light falling just right. I observe rather than direct, so your photographs feel honest, natural and unmistakably yours.
            </p>
            <p className="inline-flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-on-surface/80">
              <span className="material-symbols-outlined text-[18px] text-secondary">location_on</span>
              BASED IN JOHOR BAHRU, MALAYSIA
            </p>
          </div>
        </aside>

        {/* Inquiry */}
        <section className="lg:col-span-7 px-6 md:px-12 lg:px-stack-md pt-stack-md md:pt-40 pb-stack-lg">
          <div className="max-w-2xl">
            <h1 className="font-label-sm text-label-sm text-secondary mb-4">INQUIRE</h1>
            <p className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
              Let&rsquo;s tell <span className="italic text-on-surface/60">your story.</span>
            </p>
            <p className="font-body-lg text-body-lg text-on-surface/60 mb-stack-md">
              Share a few details about your celebration. When you press send, WhatsApp opens with everything filled in, so we can continue the conversation there.
            </p>

            <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                {textFields.map((f) => (
                  <div key={f.name} className={`flex flex-col gap-2 ${f.wide ? 'md:col-span-2' : ''}`}>
                    <label htmlFor={f.name} className={labelClass}>
                      {f.label}
                      {f.required && <span className="text-secondary"> *</span>}
                    </label>
                    <input
                      id={f.name}
                      name={f.name}
                      type={f.type || 'text'}
                      required={f.required}
                      placeholder={f.placeholder}
                      className={inputClass}
                    />
                  </div>
                ))}

                {selectFields.map((f) => (
                  <div key={f.name} className="flex flex-col gap-2">
                    <label htmlFor={f.name} className={labelClass}>{f.label}</label>
                    <div className="relative">
                      <select id={f.name} name={f.name} defaultValue="" className={`${inputClass} bg-surface appearance-none pr-8`}>
                        <option value="" className="bg-surface">Select one</option>
                        {f.options.map((o) => (
                          <option key={o} className="bg-surface">{o}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-on-surface/40 pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>
                ))}

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label htmlFor="message" className={labelClass}>Tell us about your day</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="YOUR VISION, THE MOOD, AND WHAT MATTERS MOST TO YOU..."
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-on-surface text-surface font-label-sm text-label-sm tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-500"
                >
                  <span className="material-symbols-outlined text-[20px]">chat</span>
                  SEND INQUIRY
                </button>
                <p className="font-body-md text-[14px] text-on-surface/40">
                  Opens WhatsApp with your details filled in.
                </p>
              </div>
            </form>

            <div className="mt-stack-md pt-stack-sm border-t border-outline-variant/20 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <p className="font-label-sm text-label-sm text-on-surface/40 mb-3">PREFER TO MESSAGE DIRECTLY?</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-headline-sm text-headline-sm hover:text-secondary transition-colors duration-500"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p className="font-label-sm text-label-sm text-on-surface/40 mt-2">WHATSAPP</p>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-on-surface/40 mb-3">SEE MORE OF OUR WORK</p>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-headline-sm text-headline-sm hover:text-secondary transition-colors duration-500"
                >
                  Facebook
                  <span className="material-symbols-outlined text-[20px]">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

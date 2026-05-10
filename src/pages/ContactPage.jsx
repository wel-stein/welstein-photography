import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-[160px]">
        <section className="px-margin-x mb-stack-md max-w-container-max mx-auto">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-center md:text-left mb-4">
            The Inquire
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface/60 max-w-2xl">
            Telling your story through a lens of timeless elegance. We are honored to document your most intimate moments.
          </p>
        </section>

        <section className="px-margin-x max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter pb-stack-lg">
          <div className="md:col-span-7 lg:col-span-8">
            <form className="flex flex-col gap-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Your Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="ALEXANDER SMITH"
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Partner's Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="JULIA BENNETT"
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="HELLO@EXAMPLE.COM"
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Wedding Date
                  </label>
                  <input
                    type="text"
                    placeholder="JUNE 12, 2025"
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Venue &amp; Location
                  </label>
                  <input
                    type="text"
                    placeholder="VILLA D'ESTE, LAKE COMO"
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10"
                  />
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    How did you hear about us?
                  </label>
                  <select className="form-underline py-3 font-body-md text-body-md text-on-surface bg-surface appearance-none">
                    <option className="bg-surface">INSTAGRAM</option>
                    <option className="bg-surface">FRIEND OR FAMILY</option>
                    <option className="bg-surface">WEDDING PLANNER</option>
                    <option className="bg-surface">EDITORIAL / BLOG</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2 md:col-span-2">
                  <label className="font-label-sm text-label-sm uppercase text-on-surface/40">
                    Tell us about your day
                  </label>
                  <textarea
                    rows={4}
                    placeholder="DESCRIBE YOUR VISION, THE MOOD, AND WHAT MATTERS MOST TO YOU..."
                    className="form-underline py-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface/10 resize-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="border border-on-surface/30 px-12 py-4 font-label-sm text-label-sm uppercase transition-all duration-500 hover:bg-on-surface hover:text-surface"
                >
                  SEND INQUIRY
                </button>
              </div>
            </form>
          </div>

          <div className="md:col-span-5 lg:col-span-4 mt-stack-md md:mt-0">
            <div className="flex flex-col gap-stack-sm sticky top-[160px]">
              <div className="relative aspect-[4/5] overflow-hidden grayscale">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzoDgl_e-nz_NsGeclTQJ_IHSpuRzboxrttGM2ip27Kkw4f_yzR-_hFvTlZEuU4sc7vsE6tR3HhHf9W-yOyd8J7rOqonR_J9A4WUHs67mR54BALZU9T0UY3a4dAmMutxDe4wTbxTem3LqdA5nGqGBeMWp8HBBU1JM1CWNTVU_SYKX5pQZJa9GSmsR6hKJukhPmXMYvFa4K6nKBLLDKCOUWEIw2JnYJ53s0U4Waa7SENPQwZuANJKhugdBfWFQxE_Oe9IwatkFINUCI"
                  alt="Portrait of the artist"
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 border-[1.5rem] border-surface/10 pointer-events-none" />
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="font-headline-sm text-headline-sm">Meet Julian Welstein</h3>
                <p className="font-body-md text-body-md text-on-surface/70 leading-relaxed">
                  I believe in the beauty of the quiet moments. My approach is observational yet intentional, seeking the atmospheric light and genuine connections that make your wedding day uniquely yours.
                </p>
                <p className="font-body-md text-body-md text-on-surface/70 leading-relaxed">
                  Based in Paris, available for commissions worldwide.
                </p>
                <div className="pt-4 border-t border-outline-variant/10 flex flex-col gap-2">
                  <p className="font-label-sm text-label-sm text-on-surface/40">OFFICE HOURS</p>
                  <p className="font-label-sm text-label-sm">MON — FRI, 10AM — 6PM CET</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryCard from '../components/GalleryCard'
import { galleryItems } from '../data/galleryItems'

// Featured stories show a moment from each wedding instead of the gallery's detail-shot cover
const featured = [
  { slug: 'vincent-ploy-wedding',    src: '/gallery/vincent-ploy-wedding/05.jpg' },
  { slug: 'keng-long-alice-wedding', src: '/gallery/keng-long-alice-wedding/05.jpg' },
  { slug: 'chan-hwen-wedding',       src: '/gallery/chan-hwen-wedding/05.jpg' },
].map((f) => ({ ...galleryItems.find((item) => item.slug === f.slug), src: f.src }))

const experience = [
  {
    number: 'I',
    title: 'THE CONVERSATION',
    text: 'We begin by listening: to your story, your traditions and the rhythm you imagine for the day.',
  },
  {
    number: 'II',
    title: 'THE CELEBRATION',
    text: 'From the first quiet hours of preparation to the last dance, we work in the background so every moment stays yours.',
  },
  {
    number: 'III',
    title: 'THE COLLECTION',
    text: 'Every photograph is adjusted for color and brightness and delivered to you in soft copy.',
  },
]

export default function HomePage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen selection:bg-secondary selection:text-on-secondary">
      <Navbar />
      <main>
        {/* Cinematic Hero */}
        <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
          <img
            src="/gallery/charles-fiona-wedding/10.jpg"
            alt="Bride and groom in silhouette by a window"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-surface via-surface/70 to-transparent" />

          {/* Text sits low so the couple's faces stay clear */}
          <div className="relative z-10 h-full flex flex-col justify-end items-center text-center px-6 md:px-margin-x pb-24 md:pb-32">
            <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase text-on-surface/80 mb-6">
              Wedding Photography
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-white mb-6">
              Love, Framed in <br />
              <span className="italic text-white/70">Light &amp; Shadow</span>
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface/70 max-w-xl mb-stack-sm">
              Cinematic, unobtrusive wedding photography for couples who want their day remembered exactly as it felt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/gallery"
                className="px-10 py-4 bg-on-surface text-surface font-label-sm text-label-sm tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-500"
              >
                VIEW THE GALLERY
              </Link>
              <Link
                to="/contact"
                className="px-10 py-4 border border-on-surface text-on-surface font-label-sm text-label-sm tracking-widest hover:bg-on-surface hover:text-surface transition-all duration-500"
              >
                INQUIRE
              </Link>
            </div>
          </div>
        </section>

        {/* The Approach */}
        <section className="px-margin-x max-w-container-max mx-auto py-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 mb-stack-sm md:mb-0">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">THE APPROACH</h2>
              <h3 className="font-headline-md text-headline-md mb-stack-sm">
                Quiet presence. <br />
                <span className="italic text-on-surface/60">Honest emotion.</span>
              </h3>
              <p className="font-body-lg text-body-lg text-on-surface/70 mb-stack-sm">
                The most meaningful photographs are the ones nobody posed for: a father steadying a veil, a glance across a crowded room, the hush before the doors open. We blend into your celebration and let the story unfold on its own.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm tracking-widest border-b border-on-surface/40 pb-1 hover:text-secondary hover:border-secondary transition-colors duration-500"
              >
                THE EXPERIENCE
                <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
              </Link>
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <div className="image-matte">
                <img
                  src="/gallery/cp-ct-wedding/04.jpg"
                  alt="Bride smiling beneath her veil"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover object-[30%_center]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Selected Stories */}
        <section className="px-margin-x max-w-container-max mx-auto pb-stack-lg">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-stack-md">
            <div>
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">SELECTED STORIES</h2>
              <h3 className="font-headline-md text-headline-md">Recent Weddings</h3>
            </div>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 w-fit font-label-sm text-label-sm tracking-widest border-b border-on-surface/40 pb-1 hover:text-secondary hover:border-secondary transition-colors duration-500"
            >
              VIEW ALL STORIES
              <span className="material-symbols-outlined text-[18px]">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {featured.map((item) => (
              <GalleryCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        {/* The Moments In Between */}
        <section className="px-margin-x max-w-container-max mx-auto pb-stack-lg">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-7 image-matte">
              <img
                src="/gallery/vincent-ploy-wedding/06.jpg"
                alt="Parents lifting the bride's veil"
                loading="lazy"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="md:col-span-5 flex flex-col justify-between gap-gutter">
              <blockquote className="pt-stack-sm md:pt-0">
                <p className="font-headline-md text-headline-md italic mb-6">
                  &ldquo;We don&rsquo;t direct your day. We witness it.&rdquo;
                </p>
                <p className="font-body-md text-body-md text-on-surface/60">
                  The tears, the laughter, the small gestures between family members. These are the moments that become your heirlooms.
                </p>
              </blockquote>
              <div className="image-matte">
                <img
                  src="/gallery/cp-ct-wedding/06.jpg"
                  alt="Bride seated in the bridal car"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* The Experience */}
        <section className="bg-surface-container-low py-stack-lg">
          <div className="px-margin-x max-w-container-max mx-auto">
            <div className="text-center mb-stack-md">
              <h2 className="font-label-sm text-label-sm text-secondary mb-4">THE EXPERIENCE</h2>
              <h3 className="font-headline-md text-headline-md">How We Work Together</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter mb-stack-md">
              {experience.map((step) => (
                <div key={step.number} className="border-t border-outline-variant/30 pt-stack-sm">
                  <span className="font-headline-sm text-headline-sm italic text-on-surface/40 block mb-4">
                    {step.number}.
                  </span>
                  <h4 className="font-label-sm text-label-sm mb-4 text-on-surface">{step.title}</h4>
                  <p className="font-body-md text-body-md text-on-surface/60">{step.text}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Link
                to="/services"
                className="inline-block px-12 py-4 border border-on-surface text-on-surface font-label-sm text-label-sm tracking-widest hover:bg-on-surface hover:text-surface transition-all duration-500"
              >
                VIEW PACKAGES
              </Link>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative h-[614px] flex items-center overflow-hidden bg-black">
          <img
            src="/gallery/vince-carmen-wedding/14.jpg"
            alt="Couple in silhouette about to kiss"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-left-top opacity-30 md:opacity-50"
          />
          {/* Silhouette fills the left; copy sits on the dark right half */}
          <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-x flex justify-center md:justify-end">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6">
                Shall we tell <br />
                <span className="italic">your story?</span>
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface/60 max-w-xl mb-stack-sm">
                Tell us your date and a little about your plans.
              </p>
              <Link
                to="/contact"
                className="inline-block px-8 md:px-12 py-6 bg-on-surface text-surface font-label-sm text-label-sm tracking-widest hover:bg-secondary hover:text-on-secondary transition-colors duration-500"
              >
                INQUIRE ABOUT YOUR DATE
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

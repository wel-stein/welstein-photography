import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import GalleryCard from '../components/GalleryCard'
import { galleryItems } from '../data/galleryItems'

export default function GalleryPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main className="pt-32 pb-stack-lg max-w-container-max mx-auto px-margin-x">
        <div className="mb-stack-md text-center">
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
            The Gallery
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface/40 max-w-2xl mx-auto">
            Capturing the silent, cinematic moments of your most cherished day. A collection of timeless memories framed in light and shadow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {galleryItems.map((item) => (
            <GalleryCard key={item.slug} item={item} />
          ))}
        </div>

        <div className="mt-stack-lg text-center">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-8 italic">
            Interested in capturing your story?
          </h2>
          <a
            href="/contact"
            className="inline-block px-12 py-4 border border-on-surface text-on-surface font-label-sm text-label-sm uppercase hover:bg-on-surface hover:text-surface transition-all duration-500 ease-in-out"
          >
            Inquire About Your Date
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const galleryItems = [
  { slug: 'charles-fiona-wedding',      aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/charles-fiona-wedding/01.jpg',      category: 'Wedding', title: 'Charles & Fiona' },
  { slug: 'vincent-ploy-wedding',       aspect: 'aspect-square',  colSpan: '',              src: '/gallery/vincent-ploy-wedding/01.jpg',       category: 'Wedding', title: 'Vincent & Ploy' },
  { slug: 'orcas-christina-wedding',    aspect: 'aspect-video',   colSpan: 'lg:col-span-2', src: '/gallery/orcas-christina-wedding/01.jpg',    category: 'Wedding', title: 'Orcas & Christina' },
  { slug: 'cp-ct-wedding',              aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/cp-ct-wedding/01.jpg',              category: 'Wedding', title: 'CP & CT' },
  { slug: 'song-fong-hui-hoon-wedding', aspect: 'aspect-[3/4]',   colSpan: '',              src: '/gallery/song-fong-hui-hoon-wedding/01.jpg', category: 'Wedding', title: 'Song Fong & Hui Hoon' },
  { slug: 'anyau-zen-wedding',          aspect: 'aspect-square',  colSpan: 'lg:col-span-2', src: '/gallery/anyau-zen-wedding/01.jpg',          category: 'Wedding', title: 'An Yau & Zen' },
  { slug: 'zack-yih-wedding',           aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/zack-yih-wedding/01.jpg',           category: 'Wedding', title: 'Zack & Yih' },
  { slug: 'vince-carmen-wedding',       aspect: 'aspect-[3/4]',   colSpan: '',              src: '/gallery/vince-carmen-wedding/01.jpg',       category: 'Wedding', title: 'Vince & Carmen' },
  { slug: 'cy-ying-shing-wedding',      aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/cy-ying-shing-wedding/01.jpg',      category: 'Wedding', title: 'Chie Yee & Ying Shing' },
  { slug: 'ken-cherry',                 aspect: 'aspect-square',  colSpan: '',              src: '/gallery/ken-cherry/01.jpg',                 category: 'Wedding', title: 'Ken & Cherry' },
  { slug: 'chan-hwen-wedding',          aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/chan-hwen-wedding/01.jpg',           category: 'Wedding', title: 'Chan & Hwen' },
  { slug: 'keng-long-alice-wedding',    aspect: 'aspect-[3/4]',   colSpan: '',              src: '/gallery/keng-long-alice-wedding/01.jpg',    category: 'Wedding', title: 'Keng Long & Alice' },
  { slug: 'wedding',                    aspect: 'aspect-video',   colSpan: 'lg:col-span-2', src: '/gallery/yin-xuan-yong-shen-wedding/01.jpg', category: 'Wedding', title: 'Yin Xuan & Yong Shen' },
  { slug: 'kelvin-shi-yun-wedding',     aspect: 'aspect-[4/5]',   colSpan: '',              src: '/gallery/kelvin-shi-yun-wedding/01.jpg',     category: 'Wedding', title: 'Kelvin & Shi Yun' },
  { slug: 'ping-fiona-wedding',         aspect: 'aspect-[4/5]',   colSpan: 'lg:col-span-2', src: '/gallery/ping-fiona-wedding/01.jpg',         category: 'Wedding',  title: 'Ping & Fiona' },
  { slug: 'outdoor-portrait',           aspect: 'aspect-video',   colSpan: 'lg:col-span-2', src: '/gallery/outdoor-portrait/01.jpg',            category: 'Portrait', title: 'Outdoor & Portrait' },
]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-gutter">
          {galleryItems.map((item, i) => (
            <Link
              key={i}
              to={`/gallery/${item.slug}`}
              className={`group relative ${item.aspect} overflow-hidden bg-surface-container-low transition-all duration-500 border border-white/10 p-2 ${item.colSpan} block`}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-surface-dim/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-stack-sm">
                <span className="font-label-sm text-label-sm text-primary uppercase mb-2">
                  {item.category}
                </span>
                <span className="font-headline-sm text-headline-sm text-white">
                  {item.title}
                </span>
              </div>
            </Link>
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
            Inquire for 2025
          </a>
        </div>
      </main>
      <Footer />
    </div>
  )
}

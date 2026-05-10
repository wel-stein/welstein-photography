import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const BASE = 'https://cdn.myportfolio.com/ffbd58838097349a89e806e4c1433cba'

const galleryItems = [
  { slug: 'charles-fiona-wedding',      aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/db161c40-b80d-46df-a162-8781e7e42128_car_202x158.JPG`,  category: 'Wedding', title: 'Charles & Fiona' },
  { slug: 'vincent-ploy-wedding',       aspect: 'aspect-square',  colSpan: '',              src: `${BASE}/d68250ce-c67b-436d-bf6a-5a53d6674acd_car_202x158.jpg`,  category: 'Wedding', title: 'Vincent & Ploy' },
  { slug: 'orcas-christina-wedding',    aspect: 'aspect-video',   colSpan: 'lg:col-span-2', src: `${BASE}/134d7514-25f3-4637-b9b5-ae75a4273355_car_202x158.jpg`,  category: 'Wedding', title: 'Orcas & Christina' },
  { slug: 'cp-ct-wedding',              aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/33137189-4092-47c8-8120-18099d92aa44_car_202x158.jpg`,  category: 'Wedding', title: 'CP & CT' },
  { slug: 'song-fong-hui-hoon-wedding', aspect: 'aspect-[3/4]',   colSpan: '',              src: `${BASE}/169ce7e9-ae54-4b01-82c8-b59e4fb2af03_car_202x158.jpg`,  category: 'Wedding', title: 'Song Fong & Hui Hoon' },
  { slug: 'anyau-zen-wedding',          aspect: 'aspect-square',  colSpan: 'lg:col-span-2', src: `${BASE}/e42f27a4-fcd7-4ed9-9171-7f642c79079d_car_202x158.jpg`,  category: 'Wedding', title: 'An Yau & Zen' },
  { slug: 'zack-yih-wedding',           aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/ae1c3fd7-8308-4600-a844-68f184d3cd24_car_202x158.jpg`,  category: 'Wedding', title: 'Zack & Yih' },
  { slug: 'vince-carmen-wedding',       aspect: 'aspect-[3/4]',   colSpan: '',              src: `${BASE}/017b2666-ef4f-4bb1-86a4-5087ac2f9c7e_car_202x158.jpg`,  category: 'Wedding', title: 'Vince & Carmen' },
  { slug: 'cy-ying-shing-wedding',      aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/419a5c46069039.5846ec7d56c37_car_202x158.jpg`,           category: 'Wedding', title: 'Chie Yee & Ying Shing' },
  { slug: 'ken-cherry',                 aspect: 'aspect-square',  colSpan: '',              src: `${BASE}/339b8845114199.58272df68af24_car_202x158.jpg`,            category: 'Wedding', title: 'Ken & Cherry' },
  { slug: 'chan-hwen-wedding',           aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/378d2544278109.580e3ac9323e3_car_202x158.jpeg`,           category: 'Wedding', title: 'Chan & Hwen' },
  { slug: 'keng-long-alice-wedding',    aspect: 'aspect-[3/4]',   colSpan: '',              src: `${BASE}/dbca8c44276747.580e32d3241ff_car_202x158.jpeg`,           category: 'Wedding', title: 'Keng Long & Alice' },
  { slug: 'wedding',                    aspect: 'aspect-video',   colSpan: 'lg:col-span-2', src: `${BASE}/40da7536890757.572cd70285eb9_car_202x158.jpg`,            category: 'Wedding', title: 'Yin Xuan & Yong Shen' },
  { slug: 'kelvin-shi-yun-wedding',     aspect: 'aspect-[4/5]',   colSpan: '',              src: `${BASE}/fe707237016677.5731f1e27cb87_car_202x158.jpg`,            category: 'Wedding', title: 'Kelvin & Shi Yun' },
  { slug: 'ping-fiona-wedding',         aspect: 'aspect-[4/5]',   colSpan: 'lg:col-span-2', src: `${BASE}/a85f5b77-e630-481f-91cd-00db23dff6de_car_202x158.jpg`,  category: 'Wedding', title: 'Ping & Fiona' },
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

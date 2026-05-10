import { Link, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const projects = [
  { slug: 'charles-fiona-wedding',      title: 'Charles & Fiona',           folder: 'charles-fiona-wedding',      count: 10 },
  { slug: 'vincent-ploy-wedding',       title: 'Vincent & Ploy',            folder: 'vincent-ploy-wedding',       count: 9  },
  { slug: 'orcas-christina-wedding',    title: 'Orcas & Christina',          folder: 'orcas-christina-wedding',    count: 7  },
  { slug: 'cp-ct-wedding',              title: 'CP & CT',                    folder: 'cp-ct-wedding',              count: 8  },
  { slug: 'song-fong-hui-hoon-wedding', title: 'Song Fong & Hui Hoon',       folder: 'song-fong-hui-hoon-wedding', count: 13 },
  { slug: 'anyau-zen-wedding',          title: 'An Yau & Zen',               folder: 'anyau-zen-wedding',          count: 14 },
  { slug: 'zack-yih-wedding',           title: 'Zack & Yih',                 folder: 'zack-yih-wedding',           count: 13 },
  { slug: 'vince-carmen-wedding',       title: 'Vince & Carmen',             folder: 'vince-carmen-wedding',       count: 14 },
  { slug: 'cy-ying-shing-wedding',      title: 'Chie Yee & Ying Shing',      folder: 'cy-ying-shing-wedding',      count: 10 },
  { slug: 'ken-cherry',                 title: 'Ken & Cherry',               folder: 'ken-cherry',                 count: 10 },
  { slug: 'chan-hwen-wedding',           title: 'Chan & Hwen',                folder: 'chan-hwen-wedding',           count: 5  },
  { slug: 'keng-long-alice-wedding',    title: 'Keng Long & Alice',          folder: 'keng-long-alice-wedding',    count: 5  },
  { slug: 'wedding',                    title: 'Yin Xuan & Yong Shen',       folder: 'yin-xuan-yong-shen-wedding', count: 5  },
  { slug: 'kelvin-shi-yun-wedding',     title: 'Kelvin & Shi Yun',           folder: 'kelvin-shi-yun-wedding',     count: 5  },
  { slug: 'ping-fiona-wedding',         title: 'Ping & Fiona',               folder: 'ping-fiona-wedding',         count: 6  },
  { slug: 'proposal-by-terry',          title: 'Proposal by Terry',          folder: 'proposal-by-terry',          count: 7,  category: 'PORTRAIT' },
  { slug: 'tan-stacy-rom',              title: 'Tan & Stacy R.O.M',          folder: 'tan-stacy-rom',              count: 4,  category: 'PORTRAIT' },
  { slug: 'boon-chien-xie-pre-wedding', title: 'Boon Chien & Xie Pre-Wedding', folder: 'boon-chien-xie-pre-wedding', count: 7, category: 'PORTRAIT' },
  { slug: 'kelvin-rom',                 title: 'Kelvin R.O.M',               folder: 'kelvin-rom',                 count: 8,  category: 'PORTRAIT' },
  { slug: 'charity-event-atkulai',      title: 'Charity Event',              folder: 'charity-event-atkulai',      count: 2,  category: 'PORTRAIT' },
  { slug: 'friends-portrait',           title: 'Portrait',                   folder: 'friends-portrait',           count: 3,  category: 'PORTRAIT' },
]

function imgPath(folder, n) {
  return `/gallery/${folder}/${String(n).padStart(2, '0')}.jpg`
}

export default function WeddingStoryPage() {
  const { id } = useParams()
  const idx = projects.findIndex(p => p.slug === id)
  const project = projects[idx]

  if (!project) {
    return (
      <div className="bg-surface text-on-surface min-h-screen">
        <Navbar />
        <div className="flex items-center justify-center h-[60vh]">
          <p className="font-body-lg text-body-lg text-on-surface/40">Project not found.</p>
        </div>
        <Footer />
      </div>
    )
  }

  const { title, folder, count } = project
  const images = Array.from({ length: count }, (_, i) => imgPath(folder, i + 1))
  const next = projects[(idx + 1) % projects.length]

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="fixed top-[88px] left-0 right-0 z-40 px-margin-x max-w-container-max mx-auto py-3">
          <nav className="flex items-center gap-2 font-label-sm text-label-sm text-on-surface/40">
            <Link to="/" className="hover:text-primary transition-colors duration-300 uppercase">
              Gallery
            </Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface/70 uppercase">{title}</span>
          </nav>
        </div>

        {/* Cinematic Hero */}
        <section className="relative h-[921px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase mb-6 opacity-80">
              {project.category || 'WEDDING'}
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white uppercase">
              {title}
            </h1>
          </div>
        </section>

        <div className="max-w-container-max mx-auto px-margin-x py-stack-lg space-y-stack-lg">

          {/* Large Asymmetric Layout — images 2 & 3 */}
          {count >= 3 && (
            <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
              <div className="md:col-span-8 image-matte">
                <img
                  src={images[1]}
                  alt={title}
                  className="w-full h-full object-cover grayscale-[20%]"
                />
              </div>
              <div className="md:col-span-4 flex flex-col justify-end space-y-gutter">
                <div className="image-matte">
                  <img
                    src={images[2]}
                    alt={title}
                    className="w-full aspect-square object-cover"
                  />
                </div>
              </div>
            </section>
          )}

          {/* Full-width Statement — image 4 */}
          {count >= 4 && (
            <section className="w-full">
              <div className="image-matte">
                <img
                  src={images[3]}
                  alt={title}
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </section>
          )}

          {/* Remaining images — 3-column grid */}
          {count >= 5 && (
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {images.slice(4).map((src, i) => (
                <div key={i} className="image-matte">
                  <img
                    src={src}
                    alt={`${title} ${i + 5}`}
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              ))}
            </section>
          )}

          {/* Next Story */}
          <section className="pt-stack-lg border-t border-outline-variant/10">
            <div className="flex flex-col items-center">
              <p className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-on-surface/40 mb-8">
                CONTINUE THE JOURNEY
              </p>
              <Link
                to={`/gallery/${next.slug}`}
                className="group relative block w-full max-w-4xl overflow-hidden aspect-[21/9]"
              >
                <img
                  src={imgPath(next.folder, 1)}
                  alt={next.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h3 className="font-display-lg text-headline-md md:text-display-lg group-hover:scale-105 transition-transform duration-700 uppercase">
                    {next.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-2 font-label-sm text-label-sm tracking-widest border-b border-white/40 pb-1">
                    VIEW NEXT STORY
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </div>
                </div>
              </Link>
            </div>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  )
}

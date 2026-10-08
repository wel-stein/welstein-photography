import { Link } from 'react-router-dom'

export default function GalleryCard({ item }) {
  return (
    <Link
      to={`/gallery/${item.slug}`}
      className="group relative aspect-[4/3] overflow-hidden bg-surface-container-low transition-all duration-500 border border-white/10 p-2 block"
    >
      <img
        src={item.src}
        alt={item.title}
        loading="lazy"
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
  )
}

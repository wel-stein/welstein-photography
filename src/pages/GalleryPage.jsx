import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const galleryItems = [
  {
    aspect: 'aspect-[4/5]',
    colSpan: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTSe2sEl8cNi43YEd5MIwmm9wnG7f_vqDuaiVAe6aJZ4106967zlou1Syw_FPheAYTDDoy_4FkfKXqnXovSE_HaxOwr8aq8eW4jZQBxAvaWnBbQLE2PuC5_ajeg_--HS9BUIhRUYg-ItcC0VJ5JUVKQ-oHButnD-HtMXqw4v0xRX4iEXlRZ14rKoWqQbQVi4RZDvzxjU_RehnD711x9aNkWfi1BRBRzLe9HSwVXzGbFK3k-BWt0-NMDGu2Dz5fr9QH7EqBb6Mt7f9p',
    category: 'The Vow',
    title: 'Shadow & Light',
  },
  {
    aspect: 'aspect-square',
    colSpan: 'lg:col-span-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlv8Hvyn8bxKBOBDi0eiPbRZzGVlo3Ilx24xGeTEf508Lliyl0yBa07czofK-zg9mOhST7PrHkclYqX4dNP0_JJwWHCVP08i-KZVhbFsiuAYOCF6kEQ45we1XWUBeE2ua95n7yJeAVC_pXSv2MqXA9Tp1af589BzkzzUvE8VCPC2DWUBvj_uPuNV0B9L5hWwsOyrf9mU0YY7jW47_AE8wCDyKyGdqmTF0ie-7Yk-idpl3b7KhAbpvYna_qSkhduLYOpFjwhhlui8hS',
    category: 'Details',
    title: 'Circular Eternity',
  },
  {
    aspect: 'aspect-video',
    colSpan: 'lg:col-span-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDJrLDSWPbocVm6F97TXNqkJJycNrYSp-6ko0_wU39t6t6MAQIynbd6EzTvNJMgp4szCfKaGey7FDyJbl-cV1y5kGrHmOMtmwu8SUQ4q_QbfWIGI8ipb9bwLVi_AYWYjbRwGgoRL2ShZgDZTQ4-7wkxwogDJxwlVbQu3XxIXUjtIbqEWyfp7MijzyrRICewHja-gsqc59MKHjPYYJ6XgCrn0f1qU3Sbeh1T37UQoi040iCyzsqvy38LACKoMNhbjehniWCTXiyevOt',
    category: 'Preparation',
    title: 'The First Step',
  },
  {
    aspect: 'aspect-[3/4]',
    colSpan: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCC4OyVdB9Qp8cbOBXtBVK_52S8qBSnBcl94gJlbo5TJHy4hxxXgfg5Y0SYlQnRR6IBVGzUBcgA71BygyPU3b2539SE6DpStbhvZyp5zuo9Q7bGnwxhNOMOHSkEEWjeDzPlr33Mt5pkevY2Vos-P5FJtaaOMygqdC6CpF_Bp1Lq0QaJIRWO_74iomKvrXgvHiOhmqyobuo9YvVVvvyLcnHNo8BX6sn6KF3qgZ4sdqUMSEDCge9acBdpcKhjLoHCOar5Rzk1Cj1HRM2r',
    category: 'Atmosphere',
    title: 'Warmth in Dark',
  },
  {
    aspect: 'aspect-[4/5]',
    colSpan: 'lg:col-span-1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpnk1VgJx1A37WyE94beiCjRRo3F08ct0lmBfYBGHEVo-qbei8UP6XIoTEku-42EkRj45QmRi8I_NpoFtnRWY8upBeZ5jHJcfEudEz2Qu0_YmeF-FrFDkSEiTvIYwXA0tx1xEI0OUqPHXhWzm0QMJQodUMlVfpqjzqj5mBkeUqsHavxJbxUoh43W8jIi8xmCP1PuI2Gmnz8lpuTY3FEAjbQsf9q9K28Lwcnx-og12RHu6813PAXOUfPloCmtvws9Cea51ckFFflJ3J',
    category: 'Portrait',
    title: 'Timeless Grace',
  },
  {
    aspect: 'aspect-square',
    colSpan: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBG7hzb8YBwPU4kezWRWf4h1jzwYdvAaY_m-jkC08FjLbUC9baqRxZzPamHqAgmDyiE4ETuvdXbOuqBReETiMAxdaQu58Is3PmUUStPnKmk1yLJ90Z8lZYab_zOVBi6wHkzR8DRvUB5gCfW6QDpHYFxt3Al22Z06KrjZCFxlLU3RsXzzHT8ialde3VJiDUuaKDyJYuErvjm239dmBJxWGaD0siMOykALQK2iMJE4BQI3iJbLa56mGpImlb_KuhSPj_8k8DcHhZs5nn-',
    category: 'Nature',
    title: 'Entwined Growth',
  },
  {
    aspect: 'aspect-[3/4]',
    colSpan: '',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDr9e2bt6VHyP1OnPwYjVC3QPjqI5P8HMVdshSmOqCmrTBAKqpd3OzuBXYSwuKSvfJ0GG-s15bVMZxnaQY7xrbcUc2-AD6uNAp4d96AR7RpQPWp5_hbZ8N6iYeZ4EZgxb-_W-UJxETltzdc1y8hrN7rfukwZQFqMnsqRIaZS-YKwVJD-gUFzGVlEfkR1BROBNA29PUos2IFOziuydQYSWbYyDrZnt54kRTBfV99MTyZvjE9VvCyd-3f_-z-o9KN3DsNvDCQuxcsbfs',
    category: 'Artistic',
    title: 'Geometry of Style',
  },
  {
    aspect: 'aspect-[4/5]',
    colSpan: 'lg:col-span-2',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI6FAPq_ETHZcvVI3_Uh3uGpUf0Sed9OG3ykMt-UnQZ813KbL2doXPDKd5hHTcKU4V7vo6FRE0Ky4j6ElFf_vrB1n0c2ctH1h1ry9O8f04lSoJTRi1mvOFdJB80hGPJlCEMIlQT--ADfVIcSe4zBcPsaNk7DDdGUw2OD-odKxGuMlkLiJnCF7btI0H4nwN1WxqLJVQPot-yFKqwhBba8_iZp9z2aMjYmnhX7m-LBWJMfdVzj8J2ry_Rr1iBN0BfdqRkL5NlabiIFzL',
    category: 'The Gown',
    title: 'Waiting for Light',
  },
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
            <div
              key={i}
              className={`group relative ${item.aspect} overflow-hidden bg-surface-container-low transition-all duration-500 border border-white/10 p-2 ${item.colSpan}`}
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
            </div>
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

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function WeddingStoryPage() {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <Navbar />
      <main>
        {/* Cinematic Hero */}
        <section className="relative h-[921px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgDFlZg0AkVqViJrANogCL3qGGH_iTgdNgwb3ykvQrxnGE8ap6My8kYzCD-HZ03KWp4kGM-gYiCyT9R24n0DTwh3fOaTTk8ytVQTu5IJKwP-8oO-jULoG_FpiaNaS-XJljfh91nMS8abnd6xoglu8cssaU0q9yjnCJfRRCqC_fJQCjYtU83cM1aUTbHjm3pVGr5K1R54Tc7oRRP7_6j6Y9Gsik_Ff3XEmHaRlTMJfjFSfpDC1tMdzGPS7c9SWZijoFJ8dPv4uYBvty"
            alt="Elara & Sebastian hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
            <span className="font-label-sm text-label-sm tracking-[0.3em] uppercase mb-6 opacity-80">
              ESTABLISHED IN TUSCANY
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-4 text-white">
              ELARA &amp; SEBASTIAN
            </h1>
            <p className="font-headline-sm text-headline-sm italic opacity-90">
              October 14th, 2024
            </p>
          </div>
        </section>

        {/* Narrative Gallery Flow */}
        <div className="max-w-container-max mx-auto px-margin-x py-stack-lg space-y-stack-lg">
          {/* Opening Narrative */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-start-4 md:col-span-6 text-center">
              <h2 className="font-label-sm text-label-sm tracking-[0.2em] uppercase mb-8 text-on-surface/50">
                THE JOURNEY
              </h2>
              <p className="font-body-lg text-body-lg italic leading-relaxed">
                In the heart of the Val d'Orcia, Elara and Sebastian celebrated their union amidst rolling hills and ancient cypress trees. The day unfolded with a quiet intensity, captured through a lens of timeless elegance and cinematic depth.
              </p>
            </div>
          </section>

          {/* Large Asymmetric Layout */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-8 image-matte">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWXlZ46h3WLztVWnvnv-vzyJwYn-Mq-KTm3JtYXf1Fql5dTj4ucQTEuO_V3A0oltYmba4zjHLHbXNBFiigy4HEqpEefrxe9gAxdpyCUkMRfoMWs4_wcBm0FfvsF_Avjga_7uj8cyqRVwb-6aODB1LTYfOq23noG5CUHpfXhsyJGJXgBDY5m1iWajdhRmXOTuMyfeQBUJzQMsBHomCpKdfcNXnqnoW3Z0Qz9n6vTVQ3ExTEAECPjCE2cHE2shi5D8Io4aoG5d-YYCVy"
                alt="Candid moment"
                className="w-full h-full object-cover grayscale-[20%]"
              />
            </div>
            <div className="md:col-span-4 flex flex-col justify-end space-y-gutter">
              <div className="image-matte">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMav9N_mJGZt1U0C0aQQ9L-2xnilKAhHeBUeoU29QbQI3bujQJCqLBGaA7LEUspG-PrRH0uQAefAtPuHtazAw0dnFP4Xyr4m99cPuy7jlBvU7ZXXaffoFIBf13I5dUxJVPXJrYLDCqp4_-5jYF0DEcUso2CoJesRghstAS3ZU3MUfTcmghdT1kavNCk3NVy0yr2py-WiML_nWIDJfbjValz675Ye1N0oZ7fU6nbRkbA3upRHDbTPHb_8kq7OHePoKqylmFPUSM5C0O"
                  alt="Detail shot"
                  className="w-full h-auto aspect-square object-cover"
                />
              </div>
              <p className="font-label-sm text-label-sm italic text-on-surface/40 pt-4">
                THE PREPARATIONS
              </p>
            </div>
          </section>

          {/* Full Width Statement */}
          <section className="w-full">
            <div className="image-matte">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAcLQXjFmXQxxMpo1YWvH0HYgRpWmciWkCd9k3H8FeKdPuOptBVq2n89a8AZuga7c_CMsHMW1bhDeJp0FpQWm9w3m8PoUrD1h61wZn2qDh_NQN8GPeLt-GmZjlcqCALHssAk9sf3hPXuj5rHzwDJeybwGbHCjQxiSQTl54Rm7W1PFqWy9tzFmoG9bojiZiiEJD6avZOo8R_Pe3xTx-fTLmnCI5klugIHmlGIykJKrD7NYHAETx17CXwcel3Jr2ia12owxoHig3bIWIH"
                alt="Ceremony view"
                className="w-full h-[716px] object-cover"
              />
            </div>
          </section>

          {/* Detail Grid (Bento Style) */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter h-auto md:h-[600px]">
            <div className="md:col-span-4 image-matte h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1y_jT2qudEDbUwFECb57ir4XBwva5qVygJoSp8PV6ErUFQHjTuT9gBKxZ6gQ3oSjB8pBV0u4JrbNKO4Fm1b1UTV_9iMMvOH8RZWHWgqKyRV_B5Nw0AMELJkaEIwdqMf8Wi-xE1Gv-q74x4C6qIUBJdrjzBDoNFcewSjgFLM3DFKr-rZLS3Ug5Ldho700vjKxrKMnqOvYgGZlUeIi8cVWPfP94L5FJKzHOFAjDe3BGuruL5ienAaOdM-Xx8_G-hNxksHNuikzD3z0K"
                alt="Ring detail"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-4 image-matte h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCorbqPzv85ZJeF98WRuQjaNRG_hNqkkVneLaD2mc2rme25rObjhK-ZVJwnaEq2YYxubwJEfYc3eSyafmOyJKck2AX3HwLm9_aCQkGh5HM0ankoG6glgFHJHLiCcPn6Waj1P2yU4-JjfDNhBIg4MYzcNvqBXKCHalXnZoxIQYLJFwmyHLGT9c3cDg_OwOmqUrjSRs1dyqeetP-BgtMUtB0PBlNfAmTv1_ftQ8omsZ7dch1WEnOwho5C3AxX3PxPDxyqVJJJ72hYH0G0"
                alt="Table setting"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:col-span-4 image-matte h-full">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCApDJGwuLKaIJmVuz1CCnzb5o1N8GM2XVjIgVxca4QjKPrVcQvWts2CRqCVZU9zUQe4YWmzBLv2-El-nkY89z7cCXkZR9SdChX32YAldbCY9uklDo3yCZPMgBdzccunRG8SU-A1A7ASzt7M2PXBHalwglkfvK-_p2FAgBafLak3J6QJ2xwBLnrmidD6hCByLX-Hj6l9A6XPPYHh3a_TnIiruBxdoNKaetYH2FhQUFgEBLDhm-8cmi_vAB7qeITWqhSrGuthbVgNAd1"
                alt="Bouquet detail"
                className="w-full h-full object-cover"
              />
            </div>
          </section>

          {/* Testimonial */}
          <section className="bg-surface-container-low py-stack-md px-12 md:px-24 flex flex-col items-center text-center border border-white/5">
            <span
              className="material-symbols-outlined text-secondary mb-8"
              style={{ fontSize: '48px' }}
            >
              format_quote
            </span>
            <blockquote className="font-headline-md text-headline-md mb-8 max-w-3xl leading-relaxed italic">
              "Walking through these images feels like reliving the day in slow motion. Welstein didn't just take photos; they captured the invisible threads of emotion that tied everything together. It's a cinematic masterpiece that we'll treasure forever."
            </blockquote>
            <cite className="font-label-sm text-label-sm tracking-widest uppercase not-italic text-on-surface/60">
              — ELARA &amp; SEBASTIAN
            </cite>
          </section>

          {/* Next Story */}
          <section className="pt-stack-lg border-t border-outline-variant/10">
            <div className="flex flex-col items-center">
              <p className="font-label-sm text-label-sm tracking-[0.2em] uppercase text-on-surface/40 mb-8">
                CONTINUE THE JOURNEY
              </p>
              <a
                href="#"
                className="group relative block w-full max-w-4xl overflow-hidden aspect-[21/9]"
              >
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnQGgSNSbcE5TBiZqIud2cvk6xGYsjorxnXczewrNdy7EQp-AoliSmqsT6t_g7191nO-pW9TYiGWfk4sM2gRO7-iNp1mZFtl0CCnuXDzFFNt2isoEs_vCGrbsi7AU86xcTkO8jcHzCU_7xEwznQNihK_RjciitLKUzRAGFd0vhgYyURWgpcCTuuqcW3-HzMHhaZGNTaqW7jNJlBdxNRbHi24HEQaAUKxBJc8oH9feWdBHMyb9OiYSjaNSHa65xV9ChKeZCbFHkDP5w"
                  alt="Next story"
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                  <h3 className="font-display-lg text-headline-md md:text-display-lg group-hover:scale-105 transition-transform duration-700">
                    CLARA &amp; MARCUS
                  </h3>
                  <div className="mt-4 flex items-center gap-2 font-label-sm text-label-sm tracking-widest border-b border-white/40 pb-1">
                    VIEW NEXT STORY
                    <span className="material-symbols-outlined">arrow_right_alt</span>
                  </div>
                </div>
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}

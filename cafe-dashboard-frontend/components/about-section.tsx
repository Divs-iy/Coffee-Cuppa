import Image from "next/image"

export function AboutSection() {
  return (
    <section className="relative py-16 md:py-24 bg-cream text-espresso">
      <Image src="/cozy-cafe-interior.png" alt="About Background" fill className="object-cover opacity-20" />
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-balance">{"Our Story"}</h2>
        <p className="text-lg md:text-xl leading-relaxed text-pretty">
          {
            "At Crushed by Beans, we are passionate about bringing you the finest coffee experience. Sourced from the best plantations and roasted to perfection, every cup tells a story of dedication and flavor. Join us in celebrating the art of coffee."
          }
        </p>
      </div>
    </section>
  )
}

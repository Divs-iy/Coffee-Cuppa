import Image from "next/image"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center text-white">
      <Image src="/dark-coffee-beans-background.jpg" alt="Hero Background" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 space-y-6 p-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-balance leading-tight">{"Crushed by Beans"}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-pretty">
          {"Experience the rich aroma and exquisite taste of our freshly brewed coffee."}
        </p>
        <Button className="bg-gold text-espresso hover:bg-gold/90 px-8 py-3 text-lg rounded-full shadow-lg transition-all duration-300 ease-in-out">
          {"View Menu"}
        </Button>
      </div>
    </section>
  )
}

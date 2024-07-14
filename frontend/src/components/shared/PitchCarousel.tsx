import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

const Pitch = [
  {
    title: "1. Songcrew",
    description1: "Une dApp qui permet au public de devenir producteur de ses artistes favoris.",
    description2:  "Une plateforme d'achat de droits d'auteur musicaux avant la création et la sortie d'un projet musical.",
    image: "/songcrew-pitch1-removebg-preview.png",
  },
  {
    title: "2. NFT",
    description1: "L'artiste met en vente ses droits d'auteur sous forme de NFT pour financer son projet.",
    description2: "L'utilisateur peut acheter ces NFT et percevoir les droits d'auteur directement dans son wallet.",
    image: "/songcrew-nft.png",
  },
  {
    title: "3. Revenus",
    description1: "Les revenus générés par le projet sont versés directement sur la dApp qui se charge de redistribuer les revenus aux détenteurs de NFT.",
    image: "/songcrew-eth-logo-removebg-preview.png",
  },
]

export function PitchCarousel() {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {Pitch.map((pitch, index) => (
          <CarouselItem key={index}>
            <div className={`h-96 w-full flex ${index % 2 === 0 ? "flex-row": "flex-row-reverse"} justify-between gap-10 bg-slate-700 rounded-lg p-12`}>
              <div className="flex flex-col justify-around">
                <h1><strong>{pitch.title}</strong></h1>
                <p>{pitch.description1}</p>
                <p>{pitch.description2}</p>
              </div>
              <Image src={pitch.image} alt={pitch.title} width={500} height={500} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

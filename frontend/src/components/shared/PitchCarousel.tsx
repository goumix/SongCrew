import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Pitch = [
  {
    title: "Pitch 1",
    description: "SONGCREW permet au public de devenir producteur de ses artistes favoris.",
  },
  {
    title: "Pitch 2",
    description: "Description 2",
  },
  {
    title: "Pitch 3",
    description: "Description 3",
  },
  {
    title: "Pitch 4",
    description: "Description 4",
  },

]

export function PitchCarousel() {
  return (
    <Carousel className="w-full max-w-4xl">
      <CarouselContent>
        {Pitch.map((pitch, index) => (
          <CarouselItem key={index}>
            <div className="h-96 w-full bg-white rounded-lg">
              <h1 className="text-black">{pitch.title}</h1>
              <p>{pitch.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

import Marquee from "@/components/magicui/marquee";
import { MarqueeDemo } from "@/components/shared/MarqueeProjects";
import { PitchCarousel } from "@/components/shared/PitchCarousel";
import Card from "@/components/ui/Card";
import CardAdvisor from "@/components/ui/CardAdvisor";
import Image from "next/image";
import Link from "next/link";

const adivsors = [
  {
    name: "Cécile Tesson",
    role: "Blockchain consultant",
    image: "/Cecile.jpeg",
    link: "https://www.linkedin.com/in/c%C3%A9cile-tesson-a87a8068/",
  },
  {
    name: "Leopold Saingre",
    role: "Blockchain consultant",
    image: "/Leopold.jpeg",
    link: "https://www.linkedin.com/in/leopold-saingre-6b55682bb/",
  },
  {
    name: "Thomas Desmay",
    role: "Blockchain consultant",
    image: "/Thomas.jpeg",
    link: "https://www.linkedin.com/in/thomas-desmay-b8a8b2198/",
  },
  {
    name: "test",
    role: "Blockchain developer",
    image: "/Goumix.jpeg",
    link: "https://github.com/goumix",
  },
];

export default function Home() {
  return (
    <div className="h-full">
      <Image className="absolute bottom-0 z-0" src="/songcrew-image-2-removebg-preview (2).png" alt="Next.js Logo" width={600} height={600} />
      <div className="flex flex-row items-center px-8">
        <div className="w-1/3"></div>
        <div className="w-full h-screen flex flex-col items-center justify-center pb-32 gap-10">
          <p className="text-center text-lg">Become the producer of your favorite artists !</p>
          <h1 className="text-8xl text-center"><strong>Welcome to<br/> SongCrew</strong></h1>
          <div className="flex flex-row gap-6 z-10">
            <Card lgPadding>
              <h1 className="text-4xl text-center"><strong>+ 8</strong></h1>
              <p className="text-center">projects</p>
            </Card>
            <Card lgPadding>
              <h1 className="text-4xl text-center"><strong>+ 100</strong></h1>
              <p className="text-center">artists</p>
            </Card>
            <Card lgPadding>
              <h1 className="text-4xl text-center"><strong>+ 30</strong></h1>
              <p className="text-center">investors</p>
            </Card>
          </div>
        </div>
        <div className="w-1/3 flex flex-col gap-2 pb-32">
          <h1 className="text-2xl text-center"><strong>Our adivsors</strong></h1>
          {adivsors.map((advisor, index) => (
              <CardAdvisor key={index} name={advisor.name} role={advisor.role} image={advisor.image} link={advisor.link} />
          ))}
        </div>
      </div>
      <div className="h-[300px]"></div>
      <MarqueeDemo />
      <div className="w-full h-full flex items-center justify-center py-36">
        <PitchCarousel />
      </div>
    </div>
  );
}

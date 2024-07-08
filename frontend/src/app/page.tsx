import Card from "@/components/ui/Card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full">
      <Image className="absolute bottom-0 z-0" src="/songcrew-image-2-removebg-preview (2).png" alt="Next.js Logo" width={600} height={600} />
      <div className="flex flex-row items-center px-8">
        <div className="w-1/4"></div>
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
        <div className="w-1/4 flex flex-col gap-2 pb-32">
          <h1 className="text-2xl text-center"><strong>Our adivsors</strong></h1>
          <Link href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/">
            <Card>
              <div className="flex flex-col justify-start gap-2">
                <div className="flex flex-row gap-2">
                  <Image src="/Profil.png" alt="Goumix" width={25} height={25} className="rounded-full aspect-square" />
                  <p className="text-center">@goumix</p>
                </div>
                <p>Developpeur</p>
              </div>
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/">
            <Card>
              <div className="flex flex-col justify-start gap-2">
                <div className="flex flex-row gap-2">
                  <Image src="/Profil.png" alt="Goumix" width={25} height={25} className="rounded-full aspect-square" />
                  <p className="text-center">@goumix</p>
                </div>
                <p>Developpeur</p>
              </div>
            </Card>
          </Link>
          <Link href="https://www.linkedin.com/in/alexandre-roux-1b1b1b1b1/">
            <Card>
              <div className="flex flex-col justify-start gap-2">
                <div className="flex flex-row gap-2">
                  <Image src="/Profil.png" alt="Goumix" width={25} height={25} className="rounded-full aspect-square" />
                  <p className="text-center">@goumix</p>
                </div>
                <p>Developpeur</p>
              </div>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

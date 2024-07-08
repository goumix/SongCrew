import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Image className="absolute bottom-0" src="/songcrew-image-2-removebg-preview (2).png" alt="Next.js Logo" width={600} height={600} />
      <div className="w-full h-screen flex flex-col items-center justify-center pb-60">
        <p className="text-center text-lg">Become the producer of your favorite artists !</p>
        <h1 className="text-8xl text-center"><strong>Welcome to<br/> SongCrew</strong></h1>
        <div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-10">Get Started</button>
        </div>
      </div>
    </div>
  );
}

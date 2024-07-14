import Link from "next/link"

const Footer = () => {
  return (
    <footer className="w-screen h-72 flex flex-row justify-between bg-slate-700 p-10">
      <div className="w-3/4 flex flex-col justify-start gap-6">
        <div>
          <h1><strong>SongCrew</strong></h1>
          <p>Become the producer of your favorite artists !</p>
        </div>
        <div className="w-full flex flex-row px-4">
          <div className="w-1/6 flex flex-col gap-2">
            <Link href="/">Home</Link>
            <Link href="/songs">Songs</Link>
            <Link href="/whitepaper">Whitepaper</Link>
          </div>
          <div className="w-1/6 flex flex-col gap-2">
            <Link href="/">About</Link>
            <Link href="/">FAQ</Link>
            <Link href="/">Blog</Link>
          </div>
          <div className="w-1/6 flex flex-col gap-2">
            <Link href="/">Privacy Policy</Link>
            <Link href="/streamsincome">Pay an artist</Link>
          </div>
        </div>
      </div>
      <div className="w-1/4 h-full flex justify-end items-end">
        <p>&copy; SoncCrew {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer

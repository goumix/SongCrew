import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-14 flex flex-row justify-between items-center px-2">
      <div className="flex flex-row items-center gap-6">
        <Link href="/">
          <h1><strong>SongCrew</strong></h1>
        </Link>
        <nav className="flex flex-row gap-6 py-1 px-6 border rounded-md bg-opacity-5 bg-white">
          <Link href="/songs">Songs</Link>
          <Link href="/create">Create your project</Link>
          <Link href="/follow">Following projects</Link>
          <Link href="/whitepaper">Whitepaper</Link>
        </nav>
      </div>
      <ConnectButton chainStatus="icon" />
    </header>
  );
}

export default Header;

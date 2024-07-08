import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-14 flex flex-row justify-between items-center px-2">
      <div className="flex flex-row items-center gap-4">
        <h1><strong>SongCrew</strong></h1>
        <nav className="flex flex-row gap-4 py-1 px-4 border rounded-md">
          <Link href="/songs" className="text-blue-500">Songs</Link>
          <Link href="/playlists" className="text-blue-500">Playlists</Link>
          <Link href="/profile" className="text-blue-500">Profile</Link>
        </nav>
      </div>
      <ConnectButton />
    </header>
  );
}

export default Header;

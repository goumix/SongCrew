import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("SongcrewModule", (m) => {
  const songcrew = m.contract("Songcrew");

  return { songcrew };
});

export default LockModule;

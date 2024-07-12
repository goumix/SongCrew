import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("SongcrewModule", (m) => {
  const songcrew = m.contract("Songcrew");

  m.call(songcrew, "createProject", ["Bob Marley", "grosbedo", "Could You Be Loved", "Reggea", "Could you be loved and be loved?", 10, 40], { id: "createProject7" });
  m.call(songcrew, "createProject", ["Travis Scott", "hjklp", "Sicko Mode", "Hip-Hop/Rap", "'Sicko Mode' is a phrase that became popular through a song of the same name by the American rapper Travis Scott", 10, 10], { id: "createProject6" });
  m.call(songcrew, "createProject", ["Daft Punk", "hjnbvcx", "Harder, Better, Faster, Stronger", "Electronic", "Work it", 10, 5], { id: "createProject5" });
  m.call(songcrew, "createProject", ["Michael Jackson", "edcvfrt", "Billie Jean", "Pop", "She was more like a beauty queen from a movie scene", 10, 25], { id: "createProject4" });
  m.call(songcrew, "createProject", ["Charles Aznavour", "tgbnhy", "Hier encore", "Pop", "En 1964 Charles Aznavour fête son 40ème anniversaire.", 10, 40], { id: "createProject1" });
  m.call(songcrew, "createProject", ["PNL", "tyuiop", "J'comprends pas", "Hip-Hop/Rap", "Ce soir, j'fume un gros, gros teh'", 10, 35], { id: "createProject2" });
  m.call(songcrew, "createProject", ["AC/DC", "asdfgh", "Thunderstruck", "Rock", "Thunder, thunder, thunder, thunder", 10, 20], { id: "createProject3" });

  return { songcrew };
});

export default LockModule;

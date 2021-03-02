import { v4 as v4uuid } from "uuid";

function chillHop() {
  return [
    {
      name: "Woodnote",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
      artist: "Aarigod, imagiro",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=13014",
      color: ["#17200F", "#AFC765"],
      id: v4uuid(),
      active: true,
    },
    {
      name: "Zenith",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg",
      artist: "Leavv",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9927",
      color: ["#35322C", "#95977D"],
      id: v4uuid(),
      active: false,
    },
    {
      name: "Ocean View",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      artist: "G Mills, Kyle McEvoy, Luke Otwell",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10320",
      color: ["#133361", "#CFB7C7"],
      id: v4uuid(),
      active: false,
    },
    {
      name: "Today Feels Like Everyday",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
      color: ["#0C2021", "#90493A"],
      id: v4uuid(),
      active: false,
    },
    {
      name: "Lax Incense",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      artist: "Mama Aiuto, Daphné",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12125",
      color: ["#0C2021", "#90493A"],
      id: v4uuid(),
      active: false,
    },
    {
      name: "Habitat",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/2899f7cc22ab12e17d0119819aac3ca9dbab46e6-1024x1024.jpg",
      artist: "Philanthrope, Kendall Miles",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10265",
      color: ["#39231F", "#8F4F36"],
      id: v4uuid(),
      active: false,
    },
  ];
}

export default chillHop;

import house from "../assets/images/house.jpg";
import ketchin from "../assets/images/ketchin.jpg";
import office from "../assets/images/office.jpg";
import bathtoom from "../assets/images/toilet.jpg";
import window from "../assets/images/window.jpg";
import carpat from "../assets/images/carpat.jpg";

import mop from "../assets/icons/mop.png";
import liquid from "../assets/icons/liquid-soap.png";
import squeegee from "../assets/icons/squeegee.png";
import dustpan from "../assets/icons/dustpan.png";
import mop2 from "../assets/icons/mop2.png";
import sponge from "../assets/icons/sponge.png";

export const servicesList = [
  {
    id: 1,
    title: "House Cleaning",
    image: house,
    icons: mop,
    discretion: "",
    isLarge: "large",
  },

  {
    id: 4,
    title: "Office Cleaning",
    image: office,
    icons: liquid,
    discretion: "",
    isLarge: "",
  },

  {
    id: 6,
    title: "Kitchen Cleaning",
    image: ketchin,
    icons: dustpan,
    discretion: "",
    isLarge: "",
  },
  {
    id: 5,
    title: "Window Cleaning",
    image: window,
    icons: squeegee,
    discretion: "",
    isLarge: "large",
  },
  {
    id: 7,
    title: "Batchroom Cleaning",
    image: bathtoom,
    icons: sponge,
    discretion: "",
    isLarge: "",
  },
  {
    id: 3,
    title: "Carpet Cleaning",
    image: carpat,
    icons: mop2,
    discretion: "",
    isLarge: false,
  },
];

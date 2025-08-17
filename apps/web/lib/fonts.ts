// apps/web/lib/fonts.ts
import localFont from "next/font/local";

// ---- real fonts you downloaded ----
export const alegreya = localFont({
    src: "../fonts/Alegreya-VariableFont_wght.ttf",
    variable: "--font-alegreya",
});

export const bebasNeue = localFont({
    src: "../fonts/BebasNeue-Regular.ttf",
    variable: "--font-bebas-neue",
});

export const inter = localFont({
    src: "../fonts/Inter-VariableFont_opsz,wght.ttf",
    variable: "--font-inter",
});

export const lato = localFont({
    src: "../fonts/Lato-Black.ttf",
    variable: "--font-lato",
});

export const merriweather = localFont({
    src: "../fonts/Merriweather-VariableFont_opsz,wdth,wght.ttf",
    variable: "--font-merriweather",
});

// ---- dummy placeholders for all other fonts ----
const dummyFont = { variable: "--font-dummy" };

export const rubik = dummyFont;
export const playfairDisplay = dummyFont;
export const oswald = dummyFont;
export const ptSans = dummyFont;
export const workSans = dummyFont;
export const robotoSlab = dummyFont;
export const sourceSerif4 = dummyFont;
export const quicksand = dummyFont;
export const openSans = dummyFont;
export const montserrat = dummyFont;
export const poppins = dummyFont;
export const sourceSans3 = dummyFont;
export const raleway = dummyFont;
export const notoSans = dummyFont;
export const roboto = dummyFont;
export const mulish = dummyFont;
export const nunito = dummyFont;

import { AppContainer } from './componentFunctions/components.js';
import { setRacoonFavicon } from './componentFunctions/function.js';

document.addEventListener("DOMContentLoaded", () => {
  setRacoonFavicon();
  const appDiv = document.getElementById("app");

  const appElement = AppContainer({
    title: "Un an alături de tine ♥",
    startDate: "2025-09-14",
    events: [
      { date: "14 Septembrie 2025", title: "O zi foarte speciala, pe care nu o voi uita niciodata", description: "Esti foarte draguta cand adormi pe scaunul pasagerului, inca tin minte cand ai dat un quick nap in drum spre spot." },
      { date: "14 Septembrie 2026", title: " 'Insert unoffical 'move in with me' invitation'", description: "Mi se pare foarte frumos cum se nimereste sa incepem sa locuim impreuna in acelasi timp in care facem un an de relatie" }
    ],
    letterTitle: "",
    paragraphs: [
      "Hello Stinky,",
      "Nu am idee daca asta poate compensa pentru ce ai confectionat tu pentru mine, dar am vrut sa-ti scriu și eu cateva randuri.",
      "Vreau să știi cat de recunoscator sunt pentru ca esti iubita mea, faptul ca incerci sa cresti cu fiecare zi, faptul ca incerci sa treci peste greutatile tale din trecut ca sa ma iubesti cat poti tu de mult si faptul ca ma sustii cat stii tu de bine.",
      "Spre ca de acum incolo sa avem din ce in ce mai multi ani impreuna, pana cand nu vom mai putea tine cont de cat timp suntem impreuna, si sa mergem sa vizitam multe locatii impreuna ca sa completam albumul ala de care mentionam ca vrem sa-l facem, si in mare, sa cladim impreuna un viitor frumos, doar pentru noi",
      "Abia astept, de asemenea, sa te apuci si tu de carnet, sa-l iei, si sa ne plimbam cu masinile impreuna, atunci cand jocurile pe PC pur si simplu sunt prea plictisitoare.",
      "Also cum scrie si mai sus, si cum era deja evident, asta poti zice ca e o invitatie neoficiala, oficiala de a te muta cu mine.",
    ],
    signature: "Luv u 3000 <3",
    racoonCount: 16
  });

  appDiv?.appendChild(appElement);
});
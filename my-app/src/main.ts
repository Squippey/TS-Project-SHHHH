import './style.css'
import heroImg from './assets/hero.png'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import { setupCounter } from './counter.ts'


interface TimelineEventData {
  date: string;
  title: string;
  description: string;
}

interface PageConfig {
  title: string;
  startDate: string; // YYYY-MM-DD
  timelineEvents: TimelineEventData[];
  letterTitle: string;
  letterParagraphs: string[];
  signature: string;
}

const config: PageConfig = {
  title: "Un an alături de tine ♥",
  startDate: "2025-09-14",
  timelineEvents: [
    {
      date: "14 Septembrie 2025",
      title: "Prima noastră întâlnire",
      description: "Momentul în care a început totul și prima oară când am realizat cât de specială ești."
    },
    {
      date: "Vara 2026",
      title: "Prima noastră vacanță",
      description: "Zilele pline de râsete, drumuri lungi și amintiri pe care nu le voi uita niciodată."
    },
    {
      date: "14 Septembrie 2026",
      title: "1 An de Relație",
      description: "Ziua în care sărbătorim primul nostru capitol complet împreună."
    }
  ],
  letterTitle: "Răspunsul meu pentru tine",
  letterParagraphs: [
    "Draga mea,",
    "Poezia ta scrisă pe papirus a fost unul dintre cele mai frumoase cadouri pe care le-am primit vreodată. Pentru că ai pus atât de mult suflet și timp în ceva creat manual, am vrut să îți ofer la rândul meu ceva construit piesă cu piesă, în stilul meu.",
    "Fiecare linie din codul acestui site este gândită să păstreze amintirea primului nostru an împreună."
  ],
  signature: "Cu drag,"
};

function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  options: { className?: string; textContent?: string; innerHTML?: string } = {}
): HTMLElementTagNameMap[K] {
  const el = document.createElement(tag);
  if (options.className) el.className = options.className;
  if (options.textContent) el.textContent = options.textContent;
  if (options.innerHTML) el.innerHTML = options.innerHTML;
  return el;
}

/**
 * Calculează numărul de zile de la data de start până astăzi.
 */
function calculateDays(startDateStr: string): number {
  const start = new Date(startDateStr);
  const today = new Date();
  const diffTime = Math.abs(today.getTime() - start.getTime());
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
}

function createHeader(titleText: string, startDateStr: string): HTMLElement {
  const header = createElement("header");
  const h1 = createElement("h1", { innerHTML: titleText });
  
  const days = calculateDays(startDateStr);
  const counter = createElement("div", {
    className: "counter",
    textContent: `${days} de zile pline de amintiri`
  });

  header.appendChild(h1);
  header.appendChild(counter);
  return header;
}

function createTimelineItem(event: TimelineEventData): HTMLElement {
  const item = createElement("div", { className: "timeline-event" });
  const date = createElement("div", { className: "date", textContent: event.date });
  const title = createElement("h3", { className: "event-title", textContent: event.title });
  const desc = createElement("p", { textContent: event.description });

  item.append(date, title, desc);
  return item;
}

function createTimeline(events: TimelineEventData[]): HTMLElement {
  const container = createElement("div", { className: "timeline" });
  events.forEach(ev => container.appendChild(createTimelineItem(ev)));
  return container;
}

function createLetter(title: string, paragraphs: string[], signature: string): HTMLElement {
  const letterBox = createElement("div", { className: "letter-box" });
  const h2 = createElement("h2", { textContent: title });
  
  letterBox.appendChild(h2);

  paragraphs.forEach(text => {
    const p = createElement("p", { textContent: text });
    letterBox.appendChild(p);
  });

  const sigP = createElement("p", { 
    className: "signature", 
    textContent: signature 
  });
  letterBox.appendChild(sigP);

  return letterBox;
}

function initApp(): void {

  const appDiv = document.getElementById("app");
  if (!appDiv) return;

  const mainContainer = createElement("div", { className: "main-container" });

  const header = createHeader(config.title, config.startDate);
  const timeline = createTimeline(config.timelineEvents);
  const letter = createLetter(config.letterTitle, config.letterParagraphs, config.signature);

  mainContainer.append(timeline, letter);
  appDiv.append(header, mainContainer);
}

// Start app when DOM is ready
document.addEventListener("DOMContentLoaded", initApp);
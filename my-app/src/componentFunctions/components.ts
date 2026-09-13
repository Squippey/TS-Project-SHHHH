import PropTypes from 'prop-types';
import { ClickHeartEffect } from './function';

// Helper pentru apelarea verificării de PropTypes în Vanilla JS / TypeScript
const validateProps = (componentName: string, props: any, propTypes: any) => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', componentName);
};

// --- 1. RACOON SIDE DECOR ---
export const RacoonSideDecor = (props: any = {}) => {
  validateProps('RacoonSideDecor', props, RacoonSideDecor.propTypes);

  const { count = 14 } = props;

  const container = document.createElement("div");
  container.className = "floating-racoons-container";

  for (let i = 0; i < count; i++) {
    const isLeftSide = Math.random() < 0.5;
    const leftPosition = isLeftSide 
      ? Math.random() * 14 
      : 85 + Math.random() * 13;

    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * 8;
    const size = 1.8 + Math.random() * 1.5;

    const racoon = document.createElement("span");
    racoon.className = "floating-racoon";
    racoon.textContent = "🦝";
    racoon.style.left = `${leftPosition}vw`;
    racoon.style.animationDuration = `${duration}s`;
    racoon.style.animationDelay = `${delay}s`;
    racoon.style.fontSize = `${size}rem`;

    container.appendChild(racoon);
  }

  return container;
};

RacoonSideDecor.propTypes = {
  count: PropTypes.number
};

// --- 2. HEADER CONTAINER ---
export const HeaderContainer = (props: any) => {
  validateProps('HeaderContainer', props, HeaderContainer.propTypes);

  const { title, startDate } = props;

  const header = document.createElement("header");

  const h1 = document.createElement("h1");
  h1.innerHTML = title;

  const start = new Date(startDate);
  const diffTime = Math.abs(new Date().getTime() - start.getTime());
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  const counter = document.createElement("div");
  counter.className = "counter";
  counter.textContent = `${days} de zile pline de amintiri`;

  header.append(h1, counter);
  return header;
};

HeaderContainer.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired
};

// --- 3. TIMELINE CONTAINER ---
export const TimelineContainer = (props: any) => {
  validateProps('TimelineContainer', props, TimelineContainer.propTypes);

  const { events } = props;

  const container = document.createElement("div");
  container.className = "timeline";

  events.forEach((ev: any) => {
    const item = document.createElement("div");
    item.className = "timeline-event";

    const date = document.createElement("div");
    date.className = "date";
    date.textContent = ev.date;

    const title = document.createElement("h3");
    title.className = "event-title";
    title.textContent = ev.title;

    const desc = document.createElement("p");
    desc.textContent = ev.description;

    item.append(date, title, desc);
    container.appendChild(item);
  });

  return container;
};

TimelineContainer.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired
};

// --- 4. LETTER CONTAINER ---
export const LetterContainer = (props: any) => {
  validateProps('LetterContainer', props, LetterContainer.propTypes);

  const { title, paragraphs, signature } = props;

  const letterBox = document.createElement("div");
  letterBox.className = "letter-box";

  const h2 = document.createElement("h2");
  h2.textContent = title;
  letterBox.appendChild(h2);

  paragraphs.forEach((text: string) => {
    const p = document.createElement("p");
    p.textContent = text;
    letterBox.appendChild(p);
  });

  const sigP = document.createElement("p");
  sigP.className = "signature";
  sigP.textContent = signature;
  letterBox.appendChild(sigP);

  return letterBox;
};

LetterContainer.propTypes = {
  title: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  signature: PropTypes.string.isRequired
};

// --- 5. MAIN APP CONTAINER (WRAPPER) ---
export const AppContainer = (props: any) => {
  validateProps('AppContainer', props, AppContainer.propTypes);

  const { title, startDate, events, letterTitle, paragraphs, signature, racoonCount } = props;

  ClickHeartEffect({ emojis: ["❤️", "💖", "💕", "✨"], maxHearts: 2 });
  const mainContainer = document.createElement("div");
  mainContainer.className = "main-container";

  const racoons = RacoonSideDecor({ count: racoonCount });
  const header = HeaderContainer({ title, startDate });
  const timeline = TimelineContainer({ events });
  const letter = LetterContainer({ title: letterTitle, paragraphs, signature });

  mainContainer.append(timeline, letter);

  const root = document.createElement("div");
  root.append(racoons, header, mainContainer);

  return root;
};

AppContainer.propTypes = {
  title: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
  letterTitle: PropTypes.string.isRequired,
  paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
  signature: PropTypes.string.isRequired,
  racoonCount: PropTypes.number
};
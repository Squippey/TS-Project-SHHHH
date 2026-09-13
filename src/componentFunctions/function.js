export function setRacoonFavicon() {
  const racoonSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="30" fill="#2b2d42"/>
      <polygon points="12,18 22,6 26,22" fill="#8d99ae"/>
      <polygon points="52,18 42,6 38,22" fill="#8d99ae"/>
      <polygon points="14,17 21,9 24,20" fill="#edf2f4"/>
      <polygon points="50,17 43,9 40,20" fill="#edf2f4"/>
      <path d="M 12 28 C 12 48, 52 48, 52 28 C 52 38, 42 50, 32 50 C 22 50, 12 38, 12 28 Z" fill="#edf2f4"/>
      <ellipse cx="22" cy="32" rx="9" ry="6" fill="#2b2d42" transform="rotate(-10 22 32)"/>
      <ellipse cx="42" cy="32" rx="9" ry="6" fill="#2b2d42" transform="rotate(10 42 32)"/>
      <circle cx="22" cy="32" r="2.5" fill="#ffffff"/>
      <circle cx="42" cy="32" r="2.5" fill="#ffffff"/>
      <polygon points="32,36 28,40 36,40" fill="#d90429"/>
      <ellipse cx="32" cy="37" rx="3" ry="2" fill="#2b2d42"/>
    </svg>
  `;

  const encodedSvg = encodeURIComponent(racoonSvg);
  const faviconUrl = `data:image/svg+xml,${encodedSvg}`;

  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.head.appendChild(link);
  }
  link.type = 'image/svg+xml';
  link.href = faviconUrl;
}

export const ClickHeartEffect = (props = {}) => {
  const { emojis = ["❤️", "💖", "💕", "💗"], maxHearts = 3 } = props;

  window.addEventListener("click", (e) => {
    for (let i = 0; i < maxHearts; i++) {
      const heart = document.createElement("span");
      heart.className = "click-heart";
      
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];

      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 20;

      heart.style.left = `${e.clientX + offsetX}px`;
      heart.style.top = `${e.clientY + offsetY}px`;

      document.body.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1000);
    }
  });

  return document.createDocumentFragment();
};
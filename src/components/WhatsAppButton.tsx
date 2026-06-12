const NUMBER = "573126668428";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${NUMBER}?text=Hola%20Dra.%20Valentina%2C%20quisiera%20agendar%20una%20cita%20de%20valoraci%C3%B3n.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/25 backdrop-blur-sm pulse-glow transition-transform hover:scale-105 active:scale-95"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path d="M128 24a104 104 0 0 0-91.55 153.09l-9.78 35.24a16 16 0 0 0 19.47 19.47l35.24-9.78A104 104 0 1 0 128 24Zm0 192a87.54 87.54 0 0 1-44.67-12.26 8 8 0 0 0-6.64-1.14l-35.7 9.92 9.92-35.7a8 8 0 0 0-1.14-6.64A88 88 0 1 1 128 216Zm47.57-63.75c-2.07-1.05-12.25-6.05-14.14-6.74s-3.27-1-4.65 1-5.35 6.74-6.56 8.12-2.42 1.55-4.49.5-8.76-3.23-16.68-10.3c-6.16-5.5-10.32-12.29-11.53-14.36s-.13-3.12.81-4.13 1.82-2.14 2.42-3.21.54-2.42.27-3.23-.4-1.82-2-4.51-12.25-15.13-16.8-16.21-4.45-1.09-6.06-.9-3.92.81-6 2.42-7.69 7.5-7.69 18.27 7.89 21.21 9 22.59 1.56 2.14 15.4 23.45 20.21 27.62 23.11 29.43 11.56 4.49 16.27 4.49 9.23-1.57 12.57-2.86 7.25-5.09 9.49-9.23 3.59-8 4-8.71 1.46-1.09 3.27-1.82 8.76-4 10.24-4.74 3.92-1.82 4.47-2.86.81-2.14.27-3.23-1.56-2.14-3.27-3.23Z" />
      </svg>
    </a>
  );
}

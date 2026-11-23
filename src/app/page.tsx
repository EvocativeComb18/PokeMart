import type { CSSProperties } from "react";
import Link from "next/link";

const FAN = [
  { name: "Lugia V", hp: 220, a: "#5b8cff", b: "#2b1a7a" },
  { name: "Charizard ex", hp: 330, a: "#ffb23d", b: "#c2301e" },
  { name: "Gengar VMAX", hp: 320, a: "#c47bff", b: "#3b1466" },
];

const FAN_POSITION = [
  "-translate-x-[62%] -rotate-[11deg] z-[1]",
  "-translate-y-[34px] z-[3]",
  "translate-x-[62%] rotate-[11deg] z-[2]",
];

const BENEFITS = [
  {
    title: "Fotos reales",
    text: "Cada carta se publica con fotos de la pieza que vas a recibir y su estado de conservación.",
  },
  {
    title: "Pago seguro",
    text: "Pagas con Mercado Pago, con los métodos que ofrece su checkout. Nosotros nunca vemos tus datos de tarjeta.",
  },
  {
    title: "Envío a todo México",
    text: "Tarifa fija de envío. Cada carta va en funda y protector rígido.",
  },
];

const container = "px-5 md:px-[max(20px,calc(50%-540px))]";

export default function Home() {
  return (
    <>
      <nav
        className={`sticky top-0 z-20 flex h-[52px] items-center justify-between border-b border-white/8 bg-black/72 backdrop-blur-xl backdrop-saturate-[1.8] ${container}`}
      >
        <Link href="/" className="text-[19px] font-semibold tracking-[-0.02em]">
          Holo
        </Link>
        <a href="#por-que" className="text-[13px] text-[#c7c7cc] hover:text-white">
          Por qué Holo
        </a>
      </nav>

      <main className="flex-1">
        <header className="overflow-hidden px-5 pt-[72px] text-center">
          <h1 className="mx-auto max-w-[12ch] text-[clamp(40px,7.5vw,80px)] leading-[1.05] font-bold tracking-[-0.035em]">
            Cartas Pokémon. Una por una.
          </h1>
          <p className="mx-auto mt-[18px] max-w-[34ch] text-[clamp(17px,2.2vw,24px)] leading-[1.35] text-muted">
            Piezas seleccionadas, con fotos reales y estado de conservación.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3.5">
            <a
              href="#por-que"
              className="inline-block rounded-full bg-accent px-[22px] py-[11px] text-[17px] text-white transition-colors hover:bg-accent-press"
            >
              Conocer más
            </a>
          </div>

          <div
            aria-hidden="true"
            className="relative mt-12 flex h-[clamp(340px,52vw,520px)] items-end justify-center after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[5] after:h-[120px] after:bg-gradient-to-b after:from-transparent after:to-black"
          >
            {FAN.map((card, i) => (
              <div
                key={card.name}
                className={`card absolute -bottom-10 w-[clamp(170px,26vw,290px)] shadow-[0_40px_80px_rgba(0,0,0,.7)] ${FAN_POSITION[i]}`}
                style={{ "--a": card.a, "--b": card.b } as CSSProperties}
              >
                <div className="card-top">
                  <span>{card.name}</span>
                  <span>{card.hp} HP</span>
                </div>
                <div className="card-art" />
                <div className="card-lines" />
              </div>
            ))}
          </div>
        </header>

        <section id="por-que" className={`pt-24 ${container}`}>
          <h2 className="text-[clamp(30px,4.5vw,48px)] leading-[1.1] font-bold tracking-[-0.03em]">
            Compra con confianza.
          </h2>
          <div className="mt-9 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
            {BENEFITS.map((b) => (
              <div key={b.title} className="rounded-[22px] bg-surface p-7">
                <h3 className="text-[19px] font-semibold">{b.title}</h3>
                <p className="mt-2 text-[15px] text-muted">{b.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer
        className={`mt-24 border-t border-line pt-7 pb-10 text-xs text-muted ${container}`}
      >
        © Holo. Precios en pesos mexicanos (MXN).
      </footer>
    </>
  );
}

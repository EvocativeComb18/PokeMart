import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Holo | Cartas Pokémon",
  description:
    "Cartas Pokémon seleccionadas, con fotos reales y estado de conservación. Envío a todo México.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-MX" className="h-full">
      <body className="flex min-h-full flex-col font-sans leading-normal">
        {children}
      </body>
    </html>
  );
}

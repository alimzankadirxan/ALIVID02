import Link from "next/link";
import { Header } from "@/components/layout/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative z-10 grid min-h-screen place-items-center px-5 text-center">
        <div>
          <p className="font-mono text-accent-2">404</p>
          <h1 className="font-display mt-4 text-4xl">Страница не найдена</h1>
          <Link href="/" className="mt-8 inline-block text-accent">
            На главную
          </Link>
        </div>
      </main>
    </>
  );
}

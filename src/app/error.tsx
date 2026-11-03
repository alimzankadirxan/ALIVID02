"use client";

export default function ErrorPage({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="grid min-h-screen place-items-center px-5 text-center">
      <div>
        <h1 className="font-display text-3xl">Не удалось загрузить страницу</h1>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-accent px-5 py-3 text-sm"
        >
          Попробовать снова
        </button>
      </div>
    </main>
  );
}

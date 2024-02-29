'use client'

import useSwitchTheme from "@/utils/theme";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <button className="btn btn-primary" onClick={useSwitchTheme()}>hekuta.com</button>
    </main>
  );
}

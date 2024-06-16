"use client";

import WorksSet from "@/CustomSettings/WorksSet";
import Works from "@/components/Works/Works";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-3xl mb-7">Works</h1>
      <div className="grid sm:grid-cols-2 gap-7 grid-cols-1">
        <WorksSet />
      </div>
    </div>
  );
}

import TopStatsCard from "@/components/cards/TopStatsCard";
import Button from "@mui/joy/Button";
import * as React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-10 gap-12  sm:p-14 font-[family-name:var(--font-geist-sans)] ">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Goal Archive</h1>

        <div className="flex flex-col lg:flex-row gap-6">
          <TopStatsCard />
          <TopStatsCard />
        </div>

        <Button sx={{ mt: 1 }}>Contact Us</Button>
      </main>
    </div>
  );
}

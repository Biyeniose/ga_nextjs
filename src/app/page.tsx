import NestedCard from "@/components/test/NestedCard";
import Button from "@mui/joy/Button";
import * as React from "react";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-10 gap-16 sm:p-14 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">Goal Archive</h1>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>
        </ol>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>
        </ol>

        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>

          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>

          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>

          <li className="mb-2">View the latest stats and trends in Football</li>
          <li>Test your Footy knowledge with immersive games</li>
        </ol>
        <Button sx={{ mt: 1 }}>Contact Us</Button>

        <NestedCard />
      </main>
    </div>
  );
}

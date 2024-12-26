"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  const totalData = data.length;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/api/dashboard", {
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-60 h-32 bg-white rounded-md flex justify-center items-center p-5">
        <div className="text-center">
          <h1 className="text-slate-700 mb-3">Total Buku</h1>
          <h1 className="text-slate-700 font-semibold">{totalData}</h1>
        </div>
      </div>
    </div>
  );
}

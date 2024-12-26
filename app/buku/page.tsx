"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface BukuProps {
  id: number;
  title: string;
  author: string;
}

const BukuPage = () => {
  const [data, setData] = useState<BukuProps[]>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/buku");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await res.json();
      console.log("data", data);
      setData(data);
    };

    getData();
  }, []);

  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1 className="font-semibold mb-3">Daftar Buku</h1>
      <ul>
        {data.map((item, index) => (
          <li key={item.id}>
            {index + 1}. {item.title} - {item.author}
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Link href={"/buku/tambah"}>Tambah Buku</Link>
      </div>
    </div>
  );
};

export default BukuPage;

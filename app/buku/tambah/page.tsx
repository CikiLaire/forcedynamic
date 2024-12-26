"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const TambahPage = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/buku", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, author }),
      });

      if (res.ok) {
        router.push("/buku");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-10">
      <h1>Tambah Buku</h1>
      <form className="mt-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="bg-inherit border border-slate-200/20 p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="author">Author</label>
          <br />
          <input
            type="text"
            name="author"
            id="author"
            placeholder="Author"
            className="bg-inherit border border-slate-200/20 p-2"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mt-5 flex justify-center items-center">
          <button className="mt-5 bg-white text-slate-700 rounded-md p-2">
            {loading ? "Loading..." : "Tambah"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahPage;

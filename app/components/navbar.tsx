import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center mt-20 gap-5 ">
      <Link className="" href={"/"}>
        Dashboard
      </Link>
      <Link className="" href={"/buku"}>
        Daftar Buku
      </Link>
    </div>
  );
};

export default Navbar;

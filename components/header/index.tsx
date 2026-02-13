import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className="flex items-center justify-center gap-5 bg-red-500 p-4">
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/blog"}>Blog</Link>

    </header>
  );
}

export default Header
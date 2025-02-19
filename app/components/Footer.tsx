import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#d1e3ec] text-[#3F3B3A] py-12">
      <div className="relative mx-auto px-6 lg:px-24 flex flex-col lg:flex-row items-start justify-start w-full max-w-screen-xl gap-16">
        
        {/* Left Section - Site Map */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Site Map</p>
          <ul className="text-base gap-2 flex flex-col">
            <li><Link href="/rules" className="hover:underline transition">Rules</Link></li>
            <li><Link href="/sample-questions" className="hover:underline transition">Sample Problems</Link></li>
            <li><Link href="/faq" className="hover:underline transition">FAQ</Link></li>
          </ul>
        </div>

        {/* Middle Section - Contact Us */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Us</p>
          <ul className="text-base gap-2 flex flex-col">
            <li>
              <Link href="mailto:contact@sgeconsleague.org" className="flex items-center gap-2 hover:underline transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                  <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                </svg>
                <span>contact@sgeconsleague.org</span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com/sgeconsleague/" className="flex items-center gap-2 hover:underline transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                </svg>
                <span>@sgeconsleague</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Right Section - Design Credits */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Design</p>
          <div className="flex items-center gap-2">
            <p>Inspired by</p>
            <Link href="https://sgbioleague.org/" className="hover:underline transition">
              <span className="text-[#4CA9DF]">@Singapore Biology League</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright - Now Aligned with the Sections */}
      <div className="mt-8 px-6 lg:px-24 text-left text-sm text-gray-600">
        © 2025 Singapore Economics League
      </div>

      {/* Big Coin Image - Properly Positioned */}
      <div className="absolute bottom-6 right-80 hidden lg:block">
        <Image 
          src="/emoticons/coin_holding_sunglasses.png"
          alt="Big Coin"
          width={380}
          height={380}
          className="opacity-90 transition-transform duration-300 ease-in-out hover:scale-110 hover:rotate-[10deg]"
        />
      </div>
    </footer>
  );
}

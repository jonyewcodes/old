import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative bg-secondary text-white py-12">
      <div className="relative mx-auto grid grid-cols-1 lg:grid-cols-3 px-6 lg:px-24 justify-start w-full gap-6 lg:gap-20">
        
        {/* Logo & Contact Section */}
        <div className="flex flex-col gap-8 items-start">
          <Image
            src="/footer.png"
            alt="Logo"
            className="w-42 h-auto"
            width={160}
            height={68}
          />
          <div>
            <Link href="https://www.instagram.com/sgeconsleague/">
                <FaInstagram size={40}/>
            </Link>
          </div>
          <p className="text-lg font-bold">
            Email:{" "}
            <Link href="mailto:contact@sgeconsleague.org" className="underline hover:text-[#7AD6D4] transition">
                <MdEmail /><span>contact@sgeconsleague.org</span>
            </Link>
          </p>
        </div>

        {/* Sitemap Section */}
        <div className="border-y-2 lg:border-y-0 lg:border-x-2 border-white/30 px-16 py-6">
          <p className="font-bold text-xl mb-6">Sitemap</p>
          <ul className="text-lg gap-4 flex flex-col">
            <li><Link href="/rules" className="hover:text-[#A0E7E6] transition-colors duration-200">Rules</Link></li>
            <li><Link href="/schedules" className="hover:text-[#A0E7E6] transition-colors duration-200">Schedules</Link></li>
            <li><Link href="/sample-questions" className="hover:text-[#A0E7E6] transition-colors duration-200">Sample Questions</Link></li>
            <li><Link href="/faq" className="hover:text-[#A0E7E6] transition-colors duration-200">FAQ</Link></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="py-6 px-16 lg:px-2">
          <p className="font-bold mb-6 text-xl">© 2025 SEL</p>
          <ul className="flex flex-col gap-4 text-lg">
            <li><Link href="/privacy" className="hover:text-[#A0E7E6] transition-colors duration-200">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-[#A0E7E6] transition-colors duration-200">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Coin Image Shifted Left and Higher */}
        <div className="absolute bottom-[80px] right-[30px] hidden lg:block">
          <Image 
            src="/emoticons/coin_holding_sunglasses.png" // Replace with actual path
            alt="Big Coin"
            width={450} // Adjusted for better visibility
            height={450}
            className="opacity-90"
          />
        </div>

      </div>
    </footer>
  );
}

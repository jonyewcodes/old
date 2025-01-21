import Image from "next/image";
import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mx-auto grid grid-cols-1 lg:grid-cols-3 px-2 lg:px-32 justify-center w-full my-12 gap-2 lg:gap-24">
        {/* TODO: Replace with higher res photo */}
        <div className="flex flex-col gap-8 py-6 items-center lg:items-start">
            <Image
                src="/logo2.png"
                alt="Logo"
                className="w-32 h-auto"
                width={150}
                height={68}
            />
            <div>
                <Link href = "https://www.instagram.com/sgeconsleague/" >
                    <Image className="hover:drop-shadow-md transition-all duration-200" src="/instagram.svg" alt="Instagram" width={40} height={40} />
                </Link>
            </div>
            <p className="text-lg">Email: <Link href="mailto:contact@sgeconsleague.org" className="underline text-[#3D9796]">contact@sgeconsleague.org </Link></p>
        </div>
        <div className="border-y-2 lg:border-y-0 lg:border-x-2 border-[#D9D9D9] px-24 py-6">
            <p className="font-bold text-xl mb-6">Sitemap</p>
            <ul className="text-lg gap-4 flex flex-col ">
                <li ><Link href="/rules" className="hover:text-accent transition-colors duration-200" >Rules</Link></li>
                <li><Link href="/schedules" className="hover:text-accent transition-colors duration-200">Schedules</Link></li>
                <li><Link href="/schedules" className="hover:text-accent transition-colors duration-200">Sample Questions</Link></li>
                <li><Link href="/faq" className="hover:text-accent transition-colors duration-200">FAQ</Link></li>
            </ul>
        </div>
        <div className="py-6 px-24 lg:px-4">
            <p className="font-bold mb-6 text-xl">©2024, SEL</p>
            <ul className="flex flex-col gap-4 text-lg">
                <li><Link href="/rules" className="hover:text-accent transition-colors duration-200">Privacy</Link></li>
                <li><Link href="/schedules" className="hover:text-accent transition-colors duration-200">Terms of Use</Link></li>
            </ul>
        </div>

    </footer>
  );
}
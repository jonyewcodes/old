import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-[#d1e3ec] text-[#3F3B3A] py-12 mt-32">
      {/* Wrap both sections in the same container */}
      <div className="relative mx-auto px-6 lg:px-20 w-full max-w-[1450px]">
        {/* Flex container for “Site Map” & “Us” sections */}
        <div className="flex flex-col lg:flex-row items-start justify-start gap-16">
          {/* Left Section - Site Map */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Site Map</p>
            <ul className="text-base gap-2 flex flex-col">
              <li>
                <Link href="/rules" className="hover:underline transition">
                  Rules
                </Link>
              </li>
              <li>
                <Link
                  href="/sample-questions"
                  className="hover:underline transition"
                >
                  Sample Problems
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:underline transition">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Middle Section - Contact Us */}
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold">Us</p>
            <ul className="text-base gap-2 flex flex-col">
              <li>
                <Link
                  href="mailto:contact@sgeconsleague.org"
                  className="flex items-center gap-2 hover:underline transition"
                >
                  {/* mail icon */}
                  <span>contact@sgeconsleague.org</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/sgeconsleague/"
                  className="flex items-center gap-2 hover:underline transition"
                >
                  {/* instagram icon */}
                  <span>@sgeconsleague</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-left text-sm text-gray-600">
          © 2025 Singapore Economics League.
        </div>
      </div>
    </footer>
  );
}

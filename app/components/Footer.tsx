import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-baseText text-white w-full mt-24">
      <div className="max-w-screen-md lg:max-w-screen-lg mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          <div className="md:w-1/2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logos/navbar.png"
                alt="PhysicsBrawlOnline Logo"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
            <p className="text-sm leading-relaxed">
              Singapore Economics League is a problem solving competition by students, for students.
              We are a non profit team of volunteers dedicated to promoting an interest in economics
              among students in Singapore. Our academic content follows the syllabus set by the
              International Economics Olympiad Association, which is located in Bern,&nbsp;Switzerland.
              <br />
              <br />
              The realisation of the competition was inspired by other leagues including{" "}
              <Link
                href="https://sgphysicsleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Physics League (SPhL)
              </Link>
              ,{" "}
              <Link
                href="https://www.sgchemleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Chemistry League (SChL)
              </Link>
              , and{" "}
              <Link
                href="https://sgbioleague.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Singapore Biology League (SBL)
              </Link>
              , as well as the{" "}
              <Link
                href="https://ieo-official.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                International Economics Olympiad (IEO)
              </Link>{" "}
              and{" "}
              <Link
                href="https://physicsbrawl.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                PhysicsBrawl
              </Link>
              .
              <br />
              <br />
              #sgeconsleague{" "}
              <Link href="mailto:contact@sgeconsleague.org" className="hover:underline">
                contact@sgeconsleague.org
              </Link>
            </p>
          </div>

          <div className="md:w-2/3 flex flex-col md:flex-row justify-end gap-12">
            <div className="text-left">
              <h3 className="font-semibold mb-2">Navigation</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/rules" className="hover:underline">
                    Rules
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:underline">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/syllabus" className="hover:underline">
                    Syllabus
                  </Link>
                </li>
                <li>
                  <Link href="/archives" className="hover:underline">
                    Archives
                  </Link>
                </li>
              </ul>
            </div>
            <div className="text-left">
              <h3 className="font-semibold mb-2">Connect with us</h3>
              <div className="flex items-center gap-3">
                <Link
                  href="https://instagram.com/sgeconsleague"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/singapore-economics-league/"
                  className="hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 my-6" />

        <div className="flex items-center text-sm text-gray-400">
          <span className="mr-4">© Singapore Economics League 2025</span>
          <Link href="/privacy" className="hover:underline text-gray-400">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-footer text-lg text-gray-400 mt-12">
      <div className="absolute top-0 left-0 w-full h-2 pointer-events-none" />
      <div className="relative max-w-screen-lg mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4 sm:mb-0">
          <Link
            href="mailto:contact@sgeconsleague.org"
            className="group flex items-center gap-1 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icon-tabler-mail w-4 h-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
              <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
            </svg>
            <span>contact@sgeconsleague.org</span>
          </Link>
          <Link
            href="https://www.instagram.com/sgeconsleague/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icon-tabler-brand-instagram w-4 h-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 3a5 5 0 0 1 5 5v8a5 5 0 0 1 -5 5h-8a5 5 0 0 1 -5 -5v-8a5 5 0 0 1 5 -5zm-4 5a4 4 0 0 0 -3.995 3.8l-.005 .2a4 4 0 1 0 4 -4m4.5 -1.5a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
            </svg>
            <span>@sgeconsleague</span>
          </Link>
          <Link
            href="https://www.linkedin.com/company/singapore-economics-league"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 hover:text-white transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-brand-linkedin w-4 h-4"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M17 2a5 5 0 0 1 5 5v10a5 5 0 0 1 -5 5h-10a5 5 0 0 1 -5 -5v-10a5 5 0 0 1 5 -5zm-9 8a1 1 0 0 0 -1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 0 -1 -1m6 0a3 3 0 0 0 -1.168 .236l-.125 .057a1 1 0 0 0 -1.707 .707v5a1 1 0 0 0 2 0v-3a1 1 0 0 1 2 0v3a1 1 0 0 0 2 0v-3a3 3 0 0 0 -3 -3m-6 -3a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1" />
            </svg>
            <span>LinkedIn</span>
          </Link>
        </div>
        <Link href="/privacy" className="group hover:text-white transition">
          Privacy Policy
        </Link>
      </div>
      <hr className="mx-4 sm:mx-auto max-w-screen-lg border-t border-white  " />
      <div className="text-center sm:text-left py-4 text-sm text-white pb-8">
        © 2025 Singapore Economics League
      </div>
    </footer>
  );
}

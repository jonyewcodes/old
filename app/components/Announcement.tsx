"use client";
import React from "react";

type AnnouncementProps = {
  showAnnouncement: boolean;
  setShowAnnouncement: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Announcement({
  showAnnouncement,
  setShowAnnouncement,
}: AnnouncementProps) {
  return (
    <div
      className={`
        bg-[#C22224] text-white
        overflow-hidden
        transition-all duration-500 ease-in-out
        ${showAnnouncement ? "opacity-100 max-h-28 py-4" : "opacity-0 max-h-0 py-0"}
      `}
    >
      {/* No extra container classes here */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4 pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-speakerphone"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 8a3 3 0 0 1 0 6" />
            <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" />
            <path d="M12 8h0l4.524 -3.77a.9 .9 0 0 1 1.476 .692v12.156a.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" />
          </svg>
          <p className="text-base sm:text-lg">
            We are actively expanding our team and looking for passionate
            individuals. If you’re interested in any role(s), please{" "}
            <a
              href="https://tally.so/r/3yd5qd"
              target="_blank"
              rel="noreferrer"
              className="underline"
            >
              <b>apply here</b>
            </a>
            !
          </p>
        </div>
        <button
          onClick={() => setShowAnnouncement(false)}
          className="hover:scale-110 transition-transform pr-2"
          aria-label="Close announcement"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}

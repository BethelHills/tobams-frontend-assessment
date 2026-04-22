"use client";

import { useId, useRef } from "react";

import { CONTACT_EMAIL } from "@/lib/siteNav";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7b1b5d] focus-visible:ring-offset-2";

type AccountDialogTriggerProps = {
  /** When set, button is stretched for image overlay hit areas (invisible on the art). */
  variant?: "default" | "overlay";
  className?: string;
};

export default function AccountDialogTrigger({
  variant = "default",
  className = "",
}: AccountDialogTriggerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();

  const base =
    variant === "overlay"
      ? `flex h-full w-full min-h-11 items-center justify-center rounded bg-transparent p-0 text-transparent shadow-none ${focusRing} hover:bg-white/10`
      : `min-h-11 min-w-[4.5rem] rounded bg-[#6f205a] px-3 py-2 text-[10px] font-medium text-white md:text-xs ${focusRing}`;

  return (
    <>
      <button
        type="button"
        className={`${base} ${className}`.trim()}
        aria-label="Account — open account options"
        onClick={() => dialogRef.current?.showModal()}
      >
        {variant === "default" ? "Account" : <span className="sr-only">Account</span>}
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        className="w-[calc(100%-2rem)] max-w-md rounded-lg border border-neutral-200 bg-white p-6 text-[#2c2430] shadow-xl"
      >
        <h2 id={titleId} className="text-base font-semibold text-[#4b0f3c]">
          Account
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          Sign-in is not wired in this preview build. Reach out to Tobams Group to
          access your account or training portal.
        </p>
        <div className="mt-6 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            className={`min-h-11 rounded-md border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 ${focusRing}`}
            onClick={() => dialogRef.current?.close()}
          >
            Close
          </button>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className={`inline-flex min-h-11 items-center rounded-md bg-[#6f205a] px-4 py-2 text-sm font-medium text-white ${focusRing}`}
          >
            Email Tobams
          </a>
        </div>
      </dialog>
    </>
  );
}

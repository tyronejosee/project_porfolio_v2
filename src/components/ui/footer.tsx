"use client";

import owner from "@/data/owner.json";
import messages from "@/data/messages.json";
import { getCurrentYear } from "@/lib/time";

export default function Footer() {
  return (
    <footer
      id="footer-section"
      className="max-w-screen-2xl mx-auto border-t border-neutral-lightgray dark:border-neutral-darkgrey"
    >
      <div className="max-w-screen-lg mx-auto py-4 w-full z-50">
        <div className="text-center">
          <p className="text-balance font-medium text-sm leading-loose text-neutral-gray">
            {messages.footerMessage}
            <span className="hover:underline underline-offset-4">GitHub</span>
          </p>
          <p className="text-balance font-medium text-sm leading-loose text-neutral-gray">
            © {getCurrentYear()}{" "}
            <span className="hover:underline underline-offset-4">
              {owner.full_name}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

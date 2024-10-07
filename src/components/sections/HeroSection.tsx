import Image from "next/image"
import { Button } from "@nextui-org/react"
import { useTranslations } from "next-intl";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { GmailIcon } from "../icons/GmailIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GitHubIcon } from '../icons/GitHubIcon';
import owner from "@/data/owner.json"

export const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
        <article className="order-2 md:order-1 flex flex-col justify-center">
          <div className="max-w-sm mx-auto space-y-2">
            <span className="text-lg font-medium leading-tight">Portfolio / About</span>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight border-b dark:border-neutral-800 pb-6">
              {t("greeting")}
              <span className="text-chartreuse-500">{owner.name}</span>
            </h2>
            <p className="text-neutral-500">{t("description")}</p>
            {owner.signature && (
              <Image
                src={owner.signature}
                alt="Signature"
                width={208}
                height={62}
                className="hidden md:block w-52"
              />
            )}
            <div>
              <div className="flex items-center space-x-2">
                <Button
                  color="primary"
                  className="font-medium"
                >
                  {t("downloadCVBtn")}
                </Button>
                <Link
                  href="https://lucide.dev/icons/chevrons-down"
                  className="p-2 hover:bg-neutral-lightgray dark:hover:bg-neutral-darkgrey dark:hover:text-primary items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Gmail"
                >
                  <GmailIcon />
                </Link>
                <Link
                  href="https://lucide.dev/icons/chevrons-down"
                  className="p-2 hover:bg-neutral-lightgray dark:hover:bg-neutral-darkgrey dark:hover:text-primary items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon />
                </Link>
                <Link
                  href="https://lucide.dev/icons/chevrons-down"
                  className="p-2 hover:bg-neutral-lightgray dark:hover:bg-neutral-darkgrey dark:hover:text-primary items-center rounded-xl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <GitHubIcon />
                </Link>
              </div>
            </div>
          </div>
        </article>
        <figure className="order-1 md:order-2 flex justify-center">
          <div className="flex flex-col justify-center aspect-square">
            <Image
              src="/images/hero-image.webp"
              alt="Tyrone José"
              width={500}
              height={500}
              className="object-cover rounded-full"
            />
          </div>
        </figure>
      </div>
      <div className="absolute bottom-20 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="flex flex-col justify-center items-center">
          <ChevronDown />
          <span className="text-neutral-light text-sm">{t("prompter")}</span>
        </div>
      </div>
    </section>
  )
}

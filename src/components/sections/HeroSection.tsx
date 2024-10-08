"use client"

import Image from "next/image"
import Link from "next/link";
import { Button } from "@nextui-org/react"
import { useTranslations } from "next-intl";
import { motion } from 'framer-motion';
import { ChevronDown } from "lucide-react";
import { GmailIcon } from "../icons/GmailIcon";
import { LinkedInIcon } from "../icons/LinkedInIcon";
import { GitHubIcon } from '../icons/GitHubIcon';

import owner from "@/data/owner.json"

export const HeroSection = () => {
  const t = useTranslations("HeroSection");

  return (
    <section className="w-full h-[calc(100vh-10vh)] flex items-center justify-center">
      <div className="max-w-screen-lg mx-auto grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-center">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="order-2 md:order-1 flex flex-col justify-center"
        >
          <div className="max-w-sm mx-auto space-y-2">
            <span className="text-lg font-medium leading-tight">Portfolio / About</span>
            <h2 className="scroll-m-20 text-4xl font-bold tracking-tight border-b dark:border-neutral-800 pb-6">
              {t("greeting")}
              <span className="text-chartreuse-500">{owner.short_name}</span>
            </h2>
            <p className="text-neutral-500 line-clamp-3">{t("description")}</p>
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
        </motion.article>
        <motion.figure
          initial={{ opacity: 0, y: -30, }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="order-1 md:order-2 flex justify-center items-center overflow-hidden h-60 md:h-full rounded-xl"
        >
          <Image
            src="/images/hero-image.webp"
            alt="Tyrone José"
            width={300}
            height={300}
            className="object-cover w-full"
          />
        </motion.figure>
      </div>
      <div className="absolute bottom-4 md:bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse">
        <div className="flex flex-col justify-center items-center">
          <ChevronDown />
          <span className="text-sm">{t("prompter")}</span>
        </div>
      </div>
    </section>
  )
}

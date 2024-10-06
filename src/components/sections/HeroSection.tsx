import Image from "next/image"
import { Button } from "@nextui-org/react"
import { useTranslations } from 'next-intl';

export const HeroSection = () => {
  const t = useTranslations();
  return (
    <header className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I,m Tyrone José
        </h1>
        <p className="text-lg md:text-xl mb-6">
          {t("Hero.description")}
        </p>
        <p className="mb-8">
          {t("Hero.title")}
        </p>
        <Button
          color="primary"
        >
          {t("Hero.ctaBtn")}
        </Button>
      </div>
      <figure className="hidden md:block w-1/2">
        <Image
          src="/images/hero-image.webp"
          alt="Tyrone José"
          width={500}
          height={500}
          className="object-cover"
        />
      </figure>
    </header>
  )
}

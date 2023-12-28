import { useTranslation } from "react-i18next";
import SwitchDarkMode from "./Switch";

export default function Header() {
  const { t } = useTranslation()

  return (
    <nav className="flex py-5 lg:py-10 justify-between items-center text-lg bg-transparent w-full fixed top-0 z-50 backdrop-filter backdrop-blur text-opacity-100 dark:border-pWhite border-pBlack border-b">
        <ul className="flex gap-16 mx-6">
            <p className="inline-block leading-5 h-full w-28">Juan José Hernández</p>
            <li className="hidden items-center md:flex"><a href="#">01. {t('home')}</a></li>
            <li className="hidden items-center md:flex"><a href="#about">02. {t('about')}</a></li>
            <li className="hidden items-center md:flex"><a href="#projects">03. {t('projects')}</a></li>
        </ul>
        <SwitchDarkMode />
    </nav>
  )
}

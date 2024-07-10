import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import SwitchDarkMode from './Switch';

export default function Header() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  const changeLang = () => {
    if (language === 'es') {
      i18n.changeLanguage('en');
      setLanguage('en');
    } else {
      i18n.changeLanguage('es');
      setLanguage('es');
    }
  };

  return (
    <nav className="flex py-5 lg:py-10 justify-between items-center md:text-base lg:text-lg bg-transparent w-full fixed top-0 z-50 backdrop-filter backdrop-blur text-opacity-100 dark:border-pWhite border-pBlack border-b">
      <ul className="flex md:gap-8 lg:gap-12 mx-6">
        <p className="inline-block leading-5 h-full w-28">Juan José Hernández</p>
        <li className="hidden items-center md:flex">
          <a href="#">01. {t('home')}</a>
        </li>
        <li className="hidden items-center md:flex">
          <a href="#about">02. {t('about')}</a>
        </li>
        <li className="hidden items-center md:flex">
          <a href="#work">03. {t('experience')}</a>
        </li>
        <li className="hidden items-center md:flex">
          <a href="#projects">04. {t('projects')}</a>
        </li>
      </ul>
      <div className="flex items-center gap-4 ">
        <button onClick={changeLang} className="cursor-pointer text-xs md:text-sm w-7 h-7 hover:scale-110 transition-transform">
          {language === 'es' ? 'EN' : 'ES'}
        </button>
        <SwitchDarkMode />
      </div>
    </nav>
  );
}

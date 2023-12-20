import SwitchDarkMode from "./Switch";

export default function Header() {
  return (
    <nav className="flex py-5 lg:py-10 justify-between items-center text-lg bg-transparent w-full sticky top-0 z-50 backdrop-filter backdrop-blur text-opacity-100 border-pWhite border-b">
        <ul className="flex gap-16 mx-6">
            <p className="inline-block leading-5 h-full w-28">Juan José Hernández</p>
            <li className="hidden items-center lg:flex"><a href="#">01. Inicio</a></li>
            <li className="hidden items-center lg:flex"><a href="#about">02. Acerca de mí</a></li>
            <li className="hidden items-center lg:flex"><a href="#projects">03. Proyectos</a></li>
        </ul>
        <SwitchDarkMode />
    </nav>
  )
}

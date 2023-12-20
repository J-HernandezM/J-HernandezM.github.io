import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '/public/portafolio.png';
import Image from 'next/image';

export default function Main() {
    return (
        <main className="min-w-[360px] scroll-smooth">
            <section id="inicio" className='flex flex-col items-center h-screen justify-center'>
                <h1 className='gradient text-5xl lg:text-6xl font-semibold text-center'>Juan José Hernández</h1>
                <h2 className='text-3xl lg:text-4xl font-bold text-center'>Frontend Developer</h2>
                <div className="buttons flex gap-4 mt-16 mb-8">
                    <button className="px-2 py-1 font-bold rounded-lg bg-white text-pBlack hover:text-pWhite hover:bg-pBlack">Contactame</button>
                    <button className="px-2 py-1 font-bold rounded-lg bg-white text-pBlack hover:text-pWhite hover:bg-pBlack">Hoja de vida</button>
                </div>
                <div className="socialMedia flex gap-4">
                    <a href="https://github.com/J-HernandezM" target='_blank'><GitHubIcon className='animate-bounce' fontSize='large' /></a>
                    <a href="https://www.linkedin.com/in/juan-jose-hernandez-muñoz-9613821a2/" target='_blank'><LinkedInIcon className='animate-bounce' fontSize='large' /></a>
                    <a href="mailto:juansw03@gmail.com" target='_blank'><MailIcon className='animate-bounce' fontSize='large' /></a>
                </div>
            </section>
            <section id="about" className='flex flex-col items-center text-xl w-3/4 mx-auto lg:text-center gap-2 lg:gap-4'>
                <div className='w-8/12 md:w-1/2 lg:w-4/12 aspect-square relative'>
                    <Image src={profilePic} fill className='rounded-full' alt="profile picture of Juan Jose Hernandez"></Image>
                </div>
                <h2 className='text-3xl font-bold'>Acerca de mí</h2>
                <div className="lg:w-2/3">
                    <p className='mb-2 lg:mb-4'>Hola! Soy Juan José Hernández, Frontend Developer con +1 año de experiencia creando soluciones eficientes e innovadoras.</p>
                    <p className='mb-2 lg:mb-4'>Poseo sólidos conocimientos en HTML, CSS, y JavaScript, asi como React y NodeJS.</p>
                    <p className="mb-2 lg:mb-4">Durante el ultimo año he tenido la oportunidad de explorar otros frameworks y familizarizarme más con los mismos.</p>
                    <p>Mi experiencia como emprendedor en el campo de la cosmetica artesanal me ha ayudado a potenciar mis habilidades blandas y me permite ofrecer una perspectiva critica en el desarrollo de productos y funcionalidades pensando en la experiencia final del cliente.</p>
                </div>
            </section>
            <section id="projects">projects</section>
        </main>
    )
}

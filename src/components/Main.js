import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Main() {
    return (
        <main className="min-w-[360px]">
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
            <section id="about" className='h-screen'>about</section>
            <section id="projects">projects</section>
        </main>
    )
}

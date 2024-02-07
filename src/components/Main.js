/* eslint-disable @next/next/no-img-element */
'use client'

import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePic from '/public/portafolio.png';
import Image from 'next/image';
import ProjectCard from './ProjectCard';
import { projects } from '@/shared/projects';
import { Slide } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function Main() {
    const containerRef = useRef(null)
    const buttonsRef = useRef(null)
    const socialRef = useRef(null)
    const [slide, setSlide] = useState(false)
    const { t, i18n } = useTranslation()
    console.log(i18n.language)

    useEffect(() => {
        setSlide(true)
    }, [])

    return (
        <main className="min-w-[360px]">
            <section id="inicio" className='flex flex-col items-center h-screen justify-center'>
                <div ref={containerRef}>
                    <Slide in={slide} container={containerRef.current} direction='up' {...(slide ? { timeout: 800 } : {})}>
                        <div>
                            <h1 className='gradient text-5xl lg:text-6xl font-semibold text-center'>Juan José Hernández</h1>
                            <h2 className='text-3xl lg:text-4xl font-bold text-center'>Frontend Developer</h2>
                        </div>
                    </Slide>
                </div>
                <div ref={buttonsRef} className="buttons flex gap-4 mt-16 mb-8">
                    <Slide in={slide} direction='right' container={buttonsRef.current} {...(slide ? { timeout: 1000 } : {})}>
                        <a href="#contact"><button className="action-btns">{t('contact')}</button></a>
                    </Slide>
                    <Slide in={slide} direction='left' container={buttonsRef.current} {...(slide ? { timeout: 1000 } : {})}>
                        <a target='_blank' href={i18n.language === 'es' ? 'https://drive.google.com/file/d/1rh595_SXvZgBsoaW1iR9ho6gUl-lYclc/view?usp=drive_link' : 'https://drive.google.com/file/d/1In4CRIfnMv504p4XGhJT_iUj8DrOPWxo/view?usp=drive_link'}><button className="action-btns">{t('cv')}</button></a>
                    </Slide>
                </div>
                <div ref={socialRef}>
                    <Slide in={slide} direction='up' container={socialRef.current} {...(slide ? { timeout: 1000 } : {})}>
                        <div className="socialMedia flex gap-4">
                            <a href="https://github.com/J-HernandezM" target='_blank'><GitHubIcon className='animate-bounce' fontSize='large' /></a>
                            <a href="https://www.linkedin.com/in/juan-jose-hernandez-muñoz-9613821a2/" target='_blank'><LinkedInIcon className='animate-bounce' fontSize='large' /></a>
                            <a href="mailto:juansw03@gmail.com" target='_blank'><MailIcon className='animate-bounce' fontSize='large' /></a>
                        </div>
                    </Slide>
                </div>
            </section>
            <section id="about" className='flex flex-col items-center text-lg w-3/4 mx-auto lg:text-center gap-2 lg:gap-4'>
                <div className='w-8/12 md:w-1/2 lg:w-4/12 aspect-square relative'>
                    <Image src={profilePic} fill className='rounded-full' alt="profile picture of Juan Jose Hernandez"></Image>
                </div>
                <h2 className='text-3xl font-bold'>{t('about')}</h2>
                <div className="lg:w-2/3">
                    <p className='mb-2 lg:mb-4'>{t('description.1')}</p>
                    <p className='mb-2 lg:mb-4'>{t('description.2')}</p>
                    <p className="mb-2 lg:mb-4">{t('description.3')}</p>
                    <p>{t('description.4')}</p>
                </div>
                <h2 className='text-3xl font-bold'>{t('tech')}</h2>
                <div className='flex flex-wrap justify-center gap-x-6 gap-y-4 max-w-[740px]'>
                    <img alt="Static Badge HTML" src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=HTML5&logoColor=white" />
                    <img alt="Static Badge CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white" />
                    <img alt="Static Badge" src="https://img.shields.io/badge/TYPESCRIPT-%233178C6?style=for-the-badge&logo=typescript&logoColor=white" />
                    <img alt="Static Badge JAVASCRIPT" src="https://img.shields.io/badge/JAVASCRIPT-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
                    <img alt="Static Badge REACT" src="https://img.shields.io/badge/REACT-20232a?style=for-the-badge&logo=REACT&logoColor=61DAFB" />
                    <img alt="Static Badge NODE.JS" src="https://img.shields.io/badge/NODE.JS-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" />
                    <img alt="Static Badge EXORESS.JS" src="https://img.shields.io/badge/EXPRESS.JS-404d59?style=for-the-badge&logo=express&logoColor=61DAFB" />
                    <img alt="Static Badge" src="https://img.shields.io/badge/JEST-%23C21325?style=for-the-badge&logo=jest" />
                    <img alt="Static Badge VITE" src="https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
                    <img alt="Static Badge NEXT" src="https://img.shields.io/badge/NEXT-black?style=for-the-badge&logo=next.js&logoColor=white" />
                    <img alt="Static Badge TAILWIND" src="https://img.shields.io/badge/TAILWIND-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
                    <img alt="Static Badge MATERIALUI" src="https://img.shields.io/badge/MUI-0081CB?style=for-the-badge&logo=MUI&logoColor=white" />
                    <img alt="Static Badge SASS" src="https://img.shields.io/badge/SASS-hotpink?style=for-the-badge&logo=SASS&logoColor=white" />
                    <img alt="Static Badge STYLED COMPONENTS" src="https://img.shields.io/badge/STYLED--COMPONENTS-DB7093?style=for-the-badge&logo=styled-components&logoColor=white" />
                </div>
            </section>
            <section id="projects" className='w-4/5 mx-auto flex flex-col items-center gap-2 lg:gap-4 mt-4 lg:mt-8'>
                <h2 className="text-3xl font-bold">{t('projects')}</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    {projects.map(project => <ProjectCard key={project.title} project={project} />)}
                </div>
            </section>
            <section id="contact" className='mb-20 flex flex-col items-center gap-2 lg:gap-4 mt-4 lg:mt-8 w-3/4 mx-auto'>
                <h2 className="text-3xl font-bold">{t('contact')}</h2>
                <p>
                    {t('footer.1')}
                    <a href='https://www.linkedin.com/in/juan-jose-hernandez-muñoz-9613821a2/' target='_blank' className='font-semibold dark:text-light text-primary cursor-pointer'>LinkedIn</a>
                    {t('footer.2')}
                    <a href='mailto:juansw03@gmail.com' target='_blank' className='font-semibold dark:text-light text-primary cursor-pointer'>Gmail,</a>
                    {t('footer.3')}
                    <a href='https://github.com/J-HernandezM' target='_blank' className='font-semibold dark:text-light text-primary cursor-pointer'>Github! :)</a></p>
            </section>
        </main>
    )
}

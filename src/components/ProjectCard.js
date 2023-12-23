import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { badges } from '@/shared/badges';
import Image from 'next/image';

export default function ProjectCard({project}) {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

  return (
    <Card className='group relative aspect-video max-w-[550px]'>
        <CardActionArea onClick={() => openInNewTab(project.live)}>
            <CardMedia
                component="img"
                height="140"
                image={project.image}
                alt="green iguana"
                className='z-0 relative'
            />
        </CardActionArea>
        <CardContent className='bg-[#181818] dark:text-pWhite text-pBlack !p-3 h-full absolute z-10 bottom-0 max-h-14 w-full  group-hover:max-h-44 transition-all duration-500 overflow-hidden '>
            <Typography 
                gutterBottom
                variant="h3" 
                component="div" 
                className='text-2xl custom-font font-semibold'
            >
                {project.title}
            </Typography>
            <article className='flex flex-col justify-between h-3/4'>
                <Typography variant="body2" className='custom-font'>
                    {project.description}
                </Typography>
                <div className='flex items-center justify-between justify-self-end '>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        <a href={project.repo} target='_blank'>
                            <GitHubIcon className='cursor-pointer' />
                        </a>
                        <a href={project.live} target='_blank'>
                            <OpenInNewIcon className='cursor-pointer' />
                        </a>
                    </div>
                    <div className='flex gap-1 lg:gap-2 items-center'>
                        {project.technologies.map( tech => <Image width={tech==='javascript'?30:24} height={tech==='javascript'?30:24} src={badges[tech]} key={tech} alt={`${tech} badge`}/>)}
                    </div>
                </div>
            </article>
        </CardContent>
      
    </Card>
  );
}
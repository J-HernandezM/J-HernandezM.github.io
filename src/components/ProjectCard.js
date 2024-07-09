import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { badges } from '@/shared/badges';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function ProjectCard({ project }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const openInNewTab = url => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card className="group relative aspect-video max-w-[550px]">
      <CardActionArea onClick={() => openInNewTab(project.live)}>
        <CardMedia component="img" height="140" image={project.image} alt="green iguana" className="z-0 relative" />
      </CardActionArea>
      <CardContent className={`${isOpen ? 'max-h-44' : ''} bg-bgWhite dark:bg-[#181818] dark:text-pWhite text-pBlack !p-3 h-full absolute z-10 bottom-0 max-h-14 w-full   transition-all duration-500 overflow-hidden`} onClick={handleClick}>
        <div className="flex justify-between items-start">
          <Typography gutterBottom variant="h3" component="div" className="!text-2xl custom-font !font-semibold clamp">
            {project.title}
          </Typography>
          <KeyboardArrowDownIcon className={`${isOpen ? 'rotate-180' : ''} transition-all duration-75 cursor-pointer`} />
        </div>
        <article className="flex flex-col justify-between h-3/4">
          <Typography variant="body2" className="custom-font">
            {t(project.description)}
          </Typography>
          <div className="flex items-center justify-between justify-self-end ">
            <div className="flex gap-1 lg:gap-2 items-center">
              <a href={project.repo} target="_blank">
                <GitHubIcon className="cursor-pointer" />
              </a>
              <a href={project.live} target="_blank">
                <OpenInNewIcon className="cursor-pointer" />
              </a>
            </div>
            <div className="flex gap-2 items-center">
              {project.technologies.map(tech => (
                <Image width={tech === 'javascript' ? 30 : 24} height={tech === 'javascript' ? 30 : 24} src={badges[tech]} key={tech} alt={`${tech} badge`} />
              ))}
            </div>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

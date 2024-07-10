import { fabClasses } from '@mui/material';
import Slider from 'react-slick';
import lulo1 from '../../public/experience/lulo-downloads.webp';
import lulo2 from '../../public/experience/lulo-home.webp';
import lulo3 from '../../public/experience/lulo-landing.webp';
import lulo4 from '../../public/experience/lulo-music.webp';
import lulo5 from '../../public/experience/lulo-playlist.webp';
import Image from 'next/image';

const images = [
  {
    id: 1,
    src: lulo1.src,
    alt: 'Vista descargas aplicacion lulosaurio',
  },
  {
    id: 2,
    src: lulo2.src,
    alt: 'Vista homepage aplicacion lulosaurio',
  },
  {
    id: 3,
    src: lulo3.src,
    alt: 'landing page Lulosaurio',
  },
  {
    id: 4,
    src: lulo4.src,
    alt: 'Vista musica aplicacion lulosaurio',
  },
  {
    id: 5,
    src: lulo5.src,
    alt: 'Vista playlist aplicacion lulosaurio',
  },
];

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: false,
  speed: 500,
  centerMode: true,
  centerPadding: '0px',
  nextArrow: <Arrow />,
  prevArrow: <Arrow />,
};

export default function ExperienceSlider() {
  return (
    <Slider {...settings} className="w-80 h-auto aspect-square md:w-96">
      {images.map(i => (
        <figure className="w-full h-80 md:h-96" key={i.id}>
          <Image width={350} height={350} className="object-contain w-full h-full" src={i.src} alt={i.alt} />
        </figure>
      ))}
    </Slider>
  );
}

function Arrow(props) {
  const { className, style, onClick } = props;
  return <div className={`${className} before:!text-bgBlack dark:before:!text-bgWhite`} style={{ ...style }} onClick={onClick}></div>;
}

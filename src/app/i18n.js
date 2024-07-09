import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector/cjs';

i18next
  .use(initReactI18next)
  .use(I18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          home: 'Home',
          about: 'About me',
          experience: 'Work experience',
          projects: 'Projects',
          contact: 'Contact me',
          cv: 'Curriculum',
          tech: 'Tech stack',
          description: {
            1: "Hello! I'm Juan José Hernández, a Frontend Developer with over one year of experience creating efficient and innovative solutions.",
            2: 'I have strong knowledge in HTML, CSS, and JavaScript, as well as React and NodeJS.',
            3: "Over the past year, I've had the opportunity to explore other frameworks and become more familiar with them.",
            4: 'My experience as an entrepreneur in the field of handmade cosmetics has helped me enhance my soft skills and enables me to offer a critical perspective in the development of products and features, always keeping the customer experience in mind.',
          },
          footer: {
            1: 'You cand send me a message on ',
            2: ' or ',
            3: " and if you're interested, you can check out more of my work on ",
          },
          cards: {
            ananda: 'E-commerce under construction for my own handmade cosmetics company. Elegant design in line with the brand image.',
            weather: 'Application for checking the weather in multiple locations simultaneously.',
            landing: 'Landing Page for a travel and tour packages company, featuring a modern and eye-catching design.',
            todo: 'To-do manager with a simple design and features such as routing, loading states, and state management using reducers.',
            tip: 'Simple yet aesthetically pleasing tool for splitting the bill at a restaurant or dividing expenses among friends.',
            ip: 'Simple app for locating an IP address and providing information about its location.',
            short: 'Landing page to shorten links using an API',
          },
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          about: 'Acerca de mí',
          experience: 'Experiencia',
          projects: 'Proyectos',
          contact: 'Contactáme',
          cv: 'Hoja de vida',
          tech: 'Tecnologías',
          description: {
            1: 'Hola! Soy Juan José Hernández, Frontend Developer con +1 año de experiencia creando soluciones eficientes e innovadoras.',
            2: 'Poseo sólidos conocimientos en HTML, CSS, y JavaScript, asi como React y NodeJS.',
            3: 'Durante el ultimo año he tenido la oportunidad de explorar otros frameworks y familizarizarme más con los mismos.',
            4: 'Mi experiencia como emprendedor en el campo de la cosmetica artesanal me ha ayudado a potenciar mis habilidades blandas y me permite ofrecer una perspectiva critica en el desarrollo de productos y funcionalidades pensando en la experiencia final del cliente.',
          },
          footer: {
            1: 'Puedes enviarme un mensaje en ',
            2: ' o en ',
            3: ' y si estas interesado, puedes ver mis otros proyectos en ',
          },
          cards: {
            ananda: 'E-commerce en construccion para mi propia empresa de cosmetica artesanal. Diseño elegante y acorde a la imagen de marca.',
            weather: 'Aplicativo para consultar el clima en diferentes localizaciones a la vez.',
            landing: 'Landing Page para empresa de viajes y paquetes turisticos, con un diseño moderno y llamativo.',
            todo: 'To-do manager con diseño simple, y features como routing, estados de carga y manejo del estado usando reducers.',
            tip: 'Sencilla pero estetica herramienta para divir la cuenta de un restaurante o compra entre tus amigos.',
            ip: 'Aplicativo sencillo para localizar una direccion IP y brindar informacion de su localización.',
            short: 'Landing page para acortar links mediante una API.',
          },
        },
      },
    },
  });

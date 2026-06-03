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
          contact: 'Contact me',
          cv: 'Curriculum',
          tech: 'Tech stack',
          description: {
            1: 'Senior Full-Stack Engineer and AI Developer specializing in decoupled cloud architectures and agentic AI systems.',
            2: 'Experienced in constructing autonomous workflows using MCPs and orchestrating cloud pipelines with AWS Step Functions, Lambda, and ECS.',
            3: 'Focuses on clean code principles and enterprise design patterns to build resilient, highly scalable infrastructure.',
            4: "Outside of engineering, I'm passionate about technology trends, gaming, and exploring new hobbies. You'll usually find me playing competitive Pokémon, volleyball, roller skating, drawing, or working on crochet projects.",
          },
          footer: {
            1: 'You can send me a message on ',
            2: ' or ',
            3: " and if you're interested, you can check out more of my work on ",
          },
          work: {
            position: 'Full-Stack Developer',
            time: 'Freelance · Jun 2021 - Dec 2023',
            achievements: {
              title: 'ACHIEVEMENTS',
              1: 'Refactored a cross-platform mobile application (Ionic/Angular media player for kids) utilizing the Repository Pattern, optimizing state management and slashing production bundle size by 50%.',
              2: 'Architected full-stack web solutions including React + TypeScript platforms, headless CMS integrations for dynamic content delivery, and high-conversion marketing landing pages.',
              3: 'Spearheaded Shopify e-commerce migrations and greenfield builds, successfully transferring thousands of product references from legacy providers while ensuring 100% data integrity.',
              4: 'Collaborated with UX/Design teams to translate high-fidelity designs into high-performance Shopify storefronts (Liquid, custom themes) engineered specifically to boost sales and retention.',
            },
          },
          work2: {
            position: 'Senior Software Engineer',
            time: 'Skyline Technologies · Jan 2024 - Present',
            achievements: {
              title: 'ACHIEVEMENTS',
              1: 'Engineered an autonomous testing agent using Model Context Protocol (MCP), enabling an LLM to dynamically execute and validate complex system logic directly against native backend code, completely eliminating live platform dependencies.',
              2: 'Architected agentic reporting workflows and LLM orchestration pipelines on AWS that cross-reference data across hundreds of projects to automatically generate status reports and actionable work items.',
              3: 'Designed an automated meeting intelligence pipeline for Zoom data, leveraging an LLM to autonomously produce structured reports and work items, reducing post-meeting admin overhead by 60%.',
              4: 'Implemented Hexagonal Architecture alongside enterprise design patterns (Factory, Strategy, Repository) to cleanly decouple core business logic and AI layers from external infrastructure.',
              5: 'Developed high-throughput AWS ETL pipelines to ingest and unify millions of data records from fragmented client sources into a centralized database.',
              6: 'Spearheaded a massive database deduplication strategy for historical and incoming real-time streaming data, ensuring strict data integrity and drastically slashing API query latency.',
              7: 'Integrated distributed observability and monitoring, configuring real-time alerting and custom metrics that significantly reduced Mean Time to Resolution (MTTR).',
            },
          },
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          about: 'Acerca de mí',
          experience: 'Experiencia profesional',
          contact: 'Contáctame',
          cv: 'Hoja de vida',
          tech: 'Tecnologías',
          description: {
            1: 'Senior Full-Stack Engineer y AI Developer especializado en arquitecturas cloud desacopladas y sistemas de IA agénticos.',
            2: 'Experiencia en la construcción de workflows autónomos utilizando MCPs y en la orquestación de pipelines en la nube con AWS Step Functions, Lambda y ECS.',
            3: 'Enfoque en principios de código limpio (clean code) y patrones de diseño empresariales para construir infraestructura resiliente y altamente escalable.',
            4: 'Fuera de la ingeniería, me apasionan las tendencias tecnológicas, los videojuegos y explorar nuevos hobbies. Normalmente me verás jugando Pokémon competitivo, voleibol, patinando, dibujando o tejiendo crochet.',
          },
          footer: {
            1: 'Puedes enviarme un mensaje en ',
            2: ' o en ',
            3: ' y si estás interesado, puedes ver mis otros proyectos en ',
          },
          work: {
            position: 'Full-Stack Developer',
            time: 'Freelance · Jun 2021 - Dic 2023',
            achievements: {
              title: 'LOGROS OBTENIDOS',
              1: 'Refactoricé una aplicación móvil multiplataforma (reproductor multimedia para niños en Ionic/Angular) utilizando el patrón Repository, optimizando el manejo de estado y reduciendo el tamaño del bundle de producción en un 50%.',
              2: 'Desarrolle soluciones web full-stack que incluyeron plataformas con React + TypeScript, integraciones de CMS headless para la entrega dinámica de contenido y landing pages de alta conversión orientadas a marketing.',
              3: 'Lideré migraciones de comercio electrónico y desarrollos desde cero (greenfield) en Shopify, transfiriendo exitosamente miles de referencias de productos desde proveedores legados garantizando el 100% de la integridad de los datos.',
              4: 'Colaboré estrechamente con equipos de diseño/UX para traducir interfaces de alta fidelidad en tiendas de Shopify de alto rendimiento (Liquid, temas personalizados), diseñadas específicamente para impulsar las ventas y la retención.',
            },
          },
          work2: {
            position: 'Senior Software Engineer',
            time: 'Skyline Technologies · Ene 2024 - Presente',
            achievements: {
              title: 'LOGROS OBTENIDOS',
              1: 'Diseñé e implementé un agente de pruebas autónomo utilizando Model Context Protocol (MCP), permitiendo que un LLM ejecute y valide lógica compleja del sistema directamente sobre el código nativo del backend, eliminando por completo la dependencia de entornos en vivo.',
              2: 'Desarrolle workflows de reportes agénticos y pipelines de orquestación de LLMs en AWS que cruzan información de cientos de proyectos para generar reportes de estado y tareas accionables de forma automática.',
              3: 'Diseñé un pipeline automatizado de inteligencia de reuniones para datos de Zoom, optimizando el uso de un LLM para producir autónomamente reportes estructurados y asignación de tareas, reduciendo la carga administrativa post-reunión en un 60%.',
              4: 'Implementé Arquitectura Hexagonal junto con patrones de diseño empresariales (Factory, Strategy, Repository) para desacoplar limpiamente la lógica de negocio central y las capas de IA de la infraestructura externa.',
              5: 'Desarrollé pipelines ETL de alto rendimiento en AWS para la ingesta y unificación de millones de registros de datos provenientes de fuentes fragmentadas de clientes en una base de datos centralizada.',
              6: 'Lideré una estrategia masiva de deduplicación de bases de datos para datos históricos y streaming en tiempo real, garantizando la integridad estricta de la información y reduciendo drásticamente la latencia de las consultas de las APIs.',
              7: 'Integré observabilidad y monitoreo distribuido, configurando alertas en tiempo real y métricas personalizadas que redujeron significativamente el Tiempo Medio de Resolución (MTTR).',
            },
          },
        },
      },
    },
  });

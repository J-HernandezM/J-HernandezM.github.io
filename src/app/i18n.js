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
            1: "Hello! I'm Juan José Hernández. I'm a Senior Software Engineer and AI Developer specializing in decoupled cloud architectures and agentic AI systems.",
            2: 'I build autonomous workflows using MCP and orchestrate cloud pipelines with AWS Step Functions, Lambda, and ECS.',
            3: 'I focus on clean code principles and enterprise design patterns to build resilient, highly scalable infrastructure.',
            4: "Outside of engineering, I'm passionate about technology trends, and outside of code I'm into volleyball, roller skating, crochet, drawing, and competitive Pokémon. Always picking up new hobbies.",
          },
          footer: {
            1: 'You cand send me a message on ',
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
              1: 'Engineered an autonomous testing agent using MCP, enabling an LLM to dynamically execute and validate complex system logic directly against native backend code, completely eliminating live platform dependencies.',
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
          experience: 'Experiencia',
          contact: 'Contactáme',
          cv: 'Hoja de vida',
          tech: 'Tecnologías',
          description: {
            1: 'Soy Ingeniero de Software Senior y Desarrollador de IA, especializado en arquitecturas cloud desacopladas y sistemas de IA basados en agentes.',
            2: 'Construyo flujos de trabajo autónomos usando MCP y desarrollando pipelines en la nube con los diferentes servicios de AWS',
            3: 'Me enfoco en principios de código limpio y patrones de diseño para construir infraestructura resiliente y altamente escalable.',
            4: 'Fuera de la ingeniería, me apasionan la tecnologia, probar nuevos deportes, patinar, el crochet, y hasta Pokémon competitivo. Me gusta explorar nuevos hobbies!',
          },
          footer: {
            1: 'Puedes enviarme un mensaje en ',
            2: ' o en ',
            3: ' y si estas interesado, puedes ver mis otros proyectos en ',
          },
          work: {
            position: 'Desarrollador Full-Stack',
            time: 'Freelance · Jun 2021 - Dic 2023',
            achievements: {
              title: 'LOGROS OBTENIDOS',
              1: 'Reestructuré una aplicación móvil multiplataforma (reproductor multimedia en Ionic/Angular para niños) aplicando el patrón Repository, optimizando el manejo del estado y reduciendo el bundle de producción en un 50%.',
              2: 'Diseñé la arquitectura de soluciones web full-stack, incluyendo plataformas con React + TypeScript, integraciones con CMS headless para entrega de contenido dinámico y páginas de marketing de alta conversión.',
              3: 'Lideré migraciones e implementaciones desde cero de comercio electrónico en Shopify, transfiriendo con éxito miles de referencias de productos desde proveedores anteriores con un 100% de integridad de datos.',
              4: 'Colaboré con equipos de UX y Diseño para convertir diseños de alta fidelidad en tiendas Shopify de alto rendimiento (Liquid, temas personalizados), enfocadas en aumentar ventas y retención.',
            },
          },
          work2: {
            position: 'Ingeniero de Software Senior',
            time: 'Skyline Technologies · Enero 2024 - Presente',
            achievements: {
              title: 'LOGROS OBTENIDOS',
              1: 'Desarrollé un agente de pruebas autónomo usando MCP, permitiendo que un LLM ejecutara y validara lógica compleja de sistemas directamente contra el backend nativo, eliminando por completo las dependencias de entornos en vivo.',
              2: 'Diseñé la arquitectura de workflows basados en agentes para la generación de reportes y orquestación de LLMs en AWS, cruzando datos de cientos de proyectos para generar automáticamente reportes de estado y tareas accionables.',
              3: 'Implementé un pipeline automatizado de inteligencia para reuniones con datos de Zoom, usando un LLM para producir reportes estructurados y tareas de forma autónoma, reduciendo la carga administrativa post-reuniones en un 60%.',
              4: 'Implementé Arquitectura Hexagonal junto con patrones de diseño (Factory, Strategy, Repository) para separar claramente la lógica de negocio y las capas de IA de la infraestructura externa.',
              5: 'Desarrollé flujos ETL de alto rendimiento en AWS para consumir y unificar millones de registros de datos desde fuentes fragmentadas hacia una base de datos centralizada.',
              6: 'Lideré una estrategia masiva de eliminación de duplicados en bases de datos, tanto para datos históricos como para flujos entrantes en tiempo real, asegurando la integridad de los datos y reduciendo drásticamente la latencia de consultas API.',
              7: 'Integré monitoreo y observabilidad distribuida, configurando alertas en tiempo real y métricas personalizadas que redujeron significativamente el Tiempo Medio de Resolución (MTTR).',
            },
          },
        },
      },
    },
  });

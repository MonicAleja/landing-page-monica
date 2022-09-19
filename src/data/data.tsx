import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background1.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic12.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'héroe',
  About: 'acerca de',
  Contact: 'contacto',
  Portfolio: 'portafolio',
  Resume: 'resumen',
  Skills: 'habilidades',
  Stats: 'estadísticas',
  Testimonials: 'testimonios',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Mónica Alejandra Rodríguez.`,
  description: (
    <>
     <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Soy de la ciudad capital de Colombia <strong className="text-stone-100">Bogotá D.C</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Soy docente de Preescolar de profesión, tengo un emprendimiento en plastilina que se llama Mónica en el País de la Plastilina actualmente soy estudiante de Análisis y desarrollo del SENA, actualmente estoy culminando un diplomado en ReactJs, adicional a ello realizo estudios complementarios de desarrollo de software en Platzi.`,
  aboutItems: [
    {label: 'Location', text: 'Bogotá D.C, CO', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'COLOMBIANA', Icon: FlagIcon},
    {label: 'Interests', text: 'Series, lectura,cine', Icon: SparklesIcon},
    {label: 'Study', text: 'CESCO', Icon: AcademicCapIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 10,
      },
      {
        name: 'Lengua de Señas Colombiana',
        level: 7,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 3,
      },
      {
        name: 'Typescript',
        level: 3,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'JavaScript',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Proyecto To Do List',
    description: 'Proyecto lista de tareas',
    url: 'https://github.com/MonicAleja/to-do-clase',
    image: porfolioImage1,
  },
  {
    title: 'Proyecto API Clima',
    description: 'Aplicación Clima',
    url: 'https://github.com/MonicAleja/clima-monica',
    image: porfolioImage2,
  },
  {
    title: 'Proyecto Super Heróes',
    description: 'Aplicación de Super Heroes',
    url: 'https://github.com/MonicAleja/api-heroes-monica',
    image: porfolioImage3,
  },
  {
    title: 'Proyecto Landing Page',
    description: 'Landing Page Hoja de Vida.',
    url: 'https://timbaker.me',
    image: porfolioImage4,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'febrero 2021',
    location: 'SENA',
    title: 'Análisis y Desarrollo de la Información',
    content: <p>Estudiante 6 trimestre de ADSI .</p>,
  },
  {
    date: 'Octubre 2020',
    location: 'FUNDACION MOVISTAR PRO-FUTURO',
    title: 'Líderes innovadores',
    content: <p> Líder Innovador en area de la Educación.</p>,
  },
  {
    date: 'Abril 2020',
    location: 'POLITÉCNICO DE COLOMBIA',
    title: 'Pedagogía y Lúdica',
    content: <p>Desarrollo socioemocional.</p>,
  },
  {
    date: 'April 2006',
    location: 'CESCO',
    title: 'Tecnico en Educación Preescolar',
    content: <p>Tecnica en educación preescolar con enfásis en desarrollo emocional.</p>,
  },
  {
    date: 'March 2003',
    location: 'Colegio Diego Fallón',
    title: 'Bachiller',
    content: <p>Bachiller acádemico, con enfásis en marketing y mercadeo.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2020 - Present',
    location: 'Mónica en el País de la Plastilina',
    title: 'CEO',
    content: (
      <p>
       Soy emprendedora de Mónica en el País de la Plastilina, este proyecto nació debido a los
       altos problemas de depresión que se generó en los niños por causa de la pandemia, con
       este proyecto queremos enfocar los valores y despertar la creatividad artística, además de fortalecer y guiar los comportamientos que se generan por la depresión. Con este proyecto hemos cambiado la vida de cientos de familias que se
       encontraban distanciadas por la falta de comunicación evidenciamos en los niños los
       avances en el aprendizaje, que anteriormente se les dificultaba en las diferentes áreas de estudio. Adicional a ello queremos empreder con este proyecto Robotica y desarrollo de software para niños.
      </p>
    ),
  },
  {
    date: 'Septiembre 2014 - Junio 2017',
    location: 'Jardín Infantil Garabatos',
    title: 'Auxiliar de Preescolar',
    content: (
      <p>
        Apoyar las actividades del proceso enseñanza-aprendizaje, áreas
        recreativas y asistencial a niños en edad preescolar, coordinando y programando
        dichas actividades conjuntamente con su superior inmediato, a fin de lograr el
        desarrollo de sus habilidades y destrezas
      </p>
    ),
  },
  {
    date: 'Enero 2011 - Junio 2015',
    location: 'Maternal y Preescolar ASPAEN-ATAVANZA',
    title: 'Auxiliar de Ruta y Apoyo Escolar',
    content: (
      <p>
        Coordinar y monitorear el desplazamiento dentro de la ruta de los
        niños y niñas desde el jardín hasta sus casas, cuidando de su bienestar y buen
        comportamiento.
        Apoyar las actividades del proceso enseñanza-aprendizaje, áreas
        recreativas y asistencial a niños en edad preescolar, coordinando y programando
        dichas actividades conjuntamente con su superior inmediato, a fin de lograr el
        desarrollo de sus habilidades y destrezas
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Contáctame',
  items: [
    {
      type: ContactType.Email,
      text: 'monica.aleja.rod@gmail.com',
      href: 'mailto:monica.elaj.rod@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Bogotá D.C, Colombia',
      href: 'BogotáD.C',
    },
    {
      type: ContactType.Instagram,
      text: '@monicaenelpaisdelaplastilina',
      href: 'https://www.instagram.com/monicaenelpaisdelaplastilina/',
    },
    {
      type: ContactType.Github,
      text: 'MonicAleja',
      href: 'https://github.com/MonicAleja',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/MonicAleja'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/monicaenelpaisdelaplastilina/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/moniarodriguez'},
];

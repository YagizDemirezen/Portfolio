'use client';
import './styles/style.css';
import Navbar from './components/header/Navbar';
import TitleSection from './components/main/TitleSection';
import AboutSection from './components/main/AboutSection';
import SkillSection from './components/main/SkillSection';
import EducationHistory from './components/main/EducationHistory';
import CareerSummary from './components/main/CareeerSummary';
import Referances from './components/main/Referances';
import ContactForm from './components/main/ContactForm';
import { useRef } from 'react';

function App(){

const refs = {
  main: useRef<HTMLDivElement>(null),
  about: useRef<HTMLDivElement>(null),
  skills: useRef<HTMLDivElement>(null),
  education: useRef<HTMLDivElement>(null),
  career: useRef<HTMLDivElement>(null),
  references: useRef<HTMLDivElement>(null),
  contact: useRef<HTMLDivElement>(null),
};

const scrollTo = (section: keyof typeof refs) => {
  const element = refs[section]?.current;
  if (element) {
    const yOffset = -100;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
};

  return (
    <>
    <Navbar onScrollTo={scrollTo} />
      <div ref={refs.main}>
        <TitleSection />
      </div>
      <div ref={refs.about}>
        <AboutSection />
      </div>
      <div ref={refs.skills}>
        <SkillSection />
      </div>
      <div ref={refs.education}>
        <EducationHistory />
      </div>
      <div ref={refs.career}>
        <CareerSummary />
      </div>
      <div ref={refs.references}>
        <Referances />
      </div>
      <div ref={refs.contact}>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
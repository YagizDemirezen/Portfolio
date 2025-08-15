'use client';
import { useEffect, useState } from 'react';
import style from '../../styles/Navbar.module.css';
import { FiDownload, FiHome } from 'react-icons/fi';
import { AiOutlineHome } from 'react-icons/ai';

interface NavbarProps {
  onScrollTo: (section:'main' | 'about' | 'skills' | 'education' | 'career' | 'references' | 'contact') => void;
}

const Navbar: React.FC<NavbarProps> = ({ onScrollTo }) => {
  const [animate, setAnimate] = useState(false);

  // Animasyon efekti
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500); // animasyon süresi
    }, 2500); // 2.5 saniyede bir
    return () => clearInterval(interval);
  }, []);

  const userLang = navigator.language || navigator.language;
  const language = userLang.startsWith('tr') ? 'tr' : 'en';

  const ENCV = '/YagizDemirezen_CV_EN.pdf'
  const TRCV = '/YagizDemirezen_CV_TR.pdf'

  const CV = language === 'tr' ? TRCV : ENCV;
  const linkText = language === 'tr' ? 'Özgeçmişimi İndir' : 'Download CV';

  return (
    <nav className={style.navbar}>
      <div className={style.leftLinks}>
        <a className={style.navLink} onClick={() => onScrollTo('main')}><AiOutlineHome size={24}/></a>
        <a className={style.navLink} onClick={() => onScrollTo('about')}>Hakkımda</a>
        <a className={style.navLink} onClick={() => onScrollTo('skills')}>Yetenekler</a>
        <a className={style.navLink} onClick={() => onScrollTo('education')}>Eğitim Geçmişi</a>
        <a className={style.navLink} onClick={() => onScrollTo('career')}>Kariyer Özeti</a>
        <a className={style.navLink} onClick={() => onScrollTo('references')}>Referanslar</a>
        <a className={style.navLink} onClick={() => onScrollTo('contact')}>İletişim</a>
      </div>

      <a href={CV} download className={`${style.navLink} ${style.cvLink}`}>
        {linkText} <FiDownload className={`${style.icon} ${animate ? style.shake : ''}`} />
      </a>
    </nav>
  );
};

export default Navbar;

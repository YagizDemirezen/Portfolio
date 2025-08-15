import styles from '../../styles/EducationHistory.module.css';
import { FaSearch } from 'react-icons/fa';
import React from 'react';

const EducationHistory = React.forwardRef<HTMLDivElement>((props, ref) => {

  const Transcript = '/Yagiz_Demirezen_Transcript.pdf';
  return (
    <div className={styles.educationContainer} ref={ref}>
      <h1 className={styles.title}>Eğitim Geçmişi</h1>
      <div className={styles.education}>
        <a
          href='https://www.google.com/search?q=%C4%B0stanbul+Beykent+%C3%9Cniversitesi'
          className={styles.universityLink}
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={styles.university}>İstanbul Beykent Üniversitesi</h2>
        </a>
        <p className={styles.programme}>Bilgisayar Programcılığı</p>
        <p className={styles.date}>Eylül 2023 - Ağustos 2025</p>
        <p className={styles.additional}>AGNO: 3.76/4.00</p>
        <p className={styles.additional}>Yüksek Onur Sertifikası</p>

        <a
          className={styles.transcript}
          href={Transcript}
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaSearch className={styles.icon} /> Transkript Gör
        </a>
      </div>
    </div>
  );
});

export default EducationHistory;

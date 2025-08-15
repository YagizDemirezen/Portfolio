import styles from '../../styles/CareerSummary.module.css';
import React from 'react';

const CareerSummary = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.careerContainer}>
      <h1 className={styles.title}>Kariyer Özeti</h1>
      <div className={styles.job}>
        <a href='https://company.e-resident.gov.ee/company/thecoderepublic-ou/' target='_blank' className={styles.companyLink}><h2 className={styles.company} >The Code Republic OÜ</h2></a>
        <p className={styles.position}>Stajyer Fullstack Geliştirici</p>
        <p className={styles.date}>Mayıs 2025 - Ağustos 2025</p>
        <ul className={styles.tasks}>
          <li>TypeScript, JavaScript ve Tailwind CSS kullanarak işlevsel ve verimli web sitesi özellikleri geliştirmek.</li>
          <li>Web sitesi geliştirme süreçlerinde Next.js ve Node.js kullanmak.</li>
          <li>Veritabanı işlemleri ve veri yönetimi için Supabase ile çalışmak.</li>
          <li>Güvenli ve ölçeklenebilir RESTful Web API’ler tasarlamak ve geliştirmek.</li>
          <li>Takım tabanlı proje geliştirme süreçlerine katılmak, açık iletişim ve paylaşılan sorumlulukları sağlamak.</li>
          <li>Versiyon kontrolü ve takım içi iş birliği için Git kullanmak. </li>
        </ul>
      </div>
    </div>
  );
});

export default CareerSummary;

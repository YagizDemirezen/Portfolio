import styles from '../../styles/Referances.module.css'
import React from 'react';

const References = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.referancesContainer}>
      <h1 className={styles.title}>Referanslar</h1>
      <div className={styles.referances}>
        <ul>
            <li className={styles.referanceLink}><span className={styles.referanceName}>Cenk Kahramaner</span> - <span className={styles.referanceInformations}>CEO, The Code Republic</span> - cenk@thecoderepublic.dev </li>
            <li className={styles.referanceLink}><span className={styles.referanceName}>Anıl Yıldız</span> - <span className={styles.referanceInformations}>Öğretim Görevlisi, İstanbul Beykent Üniversitesi</span> - anilyildiz@beykent.edu.tr </li>
            <li className={styles.referanceLink}><span className={styles.referanceName}>İbrahim Kaya</span> - <span className={styles.referanceInformations}>Öğretim Görevlisi, Kastamonu Üniversitesi</span> - ibrahimkaya@kastamonu.edu.tr </li>
            <li className={styles.referanceLink}><span className={styles.referanceName}>Firdevs Durnagöl</span> - <span className={styles.referanceInformations}>Öğretim Görevlisi, İstanbul Beykent Üniversitesi</span> - firdevsdurnagol@beykent.edu.tr</li>
            <li className={styles.referanceLink}><span className={styles.referanceName}>Mukaddes Gezmiş Gündoğdu</span> - <span className={styles.referanceInformations}>Öğretim Görevlisi, İstanbul Beykent Üniversitesi</span> - mukaddesgundogdu@beykent.edu.tr </li>
            <li className={styles.referanceLink}><span className={styles.referanceName}>Ahsen Erden</span> - <span className={styles.referanceInformations}>Öğretim Görevlisi, İstanbul Beykent Üniversitesi</span> - ahsenerdenbeykent.edu.tr </li>
        </ul>
      </div>
    </div>
  );
});

export default References;
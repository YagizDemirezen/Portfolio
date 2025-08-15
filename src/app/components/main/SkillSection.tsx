import styles from '../../styles/SkillSection.module.css';
import React from 'react';

const SkillSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.skillsContainer}>
      <h1 className={styles.skillsTitle}>Yetenekler</h1>
      <div className={styles.skillsMainContainer}> 
          <div className={styles.skillColumn}>
              <ul>
                <a href='https://www.google.com/search?q=Fullstack+Development' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Fullstack Geliştirme</li></a>
                <a href='https://www.google.com/search?q=Cyber+Security' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Siber Güvenlik</li></a>
                <a href='https://www.google.com/search?q=Database+Management' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Veritabanı Yönetimi</li></a>
                <a href='https://www.google.com/search?q=Backend+as+a+Service' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Servis Olarak Arka Uç (BaaS)</li></a>
              </ul>
          </div>
          <div className={styles.skillColumn}>
              <ul>
                <a href='https://www.google.com/search?q=What+is+IT+Support' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>BT Desteği</li></a>
                <a href='https://www.google.com/search?q=what+is+a+network+technology' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Ağ Teknolojileri</li></a>
                <a href='https://www.google.com/search?q=What+is+Linux+OS' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Linux</li></a>
                <a href='https://www.google.com/search?q=What+is+Virtual+Machines' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Sanal Makineler</li></a>
              </ul>
          </div>
          <div className={styles.skillColumn}>
              <ul>
                <a href='https://www.google.com/search?q=Project+Planning' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Proje Planlama</li></a>
                <a href='https://tr.wikipedia.org/wiki/Yaz%C4%B1l%C4%B1m_testi' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Testler</li></a>
                <a href='https://www.google.com/search?q=What+is+Postman' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Postman</li></a>
                <a href='https://www.cisco.com/' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Cisco</li></a>
              </ul>
          </div>
          <div className={styles.skillColumn}>
              <ul>
                <a href='https://www.google.com/search?q=Yazılım+Liderliği' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Liderlik</li></a>
                <a href='https://www.google.com/search?q=What+is+a+Software+Team+Working' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Takım Çalışması</li></a>
                <a href='https://www.google.com/search?q=Analitik+Düşünme' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Analitik Düşünme</li></a>
                <a href='https://www.google.com/search?q=Fast+Learning' target='_blank' className={styles.skillItemLink}><li className={styles.skillItem}>Hızlı Öğrenme</li></a>
              </ul>
          </div>
      </div>
    </div>
  );
});

export default SkillSection;

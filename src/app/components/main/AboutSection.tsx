import React from 'react';
import styles from '../../styles/AboutSection.module.css';

const AboutSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.mainContainer}>
        <h1 className={styles.title}>Hakkımda</h1>
        <p>
            <span className={styles.pStart}>Merhaba,</span><span className={styles.pText}> ben Yağız Demirezen. Dünyaya ilk "Hello World" demem, İstanbul'da 2005 yılının Haziran ayında gerçekleşti. Teknolojiye olan ilgim çocukluk yaşlarımdan itibaren başladı. Teknolojinin içinde olmak bana her zaman mutluluk veriyordu. Bu nedenle kariyerimi bu alanda şekillendirmeye karar verdim. 2023 yılında İstanbul Beykent Üniversitesi Bilgisayar Programcılığı bölümünü kazandım. Eğitim hayatım boyunca çok değerli öğretmenlerle kendime çok fazla yeni bilgi kattım. Derslere olan ilgim ve hızlı öğrenme yeteneğim notlarıma da yansıdı ve 2025 yılında 3.76/4.00 Ağırlıklı Genel Ortalama ile Yüksek Onur Sertifikası alarak mezun oldum. Eğitim sürecimde zorunlu staj uygulaması kapsamında The Code Republic OÜ adlı şirkette Stajyer Fullstack Geliştirici pozisyonunda stajımı başarı ile tamamladım. The Code Republic bünyesinde kendime çok değerli tecrübeler kattım. Ek olarak çok kıymetli insanlar ile tanıştım. Ekip arkadaşlarım ile staj yaparken takım çalışması, zaman yönetimi, proje yönetimi ve daha bir çok yeteneği başarı hikayeme ekledim. Şu an da yeni mezun birisi olarak kendimi yazılım, siber güvenlik ve BT alanında geliştiriyorum. İlerleyen zamanlarda geliştireceğim yazılım projelerimle, şu an gerçek hayatta pratik yaparak öğrendiğim siber güvenlikle ve Cisco üzerinde kendi ağ yapılandırmalarımla birlikte öğrenim alanımı tek bir kategoride bırakmıyorum. Biliyorum ki kendimi geliştirmenin asla sınırı yok. Şu anda da kendimi geliştirebileceğim ve profesyonel tecrübe kazanabileceğim bir pozisyonda çalışmayı hedefliyorum.</span>
        </p>
    </div>
  );
});

export default AboutSection;
import Image from 'next/image';
import styles from '../../styles/TitleSection.module.css';
import profileImage from '../../../../public/myPhoto1.jpg';
import React from 'react';

const TitleSection = React.forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className={styles.mainContainer} ref={ref}>
      <h1 className={styles.title}>Yağız Demirezen | Jr. Fullstack Geliştirici</h1>
      <Image className={styles.profileImage} src={profileImage} alt="Yağız Demirezen" width={200} height={200} />
    </div>
  );
});

export default TitleSection;

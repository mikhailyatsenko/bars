import React from 'react';
import Image from 'next/image';
import styles from './BarBriefCard.module.css';
import { BarBriefCardProps } from '../types';
import { getT } from '@/shared/configs/i18n';
import Button from '@mui/material/Button';

export const BarBriefCard: React.FC<BarBriefCardProps> = async ({ title, description, imageUrl, onDetailsClick }) => {
  const { t } = await getT(['common'])

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={imageUrl}
          alt={title}
          className={styles.image}
          fill
          sizes="(max-width: 340px) 100vw, 340px"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        {description && <p className={styles.description}>{description}</p>}
        <Button variant='contained' onClick={onDetailsClick} type="button">
       {t('readMore')}
        </Button>
      </div>
    </div>
  );
};

export default React.memo(BarBriefCard);

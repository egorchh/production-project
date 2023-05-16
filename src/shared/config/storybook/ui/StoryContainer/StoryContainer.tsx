import '@/app/styles/index.scss';
import { FC, ReactNode } from 'react';
import styles from './SrotyContainer.module.scss';

export const StoryContainer = ({ children }: { children: ReactNode }) => (
    <div className={styles.container}>
        {children}
    </div>
);

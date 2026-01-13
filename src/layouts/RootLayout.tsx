import styles from '../styles/rootLayout.module.scss';
import AppHeader from '@/components/appheader';

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className={styles.holder}>
      <AppHeader />
      <div className={styles.contentHolder}>
        {children}
      </div>
    </div>
  );
};

export default RootLayout;

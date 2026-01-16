import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '@/components/navigation';
import Nextbutton from '@/components/nextbutton';
import styles from '../styles/contentLayout.module.scss';

const ContentLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.holder}>
      <Navigation />
      <div className={styles.contentHolder}>
        <Outlet />
        <Nextbutton />
      </div>
    </div>
  );
};

export default ContentLayout;

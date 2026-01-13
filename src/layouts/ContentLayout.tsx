import { Outlet } from 'react-router-dom';
import Navigation from '@/components/navigation';
import Nextbutton from '@/components/nextbutton';
import styles from '../styles/contentLayout.module.scss';

const ContentLayout = () => {
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

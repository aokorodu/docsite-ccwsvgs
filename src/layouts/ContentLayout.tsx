import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '@/components/navigation';
import Nextbutton from '@/components/nextbutton';
import TableOfContents from '@/components/tableofcontents';
import styles from '../styles/contentLayout.module.scss';

const ContentLayout = () => {
  const { pathname } = useLocation();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.holder}>
      <Navigation />
      <div className={styles.contentHolder} ref={contentRef}>
        <Outlet />
        <Nextbutton />
      </div>
      <TableOfContents contentRef={contentRef} />
    </div>
  );
};

export default ContentLayout;

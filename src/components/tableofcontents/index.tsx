import { RefObject, useState, useEffect } from 'react';
import { useTableOfContents, HeadingItem } from '@/hooks/useTableOfContents';
import styles from './tableofcontents.module.scss';

interface TableOfContentsProps {
  contentRef: RefObject<HTMLElement | null>;
}

// List icon for the mobile toggle button
const ListIcon = () => (
  <div style={{ transform: 'translate(0, 25%)' }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <text x="12" y="12" textAnchor='middle' dominantBaseline={"middle"} style={{ font: "italic 20px serif" }} >i</text>
    </svg>
  </div>
);

// Close icon for the drawer
const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const TableOfContents = ({ contentRef }: TableOfContentsProps) => {
  const { headings, activeId } = useTableOfContents(contentRef);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Close drawer on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isDrawerOpen]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  if (headings.length === 0) {
    return null;
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // Account for fixed header
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);

      // Close drawer on mobile after clicking
      setIsDrawerOpen(false);
    }
  };

  const renderHeadingList = (inDrawer = false) => (
    <ul className={styles.list}>
      {headings.map((heading: HeadingItem) => (
        <li
          key={heading.id}
          className={`${styles.item} ${heading.level === 3 ? styles.nested : ''} ${activeId === heading.id ? styles.active : ''
            }`}
        >
          <a href={`#${heading.id}`} onClick={(e) => handleClick(e, heading.id)}>
            {heading.text}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      {/* Desktop TOC */}
      <nav className={styles.toc} aria-label="Table of contents">
        <div className={styles.title}>On this page</div>
        {renderHeadingList()}
      </nav>

      {/* Mobile toggle button */}
      <button
        className={styles.mobileToggle}
        onClick={() => setIsDrawerOpen(true)}
        aria-label="Open table of contents"
        aria-expanded={isDrawerOpen}
      >
        <ListIcon />
      </button>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${isDrawerOpen ? styles.visible : ''}`}
        onClick={() => setIsDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className={`${styles.drawer} ${isDrawerOpen ? styles.open : ''}`}
        aria-label="Table of contents"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerTitle}>On this page</span>
          <button
            className={styles.closeButton}
            onClick={() => setIsDrawerOpen(false)}
            aria-label="Close table of contents"
          >
            <CloseIcon />
          </button>
        </div>
        {renderHeadingList(true)}
      </nav>
    </>
  );
};

export default TableOfContents;

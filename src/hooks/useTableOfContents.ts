import { useState, useEffect, RefObject } from 'react';
import { useLocation } from 'react-router-dom';

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function useTableOfContents(contentRef: RefObject<HTMLElement | null>) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const { pathname } = useLocation();

  // Extract headings and assign IDs
  useEffect(() => {
    if (!contentRef.current) return;

    const elements = contentRef.current.querySelectorAll('h2, h3');
    const items: HeadingItem[] = [];
    const usedIds = new Set<string>();

    elements.forEach((el, index) => {
      // Generate ID if not present
      if (!el.id) {
        let baseId = slugify(el.textContent || '') || `heading-${index}`;
        let id = baseId;
        let counter = 1;

        // Ensure unique IDs
        while (usedIds.has(id)) {
          id = `${baseId}-${counter}`;
          counter++;
        }

        el.id = id;
      }

      usedIds.add(el.id);

      items.push({
        id: el.id,
        text: el.textContent || '',
        level: el.tagName === 'H2' ? 2 : 3,
      });
    });

    setHeadings(items);
    setActiveId(items[0]?.id || '');
  }, [pathname, contentRef]);

  // Track active heading with Intersection Observer
  useEffect(() => {
    if (!contentRef.current || headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the first visible heading
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach((heading) => {
      const element = document.getElementById(heading.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [headings, contentRef]);

  return { headings, activeId };
}

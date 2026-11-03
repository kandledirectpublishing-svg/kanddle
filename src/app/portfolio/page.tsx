import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/portfolio/PortfolioClient';

export const metadata: Metadata = {
  title: 'Published Books Portfolio | Bestseller Covers & Layouts | Kandle Direct',
  description:
    'Explore 1,200+ published titles, bespoke cover art, and interior typography crafted for independent authors. See real bestseller success stories who kept 100% of their royalties.',
  openGraph: {
    title: 'Published Books Portfolio | Kandle Direct Publishing',
    description:
      'Explore our gallery of published titles, custom cover art, and interior formatting across Amazon KDP and global bookstores.',
  },
  alternates: {
    canonical: 'https://www.kandledirectpublishing.com/portfolio',
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}

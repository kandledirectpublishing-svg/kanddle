import type { Metadata } from 'next';
import { PortfolioClient } from '@/components/portfolio/PortfolioClient';

export const metadata: Metadata = {
    title: 'Portfolio | Published Book Covers & Design Work',
    description:
        'Browse our portfolio of professionally published books — cover designs, typesetting, and author success stories. See the quality of our publishing services at Kandle Direct.',
    openGraph: {
        title: 'Our Portfolio | Kandle Direct Publishing',
        description:
            'See our published work — professional book covers, interior design, and global bestsellers from our authors.',
    },
    alternates: {
        canonical: 'https://www.kandledirectpublishing.com/portfolio',
    },
};

export default function PortfolioPage() {
    return <PortfolioClient />;
}

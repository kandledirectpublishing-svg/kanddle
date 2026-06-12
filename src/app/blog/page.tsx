import type { Metadata } from 'next';
import { BlogPageClient } from '@/components/blog/BlogPageClient';

export const metadata: Metadata = {
    title: 'Self-Publishing Blog & eBook Tips | Kandle Direct',
    description:
        'Read expert guides on Amazon KDP self-publishing, EPUB formatting, professional book cover design, and marketing to sell more eBooks.',
    openGraph: {
        title: 'Kandle Direct Publishing Blog',
        description:
            'Expert tips and advice on eBook formatting, KDP self-publishing, cover designs, and marketing.',
    },
    alternates: {
        canonical: 'https://www.kandledirectpublishing.com/blog',
    },
};

export default function BlogPage() {
    return <BlogPageClient />;
}

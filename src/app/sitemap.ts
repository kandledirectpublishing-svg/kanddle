import { MetadataRoute } from 'next';
import { servicesData } from '@/data/services';
import { blogData } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.kandledirectpublishing.com';
    const now = new Date();

    // Static pages
    const staticPages: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 1.0,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: now,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: now,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];

    // Dynamic service pages
    const servicePages: MetadataRoute.Sitemap = servicesData.map((service) => ({
        url: `${baseUrl}/services/${service.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    // Dynamic blog pages
    const blogPages: MetadataRoute.Sitemap = blogData.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: now,
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...staticPages, ...servicePages, ...blogPages];
}

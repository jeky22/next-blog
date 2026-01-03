import { Metadata, Route } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://leejaechan-portfolio.vercel.app'; // TODO: 실제 배포 도메인으로 변경

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ];
}

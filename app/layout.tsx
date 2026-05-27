import type { Metadata, Viewport } from 'next';
import './globals.css';

const BASE_URL = 'https://kitchen-fitter.templates.seojack.website';

export const metadata: Metadata = {
    metadataBase: new URL(BASE_URL),
    title: 'Northwest Kitchens',
    description: 'High-trust kitchen-fitter site with project portfolio, process timeline, video testimonials, and quote calculator.',
    alternates: { canonical: '/' },
    openGraph: {
        title: 'Northwest Kitchens',
        description: 'High-trust kitchen-fitter site with project portfolio, process timeline, video testimonials, and quote calculator.',
        url: BASE_URL,
        siteName: 'Northwest Kitchens',
        type: 'website',
        locale: 'en_GB',
        images: [{ url: 'https://cdn.seojack.website/templates/tpl_kitchen_fitter.avif', width: 1600, height: 1000 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Northwest Kitchens',
        description: 'High-trust kitchen-fitter site with project portfolio, process timeline, video testimonials, and quote calculator.',
        images: ['https://cdn.seojack.website/templates/tpl_kitchen_fitter.avif'],
    },
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: '#102a30' };

const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Northwest Kitchens',
    description: 'High-trust kitchen-fitter site with project portfolio, process timeline, video testimonials, and quote calculator.',
    url: BASE_URL,
    image: 'https://cdn.seojack.website/templates/tpl_kitchen_fitter.avif',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en-GB">
            <body>
                {children}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </body>
        </html>
    );
}
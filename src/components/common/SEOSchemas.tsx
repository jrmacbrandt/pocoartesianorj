import React from 'react';
import { Helmet } from 'react-helmet-async';

export const SEOSchemas: React.FC = () => {
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Poço Artesiano RJ",
        "alternateName": "POÇO_ARTESIANO_RJ",
        "image": "https://pocoartesianorj.com.br/assets/perfuracao-poco-artesiano.webp",
        "@id": "https://pocoartesianorj.com.br/#localbusiness",
        "url": "https://pocoartesianorj.com.br",
        "telephone": "+5521980914107",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Avenida Presidente Vargas, 7325",
            "addressLocality": "Centro",
            "addressRegion": "RJ",
            "postalCode": "20210-030",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": -22.9035,
            "longitude": -43.1844
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday"
            ],
            "opens": "08:00",
            "closes": "18:00"
        },
        "sameAs": [
            "https://www.facebook.com/pocoartesianorj",
            "https://www.instagram.com/pocoartesianorj"
        ]
    };

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Poço Artesiano RJ",
        "url": "https://pocoartesianorj.com.br",
        "logo": "https://pocoartesianorj.com.br/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+55-21-98091-4107",
            "contactType": "customer service",
            "areaServed": "RJ",
            "availableLanguage": "Portuguese"
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(localBusinessSchema)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(organizationSchema)}
            </script>
        </Helmet>
    );
};

import { V2_MetaDescriptor } from '@remix-run/react';

type SeoProps = {
    title: string;
    description?: string;
    keywords?: string;
    url?: string;
};

export const getSeoMeta = ({
    title,
    description,
    keywords,
    url,
}: SeoProps): V2_MetaDescriptor[] => [
    { property: 'og:title', content: title },
    { property: 'twitter:title', content: title },
    ...(description
        ? [
              { name: 'description', content: description },
              { property: 'og:description', content: description },
              { property: 'twitter:description', content: description },
          ]
        : []),
    ...(keywords ? [{ name: 'keywords', content: keywords }] : []),
    ...(url ? [{ property: 'og:url', content: url }] : []),
    { property: 'twitter:card', content: 'summary' },
    { property: 'twitter:creator', content: '@chemikpil' },
    { property: 'twitter:site', content: '@chemikpil' },
];

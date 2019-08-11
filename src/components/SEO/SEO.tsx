import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';


interface Props {
    title: string
    description?: string
    lang?: string
    meta?: any
};

const SEO = ({ title, description = '', lang = 'en', meta = [] }: Props) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        titleTemplate
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={site.siteMetadata.titleTemplate}
            meta={[
                { name: 'description', content: metaDescription },
                { property: 'og:title', content: title },
                { property: 'og:description', content: metaDescription },
                { property: 'og:type', content: 'website' },
                { property: 'twitter:card', content: 'summary' },
                { property: 'twitter:creator', content: site.siteMetadata.author },
                { property: 'twitter:title', content: site.siteMetadata.title },
                { property: 'twitter:description', content: metaDescription }
            ].concat(meta)}
        />
    )
};

export default SEO;

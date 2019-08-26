module.exports = {
    siteMetadata: {
        title: `Michał Maćkowiak`,
        titleTemplate: `Michał Maćkowiak · %s`,
        description: `Michal Mackowiak's personal site`,
        author: `@chemikpil`,
        twitterUsername: `@chemikpil`,
        url: `https://mackowiak.io`,
        image: `/images/icon.png`,
        social: {
            twitter: `https://twitter.com/chemikpil`,
            instagram: `https://www.instagram.com/chemikpil/`,
            github: `https://github.com/chemikpil`,
            s500px: `https://500px.com/chemikpil`,
        },
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `mackowiak.io`,
                short_name: `mackowiak.io`,
                start_url: `/`,
                background_color: `#F7F7F7`,
                theme_color: `#F7F7F7`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Titillium Web`,
                        variants: [`300`, `700`],
                        subsets: [`latin-ext`],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-react-svg`,
            options: {
                rule: {
                    include: /images/,
                }
            }
		},
		`gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-brotli`,
        `gatsby-plugin-styled-components`,
    ],
}

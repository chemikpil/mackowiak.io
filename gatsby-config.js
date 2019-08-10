module.exports = {
  siteMetadata: {
    title: `mackowiak.io`,
    description: `Michal Mackowiak's personal site`,
    author: `@chemikpil`
  },
  plugins: [
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`
        }
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
        icon: `src/images/icon.png`
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [{
          family: `Titillium Web`,
          variants: [`300`, `400`, `700`],
          subsets: [`latin-ext`]
        }]
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-brotli`
  ]
}
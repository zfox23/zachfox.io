module.exports = {
    siteMetadata: {
      siteUrl: "https://zachfox.io",
      title: "Zach Fox Online",
      titleTemplate: "%s · ZachFox.io",
      description: "Zach Fox is an engineer using computers to help bring people closer together.",
      image: "/mainMetaImage.jpg"
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-postcss",
      "gatsby-plugin-sharp",
      "gatsby-transformer-sharp",
      `gatsby-transformer-json`,
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          "path": "./src/data/"
        }
      },
      {
        resolve: "gatsby-plugin-manifest",
        options: {
          name: `Zach Fox Online`,
          short_name: `Zach Fox Online`,
          start_url: `/`,
          background_color: `#3730a3`,
          theme_color: `#3730a3`,
          display: `standalone`,
          icon: "src/data/images/zfp-circle.png",
          icon_options: {
            purpose: `any maskable`,
          },
        },
      },
      {
        resolve: 'gatsby-plugin-robots-txt',
        options: {
          host: 'https://zachfox.io',
          sitemap: 'https://zachfox.io/sitemap.xml',
          policy: [{ userAgent: '*', allow: '/' }]
        }
      }
    ],
    proxy: {
      prefix: "/api",
      url: "http://localhost:4243"
    }
  };
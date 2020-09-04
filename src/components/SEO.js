import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc
        image
        siteUrl
        siteTitle
        twitterUsername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  
  const {
    author,
    siteDesc,
    image,
    siteUrl,
    siteTitle,
    twitterUsername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter:cards */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={author} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO

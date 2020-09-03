import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return <Layout>
    <SEO title="Publications" />
    <section className="blog-page">
      <Blogs blogs={blogs} title="publications" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiBlogs(sort: { fields: date, order: DESC }) {
      nodes {
        slug
        content
        desc
        date(formatString: "MMMM Do, YYYY")
        category
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        url
      }
    }
  }
`

export default Blog

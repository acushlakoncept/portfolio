import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = () => {
  return <h2>blog page</h2>
}

export const query = graphql`
  {
    allStrapiBlogs(sort: {fields: date, order: DESC}) {
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

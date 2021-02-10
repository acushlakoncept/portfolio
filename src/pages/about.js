 import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
const About = ({
  data: {
  about: {nodes}, 
  }
}) => {
  const {title, info, stack, image} = nodes[0]
  return <Layout>
    <SEO title="About" />
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item => {
              return <span key={item.id}>{item.title}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        title
        stack {
          id
          title
        }
        info
        image {
          childImageSharp {
            fluid (maxWidth: 1024, quality: 90) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About

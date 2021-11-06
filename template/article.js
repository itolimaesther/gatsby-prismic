import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from '../src/components/layout'
import Img from 'gatsby-image'

function ArticleTemplate({data:article}) {
    return (
        <Layout>
            <Link to={"/"} > Go back </Link>
        <Img fluid={article.markdownRemark.frontmatter.banner.childImageSharp.fluid} alt={article.markdownRemark.frontmatter.title} />
        <h1>{article.markdownRemark.frontmatter.title}</h1>   
        <div dangerouslySetInnerHTML={{ __html: article.markdownRemark.html }} />
        </Layout>
    )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        banner{
            childImageSharp{
                fluid(maxWidth: 950){
                    ...GatsbyImageSharpFluid
                }
            }

        }
      }
    }
  }
`

export default ArticleTemplate


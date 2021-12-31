import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Intro from "../components/intro"
// import "../components/style.css"
// import Image from "./images"
// import { StaticImage } from "gatsby-plugin-image"
// import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = () => {
  
  
  

  
  let getArticles = useStaticQuery(graphql`
  query Aricles{
    allMarkdownRemark {
    edges {
      node {
        fields{
          slug
        }
        frontmatter {
          title
          date
          publisher
          published
          banner {
            absolutePath
          }
          thumbnail {
            childImageSharp{
              fluid(maxWidth: 50){
                  ...GatsbyImageSharpFluid
              }
          }
            absolutePath
          }
        }
        excerpt
      }
    }
    totalCount
  }}
  `)

  return(

  <Layout>
    <Seo title="Home" />
 

    <div>
      
      <h3>My Articles</h3>
        
          <div className="articles">
              {getArticles.allMarkdownRemark.edges.map(({node}) => (
              <div key={node.id} className="image-wrapper">
                <Link to={`articles${node.fields.slug}`} className="article-link"> 
                <div>
                      <Img
                        fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={node.frontmatter.title}
                       
                      />
                      <h5 className="sub-heading">
                        {node.frontmatter.title}
                      </h5>
                      <p className="description">{node.excerpt}</p>
                    </div>
              </Link>

            </div>
            ))}
          </div>
      
      

    </div>

    
  </Layout>
  )
}





export default IndexPage


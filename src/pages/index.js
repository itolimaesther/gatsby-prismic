import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Intro from "../components/intro"
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
    <Intro/>

    <div>
      
      <h3>My Articles</h3>
        
          <div 
              style={{
                display: `flex`,
                justifyContent:  `space-around`,
                columnGap: `12px`
              }}
               >
              {getArticles.allMarkdownRemark.edges.map(({node}) => (
              <div key={node.id}>
                <Link to={`articles${node.fields.slug}`}> 
                <div>
                      <Img
                        fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        alt={node.frontmatter.title}
                       
                      />
                      <h5
                        style={{
                          padding: `15px 0px 0px`,
                        }}
                      >
                        {node.frontmatter.title}
                      </h5>
                      <p>{node.excerpt}</p>
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


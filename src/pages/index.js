import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
// import Image from "./images"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"


const Heading = styled.h1`
  padding: 12px;
  color: green;
  text-align: center;
`

const IndexPage = ({data}) => {
  
  
  

  
  let banner = useStaticQuery(graphql`
   query Banner {
     file(relativePath: {eq: "banner.png"}) {
       childImageSharp {
         fluid(maxWidth: 1200) {
           ...GatsbyImageSharpFluid
         }
       }
       }
   }
  `)

  return(

  <Layout>
    <Seo title="Home" />
    <Heading>

    <h1>Hi people </h1>
    <h1>Welcome to the styled components</h1>
    </Heading>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Img fluid={banner.file.childImageSharp.fluid}/>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
      <Link to="/using-dsg">Go to "Using DSG"</Link>
    </p>
  </Layout>
  )
}





export default IndexPage


// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }
const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const ArticleTemplate = path.resolve("template/article.js")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: "index" })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    {
      allMarkdownRemark {
        totalCount
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  const article = res.data.allMarkdownRemark.edges
  article.forEach(({ node: article }) => {
    createPage({
      path: `articles${article.fields.slug}`,
      component: ArticleTemplate,
      context: {
        slug: article.fields.slug,
      },
    })
  })
}



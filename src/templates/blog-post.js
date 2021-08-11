import React from "react";

import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Comment from "../components/comment";

require(`gatsby-remark-mathjax-ssr/mathjax.css`);

export default ({ data, pageContext }) => {
  const post = data.markdownRemark;
  const title = post.frontmatter.title;
  const html = post.html;
  const { slug, next, prev } = pageContext;

  return (
    <Layout menu="blog" title={post.frontmatter.title}>
      <SEO
        path={slug}
        title={post.frontmatter.title}
        image={post.frontmatter.image?.childImageSharp?.resize.src}
        description={post.excerpt}
      />
      <div style={{ clear: "both" }}>
        <h1>{title}</h1>

        <div dangerouslySetInnerHTML={{ __html: html }} />

        <hr></hr>
        <div style={{ fontFamily: "avenir" }}>
          {prev && <Link to={prev.fields.slug}>이전글: {`${prev.frontmatter.title}`}</Link>}
        </div>
        <div style={{ marginBottom: "1rem", fontFamily: "avenir" }}>
          {next && <Link to={next.fields.slug}>다음글: {`${next.frontmatter.title}`}</Link>}
        </div>
      </div>
      <div>
        <Comment repo="wapj/wapj.github.io" />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt(pruneLength: 100, truncate: false, format: HTML)
      tableOfContents
      timeToRead
      frontmatter {
        title
        tags
        category
        image: featured {
          childImageSharp {
            resize {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`;

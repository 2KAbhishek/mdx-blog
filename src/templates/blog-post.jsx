import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {} from './blog-post.modules.css';

export default function BlogPost({data}) {
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <article>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </article>
        </Layout>
    );
}

export const pageQuery = graphql`
    query MDXQuery($slug: String!) {
        mdx(slug: {eq: $slug}) {
            frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
            }
            body
            id
            slug
        }
    }
`;

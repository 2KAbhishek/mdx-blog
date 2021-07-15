import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import {blogList, blogItem} from './articles.module.css';
import {MDXRenderer} from 'gatsby-plugin-mdx';

const Articles = ({data}) => {
    return (
        <Layout pageTitle='My Articles'>
            <ul className={blogList}>
                {data.allMdx.nodes.map((node) => (
                    <section>
                        <li className={blogItem} key={node.id}>
                            <Link to={node.slug}>
                                <h3>{node.frontmatter.title}</h3>
                            </Link>
                            <p>Posted: {node.frontmatter.date}</p>
                        </li>
                        <article>
                            <MDXRenderer>{node.body}</MDXRenderer>
                        </article>
                    </section>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    date(formatString: "MMMM D, YYYY")
                    title
                }
                id
                body
                slug
            }
        }
    }
`;

export default Articles;

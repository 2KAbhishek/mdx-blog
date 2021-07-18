import React from 'react';
import {graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import {blogList, blogItem} from './articles.module.css';

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
                slug
            }
        }
    }
`;

export default Articles;

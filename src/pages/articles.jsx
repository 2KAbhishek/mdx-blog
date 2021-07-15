import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import {blogList, blogItem} from './articles.module.css';

const Articles = ({data}) => {
    const articles = data.allFile.nodes.filter((node) => node.ext === '.mdx');
    return (
        <Layout pageTitle='My Articles'>
            <ul className={blogList}>
                {articles.map((node) => (
                    <li className={blogItem} key={node.name}>
                        <h3>{node.name}</h3>
                    </li>
                ))}
            </ul>
        </Layout>
    );
};

export const query = graphql`
    query {
        allFile {
            nodes {
                name
                ext
            }
        }
    }
`;

export default Articles;

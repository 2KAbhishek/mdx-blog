import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';

const Articles = ({data}) => {
    const articles = data.allFile.nodes.filter((node) => node.ext === '.mdx');
    return (
        <Layout pageTitle='My Articles'>
            <p>Here are my articles</p>
            <ul>
                {articles.map((node) => (
                    <li key={node.name}>{node.name}</li>
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

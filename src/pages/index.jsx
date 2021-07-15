import React from 'react';
import Layout from '../components/layout';
import {graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = ({data}) => {
    const title = data.site.siteMetadata.title;
    return (
        <Layout pageTitle={title}>
            <p>Welcome to {title}</p>
            <StaticImage
                src='../images/icon.png'
                alt='Markdown logo'></StaticImage>
        </Layout>
    );
};

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`;

export default IndexPage;

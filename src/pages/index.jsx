import React from 'react';
import Layout from '../components/layout';
import {useStaticQuery, graphql} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
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

export default IndexPage;

import React from 'react';
import Layout from '../components/layout';
import {graphql, Link} from 'gatsby';
import {StaticImage} from 'gatsby-plugin-image';

const IndexPage = ({data}) => {
    const title = data.site.siteMetadata.title;
    return (
        <Layout pageTitle={title}>
            <StaticImage
                src='../images/icon.png'
                alt='Markdown logo'></StaticImage>
            <p>
                Welcome to {title} <br /> <br />A lazily named blog that hosts
                markdown files (surprisingly!) created using Gatsby JS, visit
                <Link to='/articles'> articles</Link> to read more.
            </p>
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

const path = require(`path`);

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);
    result.data.allMdx.edges.forEach(({node}) => {
        createPage({
            path: node.slug,
            component: path.resolve(`./src/templates/blog-post.js`),
            context: {
                slug: node.slug
            }
        });
    });
};

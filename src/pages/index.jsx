import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components';
import { Wrapper } from '../components/common';

class Index extends Component {
  render() {
    const {
      data: {
        page: {
          data: pageData,
        },
        legalPages,
      },
      location,
    } = this.props;
    const {
      metaTitle,
      metaDescription,
      openGraphImage,
    } = pageData;
    const seoData = {
      metaTitle,
      metaDescription,
      openGraphImage,
    };
    const legalPageData = legalPages.edges.map(page => ({
      slug: page.node.uid,
      title: page.node.data.pageTitle.text,
    }));
    return (
      <Layout location={location} seoData={seoData}>
        <Wrapper>
          <section className="home-hero">
            <h1>Gatsby Theme Legals</h1>
            <ul>
              { legalPageData && legalPageData.map(page => (
                <li>
                  <Link
                    key={page.slug}
                    to={page.slug}
                  >
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </Wrapper>
      </Layout>
    );
  }
}

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    page: prismicHome {
      uid,
      data {
        metaTitle: meta_title {
          html
          text
        },
        metaDescription: meta_description {
          html
          text
        },
        openGraphImage: open_graph_image {
          alt
          copyright
          url
        }
      }
    }
    legalPages: allPrismicLegal {
      edges {
        node {
          uid
          data {
            pageTitle: page_name {
              text
            }
          }
        }
      }
    }
  }
`;

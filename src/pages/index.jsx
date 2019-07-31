import React, { Component } from 'react';
import { graphql, Link } from 'gatsby';
import { Layout } from '../components';
import { Wrapper } from '../components/common';
import './index.scss';

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
        <section className="home-hero">
          <Wrapper>
            <div className="container">
              <div className="inner-container">
                <span className="magic-command">yarn add @littleplusbig/gatsby-theme-legals-prismic</span>
                <h1 className="title">Gatsby Theme Legals</h1>
                <div className="subtitle">
                  <p>Makes legal documents easy to read.</p>
                  <p>Check out the demos below.</p>
                </div>
                <ul className="navigation-buttons">
                  { legalPageData && legalPageData.map(page => (
                    <li className="nav-button">
                      <Link
                        className="styled-button"
                        key={page.slug}
                        to={page.slug}
                      >
                        <span>{`Demo ${page.title}`}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Wrapper>
        </section>
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

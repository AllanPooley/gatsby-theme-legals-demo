import React, { Component } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import { SEO } from '..';
import '../../sass/global/styles.scss';

class Layout extends Component {
  componentDidMount() {
    smoothscroll.polyfill();
  }

  render() {
    const {
      children,
      location,
      seoData,
    } = this.props;
    const {
      metaTitle = null,
      metaDescription = null,
      openGraphImage = null,
    } = seoData;
    const isHome = Boolean(location.pathname === '/');
    return (
      <>
        <SEO
          title={metaTitle && metaTitle.text}
          desc={metaDescription && metaDescription.text}
          banner={openGraphImage && openGraphImage.url}
          pathname={location.pathname}
        />
        <div id="app" className="app">
          <main className={isHome ? 'home' : location.pathname.replace(/\//g, '')}>
            {children}
          </main>
        </div>
      </>
    );
  }
}

export default Layout;

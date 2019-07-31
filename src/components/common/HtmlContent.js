import React from 'react';
import './HtmlContent.scss';

const HtmlContent = ({ className, content }) => (
  <div
    className={`html-content ${className ? ` ${className}` : ''}`}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default HtmlContent;

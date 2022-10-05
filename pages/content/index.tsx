import React from 'react';
import Content from '../../components/Content';

const ContentPage = () => {
  return (
    <>
      <div className="step">
        <span className="stepNo">3</span>
        <h1 className="title">
          <b>Content</b>
        </h1>
      </div>
      <Content />
    </>
  );
};

export default ContentPage;

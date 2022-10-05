import React from 'react';
import TemplateList from './TemplateList';

const TemplatesPage = () => {
  return (
    <div className="w-full mx-auto py-4">
      <div className="step">
        <span className="stepNo">1</span>
        <h1 className="title">
          <b>Choose your template</b>
        </h1>
      </div>
      <TemplateList />
    </div>
  );
};

export default TemplatesPage;

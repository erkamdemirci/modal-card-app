import React from 'react';
import Appearance from '../../components/Appearance';

const AppearancePage = () => {
  return (
    <>
      <div className="step">
        <span className="stepNo">2</span>
        <h1 className="title">
          <b>Appearance</b> (size,colors,logo)
        </h1>
      </div>
      <Appearance />
    </>
  );
};

export default AppearancePage;

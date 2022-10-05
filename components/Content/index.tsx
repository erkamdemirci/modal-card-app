import React from 'react';
import * as S from './styles';
import { useTemplateContext } from '../../contexts/SelectedTemplate/index';

const Content = () => {
  return (
    <>
      <S.ContentContainer>
        <S.ContentSettings>
          <div className="section">
            <h2>Edit your content</h2>
          </div>
          <div className="section">
            <h2>Logo</h2>
          </div>
        </S.ContentSettings>
      </S.ContentContainer>
      <button type="button" className="btn-default">
        Save & Continue ⇢
      </button>
    </>
  );
};

export default Content;

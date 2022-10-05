import React from 'react';
import * as S from './styles';

import TemplateItem from '../TemplateItem';

const ModalTemplates = () => {
  return (
    <S.TemplatesContainer>
      <TemplateItem modalNo="Modal01" title={'Security Code'} description={'This code expires in 24 hours'} topBorder />
      <TemplateItem
        modalNo="Modal02"
        title={'Sign Up'}
        description={'Join new adventure'}
        notification={'By signing up, you agree to Privacy Policy'}
        basis={2}
      />
      <TemplateItem modalNo="Modal07" title={'Install local now'} description={"We've gone native, try it!"} />
    </S.TemplatesContainer>
  );
};

export default ModalTemplates;

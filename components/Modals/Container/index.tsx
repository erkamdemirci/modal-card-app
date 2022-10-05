import React from 'react';
import * as S from './styles';
import { CloseIcon } from '../../Icons';
import { useTemplateContext } from '../../../contexts/SelectedTemplate';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
  topBorder?: boolean;
  gradient?: boolean;
}

const ModalCard = ({ children, topBorder, gradient }: Props) => {
  const { templateColor, templateSize } = useTemplateContext();
  const [color, setColor] = useState<string>();
  const [size, setSize] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (!router) return;
    if (router.pathname === '/templates' || router.pathname === '/') {
      setSize('m');
      setColor('#7D4AEA');
    } else {
      setSize(templateSize);
      setColor(templateColor);
    }
  }, [router, templateSize, templateColor]);

  return (
    <S.DefaultModal className="modal" topBorder={topBorder} gradient={gradient} mainColor={color} size={size}>
      <S.CloseButton>
        <CloseIcon classes="close" />
      </S.CloseButton>
      {children}
    </S.DefaultModal>
  );
};

export default ModalCard;

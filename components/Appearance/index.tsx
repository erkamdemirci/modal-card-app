import React from 'react';
import dynamic from 'next/dynamic';
import * as S from './styles';
import { useTemplateContext } from '../../contexts/SelectedTemplate/index';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const colors = ['#000000', '#F37C34', '#7D4AEA', '#777777', '#DDDDDD'];

const Appearance = () => {
  const { templateSize, setColor, setSize, modalProps, modal } = useTemplateContext();
  const router = useRouter();

  const sizeClickHandler = (e: any) => {
    setSize(e.target.getAttribute('data-size'));
  };

  const colorClickHandler = (e: any) => {
    setColor(e.target.getAttribute('color'));
  };

  return (
    <>
      <S.AppearanceContainer>
        <S.AppearanceSettings>
          <div className="section">
            <h2>Size</h2>
            <S.SizeSelector>
              <button data-size="s" onClick={(e) => sizeClickHandler(e)} className={`${templateSize === 's' && 'selected'}`}>
                Small
              </button>
              <button data-size="m" onClick={(e) => sizeClickHandler(e)} className={`${templateSize === 'm' && 'selected'}`}>
                Medium
              </button>
              <button data-size="l" onClick={(e) => sizeClickHandler(e)} className={`${templateSize === 'l' && 'selected'}`}>
                Large
              </button>
            </S.SizeSelector>
          </div>
          <div className="section">
            <h2>Colors</h2>
            <S.ColorSelector>
              {colors.map((_color, idx) => (
                <S.ColorItem key={idx} onClick={(e) => colorClickHandler(e)} color={_color}></S.ColorItem>
              ))}
            </S.ColorSelector>
          </div>
        </S.AppearanceSettings>
        {modal}
      </S.AppearanceContainer>
      <button type="button" className="btn-default">
        Save & Continue ⇢
      </button>
    </>
  );
};

export default Appearance;

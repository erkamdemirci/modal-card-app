import React from 'react';
import { createContext, useContext } from 'react';
import { useTemplate } from '../../hooks/useTemplate';

type templateContextType = {
  templateColor: string;
  templateSize: string;
  modalProps: { [x: string]: any } | undefined;
  modal: any;

  setModal: (x: any) => void;
  setModalProps: (props: { [x: string]: any }) => void;
  setColor: (color: string) => void;
  setSize: (size: string) => void;
};

const templateContextDefaults: templateContextType = {
  templateColor: '',
  templateSize: '',
  modalProps: undefined,
  modal: undefined,

  setModal: () => {},
  setModalProps: () => {},
  setColor: () => {},
  setSize: () => {}
};

const TemplateContext = createContext<templateContextType>(templateContextDefaults);

interface Props {
  children: React.ReactNode;
}

export function useTemplateContext() {
  return useContext(TemplateContext);
}

export function TemplateProvider({ children }: Props) {
  const template = useTemplate();

  return (
    <>
      <TemplateContext.Provider value={template}>{children}</TemplateContext.Provider>
    </>
  );
}
export default TemplateProvider;

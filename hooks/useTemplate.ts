import { useEffect, useState } from 'react';

export const useTemplate = () => {
  const [templateColor, setTemplateColor] = useState<string>('#7D4AEA');
  const [templateSize, setTemplateSize] = useState<string>('m');
  const [modalProps, setModalProps] = useState<{ [x: string]: any } | undefined>(undefined);
  const [modal, setModal] = useState<any>();

  const setSize = (size: string) => {
    setTemplateSize(size);
  };

  const setColor = (color: string) => {
    setTemplateColor(color);
  };

  return { templateColor, templateSize, modalProps, modal, setColor, setSize, setModalProps, setModal };
};

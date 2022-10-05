import React from 'react';
import * as S from './styles';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useTemplateContext } from '../../../contexts/SelectedTemplate';

interface Props {
  modalNo: string;
  basis?: number;
  [x: string]: any;
}

const TemplateItem = (props: Props) => {
  const router = useRouter();
  const { setModalProps, setModal } = useTemplateContext();
  const { modalNo, basis, ...modalProps } = props;

  const Modal = dynamic(() => import(`../../Modals/${modalNo}`));

  const selectModalHandler = (modalNo: string) => {
    setModalProps({ ...modalProps });
    setModal(<Modal {...modalProps} />);
    router.push('/appearance');
  };

  return (
    <S.TemplateItem basis={basis}>
      {modalNo && (
        <S.Curtain>
          <S.SelectButton onClick={() => selectModalHandler(modalNo)}>Select Template</S.SelectButton>
        </S.Curtain>
      )}
      {modalProps && <Modal {...modalProps} />}
    </S.TemplateItem>
  );
};

export default TemplateItem;

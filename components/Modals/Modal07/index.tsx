import * as S from './styles';
import DefaultModal from '../Container/index';

import Image from 'next/image';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  [x: string]: any;
}

const Modal07 = (props: Props) => {
  const {
    title,
    description,
    notification,
    image = 'https://images.unsplash.com/photo-1515339760107-1952b7a08454?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    ...defaultProps
  } = props;

  return (
    <DefaultModal {...defaultProps} gradient={!!image}>
      <S.ModalContainer>
        <div className="image">
          {image && (
            <>
              <div className="gradient"></div>
              <Image layout="responsive" width="250px" height="150px" objectFit="cover" alt="test" src={image} />
            </>
          )}
        </div>
        <S.FormContainer className="formContainer">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <div className="actions">
            <button className="darker">Continue</button>
            <button className="lighter">Not Now</button>
          </div>
        </S.FormContainer>
      </S.ModalContainer>
    </DefaultModal>
  );
};

export default Modal07;

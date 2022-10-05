import * as S from './styles';
import DefaultModal from '../Container/index';

import Image from 'next/image';

interface Props {
  title?: string;
  description?: string;
  image?: string;
  notification?: string;
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
        <S.FormContainer className="formContainer">
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <input type="text" placeholder="Enter full name" />
          <input type="text" placeholder="Enter your email" />
          <div className="actions">
            <button className="darker">Continue</button>
          </div>
          <div className="notification">{notification}</div>
        </S.FormContainer>
        <div className="image">
          {image && (
            <>
              <div className="gradient"></div>
              <Image layout="fill" objectFit="cover" alt="test" src={image} />
            </>
          )}
        </div>
      </S.ModalContainer>
    </DefaultModal>
  );
};

export default Modal07;

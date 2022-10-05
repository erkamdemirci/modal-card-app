import * as S from './styles';
import DefaultModal from '../Container/index';
import { SecurityIcon } from '../../Icons';

interface Props {
  title?: string;
  description?: string;
  [x: string]: any;
}

const Modal01 = (props: Props) => {
  const { title, description, ...defaultProps } = props;

  return (
    <DefaultModal {...defaultProps}>
      <S.ModalContainer className="formContainer">
        <div className="icon">
          <SecurityIcon />
        </div>
        <div className="title">{title}</div>
        <p className="description">{description}</p>
        <input type="text" placeholder="Code" />
        <div className="actions">
          <button className="lighter">Cancel</button>
          <button className="darker">Continue</button>
        </div>
      </S.ModalContainer>
    </DefaultModal>
  );
};

export default Modal01;

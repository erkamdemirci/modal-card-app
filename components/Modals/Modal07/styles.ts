import tw from 'twin.macro';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  ${tw`flex flex-col w-full`}

  .image {
    ${tw`overflow-hidden`}
  }
`;

export const FormContainer = styled.div`
  ${tw`flex flex-col text-center`}

  .actions {
    ${tw`w-full flex flex-col gap-2 justify-center`}
  }
`;

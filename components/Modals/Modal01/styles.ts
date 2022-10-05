import tw from 'twin.macro';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  width: fit-content;
  ${tw`flex flex-col items-center self-center justify-center mx-auto text-center p-8`}

  .icon {
    ${tw`h-auto p-12`}
  }

  .actions {
    ${tw`flex flex-row gap-4 justify-center`}
  }
`;

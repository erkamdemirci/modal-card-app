import tw from 'twin.macro';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  ${tw`flex flex-row m-0 p-0 w-full items-center`}

  .image {
    ${tw`overflow-hidden h-full min-w-[350px] relative`}
  }

  .actions {
    ${tw`w-full gap-4 justify-center`}

    button {
      ${tw`w-full block`}
    }
  }
`;

export const FormContainer = styled.div`
  ${tw`flex flex-grow flex-col justify-center items-center min-w-[50%]`}

  input[type="text"] {
    ${tw`min-w-[50%]`}
  }
`;

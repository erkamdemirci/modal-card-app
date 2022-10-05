import tw from 'twin.macro';
import styled, { css } from 'styled-components';

type ModalProps = {
  basis?: number;
};

export const TemplateItem = styled.div(({ basis }: ModalProps) => [
  css`
    height: fit-content;
    flex-basis: calc(95% / ${basis ? 4 / basis : 4});
    ${tw`relative w-full self-center p-2`}

    .modal {
      ${tw`w-full`}
    }
  `
]);

export const Curtain = styled.div`
  ${tw`transition ease-in-out delay-150 z-[100] rounded-xl cursor-default absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-[#7D4AEA] bg-opacity-60 opacity-0 hover:opacity-100`}
`;

export const SelectButton = styled.div`
  ${tw`cursor-default py-3 px-6 text-[#7D4AEA] bg-white cursor-pointer rounded-md shadow-xl font-bold`}
`;

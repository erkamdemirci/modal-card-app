import tw from 'twin.macro';
import styled, { css } from 'styled-components';

type AppearanceProps = {
  color?: string;
  isSelected?: any;
};

export const AppearanceContainer = styled.div`
  ${tw`flex flex-row gap-12 items-center w-full justify-center w-full`}
`;

export const AppearanceSettings = styled.div`
  ${tw`flex flex-col gap-4`}

  .section {
    h2 {
      ${tw`font-bold mb-2 block`}
    }
  }
`;

export const SizeSelector = styled.div`
  width: fit-content;
  ${tw`flex flex-row bg-[#F5F5F5] gap-1 p-2 rounded-lg border`}

  button {
    ${tw`px-4 py-2 rounded-md text-[#777777] font-bold`}

    &:hover {
      ${tw`text-black`}
    }
  }

  button.selected {
    ${tw`bg-white text-black`}
  }
`;

export const ColorSelector = styled.button`
  ${tw`flex flex-row bg-[#F5F5F5] gap-2 p-2 rounded-lg`}

  div {
    ${tw`px-4 py-2 rounded-md text-[#777777] font-bold`}

    &:hover {
      ${tw`text-black`}
    }
  }
`;

export const ColorItem = styled.button(({ color, isSelected }: AppearanceProps) => [
  css`
    background: ${color};
    ${tw`w-12 h-12 rounded-lg`}
  `
]);

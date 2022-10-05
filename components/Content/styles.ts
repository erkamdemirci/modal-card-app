import tw from 'twin.macro';
import styled, { css } from 'styled-components';

export const ContentContainer = styled.div`
  ${tw`flex flex-row gap-12 items-center w-full justify-center w-full`}
`;

export const ContentSettings = styled.div`
  ${tw`flex flex-col gap-4`}

  .section {
    h2 {
      ${tw`font-bold mb-2 block`}
    }
  }
`;

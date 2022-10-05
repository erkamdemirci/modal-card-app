import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased`}
  }

  .step{
    ${tw`flex flex-row items-center gap-2 mb-6`}
    .stepNo{
      ${tw`flex text-xl bg-[#EAEAEA] rounded-full w-12 h-12 justify-center items-center font-bold`}
    }
    .title{
      ${tw`text-xl`}
    }
  }

  .btn-default{
    ${tw`py-3 px-6 border-2 border-[#7D4AEA] text-[#7D4AEA] rounded-md font-semibold text-lg`}

    :hover{
      ${tw`border-white text-white bg-[#7D4AEA]`}
    }
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;

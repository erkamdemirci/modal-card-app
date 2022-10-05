import tw from 'twin.macro';
import styled, { css } from 'styled-components';

type ModalProps = {
  topBorder?: boolean;
  gradient?: boolean;
  mainColor?: string;
  size?: string;
};

const lSize = css`
  .formContainer {
    ${tw`p-12 px-16 gap-6`}
  }
  .title {
    ${tw`text-4xl`}
  }
  .description {
    ${tw`text-xl`}
  }
  .notification {
    ${tw`text-base`};
  }
  input[type='text'] {
    ${tw`text-xl placeholder:text-lg`}
  }
  .icon {
    ${tw`w-[35%] p-5`}
  }
  .actions > button {
    ${tw`text-lg`}
  }
`;
const mSize = css`
  .formContainer {
    ${tw`p-8 gap-4`}
  }
  .title {
    ${tw`text-3xl`}
  }
  .description {
    ${tw`text-lg`}
  }
  .notification {
    ${tw`text-sm`};
  }
  input[type='text'] {
    ${tw`text-lg placeholder:text-base`}
  }
  .icon {
    ${tw`w-[25%] p-4`}
  }
  .actions > button {
    ${tw`text-base`}
  }
`;
const sSize = css`
  .formContainer {
    ${tw`p-5 gap-2`}
  }
  .title {
    ${tw`text-2xl`}
  }
  .description {
    ${tw`text-base`}
  }
  .notification {
    ${tw`text-xs`};
  }
  input[type='text'] {
    ${tw`text-base placeholder:text-sm`}
  }
  .icon {
    ${tw`w-[20%] p-2`}
  }
  .actions > button {
    ${tw`text-sm`}
  }
`;

export const DefaultModal = styled.div(({ topBorder, gradient, mainColor, size }: ModalProps) => [
  css`
    border-color: ${mainColor};
    width: fit-content;
    ${tw`flex relative rounded-xl shadow-lg overflow-hidden transition-all duration-300 bg-white`};

    .title {
      ${tw`font-bold`};
    }

    .description {
      ${tw`font-light`};
    }

    .notification {
      ${tw`text-[#777777]`};
    }

    input[type='text'] {
      outline-color: ${mainColor};
      ${tw`px-4 py-2 border border-gray-300 bg-transparent rounded-md w-full placeholder:(text-black font-semibold)`};
    }

    .icon {
      background: ${mainColor};
      ${tw`rounded-full transition-all duration-300`};
      svg {
        color: white;
      }
    }

    .actions {
      ${tw`min-w-[100%] z-10 mt-1`};
    }

    .actions > button {
      ${tw`py-2 px-8 rounded-md`};
    }

    button.lighter {
      ${tw`border border-gray-300`};

      &:hover {
        ${tw`bg-black bg-opacity-5`};
      }
    }

    button.darker {
      background: ${mainColor};
      ${tw`border text-white transition-all duration-300`};

      &:hover {
        ${tw`bg-opacity-90`};
      }
    }

    svg.close {
      ${tw`text-black opacity-40 w-9 h-9`};
    }
  `,
  gradient &&
    css`
      svg.close {
        ${tw`text-white opacity-100`};
      }
    `,
  topBorder && tw`border-t-8`,
  size === 's' ? sSize : size === 'l' ? lSize : mSize
]);

export const CloseButton = styled.button`
  ${tw`absolute right-4 top-4 z-10`};
`;

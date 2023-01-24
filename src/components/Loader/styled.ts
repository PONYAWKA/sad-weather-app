import styled from "styled-components";

export const LoaderBody = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  transform: rotate(45deg);
  transform-origin: 40px 40px;
`;

export const SpinnerInner = styled.div`
  top: 32px;
  left: 32px;
  position: absolute;
  width: 32px;
  height: 32px;
  background: ${({ theme }) => theme.colors.red};
  animation: lds-heart 1.2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
  &:after,
  &:before {
    content: " ";
    position: absolute;
    display: block;
    width: 32px;
    height: 32px;
    background: ${({ theme }) => theme.colors.red};
  }
  &:before {
    left: -24px;
    border-radius: 50% 0 0 50%;
  }
  &:after {
    top: -24px;
    border-radius: 50% 50% 0 0;
  }
  @keyframes lds-heart {
    0% {
      transform: scale(0.95);
    }
    5% {
      transform: scale(1.1);
    }
    39% {
      transform: scale(0.85);
    }
    45% {
      transform: scale(1);
    }
    60% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

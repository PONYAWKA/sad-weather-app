import styled from "styled-components";

export const EventListBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spaces.mmmm}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin-bottom: ${({ theme }) => theme.spaces.mmmm}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.fold}px) {
    margin-bottom: ${({ theme }) => theme.spaces.x}px;
  }
`;
export const LoadEventsButton = styled.button`
  margin: ${({ theme }) => theme.spaces.ss}px 0;
  border-radius: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.x}px;
`;

export const EventElementBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.m}px;
  padding: ${({ theme }) => theme.spaces.m}px 0;
  @media (min-height: ${({ theme }) => theme.breakPoints.fold}px) {
    font-size: ${({ theme }) => theme.fonts.s}px;
  }
`;
export const EventElementText = styled.div`
  text-align: center;
  width: 100%;
  padding: 0 ${({ theme }) => theme.spaces.s}px;
  word-break: break-all;
`;
export const EventListContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: ${({ theme }) => theme.spaces.xm}px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spaces.s}px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: ${({ theme }) => theme.spaces.s}px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.spaces.s}px;
    box-shadow: inset 0 0 ${({ theme }) => theme.spaces.s}px
      ${({ theme }) => theme.colors.white};
  }
`;
export const EventElementTime = styled.div`
  border-radius: ${({ theme }) => theme.spaces.m}px;
  ${({ theme }) => theme.colors.background};
  padding: ${({ theme }) => theme.spaces.s}px;
  text-align: center;
`;

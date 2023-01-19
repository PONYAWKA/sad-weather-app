import styled from "styled-components";

export const ClockBody = styled.div`
  height: 40%;
  align-items: center;
  display: flex;
`;
export const ClockContainer = styled.div`
  margin: ${({ theme }) => theme.spaces.mm}px 0 0
    ${({ theme }) => theme.spaces.x}px;
`;

export const Timer = styled.div`
  font-size: 68px;
`;

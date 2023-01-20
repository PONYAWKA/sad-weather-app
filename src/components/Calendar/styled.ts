import styled from "styled-components";

export const CalendarBodyContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: row;
  overflow: hidden;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    justify-content: start;
  }
`;
export const CalendarDisplay = styled.div`
  flex-direction: column;
  width: 40%;
  @media (max-width: 767px) {
    width: 100% !important;
  }
`;
export const CityDisplay = styled.div``;

export const CalendarContainer = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

export const LogButton = styled.button`
  @media (max-width: 767px) {
    margin-top: ${({ theme }) => theme.spaces.m}px;
  }
`;

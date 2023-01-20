import styled from "styled-components";

export const CityChangerBody = styled.div`
  @media (max-width: 767px) {
    margin: ${({ theme }) => theme.spaces.mm}px 0;
  }
  @media (max-height: 741px) {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const CityContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: ${({ theme }) => theme.spaces.xxl}px;
  @media (max-width: 1024px) {
    margin-top: ${({ theme }) => theme.spaces.ss}px;
    margin-right: -${({ theme }) => theme.spaces.mm}px;
    text-align: center;
  }
`;

export const CityTitle = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  align-content: center;
  font-size: ${({ theme }) => theme.fonts.xx}px;
  color: ${({ theme }) => theme.colors.white};
  max-width: ${({ theme }) => theme.spaces.xxl}px;
  @media (max-width: 767px) {
    text-align: center;
    margin-left: -${({ theme }) => theme.spaces.mm}px;
  }
  @media (max-width: 1024px) {
    margin-right: -${({ theme }) => theme.spaces.mm}px;
  }
`;

export const ObjectName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.m}px;
  text-align: center;
  @media (max-width: 767px) {
    margin-left: -${({ theme }) => theme.spaces.mm}px;
  }
`;

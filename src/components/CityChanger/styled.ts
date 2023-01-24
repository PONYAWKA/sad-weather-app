import styled from "styled-components";

export const CityChangerBody = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin: ${({ theme }) => theme.spaces.mm}px 0;
  }
  @media (max-height: ${({ theme }) => theme.breakPoints.laptopH}px) {
    margin: 0;
    margin-bottom: ${({ theme }) => theme.spaces.mm}px;
  }
`;

export const CityContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    margin-top: ${({ theme }) => theme.spaces.ss}px;
    margin-right: -${({ theme }) => theme.spaces.mm}px;
    text-align: center;
  }
`;

export const CityTitle = styled.textarea`
  background-color: transparent;
  outline: none;
  border: 0;
  margin: 0;
  width: 100%;
  overflow: hidden;
  padding: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.xx}px;
  color: ${({ theme }) => theme.colors.white};
  word-break: break-all;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    text-align: center;
    margin-left: -${({ theme }) => theme.spaces.mm}px;
    font-size: ${({ theme }) => theme.fonts.m}px;
  }
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    margin-right: -${({ theme }) => theme.spaces.mm}px;
  }
`;

export const EditIcon = styled.img`
  width: ${({ theme }) => theme.spaces.m}px;
  height: ${({ theme }) => theme.spaces.m}px;
  right: 18%;
  position: absolute;
`;

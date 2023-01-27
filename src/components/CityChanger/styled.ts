import styled from "styled-components";

export const CityChangerBody = styled.div`
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    margin-top: ${({ theme }) => theme.spaces.m}px;
  }
  @media (max-height: ${({ theme }) => theme.breakPoints.laptopH}px) {
    margin-top: ${({ theme }) => theme.spaces.m}px;
  }
`;

export const CityContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.m}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
    margin-top: ${({ theme }) => theme.spaces.ss}px;
    text-align: center;
  }
`;

export const CityTitle = styled.textarea`
  background-color: transparent;
  outline: none;
  border: 0;
  text-decoration: underline;
  resize: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  text-align: center;
  font-size: ${({ theme }) => theme.fonts.xx}px;
  color: ${({ theme }) => theme.colors.white};
  word-break: break-all;
  max-width: ${({ theme }) => theme.spaces.xxl}px;
  @media (max-width: ${({ theme }) => theme.breakPoints.tablet}px) {
    text-align: center;
    margin-left: -${({ theme }) => theme.spaces.mm}px;
    max-height: ${({ theme }) => theme.spaces.x}px;
  }
`;

export const EditIcon = styled.img`
  width: ${({ theme }) => theme.spaces.m}px;
  height: ${({ theme }) => theme.spaces.m}px;
  right: 18%;
  position: absolute;
`;

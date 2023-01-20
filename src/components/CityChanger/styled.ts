import styled from "styled-components";

export const CityChangerBody = styled.div``;

export const CityContainer = styled.div`
  margin-top: ${({ theme }) => theme.spaces.m}px;
  max-width: 400px;
`;

export const CityTitle = styled.input`
  background-color: transparent;
  outline: none;
  border: 0;
  margin: 0;
  padding: 0;
  font-size: ${({ theme }) => theme.fonts.xx}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ObjectName = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.m}px;
  text-align: center;
`;

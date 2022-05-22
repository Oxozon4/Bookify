import styled from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';

export const SearchBarContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-self: stretch;
  flex-wrap: nowrap;
  align-items: center;
  min-height: 50px;
  width: 80%;
  padding: 0 15px;
  margin-bottom: 30px;
  letter-spacing: 0.03em;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  @media ${({ theme }) => theme.breakpoints.md} {
    border-radius: 100px;
    margin-top: 30px;
    padding: 0 20px;
  }
  @media ${({ theme }) => theme.breakpoints.lg} {
    height: 70px;
  }
`;

export const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
    color: ${({ theme }) => theme.colors.white};
  }
  &:hover {
    opacity: 0.9;
    cursor: pointer;
  }
`;

export const DarkIconStyleWrapper = styled(IconStyleWrapper)`
  opacity: 0.2;
  &:hover {
    opacity: 0.2;
    cursor: default;
  }
`;

export const SearchBarItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 100px;
  padding: 8px;
  font-size: ${({ theme }) => theme.fontSize.s};
  &:hover {
    background-color: #ffffff1a;
    cursor: pointer;
  }
  @media ${({ theme }) => theme.breakpoints.md} {
    padding: 8px 20px 8px;
  }
`;

export const SearchBarItemValue = styled.div`
  font-weight: 700;
  padding-left: 15px;
  font-size: ${({ theme }) => theme.fontSize.s};
  margin-top: 4px;
  @media ${({ theme }) => theme.breakpoints.md} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;

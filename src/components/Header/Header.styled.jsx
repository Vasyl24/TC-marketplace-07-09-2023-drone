import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};
  box-shadow: ${props => props.theme.shadow.normal};
  padding: 16px 0;

  @media ${props => props.theme.media.tablet} {
    padding: 24px 0;
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
    padding: 16px 64px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  min-width: 280px;
  padding: 0 20px;
`;

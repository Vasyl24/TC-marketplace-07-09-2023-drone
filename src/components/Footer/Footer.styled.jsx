import styled from 'styled-components';

export const StyledFooter = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.background};

  @media ${props => props.theme.media.tablet} {
  }

  @media ${props => props.theme.media.desktop} {
    min-width: 1280px;
    max-width: 1440px;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 60px 80px;
  width: 100%;
`;
// 132
import styled from 'styled-components';

export const StyledInput = styled.input`
  padding: 14px 12px;
  border-radius: 4px;
  border: 0.8px solid #f2f2f2;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};

  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.greyLight};
  outline: transparent;
`;

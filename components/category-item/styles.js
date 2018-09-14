import styled from 'styled-components';
import CrystallizeImage from '@crystallize/react-image';

import { colors, responsive } from 'ui';

export const imageWidth = {
  lg: '300px',
  xs: '150px'
};

export const Outer = styled.a`
  margin: 10px;
  display: flex;
  justify-content: center;
`;

export const Inner = styled.span`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;

export const Figure = styled.figure`
  margin-bottom: 10px;
`;

export const Img = styled(CrystallizeImage)`
  display: block;
  width: ${imageWidth.lg};
  object-fit: contain;
  margin: 0 auto;

  ${responsive.xs} {
    height: ${imageWidth.xs};
  }
`;

export const Footer = styled.footer`
  flex: 1 1 auto;
  padding: 10px 0;
  margin: 0 50px;
  border-top: 1px solid rgba(222, 222, 222, 0.4);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;

  > div {
    flex: 1;

    &:first-child {
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &:last-child {
      text-align: center;
    }
  }

  ${responsive.xs} {
    margin: 0;
  }
`;

export const Price = styled.span`
  color: ${colors.price};
  margin-left: 10px;
`;

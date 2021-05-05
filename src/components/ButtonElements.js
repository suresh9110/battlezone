import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  font-size: {({fontbig}) => (fontbig ? "20px" : 16px)};
  color: ${({dark}) => (dark ? '#000' : '#fff')};
  padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
  border-radius: 20px;
  background: ${({primary}) => (primary ? '#01BF71' : '#fff')};
  white-space: nowrap;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#fff' : '#010606')};
  }
`
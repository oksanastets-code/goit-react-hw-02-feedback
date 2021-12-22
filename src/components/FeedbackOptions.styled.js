import styled from '@emotion/styled';

export const Button = styled.button`
  margin-right: 10px;
  margin-top: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100px;
  border-radius: 4px;
  border: none;
  background-color: #0bbbbb;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #000000;
    //   scale: 1.1;
  }
`;

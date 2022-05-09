import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: sans-serif;
  text-align: center;
  &::selection, &::-moz-selection {
    background: pink;
  }
`;

export const Pre = styled.pre`
  text-align: left;
  overflow: scroll;
  font-family: Fira Code, monospace;
  & .token-line {
    line-height: 1.3em;
    height: 1.3em;
  }
  margin: 0;
  &::selection, &::-moz-selection {
    background: pink;
  }
  
`;

export const Line = styled.div`
  display: table-row;
  &::selection, &::-moz-selection {
    background: pink;
  }
  & span::selection, & span::-moz-selection {
    background: pink;
  }
`;

export const LineNo = styled.span`
  display: table-cell;
  text-align: right;
  padding-right: 1em;
  user-select: none;
  opacity: 0.5;
`;

export const LineContent = styled.span`
  display: table-cell;
  & span::selection, & span::-moz-selection {
    background: pink;
  }
`;

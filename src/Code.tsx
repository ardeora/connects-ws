import React, { FC, useState, useEffect } from "react";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import darkTheme from './dark'
import { css, cx } from "@emotion/css";
import { ClipboardIcon } from '@heroicons/react/outline';

export interface CodeProps {
  code: string;
  file: string;
  language: Language;
  copyText?: string;
}

const useTimeoutFlag = (timeout: number = 1000, defaultFlag: boolean = false): [boolean, () => void] => {
  const [flag, setFlag] = useState(defaultFlag);

  useEffect(() => {
    if (flag !== defaultFlag) {
      const flagTimeout = setTimeout(() => {
        setFlag(flag => !flag);
      }, timeout);
    }
  }, [flag]);

  return [flag, () => setFlag(flag => !flag)];
}

export const Code:FC<CodeProps> = ({ code, file, language, copyText = code }) => {

  const styles = getStyles();
  const [copied, activateCopy] = useTimeoutFlag(1500);

  const copyToClipboard = () => {
    if(!copied) {
      navigator.clipboard.writeText(copyText);
      activateCopy();
    }
  }

  return (
    <div className={styles.container} >
      <div className={styles.header}>
        <div className={styles.fileName}>{file}</div>
        <div style={{flex: 1, backgroundColor: 'rgb(51 65 85/.5)', borderRadius: '4px 0px 0px 0px'}}></div>
        <button onClick={copyToClipboard} className={cx(styles.clipboardContainer, copied ? styles.copied : null)}>
          <div className={cx(copied ? null : styles.displayNone, styles.copiedIndicator)} > Copied </div>
          <ClipboardIcon  />
        </button>
      </div>
      <div style={{padding: '20px'}}>
      <Highlight {...defaultProps} theme={darkTheme} code={code} language={language}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>       
            {tokens.map((line, i) => (
              <Line key={i} {...getLineProps({ line, key: i })}>
                <LineNo>{i + 1}</LineNo>
                <LineContent>
                  {line.map((token, key) => {
                    return (
                    <span key={key} {...getTokenProps({ token, key })} />
                  )})}
                </LineContent>
              </Line>
            ))}
          </Pre>
        )}
      </Highlight>
      </div>
    </div>
  )
};

const getStyles = () => {
  return {
    container: css`
      width: max-content;
      min-width: 400px;
      border-radius: 8px;
      perspective: 1px;
      background-color: #1e293b;
    `,
    header: css`
      height: 34px;
      display: flex;
      margin-top: 8px;
    `,
    fileName: css`
      font-size: .75rem;
      user-select: none;
      color: #89DDFF;
      padding: 0px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid #89DDFF;
    `,
    clipboardContainer: css`
      padding: 0px 16px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      margin: 0;
      border-radius: 0px 8px 0px 0px;
      & svg {
        width: 20px;
        height: 20px;
        color: #64748b;
        transition: transform .2s ease-in-out;
      }
      &:hover svg {
        color: #94a3b8;
      }
      background-color: rgb(51 65 85/.5);
    `,
    copied: css`
      & svg {
        color: #67e8f9;
      }
      &:hover svg {
        color: #67e8f9;
      }
    `,
    copiedIndicator: css`
      transition: transform .2s ease-in-out;
      position: absolute;
      top: 0px;
      right: 0px;
      transform: translate(6px, -102%) scale(1);
      background-color: #06b6d4;
      color: #fff;
      font-size: 14px;
      padding: 4px 10px;
      border-radius: 4px;
      &:after {
        content: '';
        position: absolute;
        top: 96%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 0px;
        height: 0px;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #06b6d4;
      }
    `,
    displayNone: css`
      display: none;
      transform: scale(0);
      transition: transform .2s ease-in-out;
    `
  }
}



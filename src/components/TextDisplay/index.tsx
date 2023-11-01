import React, { CSSProperties } from 'react';

interface PropsText {
  style?: CSSProperties;
  className?: string;
  dateFormat?: string;
  text?: string | number;
  defaultText?: string;
}

const DEFAULT_TEXT = 'N/A';

const TextDisplay = ({
  className,
  text,
  defaultText = DEFAULT_TEXT,
}: PropsText) => {
  if (typeof text === 'undefined' || text === null || text === '') {
    return <span className={className}>{defaultText}</span>;
  }
  return <span className={className}>{text}</span>;
};

export default TextDisplay;

import React, { CSSProperties } from 'react';
import moment from 'moment';
import TextDisplay from '../TextDisplay';

interface PropsDate {
  style?: CSSProperties;
  className?: string;
  dateFormat?: string;
  date?: string | Date | number;
}

const DEFAULT_DATE_FORMAT = 'DD/MM/YYYY';

const DateDisplay = ({
  style,
  className,
  dateFormat = DEFAULT_DATE_FORMAT,
  date,
}: PropsDate) => {
  if (!date) {
    return <TextDisplay />;
  }
  if (!moment(date).isValid()) {
    return <TextDisplay text={date?.toString()} />;
  }
  return (
    <span style={style} className={className}>
      {moment(date).format(dateFormat)}
    </span>
  );
};

export default DateDisplay;

import React from 'react';
import { Row } from '../Column/Row';

const styles = {
  spacer: {
    height: '20px',
  },
};

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export function Spacer({ className, style }: Props) {
  return (
    <Row>
      <div
        className={className}
        dangerouslySetInnerHTML={{ __html: '&nbsp;' }}
        style={{ ...styles.spacer, ...style }}
      />
    </Row>
  );
}

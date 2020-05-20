import React from 'react';
import { Row } from '../Column/Row';

const styles: Record<string, React.CSSProperties> = {
  text: {
    fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
    fontSize: '13px',
    lineHeight: '1',
    color: '#000000',
    textAlign: 'center',
  },
};

interface Props {
  align?: 'left' | 'center' | 'right';
  children?: React.ReactNode;
}

export function Text({ children, align = 'left' }: Props) {
  return (
    <Row
      align={align}
      style={{
        verticalAlign: 'middle',
      }}
    >
      <div style={{ ...styles.text, textAlign: align }}>{children}</div>
    </Row>
  );
}

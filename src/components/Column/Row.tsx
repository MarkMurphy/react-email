import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  cell: {
    fontSize: '0px',
    padding: '10px 25px',
    wordBreak: 'break-word',
  },
};

interface Props {
  children?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  style?: React.CSSProperties;
}

export function Row({ align = 'center', children, style }: Props) {
  return (
    <tr>
      <td align={align} style={{ ...styles.cell, ...style }}>
        {children}
      </td>
    </tr>
  );
}

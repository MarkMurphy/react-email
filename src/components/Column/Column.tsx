import React from 'react';

const styles: Record<string, React.CSSProperties> = {
  column: {
    fontSize: '0px',
    textAlign: 'left',
    direction: 'ltr',
    display: 'inline-block',
    verticalAlign: 'top',
    width: '100%',
  },
  table: {
    verticalAlign: 'top',
    width: '100%',
  },
};

interface Props {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function Column({ children, className, style }: Props) {
  return (
    <div className={className} style={{ ...styles.column, ...style }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={styles.table}
      >
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

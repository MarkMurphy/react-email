import React from 'react';

const styles = {
  body: {
    width: '100%',
    height: '100%',
  },
  container: {
    margin: '0 auto',
    width: '600px',
  },
};

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Body({ children, style }: Props) {
  return (
    <body style={{ ...styles.body, ...style }}>
      <div>{children}</div>
    </body>
  );
}

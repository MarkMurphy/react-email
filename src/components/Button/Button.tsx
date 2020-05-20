import React from 'react';
import { Row } from '../Column/Row';

const styles: Record<string, React.CSSProperties> = {
  button: {
    display: 'inline-block',
    background: '#414141',
    color: '#ffffff',
    fontFamily: 'Ubuntu, Helvetica, Arial, sans-serif',
    fontSize: '13px',
    fontWeight: 'normal',
    lineHeight: '120%',
    margin: '0',
    textDecoration: 'none',
    textTransform: 'none',
    padding: '10px 25px',
    borderRadius: '3px',
  },
};

interface Props {
  children?: React.ReactNode;
  href?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
}

export function Button({ children, href, target = '_blank' }: Props) {
  return (
    <Row align="center">
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={{
          borderCollapse: 'separate',
          lineHeight: '100%',
        }}
      >
        <tbody>
          <tr>
            <td
              align="center"
              role="presentation"
              valign="middle"
              style={{
                border: 'none',
                borderRadius: '3px',
                cursor: 'auto',
                background: '#414141',
              }}
            >
              <a href={href} target={target} style={styles.button}>
                {children}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </Row>
  );
}

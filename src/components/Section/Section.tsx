import React from 'react';

const styles = {
  section: {
    margin: '0 auto',
    maxWidth: '600px',
  },
  table: {
    width: '100%',
  },
};

interface Props {
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function Section({ children, style }: Props) {
  const itemClassName = 'col-' + React.Children.count(children);
  return (
    <div style={{ ...styles.section, ...style }}>
      <table
        cellPadding="0"
        cellSpacing="0"
        role="presentation"
        style={styles.table}
      >
        <tbody>
          <tr>
            <td
              style={{
                direction: 'ltr',
                fontSize: 0,
                padding: '20px 0',
                textAlign: 'center',
              }}
            >
              {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                  return React.cloneElement(child, {
                    className: [itemClassName, child.props.className]
                      .filter(Boolean)
                      .join(' '),
                  });
                }

                return child;
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

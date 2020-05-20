import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export function Template({ children }: Props) {
  return <html lang="en">{children}</html>;
}

import React from 'react';

interface Props {
  children: string;
}

export function Style({ children }: Props) {
  return (
    <style type="text/css" dangerouslySetInnerHTML={{ __html: children }} />
  );
}

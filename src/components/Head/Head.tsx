import React from 'react';
import { Style } from '../Style';

interface Props {
  children?: React.ReactNode;
}

export function Head({ children }: Props) {
  return (
    <head>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <Style>
        {`
        body {
          width: 100% !important; 
          min-width: 100%;
          margin: 0;
          padding: 0;
          -webkit-text-size-adjust: 100%;
          -ms-text-size-adjust: 100%;
        }
    
        table,
        td {
          border-collapse: collapse;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
    
        img {
          border: 0;
          height: auto;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }

        @media only screen and (min-width: 480px) {
          .col-1 { width: 100% !important; }
          .col-2 { width: 50% !important; }
          .col-3 { width: 33.333% !important; }
          .col-4 { width: 25% !important; }
          .col-5 { width: 20% !important; }
          .col-6 { width: 16.666% !important; }
        }
        `}
      </Style>
      {children}
    </head>
  );
}

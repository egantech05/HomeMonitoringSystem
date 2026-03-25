// Learn more https://docs.expo.dev/router/reference/static-rendering/#root-html

import { ScrollViewStyleReset } from 'expo-router/html';

// This file is web-only and used to configure the root HTML for every
// web page during static rendering.
// The contents of this function only run in Node.js environments and
// do not have access to the DOM or browser APIs.
export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
    <head>
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

  <meta name="theme-color" content="#1b1b1b" />
  <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#1b1b1b" />
  <meta name="theme-color" media="(prefers-color-scheme: light)" content="#1b1b1b" />

  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
  <meta name="mobile-web-app-capable" content="yes" />

  <ScrollViewStyleReset />

  <style>{`
    html, body {
      background: #1b1b1b;
    }
  `}</style>
</head>
      <body>{children}</body>
    </html>
  );
}

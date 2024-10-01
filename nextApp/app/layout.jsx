// app/layout.jsx
import React from 'react';
import Head from 'next/head'; // To manage document head tags (SEO, meta, etc.)

export const metadata = {
  title: 'My App', // The default title for your app
  description: 'A barebones layout for the App Router', // Default meta description
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        {/* This section wraps all content across your app */}


        <main>
          {/* Render all child components */}
          {children}
        </main>

      </body>
    </html>
  );
}

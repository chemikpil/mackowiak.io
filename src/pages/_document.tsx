import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ClientColorModeTag } from 'theme/ColorMode/ClientColorModeTag';

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="preload" href="/raleway.ttf" as="font" />
                    <link rel="shortcut icon" href="/favicon.ico" />
                </Head>
                <body>
                    <ClientColorModeTag />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;

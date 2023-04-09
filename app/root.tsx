import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import {
    DataFunctionArgs,
    LinksFunction,
    V2_MetaFunction,
} from '@remix-run/node';
import { getSeoMeta } from '~/utils/seo';
import { getDomainUrl, getUrl } from '~/utils/misc';

export const meta: V2_MetaFunction = ({ data }) => {
    const url = getUrl(data.requestInfo);
    return [
        { name: 'viewport', content: 'width=device-width,initial-scale=1' },
        ...getSeoMeta({
            title: 'Michal Mackowiak - My place in the internet',
            description:
                'Frontend Engineer / Traveler / Photographer / Cyclist',
            url,
        }),
    ];
};

export const links: LinksFunction = () => [
    {
        rel: 'icon',
        href: '/favicon.ico',
    },
    {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon-16x16.png',
        sizes: '16x16',
    },
    {
        rel: 'icon',
        type: 'image/png',
        href: '/img/favicon-32.png',
        sizes: '32x32',
    },
    {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/apple-touch-icon.png',
    },
];

export async function loader({ request }: DataFunctionArgs) {
    return {
        requestInfo: {
            origin: getDomainUrl(request),
            path: new URL(request.url).pathname,
        },
    };
}

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <title>Michal Mackowiak - My place in the internet</title>
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}

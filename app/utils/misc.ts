export function removeTrailingSlash(s: string) {
    return s.endsWith('/') ? s.slice(0, -1) : s;
}

export function getDomainUrl(request: Request) {
    const host =
        request.headers.get('X-Forwarded-Host') ?? request.headers.get('host');

    if (!host) {
        throw new Error('Could not determine domain url');
    }

    const protocol = host.includes('localhost') ? 'http' : 'https';
    return `${protocol}://${host}`;
}

export function getUrl({ origin, path }: { origin?: string; path?: string }) {
    return removeTrailingSlash(
        `${origin ?? 'https://mackowiak.io'}/${path ?? ''}`
    );
}

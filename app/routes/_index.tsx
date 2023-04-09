import type { V2_MetaFunction } from '@remix-run/react';

export const meta: V2_MetaFunction = () => {
    return [
        {
            name: 'description',
            content: 'Frontend Engineer / Traveler / Photographer / Cyclist',
        },
    ];
};

export default function Index() {
    return <div>Home page</div>;
}

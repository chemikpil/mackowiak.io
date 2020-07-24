import { GraphQLClient } from 'graphql-request';

const fetch = async (query: string) => {
    const client = new GraphQLClient(process.env.API_URL);

    try {
        const data = await client.request(query);

        return data;
    } catch (error) {
        throw new Error(error);
    }
};

export { fetch };

import { createClient, type ClientConfig } from '@sanity/client';
import imageUrlBuilder from "@sanity/image-url";


const config: ClientConfig = {
    projectId: 'iykxmv8z',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21"
}
const client = createClient(config);

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
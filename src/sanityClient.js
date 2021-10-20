import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  projectId: '1bdsfny1',
  dataset: 'production',
  apiVersion: '2021-06-07',
  useCdn: false,
};

export const client = sanityClient(config);

export const urlFor = (source) => imageUrlBuilder(config).image(source);

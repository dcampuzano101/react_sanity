export default {
  name: 'productivityPost',
  title: 'Productivity Post',
  type: 'document',
  fields: [
    {
      name: 'productivityPostTitle',
      title: 'Productivity Post Title',
      type: 'string',
    },
    {
      title: 'Categories',
      name: 'categories',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          // these values will be the only available options
          { value: 'fitness', title: 'Fitness' },
          { value: 'coding', title: 'Coding' },
          { value: 'finance', title: 'Finance' },
          // etc
        ],
        layout: 'radio', // <-- defaults to 'dropdown' with a list of values
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'productivityPostTitle',
        maxLength: 96,
      },
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: { type: 'author' },
    },
    {
      name: 'mainImage',
      title: 'Productivity Post Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'secondaryImage',
      title: 'Secondary Post Secondary Image',
      type: 'image',
      option: {
        hotspot: true,
      },
    },
    {
      name: 'productivityPostContent',
      title: 'Productivity Post Content',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      preview: {
        select: {
          title: 'post.title',
          name: 'post.title',
          media: 'post.image',
        },
        prepare({ title, subtitle, media }) {
          return title, subtitle, media;
        },
      },
    },
  ],
};

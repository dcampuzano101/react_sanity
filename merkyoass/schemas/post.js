export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'postTitle',
            title: 'Post Title',
            type: 'string'

        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'postTitle',
                maxLength: 96
            }
        },
        {
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: { type: 'author' }
        },
        {
            name: 'mainImage',
            title: 'Post Main Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'secondaryImage',
            title: 'Post Secondary Image',
            type: 'image',
            option: {
                hotspot: true
            }
        },
        {
            name: 'postContent',
            title: "Post Content",
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                    styles: [{ title: 'Normal', value: 'normal' }],
                    lists: []
                }
            ],
            preview: {
                select: {
                    title: 'post.title',
                    name: 'post.title',
                    media: 'post.image'
                },
                prepare({
                    title,
                    subtitle,
                    media
                }
                ) {
                    return (
                        title,
                        subtitle,
                        media
                    )
                }
            }
        },
        
    ]
}
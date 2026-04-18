import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'}
    }),
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 4,
      description: 'Short summary of the blog post (shown on listing pages)',
      validation: Rule => Rule.required().max(200)
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      description: 'Toggle to make this post featured on the homepage',
      initialValue: false
    }),
    defineField({
      name: 'featuredPriority',
      title: 'Featured Priority',
      type: 'number',
      description: 'Higher number = higher priority (only for featured posts)',
      hidden: ({document}) => !document?.featured,
      initialValue: 0
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      featured: 'featured'
    },
    prepare(selection) {
      const {author, featured} = selection
      return {
        ...selection,
        subtitle: `${author ? `by ${author}` : 'No author'}${featured ? ' • ⭐ FEATURED' : ''}`
      }
    }
  }
})

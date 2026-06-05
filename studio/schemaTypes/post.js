import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Artigo do Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título do Artigo',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL amigável)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'category',
      title: 'Categoria (Área de Atuação)',
      type: 'string',
      options: {
        list: [
          {title: 'Direito Administrativo', value: 'Direito Administrativo'},
          {title: 'Direito do Consumidor', value: 'Direito do Consumidor'},
          {title: 'Direito Constitucional', value: 'Direito Constitucional'},
          {title: 'Consultoria Jurídica', value: 'Consultoria Jurídica'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagem de Capa',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'body',
      title: 'Corpo do Texto',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
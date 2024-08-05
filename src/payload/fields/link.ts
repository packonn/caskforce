import type { Field } from 'payload'

export const link = (): Field => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Lien interne',
                value: 'reference',
              },
              {
                label: 'Url personnalisée',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            defaultValue: false,
            label: 'Ouvrir dans un autre onglet',
          },
        ],
      },
      {
        type: 'row',
        fields: [
          {
            name: 'reference',
            type: 'relationship',
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'reference',
              width: '50%',
            },
            label: 'Lien interne',
            maxDepth: 1,
            relationTo: ['posts'],
            required: true,
          },
          {
            name: 'url',
            type: 'text',
            admin: {
              condition: (_, siblingData) => siblingData?.type === 'custom',
              width: '50%',
            },
            label: 'Url personnalisée',
            required: true,
          },
          {
            type: 'row',
            fields: [
              {
                name: 'label_fr',
                type: 'text',
                admin: {
                  width: '50%',
                },
                label: 'Nom du lien en Français',
                required: true,
              },
              {
                name: 'label_en',
                type: 'text',
                admin: {
                  width: '50%',
                },
                label: 'Nom du lien en anglais',
                required: true,
              },
            ],
          },
        ],
      },
    ],
  }

  return linkResult
}

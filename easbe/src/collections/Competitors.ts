import { CollectionConfig } from 'payload/types'

const Competitors: CollectionConfig = {
  slug: 'competitors',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: () => true,
    delete: () => true
  },
  fields: [
    {
        name: 'peserta',
        type: 'text',
        required: true,
        unique: true
    },
    {
        name: 'email',
        type: 'email',
        required: true,
        unique: true
    },
    {
        name: 'password',
        type: 'text',
        required: true,
    },
    {
        name: 'asalsklh',
        type: 'text',
        required: true
    },
    {
        name: 'statusdftr',
        type: 'select',
        hasMany: false,
        options: [
            {
                label: 'waiting',
                value: 'waiting'
            },
            {
                label: 'accepted',
                value: 'accepted'
            },
            {
                label: 'rejected',
                value: 'rejected'
            }
        ],
        defaultValue: 'waiting'
    }
  ],
}

export default Competitors

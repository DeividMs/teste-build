// storage-adapter-import-placeholder
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import { pt } from '@payloadcms/translations/languages/pt'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    components: {
      graphics: {
        Icon: '/components/admin/admin-icon',
        Logo: '/components/admin/admin-logo',
      },
    },
    meta: {
      title: 'Dashboard',
      titleSuffix: '- OAB/SC',
      description: 'Dashboard Administrativo da OAB/SC.',
      defaultOGImageType: 'static',
      openGraph: {
        description: 'Dashboard Administrativo da OAB/SC.',
        title: 'Painel de Administração',
        siteName: 'Dashboard OAB/SC',
        locale: 'pt_BR',
        images: [
          {
            url: '/public/logo.svg',
            width: 1200,
            height: 630,
            alt: 'Logo OAB/SC',
          },
        ],
      },
      icons: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          url: '/favicon.ico',
        },
      ],
      alternates: {
        canonical: 'https://www.oab-sc.org.br',
      },
    },
    avatar: 'gravatar',
    dateFormat: 'dd/MM/yyyy, HH:mm',
    timezones: {
      defaultTimezone: 'America/Sao_Paulo',
    },
  },
  i18n: {
    fallbackLanguage: 'pt',
    supportedLanguages: { pt },
    translations: {
      pt: {
        general: {
          payloadSettings: 'Configurações do Dashboard',
        },
      },
    },
  },
  collections: [Users, Media],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),
  sharp,
  plugins: [
    // storage-adapter-placeholder
  ],
})

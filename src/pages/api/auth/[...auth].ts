import { Auth } from '@auth/core'
import GitHub from '@auth/core/providers/github'

export const { GET, POST } = Auth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    })
  ]
}) 
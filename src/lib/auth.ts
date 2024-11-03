import GitHub from '@auth/core/providers/github'

export const authConfig = {
  providers: [
    GitHub({
      clientId: import.meta.env.GITHUB_ID,
      clientSecret: import.meta.env.GITHUB_SECRET,
    })
  ],
  callbacks: {
    authorized({ request, auth }) {
      return !!auth?.user
    }
  }
} 
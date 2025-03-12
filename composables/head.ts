// Nuxt now re-exports composables while properly resolving the context
export function head(input, options = {}) {
    const unhead = injectHead(options.nuxt)
    return head(input, { head: unhead, ...options })
}
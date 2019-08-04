export function generateTitle (title) {
  const hasKey = this.$te('route.' + title)

  if (hasKey) {
    return this.$t('route.' + title)
  }
  return title
}

export function generateText (text) {
  const hasKey = this.$te(text)

  if (hasKey) {
    return this.$t(text)
  }
  return text
}

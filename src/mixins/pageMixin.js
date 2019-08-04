import { generateText } from '@/utils/i18n'

export default {
  computed: {
  },
  mounted () {
  },
  methods: {
    generateText,
    pageText (text) {
      const pageName = this.$route.name
      return this.generateText(`${pageName}.${text}`)
    }
  }
}

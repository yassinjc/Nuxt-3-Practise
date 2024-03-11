import { createI18n } from 'vue-i18n'
import en from '../locales/en.json'
import nl from '../locales/nl.json'
import fr from '../locales/fr.json'
import ar from '../locales/ar.json'

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'en',
    messages: {
      en,
      nl,
      fr,
      ar,
    }
  })

  vueApp.use(i18n)
})
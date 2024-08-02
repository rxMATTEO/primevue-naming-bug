// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@primevue/nuxt-module"],
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    importTheme: { from: '@/primevue-theme/index.mjs', as: 'theme' }, // this is causes problems with naming inside primevue module
    importPT: { from: '@/primevue-theme/passthrough.mjs', as: 'pt' }, // those too
    // options: {
    //   theme: {
    //     preset: Aura,
    //   },
    // },
    components: {
      include: ['Sidebar', 'Dropdown', 'Dialog', 'InputText', 'Skeleton', 'DataView', 'InputNumber',
        'TabMenu', 'InputMask', 'Accordion',
        'AccordionTab', 'DeferredContent'],
    },
    // directives: {
    //   include: ['Tooltip'],
    // },
    // options: {
    //   locale: {
    //     emptyFilterMessage: 'Ничего не найдено',
    //     emptySelectionMessage: 'Ничего не найдено',
    //     emptyMessage: 'Ничего не найдено'
    //   }
    // }
  },
})
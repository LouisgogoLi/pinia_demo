import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const locales = import.meta.globEager('./locales/*.json');
  const modules = Object.keys(locales).reduce((modules, path) => {
    const moduleName = path.replace(/^\.\/.*\/(.*)\.\w+$/, '$1');
    modules[moduleName] = locales[path]?.default;
    return modules;
  }, {});
  return modules;
}

export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: import.meta.env.VITE_APP_I18N_LOCALE || 'zh_tw',
  fallbackLocale: import.meta.env.VITE_APP_I18N_FALLBACK_LOCALE || 'zh_tw',
  messages: loadLocaleMessages(),
});

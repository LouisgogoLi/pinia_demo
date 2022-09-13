import { config } from '@vue/test-utils';
import translations from '@/locales/zh_tw.json';

config.global.mocks = {
  $t: (msg) => translations[msg],
};

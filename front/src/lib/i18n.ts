import { addMessages, getLocaleFromNavigator, init } from 'svelte-i18n';

import en from './languages/en.json';
import cn from './languages/cn.json';
import vn from './languages/vn.json';
import ko from './languages/ko.json';

addMessages('en', en);
addMessages('cn', cn);
addMessages('vn', vn);
addMessages('ko', ko);

init({
	fallbackLocale: 'ko-kr',
	initialLocale: getLocaleFromNavigator(),
});

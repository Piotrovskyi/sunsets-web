import get from 'lodash/get';
import en from './../assests/translation/en';
import he from './../assests/translation/he';

const translation = process.env.NODE_ENV === 'production' ? he : en;

const t = (fieldPath) => get(translation, fieldPath, fieldPath);

export default t;

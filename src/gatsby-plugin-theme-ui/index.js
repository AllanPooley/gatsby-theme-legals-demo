import merge from 'lodash.merge';
import { theme } from '@littleplusbig/gatsby-theme-legals-prismic';

export default merge({}, theme, {
  colors: {
    text: '#000000',
    background: '#000000',
    primary: '#000000',
    primaryLighter: '#000000',
    primaryEvenLighter: '#000000',
    white: '#000000',
    offWhite: '#000000',
    black: '#000000',
    offBlack: '#000000',
    grey: '#000000',
  },
});

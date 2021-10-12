import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // base colors
  primary: '#ce1126', // red
  secondary: '#0038a8', // blue

  // colors
  black: '#1E1F20',
  white: '#FFFFFF',

  lightGray: '#979797',
  lightGray2: '#727272',
  lightGray3: '#464646',
  lightGray4: '#323232',
  transparent: 'transparent',
  darkgray: '#1e1e1e',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 30,
  padding: 10,
  padding2: 12,

  // font sizes
  largeTitle: 50,
  h1: 30,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 15,
  body1: 30,
  body2: 20,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {
    fontFamily: 'Poppins-Black',
    fontSize: SIZES.largeTitle,
    lineHeight: 55,
  },
  h1: {fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36},
  h2: {fontFamily: 'Poppins-Medium', fontSize: SIZES.h2, lineHeight: 30},
  h3: {fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22},
  h4: {fontFamily: 'Poppins-Medium', fontSize: SIZES.h4, lineHeight: 22},
  h5: {fontFamily: 'Poppins-Light', fontSize: SIZES.h4, lineHeight: 22},
  body1: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body1, lineHeight: 36},
  body2: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body2, lineHeight: 30},
  body3: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body3, lineHeight: 22},
  body4: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body4, lineHeight: 22},
  body5: {fontFamily: 'Poppins-Medium', fontSize: SIZES.body5, lineHeight: 22},
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;

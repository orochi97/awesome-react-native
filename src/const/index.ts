import {Dimensions} from 'react-native';

const {height: windowHeight, width: windowWidth} = Dimensions.get('window');
const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

export {windowHeight, windowWidth, screenHeight, screenWidth};

export const STORE_KEY = 'systemData';

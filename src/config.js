import firebase from 'firebase';

export const appName = 'react-adv-1e7a7';
export const config = {
	apiKey: `AIzaSyCx-241T0dVWiA3-qu7bzsGI2X8R2cg-uE`,
	authDomain: `${appName}.firebaseapp.com`,
	databaseURL: `https://${appName}.firebaseio.com`,
	projectId: `${appName}`,
	storageBucket: `${appName}.appspot.com`,
	messagingSenderId: `1064243010958`
};

firebase.initializeApp(config);
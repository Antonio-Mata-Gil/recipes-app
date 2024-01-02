// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  firebase: {
    apiKey: "AIzaSyBo0rX-2NdVmGE82ejiDKf7Nf4SI6PieEQ",
    authDomain: "myrecipes-app-f4acc.firebaseapp.com",
    projectId: "myrecipes-app-f4acc",
    locationId: 'europe-west',
    storageBucket: "myrecipes-app-f4acc.appspot.com",
    messagingSenderId: "642109950661",
    appId: "1:642109950661:web:9816b94fcc12ec4391beac"
  },
  production: true
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

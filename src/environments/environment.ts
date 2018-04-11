// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC9RUYVn7M9394YdrAT0vfbxyhSM8U5TVA",
    authDomain: "ecomerce-historia.firebaseapp.com",
    databaseURL: "https://ecomerce-historia.firebaseio.com",
    projectId: "ecomerce-historia",
    storageBucket: "ecomerce-historia.appspot.com",
    messagingSenderId: "890881364899"
  }
};

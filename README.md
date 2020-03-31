# Introduction

An application to track the availability and demand of PPE (Personal Protective Equipment) to help people during the COVID-19 pandemic.

# Dependencies
* sqlite
* redis
* Postgres (for production only)

# Getting started

```
npm install
npm run generateKeys # This will generate VAPID keys needed by web-push 
npm start
```
This will start the application on http://localhost:3000

Launch a browser after trusting localhost:3000 as a secure origin. For example, running the following command will open a Google Chrome window which will trust localhost:3000 as a secure website.
```
google-chrome-stable --user-data-dir=/tmp/foo --ignore-certificate-errors --unsafely-treat-insecure-origin-as-secure=https://localhost:3000
```
This is required because web-push API only works with secure origins, i.e. with HTTPS sites. So, in order to run the app on localhost, we need to ask the browser to trust this domain as secure. Note that this will not work in production and you will have to configure a secure domain.
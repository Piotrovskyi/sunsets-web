# Sunsets web client

## Get started


### Install dependencies
```sh
# If you are using npm
npm install
# or yarn
yarn
```

### Development
```sh
# If you are using npm
npm start
# or yarn
yarn start
```
### Development with own server
For local development you can path any api host with `REACT_APP_API_HOST` env variable
```sh
REACT_APP_API_HOST=http://localhost:8000 npm start
```
Also you can use
```sh
npm run local
# will be translated to REACT_APP_API_HOST=http://localhost:8000 npm start
```
Same work for `build` stage
```sh
REACT_APP_API_HOST=http://localhost:8000 npm run build
```



### Build
```sh
# If you are using npm
npm run build
# or yarn
yarn build
```
You will find artifacts in build folder

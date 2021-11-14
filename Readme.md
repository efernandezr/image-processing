# Image Process Project

<p>This API allows you to simply resize any image (formats allowed are JPEG, PNG, WebP, AVIF, TIFF, DZI, and libvips' V). It uses [Sharp](https://github.com/lovell/sharp) as dependency to trannsform the images.</p>

##Get Started

<p>To get started with the api, clone this project at [https://github.com/efernandezr/image-processing.git](https://github.com/efernandezr/image-processing.git)</p>

## Installation

to enter the project directory

```
cd Image-processing
```

to install `dependencies`

```
npm install
```

to start the server (using nodemon)

```
npm run start
```

tests created with Jasmine

```
npm run test
```

to execute prettier and Eslint scripts

```
npm run prettier
npm run lint
```

## End-point structure- How to process an image

- Once it is initialized, the server is set to http://localhost/3000 , but port can me modified in the config.ts file
- In order to process an image, you must go to http://localhost/3000/api/images and add the image you wanna use and the size in px you want as output
  as parrameters as follows http://localhost:3000/api/images?filename=IMAGE_NAME&width=WIDTH&height=HEIGHT (IMAGE_NAME without extention, WIDTH and HEIGHT just the numerical value desired as output)
- The image you want to resize (IMAGE_NAME in the url) must be already in the /assets/full folder, otherwise it will display a warning message
- The output image will be displayed after resizing is successgul and the thumbnail created will be places in the /assets/thumb folder
- Any accepted image file format will be processed (formats allowed are JPEG, PNG, WebP, AVIF, TIFF, DZI, and libvips' V)
- The api uses a custom Middleware (logger.md) created to log the processing activity in the console

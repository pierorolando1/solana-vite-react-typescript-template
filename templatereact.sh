#/bin/bash

rm src/App.css src/logo.svg 

# delete the second line of a file
sed -i '2d' src/App.tsx
sed -i '3d' src/App.tsx

yarn add -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

# add tailwindcss to the first line of a file
sed -i '1i @tailwind base;' src/index.css
sed -i '2i @tailwind components;' src/index.css
sed -i '3i @tailwind utilities;' src/index.css

# replace the second line of a file with an "hola"
sed -i '2i   content: ["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}",],' tailwind.config.js
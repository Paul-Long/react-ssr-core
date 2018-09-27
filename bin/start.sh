#!/bin/bash

cd ../

echo "start npm install"
npm i
echo "npm install finished"

echo "clean dist"
npm run clean
echo "clean finished"

echo "build react"
npm run build:react
echo "build react finished"

echo "build echarts"
npm run build:echarts
echo "build echarts finished"

echo "build client"
npm run build:client
echo "build client finished"

echo "build server"
npm run build:server
echo "build server finished"

echo "start app"
pm2 start index.js --name ssr

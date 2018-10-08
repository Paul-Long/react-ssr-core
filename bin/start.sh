#!/bin/bash

cd ../

echo "start npm install"
npm i
echo "npm install finished"

echo "start app"
pm2 start index.js --name ssr

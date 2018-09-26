#!/bin/bash

cd ../

echo "start app"
pm2 start index.js --name ssr

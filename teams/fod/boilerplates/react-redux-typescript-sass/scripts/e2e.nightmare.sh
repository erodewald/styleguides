#!/usr/bin/env bash

NEXT_HOST=127.0.0.1
NEXT_PORT=${1:-3000}

if ! nc -w 1 -z $NEXT_HOST $NEXT_PORT
then
  npm run dev &
  DID_SCRIPT_START_APP=true

  until nc -w 1 -z $NEXT_HOST $NEXT_PORT
    do :;
  done
fi

npm run test-e2e
if $DID_SCRIPT_START_APP = true
then
  pkill -f 'webpack-dev-server'
  pkill -f 'localhost'
fi

#!/bin/bash

custom_config_env='default'
analysing=false
use_https=false

for i in "$@"; do
  case $i in
    --stg1)
      custom_config_env=stage1
      ;;
    --http)
      use_https=false
      ;;
    --https)
      use_https=true
      ;;
    -a|--analyze)
      analysing=true
      ;;
    --help)
      echo ""
      echo "-a | --analyze -> Bundle analyzer"
      echo ""
      echo "Example:"
      echo "yarn dev -a"
      echo "yarn dev --analyze"
      echo ""
      exit 0
      ;;
  esac
done

webpack serve --mode=development --hot --port 5000 \
--env CONFIG_ENVIRONMENT=$custom_config_env ANALYZE=$analysing HTTPS=$use_https

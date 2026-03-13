
build:
    cd ./website && npm run build

serve: build
    cd ./website && npm run serve

jsut reserve: build serve
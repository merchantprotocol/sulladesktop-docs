# Ghost Agent Documentation Site

image := "ghcr.io/dataripple/ghostagent-docs:latest"

# Show available commands
default:
    @just --list

# Install all dependencies locally (for dev)
install:
    yarn install

# Build the Docker image with the static site baked in
build:
    docker build -t {{image}} .

# Start the container on port 6147
start:
    docker compose up -d

# Stop the container
stop:
    docker compose down

# Restart the container
restart: stop start

# Push the image to GitHub Container Registry
push:
    docker push {{image}}

# Build and push in one step
release: build push

# Open the local site in the browser
open:
    open "http://localhost:6147"

# Dev server with hot reload (no Docker)
dev:
    cd website && yarn start

# Clean build artifacts and Docusaurus cache
clean:
    cd website && rm -rf build .docusaurus

# Full rebuild from clean state
rebuild: clean build

# Clear cache, reinstall, and start fresh
reset: clean
    rm -rf node_modules website/node_modules
    yarn install

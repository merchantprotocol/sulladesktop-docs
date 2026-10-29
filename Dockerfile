# Stage 1: Build the Docusaurus static site
FROM node:18-alpine AS builder
WORKDIR /app

# Install yarn dependencies
COPY package.json yarn.lock ./
COPY website/package.json ./website/
COPY plugins/ ./plugins/
RUN yarn install --frozen-lockfile

# Copy source and build
COPY docs/ ./docs/
COPY website/ ./website/
RUN yarn website:build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=builder /app/website/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN bun install
COPY . .
RUN bun run build
CMD ["bun", "start"]
EXPOSE 3000

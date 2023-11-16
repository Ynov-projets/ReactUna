FROM node:19-alpine as builder

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build


# Build the image as production
# So we can minimize the size
FROM node:19-alpine

WORKDIR /app
COPY package*.json ./
COPY tsconfig.node.json ./
COPY tsconfig.json ./
ENV PORT=5173
ENV NODE_ENV=Production
RUN npm install
COPY --from=builder /app/dist ./dist
EXPOSE ${PORT}
CMD ["npm", "run", "dev"]
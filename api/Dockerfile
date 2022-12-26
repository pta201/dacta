FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

ENV PORT=3001

EXPOSE 3001

CMD ["node", "dist/main"]
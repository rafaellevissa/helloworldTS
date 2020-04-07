FROM node:13.12

COPY . /app
WORKDIR /app
RUN npm install && npm run-script build
ENTRYPOINT npm start
ENV PORT=3000
EXPOSE 3000
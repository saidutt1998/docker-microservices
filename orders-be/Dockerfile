FROM node:20-alpine
WORKDIR /app
RUN npm install express
COPY server.js .
EXPOSE 5003
CMD ["node", "server.js"]

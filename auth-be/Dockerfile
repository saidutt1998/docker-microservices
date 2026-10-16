FROM node:20-alpine
WORKDIR /app
RUN npm install express
COPY server.js .
EXPOSE 5001
CMD ["node", "server.js"]

FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/index
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 8080
RUN chown -R node /usr/src/index
USER node
CMD ["npm", "start"]
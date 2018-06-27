FROM node:10-alpine 
ENV NODE_ENV production
ENV mongoURL mongodb://db/webmathias
ENV PORT 3000
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production --silent
COPY . .
# ENTRYPOINT [ "npm",  "start" ]
ENTRYPOINT [ "node", "./src/index.js" ]

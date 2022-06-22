FROM node:14.16.1-alpine

WORKDIR /app

COPY --chown=node:node . /app

USER node

EXPOSE 3000

CMD [ "npm", "start:prod:rest" ]
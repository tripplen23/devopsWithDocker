FROM node:16

WORKDIR /usr/src/app

RUN apt-get update \
    && apt-get install -y npm \
    && apt-get install -y curl \
    && curl https://deb.nodesource.com/setup_16.x \ 
    | apt-get install -y nodejs \ 
    && node --version && npm --version

COPY package*.json ./

RUN npm ci

COPY . .

ENV REACT_APP_BACKEND_URL=http://localhost:8000

RUN npm run build

COPY . .

RUN npm install -g serve

EXPOSE 5000

CMD ["serve", "-s", "-l", "5000", "build"]
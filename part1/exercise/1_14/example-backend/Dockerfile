FROM golang:1.16-alpine

RUN mkdir /app

WORKDIR /app

RUN apk add --update --no-cache wget gcc libc-dev

COPY go.* ./

RUN go get -v -d ./...

COPY . .

ENV PORT=8000

ENV REQUEST_ORIGIN=http://localhost:5000

RUN go build -v -o ./server

RUN go test ./...

EXPOSE 8000

CMD [ "./server" ]
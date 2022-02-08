FROM golang:1.16-alpine

WORKDIR /backend

RUN apk upgrade --update && \
  apk --no-cache add git

COPY . .

RUN go mod download

RUN go get -u github.com/cosmtrek/air && \
  go build -o /go/bin/air github.com/cosmtrek/air

CMD ["air", "-c", ".air.toml"]



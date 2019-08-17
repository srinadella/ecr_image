FROM alpine:3.8

RUN apk update

RUN apk add nodejs

FROM 906674254390.dkr.ecr.us-east-1.amazonaws.com/service

ENV PORT=80

EXPOSE $PORT

COPY app.js /app/

CMD ["node", "/app/app.js"]
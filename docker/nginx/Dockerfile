FROM nginx:1.16-alpine

RUN adduser -u 1000 -S www-data
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/

EXPOSE 80

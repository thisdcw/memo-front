FROM nginx

WORKDIR /usr/share/nginx/html/
USER root

COPY ./dist  /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

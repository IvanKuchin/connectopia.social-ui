FROM node:slim as build

WORKDIR /app

COPY . /app

RUN npm install -g typescript
RUN cd ./ts && tsc

###############################################

FROM busybox:latest as app

# Create a non-root user to own the files and run our server
RUN adduser -D static
USER static
WORKDIR /home/static

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY --from=build /app/web/ .

EXPOSE 80

# Run BusyBox httpd
CMD ["busybox", "httpd", "-f", "-v", "-p", "80"]

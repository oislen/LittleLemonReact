# get base image
FROM node:22.20.0

# set environment variables
ENV user=user
ENV DEBIAN_FRONTEND=noninteractive
ENV CI=true

# install required software and programmes for development environment
RUN apt-get update
RUN apt-get install -y apt-utils vim curl wget unzip tree htop adduser
RUN apt-get install -y libtiff-dev=4.5.0-6+deb12u3 libtiff6=4.5.0-6+deb12u3 libtiffxx6=4.5.0-6+deb12u3 linux-libc-dev=6.1.158-1

# set up home environment
RUN adduser ${user}
RUN mkdir -p /home/${user} && chown -R ${user}: /home/${user}

# copy little lemon repo
COPY . /home/${user}/LittleLemonReact

# set working directory for django app
WORKDIR /home/${user}/LittleLemonReact

# install required node packages
RUN npm ci
# run node tests
RUN npm test

EXPOSE 3000
CMD  ["npm", "start"]
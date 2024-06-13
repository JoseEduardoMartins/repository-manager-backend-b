FROM node:12.14.0-alpine3.11

RUN apk add --no-cache bash git

RUN touch /home/eduardo/.bashrc | echo "PS1='\w\$ '" >> /home/eduardo/.bashrc

USER eduardo

WORKDIR /home/eduardo/repository-manager-backend-b
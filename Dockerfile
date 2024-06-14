# Use uma imagem Node oficial como base
FROM node:14

# Crie um diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código da aplicação
COPY . .

# Exponha a porta que a aplicação utiliza
EXPOSE 3001

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:dev"]

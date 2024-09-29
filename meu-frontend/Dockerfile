# Etapa 1: Construir a aplicação React
FROM node:18 AS build

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa 2: Servir a aplicação React
FROM nginx:alpine

# Remove a configuração padrão do Nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos compilados da aplicação para o diretório do Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposição da porta 80 para acessar a aplicação
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]

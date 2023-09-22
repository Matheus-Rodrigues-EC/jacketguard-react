# Aqui é selecionada a imagem node para rodar a aplicação react
# escolhi a alpine pois essa versão do node é compacta e
# configuramos a versão alpine como contrução
FROM node:alpine AS build

# Essa é a pasta que será criada para a imagem docker
ENV HOME=/app
# Este será o diretório de trabalho da imagem
WORKDIR ${HOME}

# Aqui, são copiados todos os arquivos da origem, que é o diretório local
# para o diretório de trabalho, que é a pasta app criada pelo docker
COPY . .

# Aqui é o comando que executa a instalação das dependências
# que é encontrada no package.json
RUN npm install

# Aqui é o comando que executa a construção da aplicação Vite
RUN npm run build

# Aqui é importada a imagem base do servidor nginx 
FROM nginx:alpine

# Aqui são copiados todos os arquivos de construção do Vite
# para o diretório de publicação do nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Aqui expõe a porta 80 (opicional)
EXPOSE 80

# Aqui inicia o servidor Nginx
CMD ["nginx", "-g", "daemon off;"]
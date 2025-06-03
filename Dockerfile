# Use a imagem oficial do Node.js como base
FROM node:20-alpine

# Defina o diretório de trabalho no container
WORKDIR /app

# Copie os arquivos de configuração
COPY package*.json ./
COPY tsconfig.json ./
COPY tailwind.config.js ./
COPY postcss.config.js ./
COPY .eslintrc.json ./
COPY jest.config.js ./
COPY jest.setup.js ./

# Instale as dependências
RUN npm ci

# Copie o código fonte
COPY src ./src
COPY public ./public

# Build da aplicação
RUN npm run build

# Exponha a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"] 
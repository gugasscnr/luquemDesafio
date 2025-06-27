# Docker - Gerador de Senhas

Este documento explica como executar a aplicação Gerador de Senhas usando Docker.

## Pré-requisitos

- Docker instalado
- Docker Compose instalado

## Executando com Docker Compose

### 1. Construir e iniciar a aplicação

```bash
docker compose up -d
```

Este comando irá:
- Construir a imagem Docker
- Criar e iniciar o container
- Executar a aplicação em modo detached (background)

### 2. Verificar o status

```bash
docker compose ps
```

### 3. Ver os logs

```bash
docker compose logs -f
```

### 4. Parar a aplicação

```bash
docker compose down
```

### 5. Reconstruir a imagem

```bash
docker compose up -d --build
```

## Executando com Docker diretamente

### 1. Construir a imagem

```bash
docker build -t gerador-senhas .
```

### 2. Executar o container

```bash
docker run -p 3000:3000 gerador-senhas
```

## Acessando a aplicação

Após executar os comandos acima, a aplicação estará disponível em:

**http://localhost:3000**

## Estrutura dos arquivos Docker

- `Dockerfile` - Configuração da imagem Docker
- `docker-compose.yml` - Orquestração dos serviços
- `.dockerignore` - Arquivos ignorados no build

## Variáveis de ambiente

A aplicação usa as seguintes variáveis de ambiente:

- `NODE_ENV=production` - Ambiente de produção

## Troubleshooting

### Container não inicia

1. Verifique os logs:
```bash
docker compose logs
```

2. Verifique se a porta 3000 está disponível:
```bash
netstat -an | findstr :3000
```

### Erro de build

1. Limpe as imagens antigas:
```bash
docker system prune -a
```

2. Reconstrua a imagem:
```bash
docker compose up -d --build
```

## Desenvolvimento

Para desenvolvimento local sem Docker, use:

```bash
npm install
npm run dev
``` 
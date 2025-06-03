# Gerador de Senhas

Este é um gerador de senhas aleatórias desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Funcionalidades

- Geração de senhas aleatórias
- Personalização do comprimento da senha (4-64 caracteres)
- Opções para incluir:
  - Letras maiúsculas
  - Letras minúsculas
  - Números
  - Símbolos especiais
- Indicador de força da senha
- Histórico das últimas 5 senhas geradas
- Interface responsiva e moderna
- Testes unitários

## Tecnologias Utilizadas

- Next.js 14
- TypeScript
- Tailwind CSS
- Jest
- React Testing Library

## Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/gerador-senhas.git
cd gerador-senhas
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm start` - Inicia o servidor de produção
- `npm test` - Executa os testes
- `npm run lint` - Executa o linter

## Pipeline de CI/CD

Este projeto utiliza GitHub Actions para CI/CD com os seguintes estágios:

1. **Build e Testes**
   - Instalação de dependências
   - Execução de testes
   - Build do projeto

2. **Deploy**
   - Deploy automático para a Vercel após sucesso nos testes

## Estrutura do Projeto

```
src/
  ├── app/
  │   ├── __tests__/
  │   │   └── page.test.tsx
  │   ├── layout.tsx
  │   ├── page.tsx
  │   └── globals.css
  ├── components/
  └── styles/
```

## Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. 
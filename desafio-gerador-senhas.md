# Desafio: Gerador de Senhas Aleatórias com Pipeline de Deploy

## Descrição
Neste desafio, você deverá desenvolver uma aplicação web para gerar senhas aleatórias com diferentes níveis de complexidade. Além disso, é **estritamente necessário** a implementação de uma pipeline de deploy para disponibilizar a aplicação em um ambiente de produção.

## Requisitos Funcionais da Aplicação

### Gerador de Senhas
1. A aplicação deve permitir a geração de senhas aleatórias
2. O usuário deve poder escolher:
   - Comprimento da senha (entre 4 e 64 caracteres)
   - Tipos de caracteres a incluir:
     - Letras maiúsculas (A-Z)
     - Letras minúsculas (a-z)
     - Números (0-9)
     - Símbolos especiais (!@#$%^&*()_+, etc.)
3. Deve haver uma opção para copiar a senha gerada para a área de transferência
4. A aplicação deve exibir uma indicação visual da força da senha (fraca, média, forte)
5. Histórico das últimas 5 senhas geradas (opcional, mas desejável)

### Interface
1. Interface de usuário intuitiva e responsiva
2. Design moderno e agradável
3. Compatibilidade com diferentes navegadores

## Requisitos Técnicos

### Desenvolvimento
1. Utilize qualquer tecnologia para o frontend
2. Organize o código seguindo boas práticas de desenvolvimento, clean architecture
4. Implemente testes unitários para as funcionalidades principais

### Pipeline de Deploy
1. **Obrigatório**: Configurar uma pipeline de Integração e Entrega Contínua (CI/CD)
2. A pipeline deve incluir:
   - Testes de deploy
   - Build da aplicação
   - Deploy automático para o ambiente de produção
3. Ferramentas sugeridas (escolha uma ou mais):
   - Azure DevOps

### Hospedagem
1. A aplicação deve estar disponível online através de uma URL pública
2. Opções de hospedagem sugeridas:
   - Netlify
   - Vercel
   - GitHub Pages
   - Heroku
   - AWS S3 + CloudFront
   - Firebase Hosting
   - Azure Static Web Apps < se caso tiver crédito na plataforma faça esse.

## Entregáveis
1. Código-fonte completo do projeto em um repositório Git (GitHub, GitLab, etc.)
2. Documentação:
   - Instruções de instalação e execução local do projeto
   - Detalhamento da arquitetura da aplicação
   - Descrição da pipeline de CI/CD implementada (arquivos de configuração, etapas, etc.)
   - URL da aplicação em produção
3. Apresentação (opcional):
   - Demonstração da aplicação em funcionamento
   - Explicação do processo de desenvolvimento e decisões tomadas

## Critérios de Avaliação
1. **Funcionalidade**: A aplicação funciona corretamente? Todas as features requeridas foram implementadas?
2. **Qualidade do Código**: O código é limpo, bem organizado e segue boas práticas?
3. **Pipeline de CI/CD**: Foi configurada corretamente? É funcional e automática?
4. **Disponibilidade**: A aplicação está acessível online?
6. **Documentação**: A documentação é clara e completa?

## Prazo e Submissão
1. O desafio deve ser concluído em até 7 dias após o recebimento
2. A submissão deve incluir:
   - Link para o repositório Git
   - Link para a aplicação em produção
   - Documentação do projeto

## Dicas
- Faça commits frequentes e significativos
- Foque na implementação da pipeline de CI/CD desde o início
- Não deixe para configurar o deploy apenas no final do desafio
- Teste a aplicação em diferentes navegadores e dispositivos
- Considere aspectos de segurança, especialmente em relação à geração de senhas

Boa sorte!
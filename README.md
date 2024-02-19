# HAPPY

## Sobre o Projeto

Happy é uma plataforma online dedicada a simplificar a descoberta e visita a orfanatos nas proximidades. Com a missão de espalhar alegria pelo mundo, nosso projeto encoraja indivíduos a fazerem visitas a essas instituições e compartilharem momentos especiais com as crianças.

## Estrutura do Projeto

O projeto Happy está estruturado da seguinte forma:

```
happy/
|-- backend/
|   |-- src/
|   |   |-- config/
|   |   |-- controllers/
|   |   |-- database/
|   |   |-- errors/
|   |   |-- models/
|   |   |-- views/
|   |   |-- routes.ts
|   |   |-- server.ts
|   |-- .gitignore
|   |-- ormconfig.json
|   |-- package.json
|   |-- tsconfig.json
|   |-- yarn.lock
|-- mobile/
|   |-- src/
|   |-- .expo-shared/
|   |-- assets/
|   |-- .gitignore
|   |-- app.json
|   |-- App.tsx
|   |-- babel.config.js
|   |-- package.json
|   |-- tsconfig.json
|   |-- yarn.lock
|-- web/
|   |-- public/
|   |-- src/
|   |   |-- components/
|   |   |-- images/
|   |   |-- pages/
|   |   |-- services/
|   |   |-- styles/
|   |   |-- utils/
|   |   |-- App.tsx
|   |   |-- index.tsx
|   |   |-- react-app-env.d.ts
|   |   |-- routes.tsx
|   |-- .gitignore
|   |-- package.json
|   |-- tsconfig.json
|   |-- yarn.lock
|-- README.md
```

## Descrição dos Principais Diretórios

- **backend/**: Contém o código fonte do backend da aplicação, incluindo configurações, controladores, modelos, visualizações e rotas.
- **mobile/**: Contém o código fonte do aplicativo móvel, desenvolvido com React Native e Expo.
- **web/**: Contém o código fonte do frontend web, desenvolvido com React.js.

## Tecnologias Utilizadas

O projeto Happy foi desenvolvido utilizando as seguintes tecnologias:

### Backend
- Node.js
- Express
- SQLite
- TypeORM
- Multer
- Yup

### Frontend (Web)
- React.js
- TypeScript
- Leaflet
- Framer Motion

### Frontend (Mobile)
- React Native
- Expo

## Conceitos Apresentados no Projeto

- Utilização de Node.js e Express para o desenvolvimento do backend;
- Uso do TypeScript para tipagem estática;
- Implementação de CRUD (Create, Read, Update, Delete) para orfanatos;
- Integração com APIs externas, como o Google Maps, MapBox e o WhatsApp;
- Gerenciamento de rotas e navegação em aplicações web e móveis;
- Utilização de banco de dados SQLite com TypeORM para persistência de dados.

## Funcionalidades

- Cadastro e registro de orfanatos
- Marcação de dias para visitas
- Visualização de horários de funcionamento e dias de visitação
- Agendamento de visitas
- Contato via Whatsapp
- Visualização de direções via MapBox e Google Maps
- Navegação entre diferentes páginas e abas
- Localização de orfanatos próximos

## Arquitetura Aplicada

O projeto Happy segue uma arquitetura de desenvolvimento em camadas, com a separação clara de responsabilidades entre o frontend e o backend. O backend é responsável por lidar com a lógica de negócios, enquanto o frontend é responsável pela apresentação e interação com o usuário.

## Histórico do Projeto

### Commits

- **18 de outubro de 2020:** Criou páginas e fluxo de cadastro de orfanatos.
- **17 de outubro de 2020:** Trabalhou com rotas, fontes customizadas e mapa.
- **16 de outubro de 2020:** Conectou frontend com backend, abstraindo componentes e criando navegação entre telas.
- **15 de outubro de 2020:** Configurou banco de dados, rotas, parâmetros e métodos HTTP.
- **14 de outubro de 2020:** Iniciou o projeto e desenvolveu a landing page com mapa.

## Como Executar o Projeto

O projeto Happy é dividido em três partes: Backend, Frontend (Web) e Frontend (Mobile). Para executar o projeto, siga as instruções abaixo:

### Backend

1. Clone este repositório:
   ```bash
   git clone https://github.com/joaogdcarvalho/happy
   ```

2. Acesse a pasta do servidor:
   ```bash
   cd happy/backend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

4. Execute o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```

5. O servidor iniciará na porta 3333 - acesse http://localhost:3333

### Frontend (Web)

1. Acesse a pasta do frontend web:
   ```bash
   cd ../web
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run start
   ```

4. A aplicação será aberta na porta 3000 - acesse http://localhost:3000

### Frontend (Mobile)

1. Acesse a pasta do frontend mobile:
   ```bash
   cd ../mobile
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Execute a aplicação em modo de desenvolvimento:
   ```bash
   npm run start
   ```

4. A aplicação será aberta - siga as instruções do Expo para visualizar no dispositivo móvel.

## Diretrizes de Contribuição

Contribuições para este projeto são bem-vindas. Sinta-se à vontade para abrir pull requests, relatar bugs ou sugerir novos recursos.

## Licença

Este projeto está licenciado sob a Licença MIT.
# Aplicação desenvolvida utilizando o React

#### Comandos utilizados no desenvolvimento

npm install

#### INSTALACAO DA BIBLIOTECA tailwindcss

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

#### INSTALCAO DA BIBLIOTECA phosphor-icons

npm install phosphor-react

#### Installation

#### To get started, install Headless UI via npm or yarn:

#### npm

npm install @headlessui/react

## SERVER

#### criação do package.json

npm init -y

#### instala typescript para o node

#### live relaod = nodemon

ts-node-dev
npm i typescript @types/node ts-node-dev -D

#### npx typescript ou tsc -> cria arquivo tsconfig.json

npx tsc --init

<!-- alterar tsconfig.json para a versão mais recente
/* Language and Environment */
"target": "es2020",

"rootDir": "./src",
"outDir": "./dist",   -->

#### instalar o express -> gerenciar rotas

npm i express
npm i -D @types/express

#### instalar o prima -> ferramenta ORM

npm i prisma -D
npm i @prisma/client

#### inicializa o prisma e cria o arquivo de configuração env

npx prisma init

#### criação das tabelas migrações

npx prisma migrate dev

#### executar gerenciador do banco

npx prisma studio

#### biblioteca envio email

npm i nodemailer
npm i --save-dev @types/nodemailer

#### criar conta no mailtrap

<!-- criar imbox e pegar conmfiguração do nodemailer
exemplo:
var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "31ac80b509b7c6",
    pass: "7034415a83c872"
  }
}); -->

#### instalar o Jest

npm install jest -D

#### iniciar as configurações do Jest

npx jest --init
npm install ts-node -D

#### Para fazer seus testes do Jest rodarem mais rápido,

#### você pode trocar o executor padrão baseado em JavaScript

##### (ts-jest) por uma substituição do Rust usando o SWC.

npm i -D jest @swc/jest

#### tipagem do jest

npm install @types/jest -D

### install cors - controle de segurança

npm i cors

### install react native view shot
npm install react-native-view-shot

### instalação do Axios 
npm install axios
expo install expo-file-system

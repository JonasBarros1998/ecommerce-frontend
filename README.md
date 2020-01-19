## Plataforma de ecommerce

Está em desenvolvimento uma plataforma de ecommerce. Esse é o módulo relacionando ao frontend, onde está sendo escrito usando javaScript(framework react), e algumas extensões como: react-router-dom, react-redux, redux, cross-fetch. E para a arquitetura do projeto estamos utilizado o [flux](https://facebook.github.io/flux/). 

###### Arquitetura
A aplicação está separada em módulos, e está estruturada da seguinte maneira: A parte do carrinho é um módulo, e não deverá em hipótese alguma importar explicitamente outros módulos da aplicação, sendo assim esse módulo deverá funcionar de maneira independente dos demais, resultando na reutilização desse mesmo módulo em outras aplicações. Por isso optamos por utilizar a arquitetura do flux, porque com ele conseguimos separar a aplicação em módulos independentes, e fazer o gerenciamento de estados sem que um módulo fique fortemente dependente de outro.

###### Estrutura de diretórios. 
Cada módulo tem seus respectivos diretórios, para explicá-los, usaremos o módulo products. 
O módulo products, como todos os módulos têm a seguinte estrutura de pastas:  actions, constants, container, reducers, routes, utils e helpers.

###### Diferença entre os diretórios container e componentes
O diretório container tem como responsabilidade chamar as funções criadas nas actions, por padrão ele não deve chamar os estados de outros módulos. 

Quem tem responsabilidade de chamar os estados através das props é o componente, com isso o componente não poderá chamar as actions, porque isso ficará a cargo dos containers.

## O que já está pronto para o uso?
- Cadastro de novos usuários
- Login  
- Verificação de email 
- Detalhes dos produtos
- Slide da página principal

## Rodando a aplicação
1. Baixar a imagem docker da api desenvolvida em python(framework Django e django rest framework).
```
docker pull jonasflorencio/ecommerce
```
2. Baixe o código fonte a partir da branch master da api ecommerce.
```
git clone git@github.com:JonasBarros1998/ecommerce.git
```
3. No seu terminal dentro da pasta ecommerce, rode o docker-compose. Para mais detalhes de como configurar o docker-compose.yml acesse esse [link](https://github.com/JonasBarros1998/ecommerce).
```
docker-compose up
```
4. Agora baixe o código fonte a partir da branch master da parte frontend do ecommerce.
```
git clone git@github.com:JonasBarros1998/ecommerce-frontend.git
```
5. Instale todas as dependências do projeto e rode o projeto.
```
npm install

npm start
```
## Fazendo a autenticação da aplicação

Para acessar as rotas localhost:3000/login e  localhost:3000/register, primeiro terá que configurar seu **client_id** e **client_secret**, porque a parte de autenticação da api do ecommerce foi desenvolvida usando oauth2, e não será possível autenticar novos usuário, se os tokens de acesso não estiver configurado.

Com os containers da api do ecommerce rodando, será preciso digitar comandos dentro do container. 

```
docker-compose exec -it ecommerce python manage.py migrate
docker-compose exec -it ecommerce python manage.py makemigrations
docker compose exec -it ecommerce python manage.py migrate
```

Com esses comandos já é possível acessar as rotas citadas acima, porém muitas vezes o django não consegue reconhecer o módulo users, que é responsável por autenticar novos usuário, para garantir que tudo está funcionando, faça os seguintes comandos abaixo: 

```
docker-compose exec -it ecommerce python manage.py makemigrate users
docker-compose exec -it ecommerce python manage.py migrate users
```

###### A agora crie um novo usuário: 
```
docker-compose exec -it ecommerce python manage.py createsuperuser
```
acesse a url localhost://8000/admin, faça o login com nome e senha que você acabou de cadastrar. 

Agora acesse a url localhost:8000/jm-ecommerce/authentication/applications, faça os passos solicitados pela página e copie o client_id e client_secret. 

Cole esses itens dentro do arquivo env.js que está localizado dentro de src, se não encontrá-lo crie um novo arquivo env.js e copie o conteúdo do arquivo env.example.js para dentro do arquivo env.js e cole o client_id e client_secret.


###### Veja algumas imagens da aplicação
![login_verifieldEmail](https://user-images.githubusercontent.com/35241982/72686354-8c52c800-3ad2-11ea-831b-cfd0890966b8.png)

![productos_2](https://user-images.githubusercontent.com/35241982/72686392-f5d2d680-3ad2-11ea-89f2-0782b8a13087.png)

![register_1](https://user-images.githubusercontent.com/35241982/72686401-08e5a680-3ad3-11ea-8153-2595c421df20.png)

![products_1](https://user-images.githubusercontent.com/35241982/72686485-2e26e480-3ad4-11ea-820a-3762b3ea6122.png)

**Pronto!! agora você pode acessar as urls e fazer o cadastro e o login posteriormente.**

Acessa também a api [ecommerce](https://github.com/JonasBarros1998/ecommerce)


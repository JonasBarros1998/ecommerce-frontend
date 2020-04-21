## Plataforma de ecommerce(frontend)

Está em processo de desenvolvimento uma plataforma de ecommerce. Esse é o módulo relacionando ao frontend, onde está sendo escrito usando javaScript(biblioteca react), e algumas extensões como: react-router-dom, react-redux, redux, cross-fetch. E para a arquitetura do projeto estamos utilizado o [flux](https://facebook.github.io/flux/). 

###### Arquitetura
A aplicação está separada em módulos, e está estruturada da seguinte maneira, por exemplo: A parte do carrinho é um módulo, e não deverá em hipótese alguma importar explicitamente outros módulos da aplicação, sendo assim esse módulo deverá funcionar de maneira independente dos demais, dessa maneira podemos reutilizar esse modulo em outras aplicações. 
Ao escolher a arquitetura do flux, prezamos primeiramente em desvincular todos os modulos da aplicação, ou seja se por acaso o modulo relacionado ao checkout precisar usar o modulo do carrinho não poderemos importar explicitamente esse modulo, para isso usaremos os recursos 
de dois pacotes que estão presentes nessa aplicação que são o react-redux e redux.
Com esse conceito de arquitetura conseguimos fazer com que todos os modulos funcione 
de forma idependete, sem a necessidade de ligar um modulo ao outro.  

###### Estrutura de diretórios. 
Cada módulo tem seus respectivos diretórios, para explicá-los, usaremos o módulo products. 
O módulo products, como todos os módulos têm a seguinte estrutura de pastas:  actions, constants, container, reducers, routes, utils e helpers e services.
A pasta utils que está da raiz de src, contém todos os arquivos que podemos usar em qualquer 
lugar da nossa aplicação.  

## O que já está pronto para o uso?
- Checkout
- Pagamentos com mercadopago
- Carrinho
- Detalhes dos produtos
- Pagina inicial

## Rodando a aplicação
1. Baixar a imagem docker da api desenvolvida em python(framework Django e django rest framework).
```
docker pull jonasflorencio/ecommerce
```
2. Baixe o código fonte a partir da branch master da api ecommerce.
```
git clone git@github.com:JonasBarros1998/ecommerce.git
```
3. No seu terminal dentro da pasta ecommerce, rode o docker-compose. Mas antes configure o arquivo .env, e o docker-compose.yml. 
Para mais detalhes acesse esse [link](https://github.com/JonasBarros1998/ecommerce).

É importante também verificar se a dataBase, nome de usuario e senha estão configurados no postgresql, caso contrário esse comando não irá funcionar. 
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

## Configurando o backend

Com os containers da api do ecommerce rodando, será preciso digitar comandos dentro do container. 

```
docker exec -it ecommerce python manage.py migrate
docker exec -it ecommerce python manage.py makemigrations
docker exec -it ecommerce python manage.py migrate
```

Muitas vezes o django não consegue reconhecer alguns módulos, para resolver 
esse problema, veja o exemplo dos comandos que terá que digitar dentro do 
container, para que o modulo seja reconhecido. 
Troque o ```users``` pelo nome do modulo que o django não reconheceu.
```
docker exec -it ecommerce python manage.py makemigrations users
docker exec -it ecommerce python manage.py migrate users
```


###### Veja algumas imagens da aplicação
![login_verifieldEmail](https://user-images.githubusercontent.com/35241982/72686354-8c52c800-3ad2-11ea-831b-cfd0890966b8.png)

![register_1](https://user-images.githubusercontent.com/35241982/72686401-08e5a680-3ad3-11ea-8153-2595c421df20.png)

![products_1](https://user-images.githubusercontent.com/35241982/72686485-2e26e480-3ad4-11ea-820a-3762b3ea6122.png)

![productos_2](https://user-images.githubusercontent.com/35241982/72686392-f5d2d680-3ad2-11ea-89f2-0782b8a13087.png)

Acessa também a api [ecommerce](https://github.com/JonasBarros1998/ecommerce)


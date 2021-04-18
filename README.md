# MARVEL _comics_ - Aplicação para listagem de Comics da Marvel

A aplicação está hospedada na plataforma HEROKU e pode ser acessada clicando [Aqui](https://joaolfr.github.io/marvel-comics/) podendo ser acessada também em um aparelho mobile, visto que a mesma é responsiva.

#

No desenvolvimento desse projeto foram usadas as seguintes bibliotecas e ferramentas:

#### Frontend

- **Styled Components**: usado para estilizações de maneira mais dinâmica
- **React Router Dom**: usado para navegação entre páginas e componentes no React
- **Github Pages**: usado para publicação da aplicação
- **Redux**: usado para um melhor controle da aplicação, possibilitando um melhor controle do estado global e variáveis compartilhadas
- **Firebase**: possibilitou o uso do login por Github para autenticação do usuário
- **React Icons**: biblioteca para ícones usados na aplicação
- **Material UI**: biblioteca UI que foi utilizada para facilitar a construção da aplicação de forma responsiva

## OVERVIEW

Como hook customizado escolhi criar o hook de consumo de apis nele consigo passar qual tipo método de chamada quero fazer ( GET, POST, PUT, DELETE), além de outras informações pertinentes a chamada.

Deixei comentado no arquivo de configuração de API a possibilidade do uso de token caso fosse o caso de uma api que necessitasse de autenticação.

Além dele, criei também o hook para autenticação utilizando o firebase+github, que foi o método de autenticação usado no projeto.

O projeto se utiliza de um tema global, defini um tema dark e um light, porém fiz apenas o uso do tema dark, utilizando as cores principais da marvel. Para uma aplicação que possua mais de um tema, poderia ser colocado um “switch” no navbar e realizar a troca do tema que é utilizado globalmente.

Fiz o uso de alguns componentes genéricos também, que poderiam ser utilizados em outras telas da aplicação, além de componentes de UI, criei apenas o componente de texto que recebe propriedades que podem manipular seu tamanho e peso, porém poderiam ser criados componentes de espaço, botão, input, ou items que são utilizados em diversos momentos da aplicação.

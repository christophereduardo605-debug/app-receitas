# App de Receitas

Aplicativo de receitas desenvolvido como atividade da disciplina, utilizando React Native com Expo.

## Sobre o projeto

O aplicativo consulta a API TheMealDB e apresenta uma lista de receitas com seus nomes e imagens. Ao selecionar uma receita, o usuário é direcionado para uma tela com mais informações.

## Tecnologias utilizadas

- React Native
- Expo
- JavaScript
- Axios
- React Navigation
- API TheMealDB

## Funcionalidades

- Listagem de receitas utilizando FlatList.
- Consumo da API TheMealDB com Axios.
- Exibição de imagens e nomes das receitas.
- Navegação entre as telas Home e Detalhes.
- Visualização da categoria, origem e modo de preparo da receita.

## Como executar

É necessário ter o Node.js instalado.

1. Clone o repositório.
2. Abra a pasta do projeto no VS Code.
3. Instale as dependências com `npm install`.
4. Execute `npx expo start` para iniciar o projeto.

Para testar pelo navegador, instale as dependências web, se necessário, com `npx expo install react-dom react-native-web @expo/metro-runtime` e execute `npx expo start --web`.

## Objetivo

Praticar o consumo de APIs, a utilização de listas e a navegação entre telas no React Native.

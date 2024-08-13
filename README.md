![Web 1](./github/banner.png) 

<p align="center">
  <a href="https://github.com/Denisson-Pereira/magazine-store"><img src="https://img.shields.io/github/languages/top/Denisson-Pereira/magazine-store?color=blue" alt="Primary Language"></a>
  <a href="https://github.com/Denisson-Pereira/magazine-store/issues"><img src="https://img.shields.io/github/issues-raw/Denisson-Pereira/magazine-store" alt="Open Issues"></a>
  <a href="https://github.com/Denisson-Pereira/magazine-store/graphs/contributors"><img src="https://img.shields.io/github/contributors/Denisson-Pereira/magazine-store" alt="Contributors"></a>
  <a href="https://github.com/Denisson-Pereira/magazine-store/commits/main"><img src="https://img.shields.io/github/last-commit/Denisson-Pereira/magazine-store" alt="Last Commit"></a>
  <a href="https://github.com/Denisson-Pereira/magazine-store/stargazers"><img src="https://img.shields.io/github/stars/Denisson-Pereira/magazine-store" alt="Stars"></a>
</p>






# 📑 Sobre o projeto 


O projeto **Magazine Store** é uma plataforma completa que integra **backend** e **frontend** para oferecer uma experiência de compra de eletrônicos de alta qualidade. Desenvolvido com **Java** e **Spring Boot**, o backend é robusto e eficiente, garantindo uma gestão eficaz dos dados e operações da loja. O banco de dados, projetado e implementado em **MySQL** pelo próprio autor, oferece uma base sólida e confiável para armazenar e manipular as informações de produtos, usuários e transações.

O **frontend**, construído com **React Native**, proporciona uma interface amigável e intuitiva para os usuários. O aplicativo inclui funcionalidades essenciais, como um carrinho de compras dinâmico, um sistema de favorecimento de produtos, e uma classificação detalhada das categorias de produtos. Além disso, o sistema de cupons de desconto e a opção de aplicar descontos por produto tornam a experiência de compra ainda mais atraente. A criação de contas e a autenticação são gerenciadas com **JWT**, assegurando a segurança e a personalização da experiência do usuário.

## 🏆 Principais Características do Software

| **Característica**                  | **Descrição**                                                                                                 |
|------------------------------------|---------------------------------------------------------------------------------------------------------------|
| **Autenticação com JWT**           | Sistema seguro de autenticação utilizando JSON Web Tokens (JWT) para proteger os endpoints da API.           |
| **Carrinho de Compras Dinâmico**   | Funcionalidade completa para adicionar, remover e modificar produtos no carrinho, com cálculo automático do total e aplicação de cupons de desconto. |
| **Sistema de Favoritos**           | Permite marcar produtos como favoritos para acesso rápido aos itens de interesse.                           |
| **Classificação de Categorias**    | Organização de produtos em categorias para uma navegação intuitiva e filtragem eficiente.                   |
| **Desconto por Produto**           | Aplicação de descontos a produtos individuais, com exibição do preço original e do preço com desconto.       |
| **Integração com MySQL**           | Banco de dados escalável e seguro criado com MySQL, garantindo integridade dos dados.                        |
| **Backend com Spring Boot e JDBC** | Desenvolvimento do backend em Java com Spring Boot e JDBC para desempenho e escalabilidade.                 |
| **Serviço de Busca de Produtos**   | Integração com APIs para buscar e exibir produtos em tempo real, incluindo avaliações e opções de parcelamento. |
| **Sistema de Cupons de Desconto**  | Aplicação de cupons de desconto no carrinho com feedback visual.                                             |
| **Paginação Eficiente**            | Paginação para exibir grandes listas de produtos de forma organizada e fluida.                              |
| **Criação de Contas**              | Permite criar e gerenciar contas de usuários, incluindo informações pessoais e preferências.                  |
| **Ícones Dinâmicos**               | Ícones atualizados em tempo real mostrando a quantidade de produtos no carrinho.                            |


## 📚 Stack Tecnológica

<img src="./github/menina.gif" min-width="100px" max-width="100px" width="300px" align="right" alt="Computador iuriCode">

### • Design

![Adobe Photoshop](https://img.shields.io/badge/adobe%20photoshop-%23051D34?style=for-the-badge&logo=adobe%20photoshop&logoColor=%233CA3F7)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)

### • Backend

[![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apache-maven&logoColor=white)
[![Spring](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)](https://spring.io/)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)


### • Mobile

![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Context-API](https://img.shields.io/badge/Context--Api-000000?style=for-the-badge&logo=react)
![Axios](https://img.shields.io/badge/Axios-%237261DF?style=for-the-badge&logo=axios&logoColor=white)

# ⚙ Pré-requisitos

## Certifique-se de ter o Node.js instalado

Antes de mais nada, verifique se você tem o Node.js instalado em sua máquina. Você pode baixá-lo e instalá-lo a partir do site oficial do Node.js:

[![NPM](https://img.shields.io/npm/v/npm.svg?logo=npm)](https://nodejs.org/en) 

## Instale o Expo CLI globalmente

Abra o terminal ou prompt de comando e execute o seguinte comando para instalar o Expo CLI globalmente em sua máquina:

```
npm install -g expo-cli
```

# 🚀 Como executar o projeto 🚀

## ⬇️ Clonar repositório git

```
git clone https://github.com/Denisson-Pereira/magazine-store
```

## 🏧 Backend

Após clonar o repositório, para acessar o backend, basta digitar o seguinte comando no terminal:

```
cd backend
```

Lembre-se de que os dados estão localizados, a partir da raiz do projeto, em database/Dump20240807.sql


## 📱 Mobile

Para acessar a pasta do projeto, digite no terminal o seguinte comando:

```
cd mobile
```

Após entrar na pasta, instale as dependências do projeto com o seguinte comando:

```
npm install 
```

Tudo pronto! para visualizar o projeto, digite:

```
npx expo start
```


# 📸 Visuals and Screenshots

Dê uma espiada no nosso projeto em funcionamento e esclareça todas as suas dúvidas sobre como executá-lo!

## 📱 Responsividade e Mobile

<div style="display: flex; gap: 10px;">
    <img src="./github/img0.png" alt="Mob 2" style="width: 30%;">
    <img src="./github/img1.png" alt="Mob 2" style="width: 30%;">
    <img src="./github/img2.png" alt="Mob 1" style="width: 30%;">
    <img src="./github/img3.png" alt="Mob 1" style="width: 30%;">
    <img src="./github/img4.png" alt="Mob 1" style="width: 30%;">
    <img src="./github/img5.png" alt="Mob 1" style="width: 30%;">
</div>

## 💻 Software em Ação

![Mob 1](./github/software.gif) 



## 📺 Editor de código

Neste projeto, foi utilizado o Visual Studio Code como editor de código.

[![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)](https://code.visualstudio.com/)



# 🚨 Aguarde! Ainda não terminou!

>Este projeto está atualmente em desenvolvimento, e está sujeito a futuras atualizações e melhorias conforme evolui. Estamos trabalhando para torná-lo ainda mais robusto e funcional ao longo do tempo. Agradecemos sua paciência e interesse nesta fase inicial.

>Além disso, gostaríamos de ressaltar que este projeto é aberto a contribuições de qualquer pessoa interessada em colaborar. Se você tem ideias, sugestões ou melhorias para oferecer, sinta-se à vontade para participar do desenvolvimento do projeto. Juntos, podemos criar algo incrível e beneficiar a comunidade de forma colaborativa.

## 📜 Licença

[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Denisson-Pereira/magazine-store/blob/main/LICENSE) 

## ✏️ Autor 

Denisson Pereira Santos

<div align='center'> 
<a href="https://www.linkedin.com/in/denisson-pereira" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white"  target="_blank"></a> 
<a href="https://denissonpereira.com" target="_blank"><img src="https://img.shields.io/badge/Meu%20Site-%2333cc33?style=for-the-badge&logo=fontawesome&logoColor=white&logoWidth=15&labelColor=black"  target="_blank"></a> 
<a href="https://github.com/DenissonPereira" target="_blank"><img src="https://img.shields.io/badge/GitHub-%23181717?style=for-the-badge&logo=github&logoColor=white&logoWidth=15&labelColor=black"  target="_blank"></a> 
<a href="https://www.instagram.com/denisson_pereira1?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white"></a>
</div>&nbsp;&nbsp;
# Devops 
Repositório disponibilizado pelo aluno Luis para exemplificação e aplicação do dockerFile 





<h1 align="center"> Projeto-FrontEnd </h1>
<h4 align="center"> FullStack [Itaguaçu] Módulo 1 - Projeto Avaliativo </h4>
<h2>INTRODUÇÃO</h2>

<h5>A LABPharmacy Inc, uma renomada empresa do ramo farmacêutico, está expandindo a sua
rede de lojas. Por conta da expansão, o time de gestão necessita da criação de um sistema
online, intitulado Pharmacy Central System, para gerenciamento de medicamentos e
farmácias. O seu perfil chamou a atenção dos gestores para a criação do protótipo front-end
do sistema que deverá ser codificado em React.</h5>

<h2>OBJETIVO</h2>
<h5>Criar um protótipo front-end do sistema Pharmacy Central System, utilizando React.
</h5>
<h1>
Minha solução da proposta
</h1>

    


https://user-images.githubusercontent.com/124309725/233802444-e15652a0-01e7-455c-a594-1cab3cfc72db.mp4







    

<h5>
Sei que gerenciar um estabelecimento com alta escalabilidade pode ser um grande desafio. Foi por isso que desenvolvi uma aplicação que pode ser rapidamente reconfigurada para atender às necessidades específicas do seu negócio
</h5>
<h5>
Com a Yoruzinho, poderá gerenciar facilmente sua empresa, desde o controle de estoque até outros pontos de vendas, tudo em uma plataforma intuitiva e flexível, aqui o ceu e o limite!.
</h5>
<h5>
Com sua interface amigável, consegue controlar seu negócio com facilidade e precisão, economizando tempo e recursos valiosos, imagine economizar tempo e dinheiro ao gerenciar o seu negócio utilizando os dispositivos que você e seus colaboradores já possuem. Com a Yoruzinho, isso é possível!
</h5>
<h5>
Desenvolvi uma solução responsiva, adaptada para telas grandes e pequenas, que permite que você e sua equipe gerenciem o seu negócio de forma fácil e prática a partir de qualquer dispositivo com acesso à internet. Por isso, aquele celular esquecido na gaveta pode ser transformado em um ponto de gestão eficiente e ágil.
</h5>
<h5>
<h5>
O melhor de tudo é que a Yoruzinho é altamente escalável, permitindo que adicione novos estabelecimentos e produtos sem qualquer dificuldade. Assim, poderá expandir seu negócio com confiança, sem se preocupar com a complexidade de gerenciar múltiplos pontos de venda.
</h5>
<h5>
Se você está procurando uma solução completa e integrada para a gestão do seu estabelecimento, experimente a Yoruzinho e descubra como ela pode transformar a gestão do seu negócio de forma simples e eficiente.
</h5>

</h5>
<h2>
Nome do app  
</h2>
<h3>
Yoruzinho Gestão
</h3>
<h4>
Yoruzinho é uma palavra composta , Yoru de "yoruga" que e uma gíria uruguaia e significa uruguaio, e zinho pelo diminutivo do português  , em homenagem ao minha querida terra natal e ao Brasil,para o projeto final do curso , a Yoruzinho está configurada para trabalhar com farmácias e medicamentos e chama-se Pharmacy Central System, mas isso pode ser facilmente configurado de acordo com a sua atividade no mercado.
<h4>
<h2>
Deploy
</h2>
<h5>
<a href="https://labpharmacyinc-pharmacy-central-syste.netlify.app">Visite a demo!</a>
</h5>
<h2>
<h1>Como utilizar</h1>  
  <h2>Vamos clonar o repositório para nosso PC</h2>
  <h3>Abra um terminal e execute os seguintes comandos...</h3>
    <h4>git clone git@github.com:Luis-Vilar/Projeto-FrontEnd.git</h4>
  <h6>É necessário ter uma chave SSH. Se não tiver, siga o tutorial no seguinte link:</h6>
<a href="https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account">Tutorial</a>
<h4>cd Projeto-FrontEnd/Yoruzinho</h4>
<h4>yarn</h4>
<h4>yarn dev</h4>

  <h5>Você deverá receber uma saída do terminal com o endereço local para acessar o site, como o seguinte:</h5>
  <h6>
 -$ yarn dev
 -yarn run v1.22.19
  $ vite
VITE v4.2.1 pronto em 1127 ms

Local: http://localhost:5173/

Network: use --host to expose

press h to show help

  </h6>
  <h4>Abra seu navegador e copie e cole o endereço (por padrão é http://localhost:5173/)</h4>
  <h4>Você deverá ver uma tela como a seguinte:</h4>

![image](https://user-images.githubusercontent.com/124309725/233236992-850a2276-4540-497b-84ac-78fb77f5f18f.jpg)

<h3>O e-mail pode ser qualquer um, desde que tenha um formato válido. Ainda não há suporte para usuários cadastrados.</h3>
<h3>A senha deve possuir 8 ou mais caracteres e pelo menos uma letra maiúscula ou minúscula</h3>
<h3>Se você fizer o login corretamente, será redirecionado para a próxima tela, onde teremos um mapa com as farmácias cadastradas.<h3>  
    
![image](https://user-images.githubusercontent.com/124309725/233237979-62fe8d45-355c-44c5-aa0f-5924551f7354.jpg)
    
<h3>Nos ícones que aparecem no mapa, ao clicar, será renderizado um modal com todas as informações cadastradas. Também há um hiperlink que, caso tenha um celular cadastrado e possua WhatsApp, você será redirecionado para um novo chat com o número cadastrado. Segue a próxima imagem.</h3>
    
![image](https://user-images.githubusercontent.com/124309725/233238873-d3b4fd28-fa24-4146-823a-48716ff9ca86.jpg)
 
<h3>Nos formulários de cadastro, os campos são controlados. Há alguns opcionais e outros obrigatórios. No entanto, como pode ser visto, eles fornecem feedback. No formulário de estabelecimento, quando o CEP é inserido, as informações de bairro, cidade, estado e logradouro são carregadas automaticamente.</h3>

![image](https://user-images.githubusercontent.com/124309725/233241423-ebf0285d-6fb9-4d59-8ddd-e7a3c9396131.jpg)

![image](https://user-images.githubusercontent.com/124309725/233241508-2ea0d3de-0c07-4a46-8f8e-9ea9b75749b2.jpg)

<h3>Quando estiver na lista de medicamentos, você poderá realizar uma busca pelo nome do medicamento. Basta digitar algumas letras e clicar no botão buscar e o sistema renderizará todos os medicamentos que contenham essas letras em seu nome. Veja a imagem abaixo como exemplo:</h3>
    
![listamedicamentos](https://user-images.githubusercontent.com/124309725/233242464-536e4937-2c7d-4295-9468-44016af3d779.jpg)

<h3>Resultado de uma busca com a palavra 'as':</h3>
    
![image](https://user-images.githubusercontent.com/124309725/233242726-d47a75d4-4b62-4286-b466-77075b3e2e56.jpg)
    
<h3>Ao clicar em "ver mais", aparecerá um modal com todas as informações do medicamento, como na seguinte imagem:</h3>
    
![modalproduto](https://user-images.githubusercontent.com/124309725/233246256-ce8d1a9f-e083-4dd1-ae44-ec12287e2b38.jpg)
    
<h1>Criando uma API e configurando nosso app para consumi-la.</h1>
    
<h3>Crie uma conta na REPLIT</h3>
    
<a href="https://replit.com/">Click aqui</a>


![homereplit](https://user-images.githubusercontent.com/124309725/233482289-62cd714d-03c9-4042-be95-ea91d75977b4.jpg)

<h3>Vamos criar um novo repl com Node.js</h3>
    
![criar replit1](https://user-images.githubusercontent.com/124309725/233482643-ff39cc8b-bf8e-4775-a26d-7bb04a5eb71d.jpg)
        
![criar repl2](https://user-images.githubusercontent.com/124309725/233482961-d6a6ad46-8771-46fe-8fde-3e3be6cc1557.jpg)

<h3>Edita o arquivo index.js ele deve ficar exatamente igual que a seguinte imagem :</h3>
    
![criar repl3](https://user-images.githubusercontent.com/124309725/233485699-6f1ac326-1043-407e-b63b-6b17c1587f69.jpg)

<h3>Cria um arquivo de nome db.json ele deve ficar exatamente igual a seguinte foto :</h3>
    
  ![criar repl 4](https://user-images.githubusercontent.com/124309725/233486236-343fdb50-30ef-42c8-b288-2b4d4e5fe687.jpg)


<h3>Click en Run</h3>
    
![run](https://user-images.githubusercontent.com/124309725/233486937-cac8bdc9-e8db-4b06-a433-b28ffbde715f.png)

<h3>ficara assim</h3>
    
![segundo run](https://user-images.githubusercontent.com/124309725/233487085-cbaae8c3-8de3-44b1-b750-3d95f7a01b64.jpg)
    
<h3>Copie a URL que aparece na aba WebView.. ela e o endereço do seu API, observe a seguinte foto</h3>
    
![urldoserver](https://user-images.githubusercontent.com/124309725/233487775-d176c68c-c243-4b02-8067-d5249bd7bab6.jpg)

<h1>Pronto! seu API esta no AR!, so falta configurar a variável no código do projeto que clono anteriormente</h1>
    
<h3>Por favor, abra o seu editor de preferência e modifique a variável "url" presente no arquivo ContextProvider.jsx localizado na pasta "context". Certifique-se de que a variável esteja envolta por aspas, como por exemplo "https://sua_url.repl.co". Após realizar a modificação, salve o arquivo e abra um terminal. </h3>
       
![configde url](https://user-images.githubusercontent.com/124309725/233489982-0b9ed64a-7bd2-4953-b292-b8cb9ea42dd7.jpg)

<h3>Para criar o deployment e rodar o servidor localmente, execute os seguintes comandos:

- Execute o comando "yarn build" para criar o build do aplicativo.

- Em seguida, execute o comando "yarn preview" para rodar o servidor localmente.

Certifique-se de que os comandos estejam sendo executados corretamente, seguindo as instruções indicadas na seguinte foto :</h3>

![deploymentconsola](https://user-images.githubusercontent.com/124309725/233494713-97914da3-5fa9-4244-8731-f2682cf3b951.jpg)

<h3>Após executar o comando adequado, será possível acessar o endereço que está sendo exibido no terminal, por padrão http://localhost:4173, por meio de um navegador web. Nesse endereço, você poderá visualizar o build do aplicativo e realizar testes, como adicionar estabelecimentos e produtos, para verificar se os dados estão sendo corretamente cadastrados no API. Caso esteja tudo correto, você poderá fazer o upload do seu aplicativo para um serviço de hospedagem online.Se você possuir conhecimentos técnicos, poderá fazer um fork deste repositório e hospedá-lo na Netlify ou no serviço de Hosting que você preferir para disponibilizar seu aplicativo online de forma fácil e eficiente., a Netlify também oferece a opção de Build Manual. Para isso, basta subir apenas a pasta dist, que é criada ao executar o comando yarn build. Recomendamos a utilização da Netlify devido à sua eficiência e facilidade de uso, segue o tutorial no YouTube :
<h3/>
       
[![Title](https://user-images.githubusercontent.com/124309725/233505860-c3a7a205-03b7-4198-a03c-126433d7a64b.png)](https://www.youtube.com/embed/etZ9HSUoTPU)

<h1>
Tecnologias utilizadas
</h1>
<h5>

![image](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)![image](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)![image](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)![Image](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)![image](https://img.shields.io/badge/Git-E34F26?style=for-the-badge&logo=git&logoColor=white)![image](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)![Replit](https://img.shields.io/badge/Replit-DD1200?style=for-the-badge&logo=Replit&logoColor=white)![image](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

- React : é uma biblioteca de JavaScript para a criação de interfaces de usuário interativas. O React é utilizado em todo o seu projeto para fornecer uma experiência de usuário fluida e dinâmica.

- React Bootstrap : uma biblioteca de componentes do React que se integra com o Bootstrap. É utilizado para criar componentes personalizados, como botões e cartões, que se ajustam ao estilo visual do Bootstrap.

- React Leaflet : uma biblioteca de componentes do React que se integra com o Leaflet. É utilizado para criar mapas interativos em seu aplicativo web.

- React Router DOM : uma biblioteca do React para a criação de rotas em um aplicativo web. É utilizado para criar rotas dinâmicas em seu aplicativo e permitir a navegação entre as diferentes páginas.

- Styled Components : uma biblioteca do React para a criação de componentes personalizados e estilizados com CSS. É utilizado para fornecer estilos personalizados aos componentes do seu aplicativo web.

- Vite é uma ferramenta de construção de projetos de front-end que permite a criação rápida e fácil de aplicativos web modernos. É utilizado em seu projeto para gerenciar o desenvolvimento local e a criação de builds otimizadas para produção.

- Replit é uma plataforma online que permite aos desenvolvedores escrever, executar e colaborar em projetos de programação em várias linguagens de programação, incluindo Python, JavaScript, Ruby e muitas outras.

- Netlify é uma plataforma de hospedagem de sites e aplicativos que permite aos desenvolvedores hospedar seus projetos na web de forma rápida e fácil.

- Git é um sistema de controle de versão distribuído de código aberto e gratuito. É utilizado em seu projeto para gerenciar o versionamento do código e permitir que você e sua equipe trabalhem em conjunto no desenvolvimento do aplicativo.
</h5>

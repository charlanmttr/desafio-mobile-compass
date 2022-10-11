# Desafio Mobile - App de banco (React Native) 
Utilizando a nossa API, você deverá criar uma app que apresente o saldo e as movimentações financeiras de um usuário, uma tela com os detalhes da movimentação selecionada e a opção de compartilhamento do mesmo. O layout deverá ser semelhante ao apresentado neste README. Legal, certo?

Pense no desafio como uma oportunidade de mostrar todo o seu conhecimento. Faça-o com calma! Vamos avaliar como você lida com as seguintes situações:

- Consumo de APIs;
- Construção de Layout a partir de um modelo de tela;
- Persistência de dados (Ocultar saldo);
- Estruturação de layout;
- Lógicas de apresentação de variações de layout;
- Fluxo da aplicação.

Os pré-requisitos para React Native são:
- Usar a versão mais recente do React Native React Native · Learn once, write anywhere
- Usar o style guide do AirBnB para React / Javascript
- Reforçar o style guide utilizando ESLint ou ferramenta similar
- Utilizar functional components

**Features**
- Tratamento de erros e apresentação de: Error genérico, loading;
- Buscar saldo da rota myBalance;
- Ao tocar no ícone de olho do saldo, o mesmo deve ser escondido e apresentado conforme modelo de tela anexado. OBS: Esta flag deverá ser persistida.
- Buscar lista de itens do extrato da rota myStatement com paginação de 10 itens por request(scroll infinito);
- Ao tocar em um item do extrato deverá abrir uma tela de detalhes.
- A tela de detalhes deverá consumir a rota de myStatement/detail informando o id do item selecionado como parâmetro;
- Ao tocar no botão de compartilhar, deverá ser compartilhada a imagem da área de informações do comprovante abrindo a alert padrão da plataforma.

**Api:** Documentação: https://bank-statement-bff.herokuapp.com/
**Layout:** Figma URL
**Icones:** https://www.iconfinder.com/iconsets/zondicons

Em desenvolvimento por  **Charlan Matter**.
Mais infos: https://compasso.sharepoint.com/teams/arena.modernmobileapp/SitePages/Mobile-Hub.aspx

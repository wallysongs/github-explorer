# Github Explorer

O Github explorer foi desenvolvido com react utilizando typescript.
Ele possui simples funcionalidades, como pesquisar por um repositório, pesquisando pelo responsável seguido de / e nome do projeto,
Exemplo: facebook/react
Ao realizar a consulta ele irá adicionar o projeto a lista de projetos. As informações ficam salvas no localstorage, para que você possa
consultar os projetos no futuro. Ao clicar em projeto da lista, ele irá carregar as informações do projeto, quantidade de estrelas,
quantidade de forks e a quantidade de issues abertas.
Logo abaixo irá listar algumas issues, ao clicar em uma dessas issues você sera redirecionado para a pagina da issue no github.

## Scripts disponíveis

No diretório do projeto, você pode executar:

### 'yarn start'

Executa o aplicativo no modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para vê-lo no navegador.

A página será recarregada se você fizer edições.
Você também verá quaisquer erros de fiapos no console.

### 'yarn build'

Constrói o aplicativo para produção na pasta 'build'.
Ele empacota corretamente React no modo de produção e otimiza a compilação para o melhor desempenho.

A compilação é minificada e os nomes dos arquivos incluem os hashes.
Seu aplicativo está pronto para ser implantado!

Consulte a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para obter mais informações.

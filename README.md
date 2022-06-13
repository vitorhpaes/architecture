# Front-end architecture
"Software architecture is, simply, the organization of a system. This organization includes all components, how they interact with each other, the environment in which they operate, and the principles used to design the software. In many cases, it can also include the evolution of the software into the future." <br/>

## Installation and QuickStart:

```
cd ./{path-to-architecture}
yarn install (or npm i)
```
 
Depois de instalar as dependências do projeto, temos que fazer uma configuração:

No seu sistema operacional, irá precisar apontar alguns "domínios" para que o seu OS entenda que deve apontar para ```localhost``` ou ```127.0.0.1```.
Todo sistema operacional tem um arquivo de configuração dessas rotas. Abaixo segue o arquivo do OS Linux Ubuntu para essa configuração

No linux, altere o seguinte arquivo: ```/etc/hosts```, adicionando as seguintes linhas:
```
127.0.0.1 local.documents.com.br
127.0.0.1 local.indicators.com.br
127.0.0.1 local.nonconformities.com.br
127.0.0.1 local.risks.com.br
```

Rodando o comando.:
<br/> 
```yarn dev (or npm dev)``` <br/>
Irá iniciar o projeto com a sua configuração default.

# Topics of this Front-end architecture
## Drivers
Quando se fala de Drivers na computação, estamos falando de adaptadores criados para que aquele OS seja funcionalmente compatível com o hardware.
Quando falamos dos drivers de uma arquitetura, estamos falando de adaptadores criados para que o navegador e seus atributos fornecidos sejam funcionalmente
compatíveis com o software. 
Métodos de leitura dos dados são criados para que haja um padrão no consumo dos mesmos. Esses caras vão dizer muitas vezes como as coisas devem funcionar
em relação à alguns atributos:
- Leitura de módulo (qual módulo está sendo executado nessa instância?)
- Leitura de ambiente (qual o ambiente atual?)
- Leitura de local (qual é a linguagem e padrões locais sendo executados nessa instância?)
- Leitura do dispositivo (qual é o dispositivo que está acessando essa instância?)

A partir dessas leituras, serão tomadas decisões dentro do código.
Dessa forma, podemos alterar as coisas com certa facilidade, exemplo.: 
Queremos mudar a leitura do módulo atual para a "https://app.qualyteam.com.br/documents"
Basta alterar a função de leitura modular para que seja adaptado.
Dessa forma, podemos até criar uma infra que aponte os subdomínios para a mesma aplicação, porque a responsabilidade dessa decisão agora é do código.

## Layout Layer
A camada layout será a camada que vai consumir as demais, entregando o valor final. Todo o restante da arquitetura é montada para que aqui,
os devs não tenham dificuldades para tnato acessar quanto gerenciar estados, queries, traduções, configurações de ambiente e qualquer outra funcionalidade 
que precise ser adicionada.

#### Tópicos à serem discutidos antes do início da migração dessa camada
- Quais bibliotecas irão nos trazer facilidade e encapsulamento pra cá?
- Porque devemos levar em questão bibliotecas para essa layer?
- Porque devemos perder o anti-padrão criacional custom.
- Com que frequência devemos implementar custom hooks, e porque eles serão e devem ser exceção.

## Global State Layer
A camada de estado global da aplicação é controlada por redux, e acessada pelo react através da biblioteca redux-toolkit. A partir disso, temos dois métodos
padrão para acesso ao estado: ```useAppSelector & use{moduleName}Selector```. E o método padrão para criar a ferramenta handler da alteração de algum estado: 
```useAppDispatcher();```, cujo método vai ser utilizado disparando uma função pré-configurada nos ```{prefix}/slices``` podendo ```prefix``` ser ```./src/state```,
para referenciar ao estado da aplicação como um todo
ou ```./src/modules/{moduleName}/state``` para o módulo em questão. 
Essa separação, servirá para que não tenhamos muito lixo no estado da aplicação, configurando a criaçao desse estado dependendo diretamente do módulo que está sendo executado.

Exemplo de código na camada Layout, ou SDK: 
```
const { documents } = useDocumentsSelector(state => state.example)
const { token: userToken, ...user } = useAppSelector(state => state.app.user)

const dispatch = useAppDispatcher()
const handleSetUserToken = (newToken: string) => dispatch(setUserToken({ token: newToken }))
```
#### Porque redux e contextAPI não são concorrentes: https://www.youtube.com/watch?v=KRQmSw5wN0s&t=1s&ab_channel=Codeminer42

#### Tópicos à serem discutidos antes do início da migração dessa camada
- Qual lib de gerenciamento de estado deve ser utilizada? 
- A partir de qual momento um estado local deve virar um estado global ou modular?
- Boas práticas da camada
- Até onde é a responsabilidade dessa camada?
- Algumas alternativas ao redux-toolkit e designação de seus advogados. 
  - MobX React: https://mobx.js.org/react-integration.html
  - Zustand React: https://github.com/pmndrs/zustand
  - ...

## SDK and Services Layer
Talvez a camada mais importante. Os dados são a questão aqui. Essa camada foi planejada para fornecer mais facilidade para lidar com os dados, 
principalmente para a camada Layout. A utilização da library ```react-query``` é essencial para essa facilitação e encapsulamento. <br/>
Essa camada foi codada pensando em alguns design patterns
- Organizational pattern - Adapter: https://refactoring.guru/pt-br/design-patterns/adapter
  A normalização dos dados fornece para o front-end uma independência maior. Todo dado que entra na aplicação, passa por um adapter, por mais que
  o mesmo seja simples. É importante porque, no momento da entrada deste dado, é definido uma interface para ele ser consumido nos demais pontos do sistema.
  
- DIP Pattern: Dependency Inversion Principle.
  Resource: https://www.youtube.com/watch?v=jmcx3b78V8s&t=2s&ab_channel=GoogleDeveloperGroups
  Ao seguir esse padrão criacional, asseguramos que nossa camada services terá sua função mais ampla, porém escopada.
  Ao criar uma query, ela deve ser interpretada como um "high level module", que, como explicado no vídeo acima, é limpo e independente e por fim, 
  segue os mesmos padrões criacionais de qualquer outra query. 
  Assim, asseguramos que a leitura e adaptação do payload em questão não será um problema, a não ser que seja ele o único. 
  Isso diminui o índice de volatilidade do código, fazendo com que os códigos dessa camada sejam mais estáticos e duradouros.
  Ajuda à solucionar bugs: quando o assunto é o isolamento situacional, há um fluxo definido, o que traz ao dev a possibilidade de enxergar por
  quais etapas aquele código/dado passou e onde o bug pode ser gerado. 
    
  Cada uma das queries que são disparadas vira um hook a ser utilizado pela camada layout. 
  - Exporta funções que remetem ao tipo de querie que está sendo disparada. 
  - Diminui a necessidade de estados locais e globais.
  - Evita e encapsula estados repetitivos. 
  - Fornece controle de cache.
  - Fornece um devtool para análise do seu funcionamento geral: https://react-query.tanstack.com/devtools.
  - Principais métodos/hooks a serem estudados: useQuery, useMutation, useInfinityQuery (paginação infinita)

## Locale Layer
Camada responsável por distribuir funções para aplicação de tradução, aplicação de máscaras e qualquer outro atributo que depende do local 
em que a aplicação está sendo executada, ou (no nosso caso) ao local que o usuário escolheu consumir. Lembrando que este critério é definido por um driver: ```locale.ts```.
Encapsula algumas funções das mais utilizadas dentro do sistema: ```translate```.


### Toda sugestão será bem-vinda, sugiro que apliquemos o seguinte método:
Alguns tópicos trarão alternativas viáveis. Ao se deparar com uma ferramenta ou pattern em um ponto de vista alternativo, vale a pena trazer o tópico a ser discutido.
Deve ser agendada uma talk para que as alternativas tomem seu tempo para serem estudadas e implementadas em mini POC's. Assim, na discussão iremos conseguir entender em grupo
quais os parâmetros importantes para a decisão, direcionando a reunião para os mesmos à tornando mais objetiva. Irá ajudar a entender os tradeoffs de cada uma alternativa.
E sujiro que, em grupo em outra talk ou até mesmo na mesma, a alternativa ou merge de alternativas escolhida seja estruturada a nível  de código e 
adaptada à arquitetura, para que todos entendam o seu funcionamento raiz e sejam mais eficazes na hora de consumir seu valor final.





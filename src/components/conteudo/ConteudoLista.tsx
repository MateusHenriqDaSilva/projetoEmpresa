import kitImagem from '../../../public/kit.png'
import transportadoraImagem from '../../../public/transportadora.png'
import estoqueImagem from '../../../public/estoque.jpg'
import hepdeskImage from '../../../public/helpdesk.jpg'
import fiscalImage from '../../../public/fiscal.jpg'
import admImage from '../../../public/adm.jpg'
import relatorioImage from '../../../public/relatorio.jpg'
import dadosImage from '../../../public/dados.png'
import pdvImage from '../../../public/pdv.jpg'
import siteImage from '../../../public/site.jpg'
import financeiroImage from '../../../public/financeiro.jpg'
import comprasImage from '../../../public/compras.jpg'
import etiquetasImage from '../../../public/etiquetas.png'
import cadastroBaseImagem from '../../../public/cadastroBase.png'

type IDadosCartao = {
    id: number,
    nome: string,
    categoria: string[],
    imagem: any,
    passos: Array<Array<string>>
    imagensVinculadas?: any
}

export const dadosCartao: IDadosCartao[] = [
    {
        id: 1,
        nome: 'Saber se o produto pertence a algum kit',
        categoria: ['todos','kit'],
        imagem: kitImagem,
        imagensVinculadas: [
            { url: "../kit1.png" },
            { url: "../kit2.png" },
        ],
        passos: [
            ['Navegue ate Cadastros -> Estoque -> Produtos -> Produtos'],
            ['Pesquise pelo nome ou codigo do produto e clique com o direito sobre o produto va ate a opção Visualizar Presenca e Composicoes'],
        ]
    }, {
        id: 2,
        nome: 'Criando um kit com seu preco de venda',
        categoria: ['kit','todos'],
        imagem: kitImagem,
        imagensVinculadas: [
            { url: "../kit1.png" },
            { url: "../kit2-2.png" },
            { url: "../kit2-3.png" },
            { url: "../kit2-4.png" },
            { url: "../kit2-5.png" },
        ],
        passos: [
            ['Navegue ate Cadastros -> Estoque -> Produtos -> Produtos'],
            ['Clique no icone de + para inserir'],
            ['Preencha o nome do KIT, tenha a liberdade para preencher o campo que quiser, nao esqueca de prencher o preço de venda e custo, então navegue ate a aba impostos'],
            ['Na aba imposto preencha o NCM , para testar exemplo: 00 e navegue ate as setas botao direito do mause, clique em composição'],
            ['No campo Porcentual deixe como 0,00 e preencha os produtos colocando sua porcentagem reateio no kit lembrando que o total sera 100% Grave os produtos conforme voce desejar basta clicar em confirmar e salvar que estara CRIADO o kit'],
        ]
    }, {
        id: 3,
        nome: 'Importar cadastros de produtos no ERP',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../importacao1.png" },
            { url: "../importacao2.png" },
            { url: "../importacao3.png" },
            { url: "../importacao4.png" },
            { url: "../importacao5.png" },
        ],
        passos: [
            ['No menu cadastro va até Estoque -> Produtos -> Importação de Produto'],
            ['Clique em exportar modelo e salve na pasta que voce deseja, clique em sim para abrir, lembre de salvar o arquivo em formato XLS'],
            ['Agora edite conforme desejado'],
            ['na tela importacao de produto, clique em selecionar na pastinha, selecione a planilha lembrando que o arquivo deve ser xls'],
            ['carregue o arquivo e clique em incluir produto, pronto o produto sera incluido'],
        ]
    }, {
        id: 4,
        nome: 'Como cadastrar fotos no produto',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../produtos1.png" },
            { url: "../produtos4-2.png" },
            { url: "../produtos4-3.png" },
            { url: "../produtos4-4.png" },
            { url: "../produtos4-5.png" },
            { url: "../produtos4-6.png" },
        ],
        passos: [
            ['Navegue ate cadastro -> estoque -> produtos -> produtos'],
            ['Na aba inferior pesquise pelo nome ou id do produto, e todos os produtos serão listados, clique no icone alterar'],
            ['Botao direito sobre os icones de seta e navegue ate a aba foto, clique em adicionar foto'],
            ['Adicionar do arquivo, pesquise a imagem e selecione a imagem'],
            ['Clique em confirmar, descricao da foto normalmente é imagem base clique no icone de que esta tudo ok'],
            ['No campo posicao da foto se nao for a principal, preencha como 1 se for a principal preencha como 0, preencha as informações nescessarias']
        ]
    }, {
        id: 5,
        nome: 'Como exportar cadastro de produto',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../produtos1.png" },
            { url: "../produtos5-2.png" },
            { url: "../produtos5-3.png" },
        ],
        passos: [
            ['navegue ate cadastro -> estoque -> produtos -> produtos'],
            ['clique na aba browser, busque o produto pelo nome, clique em mostrar produtos filhos e clique em procurar'],
            ['no canto superior esquerdo, clique no icone de * antes do codigo, ira abrir um menuzinho clique em exportar, agora voce consegue trabalhar pelo excel'],
        ]
    }, {
        id: 6,
        nome: 'Como cadastrar tipo e categoria',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../tiposCategorias1.png" },
            { url: "../tiposCategorias2.png" },
        ],
        passos: [
            ['Navegue ate cadastro -> estoque -> tipo -> categoria/produtos'],
            ['clique em inserir no icone +'],
            ['campo nome coloque o titulo, caso tenha categoria superior, pai preecha embaixo conforme nescessario, para quem possui site seria bom preecher a palavra site, clique em gravar e esta tudo OK'],
        ]
    }, {
        id: 7,
        nome: 'Cadastro de Produtos',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../produtos1.png" },
            { url: "../produtos7-2.png" },
            { url: "../produtos7-3.png" },
            { url: "../produtos7-4.png" },
            { url: "../produtos7-5.png" },
            { url: "../produtos7-6.png" },
            { url: "../produtos7-7.png" },
            { url: "../produtos7-8.png" },
            { url: "../produtos7-9.png" },
            { url: "../produtos7-10.png" },
            { url: "../produtos7-11.png" },
        ],
        passos: [
            ['Navegue ate cadastro -> estoque -> produtos -> produtos'],
            ['clique sobre o icone de + para adicionar um novo produto'],
            ['Preecha o nome do produto, preencha o fabricantes, F12 sobre o campo  ele ira listar fabricantes ja cadastrados, em tipo/categoria selecione a categoria F12 ele ira listar as categorias, Na aba precos voce coloca o preco de custo e venda, Navegue ate aba Tributação'],
            ['O produto vem com o CFOP 5102 venda mercadoria dentro do estado por padrao, se for para fora do estado o sistema troca automaticamente fora da nota, Navegue ate impostos'],
            ['Preencha o NCM, e o FCP caso tenha imposto, proxima aba SITE'],
            ['No site voce pode preencher os campos como: vender sem estoque, taxa de venda, e nao esquecer de tickar Enviar ao Site, Navegue até aba DETALHES'],
            ['Voce pode tickar se deseja controlar estoque, aonde sera comercializado os seus produtos loja fisica ou site, se o produto esta ativo ou nao, dimensoes de tamanho, Proxima aba Textos'],
            ['Na aba texto voce pode aumentar o Ceo com Flags para sites, proxima aba Grade'],
            ['Grade horizontal para preecher cor: azul, preto, amarelo, Grade vertical tamanho, P, M, G, Clique no botao confirmar, abrira uma tela'],
            ['Voce pode variar o preco conforme a grade, clique em confirmar para abrir uma nova tela'],
            ['ative os produtos conforme as variacoes, preecha variacao e sub variacao para o site, voce tambem pode escolher entre prevalecer preco da grade ou do pai preste atencao aqui, na aba visualizacao do site observe o prevalecer preco, PAI -> para puchar o preco somente do produto pai ou GRADE -> pucha o preco conforme a grade para quem tem grade essa opcao é a melhor, mesmo para prevalecer promoção'],
            ['lembrando na aba detalhes o peso do produto nao pode ficar zerado -> para visualizar o produto com grade basta tickar mostrar grade'],
        ]
    }, {
        id: 8,
        nome: 'Como cadastrar kits de produtos conforme o preco do produto',
        categoria: ['kit','todos'],
        imagem: kitImagem,
        imagensVinculadas: [
            { url: "../kit1.png" },
            { url: "../kit2-2.png" },
            { url: "../kit3-3.png" },
            { url: "../kit2-4.png" },
            { url: "../kit3-5.png" },
        ],
        passos: [
            ['Navegue ate Cadastros -> Estoque -> Produtos -> Produtos'],
            ['Clique em + para inserir'],
            ['Preecha com o nome do KIT, preco do produto nao é nescessario pois assim somara os produtos compostos no kit, e navegue ate a aba impostos'],
            ['Na aba imposto preencha o NCM , para testar exemplo: 00 e navegue ate as setas botao direito do mause, clique em composição'],
            ['Em composição preencha o porcentual e selecione os produtos que compoe o kit, dentro do kit voce pode dar desconto no produto'],
            ['basta gravar agora conforme os produtos preenchido, lembrando que para os itens somar os produtos ele precisa estar como 100% pois assim ele soma cada produto'],
        ]
    }, {
        id: 9,
        nome: 'Como abrir novo ticket no HelpDesk',
        categoria: ['helpdesk','todos'],
        imagem: hepdeskImage,
        imagensVinculadas: [
            { url: "../help1.png" },
            { url: "../help2.png" },
        ],
        passos: [
            ['Abra o site do HelpDesk na sua maquina, Do lado do menu esquerdo tem um icone + clique sobre ele e va em abrir Novo Ticket, selecione o tipo de serviço, selecione suporte'],
            ['caso o email nao exista, naveugue ate nova pessoa, preecha os campo abaixo, navego ate contato preencha o email, cadastre caso ela queira ter acesso ao painel, Conforme a categoria escolha, Ira abrir uma nova tela, No menu superior coloque o titulo, Conforme voce escreve ele abre opcoes'],
        ]
    }, {
        id: 10,
        nome: 'Como cadastrar variacao e sub variacao grade x e y de produto',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../grades1.png" },
            { url: "../grades2.png" },
            { url: "../grades3.png" },
            { url: "../grades4.png" },
            { url: "../grades5.png" },
            { url: "../grades6.png" },
            { url: "../grades7.png" },
        ],
        passos: [
            ['Arraste o icone da grade x, grade y e tipo de grade para area de trabalho ou navegue ate cadastro -> estoque -> produtos'],
            ['Abra o tipo de grade, clique no icone de + para inserir'],
            ['Em dados preecha nome da variacao, va em confirma e abra a tela de Grade X'],
            ['Clique em + para inserir uma nova grade X'],
            ['preencha as informacoes da nescessarias que voce precisa como Cor, Tipo da Grade que cadastramos, e abra a tela de Grade Y'],
            ['Clique em + para inserir uma nova grade y'],
            ['Pronto, agora temos grades adicionadas e basta preencher nos produtos']
        ]
    }, {
        id: 11,
        nome: 'Cadastrar tributacao',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../tributacao1.png" },
            { url: "../tributacao2.png" },
            { url: "../tributacao3.png" },
        ],
        passos: [
            ['navegue ate fiscal -> tributacao -> tributacao'],
            ['clique no icone de + para cadastrar uma nova tributacao'],
            ['preencha o nome como tributado, preencha os dados conforme orientado pelo contador, tambem é possivel colocar uma mensagem NFE'],
        ]
    }, {
        id: 12,
        nome: 'Cadastrar grupo de tributacao',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../grupoTributacao1.png" },
            { url: "../grupoTributacao2.png" },
            { url: "../grupoTributacao3.png" },
        ],
        passos: [
            ['Navegue ate o menu em fiscal -> tributacao -> grupo de tributacao'],
            ['Clique no icone + e abrira a tela dados'],
            ['De um nome para o grupo atual e depois voçê ira pesquisar o nome do grupo, No campo tributacao preecha o nome e em validade inicial quando comeca e quando ela termina, Origem é a empresa que vai emitir a nota, Selecione o estado e o regime tributario, A natureza da operacao, Selecione o estado o regime tributario tipo de destinatario, Lembrando que o sistema pega a tributacao do mais especifico para o mais generico, verifique o dados de origem caso tenha mais de uma empresa no sistema, pronto agora so gravar e esta tudo ok'],
            ['**Imposto sobre Importações (II)**'],
            ['**Imposto sobre Produto Industrializado (IPI)**'],
            ['**Imposto de Renda Pessoa Jurídica (IRPJ);**'],
            ['**Contribuição Social sobre o Faturamento das Empresas (COFINS);**'],
            ['**Contribuição para o Programa de Integração Social (PIS);**'],
            ['**Imposto sobre Circulação de Mercadorias e Prestação de Serviços (ICMS);**'],
            ['**Imposto Sobre Serviços (ISS), municipal.**'],
            ['**algumas tributacoes especificas**'],
        ]
    }, {
        id: 14,
        nome: 'Como cadastrar clientes de forma Simples',
        categoria: ['cadastro base','todos'],
        imagem: cadastroBaseImagem,
        imagensVinculadas: [
            { url: "../clientesSimples1.png" },
            { url: "../clientesSimples2.png" },
            { url: "../clientesSimples3.png" },
        ],
        passos: [
            ['Navegue ate cadastro clientes simples'],
            ['Clique no icone de + para inserir um novo cadastro'],
            ['Nessa tela voce cadastra o cliente de forma rapida e mais simples, preencha as informacoes conforme voce nescessitar.'],
        ]
    }, {
        id: 15,
        nome: 'Como cadastrar unidade de estoque',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../unidades1.png" },
            { url: "../unidades2.png" },
            { url: "../unidades3.png" },
        ],
        passos: [
            ['no menu superior va ate cadastro -> estoque -> produtos -> Unidade de Estoque'],
            ['clique no icone de + para inserir um novo cadastro'],
            ['preencha os dados que voce precisa por no cadastro de unidade, nao precisa preencher tudo e clique em gravar, pronto'],
        ]
    }, {
        id: 16,
        nome: 'Cadastrar usuarios',
        categoria: ['administrador','todos'],
        imagem: admImage,
        imagensVinculadas: [
            { url: "../usuario1.png" },
            { url: "../usuario2.png" },
            { url: "../usuario3.png" },
            { url: "../usuario4.png" },
            { url: "../usuario5.png" },
        ],
        passos: [
            ['navegue ate cadastros -> administrativo -> usuarios'],
            ['clique no icone de + para cadastrar um novo usuario'],
            ['digite o nome do usuario, preecha o login e senha do usuario e navegue na aba ate grupo de usuarios'],
            ['escolha o grupo cadastrado, preencha como Administradores, coloque o mause sobre o input e de um f12, ele abrira uma tela de listagem, Selecione o grupo de usuario e clique em confirmar, navegue ate açoes e permissoes de tela'],
            ['aqui sao parametros de usuarios, ticke os parametros conforme desejar, clique em gravar e a pessoa ja vai pode acessaro sistema'],
        ]
    }, {
        id: 17,
        nome: 'Cadastrar intermediador da operacao de marktplace',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../intermediador1.png" },
            { url: "../intermediador2.png" },
            { url: "../intermediador3.png" },
        ],
        passos: [
            ['Navegue ate Cadastros -> Financeiro -> Intermediador de Operação'],
            ['Clique no icone de + para cadastrar um novo Intermediador'],
            ['Clique em carregar origens, as origens estao vindo de um pedido do marktplace, plataforma, vinculando com o sistema e cadastrando um intermediador que sera responsavel por essas transações de pedidos vindo do site e vinculadas com o sistema, ticke o campo em somente selecionadas em origem do pedido, preecha o CNPJ do MarktPlace, preencha tambem o CNPJ do intermediador do pagamento, identificador cadastro intermediador: digite quem vai ter acesso ao painel, clique no icone certo e grava,origem externa é a conta real sua dentro do marktplace'],
        ]
    }, {
        id: 18,
        nome: 'Cadastrar grupo FCP',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../grupoFCP1.png" },
            { url: "../grupoFCP2.png" },
            { url: "../grupoFCP3.png" },
        ],
        passos: [
            ['Pesquisa na aba por FCP, Clique no icone de + para inserir'],
            ['Caso nao tenha a tabela entre em contato com o suporte, Preencha um nome para facil identificar, UF preecha data inicial e data final, Preencha aliquota % e clique em confirmar, Caso tenha observacao preecha a data confome a combinacao'],
        ]
    }, {
        id: 19,
        nome: 'Como cadastrar grupo de usuario no sistema',
        categoria: ['administrador','todos'],
        imagem: admImage,
        imagensVinculadas: [
            { url: "../grupoUsuario1.png" },
            { url: "../grupoUsuario2.png" },
            { url: "../grupoUsuario3.png" },
            { url: "../grupoUsuario4.png" },
            { url: "../grupoUsuario5.png" },
        ],
        passos: [
            ['navegue ate o menu superior em Cadastros -> Admnistrativo -> Grupo de Usuario'],
            ['Ja tera uns grupos padroes, selecione um grupo ja criado, e va ate o botao no inferior direito DIREITOS'],
            ['Nessa tela voce ira dar os direitos para grupo do usuario'],
            ['no sub menu embaixo tera as permissoes aonde voce escolhe qual permissao tera, desmarque as opções conforme o parametro'],
            ['no menu superior voce encontra as acoes voce pode tickar conforme desejar'],
        ]
    }, {
        id: 20,
        nome: 'cadastrar fornecedor',
        categoria: ['cadastro base','todos'],
        imagem: cadastroBaseImagem,
        imagensVinculadas: [
            { url: "../fornecedor1.png" },
            { url: "../fornecedor2.png" },
            { url: "../fornecedor3.png" },
        ],
        passos: [
            ['navegue ate cadastro -> estoque -> fornecedores'],
            ['clique no icone de + para cadastrar um novo fornecedor'],
            ['preecha com o titulo no campo nome, razao social do fornecedor, cnpj ou cpf, RG/IE clique na setinha e preecha o UF, anotacoes caso deseja preecher anotacao, icone de certo para gravar'],
        ]
    }, {
        id: 21,
        nome: 'Cadastrar fabricante',
        categoria: ['cadastro base','todos'],
        imagem: cadastroBaseImagem,
        imagensVinculadas: [
            { url: "../fabricante1.png" },
            { url: "../fabricante2.png" },
            { url: "../fabricante3.png" },
        ],
        passos: [
            ['naveegue ate cadastro -> estoque -> fabricante'],
            ['clique no icone + para inserir'],
            ['preecha o titulo do fabricante no campo nome, preencha os campos nescessario que voce quiser, clique em gravar'],
        ]
    }, {
        id: 22,
        nome: 'Como cadastrar aliqoota de ICMS por UF',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../icmsEstado1.png" },
            { url: "../icmsEstado2.png" },
            { url: "../icmsEstado3.png" },
            { url: "../icmsEstado4.png" },
            { url: "../icmsEstado5.png" },
        ],
        passos: [
            ['Navegue ate cadastro -> fiscal -> tributacao -> cadastro de ICMS por UF'],
            ['Quando entrar ja vai listar uma tabela cadastrada, duplo clique sobre icms listado'],
            ['Em negrito esta aliquota interna dos dados, altere conforme o estado a aliquota, tabela que mostra o ICMS por UF'],
            ['Para criar uma outra caso haja uma atualização na aliquota, Clique na tabela atual e va em duplicar'],
            ['Abra a tabela listada de ICMS e Preecha a vigencia inicial e vigencia final para dar entrada na tabela na data'],
            [`**entenda: aliquota interna operacoes dentro do estado e a interestadual 
            operacoes que inicia em um estado e se destinam a outro**`],
            ['**a destinatário, quando este for contribuinte do imposto**'],
            ['**ao remetente, quando o destinatário não for contribuinte do imposto**'],
        ]
    }, {
        id: 23,
        nome: 'Aplicar desconto em KIT de produtos ou fazer ACRESCIMO',
        categoria: ['kit','todos'],
        imagem: kitImagem,
        imagensVinculadas: [
            { url: "../kit1.png" },
            { url: "../kit23-2.png" },
            { url: "../kit23-3.png" },
            { url: "../kit23-4.png" },
        ],
        passos: [
            ['Navegue ate Cadastros -> Estoque -> Produtos -> Produtos'],
            ['Procure o KIT abra ele e navegue ate composição'],
            ['para aplicar DESCONTO voce precisa retirar do total a porcentagem do desconto'],
            ['para aplicar ACRESCIMO voce precisa colocar do total a porcentagem do acrescimo, basta gravar novamente e esta tudo ok'],
        ]
    }, {
        id: 25,
        nome: 'relatorio de estatisticas de vendas',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../relatorio1.png" },
            { url: "../relatorio2.png" },
            { url: "../relatorio3.png" },
            { url: "../relatorio4.png" },
        ],
        passos: [
            ['Navegue ate relatorios -> apoio gerencial -> relatorios estatistica de venda'],
            ['No canto inferior esquerdo digite o periodo, mais abaixo voce pode tickar se e faturada ou nao'],
            ['No menu superior para esconder o campo, basta clicar com direito e depois esconder, voce tambem pode arrastar o campo para area de listagem para mostrar'],
            ['Clique em exportar ou em imprimir caso nescessitar'],
        ]
    }, {
        id: 26,
        nome: 'Dicionario De Dados',
        categoria: ['dados','todos'],
        imagem: dadosImage,
        imagensVinculadas: [
            { url: "../dicionarioDeDados1.png" },
            { url: "../dicionarioDeDados2.png" },
            { url: "../dicionarioDeDados3.png" },
        ],
        passos: [
            ['navegue ate cadastros -> outros -> dicionarios de dados'],
            ['clique no icone de + para criar uma nova alteracao de dados em massa'],
            ['seleciona o que voce deseja exemplo PRODUTOS, clique no icone alterar, representa todos os campos da tabela produto, voce pode colocar e preencher descricao conforme o campo do jeito que voce quiser.'],
        ]
    }, {
        id: 27,
        nome: 'Fazer curva ABC dos produtos',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../produtos1.png" },
            { url: "../curvaABC2.png" },
            { url: "../curvaABC3.png" },
        ],
        passos: [
            ['navegue ate cadastro -> estoque -> produtos -> produtos'],
            ['navegue ate a aba curva ABC'],
            ['comece clicando preenchendo o periodo que voce quer filtrar de movimentacoes de produto, em porcentuais para calculo da curva, voce pode alterar como sera feito o calculo, preencha a arvore de tipos de produtos, selecione a empresa, clique em calcular para listar, apos listado no campo em azul voce pode filtrar conforme a curva, curva de giro ou curva de quantidade ou curva de valor, filtrando por A -> B -> C, aqui voce pode ver e avaliar suas movimentacoes em curva ABC'],
        ]
    }, {
        id: 28,
        nome: 'Como utilizar tela vendas balcao simples',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendas1.png" },
            { url: "../vendas2.png" },
            { url: "../vendas3.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> vendas -> vendas'],
            ['Clique no icone de + para cadastrar uma nova venda'],
            ['Se nao marca nenhum dos dois sera feito uma venda'],
            ['opcao orcamento ele nao separa no estoque o produto! para separar no estoque o produto marque, como reservado'],

        ]
    }, {
        id: 29,
        nome: 'Como utilizar tela de vendas gerenciamento',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendasGe1.png" },
            { url: "../vendasGe2.png" },
        ],
        passos: [
            ['Navegue ate o menu movimentos -> vendas -> vendas gerenciamentos'],
            ['Data para filtros vendas ou nota fiscal'],
            ['Data para ver os pedidos conforme a data'],
            ['Nos 3 pontinhos para selecionar uma lista de codigos'],
            ['Pode pesquisar por status'],
            ['Clique em procurar para ver os pedidos'],
            ['Prefaturamento mostra o espelho da venda'],
            ['Conferencia confere o item caso voce queira'],
            ['Marca os pedido clica em notas'],
            ['Ele gera nota fiscal para voce fazer a impressao'],
            ['Etiquetas para ver os tipos de etiquetas'],
            ['Selecione a transportadora conforme desejado'],
            ['Clique no verdinho ele ja preeche a transportadora'],
            ['Acompnhamento serve para acompanhar o status codigo de envioda transportadora'],
            ['Alterar status marco eles e depois altero']
        ]
    }, {
        id: 30,
        nome: 'Como processar o numero de objetos(rastreio) massivamente atraves da tela vendas',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendasGE1.png" },
            { url: "../vendasGE30-2.png" },
            { url: "../vendasGE3.png" },
        ],
        passos: [
            ['navegue ate menu movimentos -> vendas -> vendas gerencimentos'],
            ['va ate mais opcoes -> processar objetos correios'],
            ['clique em colar lista e digite n venda ou n pedido n serie para busca'],
            ['clique em confimar, clique em gravar'],
        ]
    }, {
        id: 31,
        nome: 'Como lançar inventario no master',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../inventario1.png" },
            { url: "../inventario2.png" },
            { url: "../inventario3.png" },
        ],
        passos: [
            ['Navegue no menu superior movimentos -> lancamentos de inventario'],
            ['clique no icone + para cadastrar um novo inventario'],
            ['preecha o nome na observacao, data, selecione a empresa, local aonde o estoque fica, selecione os produtos nescessario e clique em adicionar, clicando nos 3 pontinhos voce pode importa para o sistema varios produtos ao mesmo tempo, ele exporta com codigo de barra e quantidade'],
        ]
    }, {
        id: 32,
        nome: 'Como importar vendas',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../impVendas1.png" },
            { url: "../impVendas2.png" },
        ],
        passos: [
            ['navegue ate movimentacao -> vendas -> importacao de venda'],
            ['carregar planilha'],
            ['e automaticamente ele importa as duas venda da planilha'],
        ]
    }, {
        id: 33,
        nome: 'Como extrair o relatorio da EC 87',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../relatorioEC1.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue no menu superior relatorios -> vendas -> ec/87-2015 na aba em cima'],
            ['coloque um periodo na data'],
            ['botao direito ao lado e selecione marcar todos caso precise'],
            ['clique em gerar XML'],
            ['deixe a receita vazia de RJ, SP, ES'],
            ['preecha a data prevista para pagamento'],
            ['navegue ate a sefaz de pernambuco'],
            ['Clique em GNRE online'],
            ['Processar lote selecione o arquivo'],
            ['preecha o email nescessario'],
            ['confirma e depois processa'],
            ['consulta o lote e digite o codigo de validacao'],

        ]
    }, {
        id: 34,
        nome: 'Como criar um modelo de tarefa',
        categoria: ['administrador','todos'],
        imagem: admImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['no menu cadastro, pesquise por importacao de produto'],
            ['arraste o icone para area de trabalho'],
            ['Dois clique e abra a tela'],
            ['clique em exportar modelo '],
            ['salve na pasta que voce deseja'],
            ['agora edite conforme desejado'],
            ['lembre de salvar o arquivo em formato XLS'],
            ['na tela importacao de produto'],
            ['clique em selecionar na pastinha'],
            ['selecione o arquivo xls'],
            ['carregue o arquivo'],
            ['clique em incluir produto'],
            ['e pronto o produto sera incluido'],
        ]
    }, {
        id: 36,
        nome: 'Centro de alteracao de dados',
        categoria: ['dados','todos'],
        imagem: dadosImage,
        imagensVinculadas: [
            { url: "../centroAlteracaoDados1.png" },
            { url: "../centroAlteracaoDados2.png" },
        ],
        passos: [
            ['Navegue ate outros -> Centro de alteracao de dados'],
            ['Selecione a tabela que ja esta cadastrada no dicionario de dados, coloque intervalo de codigos caso nescessite, pode tambem selecionar entre variacoes de codigo, Opcoes de filtragem para personalizar, na setinha abrira parametros de escolha, Voce tambem pode pesquisar por categoria conforme 1 categoria especifica, selecione os campos de alteracao tickando os e depois clique sobre o campo que ira alterar preencha e clique em aplicar, Voce tambem pode aplicar as alteracoes para os filhos no inferior da tela e clique em alterar.'],
        ]
    }, {
        id: 37,
        nome: 'cadastro de tarefa para usuarios',
        categoria: ['administrador','todos'],
        imagem: admImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navuegue ate cadastro -> administrativo -> tarefa'],
            ['clique no icone de + para cadastrar'],
            ['preecha o nome da tarefa em descricao'],
            ['na aba modelo selecione o modelo da tarefa'],
            ['clique no verdinho para inserir'],
            ['tarefas n tarefas para essa tarefa'],
            ['no menu esquerdo janela fica o menu notificacoes'],
            ['la estara listado as tarefas'],
            ['clique em concluir e finalizar'],
            ['no botao do meio existe a possibilidade de transferir a tarefa'],
        ]
    }, {
        id: 1001,
        nome: 'Como alterar venda recebida do site',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../vendas1.png" },
        ],
        passos: [
            ['navegue ate movimentos -> vendas -> vendas'],
            ['selecione como voce quer pesquisar em **consultar por**'],
            ['digite o codigo conforme escolhido na opcao acima'],
            ['clique no icone procurar'],
            ['clique em ok venda origem site'],
            ['clique em cima do item para remover'],
            ['va ate a lixeirinha e remova'],
            ['selecione o produto caso nescessite inluir novo produto'],
            ['selecione o campo e depois pesquisar'],
            ['clique na lupa e ira pesquisar'],
            ['selecione o produto e confime'],
        ]
    }, {
        id: 40,
        nome: 'Como cancelar uma venda de balcao',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendas1.png" },
            { url: "../vendas2nova.png" },
        ],
        passos: [
            ['navegue ate movimentos vendas -> vendas'],
            ['pesquise a venda desejada pelo codigo ou pelo nome do cliente'],
            ['clique no botao procurar'],
            ['ele ja lista as vendas na tela'],
            ['selecione a venda que deseja cancelar'],
            ['clique na venda e clique em cancelar'],
        ]
    }, {
        id: 41,
        nome: 'Como editar observacoes de venda',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendasGE1.png" },
            { url: "../vendas41-2.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> Vendas -> Vendas Gerenciamento'],
            ['procure a venda que voce deseja'],
            ['botao direito sobre a venda e editar observacao da venda'],

        ]
    }, {
        id: 42,
        nome: 'como fazer cadastro de conta a pagar avulsa',
        categoria: ['financeiro','todos'],
        imagem: financeiroImage,
        imagensVinculadas: [
            { url: "../contasAvulsa1.png" },
            { url: "../contasAvulsa2.png" },
            { url: "../contasAvulsa3.png" },
        ],
        passos: [
            ['navegue ate movimentos -> financeiro -> contas a pagar'],
            ['clique no icone de + para cadastrar'],
            ['preencha a descricao a conta corrente, a despesa, o fornecedor, o usuario, o valor, a data, o vencimento, gerar mais parcelas, quantidade de parcelas intervalo de dias e clique no botao gerar'],
        ]
    }, {
        id: 46,
        nome: 'Como dar entrada de nota fiscal de compra sem XML',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../compras1.png" },
            { url: "../compras2.png" },
            { url: "../compras46-3.png" },
        ],
        passos: [
            ['navegue ate movimentos -> entradas -> compras - ENTRADAS DE NOTA'],
            ['clique no icone de + para cadastrar'],
            ['preencha o fornecedor, selecione o item da compra no label do produto, preencha a quantidade, confirmar para entrar no estoque, preencha a data de emissao, clique no icone de certo e pronto'],
        ]
    }, {
        id: 47,
        nome: 'Como emitir carta de correcao para nota fiscal',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../notaFiscal1.png" },
            { url: "../notaFiscal2.png" },
            { url: "../notaFiscal3.png" },
            { url: "../notaFiscal4.png" },
        ],
        passos: [
            ['navegue ate menu movimentos -> nota fiscal'],
            ['busque pela nota fiscal ja emitida, use o filtro conforme voce desejar, selecione a nota e va em acoes de nota fiscal(icone de papel com seta para direita)'],
            ['cc-e e emitir a carta de correcao'],
            ['clique no botao e transmitira a carta'],
            ['clique em CC-e novamente va em imprimir'],
        ]
    }, {
        id: 48,
        nome: 'Como exportar XML de Nota Fiscal para contaibilidade',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../notaFiscal1.png" },
            { url: "../cupom2.png" },
            { url: "../cupom3.png" },
        ],
        passos: [
            ['navegue ate movimento -> nota fiscal'],
            ['na aba va até listagem de NFE'],
            ['pesquise pela data especifica e clique em procurar, clique em enviar para a contabilidade ele exporta e tras o email do contador'],
        ]
    }, {
        id: 49,
        nome: 'Como dar entrada de nota fiscal e fazer conferencias de mercadoria no estoque apos compra',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../compras1.png" },
            { url: "../compras2.png" },
            { url: "../compras3.png" },
            { url: "../compras4.png" },
            { url: "../compras5.png" },
            { url: "../compras6.png" },
            { url: "../compras7.png" },
            { url: "../compras8.png" },
            { url: "../compras9.png" },
            { url: "../compras10.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> entradas -> compras - ENTRADA DE NOTAS'],
            ['Clique no icone + para cadastrar uma nova entrada de compras'],
            ['(F7) Abrir xml e selecione o XML apos abrir a nota sera listado os produtos de entrada'],
            ['Botao direito sobre o item listado para relacionar, alterar relacionamento do item'],
            ['relacione com o pedido que voce desejar, apos relacionar clique em finalizar'],
            ['Navegue ate a aba condicoes de pagamento'],
            ['selecione a forma de pagamento clicando na setinha, em despesa voce pode colocar uma despesa, caso deixe pendente ele somente ira movimentar o financeiro, pronto agora finaliza a nota'],
            ['Navegue ate movimentos -> entrada -> compras conferencias'],
            ['procure pela nota e de duplo clique sobre a nota listada'],
            ['bipe os produtos, lembrando que precisa bipar conforme a quantidade do produto, apos os itens tiverem bipados os item fiacarao azul é por que esta OK, clique no icone de verdinho para finalizar'],

        ]
    }, {
        id: 50,
        nome: 'Como fazer uma transferencia de estoque',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../transferencia1.png" },
            { url: "../transferencia2.png" },
            { url: "../transferencia3.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> transferencias'],
            ['Clique no icone de + para cadastrar uma nova transferencia'],
            ['Destino para empresa que recebe a transferencia, em movimentacao voce vai dizer se entrada ou nao, De entrada do produto, preencha os dados conforme voce desejar, depois clique em gravar, '],
        ]
    }, {
        id: 51,
        nome: 'como gerar pedido de compra pela tela pedido compra fornecedor',
        categoria: ['compra','todos'],
        imagem: comprasImage,
        imagensVinculadas: [
            { url: "../pedidosDeCompra1.png" },
            { url: "../pedidosDeCompra2.png" },
            { url: "../pedidosDeCompra3.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> entradas -> pedidos de compras'],
            ['Clique em + para gerar um pedido novo'],
            ['Preencha os produtos para o pedido, insira o fornecedor em fornecedor, clique sobre gerar pedido, clique em editar icone de lapis e clique no icone de certo'],
        ]
    }, {
        id: 52,
        nome: 'Como inutilizar nota fiscal',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../notaFiscal1.png" },
            { url: "../cupom2.png" },
            { url: "../inutilizar3.png" },
            { url: "../inutilizar4.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> nota fiscal'],
            ['Dentro da tela de nota fiscal navegue ate a aba listagem de NFE'],
            ['Clique em inutilizar numeracao'],
            ['Coloque a sequencia de inutilizacao'],
        ]
    }, {
        id: 53,
        nome: 'Pedido compra fornecedor',
        categoria: ['compra','todos'],
        imagem: comprasImage,
        imagensVinculadas: [
            { url: "../pedidosDeCompra1.png" },
            { url: "../pedidosDeCompra2.png" },
            { url: "../email.png" },
            { url: "../pedidosDeCompra4.png" },
            { url: "../pedidosDeCompra5.png" },
            { url: "../pedidosDeCompra6.png" },
        ],
        passos: [
            ['navegue ate movimentos -> entradas -> pedido de compra'],
            ['clique no botao de procurar'],
            ['botao direito sobre o icone e vai enviar e-mail'],
            ['navegue ate movimentos -> entradas -> compras - ENTRADAS DE NOTA'],
            ['clique em procurar, nessa tela ira abrir as notas que foram recebidas do fornecedor, clique em + para inserir'],
            ['abra o XML selecione, grave e ta feito a entrada do produto'],
        ]
    }, {
        id: 54,
        nome: 'Como alterar movimentacoes no caixa geral pelo centro de alteracao de dados',
        categoria: ['dados','todos'],
        imagem: dadosImage,
        imagensVinculadas: [
            { url: "../alteracaoCaixa1.png" },
            { url: "../alteracaoCaixa2.png" },
            { url: "../alteracaoCaixa3.png" },
        ],
        passos: [
            ['navegue ate movimentos -> financeiro -> caixa geral e copie os codigos do caixa geral que ira alterar'],
            ['navegue ate o menu cadastro -> outros -> centro de alteracao de dados'],
            ['navegue ate centro alteracao de dados clique sobre os 3 pontinhos e cole os codigos, ele ira listar todos os codigos que voce quer'],
            ['pesquise no menu lateral por conta corrente'],
            ['conta debito digite 3 e depois em alterar'],
            ['aplicar a alteracao e clica em sim'],
        ]
    }, {
        id: 55,
        nome: 'Como adicionar imagem via URL no cadastro do produto',
        categoria: ['estoque','todos'],
        imagem: estoqueImagem,
        imagensVinculadas: [
            { url: "../imagemProduto1.png" },
            { url: "../imagemProduto2.png" },
            { url: "../imagemProduto3.png" },
            { url: "../imagemProduto4.png" },
        ],
        passos: [
            ['Navegue ate utilitarios -> importacao -> importacao de fotos do produto'],
            ['Na aba superior va até URL, clique sobre os 3 pontinhos, coloque codigo da imagem ou a url confirme e depois grave, clique em confirmar'],
        ]
    }, {
        id: 56,
        nome: 'Como alterar massivamente status do pedido',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../vendasGE1.png" },
            { url: "../vendasAlterarStatus2.png" },
            { url: "../vendasStatus3.png" },
        ],
        passos: [
            ['Navegue ate movimentos -> vendas -> vendas gerenciamentos'],
            ['Filtre conforme o periodo que voce deseja, clique em procurar ele tera varias vendas listadas, selecione as vendas que deseja alterar o status, va ate mais opcoes e em alterar status'],
            ['Clique em processar lista, mude o status do pedido caso deseja mudar'],
            ['depois clique em copiar status'],
            ['todos os pedidos irao trocar o status'],
            ['clique em gravar'],
        ]
    }, {
        id: 57,
        nome: 'Como alterar movimentacoes no caixa geral',
        categoria: ['financeiro','todos'],
        imagem: financeiroImage,
        imagensVinculadas: [
            { url: "../caixaGeral1.png" },
            { url: "../caixaGeral2.png" },
            { url: "../caixaGeral3.png" },
            { url: "../caixaGeral4.png" },
        ],
        passos: [
            ['navegue ate movimentos -> financeiro -> caixa geral'],
            ['clique no icone de + para cadastrar'],
            ['como alterar contas de debito e credito, navegue tambem ate o centro de alteracao de dados, navegue ate o menu cadastro -> outros -> centro de alteracao de dados, nao esqueca de criar o dicionario do caixa geral'],
            ['dentro de caixa geral escolha a tabela que voce ira trabalhar'],
            ['copie os codigos do caixa geral'],
            ['navegue ate centro alteracao de dados clique sobre os 3 pontinhos'],
            ['ele ira listar todos os codigos que voce quer'],
            ['pesquise no menu lateral por conta corrente'],
            ['conta debito digite 3 e depois em alterar'],
            ['aplicar a alteracao e clica em sim'],
        ]
    }, {
        id: 58,
        nome: 'como cadastrar imagem massivamente no sistema',
        categoria: ['dados','todos'],
        imagem: dadosImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue no menu superior utilitarios -> importacao -> importacao de fotos de produtos'],
            ['abra uma nova tela e navegue ate o cadastro do usuario'],
            ['va ate a aba acoes em parametros preecha para importar fotos'],
            ['desmaque o debaixo e clique no certo e pronto tudo estara OK'],
            ['mantenha uma pasta com suas fotos'],
            ['dentro da importacao de fotos'],
            ['navuegue ate a aba arquivos'],
            ['selecione o codigo clique sobre a pastinha'],
            ['escolha a pastinha da foto'],
            ['de um ok ele ja iera listar as imagens'],
            ['de um gravar e saia'],
            ['abra a aba dados'],
        ]
    }, {
        id: 59,
        nome: 'como cadastrar rota para transportadora Plimor',
        categoria: ['transportadora','todos'],
        imagem: transportadoraImagem,
        imagensVinculadas: [
            { url: "../transportadora1.png" },
            { url: "../transportadoraNova2.png" },
        ],
        passos: [
            ['navegue ate cadastro -> outros -> transportadora'],
            ['clique no icone de + para cadastrar, com os dados voce navegue ate a aba rota'],
            ['rota preencha o numero da rota, sigla de origem, cep inicial ate o final'],
            ['clique em adicionar e va preenchendo e clique no icone de certo'],
        ]
    }, {
        id: 60,
        nome: 'como cadastrar tabela de preco',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue e pesquise por tabela de preco'],
            ['clique em cima do id ctrl + R'],
            ['clique no icone de + '],
            ['preecha o nome dela em cima'],
            ['aplicar sobre para aplicar preco'],
            ['preecha conforme voce deseja'],
            ['preecha o tipo o ideal é ser estatico'],
            ['navegue ate a aba importar'],
            ['clique em procurar'],
            ['pode demorar alguns minutos voce clica em sim'],
            ['dentro da tabela de custo comece com 100%'],
            ['clique em aplicar '],
            ['coloque o nome da tabela de preco'],
            ['apos importar volte para a navegue area tabela'],
            ['clique no certinho e ta feito o cadastro'],
        ]
    }, {
        id: 61,
        nome: 'como corrgir o erro "venda nao encontrada" para impressao de etiqueta B2W entregas',
        categoria: ['etiquetas', 'todos'],
        imagem: etiquetasImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate movimentos -> vendas -> vendas gerenciamento'],
            ['ctrl + f5 ele ira listar as origens b2w'],
            ['seleciona a origem pedido e cadastra'],
            ['marca a venda e vai em gerenciar entregas'],
            ['origem que foi gerada pelo site'],
            ['preecha a sigla e salva'],
        ]
    }, {
        id: 62,
        nome: 'como enviar vendas ao findMyPack',
        categoria: ['site', 'todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../vendasGE1.png" },
            { url: "../integracao2-2.png" },
            { url: "../integracao2-3.png" },
        ],
        passos: [
            ['navegue ate movimentos -> vendas -> vendas gerenciamento'],
            ['botao direito caso queira marcar todos e clique em marcar todos ou escolha os pedidos que sera enviado'],
            ['clique em mais opcoes e ira aparecer enviar para findmypack'],
        ]
    }, {
        id: 63,
        nome: 'Como extrair o relatorio demonstrativo de venda analitico',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../analitico1.png" },
            { url: "../analitico2.png" },
        ],
        passos: [
            ['Navegue ate Relatorio -> Apoio Gerencial -> Demonstrativo de venda (analitico)'],
            ['Selecione o periodo que voce deseja, Preencha o produto, Preencha o fabricante, Preencha a categoria, Selecione se for somente vendas faturadas, tambem tem a opcao de imprimir, preencha os filtros nescessarios'],
        ]
    }, {
        id: 64,
        nome: 'Como extrair relatorio de despesas',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../relatorioDespesa1.png" },
            { url: "../relatorioDespesa2.png" },
        ],
        passos: [
            ['Navegue ate relatorios -> cadastro -> financeiro -> despesas'],
            ['Consolidado tras receitas e despesas, selecione entre regime competencia ou caixa, custo todos fixo ou variavel'],
            ['Selecione a imprimir cabecalho em todas as paginas e mostre conforme voce desejar'],
        ]
    }, {
        id: 65,
        nome: 'como extrair relatorio de movimentos de franquias',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue no menu superior relatorios -> apoio gerencial -> relatorio movimento franquias'],
            ['os campos serao listados voce pode adicionar para baixo']
        ]
    }, {
        id: 66,
        nome: 'como fazer integracao de cadastro no master',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../integracao1.png" },
            { url: "../integracao2.png" },
        ],
        passos: [
            ['cadastro -> integracao do site -> master unity - integracao de cadastro do site'],
            ['selecione a tabela, selecione o produto e marque aonde ele sera enviado'],
        ]
    }, {
        id: 67,
        nome: 'como fazer alteracao massiva e copiar CFOP e alterar enquadramento do IPI',
        categoria: ['dados','todos'],
        imagem: dadosImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate movimentacao -> nota fiscal'],
            ['copiar enquadramento ele copia para todos os items'],
            ['copiar CFOP pra todos tambem '],
        ]
    }, {
        id: 68,
        nome: 'Como fazer analise de fila dos sincronizadores',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../relatorioLog1.png" },
            { url: "../relatorioLog2.png" },
        ],
        passos: [
            ['Navegue ate relatorios -> log do sistema'],
            ['Na aba de navegacao va ate a aba fila, em cima é a escolha de periodo, em periodo coloque a data que voce deseja, integracao selecione o tipo de integracao, em integrador selecione a integracao, selecione e depois clique em filtrar, selecione a tabela tambem e verifique os dados'],
            ['caso queira saber somente sobre um produto coloque no valor chave, voce pode considerar por inclusao ou envio'],
        ]
    }, {
        id: 70,
        nome: 'como fazer atendimento ao cliente via tela de vendas de gerenciamento',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['abra a tela de vendas de gereciamento'],
            ['preencha o email do cliente'],
            ['clique em procurar e trazera os clientes'],
            ['clique em mais opcoes e va em saque'],
            ['coloque o assunto '],
            ['se clicar em descricao da venda'],
            ['clique em gravar'],
            ['clique em procurar'],
            ['navegue ate SAC'],
            ['clique nos 3 pontinhos vai ver as lista de assunto'],
            ['navegue ate a tela de atendimento ao cliente'],
            ['pesquise pelo o assunto '],
            ['clique em procurar '],
            ['botao direito voce pode agrupar com assunto'],
            ['caso deseja imprimir basta imprimir'],
        ]
    }, {
        id: 71,
        nome: 'Como fazer configuracao de status de pedidos',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../statusPedido1.png" },
            { url: "../statusPedido2.png" },
            { url: "../statusPedido3.png" },
        ],
        passos: [
            ['Navegue ate cadastro -> integracao do site -> status do pedido'],
            ['clique em um status e depois vai em alterar'],
            ['preecha em conforme voce deseja que o status faca cancelar'],
            ['clico em gravar'],
        ]
    }, {
        id: 73,
        nome: 'como fazer faturamento em carteira com emissao de boleto',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate movimentos -> vendas -> boletos -> boletos'],
            ['tera a aba listagem e a aba refaturmento'],
            ['va ate refaturamento'],
            ['preecha com o nome do cliente'],
            ['clique em procurar e listara a venda'],
            ['filtre a data conforme voce desejar'],
            ['na forma de pagamento voce pode filtrar'],
            ['escolha o banco abaixo '],
            ['botao direito e opcao de marcar todos'],
            ['preecha a data inicial e a data final'],
            ['preecha o nome da empresa e depois calcular'],
            ['voce tambem pode mudar a cateira caso voce deseja'],
            ['se deseja emitir NF basta marca emitir NF'],
            ['agora basta clica em refatorar parcela'],
            ['ele gera dois boletos e mais a nota fiscal'],
            ['navegue ate movimentos -> Nota Fiscal'],
            ['clique navegue ate dados '],
            ['sera listado os items da venda'],
            ['na aba pagamento lista as faturas'],
            ['clique em transmitir e depois nao'],
            ['volte para a aba listagem '],
            ['mostra os 2 boletos'],
            ['va no canto inferior esquerdo botao direito gerar veja as novas opcoes'],
            ['navegue ate movimento -> financeiro -> conta receber e pesquise o cliente'],
            ['verifique que ira mostrar as parcelas em aberto referente ao meu cliente'],
            ['preecher acobertamento ele ja gera a nota fiscal para essas venda que ja tem cupom fiscal'],
        ]
    }, {
        id: 75,
        nome: 'Como fazer o cadastro de contas a pagar avulsa',
        categoria: ['financeiro','todos'],
        imagem: financeiroImage,
        imagensVinculadas: [
            { url: "../contasAPagar1.png" },
            { url: "../contasAPagar2.png" },
        ],
        passos: [
            ['navegue ate movimentos -> financeiro -> contas a pagar'],
            ['clique no icone de + para cadastrar'],
            ['preencha a descricao, a conta corrente, a despesa, o fornecedor, o usuario, o valor, a data, o vencimento e gerar mais parcelas, quantidade de parcelas, intervalo de dias, clique no botao gerar'],
        ]
    }, {
        id: 76,
        nome: 'como fazer o faturamento cateira com emissao de boleto',
        categoria: ['pdv','todos'],
        imagem: pdvImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate movimentacao -> vendas -> boletos -> boletos'],
            ['existe a aba listagem e existe a aba refaturamento'],
            ['preecha o nome do cliente'],
            ['clique no periodo que ira trazer'],
            ['clique em procurar para mostrar os clientes'],
            ['escolha o banco e tick emitir nota'],
            ['botao direito tem a opcao de marcar todos'],
            ['escolha a conta corrente'],
            ['clique em prosseguir'],
            ['em parcelamento voce pode fazer ficar em 1 vez'],
            ['preecha a data de contagem de parcela'],
            ['preecha a empresa e depois clique em calcular'],
            ['escolha a forma de pagamento que sera feita no faturamento'],
            ['emitir NF novamente e clique em refatorar parcelas'],
            ['navegue ate a tela de nota movimentos -> notas fiscais'],
            ['ela fica laranjinha por que nao foi gerar por padrao'],
            ['clique em transmitir e depois gerar notas'],
            ['navegue ate o contas a receber '],
            ['verifique que as parcelas estao em aberto'],
            ['caso a venda ja seja feita pelo sat selecione acobertamento para somente emitir a nota'],
        ]
    }, {
        id: 77,
        nome: 'Como fazer ordem de producao',
        categoria: ['compra','todos'],
        imagem: comprasImage,
        imagensVinculadas: [
            { url: "../ordemDeCompra1.png" },
            { url: "../ordemDeCompra2.png" },
        ],
        passos: [
            ['navegue ate movimentos -> producao -> ordem de producao'],
            ['clique no icone de + para cadastrar, preencha o tipo de item se é materia prima'],
            ['navegue ate detalhes e marque como loja fisica'],
            ['clique em inserir'],
            ['inserir um produto e depois clique em editar'],
            ['selecione ele como produto acabado'],
            ['na aba imposto coloque como produto acabado'],
            ['navegue ate a aba producao'],
            ['preecha conforme a materia prima utilizada'],
            ['clique em gravar e ta feito a receita'],
            ['navegue ate a ordem de funcao clique no icone de +'],
            ['pesquise o produto'],
            ['clique no icone certo'],
            ['preencha a quantidade produzida para verificar quantos voce usou'],
            ['grave a ordem e agora pode fechar'],
        ]
    }, {
        id: 78,
        nome: 'Como fazer personalizacao de site atraves de funcionalidade master',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../personalizar1.png" },
            { url: "../personalizar2.png" },
        ],
        passos: [
            ['Navegue ate o menu superior cadastros -> integracao de sites -> master unity - personalizacao do site'],
            ['Selecione api de franquias, selecione qual fraquia? ou se for outra API selecione'],
            ['Selecione o cadastro no caso produto, Selecione o campo conforme voce deseja, podendo ver o valor que ta no master e no site'],
        ]
    }, {
        id: 79,
        nome: 'Como fazer uma troca ou devolucao',
        categoria: ['fiscal','todos'],
        imagem: fiscalImage,
        imagensVinculadas: [
            { url: "../devolucao1.png" },
            { url: "../devolucao2.png" },
            { url: "../devolucao3.png" },
        ],
        passos: [
            ['Navegue ate a tela movimentos -> vendas -> devolucao de venda'],
            ['clique no icone de + para cadastrar uma nova devolucao ou troca'],
            ['Voce pode bipar a peça ou apenas selecionar a peça, confirme e ela tras uma tela de venda preencha o cliente, oce pode clicar no campo check para gerar credito caso nescessite, Para consultar o credito do cliente navegue ate credito de cliente, Selecione o cliente e ira mostrar o credito, Clique em finalizar, Ele ira mostrar mensagem de devolucao de venda gravada com sucesso'],
        ]
    }, {
        id: 80,
        nome: 'Como fazer um relatorio de projecao de compra',
        categoria: ['relatorio','todos'],
        imagem: relatorioImage,
        imagensVinculadas: [
            { url: "../relatorioEntrada1.png" },
            { url: "../relatorioEntrada2.png" },
        ],
        passos: [
            ['Navegue ate Relatorio -> Entrada -> Projecao de compras'],
            ['Preecha o perido de analise de venda do periodo, projecao preecha a projecao conforme voce deseja, Dentro da projecao e o tempo que voce quer saber que o produto vendeu, Listar produtos somente ativos, nos 3 pontinhos pode colar o produto que voce quer, Clique em calcular, Opcao de imprimir caso nescessitara'],
        ]
    }, {
        id: 81,
        nome: 'como fazer vinculacao de anuncios no mercado livre',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../mercado1.png" },
        ],
        passos: [
            ['navegue ate utilitarios -> importacao mercado livre -> vincular SKU'],
            ['va ate 3 pontinhos digite o nome do produto'],
            ['seleciona o campo que voce deseja filtrar'],
            ['selecione o produto conforme desejado'],
        ]
    }, {
        id: 82,
        nome: 'como gerar boletos no fluxo de venda',
        categoria: ['financeiro','todos'],
        imagem: financeiroImage,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate modulo de vendas -> caixa'],
            ['navegue ate itens da venda'],
            ['venda a vista ou venda a prazo'],
            ['clique em confimar'],
            ['preecha com o cliente'],
            ['clique para finalizar venda'],
            ['se for a prazo escolha a prazo '],
            ['clique em finalizar'],
            ['ja sai o extrato da venda'],
            ['navegue ate pendencias do caixa '],
            ['entre na tela de vendas'],
            ['clique em procurar e ira aparecer a venda'],
            ['entra na venda e alterar'],
            ['finaliza ela novamente'],
            ['envez de ser prazo preecha como boleto finalizar'],
            ['pode imprimir o boleto ja ou depois que fizer a nota fiscal'],
            ['clique em cima da venda e marque a opcao que voce deseja ele ja gera a nota fiscal automaticamente'],
            ['caso queira reeprimir por ali ele ja sai como nota fiscal'],
        ]
    }, {
        id: 83,
        nome: 'Como solicitar o numero de objetos no correio',
        categoria: ['site','todos'],
        imagem: siteImage,
        imagensVinculadas: [
            { url: "../transportadora1.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['Navegue ate cadastro -> outros -> transportadores'],
            ['Escolha a transportadora e clique em editar'],
            ['procure pela aba chamada range'],
            ['clique agora em solicitar etiquetas'],
            ['preecha a quantidade de etiqueta que voce deseja'],
            ['de um OK clique em gravar'],
        ]
    }, {
        id: 85,
        nome: 'como cadastrar veiculos para romaneio',
        categoria: ['transportadora','todos'],
        imagem: transportadoraImagem,
        imagensVinculadas: [
            { url: "../veiculos1.png" },
            { url: "../veiculos2.png" },
        ],
        passos: [
            ['navegue ate cadastro -> outros -> veiculos'],
            ['clique no icone de + va ate a aba dados, preecha a descricao completa, o proprietario, o motorista'],
            ['navegue ate fornecedor para cadastrar seus motoristas, preecha a placa e grave todos os veiculos no romaneio'],
        ]
    }, {
        id: 86,
        nome: 'como verificar romaneio ja cadastrado',
        categoria: ['transportadora','todos'],
        imagem: transportadoraImagem,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate o menu superior cadastro -> administrativo -> verificar romaneio '],
            ['bipa ou preecha para listar os romaneio '],
            ['sera listados todas as vendas do romaneio'],
            ['checkout de romaneio mapa da entrega'],
        ]
    }, {
        id: 87,
        nome: 'fazer trocas de etiquetas na transportadora',
        categoria: ['transportadora','todos'],
        imagem: transportadoraImagem,
        imagensVinculadas: [
            { url: "../transportadora.png" },
            { url: "../estoque.jpg" },
        ],
        passos: [
            ['navegue ate o menu de pesquisar'],
            ['procure por bancos'],
            ['duplo clique no icone'],
            ['verifique na listagem a transportadora'],
            ['clique em eticketas para verificar a eticketa'],
            ['ele ira listar as etiquetas '],
            ['va ate o cadastro de transportadora '],
            ['pesquise pelo nome da transpordora listada na tela anterior'],
            ['selecione ela e clique em editar'],
            ['navegue ate a aba controle '],
            ['selecione a etiqueta que voce deseja trocar'],
            ['ta feito a troca da etiqueta'],
        ]
    }
]
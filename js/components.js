var data = {
    menu: [{nome: 'Home', icone: '<i class="icofont-home"></i>'},
           {nome: 'Produtos', icone: '<i class="icofont-box"></i>'},
           {nome: 'Clientes', icone: '<i class="icofont-people"></i>'},
           {nome: 'Páginas', icone: '<i class="icofont-page"></i>'},
           {nome: 'Cart', icone: '<i class="fas fa-shopping-basket"></i>'}
        ],
    logo: '<img alt="logo" src="img/logo.png">',
    /*produtos: [{nome: 'Notebook Acer', img: 'img/list/1.jpg', preco: 'R$ 3.999,99' , avaliacao: '4.2' , descricao: 'Aspire 3 • Ryzen 5 • 8 Gb Ram', badge: 'Promoção', oferta: '65% off \| Use o Cupom PEDIDO65'},
               {nome: 'Sofá Prime', img: 'img/list/2.jpg', preco: 'R$ 899,99' , avaliacao: '3.8' , descricao: '3 lugares • Importado • Retrátil e Inclinável', badge: 'Promoção', oferta: '65% off \| Use o Cupom PEDIDO65'},
               {nome: 'Geladeira Brastemp', img: 'img/list/3.jpg', preco: 'R$ 2.250,00' , avaliacao: '4.9' , descricao: 'Frost Free • Duplex • 429 litros', badge: 'Promoção', oferta: '65% off \| Use o Cupom PEDIDO65'},
               {nome: 'Cafeteira Expressa Mondial', img: 'img/list/4.jpg', preco: 'R$ 390,00' , avaliacao: '2.9' , descricao: 'Coffe Free Premium • Inox • Vaporizador', badge: 'Promoção', oferta: '65% off \| Use o Cupom PEDIDO65'},
               {nome: 'Smartv LG', img: 'img/list/5.jpg', preco: 'R$ 1.600,00' , avaliacao: '4.6' , descricao: '49\"• Triple XD Engine • Clear Voice', badge: 'Promoção', oferta: '65% off \| Use o Cupom PEDIDO65'},
               {nome: 'Celta da firma', img: 'img/list/6.jpg', preco: 'R$ 1.000.000,00' , avaliacao: '99.9' , descricao: 'Mais rápido que a luz • 2 portas • Escada em cima', badge: 'Exclusivo', oferta: '65% off \| Use o Cupom PEDIDO65'},
        ],*/
    produtos: [],
    carrinho: [],
    subTotal: 0,
    filtroProdutos:[{item: 'Categoria', collapse : 'collapseOne', subitem: [{nome: 'Móveis', qtd: 230},
                                                  {nome: 'Eletrodomésticos', qtd: 200},
                                                  {nome: 'Tecnologia', qtd: 35},
                                                  {nome: 'Estofados',qtd: 60}]},
                    {item: 'Oferta', collapse : 'collapseTwo', subitem: [{nome:'Promoção', qtd: 400},
                                               {nome: 'Exclusivo', qtd: 2}]},        
                    {item: 'Preço', collapse : 'collapseThree', subitem: [{nome: 'Até R$50,00', qtd: 40},
                                              {nome: 'Até R$100,00', qtd: 125},
                                              {nome: 'Até R$ 200,00', qtd: 453}]}
        ]      
  };

 /* class Produto{
      constructor(nome,img,preco,avaliacao,descricao,badge,oferta){
        this.nome = nome;
        this.img = img;
        this.preco = preco;
        this.avaliacao = avaliacao;
        this.descricao = descricao;
        this.badge = badge;
        this.oferta = oferta;
      }
      
  };*/

/**
   * Declarando os componentes
  */ 

//Componente do Navbar Header
 var NavbarPedidosApp = Vue.extend({    
    data: function () {
        return data;
      },
    template: `<nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light osahan-nav shadow-sm">
        <div class="container">
        <a class="navbar-brand" href="index.html"><span v-html="logo"></span></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html"><span v-html="menu[0].icone"></span>{{menu[0].nome}} <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span v-html="menu[1].icone"></span>{{menu[1].nome}}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                            <a class="dropdown-item" href="listing.html">Listing</a>
                            <a class="dropdown-item" href="detail.html">Detail + Cart</a>
                            <a class="dropdown-item" href="checkout.html">Checkout</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="offers.html"> <span v-html="menu[2].icone"></span>{{menu[2].nome}}  <span
                                class="badge badge-danger">Novo</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span v-html="menu[3].icone"></span>{{menu[3].nome}}
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow-sm border-0">
                            <a class="dropdown-item" href="track-order.html">Track Order</a>
                            <a class="dropdown-item" href="invoice.html">Invoice</a>
                            <a class="dropdown-item" href="login.html">Login</a>
                            <a class="dropdown-item" href="register.html">Register</a>
                            <a class="dropdown-item" href="404.html">404</a>
                            <a class="dropdown-item" href="extra.html">Extra :)</a>
                        </div>
                    </li>
                    
                    <li class="nav-item dropdown dropdown-cart">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span v-html="menu[4].icone"></span>{{menu[4].nome}}
                            <span class="badge badge-success">{{carrinho.length}}</span>
                        </a>
                        <carrinho></carrinho>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
  });

//Componente dos produtos
var ListaProdutos = Vue.extend({    
    data: function () {
        return data;
      },
    template: `
    <div class="row" >
        <div v-for="produto in produtos" class="col-md-4 col-sm-6 mb-4 pb-2">
            <div class="list-card bg-white h-100 rounded overflow-hidden position-relative shadow-sm">
                <div class="list-card-image">
                    <div class="star position-absolute"><span class="badge badge-warning"><i
                                class="icofont-star"></i> {{produto.avaliacao}} </span></div>
                    <div class="favourite-heart text-danger position-absolute"><a href="detail.html"><i
                                class="icofont-heart"></i></a></div>
                    <div class="member-plan position-absolute"><span
                            class="badge badge-dark">{{produto.badge}}</span></div>
                    <a href="detail.html">
                        <img :src="produto.img" class="img-fluid item-img">
                    </a>
                </div>
                <div class="p-3 position-relative">
                    <div class="list-card-body">
                        <h6 class="mb-1"><a href="detail.html" class="text-black">{{produto.nome}}</a>
                        </h6>
                        <p class="text-gray mb-3">{{produto.descricao}}</p>
                        <p class="text-gray mb-3 time">
                            <span class="bg-light text-dark rounded-sm float-left"> {{produto.preco}}</span>     
                            <div class="input-group" >
                            <div class="input-group-prepend">
                                <label class="input-group-text" for="qtd">Qtd</label>
                            </div>
                            <input type="number" class="form-control" id="qtd" Value="1" min="1" size="1">
                          </div>
                        <div>
                            <a href="#" @click="addCarrinho(produto)"><span class="badge badge-dark float-left" >Add+</span></a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    `,
    methods: {
        addCarrinho: function(produto) {
            produto.qtd = document.getElementById("qtd").value;
            this.carrinho.push(produto);
            this.subTotal += produto.qtd * (parseFloat(produto.preco.replace(/([^\d])+/gim, '')));
            $("#carrinho").addClass("show");
            setTimeout(() => { $("#carrinho").removeClass("show"); }, 3000);
            document.getElementById("qtd").value = 1;
        }
      }
  });

  //Componente do menu de filtros
  var MenuFiltros = Vue.extend({
    data: function () {
        return data;
      },
    template: `
    <div class="col-md-3">
        <div class="filters shadow-sm rounded bg-white mb-4">
            <div class="filters-header border-bottom pl-4 pr-4 pt-3 pb-3">
                <h5 class="m-0">Filtrar por:</h5>
            </div>
            <div class="filters-body">
                <div id="accordion">
                    <div v-for="filtroProduto in filtroProdutos" class="filters-card border-bottom p-4">
                        <div class="filters-card-header" id="headingOne">
                            <h6 class="mb-0">
                                <a href="#" class="btn-link" data-toggle="collapse"
                                    :data-target="'#'+filtroProduto.collapse" aria-expanded="true"
                                    :aria-controls="filtroProduto.collapse">
                                    {{filtroProduto.item}} <i class="icofont-arrow-down float-right"></i>
                                </a>
                            </h6>
                        </div>
                        <div :id="filtroProduto.collapse" class="collapse show" aria-labelledby="headingOne"
                            data-parent="#accordion">
                            <div class="filters-card-body card-shop-filters">
                                <div v-for="subitem in filtroProduto.subitem" class="custom-control custom-checkbox">
                                    <input type="checkbox" class="custom-control-input" id="cb1">
                                    <label class="custom-control-label" for="cb1">{{subitem.nome}} <small
                                            class="text-black-50">{{subitem.qtd}}</small>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
  });

  //Componente do carrinho
  var Carrinho = Vue.extend({
    data: function () {
        return data;
      },
    template: `
                        
                <div id="carrinho" class="dropdown-menu dropdown-cart-top p-0 dropdown-menu-right shadow-sm border-0">
                    <div v-for="(cart, index) in carrinho" class="menu-list p-3 border-bottom">
                        <span class="count-number float-right">
                            <button class="btn btn-outline-secondary  btn-sm left dec"> <i
                                    class="icofont-minus"></i> </button>
                            <input class="count-number-input" type="text" :value="carrinho[index].qtd" readonly="">
                            <button class="btn btn-outline-secondary btn-sm right inc"> <i
                                    class="icofont-plus"></i> </button> <br>
                                    <span><a href="#" @click="removeProduto(index)">Remover<a/></span>
                                    
                        </span>
                        
                        <div class="media">
                            <img class="mr-3 rounded-pill" :src="carrinho[index].img"
                                alt="Generic placeholder image">
                            <div class="media-body">
                                <h6 class="mb-1">{{carrinho[index].nome}}</h6>
                                <p class="text-gray mb-0">{{carrinho[index].preco}}</p>
                                
                            </div>
                        </div>
                    </div>  
                            <div class="dropdown-cart-top-footer border-top p-4">
                                <p class="mb-0 font-weight-bold text-secondary">Sub Total <span
                                        class="float-right text-dark">R$ {{(subTotal/100).toLocaleString('pt-BR')}}</span></p>
                                </div>
                            <div class="dropdown-cart-top-footer border-top p-2">
                                <a class="btn btn-success btn-block btn-lg" href="checkout.html"> Checkout</a>
                            </div>
                        </div>
    `
    ,methods:{
        removeProduto: function(index){
            this.subTotal -= this.carrinho[index].qtd * (parseFloat(this.carrinho[index].preco.replace(/([^\d])+/gim, '')));
            this.carrinho.splice(index,1);
         }
    }

  });

  var CadastroProduto = Vue.extend({
     data: function(){
         return data;
     },
     template: `
     <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <fieldset class="border p-2">
                        <legend  class="w-auto"><h2>Cadastro de Produtos</h2></legend>
                     
                    
                    <form>
                        <div class="form-row ">
                            <div class="form-group col-md-10 "></div>
                            <div class="form-group col-md-1 text-right"><label for="ID" >ID</label></div>
                            
                            <div class="form-group col-md-1 ">
                                
                                <input type="text" readonly class="form-control" id="ID" value="">
                            </div>
                        </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                            <label for="produto_nome">Produto</label>
                            <div class="input-group">
                                <div class="input-group-prepend"><span class="input-group-text"><i
                                class="icofont-star"></i></span></div>
                                
                            <input type="text" class="form-control" id="produto_nome" placeholder="Nome do Produto">
                            </div>
                          </div>
                          <div class="form-group col-md-6">
                            <label for="descricao1">Atributos</label>
                          <div class="input-group">
                            <input type="text" class="form-control" id="descricao1" placeholder="Atributo 1">
                            <span class="input-group-text"> • </span>
                            <input type="text" class="form-control" id="descricao2" placeholder="Atributo 2">
                            <span class="input-group-text"> • </span>
                            <input type="text" class="form-control" id="descricao3" placeholder="Atributo 3">                        
                        </div></div></div>
                         
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="preco">Preço</label>
                                <div class="input-group">
                                <div class="input-group-text">R$</div>
                                
                                <input type="number" step="0.01" class="form-control" id="preco" min="0" value="0.00">
                                </div>
                            </div>
                            <div class="form-group col-md-3">
                                <label for="qtd">Quantidade</label>
                                <div class="input-group">
                                    <div class="input-group-prepend"><span class="input-group-text"><i
                                        class="icofont-ui-image"></i></span></div>
                                <input type="number" class="form-control" id="qtd" value="1" min="1">
                                </div>
                            </div>
                            <div class="form-group col-md-6">
                                <label class="form-label" for="customFile">Imagem</label>
                                <div class="input-group">
                                    <div class="input-group-prepend"><span class="input-group-text"><i
                                        class="icofont-ui-image"></i></span></div>
                                <input type="file" class="form-control customFile" id="customFile" accept="image/*" />
                                </div>
                                <div class="ml-2 col-sm-6">
                                    Imagem Preview: <img id="preview-img" src="img/no-preview.jpg" class="img-thumbnail">
                                </div>
                            </div>
                        </div>
                        <a class="btn btn-primary" @click="addProduto()" style="color:white;">Cadastrar</a>
                    </form>
                </fieldset>
                </div>
            </div>
        </div>
     `
     , methods:{
         addProduto: function(){
            produtoNovo = {
                nome:document.getElementById("produto_nome").value,
                img:"img/no-preview.jpg",
                preco:"R$ "+document.getElementById("preco").value,
                avaliacao:"5.0",
                descricao:document.getElementById("descricao1").value+" • "+document.getElementById("descricao2").value+" • "+document.getElementById("descricao3").value,
                badge: 'Promoção', 
                oferta: ''
            }
            produtoNovo.img = document.getElementById("preview-img").src;
            this.produtos.push(produtoNovo);
         }   
     }
  });

   /**
   * Registrando componentes
   */
  Vue.component('navbar-pedidos-app', NavbarPedidosApp);
  Vue.component('lista-produtos', ListaProdutos);
  Vue.component('menu-filtros', MenuFiltros);
  Vue.component('carrinho',Carrinho);
  Vue.component('cadastro-produto',CadastroProduto)
  

   /**
   * Instanciando o Vue
   */
    new Vue({
        el: '#app',
        data: data,
        created (){
            fetch('https://run.mocky.io/v3/66699a81-521a-4156-ac26-7cdb4093f79d')
            .then(response => response.json())
            .then(json => {
                this.produtos = json.produtos
            })
        }
      });


      document.getElementById("customFile").onchange = e => {
        const fileToUpload = e.target.files.item(0);
        const reader = new FileReader();
    
        // evento disparado quando o reader terminar de ler 
        reader.onload = e => document.getElementById("preview-img").src = e.target.result;
    
        // solicita ao reader que leia o arquivo 
        // transformando-o para DataURL. 
        // Isso disparará o evento reader.onload.
        reader.readAsDataURL(fileToUpload);
    };
    
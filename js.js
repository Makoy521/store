const loadlogin = function(){
    const btnLogin = document.querySelector('#btnLogin')
    btnLogin.addEventListener('click', function(){
        User.save(document.querySelector('#username').value)
        window.location.href = 'Principal.html'
    })
}
const logOut = function() {
    User.remove()
    window.location.href = 'index.html'
}
const showUsername = function() {
    const username = document.querySelector('.nombre')
    const usernameTxt = document.createTextNode(User.get() || 'Anónimo')
    username.appendChild(usernameTxt)
}
const init = function(){
    document.querySelector('.logout').addEventListener('click', logOut)
    showUsername()
}


class User {
    constructor () {
        
    }
    static getKey(){
        return 'username'
    }

    static save(user){
        localStorage.setItem(User.getKey(), user)
    }

    static get(){
        return localStorage.getItem(User.getKey())
    }

    static remove(){
        localStorage.removeItem(User.getKey())
    }
}


const getProduct = function(index){
    const products = [
        {
          imgUrl: "img/Carne1.png",
          name: "Corte Tomahowk",
          price: 650
        },
        {
          imgUrl: "img/ny.png",
          name: "Corte New York",
          price: 450
        },
        {
          imgUrl: "img/sirloin.png",
          name: "Corte Sirloin",
          price: 300
        },
        {
          imgUrl: "img/arrachera.png",
          name: "Corte Arrachera",
          price: 350
        },
        {
          imgUrl:"img/tbone.png",
          name:"Corte T-Bone",
          price: 400
        }
      ]
      return products[index]
}
const createImg = function(url) {
	const productImg = document.createElement('img')
	productImg.src = url
	productImg.classList.add('image')
	return productImg
}
const createName = function (name) {
	const productName = document.createElement('h2')
	const text = document.createTextNode(name)
	productName.appendChild(text)
	productName.classList.add('name')
	return productName
}
const createPrice = function(price){
    const productPrice = document.createElement('h2')
    const text = document.createTextNode('$'+price+' MXN')
    productPrice.appendChild(text)
    productPrice.classList.add('price')
    return productPrice
}

const renderProduct = function(product, screen) {
    const screen1 = document.querySelector(screen)
    const screen2 = document.createElement('div')
    screen1.appendChild(screen2)
    screen2.classList.add('product-container')
    screen2.appendChild(createImg(product.imgUrl))
    screen2.appendChild(createName(product.name))
    screen2.appendChild(createPrice(product.price))
    screen2.appendChild(createBtn(product))
}

const addCar = function(){
    const btnAdd = document.querySelector('#uno')
    btnAdd.addEventListener('click', function(){
        var product = getProduct(0)
        var arrayProducts = [] 
        var lista = JSON.parse(localStorage.getItem('products'))
        if(lista == null){
         arrayProducts[0] = product
        }else{
            arrayProducts = lista
        arrayProducts[lista.length] = product
        }
        localStorage.setItem('products', JSON.stringify(arrayProducts))
        alert('Se añadió ' + product.name + ' al carrito.')
    })

    const btnAdd2 = document.querySelector('#dos')
    btnAdd2.addEventListener('click', function(){
        var product = getProduct(1)
        var arrayProducts = [] 
        var lista = JSON.parse(localStorage.getItem('products'))
        if(lista == null){
         arrayProducts[0] = product
        }else{
            arrayProducts = lista
        arrayProducts[lista.length] = product
        }
        localStorage.setItem('products', JSON.stringify(arrayProducts))
        alert('Se añadió ' + product.name + ' al carrito.')
    })

    const btnAdd3 = document.querySelector('#tres')
    btnAdd3.addEventListener('click', function(){
        var product = getProduct(2)
        var arrayProducts = [] 
        var lista = JSON.parse(localStorage.getItem('products'))
        if(lista == null){
         arrayProducts[0] = product
        }else{
            arrayProducts = lista
        arrayProducts[lista.length] = product
        }
        localStorage.setItem('products', JSON.stringify(arrayProducts))
        alert('Se añadió ' + product.name + ' al carrito.')
    })

    const btnAdd4 = document.querySelector('#cuatro')
    btnAdd4.addEventListener('click', function(){
        var product = getProduct(3)
        var arrayProducts = [] 
        var lista = JSON.parse(localStorage.getItem('products'))
        if(lista == null){
         arrayProducts[0] = product
        }else{
            arrayProducts = lista
        arrayProducts[lista.length] = product
        }
        localStorage.setItem('products', JSON.stringify(arrayProducts))
        alert('El registro tiene ' + product.name + ' en el carrito.')
    })

    const btnAdd5 = document.querySelector('#cinco')
    btnAdd5.addEventListener('click', function(){
        var product = getProduct(4)
        var arrayProducts = [] 
        var lista = JSON.parse(localStorage.getItem('products'))
        if(lista == null){
         arrayProducts[0] = product
        }else{
            arrayProducts = lista
        arrayProducts[lista.length] = product
        }
        localStorage.setItem('products', JSON.stringify(arrayProducts))
        alert('Se añadió ' + product.name + ' al carrito.')
    })
}


const initProducts = function(cantidad, screen){
    for(let i=0; i<cantidad; i++){
        renderProduct(getProduct(i), screen)
    }
}

const initCart = function(){
    var products = JSON.parse(localStorage.getItem('products'))
    const added = document.querySelector('.product-added')
    const price = document.querySelector('.total-price')
    const btnPay = document.querySelector('.pagar')
    var precio = 0
    if(products!=null){
      for(let i=0; i<products.length; i++){
        const container = document.createElement('div')
        container.classList.add('container-imgcart')
        const cont1 = document.createElement('div')
        cont1.classList.add('container-info')
        container.appendChild(createImg(products[i].imgUrl))
        cont1.appendChild(createName(products[i].name))
        cont1.appendChild(createPrice(products[i].price))
        added.appendChild(container)
        container.appendChild(cont1)
        precio+= products[i].price
      }
      const pr = document.createTextNode('Total: $'+precio+' MXN')
      price.appendChild(pr)
    }else{
      const noHay = document.createElement('h1')
      noHay.classList.add('no-products')
      noHay.appendChild(document.createTextNode('No hay productos seleccionados '))
      added.appendChild(noHay)
    }
    btnPay.addEventListener('click', function(){
      if(products!=null){
        if(localStorage.getItem('username')!=null){
          localStorage.removeItem('products')
          alert('Compra correctamente efectuada.')
          window.location.href = 'Principal.html'
        }else{
          alert('Por favor, ingresa a tu cuenta para comprar.')
          window.location.href = 'login.html'
        }
      }else{
        alert('No tienes productos agregados.')
      }
    })
  }

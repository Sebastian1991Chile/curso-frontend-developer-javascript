const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const productPreviewCloseIcon = document.querySelector('.product-preview-close');

const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
const productCard = document.querySelector('.product-card');
const productPreview = document.querySelector('.product-preview');

menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);
productPreviewCloseIcon.addEventListener('click', () => toogleProductPreview(false));

function toogleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productPreview.classList.add('inactive');
}

function toogleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    productPreview.classList.add('inactive');
}

function toogleCarritoAside(){
    aside.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    productPreview.classList.add('inactive');
}

function toogleProductPreview(order, id){
    if(order && productPreview.classList.contains('inactive')){
        aside.classList.add('inactive');
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
        productPreview.classList.remove('inactive');
        displayProductPreview(id);
    } else if (order && !productPreview.classList.contains('inactive')){
        displayProductPreview(id);
    } else {
        productPreview.classList.add('inactive');
    }
    
}

function displayProductPreview(id){
    const product = productList[id-1];
    const productPreviewImage = document.querySelector('.product-preview-image');
    productPreviewImage.setAttribute('src', product.image);
    const productPreviewName = document.querySelector('.product-preview-name');
    productPreviewName.innerText = product.name;
    const productPreviewPrice = document.querySelector('.product-preview-price');
    productPreviewPrice.innerText = product.price;
    const productPreviewDescription = document.querySelector('.product-preview-description');
    productPreviewDescription.innerText = product.description;
}

const productList = [];
productList.push({
    id: 1,
    name:'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})
productList.push({
    id: 2,
    name:'Mountain',
    price: 350,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})
productList.push({
    id: 3,
    name:'Climp',
    price: 200,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: 'With its practical position, this bike also fulfills a decorative function, add your hall or workspace.'
})

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.setAttribute('onclick', `toogleProductPreview(true, ${product.id})`);
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImageCart = document.createElement('img');
        productImageCart.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImageCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);


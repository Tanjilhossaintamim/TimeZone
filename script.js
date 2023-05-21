const menubar = document.querySelector('#menu');
const hidenav = document.querySelector('.navblock');
const cartbtn = document.querySelector('#cart');
const cartmenu = document.querySelector('.cart-menu');
const addtocart = document.querySelectorAll('.addtocartbtn');
const cart_menu_item = document.querySelector('.cart-menu ul');
const total_price_parent = document.querySelector('.total-price');
let total_price = total_price_parent.querySelector('span small');
const uparrow = document.querySelector('.up-arrow-img');


//animation section 
const newarival = document.querySelectorAll('section');

const product_title = document.querySelector('.product-title');
const arivel1 = document.querySelector('#ar1');
const arivel2 = document.querySelector('#ar2');
const arivel3 = document.querySelector('#ar3');

window.addEventListener('scroll', (e) => {
    let position = window.scrollY

    newarival.forEach(function (item) {
        if (position > 600 && position < 1700) {
            arivel1.classList.add('first-arivel');
            arivel2.classList.add('second-arivel');
            arivel3.classList.add('third-arivel');
            product_title.classList.add('product-title-show');
        }
        else if (position > 0 && position < 2300) {
            arivel1.classList.add('first-arivel');
            arivel2.classList.add('second-arivel');
            arivel3.classList.add('third-arivel');
            product_title.classList.add('product-title-show');
        }

        else {
            arivel1.classList.remove('first-arivel');
            arivel2.classList.remove('second-arivel');
            arivel3.classList.remove('third-arivel');
            product_title.classList.remove('product-title-show');
        }


    })
})
// animation section end




menubar.onclick = () => {
    menubar.classList.toggle('fa-xmark')
    hidenav.classList.toggle('navshow')
}
let btncolor = true;
cartbtn.onclick = () => {
    cartmenu.classList.toggle('show-cart-menu');
    if (btncolor) {
        cartbtn.style.color = '#f7463d';
        btncolor = false;
    }
    else {
        cartbtn.style.color = '#000';
        btncolor = true;
    }

}


for (let cartbtn of addtocart) {
    cartbtn.addEventListener('click', function (e) {
        let btn = e.target;
        let imgparent = btn.parentNode.parentNode;
        // get image src attribute
        let image = imgparent.querySelector('img');
        let imgsrc = image.src;
        // collect product description
        let mainparent = imgparent.parentNode;
        let productdescription = mainparent.querySelector('.product-description');
        let productname = productdescription.querySelector('h3').textContent;
        let product_price = productdescription.querySelector('span').textContent;

        add_to_cart(imgsrc, productname, product_price);
        let calculate_price = parseInt(product_price.slice(1)) + parseInt(total_price.textContent);
        total_price.textContent = calculate_price


    })
}
// add to cart function


function add_to_cart(src, text, price) {
    const listitem = document.createElement('li');
    const listimage = document.createElement('img');
    const span = document.createElement('span');
    const price_span = document.createElement('small');
    const delete_btn = document.createElement('i');
    delete_btn.classList.add('fa-sharp');
    delete_btn.classList.add('fa-solid');
    delete_btn.classList.add('fa-trash');
    delete_btn.classList.add('deleteicon');
    delete_btn.setAttribute('title', 'Delete');

    listimage.setAttribute('src', src);
    span.innerText = text;
    price_span.classList.add('price')
    price_span.innerText = price;
    listitem.appendChild(listimage);
    listitem.appendChild(span);
    listitem.appendChild(price_span);
    listitem.appendChild(delete_btn);
    cart_menu_item.appendChild(listitem);
    if (cart_menu_item.innerHTML == '') {
        cartbtn.style.color = 'black';
    }
    else {
        cartbtn.style.color = 'red';
    }

    //bind delete button
    delete_btn.addEventListener('click', function (e) {
        let list = e.target.parentNode;
        let list_price = list.querySelector('small').textContent;
        let update_price = parseInt(total_price.textContent) - parseInt(list_price.slice(1));
        total_price.textContent = update_price
        list.remove()

    })
}

document.addEventListener('scroll', navsticky);

document.addEventListener('scroll', function () {
    if (window.scrollY > 1000) {
        uparrow.style.display = 'block';
    }
    else {
        uparrow.style.display = 'none';
    }
})

function navsticky() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 20) {
        navbar.classList.add('sticky-nav')
    }


    else {
        navbar.classList.remove('sticky-nav');

    }
}

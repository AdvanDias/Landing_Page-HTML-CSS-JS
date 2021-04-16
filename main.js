var requestURL = 'https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1';
var request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
    var products = request.response;
    productsPrice(products);
    showproducts(products);
  }


  function productsPrice(jsonObj) {
    var myImage = document.createElement('p');
    myImage.textContent = jsonObj['image'];
    header.appendChild(myImage);

    var myName = document.createElement('p');
    myName.textContent = jsonObj['name'];
    header.appendChild(myName);
  
    var myDescription = document.createElement('p');
    myDescription.textContent = jsonObj['description'];
    header.appendChild(myDescription);

    var myOldPrice = document.createElement('p');
    myOldPrice.textContent = jsonObj['oldPrice'];
    header.appendChild(myOldPrice);

    var myPrice = document.createElement('h5');
    myPrice.textContent = jsonObj['price'];
    header.appendChild(myPrice);

  }

  function showproducts(jsonObj) {
    var productsPD = jsonObj['products'];
  
    for (var i = 0; i < productsPD.length; i++) {
      var myArticle = document.createElement('article');
      var myI = document.createElement('p');
      var myP1 = document.createElement('p');
      var myP2 = document.createElement('p');
      var myH5 = document.createElement('h5');
      var myP3 = document.createElement('p');

      myI.textContent = '<img src="' + productsPD[i].image + '">';
      myP1.textContent = productsPD[i].name;
      myP2.textContent = productsPD[i].description;
      myH5.textContent = 'De: R$ ' + productsPD[i].oldPrice;
      myP3.textContent = 'Por: R$ ' + productsPD[i].price;
  
      myArticle.appendChild(myI);
      myArticle.appendChild(myP1).getElementsByClassName('item');
      myArticle.appendChild(myP2);
      myArticle.appendChild(myH5);
      myArticle.appendChild(myP3);
  
      section.appendChild(myArticle);
    }
  }
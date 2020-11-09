  
var product = {};
var comments = {};

function showImagesGallery(array){

let htmlContentToAppend = "";

for(let i = 0; i < array.length; i++){
    let imageSrc = array[i];

    htmlContentToAppend += `
    <div class="col-lg-3 col-md-4 col-6">
        <div class="d-block mb-4 h-100">
            <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
        </div>
    </div>
    <p><b>Comentarios:</b></p>
                        `+ mostrarComentarios() +`
                        <hr class="mb-4"> 
    `

    document.getElementById("productImagesGallery").innerHTML = htmlContentToAppend;
}
}

function mostrarComentarios() {

let htmlContentToAppend = "";

for (let i = 0; i < comentarios.length; i++){
    let comment = comentarios[i];

    htmlContentToAppend += `
    <div class="row">
        <div class="col>"
            <div style="margin-bottom: 20px;">
                <div class="d-flex w-100 justify-content-between">  
                    <h5 class="mb-1">${ comment.user } </h5>
                    <small class="text-muted"> ${ comment.score } Puntuacion</small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                        <small class="text-muted"> ${ comment.dateTime } </small>
                    </div>
                        <p class="mb-1"> ${ comment.description } </p>
                    </div>
                </div>
            </div>
        `
        document.getElementById("comentarios").innerHTML = htmlContentToAppend;
}
}

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {  
        
        product = resultObj.data;

        let productNameHTML  = document.getElementById("productName");
        let productDescriptionHTML = document.getElementById("productDescription");
        let productsoldCountHTML = document.getElementById("productsoldCount");
        let productcostHTML = document.getElementById("productcost");
        let productcurrencyHTML = document.getElementById("productcurrency");
        let productCategoryHTML  = document.getElementById("productcategory");
        let relatedProductsHTML = document.getElementById("relatedproducts");
        
        productNameHTML.innerHTML = product.name;
        productDescriptionHTML.innerHTML = product.description;
        productsoldCountHTML.innerHTML = product.soldCount;
        productcostHTML.innerHTML = product.cost;
        productcurrencyHTML.innerHTML = product.currency;
        productCategoryHTML.innerHTML = product.category;
        relatedProductsHTML.innerHTML = product.relatedProducts;
        
        showImagesGallery(product.images);
    }
});

getJSONData(PRODUCTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        related= resultObj.data;

    
    }
    

});
getJSONData( PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok"){
        related= resultObj.data;

        mostrarComentarios()

    
    }
    

});

        });
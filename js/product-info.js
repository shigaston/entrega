  
var product = [];
var comments = [];
var products = [];

function showRelatedProducts(){
    var resultado1= "";
   
    for (var i=0; i<2; i++){
        var indice = product.relatedProducts[i];
        resultado1 = resultado1 + ` <hr> 
         <p class="carousel-inner"><b> ` + products[indice].name +`</b><img height="170" src = "` + products[indice].imgSrc + `"></p>`;
                    
    }
    return resultado1;
}

function showComments(){
    var resultado = "";
    var yellowStar ='<span class="fa fa-star checked"></span>';
    var unchecked = '<span class="fa fa-star"></span>';
    for(var i=0; i<4; i++){
        resultado = resultado + ` <hr class="mb-4"> 
         <p><b> `+ comments[i].user +`</b> `+ comments[i].dateTime +` `+ yellowStar.repeat(comments[i].score) + unchecked.repeat(5-comments[i].score)+` </p>
                        <p> `+ comments[i].description +`</p>`;
                       
    }
    return resultado;
}


function showProducts(){
    
            let htmlContentToAppend = `
            
            <div syle = "font-family" class= "text-center p-4">  
            <h2>Descripcion del producto</h2>
            </div>
              <p></p>
              <p></p>
              <a  class="list-group-item list-group-item-action">
                <div class="row">
                <div class="col-3">
                           </div>
                           
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between"style= "height: 55px ; widht:2px;color:black">
                            <h4 class="mb-1">`+ product.name +`</h4>  
                        </div>
                        <p class="mb-1"> <b>Precio</b></p> 
                        <p>USD ` + product.cost + `</p>
                        <p class="mb-1"><b> Descripción</b></p>
                        <p>` + product.description + `</p>
                        <p><b>Categoria</b></p>
                        <p>` + product.category + ` </p>
                        <p><b>Cantidad de vendidos</b></p>
                        <p>` + product.soldCount + `</p>
                        <p><b> Imagenes</b></p>
                        <p><img height="170" src= "` + product.images[0] + `">
                        <img height="170" class="carousel slide"src= "` + product.images[1] + `">
                        <img height="170" src= "` + product.images[2] + `">
                        <img height="170" src= "` + product.images[3] + `">
                        <img height="170" src= "` + product.images[4] + `"></p>
                        <p></p>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                              <img src="..." class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="` + product.images[2] + `" class="d-block w-100" alt="...">
                          </div>
                          <div class="carousel-item">
                            <img src="` + product.images[3] + `" class="d-block w-100" alt="...">
                          </div>
                        </div>
                      </div>
                        <p><b>Productos relacionados
                        `+ showRelatedProducts() +`
                        <p><b>Comentarios:</b></p>
                        `+ showComments() +`
                        <hr class="mb-4"> 
                        
                        <div><p><b>Agregar nuevo:</b></p>
                        <p><input id="commentBox" type="text" name="Cuerpo" style="height: 100px;
                        width: 500px"></p></div>
                             
                        <form>
                        <select name="Calificacion">
                        <option disabled selected>Calificar</option>
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        </select>
                        </form>
                        <p></p>
                        <button>Enviar</button>
                    </div>
                        </div>
                 </a>
                 `

                 
            document.getElementById("cat-list-container").innerHTML = htmlContentToAppend;
            
              }
       

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            product = resultObj.data;
        }
             
        getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
                comments = resultObj.data;
            
            }

            getJSONData(PRODUCTS_URL).then(function(resultObj){
                if (resultObj.status === "ok"){
                    products = resultObj.data;
                }
                showProducts(); 

            });
        });
    });
});
//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
 var cart = {};

 
 function addEvents(){
  for(let i=0; i<items.length; i++){
      document.getElementById(`articleCount${i}`).addEventListener("change", function(){
        subTotal();
      });
  }
  document.getElementById(`goldradio`).addEventListener("change", function(){
    subTotal();
  });
  document.getElementById(`standardradio`).addEventListener("change", function(){
    subTotal();
  });
 }
 document.getElementById(`premiumradio`).addEventListener("change", function(){
    subTotal();
  });
 

 document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO2_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            
            items = resultObj.data.articles;

            showCartProducts(items);
            addEvents();
   
        }
        
        

    });

    

    getJSONData(CART_BUY_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            asigns = resultObj.data;

           

        
        }
        

    });
});

 function showCartProducts(items){

    let htmlContentToAppend = "";

    for (let index = 0; index < items.length; index++) {
        const item = items[index];
        
    

        htmlContentToAppend += `
        
        <div class="list-group-item list-group-item-action">
        <div class="row" ">
        <div> 
        <button type="button" class="btn btn-outline-danger btn-xs" onclick="eliminar(${index});" alt="Eliminar" >
        X
</button>
</div>
            <div class="col-3">
                <img src="${item.src}" alt="${item.name}" class="img-thumbnail" style="width: 150px; height: 150px;">
            </div>
            
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                <a href="product-info.html" class="list-item-action"><h4 class="mb-1">${item.name}</h4></a>
                    <div>
                    <p class="mb-1">Precio: <span id="currency${index}">${item.currency}</span> <span id="unitCost${index}">${item.unitCost}</span></p>
                    
                    <p class="mb-1">Unidades: <input type="number" class="form-control count" id="articleCount${index}"${item.count} value="1" min="0"> </p>
                   
                   
<p>                                            </p>
         
    
                    
                    </div>
                </div>
                
                <h5 class="mb-1">SubTotal: ${item.currency} <span id="subTotal${index}" class="subtotal">${item.unitCost * item.count}</span></h5>                        
            </div>


            
        </div>

    </div>

`
                    
                    
                    
    
    
}
document.getElementById("cartProducts").innerHTML = htmlContentToAppend;
 }
 function subTotal(){
     let subtotal = 0;
     let unitCost = 0;
     let count = 0;
     let total = 0;
     for (let i=0; i<items.length;i++){
         unitCost = parseInt(document.getElementById(`unitCost${i}`).textContent);
         count = parseInt(document.getElementById(`articleCount${i}`).value);
         subtotal = unitCost * count; 
         document.getElementById(`subTotal${i}`).innerHTML= subtotal;
         total += subtotal;

        
     }
     //if(document.getElementById(`dolares`).selected.value){
        //document.getElementById(`subTotal${index}`).innerHTML= subtotal / 40;
     //}
    // else { document.getElementById(`subTotal${index}`).innerHTML= subtotal * 40;
    //}

     //document.getElementById(`subtotalGeneral`).innerHTML= total;
     
     
     if (document.getElementById("goldradio").checked){
        document.getElementById(`totalTotal`).innerHTML= (total + (subtotal / 100) * 7);
     }else{ 
         if (document.getElementById("standardradio").checked){
            document.getElementById(`totalTotal`).innerHTML= (total + (subtotal / 100) * 5);
         }else{
             if (document.getElementById("premiumradio").checked){
                document.getElementById(`totalTotal`).innerHTML= (total + (subtotal / 100) * 15);
         }
    
    }
}

};

function eliminar(i){
    items.splice(i, 1);
    showCartProducts(items);
}



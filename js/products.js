const categoria_autos = "https://japceibal.github.io/emercado-api/cats_products/101.json";
const container = document.getElementById('showProds')

async function getCategory (url){
    const request = await fetch(url)
    const resp = await request.json()
    if(resp && resp.catID === 101 ){
        console.log(resp)
        showProductsList(resp.products)
    }
}

function showProductsList(prodList){

    prodList.forEach(product => {
        let div = document.createElement('div')
        div.innerHTML =  `
                <div >
                    <div class="list-group-item list-group-item-action cursor-active">
                        <div class="row">
                            <div class="col-3">
                                <img src="${product.image}" alt="${product.description}" class="img-thumbnail">
                            </div>
                            <div class="col">
                                <div class="d-flex w-100 justify-content-between">
                                    <h4 class="mb-1">${product.name}</h4>
                                    <small class="text-muted">${product.soldCount} vendidos</small>
                                </div>
                                <p class="mb-1">${product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                    `
        container.appendChild(div)
        
    });

}

getCategory(categoria_autos)
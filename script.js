const foods_list = document.querySelectorAll(".list-foods")
const drink_list = document.querySelectorAll(".list-drink")
const dessert_list = document.querySelectorAll(".list-dessert")

function selected(list){
   
    list.forEach((array, id) => {
        array.addEventListener("click", () => {
            let list_foods_foods = document.querySelectorAll(`.${array.className} .food`)
            console.log(list_foods_foods)
            list_foods_foods[id].classList.toggle("selected")
            let selected = document.querySelectorAll(`.selected`)

            let qts_selected = document.getElementsByClassName("selected")
            if(qts_selected.length == 3){
                let buton_purchase = document.querySelector(".botton-purchase")
                buton_purchase.style.backgroundColor = "#32B72F"
                buton_purchase.innerHTML = "Fechar pedido"

            }else{
                let buton_purchase = document.querySelector(".botton-purchase")
                buton_purchase.style.backgroundColor = "#CBCBCB"
                buton_purchase.innerHTML = "Selecione os 3 itens<br> para fechar o pedido"
            }

            for(i=0; selected.length >= i; i++){
                if ( i != id ){
                    if(list_foods_foods[i].classList != undefined){
                        list_foods_foods[i].classList.remove("selected")
                    }
                }
            }
        })
    });
}

selected(foods_list)
selected(drink_list)
selected(dessert_list)


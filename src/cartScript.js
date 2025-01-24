const getArr = localStorage.getItem("cart")
let cartItems;
if(getArr){
    cartItems = JSON.parse(getArr)
}
else{
   cartItems = [] 
}



let totalAmount = 0



cartItems.forEach((eachItem)=>{

    const itemId = eachItem.id

    totalAmount = totalAmount + eachItem.price
    
    document.getElementById("cartContainer").innerHTML = document.getElementById("cartContainer").innerHTML + `<div
               id="${itemId}" class=" w-auto h-[102px] px-[10px] shadow-[0px_1px_13px_0px_#0000000D] flex justify-center items-center" 
            >
              <div class="xl:w-[1091px] lg:w-[850px] md:w-[600px] sm:w-[500px] w-[350px]   flex items-center justify-between">
                <div class="flex items-center gap-[20px] max-w-[176px]">
                  <div
                    class="w-[54px] h-[54px] relative flex justify-center items-center"
                  >
                    <img class="w-[50px] h-[39px]" src=${eachItem.image} />
                    <img onclick="deleteItem(${eachItem.id},${itemId})"
                      class="absolute top-0 -left-[5px] w-[18px] h-[18px] cursor-pointer"
                      src="./assets/cancel.png"
                    />
                  </div>
                  <p class="font-[400] text-[16px] max-w-[96px] leading-[24px]">
                    ${eachItem.title}
                  </p>
                </div>
                <div class="max-w-[40px] h-[24px]  justify-center items-center xl:block hidden">
                    <p class="font-[400] max-w-[40px] text-[16px] leading-[24px] text-[#000000]">
                      ${eachItem.price}
                    </p>
                </div>
                <div
                  class="w-[72px] h-[44px] rounded-[4px] border-[1.5px] border-[#00000066] flex justify-center items-center"
                >
                  <div
                    class="w-[48px] h-[32px] flex items-center justify-between"
                  >
                    <p class="font-[400] text-[16px] leading-[24px]">${eachItem.quantity}</p>
                    <div class="flex flex-col">
                      <img 
                        class="w-[16px] h-[16px] cursor-pointer"
                        src="./assets/Drop-Up.png" 
                      />
                      <img
                        class="w-[16px] h-[16px] cursor-pointer"
                        src="./assets/Drop-Down.png"
                      />
                    </div>
                  </div>
                </div>
                <p class="font-[400] text-[16px] leading-[24px] text-[#000000]">
                  ${eachItem.price}
                </p>
              </div>
            </div>`
})

const deleteItem = (deleteId, itemId) => {
    cartItems = cartItems.filter((eachItem)=>eachItem.id !== deleteId)
    console.log(cartItems)
    localStorage.setItem("cart",JSON.stringify(cartItems))

    const element = document.getElementById(itemId)

    if(element){
        element.remove()
    }

    let totalAmount = 0;
    
    cartItems.forEach((eachItem)=>{
      totalAmount = totalAmount + eachItem.price
    })    

    const roundedTotal = totalAmount.toFixed(2)

    document.getElementById("subTotal").textContent = roundedTotal
    document.getElementById("totalAmount").textContent = roundedTotal
}

const roundedTotal = totalAmount.toFixed(2)
document.getElementById("subTotal").textContent = roundedTotal
document.getElementById("totalAmount").textContent = roundedTotal

console.log(cartItems)  
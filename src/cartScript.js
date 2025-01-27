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
                <div class="flex items-center gap-[20px]  max-w-[176px]">
                  <div
                    class="w-[54px] h-[54px] relative flex justify-center items-center"
                  >
                    <img class="w-[50px] h-[39px]" src=${eachItem.image} />
                    <img onclick="deleteItem(${eachItem.id},${itemId})"
                      class="absolute top-0 -left-[5px] w-[18px] h-[18px] cursor-pointer"
                      src="./assets/cancel.png"
                    />
                  </div>
                  <p class="font-[400] text-[16px]  w-[96px] leading-[24px]">
                    ${eachItem.title}
                  </p>
                </div>
                <div class="max-w-[40px] h-[24px]  justify-center items-center xl:block hidden">
                    <p class="font-[400] w-[40px] text-[16px] leading-[24px] text-[#000000]">
                      ${eachItem.price}
                    </p>
                </div>
                <div
                  class="w-[72px] h-[44px] rounded-[4px] border-[1.5px] border-[#00000066] flex justify-center items-center"
                >
                  <div
                    class="w-[48px] h-[32px] flex items-center justify-between"
                  >
                    <p class="font-[400] text-[16px] leading-[24px]" id="showQuantity-${eachItem.id}">${eachItem.quantity}</p>
                    <div class="flex flex-col">
                      <img onclick="increaseQuantity(${eachItem.id})"
                        class="w-[16px] h-[16px] cursor-pointer"
                        src="./assets/Drop-Up.png" 
                      />
                      <img onclick="decreaseQuantity(${eachItem.id})"
                        class="w-[16px] h-[16px] cursor-pointer"
                        src="./assets/Drop-Down.png"
                        id="decrease-${eachItem.id}"
                      />
                    </div>
                  </div>
                </div>
                <p class="font-[400] w-[50px] b text-[16px] leading-[24px] text-[#000000]" id="showPrice-${eachItem.id}">
                  ${eachItem.price}
                </p>
              </div>
            </div>`
})

const increaseQuantity = (id) => {
  cartItems.forEach((eachItem)=>{
    if(eachItem.id === id){
      eachItem.quantity = eachItem.quantity + 1

      localStorage.setItem("cart",JSON.stringify(cartItems))  

      const quantityTag = document.getElementById(`showQuantity-${eachItem.id}`)
      if(quantityTag){
        quantityTag.textContent = eachItem.quantity
      }

      let subTotal = eachItem.price * eachItem.quantity
      const subTotalTag = document.getElementById(`showPrice-${eachItem.id}`)
      if(subTotalTag){
        subTotalTag.textContent = subTotal
      }
    }
  })
  let xyz = 0
cartItems.forEach((eachItem)=>{
  const res = document.getElementById(`showPrice-${eachItem.id}`)
  if(res){
    xyz = xyz + Number(res.textContent)
  }
})
document.getElementById("subTotal").textContent = xyz
document.getElementById("totalAmount").textContent = xyz
}

const decreaseQuantity = (id) => {
  cartItems.forEach((eachItem)=>{
    if(eachItem.id === id){
      if(eachItem.quantity>1){
        eachItem.quantity = eachItem.quantity - 1
  
        localStorage.setItem("cart",JSON.stringify(cartItems))  
  
        const quantityTag = document.getElementById(`showQuantity-${eachItem.id}`)
        if(quantityTag){
          quantityTag.textContent = eachItem.quantity
        }
  
        let subTotal = eachItem.price * eachItem.quantity
        const subTotalTag = document.getElementById(`showPrice-${eachItem.id}`)
        if(subTotalTag){
          subTotalTag.textContent = subTotal
        }
      }
      
    }
  })
  let xyz = 0
cartItems.forEach((eachItem)=>{
  const res = document.getElementById(`showPrice-${eachItem.id}`)
  if(res){
    xyz = xyz + Number(res.textContent)
  }
})
document.getElementById("subTotal").textContent = xyz
document.getElementById("totalAmount").textContent = xyz
}

const deleteItem = (deleteId, itemId) => {
    cartItems = cartItems.filter((eachItem)=>eachItem.id !== deleteId)
    console.log(cartItems)
    localStorage.setItem("cart",JSON.stringify(cartItems))

    const element = document.getElementById(itemId)

    if(element){
        element.remove()
    }

    let xyz = 0
cartItems.forEach((eachItem)=>{
  const res = document.getElementById(`showPrice-${eachItem.id}`)
  if(res){
    xyz = xyz + Number(res.textContent)
  }
})
document.getElementById("subTotal").textContent = xyz
document.getElementById("totalAmount").textContent = xyz
}

// each element's subtotal
cartItems.forEach((eachItem)=>{
  let subTotal = eachItem.price * eachItem.quantity
  const subTotalTag = document.getElementById(`showPrice-${eachItem.id}`)
  if(subTotalTag){
      subTotalTag.textContent = subTotal
    }
})

// subtotal of all items
let xyz = 0
cartItems.forEach((eachItem)=>{
  const res = document.getElementById(`showPrice-${eachItem.id}`)
  if(res){
    xyz = xyz + Number(res.textContent)
  }
})
document.getElementById("subTotal").textContent = xyz
document.getElementById("totalAmount").textContent = xyz

let count = JSON.parse(localStorage.getItem("cart"))
document.getElementById("cartBadge").innerText = count.length
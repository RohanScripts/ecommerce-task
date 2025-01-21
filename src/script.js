const cartProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 59.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1512499617640-c2f9996b88a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 119.98,
    },
    {
      id: 2,
      name: "Smartwatch",
      price: 149.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1603398938378-486d3e99d0b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 149.99,
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 79.99,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1585386959984-a41552245722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 239.97,
    },
    {
      id: 4,
      name: "Gaming Mouse",
      price: 29.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1610465298921-7de7363a972d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 29.99,
    },
    {
      id: 5,
      name: "Mechanical Keyboard",
      price: 99.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1616252413829-b34f4a5d0b02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 99.99,
    },
    {
      id: 6,
      name: "Smartphone Case",
      price: 19.99,
      quantity: 4,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7deba935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 79.96,
    },
    {
      id: 7,
      name: "USB-C Charger",
      price: 25.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1580618670428-8eab648e5eb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 51.98,
    },
    {
      id: 8,
      name: "External Hard Drive",
      price: 89.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1587202372775-c4721d7b5f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 89.99,
    },
    {
      id: 9,
      name: "Portable Power Bank",
      price: 39.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1517430816045-df4b7deba935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 79.98,
    },
    {
      id: 10,
      name: "Smart Home Camera",
      price: 199.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1604335399107-f45b6d3a8748?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 199.99,
    },
    {
      id: 11,
      name: "LED Monitor",
      price: 249.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1585533185203-c590c85f0e5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 249.99,
    },
    {
      id: 12,
      name: "Noise Cancelling Earbuds",
      price: 129.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
      totalPrice: 259.98,
    },
  ];

const cartContainer = document.getElementById("cartContainer")

const productListing = () => {
  cartProducts.map((eachProduct)=>{
    // create cart div
    const cardDiv = document.createElement("div")
    cardDiv.className="w-[270px] h-[322px] flex flex-col justify-between"
    

      // card upper
      const cardUpper = document.createElement("div")
      cardUpper.className="flex flex-col justify-between bg-[#F5F5F5]"
      cardDiv.appendChild(cardUpper)

        // dustbin
        const dustbin = document.createElement("div")
        dustbin.className="flex items-center justify-end"
        cardUpper.appendChild(dustbin)
        
          // dustbin image
          const dustbinImage = document.createElement("img")
          dustbinImage.src="./assets/dustbin.png"
          dustbin.appendChild(dustbinImage)

        // product image div
        const productImageDiv = document.createElement("div")
        productImageDiv.className="w-full h-[180px] flex justify-center items-center"
        cardUpper.appendChild(productImageDiv)

          // productImage
          const productImage = document.createElement("img")
          productImage.src=eachProduct.image
          productImageDiv.appendChild(productImage)

        // add button
        const addButton = document.createElement("button")
        addButton.className="w-[270px] h-[41px] bg-[#000000] rounded-br-[4px] rounded-bl-[4px] flex justify-center items-center"
        cardUpper.appendChild(addButton)

          // add button image
          const addBtnImg = document.createElement("img")
          addBtnImg.src="./assets/Cart1.png"
          addButton.appendChild(addBtnImg)

          // add button text
          const addBtnText = document.createElement("p")
          addBtnText.className="text-[#FFFFFF] font-[400] text-[12px] leading-[18px]"
          addBtnText.textContent="Add To Cart"
          addButton.appendChild(addBtnText)

      // card lower
      const cardLower = document.createElement("div")
      cardLower.className="h-[56px] flex flex-col justify-between"
      cardDiv.appendChild(cardLower)

        // product name
        const productName = document.createElement("p")
        productName.className="font-[500] text-[16px] leading-[24px] text-[#000000]"
        productName.textContent=eachProduct.name
        cardLower.appendChild(productName)

        // price
        const productPrice = document.createElement("p")
        productPrice.className="text-[#DB4444] font-[500] text-[16px] leading-[24px]"
        productPrice.textContent=eachProduct.price
        cardLower.appendChild(productPrice)

    cartContainer.appendChild(cardDiv)
  })
}

productListing()
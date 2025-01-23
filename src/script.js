const cartProducts = [
  {
    id: 1,
    title: "Fjallraven Foldsack",
    price: 109.95,
    description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120
    }
  },
  {
    id: 2,
    title: "Mens Slim Fit Shirt",
    price: 22.3,
    description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    rating: {
      rate: 4.1,
      count: 259
    }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    rating: {
      rate: 4.7,
      count: 500
    }
  },
  {
    id: 4,
    title: "Mens Slim Fit",
    price: 15.99,
    description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    rating: {
      rate: 2.1,
      count: 430
    }
  },
  {
    id: 5,
    title: "John Hardy Bracelet",
    price: 695,
    description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 4.6,
      count: 400
    }
  },
  {
    id: 6,
    title: "Gold Micropave Ring",
    price: 168,
    description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3.9,
      count: 70
    }
  },
  {
    id: 7,
    title: "Gold Plated Ring",
    price: 9.99,
    description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 3,
      count: 400
    }
  },
  {
    id: 8,
    title: "Rose Gold Earrings",
    price: 10.99,
    description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    rating: {
      rate: 1.9,
      count: 100
    }
  },
  {
    id: 9,
    title: "WD 2TB Portable",
    price: 64,
    description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    rating: {
      rate: 3.3,
      count: 203
    }
  },
  {
    id: 10,
    title: "SanDisk SSD Plus",
    price: 109,
    description: "Easy upgrade for faster boot up, shutdown, application load and response. Boosts burst write performance, making it ideal for typical PC workloads",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    rating: {
      rate: 2.9,
      count: 470
    }
  },
  {
    id: 11,
    title: "Silicon Power SSD",
    price: 109,
    description: "High-speed transfer, perfect for multitasking and high workloads",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    rating: {
      rate: 4.8,
      count: 319
    }
  }
];

document.getElementById("wishlistCount").innerHTML = `(${cartProducts.length})`
const cardContainer = document.getElementById("cardContainer")

const productListing = () => {
  cartProducts.map((eachProduct)=>{
    // create cart div
    const cardDiv = document.createElement("div")
    cardDiv.className="md:w-[270px] sm:w-[200px] h-[322px] flex flex-col justify-between"
    

      // card upper
      const cardUpper = document.createElement("div")
      cardUpper.className="flex flex-col justify-between "
      cardDiv.appendChild(cardUpper)

        // dustbin
        const dustbin = document.createElement("div")
        dustbin.className="flex items-center justify-end cursor-pointer"
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
          productImage.className="w-[190px] h-[180px]"
          productImage.src=eachProduct.image
          productImageDiv.appendChild(productImage)

        // add button
        const addButton = document.createElement("button")
        addButton.className="md:w-[270px] opacity-50 hover:opacity-100 duration-300 sm:w-[200px] h-[41px] bg-[#000000] rounded-br-[4px] rounded-bl-[4px] flex justify-center items-center"
        cardUpper.appendChild(addButton)
 
        // storing to localStorage
        addButton.addEventListener("click",function  (){
            const storedCart = localStorage.getItem("cart")
            let cart;
            if(storedCart){
              cart = JSON.parse(storedCart)
            }
            else{
              cart = []
            }
            cart.push(eachProduct);
            localStorage.setItem("cart",JSON.stringify(cart))
            console.log(JSON.parse(localStorage.getItem("cart")))
        })

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
        productName.textContent=eachProduct.title
        cardLower.appendChild(productName)

        // price
        const productPrice = document.createElement("p")
        productPrice.className="text-[#DB4444] font-[500] text-[16px] leading-[24px]"
        productPrice.textContent=eachProduct.price
        cardLower.appendChild(productPrice)

    cardContainer.appendChild(cardDiv)
  })
}

productListing()


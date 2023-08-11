const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "T-shirt",
    price: 119,
    colors: [
      {
        code: "black",
        img: "images/T-shirt.png",
      },
      {
        code: "darkblue",
        img: "images/T-shirt2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Design",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "images/Design.png",
      },
      {
        code: "green",
        img: "images/Design2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Hoodie",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "images/Hoodie.png",
      },
      {
        code: "green",
        img: "images/Hoodiee.png",
      },
    ],
  },
  {
    id: 4,
    title: "Cap",
    price: 129,
    colors: [
      {
        code: "black",
        img: "images/Cap.png",
      },
      {
        code: "lightgray",
        img: "images/Cap2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Necklace",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "images/necklace.png",
      },
      {
        code: "black",
        img: "images/necklacee.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //slider'daki ürünü değiştiriyor.
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //seçilmiş ürünü gösterir.
    choosenProduct = products[index];

    //seçilmiş üründeki text'i değiştirir.
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //yeni renk atar.
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const emailForm = document.querySelector(".emailForm");
  const closePayment = document.querySelector(".close");
  const checkoutButton = document.querySelector(".payButton");
  const continueButton = document.querySelector(".emailButton");
  const fButton = document.querySelector(".fButton"); //  fButton'a selector ekledik.
  const closeEmailForm = document.querySelector(".closeEmailForm");

  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });

  closePayment.addEventListener("click", () => {
    payment.style.display = "none";
  });

  continueButton.addEventListener("click", () => {
    emailForm.style.display = "flex";
  });

  fButton.addEventListener("click", () => { // fbutton'a click event listener ekledik.
    emailForm.style.display = "flex";
  });
  
  closeEmailForm.addEventListener("click", () => {
    emailForm.style.display = "none";
  });

  document.addEventListener("click", (event) => {
    if (!emailForm.contains(event.target) && event.target !== fButton) {
      emailForm.style.display = "none";
    }
  });
  const loginButton = document.querySelector(".loginButton");
  const loginContainer = document.querySelector(".loginContainer");
  const closeLogin = document.querySelector(".login .close");
  
  loginButton.addEventListener("click", () => {
    loginContainer.style.display = "flex";
  });
  
  closeLogin.addEventListener("click", () => {
    loginContainer.style.display = "none";
  });
  
  document.addEventListener("click", (event) => {
    if (!loginContainer.contains(event.target) && event.target !== loginButton) {
      loginContainer.style.display = "none";
    }
  });
  
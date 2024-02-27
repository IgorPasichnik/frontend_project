const app = () => {
  const state = new Proxy(
    {
      data: [],
      isLoaded: false,
      isModalOpen: false,
      currentProductId: null,
    },
    {
      set(target, property, value) {
        target[property] = value;

        if (property === "isLoaded") {
          dataFetch(state);
        }
        if (property === "data") {
          dataRender(state);
        }
        if (property === "isModalOpen") {
          modalRender(state);
        }
      },
    }
  );

  const mainLayoutRender = () => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    const header = document.createElement("header");
    header.classList.add("header");

    const main = document.createElement("main");
    main.classList.add("main");

    const footer = document.createElement("footer");
    footer.classList.add("footer");

    wrapper.appendChild(header);
    wrapper.appendChild(main);
    wrapper.appendChild(footer);

    document.body.appendChild(wrapper);
  };

  const headerRender = () => {
    const header = document.querySelector(".header");

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = "./img/logo.png";

    const button = document.createElement("button");
    button.classList.add("btn");
    button.textContent = "Войти";

    header.appendChild(logo);
    header.appendChild(button);
  };

  const footerRender = () => {
    const footer = document.querySelector("footer");

    const year = document.createElement("div");
    year.textContent = "2024";

    const madeBy = document.createElement("div");
    madeBy.textContent = "Выполнили в рамках ПИШ";

    footer.appendChild(year);
    footer.appendChild(madeBy);
  };

  const dataFetch = (state) => {
    fetch("https://658003026ae0629a3f5420c6.mockapi.io/api/test1/goods")
      .then((res) => res.json())
      .then((data) => {
        state.data = data;
      });
  };

  const dataRender = (state) => {
    const main = document.querySelector(".main");
    main.innerHTML = "";

    state.data.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product");

      const img = document.createElement("img");
      img.classList.add("product-img");
      img.src = product.imgUrl;

      const header = document.createElement("h2");
      header.classList.add("product-header");
      header.textContent = product.title;

      const description = document.createElement("div");
      description.classList.add("product-description");
      description.textContent = product.description;

      const info = document.createElement("div");
      info.classList.add("product-info");

      const price = document.createElement("div");
      price.classList.add("product-price");
      price.textContent = product.price;

      const more = document.createElement("button");
      more.classList.add("product-more");
      more.textContent = "Подробнее";

      more.addEventListener("click", () => {
        state.currentProductId = product.id;
        state.isModalOpen = true;
      });

      info.appendChild(price);
      info.appendChild(more);

      productCard.appendChild(img);
      productCard.appendChild(header);
      productCard.appendChild(description);
      productCard.appendChild(info);

      main.appendChild(productCard);
    });
  };

  const modalRender = (state) => {
    if (state.isModalOpen === true) {
      const activeProduct = state.data.find(
        (product) => product.id === state.currentProductId
      );

      const modal = document.createElement("div");
      modal.classList.add("modal");

      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");

      const modalImg = document.createElement("img");
      modalImg.classList.add("modal-img");
      modalImg.src = activeProduct.imgUrl;

      const modalHeader = document.createElement("h2");
      modalHeader.classList.add("modal-header");
      modalHeader.innerText = activeProduct.title;

      const modalDescription = document.createElement("p");
      modalDescription.classList.add("modal-description");
      modalDescription.innerText = activeProduct.description;

      const modalInfo = document.createElement("div");
      modalInfo.classList.add("modal-info");

      const modalPrice = document.createElement("p");
      modalPrice.classList.add("modal-price");
      modalPrice.innerText = activeProduct.price;

      const modalClose = document.createElement("button");
      modalClose.classList.add("modal-close");
      modalClose.textContent = "Закрыть";

      modalClose.addEventListener("click", () => {
        state.currentProductId = null;
        state.isModalOpen = false;
      });

      modalInfo.appendChild(modalPrice);
      modalInfo.appendChild(modalClose);

      modalContent.appendChild(modalImg);
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalDescription);
      modalContent.appendChild(modalInfo);

      modal.appendChild(modalContent);

      document.body.appendChild(modal);
    }
    if (state.isModalOpen === false) {
      const modal = document.querySelector(".modal").remove();
    }
  };

  mainLayoutRender();
  headerRender();
  footerRender();

  document.addEventListener("DOMContentLoaded", () => {
    state.isLoaded = true;
  });

  window.addEventListener("load", async () => {
    if ("serviceWorker" in navigator) {
      try {
        await navigator.serviceWorker.register("./sw.js");
      } catch (e) {
        console.error(3);
      }
    }
  });
};

app();

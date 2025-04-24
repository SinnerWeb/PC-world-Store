// Находим все карточки продуктов
const products = document.querySelectorAll(".product");

// Добавляем обработчики событий для каждой карточки
products.forEach((product) => {
  // Проверяем наличие data-specs
  if (product.dataset.specs) {
    // Получаем характеристики из data-attributes
    const specsData = product.dataset.specs;
    const specsList = specsData
      .split(";")
      .map((spec) => `<li>${spec.trim()}</li>`)
      .join("");

    // Создаём блок с характеристиками
    const specs = document.createElement("div");
    specs.classList.add("specs");
    specs.innerHTML = `<ul>${specsList}</ul>`;

    // Добавляем блок с характеристиками в карточку
    product.appendChild(specs);

    // Показываем характеристики при наведении
    product.addEventListener("mouseenter", () => {
      specs.style.opacity = "1";
      specs.style.visibility = "visible";
    });

    // Скрываем характеристики при уходе мыши
    product.addEventListener("mouseleave", () => {
      specs.style.opacity = "0";
      specs.style.visibility = "hidden";
    });
  }
});

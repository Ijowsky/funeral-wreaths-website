// Полный каталог венков
const wreaths = [
  {
    id: 1,
    name: "КР - 11(50*20)",
    price: 10,
    image: "images/photovenok1.jpg",
    category: "Эконом",
    rating: 5,
    description: "Изысканный венок в форме сердца из белых роз с зеленой атласной лентой",
  },
  {
    id: 2,
    name: "КР - 12(95*55)",
    price: 30,
    image: "images/venok2.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Торжественный венок с красными розами, белыми цветами и серебряной лентой",
  },
  {
    id: 3,
    name: "КР - 9/1(100*35)",
    price: 30,
    image: "images/venok3.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Элегантный венок с белыми розами и фиолетовыми ирисами в серебряном обрамлении",
  },
  {
    id: 4,
    name: "КР - 10/1(100*60)",
    price: 18,
    image: "images/venok4.jpg",
    category: "Стандарт",
    rating: 4,
    description: "Классический венок с синими гвоздиками и белой лентой",
  },
  {
    id: 5,
    name: "КР - 9(100*35)",
    price: 20,
    image: "images/venok5.jpg",
    category: "Эконом",
    rating: 5,
    description: "Яркий венок с красными розами, белыми хризантемами и красной лентой",
  },
  {
    id: 6,
    name: "КР - 8(100*60)",
    price: 30,
    image: "images/venok65.jpg",
    category: "Стандарт",
    rating: 4,
    description: "Солнечный венок с желтыми и красными цветами в красном обрамлении",
  },
  {
    id: 7,
    name: "КР - 10(100*60)",
    price: 18,
    image: "images/venok7.jpg",
    category: "Эконом",
    rating: 5,
    description: "Роскошный венок с фиолетовыми гвоздиками и белыми лилиями",
  },
  {
    id: 8,
    name: "КР - 7(100*45)",
    price: 30,
    image: "images/venok8.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Траурный венок в форме сердца с красными гвоздиками и черной лентой",
  },
  {
    id: 9,
    name: "КР - 6(80*30)",
    price: 18,
    image: "images/venok9.jpg",
    category: "Эконом",
    rating: 5,
    description: "Классический венок-сердце с белыми розами и красными гвоздиками",
  },
  {
    id: 10,
    name: "КР - 5(130*65)",
    price: 45,
    image: "images/venok10.jpg",
    category: "Премиум",
    rating: 5,
    description: "Роскошный венок-сердце с красными розами и белыми цветами в красном обрамлении",
  },
  {
    id: 11,
    name: "КР - 2(110*60)",
    price: 25,
    image: "images/venok11.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Элегантный венок с белыми лилиями и зеленой листвой",
  },
  {
    id: 12,
    name: "КР - 3(90*50)",
    price: 20,
    image: "images/venok12.jpg",
    category: "Эконом",
    rating: 5,
    description: "Нежный венок-сердце с белыми гвоздиками в красном обрамлении",
  },
  {
    id: 13,
    name: "КР - 4(130*60)",
    price: 45,
    image: "images/venok13.jpg",
    category: "Премиум",
    rating: 5,
    description: "Элегантный овальный венок с белыми хризантемами и красными цветами в бордовом обрамлении",
  },
  {
    id: 14,
    name: "КР - 1(70*35)",
    price: 18,
    image: "images/venok14.jpg",
    category: "Эконом",
    rating: 5,
    description: "Яркий овальный венок с желтыми и красными гвоздиками в красном атласном обрамлении",
  },
  {
    id: 15,
    name: "ВР - 3/9(150*75)",
    price: 70,
    image: "images/venok15.jpg",
    category: "Элит",
    rating: 5,
    description: "Роскошный овальный венок с красными гвоздиками и белыми лилиями в золотом обрамлении",
  },
  {
    id: 16,
    name: "ВР - 7/1(135*65)",
    price: 35,
    image: "images/venok16.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Изысканный овальный венок с красными розами и белыми гвоздиками в золотом обрамлении",
  },
  {
    id: 17,
    name: "ВР - 7(135*64)",
    price: 35,
    image: "images/venok17.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Премиальный овальный венок с множеством красных роз и белыми цветами в золотом обрамлении",
  },
  {
    id: 18,
    name: "ВР - 3/8(150*75)",
    price: 70,
    image: "images/venok18.jpg",
    category: "Элит",
    rating: 5,
    description: "Роскошный овальный венок с желтыми розами и белыми каллами в золотом обрамлении",
  },
  {
    id: 19,
    name: "ВР - 3/7(150*75)",
    price: 70,
    image: "images/venok19.jpg",
    category: "Элит",
    rating: 5,
    description: "Свежий овальный венок с белыми и желтыми цветами в зеленом атласном обрамлении",
  },
  {
    id: 20,
    name: "ВР - 3/4(150*75)",
    price: 45,
    image: "images/venok20.jpg",
    category: "Премиум",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 21,
    name: "ВР - 3/5(150*75)",
    price: 70,
    image: "images/venok21.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 22,
    name: "ВР - 3/6(150*75)",
    price: 70,
    image: "images/venok22.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 23,
    name: "ВР - 6/7(130*65)",
    price: 40,
    image: "images/venok23.jpg",
    category: "Премиум",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 24,
    name: "ВР - 6/6(130*65)",
    price: 40,
    image: "images/venok24.jpg",
    category: "Премиум",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 25,
    name: "ВР - 6/5(130*65)",
    price: 35,
    image: "images/venok25.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 26,
    name: "ВР - 4/1(120*70)",
    price: 20,
    image: "images/venok26.jpg",
    category: "Эконом",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 27,
    name: "ВР - 6/3(130*65)",
    price: 25,
    image: "images/venok27.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 28,
    name: "ВР - 6/4(130*65)",
    price: 40,
    image: "images/venok28.jpg",
    category: "Премиум",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 29,
    name: "ВР - 6/2(130*65)",
    price: 25,
    image: "images/venok29.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 30,
    name: "ВР - 6(130*65)",
    price: 25,
    image: "images/venok31.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 31,
    name: "ВР - 5(120*65)",
    price: 20,
    image: "images/venok32.jpg",
    category: "Эконом",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 32,
    name: "ВР - 4(120*70)",
    price: 20,
    image: "images/venok33.jpg",
    category: "Эконом",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 33,
    name: "ВР - 3/3(150*70)",
    price: 75,
    image: "images/venok34.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 34,
    name: "ВР - 3(150*70)",
    price: 70,
    image: "images/venok35.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 35,
    name: "ВР - 3/1(150*70)",
    price: 70,
    image: "images/venok36.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 36,
    name: "ВР - 3/2(150*75)",
    price: 70,
    image: "images/venok37.jpg",
    category: "Элит",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 37,
    name: "ВР - 2(135*65)",
    price: 35,
    image: "images/venok38.jpg",
    category: "Премиум",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 38,
    name: "ВР - 1(130*80)",
    price: 35,
    image: "images/venok39.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 39,
    name: "ВР - 6/1(130*65)",
    price: 30,
    image: "images/venok530.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 40,
    name: "ВР - 8(110*55)",
    price: 20,
    image: "images/venok1111.jpg",
    category: "Эконом",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 41,
    name: "КР - 14(75*35)",
    price: 10,
    image: "images/venok2222.jpg",
    category: "Эконом",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 42,
    name: "ВР - 7/1(130*65)",
    price: 25,
    image: "images/venok3333.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 43,
    name: "ВР - 2/1(140*70)",
    price: 30,
    image: "images/venok4444.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
  {
    id: 44,
    name: "КР - 13(120*50)",
    price: 35,
    image: "images/venok5555.jpg",
    category: "Стандарт",
    rating: 5,
    description: "Стильный овальный венок с розовыми и желтыми розами в серебряном обрамлении",
  },
]

// Переменные для фильтрации
let filteredWreaths = [...wreaths]

// DOM элементы
const searchInput = document.getElementById("searchInput")
const categoryFilter = document.getElementById("categoryFilter")
const priceFilter = document.getElementById("priceFilter")
const catalogGrid = document.getElementById("catalogGrid")
const resultsCount = document.getElementById("resultsCount")

// Генерация звезд для рейтинга
function generateStars(rating) {
  let stars = ""
  for (let i = 0; i < rating; i++) {
    stars += '<i class="fas fa-star"></i>'
  }
  return stars
}

// Рендер карточки товара
function renderProductCard(wreath) {
  return `
    <div class="product-card">
      <div class="product-image">
        <img src="${wreath.image}" alt="${wreath.name}" loading="lazy" 
             onerror="this.src='/placeholder.svg?height=250&width=300'">
      </div>
      <div class="product-content">
        <span class="product-category">${wreath.category}</span>
        <h4 class="product-title">${wreath.name}</h4>
        <p class="product-description">${wreath.description}</p>
        <div class="product-rating">
          ${generateStars(wreath.rating)}
          <span>(${wreath.rating})</span>
        </div>
        <div class="product-price">${wreath.price} BYN</div>
      </div>
    </div>
  `
}

// Инициализация каталога
document.addEventListener("DOMContentLoaded", () => {
  console.log("🛍️ Инициализация каталога...")

  // Отображаем венки
  renderWreaths(filteredWreaths)
  updateResultsCount()

  console.log(`✅ Загружено ${wreaths.length} венков в каталог`)

  // Добавляем обработчики событий
  if (searchInput) searchInput.addEventListener("input", filterWreaths)
  if (categoryFilter) categoryFilter.addEventListener("change", filterWreaths)
  if (priceFilter) priceFilter.addEventListener("change", filterWreaths)
})

// Улучшенная функция фильтрации венков для кодов КР/ВР
function filterWreaths() {
  const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : ""
  const selectedCategory = categoryFilter ? categoryFilter.value : "all"
  const selectedPriceRange = priceFilter ? priceFilter.value : "all"

  filteredWreaths = wreaths.filter((wreath) => {
    // Улучшенный поиск по кодам венков
    const matchesSearch =
      searchTerm === "" ||
      wreath.name.toLowerCase().includes(searchTerm) ||
      wreath.description.toLowerCase().includes(searchTerm) ||
      // Поиск по коду венка (КР, ВР)
      (searchTerm.includes("кр") && wreath.name.toLowerCase().includes("кр")) ||
      (searchTerm.includes("вр") && wreath.name.toLowerCase().includes("вр")) ||
      // Поиск по номеру венка
      searchTerm
        .split(/[\s\-/$$$$]+/)
        .some(
          (part) =>
            part.length > 0 &&
            (wreath.name.toLowerCase().includes(part) ||
              wreath.name
                .replace(/[\s\-/$$$$]/g, "")
                .toLowerCase()
                .includes(part)),
        )

    const matchesCategory = selectedCategory === "all" || wreath.category === selectedCategory

    let matchesPrice = true
    if (selectedPriceRange === "low") {
      matchesPrice = wreath.price < 30 // До 30 BYN
    } else if (selectedPriceRange === "medium") {
      matchesPrice = wreath.price >= 30 && wreath.price < 50 // 30 - 50 BYN
    } else if (selectedPriceRange === "high") {
      matchesPrice = wreath.price >= 50 // От 50 BYN
    }

    return matchesSearch && matchesCategory && matchesPrice
  })

  renderWreaths(filteredWreaths)
  updateResultsCount()

  console.log(`🔍 Фильтрация: найдено ${filteredWreaths.length} венков по запросу "${searchTerm}"`)
}

// Функция рендеринга венков
function renderWreaths(wreathsToRender) {
  if (!catalogGrid) return

  if (wreathsToRender.length === 0) {
    catalogGrid.innerHTML = `
      <div class="no-results">
        <h3>По вашему запросу ничего не найдено</h3>
        <p>Попробуйте изменить параметры поиска или посмотрите все венки</p>
        <button class="btn btn-primary" onclick="resetFilters()">Сбросить фильтры</button>
      </div>
    `
    return
  }

  catalogGrid.innerHTML = wreathsToRender.map((wreath) => renderProductCard(wreath)).join("")

  // Повторно наблюдаем за новыми элементами для анимации
  const newCards = catalogGrid.querySelectorAll(".product-card")
  newCards.forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"

    setTimeout(() => {
      card.style.opacity = "1"
      card.style.transform = "translateY(0)"
    }, index * 50)
  })
}

// Обновление счетчика результатов
function updateResultsCount() {
  if (!resultsCount) return

  const count = filteredWreaths.length
  let text = `Найдено ${count}`

  if (count === 1) {
    text += " венок"
  } else if (count >= 2 && count <= 4) {
    text += " венка"
  } else {
    text += " венков"
  }

  resultsCount.textContent = text
}

// Функция сброса фильтров
function resetFilters() {
  if (searchInput) searchInput.value = ""
  if (categoryFilter) categoryFilter.value = "all"
  if (priceFilter) priceFilter.value = "all"
  filterWreaths()
  console.log("🔄 Фильтры сброшены")
}

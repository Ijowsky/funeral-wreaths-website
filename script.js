const wreaths = [
  {
    id: 1,
    name: "Венок-сердце с белыми розами",
    price: 4500,
    image: "images/photovenok1.jpg",
    category: "Элитные",
    rating: 5,
    description: "Изысканный венок в форме сердца из белых роз с зеленой атласной лентой",
  },
  {
    id: 2,
    name: "Венок с серебряной лентой",
    price: 3800,
    image: "images/venok10.jpg",
    category: "Классические",
    rating: 5,
    description: "Торжественный венок с красными розами, белыми цветами и серебряной лентой",
  },
  {
    id: 3,
    name: "Венок с красными розами",
    price: 3500,
    image: "images/venok11.jpg",
    category: "Классические",
    rating: 4,
    description: "Классический венок с красными розами и зелеными листьями",
  },
  {
    id: 4,
    name: "Венок с белыми лилиями",
    price: 4200,
    image: "images/venok12.jpg",
    category: "Элитные",
    rating: 5,
    description: "Элегантный венок с белыми лилиями и жемчужными бусинами",
  },
  {
    id: 5,
    name: "Венок с полевыми цветами",
    price: 2800,
    image: "images/venok13.jpg",
    category: "Простые",
    rating: 3,
    description: "Простой и милый венок с полевыми цветами и травами",
  },
  {
    id: 6,
    name: "Венок с подсолнухами",
    price: 3000,
    image: "images/venok14.jpg",
    category: "Простые",
    rating: 4,
    description: "Яркий и солнечный венок с подсолнухами и желтыми лентами",
  },
  {
    id: 7,
    name: "Венок с ромашками",
    price: 2500,
    image: "images/venok15.jpg",
    category: "Простые",
    rating: 3,
    description: "Нежный венок с ромашками и белыми лентами",
  },
  {
    id: 8,
    name: "Венок с осенними листьями",
    price: 3200,
    image: "images/venok16.jpg",
    category: "Сезонные",
    rating: 4,
    description: "Красочный венок с осенними листьями и ягодами",
  },
  {
    id: 9,
    name: "Венок с еловыми ветками",
    price: 3500,
    image: "images/venok17.jpg",
    category: "Сезонные",
    rating: 5,
    description: "Зимний венок с еловыми ветками, шишками и красными ягодами",
  },
  {
    id: 10,
    name: "Венок с лавандой",
    price: 3800,
    image: "images/venok18.jpg",
    category: "Элитные",
    rating: 4,
    description: "Ароматный венок с лавандой и фиолетовыми лентами",
  },
]


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
        <div class="product-price">${wreath.price} ₽</div>
      </div>
    </div>
  `
}

// Загрузка популярных товаров на главной странице
function loadFeaturedProducts() {
  const featuredContainer = document.getElementById("featuredProducts")

  if (featuredContainer) {
    featuredContainer.innerHTML = featuredWreaths.map((wreath) => renderProductCard(wreath)).join("")
    console.log(`✅ Загружено ${featuredWreaths.length} популярных венков`)
  }
}

// Инициализация страницы
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 Инициализация главной страницы...")

  // Загружаем популярные товары
  loadFeaturedProducts()

  // Плавная прокрутка для якорных ссылок
  const links = document.querySelectorAll('a[href^="#"]')
  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Эффект скрытия/показа хедера при прокрутке
  const header = document.querySelector(".header")
  let lastScrollTop = 0

  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    if (scrollTop > lastScrollTop && scrollTop > 100) {
      header.style.transform = "translateY(-100%)"
    } else {
      header.style.transform = "translateY(0)"
    }

    lastScrollTop = scrollTop
  })

  // Анимация элементов при прокрутке
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Наблюдение за элементами для анимации
  const animatedElements = document.querySelectorAll(".feature-card, .product-card, .section-title")
  animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Отслеживание кликов по номеру телефона
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]')
  phoneLinks.forEach((link) => {
    link.addEventListener("click", function () {
      console.log("📞 Клик по номеру телефона:", this.href)
    })
  })

  console.log("✅ Главная страница готова к работе!")
})

// Анимация загрузки
window.addEventListener("load", () => {
  document.body.classList.add("loaded")
  console.log("🎉 Сайт полностью загружен!")
})

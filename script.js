const featuredWreaths = [
  {
    id: 1,
    name: "КР - 11(50*20)",
    price: 10,
    image: "images/photovenok1.jpg",
    category: "Элитные",
    rating: 5,
    description: "Изысканный венок в форме сердца из белых роз с зеленой атласной лентой",
  },
  {
    id: 2,
    name: "КР - 12(95*55)",
    price: 30,
    image: "images/venok10.jpg",
    category: "Классические",
    rating: 5,
    description: "Торжественный венок с красными розами, белыми цветами и серебряной лентой",
  },
  {
    id: 3,
    name: "КР - 9/1(100*35)",
    price: 30,
    image: "images/venok11.jpg",
    category: "Элитные",
    rating: 5,
    description: "Элегантный венок с белыми розами и фиолетовыми ирисами в серебряном обрамлении",
  },
  {
    id: 4,
    name: "КР - 10/1(100*60)",
    price: 28,
    image: "images/venok12.jpg",
    category: "Элитные",
    rating: 5,
    description: "Роскошный венок с фиолетовыми гвоздиками и белыми лилиями",
  },
  {
    id: 5,
    name: "КР - 9(100*35)",
    price: 20,
    image: "images/venok13.jpg",
    category: "Элитные",
    rating: 5,
    description: "Траурный венок в форме сердца с красными гвоздиками и черной лентой",
  },
  {
    id: 6,
    name: "КР - 8(100*60)",
    price: 30,
    image: "images/venok14.jpg",
    category: "Элитные",
    rating: 5,
    description: "Роскошный венок-сердце с красными розами и белыми цветами в красном обрамлении",
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
        <div class="product-price">${wreath.price} BYN</div>
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

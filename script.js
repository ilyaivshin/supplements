// Данные о бадах для животных
const supplementsData = {
    cats: [
        {
            id: 1,
            name: "Витамины для кошек",
            emoji: "🐱",
            image: "images/cat1.svg",
            description: "Комплекс витаминов и минералов для поддержания здоровья кошек всех возрастов",
            benefits: [
                "Укрепление иммунитета",
                "Улучшение состояния шерсти",
                "Поддержка зрения",
                "Укрепление костей и зубов"
            ],
            price: "890 ₽"
        },
        {
            id: 2,
            name: "Омега-3 для кошек",
            emoji: "🐟",
            image: "images/cat2.svg",
            description: "Жирные кислоты Омега-3 для здоровой кожи и блестящей шерсти",
            benefits: [
                "Здоровая кожа и шерсть",
                "Поддержка суставов",
                "Улучшение работы сердца",
                "Противовоспалительное действие"
            ],
            price: "1200 ₽"
        },
        {
            id: 3,
            name: "Пробиотики для кошек",
            emoji: "🦠",
            image: "images/cat1.svg",
            description: "Полезные бактерии для поддержания здорового пищеварения",
            benefits: [
                "Улучшение пищеварения",
                "Поддержка иммунитета",
                "Снижение стресса",
                "Улучшение аппетита"
            ],
            price: "750 ₽"
        },
        {
            id: 4,
            name: "Таурин для кошек",
            emoji: "❤️",
            image: "images/cat2.svg",
            description: "Незаменимая аминокислота для здоровья сердца и зрения кошек",
            benefits: [
                "Поддержка работы сердца",
                "Улучшение зрения",
                "Репродуктивное здоровье",
                "Нервная система"
            ],
            price: "650 ₽"
        }
    ],
    dogs: [
        {
            id: 5,
            name: "Витамины для собак",
            emoji: "🐕",
            image: "images/dog1.svg",
            description: "Сбалансированный комплекс витаминов для собак всех пород и возрастов",
            benefits: [
                "Укрепление иммунитета",
                "Здоровые кости и зубы",
                "Энергия и активность",
                "Красивая шерсть"
            ],
            price: "950 ₽"
        },
        {
            id: 6,
            name: "Глюкозамин для собак",
            emoji: "🦴",
            image: "images/dog2.svg",
            description: "Поддержка суставов и хрящей для активных собак",
            benefits: [
                "Здоровые суставы",
                "Подвижность и гибкость",
                "Снижение воспалений",
                "Поддержка хрящевой ткани"
            ],
            price: "1400 ₽"
        },
        {
            id: 7,
            name: "Омега-3 для собак",
            emoji: "🐟",
            image: "images/dog1.svg",
            description: "Жирные кислоты для здоровой кожи, шерсти и работы мозга",
            benefits: [
                "Блестящая шерсть",
                "Здоровая кожа",
                "Поддержка мозга",
                "Противовоспалительное действие"
            ],
            price: "1100 ₽"
        },
        {
            id: 8,
            name: "Пробиотики для собак",
            emoji: "🦠",
            image: "images/dog2.svg",
            description: "Полезные бактерии для здорового пищеварения и иммунитета",
            benefits: [
                "Улучшение пищеварения",
                "Укрепление иммунитета",
                "Снижение аллергических реакций",
                "Улучшение усвоения питательных веществ"
            ],
            price: "800 ₽"
        },
        {
            id: 9,
            name: "Кальций для собак",
            emoji: "🦷",
            image: "images/dog1.svg",
            description: "Кальций и витамин D для крепких костей и зубов",
            benefits: [
                "Крепкие кости",
                "Здоровые зубы",
                "Предотвращение остеопороза",
                "Рост и развитие щенков"
            ],
            price: "700 ₽"
        },
        {
            id: 10,
            name: "Антиоксиданты для собак",
            emoji: "🛡️",
            image: "images/dog2.svg",
            description: "Антиоксиданты для борьбы со свободными радикалами и замедления старения",
            benefits: [
                "Замедление старения",
                "Защита от свободных радикалов",
                "Поддержка иммунитета",
                "Улучшение общего самочувствия"
            ],
            price: "900 ₽"
        }
    ]
};

// Текущая выбранная категория
let currentCategory = 'all';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupNavigation();
    displayProducts();
}

// Настройка навигации
function setupNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Убираем активный класс со всех кнопок
            navButtons.forEach(btn => btn.classList.remove('active'));
            
            // Добавляем активный класс к нажатой кнопке
            this.classList.add('active');
            
            // Обновляем текущую категорию
            currentCategory = this.getAttribute('data-category');
            
            // Отображаем продукты для выбранной категории
            displayProducts();
        });
    });
}

// Отображение продуктов
function displayProducts() {
    const container = document.getElementById('productsContainer');
    let productsToShow = [];

    // Определяем какие продукты показывать
    if (currentCategory === 'all') {
        productsToShow = [...supplementsData.cats, ...supplementsData.dogs];
    } else if (currentCategory === 'cats') {
        productsToShow = supplementsData.cats;
    } else if (currentCategory === 'dogs') {
        productsToShow = supplementsData.dogs;
    }

    // Очищаем контейнер
    container.innerHTML = '';

    // Создаем карточки продуктов
    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
}

// Создание карточки продукта
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    // Определяем категорию для стилизации
    const category = supplementsData.cats.find(cat => cat.id === product.id) ? 'cats' : 'dogs';
    const categoryClass = category === 'cats' ? 'category-cats' : 'category-dogs';
    const categoryText = category === 'cats' ? 'Кошки' : 'Собаки';

    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: contain;">
        </div>
        <h3 class="product-title">${product.name}</h3>
        <span class="product-category ${categoryClass}">${categoryText}</span>
        <p class="product-description">${product.description}</p>
        <div class="product-benefits">
            <h4>Польза:</h4>
            <ul class="benefits-list">
                ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
            </ul>
        </div>
        <div class="product-price">${product.price}</div>
        <button class="add-to-cart" onclick="addToCart(${product.id})">
            Добавить в корзину
        </button>
    `;

    return card;
}

// Добавление в корзину (заглушка)
function addToCart(productId) {
    // Находим продукт по ID
    let product = null;
    for (const category in supplementsData) {
        const found = supplementsData[category].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }

    if (product) {
        // Показываем модальное окно "еще в разработке"
        showDevelopmentModal();
    }
}

// Функция показа модального окна "еще в разработке"
function showDevelopmentModal() {
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;
    
    modal.innerHTML = `
        <div style="
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 2rem;
            border-radius: 20px;
            text-align: center;
            color: white;
            max-width: 400px;
            margin: 1rem;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            animation: modalAppear 0.3s ease-out;
        ">
            <div style="font-size: 4rem; margin-bottom: 1rem;">🚧</div>
            <h2 style="margin-bottom: 1rem; font-size: 1.5rem;">Еще в разработке!</h2>
            <p style="margin-bottom: 1.5rem; opacity: 0.9;">
                Эта функция пока что находится в разработке. 
                Скоро мы добавим возможность покупки бадов!
            </p>
            <button onclick="closeModal()" style="
                background: rgba(255, 255, 255, 0.2);
                border: none;
                color: white;
                padding: 0.8rem 2rem;
                border-radius: 25px;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.3s ease;
            " onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" 
               onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                Понятно!
            </button>
        </div>
    `;
    
    // Добавляем CSS анимацию
    const style = document.createElement('style');
    style.textContent = `
        @keyframes modalAppear {
            from {
                opacity: 0;
                transform: scale(0.8) translateY(-50px);
            }
            to {
                opacity: 1;
                transform: scale(1) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(modal);
    
    // Закрытие по клику на фон
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Функция закрытия модального окна
function closeModal() {
    const modal = document.querySelector('div[style*="position: fixed"]');
    if (modal) {
        modal.remove();
    }
}

// Дополнительные функции для будущего развития
function searchProducts(query) {
    // Функция поиска продуктов
    const allProducts = [...supplementsData.cats, ...supplementsData.dogs];
    return allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase())
    );
}

function filterByPrice(minPrice, maxPrice) {
    // Функция фильтрации по цене
    const allProducts = [...supplementsData.cats, ...supplementsData.dogs];
    return allProducts.filter(product => {
        const price = parseInt(product.price.replace(/\D/g, ''));
        return price >= minPrice && price <= maxPrice;
    });
}

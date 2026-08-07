// ==========================================
// WHATSAPP CONFIGURATION & DELIVERY CHARGES
// ==========================================
const WHATSAPP_NUMBER = "923354935544";
const DELIVERY_CHARGES = 250; // Standard Delivery Charges fixed at Rs. 250

const mediaConfig = {
    cloudName: "awgrxf0m", 
    folder: "Assets" 
};

// 9 Products Data Array with 50ml/100ml pricing and persistent reviews storage
const products = [
    {
        id: 1,
        title: "9 to 5 Elite",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785785759/Elite_p9fxm5.png",
        description: "A fresh blend of bergamot and ambroxan unfolds into soft florals, settling over warm woods, musk, and patchouli for a clean, modern, and confident finish.",
        prices: { "50ml": 1800, "100ml": 3000 },
        reviews: [
            { name: "Ahmed Ali", rating: 5, comment: "Amazing lasting and very elite smell! Highly recommended. Zaroor try karein." },
            { name: "Bilal", rating: 4, comment: "Good everyday office wear fragrance, Excellent quality." }
        ]
    },
    {
        id: 2,
        title: "Tommy Chérie",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784447/Tommy_ngvysr.png",
        description: "A vibrant blend of citrus, apple blossom, and fresh wildflowers, softened by mint and clean woody notes for a youthful, refreshing, and effortlessly elegant scent.",
        prices: { "50ml": 1600, "100ml": 2500 },
        reviews: [
            { name: "Nimra", rating: 5, comment: "Super fresh and floral scent, absolutely love it! Will buy again Insha-Allah" }
        ]
    },
    {
        id: 3,
        title: "THE GENTLEMAN",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784445/gentle_k3cndr.png",
        description: "A fresh, woody, and citrusy fragrance that delivers all-day confidence with a clean, sophisticated finish. Perfect for the modern man who wants to stay sharp, professional, and unforgettable.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Mohammad Usman ", rating: 5, comment: "True gentleman vibe. Highly impressed for its longevity." },

        ]
    },
    {
        id: 4,
        title: "Nuit de Oud",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/Nuit_de_Oud_kxyfgr.webp",
        description: "A luxurious fusion of dark oud, velvety rose, and rich saffron, wrapped in smoky incense and resinous woods for a bold, mysterious, and unforgettable presence.",
        prices: { "50ml": 1800, "100ml": 3000 },
        reviews: [
            { name: "Hamza", rating: 5, comment: "Strong oud notes, This perfume exceeded my expectations.Yeh perfume meri umeed se bhi zyada acha nikla." }
        ]
    },
    {
        id: 5,
        title: "Starry Times",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784457/Starry_Time_aulaux.png",
        description: "A creamy bouquet of jasmine, velvety tuberose, and delicate Rangoon Creeper, creating a soft floral scent that is elegant, fresh, and irresistibly feminine.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Ayesha Mughal", rating: 5, comment: "Very elegant and sweet floral touch,The fragrance stays fresh for hours."},
            { name: "Fiza", rating: 5, comment: "The fragrances are really very nice and long lasting. Everyone asks about which perfume I am wearing."},

        ]
    },
    {
        id: 6,
        title: "Flora & Silk",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784672/Flora_q8e6l7.png",
        description: "A fresh fusion of sweet orange, crisp apple, and aromatic herbs, layered with lavender, juniper, patchouli, and amber for a clean, sensual, and confidently masculine signature.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Maheen", rating: 5, comment: "Smooth aroma and great projection, Definitely recommend." }
        ]
    },
    {
        id: 7,
        title: "Asset 9",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Asset_9_nu9amu.webp",
        description: "A fresh fusion of grapefruit, rosemary, and cardamom, blended with smooth cedarwood and suede for a timeless, masculine, and effortlessly sophisticated scent.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Farhan", rating: 5, comment: "Worth every rupee! Absolutely love this fragrance,Dil se pasand aya, sab ko recommend karunga. " }
        ]
    },
    {
        id: 8,
        title: "Nightshade Pulse",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Nightshade_Pulse_n99ejn.webp",
        description: "A rich fusion of saffron, cardamom, candied dates, and burnt caramel, blended with dark oud, leather, cacao, and Madagascar vanilla for a luxurious, seductive, and unforgettable aroma.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Daniyal", rating: 5, comment: "Extremely seductive and unique notes." }
        ]
    },
    {
        id: 9,
        title: "Pure Imagination",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Pure_Imagination_b9ulpt.webp",
        description: "A refined blend of sparkling citrus, fresh ginger, and neroli, resting on smoky black tea and smooth ambroxan for a clean, luxurious, and effortlessly elegant finish.",
        prices: { "50ml": 1800, "100ml": 3000 },
        reviews: [
            { name: "Affan", rating: 4, comment: "Very Nice fragrance and also have lasting in this price" },
            { name: "Muneeb rehman", rating: 5, comment: "Nothing can compete with this fragrance!" }
        ]},
    {
        id: 10,
        title: "GOLDEN HOUR",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785788084/Golden_hour_utjcqm.png",
        description: "A captivating blend of fresh citrus, elegant florals, and rich woody notes. Crafted to create a smooth, long-lasting fragrance that leaves a memorable impression. Sophisticated, timeless, and perfect for every occasion.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            // { name: "Kashif", rating: 4, comment: "Very refreshing scent profile." }
        ]
    },
    {
        id: 11,
        title: "Chrystal Breeze",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785789899/Chrystal_z9uv0i.png",
        description: "A refreshing blend of sparkling pomegranate, juicy yuzu, and crisp icy notes. Soft peony, lotus, and magnolia create a delicate floral heart, while musk, mahogany, and amber leave a warm, lasting finish. Fresh, elegant, and perfect for everyday luxury.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            // { name: "Kashif", rating: 4, comment: "Very refreshing scent profile." }
        ]
    },
    {
        id: 12,
        title: "IMPRESSION OF POISON BY DIOR",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785953575/Poison_jdj44l.webp",
        description: "A captivating blend of rich amber and woody notes. Wrapped in sweet vanilla with a touch of wild berries, Crafted to leave an unforgettable impression.",
        prices: { "50ml": 1400, "100ml": 2500 },
        reviews: [  { name: "Sahar Noor", rating: 5, comment: "Just like the Original one" }  ]
    },
    {
        id: 13,
        title: "INSPIRED BY OFFICE FOR MEN",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785953588/Ofc_for_men_wgfgpx.webp",
        description: "A refreshing burst of bergamot meets delicate jasmine. Balanced with rich woody notes for timeless elegance. A fragrance that defines confidence and sophistication.",
        prices: { "50ml": 1800, "100ml": 3000 },
        reviews: [
            // { name: "Kashif", rating: 4, comment: "Very refreshing scent profile." }
        ]
    },
    {
        id: 14,
        title: "IMPRESSION OF BLOOM BY GUCCI",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785955759/Gucci_bloom_u7t0li.webp",
        description: "Blooming jasmine meets the richness of tuberose. Soft white florals create a fresh, luxurious aura. Crafted for effortless elegance and everyday sophistication.",
        prices: { "50ml": 1500, "100ml": 2500 },
        reviews: [
            { name: "Areeba", rating: 5, comment: "Received my second bottle of Gucci Bloom, and trust me, you guys have perfected the scent so much that it’s impossible to differentiate between the original n impression, as I have both. Longer lasting than before, amazing experience. Thank you!" }
        ]
    },
    {
        id: 15,
        title: "IMPRESSION OF OMBRE NOMADE BY LV",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785953593/Ombre_Nomade_lukmzr.webp",
        description: "A rich fusion of precious agarwood and smooth leather. Enhanced with warm amber and deep oud accords. A bold, luxurious fragrance with an unforgettable presence.",
        prices: { "50ml": 1700, "100ml": 3000 },
        reviews: [
            // { name: "Kashif", rating: 4, comment: "Very refreshing scent profile." }
        ]
    },
    {

        id: 16,
        title: "IMPRESSION OF FLORA BY GUCCI",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785958580/GUCCI_FLORA_q6zlkk.webp",
        description: "Fruity, floral, and fresh citrus notes come together in perfect harmony. A vibrant fragrance that feels crisp, uplifting, and effortlessly refreshing. Perfect for adding a touch of freshness and elegance to every moment.",
        prices: { "50ml": 1500 , "100ml": 2500 },
        reviews: [
            { name: "Samreen", rating: 4, comment: "I have original one as well in 10ml bottle so I ordered it from here and it's really good....projection,lasting is 5 to 6 hours...thanks Wishe Fragrance." }
        ]
    },




    
];

let cart = []; 

// Render Products Function with Reviews & 5-Star Rating System
function displayProducts() {
    const gridContainer = document.getElementById('productGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        // Calculate average rating
        let avgRating = 0;
        if (product.reviews.length > 0) {
            const sum = product.reviews.reduce((acc, r) => acc + r.rating, 0);
            avgRating = (sum / product.reviews.length).toFixed(1);
        }

        card.innerHTML = `
            <div class="product-image">
                <span class="tag">${product.tag}</span>
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
                <div style="font-size: 0.8rem; color: #f39c12; margin-bottom: 8px;">
                    ${generateStarHTML(avgRating)} <span style="color:#666;">(${product.reviews.length} reviews)</span>
                </div>
                <p class="product-description">${product.description}</p>
                
                <div class="size-selector">
                    <label>SELECT SIZE</label>
                    <select id="size-${product.id}" onchange="updatePriceDisplay(${product.id})">
                        <option value="50ml">50ml - Rs. ${product.prices["50ml"].toLocaleString()}.00</option>
                        <option value="100ml">100ml - Rs. ${product.prices["100ml"].toLocaleString()}.00</option>
                    </select>
                </div>

                <div class="product-footer">
                    <span class="product-price" id="price-${product.id}">Rs. ${product.prices["50ml"].toLocaleString()}.00</span>
                    <button class="buy-btn" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-bag" style="margin-right: 8px;"></i> Add
                    </button>
                </div>

                <!-- Reviews and Comments Expandable Section -->
                <div class="reviews-section">
                    <button class="reviews-toggle-btn" onclick="toggleReviews(${product.id})">
                        <i class="fas fa-comments"></i> Customer Reviews (${product.reviews.length})
                    </button>
                    <div id="reviews-box-${product.id}" style="display:none;" class="reviews-container">
                        <div id="reviews-list-${product.id}">
                            ${renderProductReviews(product.reviews)}
                        </div>
                        <form class="review-form" onsubmit="submitReview(event, ${product.id})">
                            <input type="text" id="reviewer-name-${product.id}" placeholder="Your Name" required>
                            <div style="display: flex; align-items: center; justify-content: space-between;">
                                <span style="font-size:0.75rem; color:#555;">Rating:</span>
                                <select id="reviewer-rating-${product.id}" style="padding: 2px; font-size:0.75rem; width: 60px;">
                                    <option value="5">5 ★</option>
                                    <option value="4">4 ★</option>
                                    <option value="3">3 ★</option>
                                    <option value="2">2 ★</option>
                                    <option value="1">1 ★</option>
                                </select>
                            </div>
                            <textarea id="reviewer-comment-${product.id}" placeholder="Write a comment..." rows="2" required></textarea>
                            <button type="submit" class="submit-review-btn">Post Review</button>
                        </form>
                    </div>
                </div>

            </div>
        `;

        gridContainer.appendChild(card);
    });
}

// Generate star visualization icons
function generateStarHTML(rating) {
    let stars = '';
    let fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
        if (i <= fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return `${stars} <strong>${rating}</strong>`;
}

// Render individual review blocks
function renderProductReviews(reviews) {
    if (reviews.length === 0) {
        return `<p style="font-size:0.78rem; color:#777; text-align:center;">No reviews yet. Be the first!</p>`;
    }
    return reviews.map(r => `
        <div class="review-item">
            <strong>${r.name}</strong> <span style="color:#f39c12; font-size:0.7rem;">(${r.rating}★)</span>
            <p style="margin: 2px 0 0 0; color:#444;">${r.comment}</p>
        </div>
    `).join('');
}

// Toggle review section visibility per product card
function toggleReviews(productId) {
    const box = document.getElementById(`reviews-box-${productId}`);
    if (box) {
        box.style.display = box.style.display === 'none' ? 'block' : 'none';
    }
}

// Submit a new product review
function submitReview(event, productId) {
    event.preventDefault();
    const name = document.getElementById(`reviewer-name-${productId}`).value;
    const rating = parseInt(document.getElementById(`reviewer-rating-${productId}`).value);
    const comment = document.getElementById(`reviewer-comment-${productId}`).value;

    const product = products.find(p => p.id === productId);
    if (product) {
        product.reviews.push({ name, rating, comment });
        displayProducts();
        // Keep section open after re-rendering
        setTimeout(() => {
            const box = document.getElementById(`reviews-box-${productId}`);
            if (box) box.style.display = 'block';
        }, 50);
    }
}

// Update Price display dynamically when size dropdown changes
function updatePriceDisplay(productId) {
    const product = products.find(p => p.id === productId);
    const selectedSize = document.getElementById(`size-${productId}`).value;
    const priceElement = document.getElementById(`price-${productId}`);
    
    if (product && priceElement) {
        const currentPrice = product.prices[selectedSize];
        priceElement.innerText = `Rs. ${currentPrice.toLocaleString()}.00`;
    }
}

// Add Item to Cart Array with Selected Size
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = document.getElementById(`size-${productId}`).value;
    const priceNum = product.prices[selectedSize];

    const existingItem = cart.find(item => item.id === productId && item.size === selectedSize);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            image: product.image,
            size: selectedSize,
            priceNum: priceNum,
            quantity: 1
        });
    }

    updateCartUI();
    alert(`Added to Bag: ${product.title} (${selectedSize})`);
}

// Update Cart Count UI
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.innerText = totalCount;
    }
}

// Create Cart & Checkout Modals Dynamically with Delivery Charges Breakdown
function initModals() {
    if (document.getElementById('cartModal')) return;

    const modalsHTML = `
        <!-- Cart Drawer Modal -->
        <div id="cartModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:2000; justify-content:flex-end;">
            <div style="background:#ffffff; border-left:1px solid #ddd; width:100%; max-width:450px; height:100%; display:flex; flex-direction:column; padding:25px; color:#000; box-sizing:border-box;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #eee; padding-bottom:15px;">
                    <h3 style="font-weight:600; letter-spacing:1px; margin:0;">Your Shopping Bag</h3>
                    <button onclick="closeCart()" style="background:none; border:none; color:#000; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                
                <div id="cartItemsList" style="flex-grow:1; overflow-y:auto; padding:20px 0;">
                    <!-- Dynamic Cart Items -->
                </div>

                <div style="border-top:1px solid #eee; padding-top:15px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.95rem; color:#555;">
                        <span>Subtotal:</span>
                        <span id="cartSubtotalPrice">Rs. 0.00</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:12px; font-size:0.95rem; color:#555;">
                        <span>Delivery Charges:</span>
                        <span>Rs. ${DELIVERY_CHARGES.toLocaleString()}.00</span>
                    </div>
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem; border-top:1px solid #f1f1f1; padding-top:8px;">
                        <span>Grand Total:</span>
                        <span id="cartTotalPrice" style="font-weight:600;">Rs. 0.00</span>
                    </div>
                    <button onclick="openCheckoutForm()" style="width:100%; padding:12px; background:#000; color:#fff; border:none; font-weight:600; cursor:pointer; letter-spacing:1px; text-transform:uppercase; border-radius:4px;">Proceed to Checkout</button>
                </div>
            </div>
        </div>

        <!-- Checkout Form Modal -->
        <div id="checkoutModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); z-index:2100; justify-content:center; align-items:center;">
            <div style="background:#ffffff; border:1px solid #ddd; padding:30px; border-radius:8px; width:90%; max-width:400px; color:#000; position:relative; max-height:90vh; overflow-y:auto; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
                <h3 style="margin-bottom:15px; font-weight:600; letter-spacing:1px; border-bottom:1px solid #eee; padding-bottom:10px;">Complete Order via WhatsApp</h3>
                
                <form id="whatsappForm" onsubmit="sendToWhatsApp(event)">
                    <div class="form-group">
                        <label>YOUR NAME</label>
                        <input type="text" id="clientName" required>
                    </div>
                    <div class="form-group">
                        <label>PHONE NUMBER</label>
                        <input type="text" id="clientPhone" required>
                    </div>
                    <div class="form-group">
                        <label>DELIVERY ADDRESS</label>
                        <textarea id="clientAddress" required rows="2"></textarea>
                    </div>
                    <div class="form-group">
                        <label>SELECT PAYMENT METHOD</label>
                        <select id="paymentMethod" required>
                            <option value="" disabled selected>Choose payment option</option>
                            <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                            <option value="Easypaisa">Easypaisa</option>
                            <option value="JazzCash">JazzCash</option>
                            <option value="Direct Bank Transfer">Direct Bank Transfer</option>
                        </select>
                    </div>
                    <div style="display:flex; justify-content:space-between; gap:10px;">
                        <button type="button" onclick="closeCheckoutForm()" style="width:50%; padding:10px; background:transparent; border:1px solid #888; color:#000; cursor:pointer; border-radius:4px; font-weight:600;">Back</button>
                        <button type="submit" style="width:50%; padding:10px; background:#25D366; border:none; color:#fff; font-weight:600; cursor:pointer; border-radius:4px;">Send WhatsApp</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
}

// Open Bag/Cart Drawer
function toggleCart() {
    initModals();
    renderCartItems();
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Render Items inside Cart Drawer with Delivery Calculations
function renderCartItems() {
    const listContainer = document.getElementById('cartItemsList');
    const subtotalPriceEl = document.getElementById('cartSubtotalPrice');
    const totalPriceEl = document.getElementById('cartTotalPrice');
    
    if (cart.length === 0) {
        listContainer.innerHTML = `<p style="color:#777; text-align:center; margin-top:40px;">Your shopping bag is empty.</p>`;
        subtotalPriceEl.innerText = "Rs. 0.00";
        totalPriceEl.innerText = `Rs. ${DELIVERY_CHARGES.toLocaleString()}.00`;
        return;
    }

    let html = '';
    let subtotal = 0;

    cart.forEach(item => {
        let itemTotal = item.priceNum * item.quantity;
        subtotal += itemTotal;

        html += `
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:15px;">
                <img src="${item.image}" alt="${item.title}" style="width:50px; height:60px; object-fit:cover; border-radius:4px;">
                <div style="flex-grow:1; margin-left:15px;">
                    <h4 style="font-size:0.95rem; font-weight:600; margin:0 0 4px 0;">${item.title}</h4>
                    <span style="font-size:0.8rem; color:#666; background:#f1f1f1; padding:2px 6px; border-radius:3px;">Size: ${item.size}</span><br>
                    <span style="font-size:0.85rem; color:#444;">Rs. ${item.priceNum.toLocaleString()}.00 x ${item.quantity}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQuantity(${item.id}, '${item.size}', -1)" style="background:#eee; color:#000; border:none; width:25px; height:25px; cursor:pointer; border-radius:3px; font-weight:bold;">-</button>
                    <span style="font-size:0.9rem; font-weight:600;">${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, '${item.size}', 1)" style="background:#eee; color:#000; border:none; width:25px; height:25px; cursor:pointer; border-radius:3px; font-weight:bold;">+</button>
                </div>
            </div>
        `;
    });

    let grandTotal = subtotal + DELIVERY_CHARGES;
    listContainer.innerHTML = html;
    subtotalPriceEl.innerText = `Rs. ${subtotal.toLocaleString()}.00`;
    totalPriceEl.innerText = `Rs. ${grandTotal.toLocaleString()}.00`;
}

// Change Quantity Logic
function changeQuantity(productId, size, delta) {
    const item = cart.find(p => p.id === productId && p.size === size);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(p => !(p.id === productId && p.size === size));
    }

    updateCartUI();
    renderCartItems();
}

// Proceed to Checkout Form
function openCheckoutForm() {
    if (cart.length === 0) {
        alert("Your bag is empty. Please add items before checkout.");
        return;
    }
    closeCart();
    document.getElementById('checkoutModal').style.display = 'flex';
}

function closeCheckoutForm() {
    document.getElementById('checkoutModal').style.display = 'none';
}

// Send Complete Cart Details to WhatsApp with Delivery Charges Included
function sendToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const address = document.getElementById('clientAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (cart.length === 0) return;

    let productsListStr = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.priceNum * item.quantity;
        subtotal += itemTotal;
        productsListStr += `${index + 1}. *${item.title}* (${item.size}) - Qty: ${item.quantity} - Rs. ${itemTotal.toLocaleString()}.00%0A`;
    });

    let grandTotal = subtotal + DELIVERY_CHARGES;

    const message = `*New Multi-Item Order Placed!*%0A%0A` +
                    `*Products Ordered:*%0A${productsListStr}%0A` +
                    `*Subtotal:* Rs. ${subtotal.toLocaleString()}.00%0A` +
                    `*Delivery Charges:* Rs. ${DELIVERY_CHARGES.toLocaleString()}.00%0A` +
                    `*Grand Total:* Rs. ${grandTotal.toLocaleString()}.00%0A` +
                    `*Payment Method:* ${paymentMethod}%0A%0A` +
                    `*Customer Details:*%0A` +
                    `*Name:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Address:* ${address}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    closeCheckoutForm();
    cart = [];
    updateCartUI();
}

// Send Contact Form Message to WhatsApp
function sendContactToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('contactName').value;
    const phone = document.getElementById('contactPhone').value;
    const userMessage = document.getElementById('contactMessage').value;
    
    const message = `*New Customer Inquiry*%0A%0A` +
                    `*Name:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Message:* ${userMessage}`;

    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    document.getElementById('contactForm').reset();
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initModals();
});
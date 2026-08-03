// ==========================================
// WHATSAPP CONFIGURATION
// ==========================================
const WHATSAPP_NUMBER = "923354935544";

const mediaConfig = {
    cloudName: "awgrxf0m", 
    folder: "Assets" 
};

// 9 Products Data Array with 50ml and 100ml pricing
const products = [
    {
        id: 1,
        title: "9 to 5 Elite",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785785194/Elite_xeaxll.png",
        description: "A fresh blend of bergamot and ambroxan unfolds into soft florals, settling over warm woods, musk, and patchouli for a clean, modern, and confident finish.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 2,
        title: "Tommy Chérie",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784447/Tommy_ngvysr.png",
        description: "A vibrant blend of citrus, apple blossom, and fresh wildflowers, softened by mint and clean woody notes for a youthful, refreshing, and effortlessly elegant scent.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 3,
        title: "THE GENTLEMAN",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784445/gentle_k3cndr.png",
        description: "A fresh, woody, and citrusy fragrance that delivers all-day confidence with a clean, sophisticated finish. Perfect for the modern man who wants to stay sharp, professional, and unforgettable.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 4,
        title: "Nuit de Oud",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/Nuit_de_Oud_kxyfgr.webp",
        description: "A luxurious fusion of dark oud, velvety rose, and rich saffron, wrapped in smoky incense and resinous woods for a bold, mysterious, and unforgettable presence.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 5,
        title: "Starry Times",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784457/Starry_Time_aulaux.png",
        description: "A creamy bouquet of jasmine, velvety tuberose, and delicate Rangoon Creeper, creating a soft floral scent that is elegant, fresh, and irresistibly feminine.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 6,
        title: "Flora & Silk",
        tag: "WOMEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784672/Flora_q8e6l7.png",
        description: "A fresh fusion of sweet orange, crisp apple, and aromatic herbs, layered with lavender, juniper, patchouli, and amber for a clean, sensual, and confidently masculine signature.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 7,
        title: "Asset 9",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Asset_9_nu9amu.webp",
        description: "A fresh fusion of grapefruit, rosemary, and cardamom, blended with smooth cedarwood and suede for a timeless, masculine, and effortlessly sophisticated scent.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 8,
        title: "Nightshade Pulse",
        tag: "UNISEX",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Nightshade_Pulse_n99ejn.webp",
        description: "A rich fusion of saffron, cardamom, candied dates, and burnt caramel, blended with dark oud, leather, cacao, and Madagascar vanilla for a luxurious, seductive, and unforgettable aroma.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    },
    {
        id: 9,
        title: "Pure Imagination",
        tag: "MEN",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Pure_Imagination_b9ulpt.webp",
        description: "A refined blend of sparkling citrus, fresh ginger, and neroli, resting on smoky black tea and smooth ambroxan for a clean, luxurious, and effortlessly elegant finish.",
        prices: {
            "50ml": 1500,
            "100ml": 2500
        }
    }
];

let cart = []; // Multiple items array

// Render Products Function with Size Selection & Dynamic Price Update
function displayProducts() {
    const gridContainer = document.getElementById('productGrid');
    if (!gridContainer) return;
    gridContainer.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <div class="product-image">
                <span class="tag">${product.tag}</span>
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-content">
                <h3 class="product-title">${product.title}</h3>
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
            </div>
        `;

        gridContainer.appendChild(card);
    });
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

// Add Item to Cart Array with Selected Size and Quantity Handling
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const selectedSize = document.getElementById(`size-${productId}`).value;
    const priceNum = product.prices[selectedSize];

    // Check if same product with same size already exists in cart
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

// Create Cart & Checkout Modals Dynamically
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
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem;">
                        <span>Total:</span>
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

// Render Items inside Cart Drawer with size info
function renderCartItems() {
    const listContainer = document.getElementById('cartItemsList');
    const totalPriceEl = document.getElementById('cartTotalPrice');
    
    if (cart.length === 0) {
        listContainer.innerHTML = `<p style="color:#777; text-align:center; margin-top:40px;">Your shopping bag is empty.</p>`;
        totalPriceEl.innerText = "Rs. 0.00";
        return;
    }

    let html = '';
    let grandTotal = 0;

    cart.forEach(item => {
        let itemTotal = item.priceNum * item.quantity;
        grandTotal += itemTotal;

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

    listContainer.innerHTML = html;
    totalPriceEl.innerText = `Rs. ${grandTotal.toLocaleString()}.00`;
}

// Change Quantity Logic based on ID and Size
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

// Send Complete Cart Details to WhatsApp with Sizes
function sendToWhatsApp(event) {
    event.preventDefault();
    
    const name = document.getElementById('clientName').value;
    const phone = document.getElementById('clientPhone').value;
    const address = document.getElementById('clientAddress').value;
    const paymentMethod = document.getElementById('paymentMethod').value;
    
    if (cart.length === 0) return;

    let productsListStr = "";
    let grandTotal = 0;

    cart.forEach((item, index) => {
        let itemTotal = item.priceNum * item.quantity;
        grandTotal += itemTotal;
        productsListStr += `${index + 1}. *${item.title}* (${item.size}) - Qty: ${item.quantity} - Rs. ${itemTotal.toLocaleString()}.00%0A`;
    });

    const message = `*New Multi-Item Order Placed!*%0A%0A` +
                    `*Products Ordered:*%0A${productsListStr}%0A` +
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
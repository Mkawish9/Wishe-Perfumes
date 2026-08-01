// ==========================================
// WHATSAPP CONFIGURATION (Yahan apna WhatsApp number dalein)
// ==========================================
const WHATSAPP_NUMBER = "923354935544"; // Apna number country code ke sath likhein (बिना + sign ke)[cite: 3]

const mediaConfig = {
    cloudName: "awgrxf0m", 
    folder: "Assets" 
};

// 10 Products Data Array[cite: 3]
const products = [
    {
        id: 1,
        title: "9 to 5 Elite",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Bestseller",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/9_to_5_Elite_m1tphp.png",
        description: "A fresh blend of bergamot and ambroxan unfolds into soft florals, settling over warm woods, musk, and patchouli for a clean, modern, and confident finish."
    },
    {
        id: 2,
        title: "Tommy Chérie",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "New Arrival",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/Tommy_Ch%C3%A9rie_lw9x8v.png",
        description: "A vibrant blend of citrus, apple blossom, and fresh wildflowers, softened by mint and clean woody notes for a youthful, refreshing, and effortlessly elegant scent."
    },
    {
        id: 3,
        title: "THE GENTLEMAN",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Limited",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/THE_GENTLEMAN_mcy6fh.png",
        description: "A fresh, woody, and citrusy fragrance that delivers all-day confidence with a clean, sophisticated finish. Perfect for the modern man who wants to stay sharp, professional, and unforgettable."
    },
    {
        id: 4,
        title: "Nuit de Oud",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Popular",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/Nuit_de_Oud_kxyfgr.webp",
        description: "A luxurious fusion of dark oud, velvety rose, and rich saffron, wrapped in smoky incense and resinous woods for a bold, mysterious, and unforgettable presence."
    },
    {
        id: 5,
        title: "Starry Times",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Fresh",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Starry_Times_ac3nyd.webp",
        description: "A creamy bouquet of jasmine, velvety tuberose, and delicate Rangoon Creeper, creating a soft floral scent that is elegant, fresh, and irresistibly feminine."
    },
    {
        id: 6,
        title: "Flora & Silk",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Exclusive",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Flora_Silk_kqchc4.png",
        description: "A fresh fusion of sweet orange, crisp apple, and aromatic herbs, layered with lavender, juniper, patchouli, and amber for a clean, sensual, and confidently masculine signature."
    },
    {
        id: 7,
        title: "Asset 9",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Sweet",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Asset_9_nu9amu.webp",
        description: "A fresh fusion of grapefruit, rosemary, and cardamom, blended with smooth cedarwood and suede for a timeless, masculine, and effortlessly sophisticated scent."
    },
    {
        id: 8,
        title: "Nightshade Pulse",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Trending",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Nightshade_Pulse_n99ejn.webp",
        description: "A rich fusion of saffron, cardamom, candied dates, and burnt caramel, blended with dark oud, leather, cacao, and Madagascar vanilla for a luxurious, seductive, and unforgettable aroma."
    },
    {
        id: 9,
        title: "Pure Imagination",
        priceNum: 1500,
        price: "Rs. 1,500.00",
        tag: "Luxury",
        image: "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Pure_Imagination_b9ulpt.webp",
        description: "A refined blend of sparkling citrus, fresh ginger, and neroli, resting on smoky black tea and smooth ambroxan for a clean, luxurious, and effortlessly elegant finish."
    }
];

let cart = []; // Multiple items array[cite: 3]

// Render Products Function
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
                <div class="product-footer">
                    <span class="product-price">${product.price}</span>
                    <button class="buy-btn" onclick="addToCart(${product.id})" style="background: linear-gradient(135deg, #ffffff, #e0e0e0); color: #000; border: none; padding: 10px 18px; font-weight: 600; font-size: 0.85rem; border-radius: 30px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; box-shadow: 0 4px 15px rgba(255,255,255,0.15); transition: all 0.3s ease; text-transform: uppercase; letter-spacing: 0.5px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255,255,255,0.3)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 4px 15px rgba(255,255,255,0.15)'">
                        <i class="fas fa-shopping-bag" style="margin-right: 8px; font-size: 0.9rem;"></i> Add
                    </button>
                </div>
            </div>
        `;

        gridContainer.appendChild(card);
    });
}

// Add Item to Cart Array with Quantity Handling[cite: 3]
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    
    // Quick notification popup
    alert(`Added to Bag: ${product.title}`);
}

// Update Cart Count UI[cite: 3]
function updateCartUI() {
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.innerText = totalCount;
    }
}

// Create Cart & Checkout Modals Dynamically[cite: 3]
function initModals() {
    if (document.getElementById('cartModal')) return;

    const modalsHTML = `
        <!-- Cart Drawer Modal -->
        <div id="cartModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:2000; justify-content:flex-end;">
            <div style="background:#121212; border-left:1px solid #333; width:100%; max-width:450px; height:100%; display:flex; flex-direction:column; padding:25px; color:#fff; box-sizing:border-box;">
                <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:1px solid #222; padding-bottom:15px;">
                    <h3 style="font-weight:400; letter-spacing:1px;">Your Shopping Bag</h3>
                    <button onclick="closeCart()" style="background:none; border:none; color:#fff; font-size:1.5rem; cursor:pointer;">&times;</button>
                </div>
                
                <div id="cartItemsList" style="flex-grow:1; overflow-y:auto; padding:20px 0;">
                    <!-- Dynamic Cart Items -->
                </div>

                <div style="border-top:1px solid #222; padding-top:15px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:15px; font-size:1.1rem;">
                        <span>Total:</span>
                        <span id="cartTotalPrice" style="font-weight:600;">Rs. 0.00</span>
                    </div>
                    <button onclick="openCheckoutForm()" style="width:100%; padding:12px; background:#fff; color:#000; border:none; font-weight:600; cursor:pointer; letter-spacing:1px; text-transform:uppercase;">Proceed to Checkout</button>
                </div>
            </div>
        </div>

        <!-- Checkout Form Modal -->
        <div id="checkoutModal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.85); z-index:2100; justify-content:center; align-items:center;">
            <div style="background:#121212; border:1px solid #333; padding:30px; border-radius:8px; width:90%; max-width:400px; color:#fff; position:relative; max-height:90vh; overflow-y:auto;">
                <h3 style="margin-bottom:15px; font-weight:400; letter-spacing:1px; border-bottom:1px solid #222; padding-bottom:10px;">Complete Order via WhatsApp</h3>
                
                <form id="whatsappForm" onsubmit="sendToWhatsApp(event)">
                    <div style="margin-bottom:15px;">
                        <label style="display:block; font-size:0.8rem; color:#888; margin-bottom:5px;">YOUR NAME</label>
                        <input type="text" id="clientName" required style="width:100%; padding:10px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:4px;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <label style="display:block; font-size:0.8rem; color:#888; margin-bottom:5px;">PHONE NUMBER</label>
                        <input type="text" id="clientPhone" required style="width:100%; padding:10px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:4px;">
                    </div>
                    <div style="margin-bottom:15px;">
                        <label style="display:block; font-size:0.8rem; color:#888; margin-bottom:5px;">DELIVERY ADDRESS</label>
                        <textarea id="clientAddress" required rows="2" style="width:100%; padding:10px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:4px; resize:none;"></textarea>
                    </div>
                    <div style="margin-bottom:20px;">
                        <label style="display:block; font-size:0.8rem; color:#888; margin-bottom:5px;">SELECT PAYMENT METHOD</label>
                        <select id="paymentMethod" required style="width:100%; padding:10px; background:#1a1a1a; border:1px solid #333; color:#fff; border-radius:4px;">
                            <option value="" disabled selected>Choose payment option</option>
                            <option value="Cash on Delivery (COD)">Cash on Delivery (COD)</option>
                            <option value="Easypaisa">Easypaisa</option>
                            <option value="JazzCash">JazzCash</option>
                            <option value="Direct Bank Transfer">Direct Bank Transfer</option>
                        </select>
                    </div>
                    <div style="display:flex; justify-content:space-between; gap:10px;">
                        <button type="button" onclick="closeCheckoutForm()" style="width:50%; padding:10px; background:transparent; border:1px solid #444; color:#fff; cursor:pointer; border-radius:4px;">Back</button>
                        <button type="submit" style="width:50%; padding:10px; background:#25D366; border:none; color:#fff; font-weight:600; cursor:pointer; border-radius:4px;">Send WhatsApp</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalsHTML);
}

// Open Bag/Cart Drawer[cite: 3]
function toggleCart() {
    initModals();
    renderCartItems();
    document.getElementById('cartModal').style.display = 'flex';
}

function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Render Items inside Cart Drawer[cite: 3]
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
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:15px; border-bottom:1px solid #222; padding-bottom:15px;">
                <img src="${item.image}" alt="${item.title}" style="width:50px; height:60px; object-fit:cover; border-radius:4px;">
                <div style="flex-grow:1; margin-left:15px;">
                    <h4 style="font-size:0.95rem; font-weight:500; margin-bottom:5px;">${item.title}</h4>
                    <span style="font-size:0.85rem; color:#aaa;">${item.price} x ${item.quantity}</span>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="changeQuantity(${item.id}, -1)" style="background:#222; color:#fff; border:none; width:25px; height:25px; cursor:pointer; border-radius:3px;">-</button>
                    <span style="font-size:0.9rem;">${item.quantity}</span>
                    <button onclick="changeQuantity(${item.id}, 1)" style="background:#222; color:#fff; border:none; width:25px; height:25px; cursor:pointer; border-radius:3px;">+</button>
                </div>
            </div>
        `;
    });

    listContainer.innerHTML = html;
    totalPriceEl.innerText = `Rs. ${grandTotal.toLocaleString()}.00`;
}

// Change Quantity Logic[cite: 3]
function changeQuantity(productId, delta) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== productId);
    }

    updateCartUI();
    renderCartItems();
}

// Proceed to Checkout Form[cite: 3]
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

// Send Complete Cart Details to WhatsApp[cite: 3]
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
        productsListStr += `${index + 1}. *${item.title}* (Qty: ${item.quantity}) - Rs. ${itemTotal.toLocaleString()}.00%0A`;
    });

    // Format WhatsApp Message with Multiple Items and Total
    const message = `*New Multi-Item Order Placed!*%0A%0A` +
                    `*Products Ordered:*%0A${productsListStr}%0A` +
                    `*Grand Total:* Rs. ${grandTotal.toLocaleString()}.00%0A` +
                    `*Payment Method:* ${paymentMethod}%0A%0A` +
                    `*Customer Details:*%0A` +
                    `*Name:* ${name}%0A` +
                    `*Phone:* ${phone}%0A` +
                    `*Address:* ${address}`;

    // Redirect to WhatsApp API
    const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    window.open(whatsappURL, '_blank');
    
    closeCheckoutForm();
    cart = []; // Empty cart after order
    updateCartUI();
}

// Initialize on Load[cite: 3]
document.addEventListener('DOMContentLoaded', () => {
    displayProducts();
    initModals();
});
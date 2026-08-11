// Complete & Fixed JavaScript Code for WISHÉ Fragrances

const products = [
    {
        id: 1,
        category: "wishe-original",
        categoryLabel: "men",
        name: "Nuit de Oud",
        description: "A luxurious fusion of dark oud, velvety rose, and rich saffron, wrapped in smoky incense and resinous woods for a bold, mysterious, and unforgettable presence.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595312/Nuit_de_Oud_kxyfgr.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786462537/wishe_nuit_de_oud_set_nedshd.webp"
        ],
        price50ml: "1,800.00",
        price100ml: "3,000.00",
        rating: 5.0,
        reviewsCount: 2,
        userReviews: ["Amazing longevity!", "Pure luxury in a bottle."]
    },
    {
        id: 2,
        category: "wishe-original",
        categoryLabel: "men",
        name: "9 to 5 Elite",
        description: "A fresh blend of bergamot and ambroxan unfolds into soft florals, settling over warm woods, musk, and patchouli for a clean, modern, and confident finish.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785785759/Elite_p9fxm5.png",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786462807/neon_fragrance_set_d4mx9n.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 4.8,
        reviewsCount: 2,
        userReviews: ["Best for office wear.", "Very fresh and professional."]
    },
    {
        id: 3,
        category: "wishe-original",
        categoryLabel: "women",
        name: "Starry Times",
        description: "A creamy bouquet of jasmine, velvety tuberose, and delicate Rangoon Creeper, creating a soft floral scent that is elegant, fresh, and irresistibly feminine.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784457/Starry_Time_aulaux.png",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786462991/starry_times_neon_lrxmvy.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00",
        rating: 4.9,
        reviewsCount: 2,
        userReviews: ["Got so many compliments!", "Stunning evening scent."]
    },
    {
        id: 4,
        category: "wishe-original",
        categoryLabel: "women",
        name: "Flora & Silk",
        description: "A fresh fusion of sweet orange, crisp apple, and aromatic herbs, layered with lavender, juniper, patchouli, and amber for a clean, sensual, and confidently masculine signature.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784672/Flora_q8e6l7.png",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463101/flora_silk_neon_shot_hyzmnk.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00",
        rating: 4.7,
        reviewsCount: 2,
        userReviews: ["So soft and floral.", "Loved these beautiful notes."]
    },
    {
        id: 5,
        category: "wishe-original",
        categoryLabel: "unisex",
        name: "Asset 9",
        description: "A fresh fusion of grapefruit, rosemary, and cardamom, blended with smooth cedarwood and suede for a timeless, masculine, and effortlessly sophisticated scent.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Asset_9_nu9amu.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463253/wishe_asset9_fragrance_i0e3qj.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Very refreshing for summer."]
    },
    {
        id: 6,
        category: "wishe-original",
        categoryLabel: "men",
        name: "THE GENTLEMAN",
        description: "A fresh, woody, and citrusy fragrance that delivers all-day confidence with a clean, sophisticated finish. Perfect for the modern man who wants to stay sharp, professional, and unforgettable.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786394348/perfume_bottle_neon_photorealistic_pshenj.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463487/luxury_neon_product_set_yohade.webp"
        ],
        price50ml: "1,600.00",
        price100ml: "2,500.00",
        rating: 5.0,
        reviewsCount: 1,
        userReviews: ["Strong and masculine scent."]
    },
    {
        id: 7,
        category: "wishe-original",
        categoryLabel: "women",
        name: "Tommy Chérie",
        description: "A vibrant blend of citrus, apple blossom, and fresh wildflowers, softened by mint and clean woody notes for a youthful, refreshing, and effortlessly elegant scent.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785784447/Tommy_ngvysr.png",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463647/tommy_cherie_neon_1_qvqh1k.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Citrus blast is awesome."]
    },
    {
        id: 8,
        category: "wishe-original",
        categoryLabel: "men",
        name: "Nightshade Pulse",
        description: "A rich fusion of saffron, cardamom, candied dates, and burnt caramel, blended with dark oud, leather, cacao, and Madagascar vanilla for a luxurious, seductive, and unforgettable aroma.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Nightshade_Pulse_n99ejn.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463766/nightshade_pulse_neon_wg70qx.webp"
        ],
        price50ml: "1,700.00",
        price100ml: "3,000.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Quality is top notch."]
    },
    {
        id: 81,
        category: "men",
        categoryLabel: "men",
        name: "OFFICE FOR MEN",
        description: "A refreshing burst of bergamot meets delicate jasmine. Balanced with rich woody notes for timeless elegance. A fragrance that defines confidence and sophistication.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391246/ofm_2_atgu3m.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786461089/image_2_ya4uzv.webp"
        ],
        price50ml: "1,600.00",
        price100ml: "3,000.00",
        rating: 5.0,
        reviewsCount: 1,
        userReviews: ["Perfect everyday office perfume."]
    },
    {
        id: 9,
        category: "wishe-original",
        categoryLabel: "unisex",
        name: "GOLDEN HOUR",
        description: "A captivating blend of fresh citrus, elegant florals, and rich woody notes. Crafted to create a smooth, long-lasting fragrance that leaves a memorable impression. Sophisticated, timeless, and perfect for every occasion.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786206366/Golden_hour_zvzyj7.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463967/golden_hour_set_yqkndo.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 5.0,
        reviewsCount: 1,
        userReviews: ["Unique and long lasting."]
    },
    {
        id: 10,
        category: "wishe-original",
        categoryLabel: "women",
        name: "Chrystal Breeze",
        description: "A refreshing blend of sparkling pomegranate, juicy yuzu, and crisp icy notes. Soft peony, lotus, and magnolia create a delicate floral heart, while musk, mahogany, and amber leave a warm, lasting finish. Fresh, elegant, and perfect for everyday luxury.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786206520/crystal_breeze_perfume_xxf6qu.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786464264/crystal_breeze_prism_flatlay_idb6ew.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 0.0,
        reviewsCount: 0,
        userReviews: ["Absolute masterpiece!"]
    },
    {
        id: 11,
        category: "wishe-original",
        categoryLabel: "men",
        name: "Pure Imagination",
        description: "A refined blend of sparkling citrus, fresh ginger, and neroli, resting on smoky black tea and smooth ambroxan for a clean, luxurious, and effortlessly elegant finish.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1785595311/Pure_Imagination_b9ulpt.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786463862/luxury_prism_perfume_set_yheapy.webp"
        ],
        price50ml: "1,600.00",
        price100ml: "2,500.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Very smoky and rich ."]
    },
    {
        id: 12,
        category: "men",
        categoryLabel: "men",
        name: "CREED AVENTUS",
        description: "A luxurious and charismatic fragrance blending fresh pineapple and citrus with a rich, smoky heart. Bold, sophisticated, and effortlessly masculine, with a warm woody finish that leaves a lasting impression.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391327/CA_aylyem.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786462121/luxury_perfume_set_1_gkyuq0.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 0.0,
        reviewsCount: 0,
        userReviews: [""]
    },
    {
        id: 25,
        category: "men",
        categoryLabel: "men",
        name: "DUNHIL DESIRE RED",
        description: "A luxurious and charismatic fragrance blending fresh pineapple and citrus with a rich, smoky heart. Bold, sophisticated, and effortlessly masculine, with a warm woody finish that leaves a lasting impression.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786458870/luxury_perfume_advertisement_2_ny6co5.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786458897/luxury_perfume_set_lds1kr.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 0.0,
        reviewsCount: 0,
        userReviews: [""]
    },
    {
        id: 13,
        category: "men",
        categoryLabel: "men",
        name: "BURBERRY HERO",
        description: "A fresh and woody fragrance with sparkling bergamot and juniper, layered over a warm, smooth cedarwood base. Bold, modern, and masculine, it’s perfect for everyday wear with a confident and sophisticated feel.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786392262/hero_vusa3m.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786398634/burberry_hero_perfume_peh9tt.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00"
    },
    {
        id: 14,
        category: "men",
        categoryLabel: "men",
        name: "OMBRE NOMADE",
        description: "A bold and luxurious fragrance with a smoky, warm character, blending rich oud with a touch of sweetness and spice. Deep, mysterious, and long-lasting—perfect for those who love an intense oriental scent.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391194/ON_z3x4da.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786399413/perfume_product_ombre_nomade_fvif9w.webp"
        ],
        price50ml: "1,600.00",
        price100ml: "3,000.00",
        rating: 0.0,
        reviewsCount: 0
    },
    {
        id: 15,
        category: "men",
        categoryLabel: "men",
        name: "DAVID BACKHAM",
        description: "A fresh, masculine fragrance with a clean citrus opening, aromatic herbs, and a warm woody finish. Elegant and versatile, it’s perfect for everyday wear with a confident, sophisticated feel.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786392491/luxury_perfume_stadium_xuhc8q.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786398149/perfume_product_photography_xul0v9.webp"
        ],
        price50ml: "1,300.00",
        price100ml: "2,500.00"
    },
    {
        id: 16,
        category: "men",
        categoryLabel: "men",
        name: "SAUVAGE",
        description: "A fresh, powerful and masculine fragrance opening with zesty bergamot, balanced by spicy pepper and aromatic lavender. Clean, confident, and intense with a smooth woody-ambery dry down that leaves a strong impression.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786392686/perfume_bottle_bold_label_bwf55l.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786399004/wishe_sauvage_perfume_wrbk0f.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00",
        rating: 0.0,
        reviewsCount: 0
    },
    {
        id: 17,
        category: "women",
        categoryLabel: "women",
        name: "POISON",
        description: "A captivating blend of rich amber and woody notes. Wrapped in sweet vanilla with a touch of wild berries, Crafted to leave an unforgettable impression.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391400/POeson_i1nlxa.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786399643/poison_fragrance_product_k6qxok.webp"
        ],
        price50ml: "1,300.00",
        price100ml: "2,500.00",
        rating: 5.0,
        reviewsCount: 2,
        userReviews: ["Intoxicating fragrance!", "Lasts all day long."]
    },
    {
        id: 18,
        category: "women",
        categoryLabel: "women",
        name: "GUCCI BLOOM",
        description: "Blooming jasmine meets the richness of tuberose. Soft white florals create a fresh, luxurious aura. Crafted for effortless elegance and everyday sophistication.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391640/night_garden_perfume_nfnmrg.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786399704/perfume_product_photograph_1_e9zfvf.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Smells like fresh baked cupcakes."]
    },
    {
        id: 19,
        category: "women",
        categoryLabel: "women",
        name: "BOMBSHELL",
        description: "A vibrant blend of juicy passion fruit with a deliciously sweet and tropical aroma. Its fresh, fruity notes create a light, uplifting, and refreshing scent experience. Perfect for adding a touch of exotic sweetness that lingers beautifully throughout the day.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391765/BS_suoj6c.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786400049/bombshell_perfume_product_wazyvo.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 5.0,
        reviewsCount: 1,
        userReviews: ["Pure Fruity floral elegance."]
    },
    {
        id: 20,
        category: "women",
        categoryLabel: "women",
        name: "GUCCI FLORA",
        description: "Fruity, floral, and fresh citrus notes come together in perfect harmony. A vibrant fragrance that feels crisp, uplifting, and effortlessly refreshing. Perfect for adding a touch of freshness and elegance to every moment.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391486/night_floral_garden_rakhn7.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786399955/gucci_flora_perfume_box_vahhrq.webp"
        ],
        price50ml: "1,500.00",
        price100ml: "2,500.00",
        rating: 4.5,
        reviewsCount: 1,
        userReviews: ["Rich and fruity blend."]
    },
    {
        id: 21,
        category: "women",
        categoryLabel: "women",
        name: "OFFICE FOR WOMEN",
        description: "Fruity, floral, and fresh citrus notes come together in perfect harmony. A vibrant fragrance that feels crisp, uplifting, and effortlessly refreshing. Perfect for adding a touch of freshness and elegance to every moment.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786392017/ofw_gdj283.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786400202/perfume_packaging_update_zmvubw.webp"
        ],
        price50ml: "1,400.00",
        price100ml: "2,500.00",
        rating: 0.0,
        reviewsCount: 0
    },
    {
        id: 22,
        category: "women",
        categoryLabel: "women",
        name: "MY BURBERRY",
        description: "A sophisticated floral fragrance with fresh sweet pea and bergamot, softened by elegant rose and a warm, earthy base. Chic, graceful, and timeless, perfect for adding a refined touch to everyday wear.",
        images: [
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786391901/my_byr_azb5lr.webp",
            "https://res.cloudinary.com/awgrxf0m/image/upload/v1786400247/perfume_product_my_burberry_kv57ok.webp"
        ],
        price50ml: "1,300.00",
        price100ml: "2,500.00",
        rating: 5.0,
        reviewsCount: 0
    }
];

let cart = [];
const activeImageIndices = {};
const selectedCardSizes = {};
let currentCategoryFilter = 'all';

document.addEventListener("DOMContentLoaded", () => {
    // Pre-load all secondary images
    products.forEach(product => {
        if (product.images && product.images.length > 1) {
            const img = new Image();
            img.src = product.images[1];
        }
    });
    
    renderProducts(products);
});

function renderProducts(productsToRender) {
    const container = document.getElementById("productGrid");
    if (!container) return; 
    
    container.innerHTML = "";

    let listToDisplay = productsToRender;
    if (currentCategoryFilter !== 'all') {
        listToDisplay = productsToRender.filter(p => p.category === currentCategoryFilter);
    }

    if (listToDisplay.length === 0) {
        container.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#777; padding: 40px;">No fragrances found matching your selection.</p>`;
        return;
    }

    const categoriesToDisplay = currentCategoryFilter === 'all' 
        ? [
            { key: "wishe-original", title: "WISHÉ Original" },
            { key: "men", title: "Men's Collection" },
            { key: "women", title: "Women's Collection" }
          ]
        : [
            { 
                key: currentCategoryFilter, 
                title: currentCategoryFilter === 'wishe-original' ? "WISHÉ Original" : (currentCategoryFilter === 'men' ? "Men's Collection" : "Women's Collection") 
            }
          ];

    categoriesToDisplay.forEach(cat => {
        const catProducts = listToDisplay.filter(p => p.category === cat.key);
        
        if (catProducts.length > 0) {
            if (currentCategoryFilter === 'all') {
                const sectionHeading = document.createElement("div");
                sectionHeading.className = "category-section-title";
                sectionHeading.style.gridColumn = "1 / -1";
                sectionHeading.innerHTML = `<h2 style="margin: 30px 0 15px 0; font-size: 1.5rem; border-bottom: 2px solid #111; padding-bottom: 5px;">${cat.title}</h2>`;
                container.appendChild(sectionHeading);
            }

            catProducts.forEach(product => {
                const card = document.createElement("div");
                card.className = "product-card";
                
                if (activeImageIndices[product.id] === undefined) {
                    activeImageIndices[product.id] = 0;
                }
                const currentImgIdx = activeImageIndices[product.id];
                const currentImgSrc = (product.images && product.images[currentImgIdx]) ? product.images[currentImgIdx] : (product.images ? product.images[0] : '');

                let reviewsHtml = '';
                if(product.userReviews && product.userReviews.length > 0) {
                    product.userReviews.forEach(rev => {
                        reviewsHtml += `<div style="font-size: 0.75rem; color: #555; background: #f9f9f9; padding: 4px 8px; margin-top: 4px; border-radius: 3px; border-left: 2px solid #d4af37;">💬 "${rev}"</div>`;
                    });
                }

                card.innerHTML = `
                    <div class="product-category-badge">${product.categoryLabel}</div>
                    <div style="position: relative; cursor: pointer; overflow: hidden;" 
                         onmouseover="nextProductImage(${product.id})" 
                         onclick="nextProductImage(${product.id})" 
                         title="Hover or click to view next image">
                        <img id="product-img-${product.id}" src="${currentImgSrc}" alt="${product.name}" class="product-image" style="transition: opacity 0.2s ease-in-out;" onerror="this.src='https://via.placeholder.com/300x300?text=WISH%C3%89+Fragrance'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${product.name}</h3>
                        
                        <div class="product-reviews">
                            <span class="stars"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></span>
                            <span class="rating-num"><b>${product.rating}</b> (${product.reviewsCount} reviews)</span>
                        </div>
                        
                        <p class="product-desc">${product.description}</p>
                        
                        <div class="size-selector">
                            <button class="size-btn active" onclick="changeSize(${product.id}, '50ml', this)">50ml</button>
                            <button class="size-btn" onclick="changeSize(${product.id}, '100ml', this)">100ml</button>
                        </div>

                        <div class="product-price" id="price-${product.id}">Rs. ${product.price50ml}</div>
                        
                        <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Bag</button>

                        <div style="margin-top: 15px; border-top: 1px solid #eee; padding-top: 10px;">
                            <div style="font-size: 0.8rem; font-weight: 700; margin-bottom: 5px;">Customer Reviews:</div>
                            <div id="reviews-list-${product.id}" style="max-height: 80px; overflow-y: auto; margin-bottom: 8px;">
                                ${reviewsHtml}
                            </div>
                            <div style="display: flex; gap: 5px;">
                                <input type="text" id="review-input-${product.id}" placeholder="Write a review..." style="flex:1; padding: 5px 8px; font-size: 0.75rem; border: 1px solid #ddd; border-radius: 3px; outline: none;">
                                <button onclick="addReview(${product.id})" style="background: #111; color: #fff; border: none; padding: 5px 10px; font-size: 0.75rem; border-radius: 3px; cursor: pointer;">Post</button>
                            </div>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    });
}

function nextProductImage(productId) {
    const product = products.find(p => p.id === productId);
    if (product && product.images && product.images.length > 1) {
        if (activeImageIndices[productId] === undefined) {
            activeImageIndices[productId] = 0;
        }
        activeImageIndices[productId] = (activeImageIndices[productId] + 1) % product.images.length;
        
        const imgElement = document.getElementById(`product-img-${productId}`);
        if (imgElement) {
            imgElement.style.opacity = '0';
            setTimeout(() => {
                imgElement.src = product.images[activeImageIndices[productId]];
                imgElement.style.opacity = '1';
            }, 150);
        }
    }
}

function addReview(productId) {
    const inputField = document.getElementById(`review-input-${productId}`);
    if (!inputField) return;
    const commentText = inputField.value.trim();
    
    if(!commentText) {
        alert("Please write something before posting!");
        return;
    }

    const product = products.find(p => p.id === productId);
    if(product) {
        if(!product.userReviews) {
            product.userReviews = [];
        }
        product.userReviews.push(commentText);
        product.reviewsCount += 1;
        inputField.value = "";
        renderProducts(products);
    }
}

function filterProducts() {
    const searchInput = document.getElementById("searchInput");
    if (!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.categoryLabel.toLowerCase().includes(query)
    );
    renderProducts(filtered);
}

function changeSize(productId, size, btnElement) {
    selectedCardSizes[productId] = size;
    
    const parent = btnElement.parentElement;
    parent.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    const product = products.find(p => p.id === productId);
    const priceEl = document.getElementById(`price-${productId}`);
    if (product && priceEl) {
        priceEl.innerText = size === '100ml' ? `Rs. ${product.price100ml}` : `Rs. ${product.price50ml}`;
    }
}

function filterAndScroll(category) {
    currentCategoryFilter = category;
    renderProducts(products);
    const productsSection = document.getElementById("products");
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleCart() {
    const cartSidebar = document.getElementById("cartSidebar");
    if (cartSidebar) {
        cartSidebar.classList.toggle("open");
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const size = selectedCardSizes[productId] || '50ml';
    const price = size === '100ml' ? product.price100ml : product.price50ml;

    const existingItem = cart.find(item => item.id === productId && item.size === size);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            size: size,
            price: price,
            image: product.images[0],
            quantity: 1
        });
    }

    updateCartUI();
    toggleCart();
}

function updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    const cartItems = document.getElementById("cartItems");
    const cartTotalPrice = document.getElementById("cartTotalPrice");

    let totalCount = 0;
    let totalPrice = 0;

    if (cartItems) {
        cartItems.innerHTML = "";
        if (cart.length === 0) {
            cartItems.innerHTML = `<p style="text-align:center; color:#777; padding:20px;">Your shopping bag is empty.</p>`;
        } else {
            cart.forEach((item, index) => {
                totalCount += item.quantity;
                const cleanPrice = parseFloat(item.price.replace(/,/g, ''));
                const itemTotal = cleanPrice * item.quantity;
                totalPrice += itemTotal;

                const div = document.createElement("div");
                div.className = "cart-item";
                div.style.cssText = "display: flex; gap: 10px; margin-bottom: 15px; border-bottom: 1px solid #eee; padding-bottom: 10px; align-items: center;";
                div.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                    <div style="flex: 1;">
                        <h4 style="font-size: 0.9rem; margin: 0;">${item.name} (${item.size})</h4>
                        <p style="font-size: 0.8rem; color: #555; margin: 2px 0;">Rs. ${item.price} x ${item.quantity}</p>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #ff4d4d; cursor: pointer; font-size: 1rem;"><i class="fas fa-trash"></i></button>
                `;
                cartItems.appendChild(div);
            });
        }
    }

    if (cartCount) cartCount.innerText = totalCount;
    if (cartTotalPrice) cartTotalPrice.innerText = `Rs. ${totalPrice.toLocaleString()}.00`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Hello WISHÉ Fragrances, I want to place an order:\n\n";
    let total = 0;

    cart.forEach(item => {
        const cleanPrice = parseFloat(item.price.replace(/,/g, ''));
        const subtotal = cleanPrice * item.quantity;
        total += subtotal;
        message += `- ${item.name} (${item.size}) x ${item.quantity} = Rs. ${subtotal.toLocaleString()}.00\n`;
    });

    message += `\nTotal Amount: Rs. ${total.toLocaleString()}.00`;
    message += "\nPlease confirm my order details.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923354935544?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function sendContactToWhatsApp(event) {
    event.preventDefault();
    const name = document.getElementById("contactName").value.trim();
    const phone = document.getElementById("contactPhone").value.trim();
    const userMsg = document.getElementById("contactMessage").value.trim();

    const message = `Hello WISHÉ Support,\n\nName: ${name}\nPhone: ${phone}\nMessage: ${userMsg}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/923354935544?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function toggleMobileMenu() {
    const navMenu = document.getElementById("navMenu");
    const hamburgerIcon = document.querySelector("#hamburger i");
    
    if (navMenu) {
        navMenu.classList.toggle("active");
    }
    
    if (hamburgerIcon) {
        if (navMenu.classList.contains("active")) {
            hamburgerIcon.classList.remove("fa-bars");
            hamburgerIcon.classList.add("fa-times");
        } else {
            hamburgerIcon.classList.remove("fa-times");
            hamburgerIcon.classList.add("fa-bars");
        }
    }
}
const products = [
    { 
        name: 'Nordic Ceramic Vase', 
        description: 'Matte glaze, limited edition, handmade by artisans', 
        price: 250, 
        image: 'https://creativefemininity.co.uk/cdn/shop/products/H6c7f546ce2944a44835edd34132806d0O.jpg?v=1661798541&width=990',
        alt: 'Elegant ceramic vase with matte finish'
    },
    { 
        name: 'Merino Wool Blanket', 
        description: 'Oversized, natural dyes, ethically sourced wool', 
        price: 199, 
        image: 'https://i5.walmartimages.com/seo/Woolly-Mammoth-Woolen-Company-Rustic-Gray-Merino-Wool-Throw-Blanket-Adult-4-lbs-66-x-90_93240de4-861f-4e63-a1aa-14f00a054833.cd7d5548a5996d009d090ff613d869bf.jpeg',
        alt: 'Soft wool blanket with natural patterns'
    },
    { 
        name: 'Brass Arc Lamp', 
        description: 'Adjustable arm, warm LED, hand-polished brass', 
        price: 299, 
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&auto=format&fit=crop',
        alt: 'Elegant brass floor lamp with arc design'
    },
    { 
        name: 'Full-Grain Leather Tote', 
        description: 'Hand-stitched, vegetable-tanned leather', 
        price: 999, 
        image: 'https://images.unsplash.com/photo-1591561954557-26941169b49e?w=600&auto=format&fit=crop',
        alt: 'Premium leather tote bag'
    },
    { 
        name: 'Concrete Side Table', 
        description: 'Indoor/outdoor, minimalist architectural design', 
        price: 1299, 
        image: 'https://image.lampsplus.com/is/image/b9gt8/button-dark-gray-concrete-round-indoor-outdoor-accent-table__35x65cropped.jpg?qlt=65&wid=1296&hei=1296&op_sharpen=1&fmt=jpeg',
        alt: 'Modern concrete side table'
    },
    { 
        name: 'Porcelain Tea Set', 
        description: '2 cups + pot, hand-painted indigo pattern', 
        price: 550, 
        image: 'https://tse4.mm.bing.net/th/id/OIP.5ZIuxu7kRUlVyP9TGj1DYwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
        alt: 'Elegant porcelain tea set'
    },
    { 
        name: 'Oak Cutting Board', 
        description: 'End-grain, hand-finished with mineral oil', 
        price: 150, 
        image: 'https://i.etsystatic.com/18038590/r/il/cf03a9/6108770789/il_1080xN.6108770789_szun.jpg',
        alt: 'Wooden cutting board'
    },
    { 
        name: 'Linen Bed Sheets', 
        description: 'European flax, stone-washed, 300 thread count',     
        price: 800, 
        image: 'https://5.imimg.com/data5/SELLER/Default/2026/3/590407904/DF/WU/YG/73376713/linen-bed-sheet-1000x1000.jpg',
        alt: 'Linen bed sheets'
    },
    { 
        name: 'Water Dispenser', 
        description: 'Good for home and office use, hot and cold water dispenser', 
        price: 13595, 
        image: 'https://th.bing.com/th/id/R.3695aaf284c7243ce697e312bc969f17?rik=rR8KBXY3XAjJVQ&riu=http%3a%2f%2fliquidationnation.ca%2fcdn%2fshop%2ffiles%2fClassic-Top-Load-Hot-and-Cold-Water-Dispenser-Black.jpg%3fv%3d1737045698&ehk=q0YErg%2bLiPYsPr40KaM3GZeirRIrEx8QJIwyrj12RFw%3d&risl=&pid=ImgRaw&r=0',
        alt: 'Water dispenser'
    },
    { 
        name: 'Handwoven Basket', 
        description: 'Seagrass with leather straps', 
        price: 199, 
        image: 'https://img.freepik.com/premium-photo/woven-seagrass-basket-with-lid-leather-handles_921026-11823.jpg?w=2000',
        alt: 'Handwoven storage basket'
    },
    { 
        name: 'Copper Cocktail Set', 
        description: 'Good quality copper, includes shaker, strainer, jigger, and muddler', 
        price: 599, 
        image: 'https://images.squarespace-cdn.com/content/v1/5e5663314f01390f23459410/1615554094254-LDC6ZYHKFR1GRO6C668Z/sleek+copper+cocktail+set.jpg?format=1000w',
        alt: 'Copper cocktail set'
    },
    { 
        name: 'Macrame Wall Hanging', 
        description: 'Hand-knotted, natural cotton rope', 
        price: 200, 
        image: 'https://tse1.mm.bing.net/th/id/OIP.ewBAMmIMMUpYB07dGCDvVAHaJ3?w=1588&h=2117&rs=1&pid=ImgDetMain&o=7&rm=3',
        alt: 'Macrame wall hanging'
    }
];

function formatPrice(price) {
    return '₱' + price.toLocaleString();
}

function loadProducts() {
    const container = document.getElementById('products-container');
    if (!container) return;
    
    let html = '';
    products.forEach(p => {
        html += `<div class="col-sm-6 col-lg-4 col-xl-3">
            <div class="product-card card">
                <div class="product-image-wrapper">
                    <img src="${p.image}" class="product-card-img" alt="${p.alt || p.name}" loading="lazy">
                    <div class="image-overlay">
                        <span class="zoom-icon"><i class="bi bi-arrows-fullscreen"></i></span>
                    </div>
                </div>
                <div class="card-body">
                    <h3 class="product-title">${p.name}</h3>
                    <p class="product-description">${p.description}</p>
                    <div class="price">${formatPrice(p.price)}</div>
                    <button class="btn-outline-secondary-modern" onclick="demoAdd('${p.name.replace(/'/g, "\\'")}')">
                        <span>Add to order</span>
                        <i class="bi bi-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>`;
    });
    container.innerHTML = html;
}

function populateSelect() {
    const select = document.getElementById('productSelect');
    if (!select) return;
    
    let opts = '<option selected disabled>Choose a product</option>';
    products.forEach(p => { 
        opts += `<option value="${p.name}">${p.name} — ${formatPrice(p.price)}</option>`; 
    });
    select.innerHTML = opts;
}

window.demoAdd = (name) => {
    const product = products.find(p => p.name === name);
    
    alert(`✨ Added to your order (demo)\n\nProduct: ${name}\nPrice: ${formatPrice(product?.price || 0)}\n\nThis is a demo no actual charge will be made.`);
    
    const select = document.getElementById('productSelect');
    if (select) {
        for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value === name) {
                select.selectedIndex = i;
                break;
            }
        }
    }
    
    const cartIcon = document.querySelector('.bi-bag')?.parentElement;
    if (cartIcon) {
        cartIcon.style.transform = 'scale(1.2)';
        setTimeout(() => {
            cartIcon.style.transform = 'scale(1)';
        }, 200);
    }
};

function setupFormHandler() {
    const form = document.getElementById('orderForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('fullName').value.trim();
        const email = document.getElementById('emailAddress').value.trim();
        const product = document.getElementById('productSelect').value;
        const qty = document.getElementById('quantityInput').value;

        // Validation
        if (!name || !email || !product || !qty) {
            alert('Please complete all fields.');
            return;
        }
        
        if (!email.includes('@') || !email.includes('.')) {
            alert('Please use a valid email address.');
            return;
        }
        
        if (qty < 1) {
            alert('Quantity must be at least 1.');
            return;
        }

        const selectedProduct = products.find(p => p.name === product);
        const total = selectedProduct ? selectedProduct.price * qty : 0;

        alert(`✅ Order received (demo)\n\nName: ${name}\nEmail: ${email}\nProduct: ${product}\nQuantity: ${qty}\nTotal: ${formatPrice(total)}\n\nWe'll reply within 24 hours.`);
        
        form.reset();
    });
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                document.querySelectorAll('.nav-link').forEach(link => {
                    link.classList.remove('active');
                });
                this.classList.add('active');
            }
        });
    });
}

function setupImageHandling() {
    const images = document.querySelectorAll('.product-card-img');
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'https://placehold.co/600x400/f5f2ed/1e2b37?text=Product+Image';
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    populateSelect();
    setupFormHandler();
    setupSmoothScrolling();
    
    setTimeout(setupImageHandling, 500);
});
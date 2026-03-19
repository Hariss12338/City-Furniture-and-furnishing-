// --- Data ---
        const products = [
            { id: '11', cat: 'dining', name: 'Elysium Teak Dining Ensemble', price: 'â‚¹1,45,000', dims: '76"L x 40"W x 30"H', material: 'Premium Teak Wood', type: 'table', desc: 'A masterclass in luxury dining. This exquisite table is handcrafted from sustainably sourced teak, offering a regal aesthetic for unforgettable family gatherings.', img: 'https://lh3.googleusercontent.com/p/AF1QipNPprw7whiuypChAKkQymHkhhG4z4Pu4ZRqtDzi=s680-w680-h510-rw' },
            { id: '12', cat: 'dining', name: 'Opulence Marble-Top Dining', price: 'â‚¹1,85,000', dims: '80"L x 42"W x 30"H', material: 'Teak Wood & Marble', type: 'table', desc: 'Seamlessly blending sheer elegance with structural integrity, this dining table pairs a solid teak base with a majestic finish, turning every meal into a royal banquet.', img: 'https://lh3.googleusercontent.com/p/AF1QipNsWAOnlKLpGnSeP1ocBGFRbeyJ6MTAa6ML8z8I=s680-w680-h510-rw' },
            { id: '13', cat: 'dining', name: 'Sovereign Grandeur Table', price: 'â‚¹1,60,000', dims: '72"L x 36"W x 30"H', material: 'Solid Oak & Teak', type: 'table', desc: 'A statement of pure sophistication. The Sovereign dining table showcases stunning natural wood grains, enveloped in a rich, protective polish for lifetime durability.', img: 'https://lh3.googleusercontent.com/p/AF1QipOISSPsbT9JgmSoW1RMP0qzpB58im1D7gRxziRV=s680-w680-h510-rw' },
            { id: '14', cat: 'coffee', name: 'Aristocrat Tea Poy', price: 'â‚¹22,000', dims: '36"L x 24"W x 18"H', material: 'Walnut Finish Wood', type: 'table', desc: 'Redefining the center of your living room. The Aristocrat Tea Poy combines mid-century charm with modern minimalism, perfect for hosting your evening tea in style.', img: 'https://lh3.googleusercontent.com/p/AF1QipMpwnDbsEkQBbjbfD14Rkx-lmfF_p06AT9B7_5N=s680-w680-h510-rw' },
            { id: '15', cat: 'sofas', name: 'Luminance Luxury Sofa', price: 'â‚¹75,000', dims: '88"W x 38"D x 34"H', material: 'Teak Frame & Premium Fabric', type: 'sofa', desc: 'Sink into unparalleled comfort. This luxury sofa set features sweeping curves, an exposed premium teak base, and high-resilience foam for a truly regal seating experience.', img: 'https://lh3.googleusercontent.com/p/AF1QipOBc1xLMeXLz_D-j3sV4VNTXmJB9PGj6sCq8UJ2=s680-w680-h510-rw' },
            { id: '16', cat: 'sofas', name: 'Monarch Sectional Couch', price: 'â‚¹95,000', dims: '110"W x 60"D x 32"H', material: 'Oak Wood & Velvet', type: 'sofa', desc: 'Expansive, plush, and inherently glamorous. The Monarch Sectional invites you to stretch out in lavish proportions while grounding your space with an architectural wooden accent.', img: 'https://lh3.googleusercontent.com/p/AF1QipNPZXh3dysGjUbn3isMkIkxm00O0u5kVajZN98A=s680-w680-h510-rw' },
            { id: '17', cat: 'sofas', name: 'Aethelred Classic Set', price: 'â‚¹88,000', dims: '84"W x 36"D x 34"H', material: 'Sheesham & Linen', type: 'sofa', desc: 'Where classical design meets modern upholstery. Detailed tufting and hand-carved legs make this sofa a visually striking centerpiece for the eclectic home.', img: 'https://lh3.googleusercontent.com/p/AF1QipOI2-nz2RFsruvmpYTHzmHhH6kkCcvtsL34IFUJ=s680-w680-h510-rw' },
            { id: '18', cat: 'sofas', name: 'The Chesterfield Crown', price: 'â‚¹1,15,000', dims: '92"W x 40"D x 30"H', material: 'Solid Teak & Leatherette', type: 'sofa', desc: 'A true icon of luxury. This deeply buttoned, imposing sofa commands attention, offering a magnificent presence alongside uncompromising durability.', img: 'https://lh3.googleusercontent.com/p/AF1QipMWy8Ak1qO4TkPPfhOVCtIapuWDmyZLL_8bsWHV=s680-w680-h510-rw' },
            { id: '19', cat: 'prayer', name: 'Divine Aura Mantapa', price: 'â‚¹35,000', dims: '30"W x 18"D x 48"H', material: 'Sacred Teak Wood', type: 'wardrobe', desc: 'An abode of tranquility. Hand-carved by master artisans, this prayer unit radiates spiritual elegance and features intricate lattice work for your holy space.', img: 'https://lh3.googleusercontent.com/p/AF1QipO9QrMmUT8NYHLKfHJIUk3ArjuwkOmCc5s4JlE6=s680-w680-h510-rw' },
            { id: '20', cat: 'prayer', name: 'Serenity Pooja Mandir', price: 'â‚¹42,000', dims: '36"W x 20"D x 60"H', material: 'Premium Rosewood Finish', type: 'wardrobe', desc: 'Elevate your daily devotion. The Serenity Mandir incorporates ample storage for prayer essentials alongside a magnificently sculpted dome top.', img: 'https://lh3.googleusercontent.com/p/AF1QipPtdvERCMNvpg8iz9eCgspht_UfGgzPsLp4H5MU=s680-w680-h510-rw' },
            { id: '21', cat: 'prayer', name: 'Ethereal Wooden Shrine', price: 'â‚¹28,000', dims: '24"W x 15"D x 36"H', material: 'Solid Teak', type: 'wardrobe', desc: 'Compact luxury for sacred moments. Exceptionally detailed woodwork framing an illuminated center, ensuring your prayer area feels deeply revered.', img: 'https://lh3.googleusercontent.com/p/AF1QipMIEcj6N6UFXghNKg4Dnx4HlxppWAYzod3VnWOz=s680-w680-h510-rw' },
            { id: '22', cat: 'prayer', name: 'Celestial Carved Unit', price: 'â‚¹55,000', dims: '42"W x 22"D x 72"H', material: 'Premium Teak Wood', type: 'wardrobe', desc: 'A monumental expression of faith and craftsmanship. Featuring grand pillars, detailed inscriptions, and dedicated brass bell hangers for a complete spiritual ambiance.', img: 'https://lh3.googleusercontent.com/p/AF1QipN-GkHdUFKolJWpUZh9dUhlmWPZKZPMK18PAyzp=s680-w680-h510-rw' },
            { id: '23', cat: 'wardrobes', name: 'Regal Storage Cupboard', price: 'â‚¹65,000', dims: '48"W x 22"D x 78"H', material: 'Walnut & Plywood', type: 'wardrobe', desc: 'Safeguard your wardrobe in absolute luxury. A towering wooden masterpiece with soft-close mechanisms and rich, polished textures that enhance any bedroom aesthetic.', img: 'https://lh3.googleusercontent.com/p/AF1QipP7tJ-MV_Z9NfDOzoIFnUyZuUuRKYmRcgud1NAU=s680-w680-h510-rw' },
            { id: '24', cat: 'wardrobes', name: 'Vanguard Teak Armoire', price: 'â‚¹85,000', dims: '60"W x 24"D x 84"H', material: 'Solid Teak & Veneer', type: 'wardrobe', desc: 'Space meets splendor. The Vanguard Armoire is designed with intelligently segmented compartments, enveloped in a breathtakingly seamless wood grain facade.', img: 'https://lh3.googleusercontent.com/p/AF1QipM8z1Gg3J3jOU8sOZJxZV2Yu4Be8MLxXRJr1v2o=s680-w680-h510-rw' },
            { id: '25', cat: 'wardrobes', name: 'Majesty Wardrobe Unit', price: 'â‚¹72,000', dims: '54"W x 22"D x 80"H', material: 'Sheesham Wood', type: 'wardrobe', desc: 'Timeless utility elevated to an art form. Boasting antique brass handles, pristine finishing, and an imposing stance that defines top-tier luxury.', img: 'https://lh3.googleusercontent.com/p/AF1QipNEjrwADbQD6uys7VzXvRwzERjFn9KH_mcTzdz3=s680-w680-h510-rw' },
            { id: '26', cat: 'wardrobes', name: 'Imperial Double Cupboard', price: 'â‚¹98,000', dims: '72"W x 24"D x 84"H', material: 'Premium Oak Finish', type: 'wardrobe', desc: 'A colossal storage solution offering bespoke elegance. The sliding or sweeping doors open to a world of organized perfection, wrapped in magnificent wood.', img: 'https://lh3.googleusercontent.com/p/AF1QipMHihfUiAWVZ33b7MwV8cY4ZhXtTpQfnCdXQu2Y=s680-w680-h510-rw' },
            { id: '27', cat: 'wardrobes', name: 'Chateau Organizer', price: 'â‚¹58,000', dims: '40"W x 20"D x 72"H', material: 'Teak Wood & Glass', type: 'wardrobe', desc: 'For those who appreciate the finer details. This cupboard merges solid wood framing with frosted glass accents, bringing a touch of modern luminosity to your chamber.', img: 'https://lh3.googleusercontent.com/p/AF1QipP7OgiTNufbSwvpuSaAJszWkgnuxyUuY7JwImWD=s680-w680-h510-rw' }
        ];

        // --- Loading & Initialization ---
        window.addEventListener('load', () => {
            gsap.to('.loader-logo', { opacity: 1, y: 0, duration: 1, ease: 'power3.out' });
            gsap.to('#loader-line', { width: '200px', duration: 1.5, ease: 'power2.inOut', delay: 0.5 });
            
            setTimeout(() => {
                gsap.to('#loader', {
                    yPercent: -100,
                    duration: 1,
                    ease: "power3.inOut",
                    onComplete: () => {
                        document.getElementById('loader').style.display = 'none';
                        initHeroAnim();
                        initProducts();
                    }
                });
            }, 500);
        });

        function initHeroAnim() {
            gsap.from('.hero-tag', { y: 20, opacity: 0, duration: 1, delay: 0.2 });
            gsap.from('.hero-title', { y: 30, opacity: 0, duration: 1.2, delay: 0.4 });
            gsap.from('.hero-location', { y: 20, opacity: 0, duration: 1, delay: 0.6 });
        }

        // --- Navbar Scroll Logic ---
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            // Change nav color based on section
            const darkSections = document.querySelectorAll('.dark-section, #products');
            let isDark = false;
            // Simple logic: if in products (cream bg), make nav text dark
            const productsTop = document.getElementById('products').offsetTop;
            const materialsTop = document.getElementById('materials').offsetTop;
            if(window.scrollY > productsTop - 100 && window.scrollY < materialsTop - 100) {
                navbar.classList.add('dark-mode');
            } else {
                navbar.classList.remove('dark-mode');
            }
        });

        // --- GSAP Parallax & Reveals ---
        gsap.registerPlugin(ScrollTrigger);

        // Sections reveal
        document.querySelectorAll('.section-header, .story-text, .banner-content').forEach(el => {
            gsap.from(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                },
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // Parallax images
        gsap.utils.toArray('.story-img').forEach(img => {
            gsap.to(img, {
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                },
                yPercent: 30,
                ease: "none"
            });
        });

        // --- Products Logic ---
        const productsContainer = document.getElementById('products-container');
        const filterBtns = document.querySelectorAll('.filter-btn');

        function initProducts() {
            const cards = document.querySelectorAll('#products-container .product-card');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                    const filter = e.target.dataset.filter;
                    
                    cards.forEach(card => {
                        if(filter === 'all' || card.dataset.cat === filter) {
                            card.style.display = 'flex';
                            if (window.gsap) gsap.from(card, { y: 30, opacity: 0, duration: 0.6, ease: 'power2.out' });
                        } else {
                            card.style.display = 'none';
                        }
                    });
                });
            });
        }

        // --- Three.js Procedural Furniture Builder ---
        // Generates basic geometric shapes representing luxury furniture
        const woodMaterials = {
            dark: new THREE.MeshStandardMaterial({ color: 0x3E2C23, roughness: 0.8, metalness: 0.1 }),
            med: new THREE.MeshStandardMaterial({ color: 0x5A3E2B, roughness: 0.7, metalness: 0.1 }),
            fabric: new THREE.MeshStandardMaterial({ color: 0xE8DFD1, roughness: 0.9, metalness: 0.0 })
        };

        function buildFurniture(type) {
            const group = new THREE.Group();
            
            if (type === 'table') {
                // Top
                const topGeo = new THREE.BoxGeometry(4, 0.2, 2.5);
                const top = new THREE.Mesh(topGeo, woodMaterials.dark);
                top.position.y = 1.5;
                top.castShadow = true; top.receiveShadow = true;
                group.add(top);
                // Legs
                const legGeo = new THREE.BoxGeometry(0.2, 1.4, 0.2);
                for(let i=0; i<4; i++) {
                    const leg = new THREE.Mesh(legGeo, woodMaterials.med);
                    leg.position.set(i%2==0?1.8:-1.8, 0.7, i<2?1.1:-1.1);
                    leg.castShadow = true;
                    group.add(leg);
                }
            } else if (type === 'sofa') {
                const baseGeo = new THREE.BoxGeometry(4.5, 0.4, 2);
                const base = new THREE.Mesh(baseGeo, woodMaterials.med);
                base.position.y = 0.4; base.castShadow = true;
                group.add(base);
                const seatGeo = new THREE.BoxGeometry(4.3, 0.4, 1.8);
                const seat = new THREE.Mesh(seatGeo, woodMaterials.fabric);
                seat.position.y = 0.8; seat.castShadow = true;
                group.add(seat);
                const backGeo = new THREE.BoxGeometry(4.5, 1.2, 0.4);
                const back = new THREE.Mesh(backGeo, woodMaterials.fabric);
                back.position.set(0, 1.4, -0.8); back.castShadow = true;
                group.add(back);
                const armGeo = new THREE.BoxGeometry(0.4, 0.8, 2);
                const arm1 = new THREE.Mesh(armGeo, woodMaterials.fabric);
                arm1.position.set(-2.05, 1.2, 0); arm1.castShadow = true;
                const arm2 = new THREE.Mesh(armGeo, woodMaterials.fabric);
                arm2.position.set(2.05, 1.2, 0); arm2.castShadow = true;
                group.add(arm1, arm2);
            } else if (type === 'chair') {
                const seatGeo = new THREE.BoxGeometry(1, 0.1, 1);
                const seat = new THREE.Mesh(seatGeo, woodMaterials.dark);
                seat.position.y = 1; seat.castShadow = true;
                group.add(seat);
                const legGeo = new THREE.BoxGeometry(0.1, 1, 0.1);
                for(let i=0; i<4; i++) {
                    const leg = new THREE.Mesh(legGeo, woodMaterials.med);
                    leg.position.set(i%2==0?0.4:-0.4, 0.5, i<2?0.4:-0.4);
                    leg.castShadow = true;
                    group.add(leg);
                }
                const backGeo = new THREE.BoxGeometry(0.9, 1, 0.1);
                const back = new THREE.Mesh(backGeo, woodMaterials.dark);
                back.position.set(0, 1.5, -0.45); back.castShadow = true;
                group.add(back);
            } else if (type === 'wardrobe') {
                const wGeo = new THREE.BoxGeometry(3, 4, 1.5);
                const w = new THREE.Mesh(wGeo, woodMaterials.dark);
                w.position.y = 2; w.castShadow = true;
                group.add(w);
                // Doors
                const dGeo = new THREE.BoxGeometry(1.45, 3.8, 0.05);
                const d1 = new THREE.Mesh(dGeo, woodMaterials.med);
                d1.position.set(-0.75, 2, 0.75); d1.receiveShadow = true;
                const d2 = new THREE.Mesh(dGeo, woodMaterials.med);
                d2.position.set(0.75, 2, 0.75); d2.receiveShadow = true;
                group.add(d1, d2);
            } else if (type === 'tv') {
                const tGeo = new THREE.BoxGeometry(5, 0.8, 1.2);
                const t = new THREE.Mesh(tGeo, woodMaterials.med);
                t.position.y = 0.5; t.castShadow = true;
                group.add(t);
            } else if (type === 'bed') {
                const bGeo = new THREE.BoxGeometry(3.5, 0.5, 4.5);
                const b = new THREE.Mesh(bGeo, woodMaterials.dark);
                b.position.y = 0.5; b.castShadow = true;
                group.add(b);
                const mGeo = new THREE.BoxGeometry(3.3, 0.3, 4.3);
                const m = new THREE.Mesh(mGeo, woodMaterials.fabric);
                m.position.set(0, 0.9, 0); m.castShadow = true;
                group.add(m);
                const hGeo = new THREE.BoxGeometry(3.5, 2, 0.2);
                const h = new THREE.Mesh(hGeo, woodMaterials.dark);
                h.position.set(0, 1.5, -2.15); h.castShadow = true;
                group.add(h);
            } else if (type === 'office') {
                const topGeo = new THREE.BoxGeometry(3.5, 0.2, 2);
                const top = new THREE.Mesh(topGeo, woodMaterials.dark);
                top.position.y = 1.5; top.castShadow = true;
                group.add(top);
                const cabGeo = new THREE.BoxGeometry(1, 1.3, 1.8);
                const cab1 = new THREE.Mesh(cabGeo, woodMaterials.med);
                cab1.position.set(-1.1, 0.75, 0); cab1.castShadow = true;
                const cab2 = new THREE.Mesh(cabGeo, woodMaterials.med);
                cab2.position.set(1.1, 0.75, 0); cab2.castShadow = true;
                group.add(cab1, cab2);
            }

            // Center group
            const box = new THREE.Box3().setFromObject(group);
            const center = box.getCenter(new THREE.Vector3());
            group.position.x = -center.x;
            group.position.y = -box.min.y - 1; // Lower it slightly
            group.position.z = -center.z;
            
            const wrapper = new THREE.Group();
            wrapper.add(group);
            return wrapper;
        }

        // --- Three.js Hero Canvas ---
        const hCanvas = document.getElementById('hero-canvas');
        const hScene = new THREE.Scene();
        const hCamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
        hCamera.position.set(0, 3, 10);
        
        const hRenderer = new THREE.WebGLRenderer({ canvas: hCanvas, alpha: true, antialias: true });
        hRenderer.setSize(window.innerWidth, window.innerHeight);
        hRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        hRenderer.shadowMap.enabled = true;
        hRenderer.shadowMap.type = THREE.PCFSoftShadowMap;

        // Lighting (Warm, premium)
        const hAmbient = new THREE.AmbientLight(0xfff0e6, 0.4);
        hScene.add(hAmbient);
        const hSpot = new THREE.SpotLight(0xc8a96a, 2);
        hSpot.position.set(5, 10, 5);
        hSpot.angle = Math.PI / 4;
        hSpot.penumbra = 0.5;
        hSpot.castShadow = true;
        hScene.add(hSpot);

        // Add Table to Hero
        const heroTable = buildFurniture('table');
        heroTable.scale.set(1.5, 1.5, 1.5);
        heroTable.position.y = -1;
        heroTable.rotation.x = 0.1;
        hScene.add(heroTable);

        function animateHero() {
            requestAnimationFrame(animateHero);
            heroTable.rotation.y += 0.002;
            hRenderer.render(hScene, hCamera);
        }
        animateHero();

        // --- Three.js Modal Canvas ---
        const mCanvas = document.getElementById('modal-canvas');
        const mScene = new THREE.Scene();
        const mCamera = new THREE.PerspectiveCamera(45, mCanvas.clientWidth / mCanvas.clientHeight, 0.1, 100);
        mCamera.position.set(6, 4, 6);
        
        const mRenderer = new THREE.WebGLRenderer({ canvas: mCanvas, alpha: true, antialias: true });
        mRenderer.setSize(mCanvas.clientWidth, mCanvas.clientHeight);
        mRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mRenderer.shadowMap.enabled = true;

        const mControls = new THREE.OrbitControls(mCamera, mRenderer.domElement);
        mControls.enableDamping = true;
        mControls.dampingFactor = 0.05;
        mControls.autoRotate = true;
        mControls.autoRotateSpeed = 2;

        const mAmbient = new THREE.AmbientLight(0xffffff, 0.5);
        mScene.add(mAmbient);
        const mSpot = new THREE.SpotLight(0xffebd6, 1.5);
        mSpot.position.set(5, 10, 5);
        mSpot.castShadow = true;
        mScene.add(mSpot);

        let currentModalModel = null;

        function animateModal() {
            requestAnimationFrame(animateModal);
            if(document.getElementById('product-modal').classList.contains('active')) {
                mControls.update();
                mRenderer.render(mScene, mCamera);
            }
        }
        animateModal();

        // --- Modal Logic ---
        function openDetail(id) {
            const product = products.find(p => p.id === id);
            if(!product) return;

            document.getElementById('m-name').innerText = product.name;
            document.getElementById('m-price').innerText = product.price;
            document.getElementById('m-desc').innerText = product.desc;
            document.getElementById('m-material').innerText = product.material;
            document.getElementById('m-dims').innerText = product.dims;
            
            // Generate WA Message
            const msg = encodeURIComponent(`Hi City Furniture, I am interested in the ${product.name} (${product.price}). Please share more details.`);
            document.getElementById('m-wa').href = `https://wa.me/918879390285?text=${msg}`;

            // Setup 3D Model
            if(currentModalModel) mScene.remove(currentModalModel);
            currentModalModel = buildFurniture(product.type);
            mScene.add(currentModalModel);

            // Responsive Canvas resize before showing
            mCamera.aspect = mCanvas.clientWidth / mCanvas.clientHeight;
            mCamera.updateProjectionMatrix();
            mRenderer.setSize(mCanvas.clientWidth, mCanvas.clientHeight);

            document.getElementById('product-modal').classList.add('active');
            document.body.style.overflow = 'hidden'; // prevent scroll
        }

        function closeModal() {
            document.getElementById('product-modal').classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // --- Global Resize ---
        window.addEventListener('resize', () => {
            hCamera.aspect = window.innerWidth / window.innerHeight;
            hCamera.updateProjectionMatrix();
            hRenderer.setSize(window.innerWidth, window.innerHeight);

            if(document.getElementById('product-modal').classList.contains('active')){
                mCamera.aspect = mCanvas.clientWidth / mCanvas.clientHeight;
                mCamera.updateProjectionMatrix();
                mRenderer.setSize(mCanvas.clientWidth, mCanvas.clientHeight);
            }
        });

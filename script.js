// 多语言支持
const translations = {
    'zh-TW': {
        nav: {
            home: '首頁',
            products: '產品',
            about: '關於我們',
            contact: '聯繫我們'
        },
        lang: {
            current: 'EN'
        },
        home: {
            tagline: '專業OEM製造商',
            title1: '日式原木風格',
            title2: '香薰機專家',
            description: 'ZHIJIN TECH是一家專業的香薰機OEM製造商，擁有10年以上行業經驗，提供高品質超聲波香薰機、加濕器、精油擴散器的定制服務。我們的產品以日式原木風格為設計理念，融合現代科技與自然美學。',
            cta: '探索產品',
            learnMore: '了解更多',
            stat1: '年經驗',
            stat2: '合作客戶',
            stat3: '定制服務',
            cert1: '品質保證',
            cert2: 'ISO 9001認證'
        },
        products: {
            tagline: '精選產品',
            title: '香薰機系列',
            description: '我們提供多種容量和款式的香薰機產品，從迷你便攜款到家用大容量款，滿足不同客戶的需求。所有產品均採用高品質材料和先進技術製造。',
            viewDetail: '查看詳情',
            viewAll: '查看全部產品',
            item1: {
                name: '200ml木紋陶瓷香薰機',
                desc: '小巧精緻，適合辦公室和小空間使用，七彩色燈光效果'
            },
            item2: {
                name: '500ml超聲波香薰機',
                desc: '大容量設計，適合臥室和客廳，超靜音運行'
            },
            item3: {
                name: '250ml陶瓷芯香薰機',
                desc: '陶瓷內膽設計，均勻霧化，七彩漸變燈光'
            },
            item4: {
                name: '300ml火焰香薰機',
                desc: '獨特火焰效果，營造溫馨氛圍，定時功能'
            },
            item5: {
                name: '方形現代香薰機',
                desc: '簡約現代設計，適合酒店和高端場所'
            },
            item6: {
                name: '高端玻璃香薰機',
                desc: '描金工藝，精緻典雅，100ml容量'
            },
            item7: {
                name: '大白經典香薰機',
                desc: '經典造型，500ml大容量，適合家庭使用'
            },
            item8: {
                name: '陶瓷短嘴香薰機',
                desc: '木紋陶瓷外觀，白黑雙色可選'
            }
        },
        about: {
            tagline: '關於我們',
            title: '匠心製造，品質保障',
            description1: 'ZHIJIN TECH成立於2014年，是一家專注於香薰機研發、生產和銷售的企業。我們擁有先進的生產線和專業的研發團隊，致力於為客戶提供高品質的香薰產品。',
            description2: '我們堅持以人為本的設計理念，將日式原木風格與現代科技相結合，打造出兼具美觀與實用性的產品。無論是家庭使用還是商業場所，我們的香薰機都能為您帶來舒適的香氛體驗。',
            yearExperience: '年行業經驗',
            feature1: {
                title: '專業研發',
                desc: '10年研發經驗，持續創新'
            },
            feature2: {
                title: '品質保證',
                desc: 'ISO 9001認證，嚴格品控'
            },
            feature3: {
                title: '定制服務',
                desc: '支持OEM/ODM定制'
            },
            feature4: {
                title: '全球配送',
                desc: '覆蓋全球50+國家和地區'
            }
        },
        contact: {
            tagline: '聯繫我們',
            title: '與我們取得聯繫',
            description: '無論您是想了解產品詳情、詢問報價，還是有定制需求，我們都很樂意為您服務。',
            address: {
                title: '公司地址',
                desc: '香港九龍旺角彌敦道688號'
            },
            email: {
                title: '電子郵件',
                desc: 'JustinBrewer2925@outlook.com'
            },
            phone: {
                title: '聯繫電話',
                desc: '852 94927912'
            },
            person: {
                title: '聯繫人',
                desc: '李曉龍'
            },
            formTitle: '發送消息',
            form: {
                name: '姓名',
                namePlaceholder: '請輸入您的姓名',
                email: '電子郵件',
                emailPlaceholder: '請輸入您的郵箱',
                subject: '主題',
                subjectPlaceholder: '請輸入主題',
                message: '留言',
                messagePlaceholder: '請輸入您的留言',
                submit: '發送'
            }
        },
        footer: {
            description: 'ZHIJIN TECH CO., LIMITED是一家專業的香薰機OEM製造商，提供高品質超聲波香薰機、加濕器、精油擴散器的定制服務。',
            products: '產品系列',
            p1: '木紋香薰機',
            p2: '陶瓷香薰機',
            p3: '玻璃香薰機',
            p4: '火焰香薰機',
            company: '關於公司',
            c1: '公司介紹',
            c2: '產品中心',
            c3: '聯繫我們',
            copyright: '版權所有',
            rights: '保留所有權利'
        },
        product: {
            name: '超聲波木紋香薰機',
            tag: '熱銷產品',
            reviews: '評價',
            sold: '已售',
            soldText: '件',
            priceLabel: '價格',
            priceRange: 'HK$ 88 - 168',
            priceNote: '價格根據訂購數量有所不同，詳情請聯繫我們',
            specTitle: '產品規格',
            spec1: {
                label: '容量',
                value: '500ml'
            },
            spec2: {
                label: '功率',
                value: '12W'
            },
            spec3: {
                label: '霧量',
                value: '30-50ml/h'
            },
            spec4: {
                label: '定時',
                value: '1/3/6/8小時'
            },
            contactBtn: '立即詢價',
            sampleBtn: '索取樣品',
            detailTitle: '產品介紹',
            detail1: '本產品採用高品質ABS材料與木紋工藝相結合，展現日式原木風格的自然美感。超聲波技術確保霧化均勻細膩，精油分子能夠充分擴散到空氣中，帶來舒適的香氛體驗。',
            detail2: '配備七彩LED燈光，可根據喜好調節不同顏色，營造溫馨浪漫的氛圍。智能定時功能支持1/3/6/8小時多段定時，節能環保，使用更加方便。',
            detail3: '超靜音設計，運行噪音低於25dB，不影響睡眠和工作。大容量水箱設計，加一次水可連續使用長達10小時，適合家庭、辦公室、酒店等多種場所使用。',
            featuresTitle: '產品特點',
            feature1: {
                title: '超聲波霧化',
                desc: '高頻震動霧化技術，精油分子細膩均勻'
            },
            feature2: {
                title: '七彩燈光',
                desc: '多種顏色可調，營造不同氛圍'
            },
            feature3: {
                title: '智能定時',
                desc: '多段定時功能，節能環保'
            },
            feature4: {
                title: '超靜音運行',
                desc: '低於25dB噪音，不擾日常'
            },
            galleryTitle: '產品圖集',
            servicesTitle: '服務保障',
            service1: '7天無理由退貨',
            service2: '一年質保服務',
            service3: '免費樣品支持',
            service4: 'OEM定制服務',
            service5: '全球配送服務',
            contactTitle: '快速聯繫',
            contactPhone: '電話',
            contactEmail: '郵箱',
            contactPerson: '聯繫人'
        }
    },
    'en': {
        nav: {
            home: 'Home',
            products: 'Products',
            about: 'About',
            contact: 'Contact'
        },
        lang: {
            current: '繁'
        },
        home: {
            tagline: 'Professional OEM Manufacturer',
            title1: 'Japanese Wood Style',
            title2: 'Aroma Diffuser Expert',
            description: 'ZHIJIN TECH is a professional OEM manufacturer of aroma diffusers with over 10 years of industry experience. We provide customized services for high-quality ultrasonic aroma diffusers, humidifiers, and essential oil diffusers. Our products feature Japanese wood-style design, combining modern technology with natural aesthetics.',
            cta: 'Explore Products',
            learnMore: 'Learn More',
            stat1: 'Years Experience',
            stat2: 'Clients',
            stat3: 'OEM Service',
            cert1: 'Quality Assurance',
            cert2: 'ISO 9001 Certified'
        },
        products: {
            tagline: 'Featured Products',
            title: 'Aroma Diffuser Series',
            description: 'We offer aroma diffusers in various capacities and styles, from mini portable models to large-capacity home models, meeting the needs of different customers. All products are made with high-quality materials and advanced technology.',
            viewDetail: 'View Details',
            viewAll: 'View All Products',
            item1: {
                name: '200ml Wood Grain Ceramic Diffuser',
                desc: 'Compact design, suitable for office and small spaces, 7-color LED lights'
            },
            item2: {
                name: '500ml Ultrasonic Diffuser',
                desc: 'Large capacity, ideal for bedroom and living room, ultra-quiet operation'
            },
            item3: {
                name: '250ml Ceramic Core Diffuser',
                desc: 'Ceramic inner design, uniform misting, rainbow gradient lights'
            },
            item4: {
                name: '300ml Flame Diffuser',
                desc: 'Unique flame effect, creates warm atmosphere, timer function'
            },
            item5: {
                name: 'Square Modern Diffuser',
                desc: 'Minimalist modern design, ideal for hotels and premium locations'
            },
            item6: {
                name: 'Premium Glass Diffuser',
                desc: 'Gold detailing, elegant design, 100ml capacity'
            },
            item7: {
                name: 'Classic White Diffuser',
                desc: 'Classic design, 500ml capacity, perfect for home use'
            },
            item8: {
                name: 'Ceramic Short Nozzle Diffuser',
                desc: 'Wood grain ceramic finish, available in white and black'
            }
        },
        about: {
            tagline: 'About Us',
            title: 'Craftsmanship & Quality Assurance',
            description1: 'Founded in 2014, ZHIJIN TECH is a company specializing in the research, development, production, and sales of aroma diffusers. We have advanced production lines and a professional R&D team, committed to providing high-quality aroma products to our customers.',
            description2: 'We adhere to a people-oriented design philosophy, combining Japanese wood style with modern technology to create products that are both aesthetically pleasing and practical. Whether for home use or commercial spaces, our aroma diffusers bring you a comfortable fragrance experience.',
            yearExperience: 'Years of Experience',
            feature1: {
                title: 'Professional R&D',
                desc: '10 years R&D experience, continuous innovation'
            },
            feature2: {
                title: 'Quality Assurance',
                desc: 'ISO 9001 certified, strict quality control'
            },
            feature3: {
                title: 'Customization',
                desc: 'OEM/ODM customization support'
            },
            feature4: {
                title: 'Global Delivery',
                desc: 'Serving 50+ countries worldwide'
            }
        },
        contact: {
            tagline: 'Contact Us',
            title: 'Get In Touch',
            description: 'Whether you want to know product details, inquire about pricing, or have customization needs, we are happy to assist you.',
            address: {
                title: 'Address',
                desc: '688 Nathan Road, Mong Kok, Kowloon, Hong Kong'
            },
            email: {
                title: 'Email',
                desc: 'JustinBrewer2925@outlook.com'
            },
            phone: {
                title: 'Phone',
                desc: '852 94927912'
            },
            person: {
                title: 'Contact Person',
                desc: 'Li Xiaolong'
            },
            formTitle: 'Send Message',
            form: {
                name: 'Name',
                namePlaceholder: 'Enter your name',
                email: 'Email',
                emailPlaceholder: 'Enter your email',
                subject: 'Subject',
                subjectPlaceholder: 'Enter subject',
                message: 'Message',
                messagePlaceholder: 'Enter your message',
                submit: 'Send'
            }
        },
        footer: {
            description: 'ZHIJIN TECH CO., LIMITED is a professional OEM manufacturer of aroma diffusers, providing customized services for high-quality ultrasonic aroma diffusers, humidifiers, and essential oil diffusers.',
            products: 'Product Series',
            p1: 'Wood Grain Diffusers',
            p2: 'Ceramic Diffusers',
            p3: 'Glass Diffusers',
            p4: 'Flame Diffusers',
            company: 'Company',
            c1: 'About Us',
            c2: 'Products',
            c3: 'Contact',
            copyright: 'Copyright',
            rights: 'All Rights Reserved'
        },
        product: {
            name: 'Ultrasonic Wood Grain Diffuser',
            tag: 'Hot Product',
            reviews: 'reviews',
            sold: 'Sold',
            soldText: 'pcs',
            priceLabel: 'Price',
            priceRange: 'HK$ 88 - 168',
            priceNote: 'Price varies based on order quantity, please contact us for details',
            specTitle: 'Specifications',
            spec1: {
                label: 'Capacity',
                value: '500ml'
            },
            spec2: {
                label: 'Power',
                value: '12W'
            },
            spec3: {
                label: 'Mist Output',
                value: '30-50ml/h'
            },
            spec4: {
                label: 'Timer',
                value: '1/3/6/8 hours'
            },
            contactBtn: 'Inquire Now',
            sampleBtn: 'Request Sample',
            detailTitle: 'Product Description',
            detail1: 'This product combines high-quality ABS material with wood grain craftsmanship, showcasing the natural beauty of Japanese wood style. Ultrasonic technology ensures uniform and fine atomization, allowing essential oil molecules to fully diffuse into the air for a comfortable fragrance experience.',
            detail2: 'Equipped with 7-color LED lights, adjustable to different colors according to preference, creating a warm and romantic atmosphere. Smart timer function supports 1/3/6/8 hour multi-stage timing, energy-saving and convenient to use.',
            detail3: 'Ultra-quiet design with operating noise below 25dB, does not affect sleep or work. Large-capacity water tank design allows continuous use for up to 10 hours with one fill, suitable for homes, offices, hotels and other places.',
            featuresTitle: 'Features',
            feature1: {
                title: 'Ultrasonic Atomization',
                desc: 'High-frequency vibration atomization technology, fine and uniform essential oil molecules'
            },
            feature2: {
                title: '7-Color LED',
                desc: 'Multiple colors adjustable, creates different atmospheres'
            },
            feature3: {
                title: 'Smart Timer',
                desc: 'Multi-stage timer function, energy saving'
            },
            feature4: {
                title: 'Ultra-Quiet',
                desc: 'Below 25dB noise, non-disturbing'
            },
            galleryTitle: 'Product Gallery',
            servicesTitle: 'Services',
            service1: '7-Day Return Policy',
            service2: '1-Year Warranty',
            service3: 'Free Sample Support',
            service4: 'OEM Customization',
            service5: 'Global Shipping',
            contactTitle: 'Quick Contact',
            contactPhone: 'Phone',
            contactEmail: 'Email',
            contactPerson: 'Contact'
        }
    }
};

// 当前语言
let currentLang = 'zh-TW';

// 切换语言
function toggleLanguage() {
    currentLang = currentLang === 'zh-TW' ? 'en' : 'zh-TW';
    document.documentElement.lang = currentLang;
    updateContent();
    localStorage.setItem('lang', currentLang);
}

// 更新页面内容
function updateContent() {
    const langData = translations[currentLang];
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const value = getNestedValue(langData, key);
        if (value) {
            el.textContent = value;
        }
    });
    // 更新HTML中的模板变量
    document.body.innerHTML = document.body.innerHTML.replace(/\{\{(\w+\.\w+(\.\w+)*)\}\}/g, (match, key) => {
        const value = getNestedValue(langData, key);
        return value || match;
    });
    // 更新语言按钮文本
    document.getElementById('langBtn').textContent = langData.lang.current;
}

// 获取嵌套对象的值
function getNestedValue(obj, key) {
    return key.split('.').reduce((o, k) => (o && o[k]) ? o[k] : null, obj);
}

// 主题切换
function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        updateThemeIcon('light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        updateThemeIcon('dark');
    }
}

// 更新主题图标
function updateThemeIcon(theme) {
    const icon = document.getElementById('themeIcon');
    if (theme === 'dark') {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    } else {
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>';
    }
}

// 移动端菜单切换
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('hidden');
}

// 产品图片切换
function setupProductImageSwitcher() {
    const thumbBtns = document.querySelectorAll('.product-thumb-btn');
    const mainImage = document.getElementById('mainProductImage');
    
    thumbBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            thumbBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            mainImage.src = btn.getAttribute('data-image');
        });
    });
}

// 导航链接高亮
function highlightNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    });
}

// 表单提交处理
function handleFormSubmit(e) {
    e.preventDefault();
    alert('消息已發送！我們會尽快與您聯繫。');
    e.target.reset();
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 加载保存的语言设置
    const savedLang = localStorage.getItem('lang') || 'zh-TW';
    currentLang = savedLang;
    document.documentElement.lang = currentLang;
    
    // 加载保存的主题设置或跟随系统
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.documentElement.classList.add('dark');
            updateThemeIcon('dark');
        } else {
            updateThemeIcon('light');
        }
    } else {
        // 跟随系统设置
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
            updateThemeIcon('dark');
        } else {
            updateThemeIcon('light');
        }
    }
    
    // 更新内容
    updateContent();
    
    // 设置事件监听
    document.getElementById('langBtn')?.addEventListener('click', toggleLanguage);
    document.getElementById('themeBtn')?.addEventListener('click', toggleTheme);
    document.getElementById('mobileMenuBtn')?.addEventListener('click', toggleMobileMenu);
    document.getElementById('contactForm')?.addEventListener('submit', handleFormSubmit);
    
    // 设置产品图片切换
    setupProductImageSwitcher();
    
    // 设置导航高亮
    highlightNavLink();
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            // 如果是外部链接，跳转
            if (this.host !== window.location.host) {
                window.location.href = this.href;
                return;
            }
            
            const target = document.querySelector(targetId);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
                // 关闭移动端菜单
                document.getElementById('mobileMenu')?.classList.add('hidden');
            }
        });
    });
    
    // 页面加载动画
    document.body.classList.add('loaded');
});

// 产品卡片点击事件
document.addEventListener('DOMContentLoaded', () => {
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            window.location.href = `product.html?id=${index + 1}`;
        });
    });
});

// 页面可见性变化时同步主题
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        }
    }
});

// 监听系统主题变化
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            document.documentElement.classList.add('dark');
            updateThemeIcon('dark');
        } else {
            document.documentElement.classList.remove('dark');
            updateThemeIcon('light');
        }
    }
});
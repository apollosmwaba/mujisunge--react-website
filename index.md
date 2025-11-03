<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mujisunge Farm | Sustainable Agriculture Solutions</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-green: #2e8b57;
            --dark-green: #1e5d3b;
            --light-green: #e8f5e9;
            --accent-yellow: #ffcc00;
            --text-dark: #333;
            --text-light: #666;
            --white: #ffffff;
            --light-gray: #f8f9fa;
            --shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            --dark-bg: #121212;
            --dark-card: #1e1e1e;
            --dark-text: #e0e0e0;
            --dark-border: #333;
        }
        
        .dark-mode {
            --text-dark: var(--dark-text);
            --text-light: #aaa;
            --white: var(--dark-bg);
            --light-gray: var(--dark-card);
            --light-green: #1a2b1f;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            color: var(--text-dark);
            line-height: 1.6;
            overflow-x: hidden;
            background-color: var(--white);
            transition: background-color 0.3s, color 0.3s;
        }
        
        h1, h2, h3, h4 {
            font-family: 'Montserrat', sans-serif;
            font-weight: 700;
            margin-bottom: 1rem;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 28px;
            background: var(--primary-green);
            color: var(--white);
            border: none;
            border-radius: 4px;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
            font-size: 1rem;
        }
        
        .btn:hover {
            background: var(--dark-green);
            transform: translateY(-2px);
            box-shadow: var(--shadow);
        }
        
        .btn-outline {
            background: transparent;
            border: 2px solid var(--primary-green);
            color: var(--primary-green);
        }
        
        .btn-outline:hover {
            background: var(--primary-green);
            color: var(--white);
        }
        
        /* Loader Styles */
        #loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--white);s
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            transition: opacity 0.5s, visibility 0.5s;
        }
        
        .loader-content {
            text-align: center;
        }
        
        .loader-spinner {
            width: 80px;
            height: 80px;
            border: 5px solid rgba(46, 139, 87, 0.2);
            border-top: 5px solid var(--primary-green);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px;
        }
        
        .loader-text {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.5rem;
            color: var(--dark-green);
            letter-spacing: 1px;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Header Styles - NON-STICKY */
        header {
            background: var(--white);
            box-shadow: var(--shadow);
            position: relative;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: background-color 0.3s;
        }
        
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
        }
        
        .logo img {
            height: 50px;
            margin-right: 10px;
        }
        
        .logo-text {
            font-family: 'Montserrat', sans-serif;
            font-size: 1.8rem;
            font-weight: 800;
            color: var(--primary-green);
        }
        
        .nav-links {
            display: flex;
            list-style: none;
        }
        
        .nav-links li {
            margin-left: 30px;
        }
        
        .nav-links a {
            text-decoration: none;
            color: var(--text-dark);
            font-weight: 500;
            transition: color 0.3s;
        }
        
        .nav-links a:hover {
            color: var(--primary-green);
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--primary-green);
        }
        
        /* Cart and Theme Toggle Container */
        .nav-actions {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .cart-icon {
            position: relative;
            font-size: 1.5rem;
            color: var(--text-dark);
            cursor: pointer;
            transition: color 0.3s;
        }
        
        .cart-count {
            position: absolute;
            top: -8px;
            right: -8px;
            background: var(--accent-yellow);
            color: var(--dark-green);
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.8rem;
            font-weight: bold;
        }
        
        .theme-toggle {
            background: none;
            border: none;
            font-size: 1.3rem;
            cursor: pointer;
            color: var(--text-dark);
            transition: color 0.3s;
        }
        
        /* Hero Section with Slideshow */
        .hero {
            position: relative;
            height: 100vh;
            display: flex;
            align-items: center;
            color: var(--white);
            margin-top: 0; /* Removed top margin since navbar isn't sticky */
            overflow: hidden;
        }
        
        .hero-slides {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transition: opacity 1s ease-in-out;
        }
        
        .hero-slide {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-size: cover;
            background-position: center;
            opacity: 0;
            transition: opacity 1s ease-in-out;
        }
        
        .hero-slide.active {
            opacity: 1;
        }
        
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(30, 93, 59, 0.85), rgba(30, 93, 59, 0.9));
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
            max-width: 650px;
            padding: 0 20px;
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1.5rem;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.2rem;
            margin-bottom: 2rem;
            opacity: 0.9;
        }
        
        .hero-btns {
            display: flex;
            gap: 15px;
        }
        
        .slide-indicators {
            position: absolute;
            bottom: 30px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            gap: 10px;
            z-index: 3;
        }
        
        .indicator {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .indicator.active {
            background: var(--accent-yellow);
        }
        
        /* Products Section */
        .products {
            padding: 80px 0;
            background-color: var(--light-gray);
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 50px;
            position: relative;
        }
        
        .section-title h2 {
            font-size: 2.5rem;
            color: var(--dark-green);
            display: inline-block;
        }
        
        .section-title h2:after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 80px;
            height: 4px;
            background: var(--accent-yellow);
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 30px;
        }
        
        .product-card {
            background: var(--white);
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease;
        }
        
        .product-card:hover {
            transform: translateY(-10px);
        }
        
        .product-image {
            height: 200px;
            overflow: hidden;
        }
        
        .product-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.5s ease;
        }
        
        .product-card:hover .product-image img {
            transform: scale(1.1);
        }
        
        .product-info {
            padding: 20px;
        }
        
        .product-info h3 {
            font-size: 1.4rem;
            margin-bottom: 10px;
            color: var(--dark-green);
        }
        
        .product-price {
            font-size: 1.3rem;
            font-weight: 700;
            color: var(--primary-green);
            margin: 10px 0;
        }
        
        .product-description {
            color: var(--text-light);
            margin-bottom: 15px;
            font-size: 0.95rem;
        }
        
        .add-to-cart {
            width: 100%;
            padding: 10px;
            background: var(--primary-green);
            color: var(--white);
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .add-to-cart:hover {
            background: var(--dark-green);
        }
        
        /* Mini Cart */
        #mini-cart {
            position: fixed;
            top: 0;
            right: -400px;
            width: 350px;
            height: 100vh;
            background: var(--white);
            box-shadow: -5px 0 15px rgba(0,0,0,0.1);
            z-index: 2000;
            transition: right 0.3s ease;
            padding: 20px;
            overflow-y: auto;
        }
        
        .dark-mode #mini-cart {
            background: var(--dark-card);
        }
        
        #mini-cart.open {
            right: 0;
        }
        
        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px solid var(--dark-border);
        }
        
        .cart-header h3 {
            margin-bottom: 0;
        }
        
        .close-cart {
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: var(--text-dark);
        }
        
        .cart-items {
            margin-bottom: 20px;
        }
        
        .cart-item {
            display: flex;
            padding: 15px 0;
            border-bottom: 1px solid var(--dark-border);
        }
        
        .cart-item-image {
            width: 80px;
            height: 80px;
            border-radius: 5px;
            overflow: hidden;
            margin-right: 15px;
        }
        
        .cart-item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        
        .cart-item-details {
            flex: 1;
        }
        
        .cart-item-name {
            font-weight: 600;
            margin-bottom: 5px;
        }
        
        .cart-item-price {
            color: var(--primary-green);
            font-weight: 700;
        }
        
        .cart-item-quantity {
            display: flex;
            align-items: center;
            margin-top: 8px;
        }
        
        .quantity-btn {
            width: 25px;
            height: 25px;
            background: var(--light-gray);
            border: none;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-weight: bold;
        }
        
        .dark-mode .quantity-btn {
            background: var(--dark-bg);
        }
        
        .quantity-value {
            margin: 0 10px;
        }
        
        .remove-item {
            color: #e74c3c;
            background: none;
            border: none;
            cursor: pointer;
            margin-left: 10px;
        }
        
        .cart-total {
            display: flex;
            justify-content: space-between;
            font-size: 1.2rem;
            font-weight: 700;
            margin: 20px 0;
            padding-top: 15px;
            border-top: 1px solid var(--dark-border);
        }
        
        .checkout-btn {
            width: 100%;
            padding: 12px;
            background: var(--primary-green);
            color: var(--white);
            border: none;
            border-radius: 4px;
            font-weight: 600;
            cursor: pointer;
            font-size: 1.1rem;
            transition: background 0.3s;
        }
        
        .checkout-btn:hover {
            background: var(--dark-green);
        }
        
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 1999;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s, visibility 0.3s;
        }
        
        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
        
        /* About Section */
        .section {
            padding: 80px 0;
        }
        
        .about-content {
            display: flex;
            align-items: center;
            gap: 50px;
        }
        
        .about-text {
            flex: 1;
        }
        
        .about-text h3 {
            font-size: 2rem;
            color: var(--dark-green);
            margin-bottom: 20px;
        }
        
        .about-image {
            flex: 1;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        
        .about-image img {
            width: 100%;
            height: auto;
            display: block;
            transition: transform 0.5s ease;
        }
        
        .about-image img:hover {
            transform: scale(1.05);
        }
        
        /* Services Section */
        .services {
            background: var(--light-green);
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .service-card {
            background: var(--white);
            border-radius: 10px;
            padding: 30px;
            text-align: center;
            box-shadow: var(--shadow);
            transition: transform 0.3s ease;
        }
        
        .service-card:hover {
            transform: translateY(-10px);
        }
        
        .service-icon {
            width: 80px;
            height: 80px;
            background: var(--light-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 2rem;
            color: var(--primary-green);
        }
        
        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--dark-green);
        }
        
        /* Contact Section */
        .contact {
            background: var(--white);
        }
        
        .contact-container {
            display: flex;
            gap: 50px;
        }
        
        .contact-info {
            flex: 1;
        }
        
        .contact-info h3 {
            font-size: 1.8rem;
            color: var(--dark-green);
            margin-bottom: 20px;
        }
        
        .contact-details {
            margin-bottom: 30px;
        }
        
        .contact-item {
            display: flex;
            margin-bottom: 20px;
        }
        
        .contact-icon {
            width: 50px;
            height: 50px;
            background: var(--light-green);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 15px;
            color: var(--primary-green);
            font-size: 1.2rem;
        }
        
        .contact-text h4 {
            margin-bottom: 5px;
            font-size: 1.1rem;
        }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-link {
            width: 45px;
            height: 45px;
            border-radius: 50%;
            background: var(--primary-green);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-size: 1.2rem;
            transition: all 0.3s ease;
        }
        
        .social-link:hover {
            background: var(--dark-green);
            transform: translateY(-3px);
        }
        
        .contact-form {
            flex: 1;
            background: var(--light-green);
            padding: 30px;
            border-radius: 10px;
        }
        
        .form-group {
            margin-bottom: 20px;
        }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
        }
        
        .form-group input,
        .form-group textarea {
            width: 100%;
            padding: 12px 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            font-family: 'Poppins', sans-serif;
            background: var(--white);
            color: var(--text-dark);
        }
        
        .dark-mode .form-group input,
        .dark-mode .form-group textarea {
            background: var(--dark-card);
            border-color: var(--dark-border);
            color: var(--text-dark);
        }
        
        .form-group textarea {
            height: 150px;
            resize: vertical;
        }
        
        /* Newsletter Section */
        .newsletter {
            background: var(--dark-green);
            color: var(--white);
            padding: 60px 0;
            text-align: center;
        }
        
        .newsletter h2 {
            color: var(--white);
            margin-bottom: 20px;
        }
        
        .newsletter p {
            max-width: 600px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }
        
        .newsletter-form {
            display: flex;
            max-width: 500px;
            margin: 0 auto;
        }
        
        .newsletter-form input {
            flex: 1;
            padding: 15px 20px;
            border: none;
            border-radius: 4px 0 0 4px;
            font-size: 1rem;
            background: var(--white);
            color: var(--text-dark);
        }
        
        .dark-mode .newsletter-form input {
            background: var(--dark-card);
            color: var(--text-dark);
        }
        
        .newsletter-form button {
            background: var(--accent-yellow);
            color: var(--dark-green);
            border: none;
            padding: 0 25px;
            border-radius: 0 4px 4px 0;
            font-weight: 600;
            cursor: pointer;
            transition: background 0.3s;
        }
        
        .newsletter-form button:hover {
            background: #e6b800;
        }
        
        /* Map Section */
        .map-section {
            padding: 60px 0;
            background: var(--light-gray);
        }
        
        .map-container {
            height: 400px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
        }
        
        .map-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
        
        /* Footer */
        footer {
            background: var(--text-dark);
            color: var(--white);
            padding: 40px 0 20px;
        }
        
        .footer-content {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 30px;
        }
        
        .footer-col {
            flex: 1;
            min-width: 250px;
            margin-bottom: 30px;
        }
        
        .footer-col h3 {
            color: var(--accent-yellow);
            margin-bottom: 20px;
            font-size: 1.5rem;
        }
        
        .footer-col ul {
            list-style: none;
        }
        
        .footer-col ul li {
            margin-bottom: 10px;
        }
        
        .footer-col ul li a {
            color: #ccc;
            text-decoration: none;
            transition: color 0.3s;
        }
        
        .footer-col ul li a:hover {
            color: var(--accent-yellow);
        }
        
        .copyright {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid #444;
            color: #aaa;
            font-size: 0.9rem;
        }
        
        /* Responsive Design */
        @media (max-width: 992px) {
            .hero h1 {
                font-size: 2.8rem;
            }
            
            .about-content {
                flex-direction: column;
            }
            
            .contact-container {
                flex-direction: column;
            }
            
            #mini-cart {
                width: 300px;
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 80px;
                left: -100%;
                background: var(--white);
                width: 100%;
                height: calc(100vh - 80px);
                flex-direction: column;
                align-items: center;
                padding-top: 50px;
                transition: 0.3s;
                z-index: 1500;
            }
            
            .dark-mode .nav-links {
                background: var(--dark-card);
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .nav-links li {
                margin: 15px 0;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero {
                height: auto;
                padding: 100px 0 80px;
            }
            
            .hero h1 {
                font-size: 2.2rem;
            }
            
            .hero-btns {
                flex-direction: column;
            }
            
            .newsletter-form {
                flex-direction: column;
            }
            
            .newsletter-form input {
                border-radius: 4px;
                margin-bottom: 10px;
            }
            
            .newsletter-form button {
                border-radius: 4px;
                padding: 15px;
            }
            
            .slide-indicators {
                bottom: 20px;
            }
            
            #mini-cart {
                width: 100%;
                right: -100%;
            }
            
            .cart-item {
                flex-direction: column;
            }
            
            .cart-item-image {
                width: 100%;
                height: 150px;
                margin-bottom: 15px;
            }
            
            /* Adjust nav actions for mobile */
            .nav-actions {
                gap: 10px;
            }
            
            .cart-icon, .theme-toggle {
                font-size: 1.2rem;
            }
        }
    </style>
</head>
<body>
    <!-- Loader -->
    <div id="loader">
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <div class="loader-text">Mujisunge Farm</div>
        </div>
    </div>

    <!-- Header - NON-STICKY -->
    <header>
        <div class="container">
            <nav class="navbar">
                <div class="logo">
                    <div class="logo-text">Mujisunge Farm</div>
                </div>
                <ul class="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <div class="nav-actions">
                    <button class="theme-toggle" id="themeToggle">
                        <i class="fas fa-moon"></i>
                    </button>
                    <div class="cart-icon" id="cartIcon">
                        <i class="fas fa-shopping-cart"></i>
                        <span class="cart-count">0</span>
                    </div>
                </div>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        </div>
    </header>

    <!-- Mini Cart -->
    <div class="overlay" id="cartOverlay"></div>
    <div id="mini-cart">
        <div class="cart-header">
            <h3>Your Cart</h3>
            <button class="close-cart" id="closeCart">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <div class="cart-items" id="cartItems">
            <!-- Cart items will be added here dynamically -->
        </div>
        <div class="cart-total">
            <span>Total:</span>
            <span id="cartTotal">K0.00</span>
        </div>
        <button class="checkout-btn" id="checkoutBtn">
            <i class="fab fa-whatsapp"></i> Checkout on WhatsApp
        </button>
    </div>

    <!-- Hero Section with Slideshow -->
    <section id="home" class="hero">
        <div class="hero-slides">
            <div class="hero-slide active" style="background-image: url('https://images.unsplash.com/photo-1500382018250-9261a5f85d59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');"></div>
            <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');"></div>
            <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1444491813996-4a6c6c728e7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');"></div>
            <div class="hero-slide" style="background-image: url('https://images.unsplash.com/photo-1505253550188-2c9c399f77c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80');"></div>
        </div>
        <div class="hero-overlay"></div>
        <div class="container">
            <div class="hero-content">
                <h1>Sustainable Agriculture for a Healthier Future</h1>
                <p>Mujisunge Farm is dedicated to providing innovative, eco-friendly farming solutions that promote food security and environmental sustainability in Zambia and beyond.</p>
                <div class="hero-btns">
                    <a href="#contact" class="btn">Contact Us</a>
                    <a href="#products" class="btn btn-outline">Our Products</a>
                </div>
            </div>
        </div>
        <div class="slide-indicators">
            <span class="indicator active" data-slide="0"></span>
            <span class="indicator" data-slide="1"></span>
            <span class="indicator" data-slide="2"></span>
            <span class="indicator" data-slide="3"></span>
        </div>
    </section>

    <!-- Products Section -->
    <section id="products" class="products">
        <div class="container">
            <div class="section-title">
                <h2>Our Products</h2>
            </div>
            <div class="products-grid" id="productsGrid">
                <!-- Products will be loaded here -->
            </div>
        </div>
    </section>

    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <div class="section-title">
                <h2>About Mujisunge Farm</h2>
            </div>
            <div class="about-content">
                <div class="about-text">
                    <h3>Our Mission & Vision</h3>
                    <p>Founded with a passion for sustainable agriculture, Mujisunge Farm is committed to revolutionizing farming practices in Zambia through innovative, environmentally conscious methods.</p>
                    <p>We believe in the power of agriculture to transform communities, create economic opportunities, and protect our natural resources for future generations.</p>
                    <p>Our team of agricultural experts combines traditional knowledge with modern techniques to deliver solutions that are both effective and sustainable.</p>
                    <a href="#contact" class="btn" style="margin-top: 20px;">Learn More</a>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" alt="Mujisunge Farm">
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section id="services" class="section services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-seedling"></i>
                    </div>
                    <h3>Organic Farming</h3>
                    <p>Specializing in chemical-free cultivation methods that produce healthier crops while preserving soil fertility and biodiversity.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-tractor"></i>
                    </div>
                    <h3>Modern Equipment</h3>
                    <p>Access to state-of-the-art farming machinery and technology for efficient land preparation, planting, and harvesting.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-water"></i>
                    </div>
                    <h3>Irrigation Solutions</h3>
                    <p>Implementing water-efficient irrigation systems that maximize crop yield while conserving precious water resources.</p>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <i class="fas fa-leaf"></i>
                    </div>
                    <h3>Sustainable Practices</h3>
                    <p>Training and consulting on eco-friendly farming techniques that protect the environment and ensure long-term productivity.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section contact">
        <div class="container">
            <div class="section-title">
                <h2>Contact Us</h2>
            </div>
            <div class="contact-container">
                <div class="contact-info">
                    <h3>Get In Touch</h3>
                    <div class="contact-details">
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="contact-text">
                                <h4>Email</h4>
                                <p>mujisungefarms@gmail.com</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-phone"></i>
                            </div>
                            <div class="contact-text">
                                <h4>Phone</h4>
                                <p>+260 777 592 631</p>
                            </div>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="contact-text">
                                <h4>Location</h4>
                                <p>Lusaka, Zambia</p>
                            </div>
                        </div>
                    </div>
                    <h3>Follow Us</h3>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="contact-form">
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Full Name</label>
                            <input type="text" id="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email Address</label>
                            <input type="email" id="email" required>
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone Number</label>
                            <input type="tel" id="phone">
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" required></textarea>
                        </div>
                        <button type="submit" class="btn">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter">
        <div class="container">
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with our latest farming innovations, sustainable practices, and agricultural news.</p>
            <form class="newsletter-form">
                <input type="email" placeholder="Enter your email address" required>
                <button type="submit">Subscribe</button>
            </form>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
        <div class="container">
            <div class="section-title">
                <h2>Our Location</h2>
            </div>
            <div class="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.322845185831!2d28.28328531482955!3d-15.41392808945152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f2d6a4e0d8e7%3A0x7a9c1d5e5e5e5e5e!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1698500000000!5m2!1sen!2s" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-col">
                    <h3>Mujisunge Farm</h3>
                    <p>Dedicated to sustainable agriculture and food security in Zambia through innovative farming solutions.</p>
                </div>
                <div class="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#products">Products</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Contact Info</h3>
                    <ul>
                        <li><i class="fas fa-envelope"></i> mujisungefarms@gmail.com</li>
                        <li><i class="fas fa-phone"></i> +260 777 592 631</li>
                        <li><i class="fas fa-map-marker-alt"></i> Lusaka, Zambia</li>
                    </ul>
                </div>
            </div>
            <div class="copyright">
                <p>&copy; 2025 Mujisunge Farm. All Rights Reserved.</p>
            </div>
        </div>
    </footer>

    <script>
        // Product data
        const products = [
            {
                id: 1,
                name: "Organic Maize Seeds",
                price: 25.99,
                description: "High-yield, non-GMO maize seeds suitable for Zambian climate",
                image: "https://images.unsplash.com/photo-1597318198654-2a4a5d5a0c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 2,
                name: "Premium Fertilizer",
                price: 45.50,
                description: "Balanced NPK fertilizer for all crop types",
                image: "https://images.unsplash.com/photo-1601531153895-2e3a0f1e9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 3,
                name: "Irrigation Drip Kit",
                price: 120.00,
                description: "Complete drip irrigation system for 0.5 acre farm",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 4,
                name: "Organic Pesticides",
                price: 35.75,
                description: "Eco-friendly pest control solution for vegetables",
                image: "https://images.unsplash.com/photo-1601531153895-2e3a0f1e9e4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 5,
                name: "Farm Tools Set",
                price: 85.00,
                description: "Complete set of essential farming tools",
                image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf3b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            },
            {
                id: 6,
                name: "Greenhouse Kit",
                price: 350.00,
                description: "DIY greenhouse kit for small-scale farming",
                image: "https://images.unsplash.com/photo-1597318198654-2a4a5d5a0c8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
            }
        ];

        // Cart functionality
        let cart = [];
        const cartIcon = document.getElementById('cartIcon');
        const cartCount = document.querySelector('.cart-count');
        const miniCart = document.getElementById('mini-cart');
        const closeCart = document.getElementById('closeCart');
        const cartOverlay = document.getElementById('cartOverlay');
        const cartItems = document.getElementById('cartItems');
        const cartTotal = document.getElementById('cartTotal');
        const checkoutBtn = document.getElementById('checkoutBtn');

        // Initialize products
        function initProducts() {
            const productsGrid = document.getElementById('productsGrid');
            productsGrid.innerHTML = '';
            
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <div class="product-image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3>${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">K${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-id="${product.id}">
                            <i class="fas fa-cart-plus"></i> Add to Cart
                        </button>
                    </div>
                `;
                productsGrid.appendChild(productCard);
            });
            
            // Add event listeners to add buttons
            document.querySelectorAll('.add-to-cart').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    addToCart(id);
                });
            });
        }

        // Add to cart function
        function addToCart(productId) {
            const product = products.find(p => p.id === productId);
            if (!product) return;
            
            const existingItem = cart.find(item => item.id === productId);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            updateCart();
            showMiniCart();
        }

        // Update cart display
        function updateCart() {
            // Update cart count
            const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalCount;
            
            // Update mini cart items
            cartItems.innerHTML = '';
            if (cart.length === 0) {
                cartItems.innerHTML = '<p>Your cart is empty</p>';
                cartTotal.textContent = 'K0.00';
                return;
            }
            
            let total = 0;
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-details">
                        <div class="cart-item-name">${item.name}</div>
                        <div class="cart-item-price">K${item.price.toFixed(2)}</div>
                        <div class="cart-item-quantity">
                            <button class="quantity-btn minus" data-id="${item.id}">-</button>
                            <span class="quantity-value">${item.quantity}</span>
                            <button class="quantity-btn plus" data-id="${item.id}">+</button>
                            <button class="remove-item" data-id="${item.id}">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>
                `;
                cartItems.appendChild(cartItem);
            });
            
            cartTotal.textContent = `K${total.toFixed(2)}`;
            
            // Add event listeners to quantity buttons
            document.querySelectorAll('.quantity-btn.minus').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    updateQuantity(id, -1);
                });
            });
            
            document.querySelectorAll('.quantity-btn.plus').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    updateQuantity(id, 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(button => {
                button.addEventListener('click', function() {
                    const id = parseInt(this.getAttribute('data-id'));
                    removeFromCart(id);
                });
            });
        }

        // Update item quantity
        function updateQuantity(productId, change) {
            const item = cart.find(item => item.id === productId);
            if (!item) return;
            
            item.quantity += change;
            if (item.quantity <= 0) {
                removeFromCart(productId);
            } else {
                updateCart();
            }
        }

        // Remove item from cart
        function removeFromCart(productId) {
            cart = cart.filter(item => item.id !== productId);
            updateCart();
        }

        // Show mini cart
        function showMiniCart() {
            miniCart.classList.add('open');
            cartOverlay.classList.add('active');
        }

        // Hide mini cart
        function hideMiniCart() {
            miniCart.classList.remove('open');
            cartOverlay.classList.remove('active');
        }

        // WhatsApp checkout
        function checkoutOnWhatsApp() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
                return;
            }
            
            let message = 'Hello Mujisunge Farm, I would like to order:\n\n';
            let total = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity;
                total += itemTotal;
                message += `- ${item.name} (x${item.quantity}) - K${item.price.toFixed(2)} each\n`;
            });
            
            message += `\nTotal: K${total.toFixed(2)}\n\nPlease confirm my order.`;
            
            // Encode the message for URL
            const encodedMessage = encodeURIComponent(message);
            const phoneNumber = '+260777592631';
            
            // Open WhatsApp with pre-filled message
            window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
        }

        // Dark mode functionality with localStorage safety check
        const themeToggle = document.getElementById('themeToggle');
        const body = document.body;
        let isDarkMode = false;

        // Safe localStorage access
        function safeLocalStorageGet(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                console.warn('localStorage not available:', e);
                return null;
            }
        }

        function safeLocalStorageSet(key, value) {
            try {
                localStorage.setItem(key, value);
            } catch (e) {
                console.warn('localStorage not available:', e);
            }
        }

        function toggleDarkMode() {
            isDarkMode = !isDarkMode;
            body.classList.toggle('dark-mode', isDarkMode);
            
            // Update icon
            if (isDarkMode) {
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            } else {
                themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            }
            
            // Save preference safely
            safeLocalStorageSet('darkMode', isDarkMode);
        }

        // Load saved theme preference safely
        function loadThemePreference() {
            const savedDarkMode = safeLocalStorageGet('darkMode') === 'true';
            if (savedDarkMode) {
                body.classList.add('dark-mode');
                isDarkMode = true;
                themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            }
        }

        // Loader functionality
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.style.opacity = '0';
                loader.style.visibility = 'hidden';
            }, 1500);
        });

        // Hero Slideshow
        document.addEventListener('DOMContentLoaded', function() {
            // Initialize products
            initProducts();
            
            // Load theme preference safely
            loadThemePreference();
            
            const slides = document.querySelectorAll('.hero-slide');
            const indicators = document.querySelectorAll('.indicator');
            let currentSlide = 0;
            const slideCount = slides.length;
            
            // Function to show a specific slide
            function showSlide(index) {
                slides.forEach(slide => slide.classList.remove('active'));
                indicators.forEach(indicator => indicator.classList.remove('active'));
                
                slides[index].classList.add('active');
                indicators[index].classList.add('active');
                currentSlide = index;
            }
            
            // Auto slide change
            function nextSlide() {
                currentSlide = (currentSlide + 1) % slideCount;
                showSlide(currentSlide);
            }
            
            // Set interval for auto sliding
            let slideInterval = setInterval(nextSlide, 5000);
            
            // Indicator click functionality
            indicators.forEach((indicator, index) => {
                indicator.addEventListener('click', () => {
                    clearInterval(slideInterval);
                    showSlide(index);
                    slideInterval = setInterval(nextSlide, 5000);
                });
            });
            
            // Event listeners
            cartIcon.addEventListener('click', showMiniCart);
            closeCart.addEventListener('click', hideMiniCart);
            cartOverlay.addEventListener('click', hideMiniCart);
            themeToggle.addEventListener('click', toggleDarkMode);
            checkoutBtn.addEventListener('click', checkoutOnWhatsApp);
            
            // Mobile Menu Toggle
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            
            mobileMenuBtn.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
            
            // Smooth Scrolling
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    navLinks.classList.remove('active');
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
            
            // Form Submission
            const contactForm = document.getElementById('contactForm');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    alert('Thank you for your message! We will get back to you soon.');
                    contactForm.reset();
                });
            }
            
            // Newsletter Form
            const newsletterForm = document.querySelector('.newsletter-form');
            if (newsletterForm) {
                newsletterForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    const email = this.querySelector('input').value;
                    alert(`Thank you for subscribing with ${email}! You'll receive our updates soon.`);
                    this.reset();
                });
            }
        });
    </script>
</body>
</html>

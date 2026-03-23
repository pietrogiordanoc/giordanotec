// ============================================
// GiordanoTec - Interactive Features
// ============================================

// Hero Slider
let currentSlideIndex = 1;
let slideInterval;

function showSlide(n) {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.dot');
    
    if (slides.length === 0) return;
    
    if (n > slides.length) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = slides.length; }
    
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    slides[currentSlideIndex - 1].classList.add('active');
    dots[currentSlideIndex - 1].classList.add('active');
}

function changeSlide(n) {
    clearInterval(slideInterval);
    showSlide(currentSlideIndex += n);
    startAutoSlide();
}

function currentSlide(n) {
    clearInterval(slideInterval);
    showSlide(currentSlideIndex = n);
    startAutoSlide();
}

function startAutoSlide() {
    slideInterval = setInterval(() => {
        currentSlideIndex++;
        showSlide(currentSlideIndex);
    }, 5000); // Change slide every 5 seconds
}

// Multi-language Support
const translations = {
    es: {
        nav_home: 'INICIO',
        nav_showcase: 'SHOWCASE',
        nav_gallery: 'GALERÍA',
        nav_video: 'GALERÍA DE VIDEOS',
        nav_contact: 'CONTACTO',
        services_tagline: 'Consultoría y Servicios | Diseño Gráfico | Multimedia | Web | Redes Sociales',
        hero_title: 'Nos especializamos en crear proyectos visualmente impactantes que comunican efectivamente tu visión, ya seas un individuo o una empresa. Déjanos ayudarte a dar vida a tus ideas a través de un diseño gráfico convincente',
        services_title: 'Nuestros Servicios',
        services_subtitle: 'Soluciones creativas integrales adaptadas a tus necesidades',
        service_consulting_title: 'Consultoría y Servicios',
        service_consulting_desc: 'Consultoría digital estratégica para elevar tu negocio y maximizar tu presencia online.',
        service_design_title: 'Diseño Gráfico',
        service_design_desc: 'Diseño visual profesional que comunica efectivamente la identidad y visión de tu marca.',
        service_multimedia_title: 'Multimedia',
        service_multimedia_desc: 'Producción de video y contenido multimedia de alta calidad que cautiva a tu audiencia.',
        service_web_title: 'Desarrollo Web',
        service_web_desc: 'Sitios web modernos y responsivos optimizados para rendimiento y experiencia de usuario.',
        service_social_title: 'Redes Sociales',
        service_social_desc: 'Gestión estratégica de redes sociales para hacer crecer tu marca y conectar con tu comunidad.',
        service_package_title: 'Paquete Completo',
        service_package_desc: 'Soluciones creativas de servicio completo desde el concepto hasta la entrega final.',
        projects_title: 'Proyectos Destacados',
        projects_subtitle: 'Una mirada detrás del trabajo',
        featured_label: 'Proyecto Destacado',
        featured_title: 'The Burger Flyer',
        featured_subtitle: 'Del concepto fotográfico al diseño impreso final — un workflow editorial completo.',
        featured_cta: 'Ver el Caso de Estudio',
        logo_label: 'Identidad de Marca',
        logo_title: 'The Logo Project',
        logo_subtitle: 'Del brief del cliente a la marca final — una identidad de marca construida con estrategia y oficio.',
        logo_cta: 'Ver el Caso de Estudio',
        cantor_label: 'Transformación de Marca',
        cantor_title: 'Cantor Tactical',
        cantor_subtitle: 'Evolución profesional de marca para una empresa de seguridad y entrenamiento de élite — del concepto al impacto en el mercado.',
        cantor_cta: 'Ver el Caso de Estudio',
        djc_label: 'Ecosistema Multi-Plataforma',
        djc_title: 'Dr. Cantor project',
        djc_subtitle: 'Construyendo dos ecosistemas digitales completos desde expertise táctico de élite — plataformas, materiales de entrenamiento, modelos de negocio integrados.',
        djc_cta: 'Ver el Caso de Estudio',
            primeline_label: 'Ecosistema Integral de Branding',
            primeline_title: 'Prime Line Project',
            primeline_subtitle: 'Desde diseño de catálogos hasta estrategia de branding multi-locación — ecosistema visual completo para un distribuidor de alimentos especializados.',
            primeline_cta: 'Ver el Caso de Estudio',
        gallery_title: 'Galería de Proyectos',
        gallery_subtitle: 'Una selección de nuestro trabajo creativo',
        video_title: 'Portfolio de Videos',
        video_subtitle: 'Producción multimedia profesional',
        video_cta: '¿Quieres ver el portfolio de videos completo?',
        video_cta_btn: 'Contáctanos',
        testimonials_title: 'Testimonios de Clientes',
        testimonials_subtitle: 'Lo que nuestros clientes dicen de nosotros',
        stat_years: 'Años de Experiencia',
        stat_projects: 'Proyectos Completados',
        stat_clients: 'Clientes Satisfechos',
        stat_languages: 'Idiomas',
        contact_title: 'Contáctanos',
        contact_subtitle: 'Nos especializamos en crear proyectos visualmente impactantes que comunican efectivamente tu visión',
        contact_info_title: 'Información de Contacto',
        form_name: 'Tu Nombre',
        form_email: 'Tu Email',
        form_subject: 'Asunto',
        form_message: 'Tu Mensaje',
        form_submit: 'Enviar Mensaje',
        footer_tagline: 'Soluciones Creativas para tu Negocio',
        footer_services: 'Servicios',
        footer_company: 'Empresa',
        footer_rights: 'Todos los derechos reservados.',
            footer_desc: 'Diseño Gráfico & Branding',
            footer_contact: 'Contacto',
            primeline_banner_title: 'Prime Line Distributors',
            primeline_banner_subtitle: 'Ecosistema de Branding Completo • Estrategia Multi-Locación • Liderazgo en Diseño de Producto',
            primeline_banner_bullet1: 'Catálogos y Material Promocional',
            primeline_banner_bullet2: 'Diseño de Etiquetas y Envases',
            primeline_banner_bullet3: 'Estrategia Visual Integral',
            primeline_intro_title: 'De Importadores a Iconos de Distribución',
            primeline_intro_text1: 'Prime Line es una empresa líder en la importación y distribución de alimentos y bebidas especializadas en Estados Unidos. Con presencia en múltiples locaciones (Florida, Nueva York, West Coast) y una división dedicada al café, Primeline necesitaba una identidad visual completa que comunicara profesionalismo, confiabilidad y excelencia.',
            primeline_intro_text2: 'Durante años, nos encargamos de desarrollar su ecosistema gráfico integral: desde catálogos y brochures hasta etiquetado de productos, papelería corporativa, formularios administrativos, material de impresión decorativo, estrategia de wrapping, diseño de producto desde cero, plataformas web, sistemas de registro y posicionamiento digital.',
            primeline_challenge_title: 'El Desafío: Unificación Visual',
            primeline_challenge_text1: 'Primeline importaba productos de alta calidad pero carecía de una identidad visual cohesiva. Sus materiales gráficos eran dispares, sin un sistema de diseño unificado que reflejara la profesionalidad y excelencia de la empresa.',
            primeline_challenge_text2: 'El objetivo: crear un sistema visual integral que funcionara en catálogos, envases, papelería, formularios, plataformas digitales y todos los puntos de contacto con el cliente. Una estrategia que evolucionara con el crecimiento de la empresa.',
            primeline_services_title: 'Servicios Entregados',
            primeline_service1_title: 'Catálogos & Brochures',
            primeline_service1_text: 'Diseño editorial de catálogos de productos con layout dinámico, fotografía de alimentos, tipografía profesional y estructura modular para diferentes líneas de productos.',
            primeline_service2_title: 'Etiquetas & Envases',
            primeline_service2_text: 'Diseño técnico de etiquetas para productos especializados, considerando regulaciones, códigos de barras, información nutricional y marca positioning en el punto de venta.',
            primeline_service3_title: 'Papelería Corporativa',
            primeline_service3_text: 'Sistema completo de papelería: tarjetas de presentación, membretes, sobres, folders, diseño de marca aplicada a todos los formatos administrativos.',
            primeline_service4_title: 'Formularios & Documentos',
            primeline_service4_text: 'Diseño de formularios de orden, facturas, documentos administrativos, permisos y trámites legales con estructura clara y branding integrado.',
            primeline_service5_title: 'Wrapping & Packaging',
            primeline_service5_text: 'Diseño de estrategia de empaque, patrones de wrapping, materiales decorativos, planometría y estructuras para productos especializados.',
            primeline_service6_title: 'Product Design desde Cero',
            primeline_service6_text: 'Creación de identidad visual para nuevos productos, desde conceptualización de marca hasta guías de aplicación en todos los puntos de contacto.',
            primeline_service7_title: 'Ecosistema Digital',
            primeline_service7_text: 'Diseño web administrativo, plataforma de registro de clientes, catálogos online interactivos, portales de orden y sistemas de gestión visual.',
            primeline_service8_title: 'Posicionamiento & SEO',
            primeline_service8_text: 'Estrategia de posicionamiento de marca en buscadores, optimización de contenido visual, metadata y arquitectura de información para máxima visibilidad.',
            primeline_portfolio_title: 'Product Lines Portfolio',
            primeline_portfolio_subtitle: 'Galería visual de líneas de productos diseñadas e integradas en el ecosistema Primeline',
            primeline_portfolio_item1: 'Productos Especializados',
            primeline_portfolio_item2: 'Línea Premium',
            primeline_portfolio_item3: 'Categoría Gourmet',
            primeline_portfolio_item4: 'Colección Regional',
            primeline_locations_title: 'Estrategia Multi-Locación',
            primeline_locations_subtitle: 'Coherencia visual en tres regiones estratégicas',
            primeline_florida: 'Centro de distribución principal, catálogo de productos tropicales y regionales, logística y coordinación de pedidos, sistema de registro local.',
            primeline_newyork: 'Centro de operaciones administrativas, oficinas corporativas, gestión de cuentas mayoristas, archivo de documentación.',
            primeline_westcoast: 'Expansión hacia mercados de la Costa Oeste, Las Vegas y Los Angeles, nuevas líneas de productos, distribución especializada.',
            primeline_catalog: 'Catálogo NEC',
            primeline_coffee_title: 'Coffee Division: Brand Extension',
            primeline_coffee_text1: 'La División de Café de Primeline requería una extensión coherente de la marca madre pero con identidad propia. Diseñamos un ecosistema visual que reflejara especialización, calidad y sofisticación.',
            primeline_coffee_text2: 'Desde empaques de café hasta material promocional, catálogos de variedades, certificaciones y material punto de venta, todo bajo los principios del sistema de diseño Primeline pero con acentos y tipografía diferenciadores.',
            primeline_coffee_text3: 'Sitio web dedicado: www.primelinecoffee.com',
            primeline_system_title: 'Sistema de Diseño Integrado',
            primeline_system_subtitle: 'Coherencia visual aplicada en 100+ elementos de marca',
            primeline_color1: 'Marca Principal',
            primeline_color2: 'Acentos Gourmet',
            primeline_color3: 'Tipografía',
            primeline_color4: 'Cuerpo',
            primeline_gallery_title: 'Galería Completa de Trabajo',
            primeline_results_title: 'Resultados & Impacto',
            primeline_result1: 'Elementos de Marca Diseñados',
            primeline_result2: 'Regiones Geográficas Unificadas',
            primeline_result3: 'Líneas de Productos Rediseñadas',
            primeline_result4: 'Plataformas Digitales Diseñadas',
            primeline_results_narrative: 'La implementación del sistema de diseño Primeline resultó en una presencia visual coherente, profesional y diferenciadora en el mercado de distribución de alimentos especializados. Desde catálogos hasta plataformas digitales, cada punto de contacto refuerza la posición de Primeline como líder en su categoría.',
            primeline_capabilities_title: 'Alcance de Servicios Demostrados',
            primeline_cap1: 'Editorial Design',
            primeline_cap1_text: 'Catálogos, brochures, revistas, libros de marca',
            primeline_cap2: 'Packaging Design',
            primeline_cap2_text: 'Etiquetas, envases, wrapping, material decorativo',
            primeline_cap3: 'Corporate Identity',
            primeline_cap3_text: 'Sistemas de diseño, papelería, aplicaciones de marca',
            primeline_cap4: 'Digital Systems',
            primeline_cap4_text: 'Websites, plataformas, interfaces administrativas',
            primeline_cap5: 'Multi-Platform Strategy',
            primeline_cap5_text: 'Coherencia visual en múltiples canales y geografías',
            primeline_cap6: 'Information Architecture',
            primeline_cap6_text: 'Estructura de sistemas, documentación, formularios',
            primeline_cta_title: 'Complejidad Resuelta en Cada Detalle',
            primeline_cta_text: 'Primeline es más que un proyecto de diseño: es un ecosistema visual completo que demuestra la capacidad de construir sistemas coherentes, escalables y diferenciadores en mercados competitivos. Catálogos, envases, formularios, plataformas digitales, papelería, wrapping, productos desde cero—todo bajo una lógica visual unificada.',
            primeline_cta_button: 'Iniciar Proyecto'
    },
    en: {
        nav_home: 'HOME',
        nav_showcase: 'SHOWCASE',
        nav_gallery: 'GALLERY',
        nav_video: 'VIDEO GALLERY',
        nav_contact: 'CONTACT',
        services_tagline: 'Consulting & Service | Graphic Design | Multimedia | Web | Social Media',
        hero_title: 'We specialize in crafting visually stunning projects that effectively communicate your vision, whether you\'re an individual or a business. Let us help you bring your ideas to life through compelling graphic design',
        services_title: 'Our Services',
        services_subtitle: 'Comprehensive creative solutions tailored to your needs',
        service_consulting_title: 'Consulting & Service',
        service_consulting_desc: 'Strategic digital consulting to elevate your business and maximize your online presence.',
        service_design_title: 'Graphic Design',
        service_design_desc: 'Professional visual design that effectively communicates your brand identity and vision.',
        service_multimedia_title: 'Multimedia',
        service_multimedia_desc: 'High-quality video production and multimedia content that captivates your audience.',
        service_web_title: 'Web Development',
        service_web_desc: 'Modern, responsive websites optimized for performance and user experience.',
        service_social_title: 'Social Media',
        service_social_desc: 'Strategic social media management to grow your brand and engage your community.',
        service_package_title: 'Complete Package',
        service_package_desc: 'Full-service creative solutions from concept to final delivery.',
        projects_title: 'Featured Projects',
        projects_subtitle: 'A look behind the work',
        featured_label: 'Featured Project',
        featured_title: 'The Burger Flyer',
        featured_subtitle: 'From concept photography to final print-ready design — a complete editorial workflow.',
        featured_cta: 'View Case Study',
        logo_label: 'Brand Identity',
        logo_title: 'The Logo Project',
        logo_subtitle: 'From client brief to final mark — a full brand identity built with strategy and craft.',
        logo_cta: 'View Case Study',
        cantor_label: 'Brand Transformation',
        cantor_title: 'Cantor Tactical',
        cantor_subtitle: 'Professional brand evolution for an elite security and training company — from concept to market impact.',
        cantor_cta: 'View Case Study',
        djc_label: 'Multi-Platform Ecosystem',
        djc_title: 'Dr. Cantor project',
        djc_subtitle: 'Building two complete digital ecosystems from elite tactical expertise — platforms, training materials, and integrated business models.',
        djc_cta: 'View Case Study',
            primeline_label: 'Complete Branding Ecosystem',
            primeline_title: 'Prime Line Project',
            primeline_subtitle: 'From comprehensive catalog design to multi-location branding strategy — complete visual ecosystem for a specialty food distributor.',
            primeline_cta: 'View Case Study',
        gallery_title: 'Project Gallery',
        gallery_subtitle: 'A selection of our creative work',
        video_title: 'Video Portfolio',
        video_subtitle: 'Professional multimedia production',
        video_cta: 'Want to see the full video portfolio?',
        video_cta_btn: 'Contact Us',
        testimonials_title: 'Client Testimonials',
        testimonials_subtitle: 'What our clients say about us',
        stat_years: 'Years Experience',
        stat_projects: 'Projects Completed',
        stat_clients: 'Happy Clients',
        stat_languages: 'Languages',
        contact_title: 'Get In Touch',
        contact_subtitle: 'We specialize in crafting visually stunning projects that effectively communicate your vision',
        contact_info_title: 'Contact Information',
        form_name: 'Your Name',
        form_email: 'Your Email',
        form_subject: 'Subject',
        form_message: 'Your Message',
        form_submit: 'Send Message',
        footer_tagline: 'Creative Solutions for Your Business',
        footer_services: 'Services',
        footer_company: 'Company',
        footer_rights: 'All rights reserved.',
            footer_desc: 'Graphic Design & Branding',
            footer_contact: 'Contact',
            primeline_banner_title: 'Prime Line Distributors',
            primeline_banner_subtitle: 'Complete Branding Ecosystem • Multi-Location Strategy • Product Design Leadership',
            primeline_banner_bullet1: 'Catalogs and Promotional Material',
            primeline_banner_bullet2: 'Label and Packaging Design',
            primeline_banner_bullet3: 'Comprehensive Visual Strategy',
            primeline_intro_title: 'From Importers to Distribution Icons',
            primeline_intro_text1: 'Prime Line Distributors is a leading importer and distributor of specialty foods and beverages in the USA. With presence in multiple locations (Florida, New York, West Coast) and a dedicated coffee division, Primeline needed a complete visual identity that communicated professionalism, reliability, and excellence.',
            primeline_intro_text2: 'For years, we managed their comprehensive graphic ecosystem: from catalogs and brochures to product labeling, corporate stationery, administrative forms, decorative print materials, wrapping strategy, product design from scratch, web platforms, client registration systems, and digital positioning.',
            primeline_challenge_title: 'The Challenge: Visual Unification',
            primeline_challenge_text1: 'Primeline imported high-quality products but lacked a coherent visual identity. Their graphic materials were disparate, without a unified design system that reflected the company\'s professionalism and excellence.',
            primeline_challenge_text2: 'The objective: create a comprehensive visual system that worked across catalogs, packaging, stationery, forms, digital platforms, and all customer touchpoints. A strategy that would evolve with the company\'s growth.',
            primeline_services_title: 'Services Delivered',
            primeline_service1_title: 'Catalogs & Brochures',
            primeline_service1_text: 'Editorial design of product catalogs with dynamic layout, food photography, professional typography, and modular structure for different product lines.',
            primeline_service2_title: 'Labels & Packaging',
            primeline_service2_text: 'Technical label design for specialized products, considering regulations, barcodes, nutritional information, and brand positioning at point of sale.',
            primeline_service3_title: 'Corporate Stationery',
            primeline_service3_text: 'Complete stationery system: business cards, letterheads, envelopes, folders, brand design applied to all administrative formats.',
            primeline_service4_title: 'Forms & Documents',
            primeline_service4_text: 'Design of order forms, invoices, administrative documents, permits, and legal paperwork with clear structure and integrated branding.',
            primeline_service5_title: 'Wrapping & Packaging',
            primeline_service5_text: 'Packaging strategy design, wrapping patterns, decorative materials, planometry, and structures for specialized products.',
            primeline_service6_title: 'Product Design from Scratch',
            primeline_service6_text: 'Creation of visual identity for new products, from brand conceptualization to application guidelines across all touchpoints.',
            primeline_service7_title: 'Digital Ecosystem',
            primeline_service7_text: 'Administrative web design, client registration platform, interactive online catalogs, order portals, and visual management systems.',
            primeline_service8_title: 'Positioning & SEO',
            primeline_service8_text: 'Brand positioning strategy in search engines, optimization of visual content, metadata, and information architecture for maximum visibility.',
            primeline_portfolio_title: 'Product Lines Portfolio',
            primeline_portfolio_subtitle: 'Visual gallery of product lines designed and integrated in the Primeline ecosystem',
            primeline_portfolio_item1: 'Specialized Products',
            primeline_portfolio_item2: 'Premium Line',
            primeline_portfolio_item3: 'Gourmet Category',
            primeline_portfolio_item4: 'Regional Collection',
            primeline_locations_title: 'Multi-Location Strategy',
            primeline_locations_subtitle: 'Visual coherence across three strategic regions',
            primeline_florida: 'Main distribution center, catalog of tropical and regional products, logistics and order coordination, local registration system.',
            primeline_newyork: 'Administrative operations center, corporate offices, wholesale account management, documentation archive.',
            primeline_westcoast: 'Expansion toward West Coast markets, Las Vegas and Los Angeles, new product lines, specialized distribution.',
            primeline_catalog: 'NEC Catalog',
            primeline_coffee_title: 'Coffee Division: Brand Extension',
            primeline_coffee_text1: 'Primeline\'s Coffee Division required a coherent extension of the parent brand but with its own identity. We designed a visual ecosystem that reflected specialization, quality, and sophistication.',
            primeline_coffee_text2: 'From coffee packaging to promotional material, variety catalogs, certifications, and point-of-sale material, all under Primeline\'s design system principles but with differentiating accents and typography.',
            primeline_coffee_text3: 'Dedicated website: www.primelinecoffee.com',
            primeline_system_title: 'Integrated Design System',
            primeline_system_subtitle: 'Visual coherence applied across 100+ brand elements',
            primeline_color1: 'Main Brand',
            primeline_color2: 'Gourmet Accents',
            primeline_color3: 'Typography',
            primeline_color4: 'Body',
            primeline_gallery_title: 'Complete Work Gallery',
            primeline_results_title: 'Results & Impact',
            primeline_result1: 'Brand Elements Designed',
            primeline_result2: 'Geographic Regions Unified',
            primeline_result3: 'Product Lines Redesigned',
            primeline_result4: 'Digital Platforms Designed',
            primeline_results_narrative: 'The implementation of Primeline\'s design system resulted in a coherent, professional, and differentiating visual presence in the specialty food distribution market. From catalogs to digital platforms, each touchpoint reinforces Primeline\'s position as a category leader.',
            primeline_capabilities_title: 'Services Scope Demonstrated',
            primeline_cap1: 'Editorial Design',
            primeline_cap1_text: 'Catalogs, brochures, magazines, brand books',
            primeline_cap2: 'Packaging Design',
            primeline_cap2_text: 'Labels, containers, wrapping, decorative materials',
            primeline_cap3: 'Corporate Identity',
            primeline_cap3_text: 'Design systems, stationery, brand applications',
            primeline_cap4: 'Digital Systems',
            primeline_cap4_text: 'Websites, platforms, administrative interfaces',
            primeline_cap5: 'Multi-Platform Strategy',
            primeline_cap5_text: 'Visual coherence across multiple channels and geographies',
            primeline_cap6: 'Information Architecture',
            primeline_cap6_text: 'Systems structure, documentation, forms',
            primeline_cta_title: 'Complexity Solved in Every Detail',
            primeline_cta_text: 'Primeline is more than a design project: it\'s a complete visual ecosystem that demonstrates the ability to build coherent, scalable, and differentiating systems in competitive markets. Catalogs, packaging, forms, digital platforms, stationery, wrapping, products from scratch—all under a unified visual logic.',
            primeline_cta_button: 'Start Project'
    },
    it: {
        nav_home: 'HOME',
        nav_showcase: 'SHOWCASE',
        nav_gallery: 'GALLERIA',
        nav_video: 'GALLERIA VIDEO',
        nav_contact: 'CONTATTO',
        services_tagline: 'Consulenza e Servizi | Design Grafico | Multimedia | Web | Social Media',
        hero_title: 'Siamo specializzati nella creazione di progetti visivamente sorprendenti che comunicano efficacemente la tua visione, che tu sia un individuo o un\'azienda. Lascia che ti aiutiamo a dare vita alle tue idee attraverso un design grafico coinvolgente',
        services_title: 'I Nostri Servizi',
        services_subtitle: 'Soluzioni creative complete su misura per le tue esigenze',
        service_consulting_title: 'Consulenza e Servizi',
        service_consulting_desc: 'Consulenza digitale strategica per elevare il tuo business e massimizzare la tua presenza online.',
        service_design_title: 'Design Grafico',
        service_design_desc: 'Design visivo professionale che comunica efficacemente l\'identità e la visione del tuo brand.',
        service_multimedia_title: 'Multimedia',
        service_multimedia_desc: 'Produzione video e contenuti multimediali di alta qualità che catturano il tuo pubblico.',
        service_web_title: 'Sviluppo Web',
        service_web_desc: 'Siti web moderni e responsive ottimizzati per prestazioni ed esperienza utente.',
        service_social_title: 'Social Media',
        service_social_desc: 'Gestione strategica dei social media per far crescere il tuo brand e coinvolgere la tua community.',
        service_package_title: 'Pacchetto Completo',
        service_package_desc: 'Soluzioni creative a servizio completo dal concetto alla consegna finale.',
        projects_title: 'Progetti in Evidenza',
        projects_subtitle: 'Uno sguardo dietro al lavoro',
        featured_label: 'Progetto in Evidenza',
        featured_title: 'The Burger Flyer',
        featured_subtitle: 'Dalla fotografia conceptuale al design stampato finale — un workflow editoriale completo.',
        featured_cta: 'Vedi il Caso Studio',
        logo_label: 'Identità di Marca',
        logo_title: 'The Logo Project',
        logo_subtitle: 'Dal brief del cliente al marchio finale — una brand identity costruita con strategia e mestiere.',
        logo_cta: 'Vedi il Caso Studio',
        cantor_label: 'Trasformazione di Marca',
        cantor_title: 'Cantor Tactical',
        cantor_subtitle: 'Evoluzione di marca professionale per un’azienda di sicurezza e addestramento d’elite — dal concetto all’impatto di mercato.',
        cantor_cta: 'Vedi il Caso Studio',
        djc_label: 'Ecosistema Multi-Piattaforma',
        djc_title: 'Dr. Cantor project',
        djc_subtitle: 'Costruzione di due ecosistemi digitali completi da expertise tattica d’elite — piattaforme, materiali di formazione, modelli di business integrati.',
        djc_cta: 'Vedi il Caso Studio',
            primeline_label: 'Ecosistema di Branding Completo',
            primeline_title: 'Prime Line Project',
            primeline_subtitle: 'Dal design comprensivo del catalogo alla strategia di branding multi-locazione — ecosistema visivo completo per un distributore di alimenti specializzati.',
            primeline_cta: 'Vedi il Caso Studio',
        gallery_title: 'Galleria Progetti',
        gallery_subtitle: 'Una selezione del nostro lavoro creativo',
        video_title: 'Portfolio Video',
        video_subtitle: 'Produzione multimediale professionale',
        video_cta: 'Vuoi vedere il portfolio video completo?',
        video_cta_btn: 'Contattaci',
        testimonials_title: 'Testimonianze dei Clienti',
        testimonials_subtitle: 'Cosa dicono di noi i nostri clienti',
        stat_years: 'Anni di Esperienza',
        stat_projects: 'Progetti Completati',
        stat_clients: 'Clienti Soddisfatti',
        stat_languages: 'Lingue',
        contact_title: 'Mettiti in Contatto',
        contact_subtitle: 'Siamo specializzati nella creazione di progetti visivamente sorprendenti che comunicano efficacemente la tua visione',
        contact_info_title: 'Informazioni di Contatto',
        form_name: 'Il Tuo Nome',
        form_email: 'La Tua Email',
        form_subject: 'Oggetto',
        form_message: 'Il Tuo Messaggio',
        form_submit: 'Invia Messaggio',
        footer_tagline: 'Soluzioni Creative per il Tuo Business',
        footer_services: 'Servizi',
        footer_company: 'Azienda',
        footer_rights: 'Tutti i diritti riservati.',
            footer_desc: 'Design Grafico & Branding',
            footer_contact: 'Contatto',
            primeline_banner_title: 'Prime Line Distributors',
            primeline_banner_subtitle: 'Ecosistema di Branding Completo • Strategia Multi-Locazione • Leadership nel Design di Prodotto',
            primeline_banner_bullet1: 'Cataloghi e Materiale Promozionale',
            primeline_banner_bullet2: 'Design di Etichette e Imballaggi',
            primeline_banner_bullet3: 'Strategia Visiva Integrata',
            primeline_intro_title: 'Da Importatori a Icone della Distribuzione',
            primeline_intro_text1: 'Prime Line Distributors è un leader nell\'importazione e distribuzione di alimenti e bevande specializzate negli USA. Con presenza in più località (Florida, New York, West Coast) e una divisione dedicata al caffè, Primeline aveva bisogno di un\'identità visiva completa che comunicasse professionalità, affidabilità ed eccellenza.',
            primeline_intro_text2: 'Per anni, abbiamo gestito il loro ecosistema grafico completo: dai cataloghi ai brochure all\'etichettatura dei prodotti, cancelleria aziendale, moduli amministrativi, materiali stampati decorativi, strategia di wrapping, design dei prodotti da zero, piattaforme web, sistemi di registrazione dei clienti e posizionamento digitale.',
            primeline_challenge_title: 'La Sfida: Unificazione Visiva',
            primeline_challenge_text1: 'Primeline importava prodotti di alta qualità ma mancava di un\'identità visiva coerente. I loro materiali grafici erano disparati, senza un sistema di design unificato che riflettesse la professionalità e l\'eccellenza dell\'azienda.',
            primeline_challenge_text2: 'L\'obiettivo: creare un sistema visivo completo che funzionasse in cataloghi, imballaggi, cancelleria, moduli, piattaforme digitali e tutti i punti di contatto con i clienti. Una strategia che si evolvesse con la crescita dell\'azienda.',
            primeline_services_title: 'Servizi Forniti',
            primeline_service1_title: 'Cataloghi & Brochure',
            primeline_service1_text: 'Design editoriale di cataloghi di prodotti con layout dinamico, fotografia di cibo, tipografia professionale e struttura modulare per diverse linee di prodotti.',
            primeline_service2_title: 'Etichette & Imballaggi',
            primeline_service2_text: 'Design tecnico di etichette per prodotti specializzati, considerando normative, codici a barre, informazioni nutrizionali e posizionamento del brand al punto vendita.',
            primeline_service3_title: 'Cancelleria Aziendale',
            primeline_service3_text: 'Sistema completo di cancelleria: biglietti da visita, intestazioni, buste, cartelle, design del brand applicato a tutti i formati amministrativi.',
            primeline_service4_title: 'Moduli & Documenti',
            primeline_service4_text: 'Design di moduli di ordine, fatture, documenti amministrativi, permessi e pratiche legali con struttura chiara e branding integrato.',
            primeline_service5_title: 'Wrapping & Packaging',
            primeline_service5_text: 'Design di strategia di imballaggio, motivi di wrapping, materiali decorativi, planimetria e strutture per prodotti specializzati.',
            primeline_service6_title: 'Product Design da Zero',
            primeline_service6_text: 'Creazione di identità visiva per nuovi prodotti, dalla concettualizzazione del brand alle linee guida di applicazione su tutti i punti di contatto.',
            primeline_service7_title: 'Ecosistema Digitale',
            primeline_service7_text: 'Design web amministrativo, piattaforma di registrazione dei clienti, cataloghi online interattivi, portali di ordine e sistemi di gestione visiva.',
            primeline_service8_title: 'Posizionamento & SEO',
            primeline_service8_text: 'Strategia di posizionamento del brand nei motori di ricerca, ottimizzazione del contenuto visivo, metadata e architettura dell\'informazione per massima visibilità.',
            primeline_portfolio_title: 'Portafoglio Linee di Prodotto',
            primeline_portfolio_subtitle: 'Galleria visiva di linee di prodotto progettate e integrate nell\'ecosistema Primeline',
            primeline_portfolio_item1: 'Prodotti Specializzati',
            primeline_portfolio_item2: 'Linea Premium',
            primeline_portfolio_item3: 'Categoria Gourmet',
            primeline_portfolio_item4: 'Collezione Regionale',
            primeline_locations_title: 'Strategia Multi-Locazione',
            primeline_locations_subtitle: 'Coerenza visiva in tre regioni strategiche',
            primeline_florida: 'Centro di distribuzione principale, catalogo di prodotti tropicali e regionali, logistica e coordinamento degli ordini, sistema di registrazione locale.',
            primeline_newyork: 'Centro operazioni amministrative, uffici aziendali, gestione account all\'ingrosso, archivio documentazione.',
            primeline_westcoast: 'Espansione verso i mercati della Costa Ovest, Las Vegas e Los Angeles, nuove linee di prodotti, distribuzione specializzata.',
            primeline_catalog: 'Catalogo NEC',
            primeline_coffee_title: 'Coffee Division: Estensione del Brand',
            primeline_coffee_text1: 'La Divisione Caffè di Primeline richiedeva un\'estensione coerente del brand madre ma con identità propria. Abbiamo progettato un ecosistema visivo che riflettesse specializzazione, qualità e sofisticazione.',
            primeline_coffee_text2: 'Dagli imballaggi di caffè al materiale promozionale, cataloghi di varietà, certificazioni e materiale al punto vendita, tutto secondo i principi del sistema di design Primeline ma con accenti e tipografia differenzianti.',
            primeline_coffee_text3: 'Sito web dedicato: www.primelinecoffee.com',
            primeline_system_title: 'Sistema di Design Integrato',
            primeline_system_subtitle: 'Coerenza visiva applicata in 100+ elementi di brand',
            primeline_color1: 'Brand Principale',
            primeline_color2: 'Accenti Gourmet',
            primeline_color3: 'Tipografia',
            primeline_color4: 'Corpo',
            primeline_gallery_title: 'Galleria Completa del Lavoro',
            primeline_results_title: 'Risultati & Impatto',
            primeline_result1: 'Elementi di Brand Progettati',
            primeline_result2: 'Regioni Geografiche Unificate',
            primeline_result3: 'Linee di Prodotto Riprogettate',
            primeline_result4: 'Piattaforme Digitali Progettate',
            primeline_results_narrative: 'L\'implementazione del sistema di design Primeline ha risultato in una presenza visiva coerente, professionale e differenziante nel mercato della distribuzione di alimenti specializzati. Dai cataloghi alle piattaforme digitali, ogni punto di contatto rafforza la posizione di Primeline come leader della categoria.',
            primeline_capabilities_title: 'Portata dei Servizi Dimostrata',
            primeline_cap1: 'Editorial Design',
            primeline_cap1_text: 'Cataloghi, brochure, riviste, brand book',
            primeline_cap2: 'Packaging Design',
            primeline_cap2_text: 'Etichette, contenitori, wrapping, materiali decorativi',
            primeline_cap3: 'Corporate Identity',
            primeline_cap3_text: 'Sistemi di design, cancelleria, applicazioni di brand',
            primeline_cap4: 'Digital Systems',
            primeline_cap4_text: 'Siti web, piattaforme, interfacce amministrative',
            primeline_cap5: 'Multi-Platform Strategy',
            primeline_cap5_text: 'Coerenza visiva su più canali e geografie',
            primeline_cap6: 'Information Architecture',
            primeline_cap6_text: 'Struttura dei sistemi, documentazione, moduli',
            primeline_cta_title: 'Complessità Risolta in Ogni Dettaglio',
            primeline_cta_text: 'Primeline è più che un progetto di design: è un ecosistema visivo completo che dimostra la capacità di costruire sistemi coerenti, scalabili e differenzianti in mercati competitivi. Cataloghi, imballaggi, moduli, piattaforme digitali, cancelleria, wrapping, prodotti da zero—tutto sotto una logica visiva unificata.',
            primeline_cta_button: 'Avvia Progetto'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    initSlider();
    initLanguage();
    initNavigation();
    initScrollAnimations();
    initGalleryModal();
    initTestimonialSlider();
    initCounters();
    initBackToTop();
    initSmoothScroll();
});

// Initialize Slider
function initSlider() {
    showSlide(currentSlideIndex);
    startAutoSlide();
}

// Language Switching
function initLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    changeLanguage(savedLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            changeLanguage(lang);
            localStorage.setItem('language', lang);
        });
    });
}

function changeLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Navigation
function initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navbar = document.querySelector('.navbar');

    // Hamburger menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    }

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Smooth Scroll
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
}

// Gallery Modal
function initGalleryModal() {
    const modal = document.getElementById('galleryModal');
    if (!modal) return;
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.querySelector('.modal-caption');
    const closeBtn = document.querySelector('.modal-close');

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // ESC key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Open Modal Function (called from HTML)
function openModal(button) {
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById('modalImg');
    const modalCaption = document.querySelector('.modal-caption');
    const galleryItem = button.closest('.gallery-item');
    const img = galleryItem.querySelector('img');
    const overlay = galleryItem.querySelector('.gallery-overlay');
    const title = overlay.querySelector('h3').textContent;
    const category = overlay.querySelector('p').textContent;

    modal.style.display = 'block';
    modalImg.src = img.src;
    modalCaption.innerHTML = `<h3>${title}</h3><p>${category}</p>`;
}

// Testimonial Slider
function initTestimonialSlider() {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;
    // Testimonials now use a static CSS grid layout to avoid left-shift issues.
}

// Animated Counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-count');
                const increment = target / speed;
                let current = 0;

                const updateCounter = () => {
                    current += increment;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 10);
                    } else {
                        counter.textContent = target + '+';
                    }
                };

                updateCounter();
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// Back to Top Button
function initBackToTop() {
    const backToTopBtn = document.getElementById('backToTop');
    if (!backToTopBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Form Validation (Optional Enhancement)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Netlify handles the submission
        // You can add custom validation here if needed
        const name = this.querySelector('[name="name"]').value;
        const email = this.querySelector('[name="email"]').value;
        const message = this.querySelector('[name="message"]').value;

        if (!name || !email || !message) {
            e.preventDefault();
            alert('Por favor completa todos los campos requeridos.');
            return false;
        }
        
        // Form will be submitted to Netlify
        return true;
    });
}

// Parallax Effect (Optional Enhancement)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-overlay');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Service Cards Hover Effect Enhancement
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Auto-update copyright year
document.querySelectorAll('.auto-year').forEach(el => {
    el.textContent = new Date().getFullYear();
});

// Gallery Filter (If you want to add category filtering later)
function filterGallery(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Console welcome message
console.log('%c🎨 GiordanoTec Website', 'color: #667eea; font-size: 20px; font-weight: bold;');
console.log('%cProfessional Creative Services', 'color: #764ba2; font-size: 14px;');
console.log('%cDeveloped with ❤️', 'color: #666; font-size: 12px;');

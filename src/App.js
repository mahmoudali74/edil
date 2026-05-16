import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes, FaCheck, FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function EdilDesignWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowWhatsApp(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const nextImage = (serviceIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [serviceIndex]: (prev[serviceIndex] || 0) + 1
    }));
  };

  const prevImage = (serviceIndex) => {
    setActiveImageIndex(prev => ({
      ...prev,
      [serviceIndex]: Math.max(0, (prev[serviceIndex] || 0) - 1)
    }));
  };

  const services = [
    {
      icon: "🏠",
      title: "Cartongesso Interni", // تم التعديل هنا
      desc: "Soluzioni complete in cartongesso per interni: pareti, controsoffitti e velette con finiture di alta qualità.", // تم التعديل هنا
      points: ["Pareti divisorie moderne", "Controsoffitti decorativi", "Isolamento termico e acustico", "Design personalizzati"],
      images: [
        "https://images.openai.com/static-rsc-4/JSUiPCHlsT5IncmJuIgIWHhmGIvHa515S2tZhA5wQEYzlBa6eSpqWZtuyqebTnGCFVBB4psrHXQU1pg_zdipgZneDiW5zVlslDR0lppbuIBIfVrTyU3pq62G5dNRqJ7SUsJESbgg5IU4gBdU36f9CEcI6TVc7q58uOPDumBemGh2eYRPt7g1APul-DzVx4TX?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/uDe4s-DE44V0ceFzC0Kc1dZe8ycwwKX_VpZQZFLZpzz7lKDtMUsRqMEBylmx6IVdac-iSMO_FtCNNYwXwnrzlmrurCfquljXkOaHUzXQzWNtW7JsjnFCuLc-VoOpqEAaSO6r0AdWt0B8t-X8QmEiyfx9Xpwt0rKPWBOYzYVD8vGl6HSdnNubDc4PdzcpWcb_?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/zYK5mhl7j0z3Q8iYBsWM53vsxqeprR6i6p9-AfxInctCHyq98Biw0bLDQR4eC0fYkWjVfdiySwG9mXjXYPqHo2zWEpFq6XoFInJjXNtCIidB8o2zSNgjFXMlTV_JDKLAnyaTC8VsoqsFNTnkKfcRrmOmS8WRnWS5e9o5jHuceSMD0jAXU5kfIcnWlySMixKa?purpose=fullsize"
      ]
    },
    {
      icon: "🎨",
      title: "Stucco e Rasatura",
      desc: "Prepariamo le superfici con tecniche professionali di stuccatura e rasatura.",
      points: ["Superfici lisce e uniformi", "Materiali di alta qualità", "Preparazione perfetta per la pittura", "Lavorazione precisa", "Risultati durevoli nel tempo"],
      images: [
        "/assets/photo_2026-05-16_16-50-31.jpg",
        "/assets/photo_2026-05-16_16-50-39.jpg",
        "/assets/photo_2026-05-16_16-50-42.jpg",
      ]
    },
    {
      icon: "🔷",
      title: "Posa Ceramica",
      desc: "Servizi professionali di posa ceramica per pavimenti e rivestimenti.",
      points: ["Pavimenti e rivestimenti moderni", "Installazione precisa", "Materiali resistenti", "Design eleganti", "Finiture di alta qualità"],
      images: [
        "https://images.openai.com/static-rsc-4/BcA_PZoEX2kyOm-bKw_e-3Bz4OIKB3deEBqtLBoVM1smF3F4EVJlxXOhydzvlEFYDnwPDPek47vAWVwhN9OmyGTVlREpezCdkkqsx2lgzUW6MLuIttoHc6M4W1jKfzuvZCSF18H7FEOoYOvZ7shcST0vka4tjr-95BT_9jg7geo?purpose=inline",
        "https://images.openai.com/static-rsc-4/SmLwRd4TPSL4cy63AOB_t9IZ6L04UHfuYOnqZ01-kq1KjUM3ZhQbFFgubBe1xQoT1HhJMqhCEgI-IAwhnhjdow_3Q7rX48PemtGO7IGDZEAR6tNTcee2cAyheOWXrpMZXY5SH3EpmHEM2r_MGQLVDTUt4IKZeivDNePmTR26BkI?purpose=inline",
        "https://images.openai.com/static-rsc-4/e9AsTonadwvTZgJ98JhWo8iS0TiqRA_-yzi0ZrETOYUUFL5IWIktkqVi0XhYtv9H9BlkTyQaohTq21o1oP99F1ZCJfn8nlRiZX6hBQjWUIGCZ-QaXjA2b3dsAw8Z9kAV9tRNgIY8fnR0hv0whMXPvlQG5HdmzY_1oe7k-gfrfaa7ji-QDRXSBCXrHH_dwrQn?purpose=fullsize"
      ]
    },
    {
      icon: "🪵",
      title: "Pavimenti in Parquet",
      desc: "Installiamo parquet moderni ed eleganti che donano calore e raffinatezza.",
      points: ["Design eleganti e moderni", "Materiali resistenti e raffinati", "Installazione professionale", "Comfort e isolamento", "Finiture curate nei dettagli"],
      images: [
        "https://images.openai.com/static-rsc-4/ivoENbO6SJVvYC9Y0DCscwChXKa2rnhsPeYiZvXRu4yl3_ZvvYy8INRabp148W_UAkMDy-JWqeIvIi1Xc8flOTxjyCq5ysZtLTAz4ez-xuEr7IY-opHK954JSNw_YXePLF0Y-nRxyQlC7PmF8ScMGEG-i6YN6sCy_xSCJpRzMMo?purpose=inline",
        "https://images.openai.com/static-rsc-4/OA1DzLnkl6N1CQR-sv99CfBGSs3pvkmirnstwqSeCRiQWv1jK5G6t-fjcN7D0W4fV8JRYp9ZD21MVhnW_zEENlUDMNJoCWDXrbcaVCj6x0SS-W-RvSpG9P6CKX95oHZ3tOmzxr5xZQxQSwvBaPUCqkx7blLQ1w7FpFVyVWUsA6Iv_KdmPdhBUlwXrkPQTdlJ?purpose=fullsize",
        "https://images.openai.com/static-rsc-4/vj0P-iPjD3IUO502i8_OZYt3TiKBcpNMrALYt8lMBvI0heCKgyiAc_Og9Z9yMD93VSfPOAqLXfX-rimpsN9bKywSOayHGkCe6rYsqDATKhfnWw9FlEq6iS39G3rUzksk2bDD2KxZVFuvW5clPsuSlYPK93Hxy8F-sNrjzQp0Db3n2Z57ka8QiOtyBLaPyAxM?purpose=fullsize"
      ]
    },
    {
      icon: "🖌️",
      title: "Pittura Professionale",
      desc: "Lavori di pittura interna ed esterna con finiture moderne e materiali di qualità.",
      points: ["Pittura interna ed esterna", "Colori moderni ed eleganti", "Materiali professionali", "Finiture pulite e precise", "Soluzioni personalizzate"],
      images: [
      
        "/assets/photo_2026-05-16_16-50-46.jpg",
        "/assets/photo_2026-05-16_16-50-49.jpg",
        "/assets/photo_2026-05-16_16-50-55.jpg",
      ]
    }
  ];

  const galleryImages = [
    { title: "Ristrutturazione Completa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
    { title: "Finiture di Lusso", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
    { title: "Interni Moderni", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80" }
  ];

  const whyChooseUs = [
    "Team qualificato",
    "Materiali di alta qualità",
    "Rispetto delle tempistiche",
    "Cura dei dettagli",
    "Soluzioni moderne e personalizzate"
  ];

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/800x600/D4AF37/0a0a0a?text=EDIL+DESIGN";
  };

  return (
    <>
      <style>{`
        :root {
          --gold: #D4AF37;
          --gold-light: #F4E5A3;
          --gold-dark: #B8942B;
          --black: #0a0a0a;
          --white: #FFFFFF;
          --gray-light: #F8F8F8;
          --gray-text: #666;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; }
        html { scroll-behavior: smooth; }
        body { background: var(--white); color: var(--black); overflow-x: hidden; line-height: 1.6; }
        .container { width: 92%; max-width: 1200px; margin: auto; }

        /* Navbar */
        .navbar {
          position: fixed; top: 0; width: 100%; padding: 15px 0;
          background: ${scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)'};
          backdrop-filter: blur(15px); z-index: 1000;
          box-shadow: ${scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 10px rgba(0,0,0,0.05)'};
          transition: all 0.3s ease;
        }
        .nav-content { display: flex; justify-content: space-between; align-items: center; }
        .logo-img { height: 150px; width: auto; transition: transform 0.3s ease; }
        .logo-img:hover { transform: scale(1.05); }
        .nav-links { display: flex; gap: 30px; align-items: center; }
        .nav-links a {
          text-decoration: none; color: var(--black); font-weight: 600;
          font-size: 14px; position: relative; padding: 5px 0; transition: color 0.3s;
        }
        .nav-links a::after {
          content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-dark)); transition: width 0.3s;
        }
        .nav-links a:hover { color: var(--gold-dark); }
        .nav-links a:hover::after { width: 100%; }
        .mobile-toggle { display: none; background: none; border: none; font-size: 24px; color: var(--black); cursor: pointer; padding: 5px; }

        /* Hero */
        .hero {
          min-height: 100vh; display: flex; align-items: center; padding: 140px 0 80px;
          background: linear-gradient(135deg, var(--white) 0%, var(--gray-light) 100%);
          position: relative; overflow: hidden;
        }
        .hero::before {
          content: ''; position: absolute; top: -10%; right: -5%; width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%); border-radius: 50%;
        }
        .hero-content { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; position: relative; z-index: 1; }
        .hero-badge {
          display: inline-flex; align-items: center; gap: 8px; background: var(--black);
          color: var(--gold-light); padding: 8px 20px; border-radius: 30px;
          font-size: 13px; font-weight: 600; margin-bottom: 25px; animation: fadeInUp 0.8s ease;
        }
        .hero h1 {
          font-size: clamp(36px, 5vw, 56px); line-height: 1.1; margin-bottom: 20px;
          font-weight: 800; animation: fadeInUp 0.8s ease 0.1s backwards;
        }
        .gradient {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero p {
          color: var(--gray-text); font-size: 17px; margin-bottom: 35px;
          animation: fadeInUp 0.8s ease 0.2s backwards; line-height: 1.8;
        }
        .buttons { display: flex; gap: 15px; flex-wrap: wrap; animation: fadeInUp 0.8s ease 0.3s backwards; }
        .btn {
          padding: 15px 35px; border: none; border-radius: 10px; cursor: pointer;
          font-size: 15px; font-weight: 600; transition: all 0.3s ease;
          text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
        }
        .btn-primary {
          background: var(--black); color: var(--gold-light);
          box-shadow: 0 8px 25px rgba(10,10,10,0.2);
        }
        .btn-primary:hover {
          transform: translateY(-3px); box-shadow: 0 12px 35px rgba(10,10,10,0.3);
          background: var(--gold-dark); color: var(--black);
        }
        .btn-outline { background: transparent; color: var(--black); border: 2px solid var(--black); }
        .btn-outline:hover {
          background: var(--black); color: var(--gold-light); transform: translateY(-3px);
        }
        .hero-image { position: relative; animation: fadeIn 1s ease 0.4s backwards; }
        .hero-image img {
          width: 100%; height: 550px; object-fit: cover; border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        /* Statistics Section - ITALIAN VERSION */
        .statistics-section {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--gray-light) 0%, var(--white) 100%);
          position: relative;
        }
        
        .statistics-header {
          text-align: center;
          margin-bottom: 50px;
        }
        
        .statistics-badge {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--black);
          padding: 8px 25px;
          border-radius: 25px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .statistics-title {
          font-size: clamp(32px, 4vw, 42px);
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--black);
        }
        
        .statistics-subtitle {
          color: var(--gray-text);
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }
        
        .statistics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }
        
        .stat-card {
          background: var(--white);
          border-radius: 20px;
          padding: 45px 35px;
          text-align: center;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          opacity: 0;
          transform: translateY(30px);
        }
        
        .stat-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .stat-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
        }
        
        .stat-number {
          font-size: clamp(48px, 6vw, 64px);
          font-weight: 800;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 15px;
          line-height: 1;
        }
        
        .stat-label {
          color: var(--gray-text);
          font-size: 16px;
          font-weight: 500;
        }

        /* Sections */
        section { padding: 90px 0; }
        .section-header { text-align: center; margin-bottom: 60px; }
        .section-tag {
          display: inline-block; background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--black); padding: 6px 20px; border-radius: 20px; font-size: 12px;
          font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px;
        }
        .section-title { font-size: clamp(32px, 4vw, 42px); font-weight: 800; margin-bottom: 20px; color: var(--black); }
        .section-subtitle { color: var(--gray-text); max-width: 700px; margin: auto; font-size: 16px; line-height: 1.7; }

        /* Services - Professional Design */
        .services-section { background: var(--gray-light); }
        .services-grid { display: grid; gap: 60px; }
        
        .service-card-professional {
          background: var(--white);
          border-radius: 30px;
          overflow: hidden;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        
        .service-card-professional.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        .service-card-professional:hover {
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          transform: translateY(-5px);
        }

        .service-content-wrapper {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 0;
        }

        .service-info {
          padding: 50px 45px;
          background: var(--white);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .service-icon-wrapper {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 45px;
          margin-bottom: 30px;
          box-shadow: 0 10px 30px rgba(212,175,55,0.3);
        }

        .service-info h3 {
          font-size: 32px;
          color: var(--black);
          margin-bottom: 20px;
          font-weight: 800;
          line-height: 1.2;
        }

        .service-info > p {
          color: var(--gray-text);
          font-size: 16px;
          line-height: 1.8;
          margin-bottom: 30px;
        }

        .service-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .service-features li {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--black);
          font-size: 15px;
          font-weight: 500;
          padding: 10px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
        }

        .service-features li:last-child {
          border-bottom: none;
        }

        .service-features li::before {
          content: '✓';
          width: 24px;
          height: 24px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--black);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
          flex-shrink: 0;
        }

        /* Professional Image Gallery */
        .service-gallery-wrapper {
          position: relative;
          background: var(--black);
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .gallery-main-image {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 25px;
          box-shadow: 0 20px 50px rgba(0,0,0,0.4);
        }

        .gallery-main-image img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .gallery-main-image:hover img {
          transform: scale(1.05);
        }

        .gallery-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255,255,255,0.95);
          border: none;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 20px;
          color: var(--black);
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          z-index: 10;
        }

        .gallery-nav:hover {
          background: var(--gold);
          transform: translateY(-50%) scale(1.1);
        }

        .gallery-nav.prev { left: 20px; }
        .gallery-nav.next { right: 20px; }

        .gallery-counter {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(0,0,0,0.7);
          color: var(--gold-light);
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          z-index: 10;
        }

        .gallery-thumbnails {
          display: flex;
          gap: 15px;
          justify-content: center;
        }

        .thumbnail {
          width: 100px;
          height: 70px;
          border-radius: 12px;
          overflow: hidden;
          cursor: pointer;
          border: 3px solid transparent;
          transition: all 0.3s ease;
          opacity: 0.6;
        }

        .thumbnail:hover {
          opacity: 0.9;
          transform: translateY(-3px);
        }

        .thumbnail.active {
          border-color: var(--gold);
          opacity: 1;
          box-shadow: 0 5px 20px rgba(212,175,55,0.4);
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Gallery */
        .gallery { background: var(--white); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; }
        .project-card {
          position: relative; border-radius: 20px; overflow: hidden; height: 420px;
          opacity: 0; transform: translateY(30px); transition: all 0.4s ease;
        }
        .project-card.animate-in { opacity: 1; transform: translateY(0); }
        .project-card:hover { transform: translateY(-10px); box-shadow: 0 30px 60px rgba(0,0,0,0.25); }
        .project-card img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease; }
        .project-card:hover img { transform: scale(1.1); }
        .project-overlay {
          position: absolute; bottom: 0; left: 0; right: 0; padding: 35px;
          background: linear-gradient(to top, rgba(10,10,10,0.95), transparent);
          transform: translateY(20px); opacity: 0; transition: all 0.4s ease;
        }
        .project-card:hover .project-overlay { transform: translateY(0); opacity: 1; }
        .project-overlay h3 { color: var(--gold-light); font-size: 26px; font-weight: 700; }

        /* Why Choose Us */
        .about { background: var(--gray-light); }
        .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 70px; align-items: center; }
        .about-content h2 { font-size: clamp(32px, 4vw, 40px); margin-bottom: 25px; font-weight: 800; }
        .about-content p { color: var(--gray-text); margin-bottom: 30px; font-size: 16px; line-height: 1.8; }
        .feature-list { display: flex; flex-direction: column; gap: 15px; }
        .feature-item {
          display: flex; align-items: center; gap: 15px; padding: 18px 25px;
          background: var(--white); border-radius: 12px; font-weight: 600;
          font-size: 15px; transition: all 0.3s; box-shadow: 0 3px 10px rgba(0,0,0,0.08);
        }
        .feature-item:hover { transform: translateX(10px); box-shadow: 0 5px 20px rgba(0,0,0,0.12); }
        .feature-icon {
          width: 35px; height: 35px; background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          color: var(--black); font-size: 16px; flex-shrink: 0;
        }

        /* Contact */
        .contact { background: var(--white); }
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 50px; }
        .contact-info { display: flex; flex-direction: column; gap: 25px; }
        .contact-card {
          background: var(--black); padding: 30px; border-radius: 15px;
          display: flex; align-items: flex-start; gap: 20px; transition: all 0.3s;
        }
        .contact-card:hover { transform: translateX(10px); box-shadow: 0 15px 35px rgba(0,0,0,0.2); }
        .contact-card-icon {
          width: 55px; height: 55px; background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 12px; display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0; color: var(--black);
        }
        .contact-card-content h3 { color: var(--gold-light); font-size: 18px; margin-bottom: 8px; }
        .contact-card-content p { color: rgba(255,255,255,0.85); font-size: 15px; }
        .contact-form {
          background: var(--gray-light); padding: 45px; border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        .form-group { margin-bottom: 25px; }
        .form-group input, .form-group textarea {
          width: 100%; padding: 16px; border: 2px solid #e0e0e0; border-radius: 10px;
          font-size: 15px; transition: all 0.3s; font-family: inherit;
        }
        .form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--gold); }
        .form-group textarea { resize: vertical; min-height: 130px; }

        /* CTA */
        .cta {
          background: var(--black); position: relative; overflow: hidden; text-align: center; padding: 100px 0;
        }
        .cta::before, .cta::after {
          content: ''; position: absolute; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%); border-radius: 50%;
        }
        .cta::before { top: -10%; left: -10%; }
        .cta::after { bottom: -10%; right: -10%; }
        .cta-content { position: relative; z-index: 1; }
        .cta h2 { font-size: clamp(36px, 5vw, 52px); color: var(--white); margin-bottom: 25px; font-weight: 800; }
        .cta p { color: rgba(255,255,255,0.85); max-width: 750px; margin: 0 auto 45px; font-size: 17px; line-height: 1.8; }

        /* Footer */
        .footer { background: var(--black); color: rgba(255,255,255,0.7); padding: 70px 0 35px; }
        .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 45px; margin-bottom: 45px; }
        .footer-brand h2 { color: var(--white); font-size: 30px; margin-bottom: 18px; }
        .footer-brand p { font-size: 15px; line-height: 1.8; }
        .footer-col h3 { color: var(--gold-light); font-size: 17px; margin-bottom: 22px; font-weight: 700; }
        .footer-col ul { list-style: none; }
        .footer-col li { margin-bottom: 14px; }
        .footer-col a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 15px; transition: color 0.3s; }
        .footer-col a:hover { color: var(--gold-light); }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1); padding-top: 30px;
          display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 25px;
        }
        .footer-bottom p { font-size: 14px; }
        .social-links { display: flex; gap: 15px; }
        .social-links a {
          width: 42px; height: 42px; background: rgba(255,255,255,0.1); border-radius: 50%;
          display: flex; align-items: center; justify-content: center; color: var(--white);
          font-size: 18px; transition: all 0.3s;
        }
        .social-links a:hover { background: var(--gold); transform: translateY(-3px); }

        /* WhatsApp Fixed */
        .whatsapp-fixed {
          position: fixed; bottom: 30px; right: 30px; z-index: 999;
          opacity: 0; transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .whatsapp-fixed.show { opacity: 1; transform: translateY(0) scale(1); }
        .whatsapp-btn {
          width: 65px; height: 65px; background: #25D366; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4);
          animation: pulse 2s infinite; transition: transform 0.3s;
        }
        .whatsapp-btn:hover { transform: scale(1.1); }
        .whatsapp-btn svg { font-size: 32px; color: white; }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 10px 30px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 10px 40px rgba(37, 211, 102, 0.6); }
        }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-content, .about-grid, .contact-grid { grid-template-columns: 1fr; gap: 50px; }
          .hero-image { order: -1; }
          .hero-image img { height: 400px; }
          .hero { padding: 120px 0 60px; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
          .nav-links {
            position: fixed; top: 0; right: -100%; width: 80%; max-width: 320px; height: 100vh;
            background: var(--black); flex-direction: column; justify-content: center;
            padding: 0 35px; transition: right 0.4s ease; gap: 30px;
          }
          .nav-links.active { right: 0; }
          .nav-links a { color: var(--white); font-size: 17px; }
          .mobile-toggle { display: block; }
          .logo-img { height: 120px; }
          section { padding: 70px 0; }
          .buttons { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; padding: 16px 30px; }
          .service-content-wrapper {
            grid-template-columns: 1fr;
          }
          .service-info {
            padding: 40px 30px;
          }
          .service-gallery-wrapper {
            padding: 30px 25px;
          }
          .gallery-main-image img {
            height: 300px;
          }
          .projects-grid { grid-template-columns: 1fr; }
          .contact-form { padding: 30px 25px; }
          .footer-grid { grid-template-columns: 1fr; gap: 35px; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .statistics-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .container { width: 95%; }
          .hero h1 { font-size: 32px; }
          .section-title { font-size: 28px; }
          .logo-img { height: 100px; }
          .project-card { height: 320px; }
          .whatsapp-fixed { bottom: 25px; right: 25px; }
          .whatsapp-btn { width: 60px; height: 60px; }
          .service-info h3 { font-size: 26px; }
          .gallery-thumbnails {
            flex-wrap: wrap;
          }
          .thumbnail {
            width: 80px;
            height: 60px;
          }
          .stat-card {
            padding: 35px 25px;
          }
        }

        .animate-on-scroll { transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>

      {/* WhatsApp Fixed */}
      <div className={`whatsapp-fixed ${showWhatsApp ? 'show' : ''}`}>
        <a href="https://wa.me/3511858486" target="_blank" rel="noreferrer" className="whatsapp-btn">
          <FaWhatsapp />
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <img src="/assets/photo_2026-05-15_19-47-55.png" alt="EDIL DESIGN" className="logo-img" onError={handleImageError} />
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Servizi</a>
            <a href="#gallery" onClick={() => setMobileMenuOpen(false)}>Progetti</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>Chi Siamo</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contatti</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="container hero-content">
          <div>
            <div className="hero-badge">
              <span>✨</span> Edil Design
            </div>
            <h1>
              Soluzioni professionali per <span className="gradient">finiture interne </span>
            </h1>
            <p>
              Edil Design è specializzata in lavori di ristrutturazione e finitura per abitazioni, uffici e spazi commerciali. Offriamo servizi completi con materiali di alta qualità e un team esperto capace di trasformare ogni ambiente in uno spazio moderno, elegante e funzionale.
            </p>
            <div className="buttons">
              <a href="#contact" className="btn btn-primary">Richiedi un Preventivo</a>
              <a href="#contact" className="btn btn-outline">Contattaci</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/photo_2026-05-16_15-32-38.jpg" alt="Construction" onError={handleImageError} />
          </div>
        </div>
      </section>

      {/* Statistics Section - ITALIAN VERSION ✨ */}
      <section className="statistics-section">
        <div className="container">
          <div className="statistics-header animate-on-scroll">
            <div className="statistics-badge">I Nostri Numeri</div>
            <h2 className="statistics-title">Risultati che Parlano</h2>
            <p className="statistics-subtitle">Numeri che dimostrano la nostra esperienza e affidabilità nel settore edile</p>
          </div>
          <div className="statistics-grid">
            <div className="stat-card animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="stat-number">850+</div>
              <div className="stat-label">Clienti Soddisfatti</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="stat-number">10+</div>
              <div className="stat-label">Anni di Successo</div>
            </div>
            <div className="stat-card animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Supporto Professionale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Professional Design */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">I Nostri Servizi</span>
            <h2 className="section-title">Qualità, Precisione e Attenzione ai Dettagli</h2>
            <p className="section-subtitle">Ogni servizio è supportato da una galleria di progetti reali che dimostrano la nostra eccellenza.</p>
          </div>
          <div className="services-grid">
            {services.map((service, serviceIndex) => {
              const currentIndex = activeImageIndex[serviceIndex] || 0;
              return (
                <div key={serviceIndex} className="service-card-professional animate-on-scroll" style={{ transitionDelay: `${serviceIndex * 0.15}s` }}>
                  <div className="service-content-wrapper">
                    <div className="service-info">
                      <div className="service-icon-wrapper">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <ul className="service-features">
                        {service.points.map((point, pointIndex) => (
                          <li key={pointIndex}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="service-gallery-wrapper">
                      <div className="gallery-main-image">
                        <img
                          src={service.images[currentIndex]}
                          alt={`${service.title} - ${currentIndex + 1}`}
                          onError={handleImageError}
                        />
                        <div className="gallery-counter">
                          {currentIndex + 1} / {service.images.length}
                        </div>
                        {service.images.length > 1 && (
                          <>
                            <button
                              className="gallery-nav prev"
                              onClick={() => prevImage(serviceIndex)}
                              disabled={currentIndex === 0}
                            >
                              <FaArrowLeft />
                            </button>
                            <button
                              className="gallery-nav next"
                              onClick={() => nextImage(serviceIndex)}
                              disabled={currentIndex === service.images.length - 1}
                            >
                              <FaArrowRight />
                            </button>
                          </>
                        )}
                      </div>
                      <div className="gallery-thumbnails">
                        {service.images.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className={`thumbnail ${imgIndex === currentIndex ? 'active' : ''}`}
                            onClick={() => setActiveImageIndex(prev => ({ ...prev, [serviceIndex]: imgIndex }))}
                          >
                            <img src={img} alt={`Thumbnail ${imgIndex + 1}`} onError={handleImageError} />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">I Nostri Lavori</h2>
            <p className="section-subtitle">Scopri alcuni dei nostri progetti più recenti e la qualità delle nostre finiture.</p>
          </div>
          <div className="projects-grid">
            {galleryImages.map((item, i) => (
              <div key={i} className="project-card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <img src={item.image} alt={item.title} onError={handleImageError} loading="lazy" />
                <div className="project-overlay">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="about">
        <div className="container about-grid">
          <div className="about-content animate-on-scroll">
            <span className="section-tag">Perché Sceglierci</span>
            <h2>Perché Scegliere Edil Design</h2>
            <p>La nostra esperienza nel settore delle finiture ci permette di offrire qualità, affidabilità e risultati professionali in ogni progetto. Ci impegniamo a superare le aspettative dei clienti con soluzioni su misura e un'attenzione costante ai dettagli.</p>
            <div className="feature-list">
              {whyChooseUs.map((item, i) => (
                <div key={i} className="feature-item">
                  <span className="feature-icon"><FaCheck /></span>
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="about-img animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team" onError={handleImageError} style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-content">
          <h2 className="animate-on-scroll">
            Pronto a Trasformare i Tuoi Spazi?
          </h2>
          <p className="animate-on-scroll">
            Siamo pronti a trasformare i tuoi spazi con professionalità e qualità. Contattaci oggi stesso per un preventivo personalizzato e scopri come possiamo realizzare il tuo progetto.
          </p>
          <div className="buttons animate-on-scroll" style={{ justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary">Contattaci Oggi</a>
            <a href="#services" className="btn btn-outline" style={{ borderColor: 'var(--gold-light)', color: 'var(--gold-light)' }}>Scopri i Servizi</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Contatti</span>
            <h2 className="section-title">Contattaci Oggi</h2>
            <p className="section-subtitle">Siamo pronti a trasformare i tuoi spazi con professionalità e qualità.</p>
          </div>
          <div className="contact-grid">
            <div className="contact-info animate-on-scroll">
              <div className="contact-card">
                <div className="contact-card-icon">📞</div>
                <div className="contact-card-content">
                  <h3>Telefono</h3>
                  <p>+3511858486</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">✉️</div>
                <div className="contact-card-content">
                  <h3>Email</h3>
                  <p>contact@edildesigndisaleh.com</p>
                </div>
              </div>
              <div className="contact-card">
                <div className="contact-card-icon">📍</div>
                <div className="contact-card-content">
                  <h3>Indirizzo</h3>
                  <p>Via Padova 31, Milano 20127</p>
                </div>
              </div>
              <div style={{ marginTop: '20px', padding: '25px', background: 'var(--black)', borderRadius: '15px' }}>
                <h3 style={{ color: 'var(--gold-light)', marginBottom: '15px', fontSize: '18px' }}>Cosa Offriamo</h3>
                <ul style={{ listStyle: 'none', color: 'rgba(255,255,255,0.85)', fontSize: '15px' }}>
                  <li style={{ padding: '8px 0' }}>✓ Preventivi personalizzati</li>
                  <li style={{ padding: '8px 0' }}>✓ Supporto professionale</li>
                  <li style={{ padding: '8px 0' }}>✓ Risposte rapide</li>
                </ul>
              </div>
            </div>
            <div className="contact-form animate-on-scroll">
              <div className="form-group">
                <input type="text" placeholder="Il Tuo Nome" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="La Tua Email" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Il Tuo Telefono" />
              </div>
              <div className="form-group">
                <textarea placeholder="Descrivi il Tuo Progetto..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Invia Richiesta</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h2>EDIL<span className="gradient">DESIGN</span></h2>
              <p>Soluzioni professionali per finiture interne , con qualità, precisione e attenzione ai dettagli.</p>
            </div>
            <div className="footer-col">
              <h3>Servizi</h3>
              <ul>
                <li><a href="#services">Cartongesso</a></li>
                <li><a href="#services">Stucco e Rasatura</a></li>
                <li><a href="#services">Ceramica</a></li>
                <li><a href="#services">Parquet</a></li>
                <li><a href="#services">Pittura</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Azienda</h3>
              <ul>
                <li><a href="#about">Chi Siamo</a></li>
                <li><a href="#gallery">Progetti</a></li>
                <li><a href="#contact">Contatti</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contatti</h3>
              <ul>
                <li><a href="tel:+3511858486">+3511858486</a></li>
                <li><a href="mailto:contact@edildesigndisaleh.com">Email</a></li>
                <li>Via Padova 31, Milano</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Edil Design — Tutti i diritti riservati.</p>
            <div className="social-links">
              <a href="https://wa.me/3511858486" target="_blank" rel="noreferrer" aria-label="WhatsApp"><FaWhatsapp /></a>
              <a href="mailto:contact@edildesigndisaleh.com" aria-label="Email"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
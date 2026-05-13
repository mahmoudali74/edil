import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function LuxuryConstructionWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          const letters = entry.target.querySelectorAll(".letter");
          letters.forEach((letter, index) => {
            setTimeout(() => {
              letter.classList.add("letter-animate");
            }, index * 50);
          });
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const AnimatedTitle = ({ text, className = "" }) => {
    return (
      <h2 className={`animated-title ${className}`}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className="letter"
            style={{
              display: char === " " ? "inline-block" : "inline-block",
              minWidth: char === " " ? "0.3em" : "auto"
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h2>
    );
  };

  const services = [
    {
      icon: "🏗️",
      title: "Modern Construction",
      desc: "Luxury modern construction with elegant European finishing.",
    },
    {
      icon: "🎨",
      title: "Professional Painting",
      desc: "Premium painting solutions with modern colors and textures.",
    },
    {
      icon: "⚡",
      title: "Electrical Systems",
      desc: "Certified electrical systems with high safety standards.",
    },
    {
      icon: "🚿",
      title: "Plumbing",
      desc: "Professional plumbing and maintenance solutions.",
    },
    {
      icon: "🧱",
      title: "Drywall & Ceiling",
      desc: "Luxury gypsum ceilings and creative interior walls.",
    },
    {
      icon: "🏡",
      title: "Full Renovation",
      desc: "Complete renovation for villas and apartments.",
    },
  ];

  const projects = [
    {
      title: "Luxury Villa",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Modern Apartment",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Premium Interior",
      image:
        "https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <style>{`
        :root {
          --gold-primary: #D4AF37;
          --gold-light: #F4E5A3;
          --gold-dark: #B8942B;
          --gold-gradient: linear-gradient(135deg, #F4E5A3 0%, #D4AF37 50%, #B8942B 100%);
          --gold-gradient-reverse: linear-gradient(135deg, #D4AF37 0%, #F4E5A3 100%);
          --white-base: #FFFFFF;
          --white-soft: #F8F8F8;
          --bg-dark: #0a0a0a;
          --bg-darker: #050816;
          --bg-card: rgba(255, 255, 255, 0.05);
          --text-primary: #ffffff;
          --text-secondary: #c7c7c7;
          --gold-glow: rgba(212, 175, 55, 0.25);
          --gold-glow-light: rgba(244, 229, 163, 0.15);
        }

        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body{
          background:var(--bg-darker);
          color:var(--text-primary);
          overflow-x:hidden;
        }

        html{
          scroll-behavior:smooth;
        }

        .container{
          width:90%;
          max-width:1300px;
          margin:auto;
        }

        /* Navbar Styles */
        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          padding:20px 0;
          background:${scrolled ? 'rgba(10,10,10,0.95)' : 'rgba(10,10,10,0.3)'};
          backdrop-filter:${scrolled ? 'blur(20px)' : 'blur(12px)'};
          z-index:1000;
          border-bottom:1px solid rgba(255,255,255,${scrolled ? '0.1' : '0.08'});
          transition:all 0.4s ease;
        }

        .nav-content{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        .logo-img {
          height: 100px;
          width: auto;
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 2px 10px var(--gold-glow));
          transition: transform 0.3s ease;
        }
        .logo-img:hover {
          transform: scale(1.05);
        }

        .nav-links{
          display:flex;
          gap:35px;
          align-items:center;
        }

        .nav-links a{
          text-decoration:none;
          color:rgba(255,255,255,0.9);
          transition:all 0.3s ease;
          font-size:15px;
          font-weight:500;
          position:relative;
          padding:8px 0;
        }

        .nav-links a::after{
          content:'';
          position:absolute;
          bottom:0;
          left:0;
          width:0;
          height:2px;
          background:var(--gold-gradient);
          transition:width 0.3s ease;
        }

        .nav-links a:hover{
          color:var(--gold-light);
        }

        .nav-links a:hover::after{
          width:100%;
        }

        /* Mobile Menu Toggle */
        .mobile-toggle{
          display:none;
          background:none;
          border:none;
          color:var(--gold-light);
          font-size:28px;
          cursor:pointer;
          z-index:1001;
          padding:5px;
          transition: transform 0.3s ease;
        }
        .mobile-toggle:hover {
          transform: scale(1.1);
        }

        /* Hero Section */
        .hero{
          min-height:100vh;
          display:flex;
          align-items:center;
          background:
            radial-gradient(circle at top left, var(--gold-glow-light), transparent 40%),
            radial-gradient(circle at bottom right, rgba(212,175,55,0.12), transparent 40%),
            var(--bg-darker);
          padding-top:120px;
          position:relative;
          overflow:hidden;
        }

        .hero::before{
          content:'';
          position:absolute;
          top:-50%;
          right:-20%;
          width:800px;
          height:800px;
          background:radial-gradient(circle, var(--gold-glow) 0%, transparent 70%);
          animation:pulse 8s ease-in-out infinite;
        }

        @keyframes pulse{
          0%,100%{transform:scale(1); opacity:0.5;}
          50%{transform:scale(1.1); opacity:0.8;}
        }

        .hero-content{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
          position:relative;
          z-index:2;
        }

        .hero h1{
          font-size:clamp(32px, 5vw, 58px);
          line-height:1.1;
          margin-bottom:30px;
          font-weight:900;
          animation:fadeInUp 1s ease;
        }

        .gradient{
          background:var(--gold-gradient);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          display:inline-block;
        }

        .hero p{
          color:var(--text-secondary);
          line-height:1.9;
          font-size:clamp(16px, 2vw, 18px);
          margin-bottom:40px;
          animation:fadeInUp 1s ease 0.2s backwards;
        }

        .buttons{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
          animation:fadeInUp 1s ease 0.4s backwards;
        }

        .btn{
          padding:16px 35px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          font-size:16px;
          transition:all 0.3s ease;
          font-weight:600;
          position:relative;
          overflow:hidden;
        }

        .btn::before{
          content:'';
          position:absolute;
          top:50%;
          left:50%;
          width:0;
          height:0;
          border-radius:50%;
          background:rgba(255,255,255,0.2);
          transform:translate(-50%, -50%);
          transition:width 0.6s, height 0.6s;
        }

        .btn:hover::before{
          width:300px;
          height:300px;
        }

        .btn-primary{
          background:var(--gold-gradient);
          color:#0a0a0a;
          box-shadow:0 10px 30px var(--gold-glow);
        }

        .btn-outline{
          background:transparent;
          color:var(--gold-light);
          border:2px solid var(--gold-light);
          backdrop-filter:blur(10px);
        }

        .btn-outline:hover{
          background:rgba(212,175,55,0.1);
          border-color:var(--gold-primary);
        }

        .btn:hover{
          transform:translateY(-3px);
          box-shadow:0 15px 40px rgba(0,0,0,0.3);
        }

        .hero-image{
          position:relative;
          animation:fadeIn 1s ease 0.3s backwards;
        }

        .hero-image img{
          width:100%;
          height:650px;
          object-fit:cover;
          border-radius:35px;
          animation:float 6s ease-in-out infinite;
          box-shadow:0 30px 60px rgba(0,0,0,0.5), 0 0 40px var(--gold-glow-light);
          border:1px solid rgba(212,175,55,0.2);
        }

        @keyframes float{
          0%,100%{transform:translateY(0px) rotate(0deg);}
          50%{transform:translateY(-15px) rotate(1deg);}
        }

        @keyframes fadeInUp{
          from{
            opacity:0;
            transform:translateY(30px);
          }
          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        @keyframes fadeIn{
          from{opacity:0;}
          to{opacity:1;}
        }

        /* Letter by letter animation */
        .animated-title{
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0;
        }

        .letter{
          opacity: 0;
          transform: translateY(50px) rotateX(90deg);
          display: inline-block;
          background: var(--gold-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .letter-animate{
          opacity: 1;
          transform: translateY(0) rotateX(0deg);
        }

        /* Stats */
        .stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          margin-top:50px;
          animation:fadeInUp 1s ease 0.6s backwards;
        }

        .stat-box{
          background:var(--bg-card);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:20px;
          padding:30px;
          text-align:center;
          transition:all 0.4s ease;
          backdrop-filter:blur(10px);
        }

        .stat-box:hover{
          transform:translateY(-8px);
          background:rgba(244,229,163,0.08);
          border-color:var(--gold-primary);
          box-shadow:0 20px 40px var(--gold-glow);
        }

        .stat-box h2{
          font-size:clamp(28px, 4vw, 38px);
          margin-bottom:10px;
          background:var(--gold-gradient);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        /* Sections */
        section{
          padding:120px 0;
        }

        .section-title{
          text-align:center;
          margin-bottom:70px;
          opacity:0;
          transform:translateY(30px);
          transition:all 0.8s ease;
        }

        .section-title.animate-in{
          opacity:1;
          transform:translateY(0);
        }

        .section-title h2{
          font-size:clamp(28px, 4vw, 42px);
          margin-bottom:20px;
          font-weight:800;
          background:var(--gold-gradient);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .section-title p{
          color:var(--text-secondary);
          max-width:700px;
          margin:auto;
          line-height:1.8;
          font-size:clamp(15px, 1.8vw, 17px);
        }

        /* Grids */
        .services-grid,
        .projects-grid,
        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
          gap:30px;
        }

        .service-card,
        .testimonial{
          background:var(--bg-card);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:28px;
          padding:40px;
          transition:all 0.4s ease;
          backdrop-filter:blur(10px);
          opacity:0;
          transform:translateY(30px);
        }

        .service-card.animate-in,
        .testimonial.animate-in{
          opacity:1;
          transform:translateY(0);
        }

        .service-card:hover,
        .testimonial:hover{
          transform:translateY(-10px);
          background:rgba(244,229,163,0.08);
          border-color:var(--gold-primary);
          box-shadow:0 20px 50px var(--gold-glow);
        }

        .service-icon{
          width:80px;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:35px;
          border-radius:20px;
          background:var(--gold-gradient);
          color:#0a0a0a;
          margin-bottom:25px;
          transition:transform 0.3s ease;
          font-weight:700;
        }

        .service-card:hover .service-icon{
          transform:rotate(10deg) scale(1.1);
        }

        .service-card h3{
          font-size:clamp(20px, 2.5vw, 28px);
          margin-bottom:15px;
          font-weight:700;
          color:var(--white-base);
        }

        .service-card p,
        .testimonial p{
          color:var(--text-secondary);
          line-height:1.9;
          font-size:15px;
        }

        /* Projects */
        .project-card{
          position:relative;
          overflow:hidden;
          border-radius:30px;
          height:450px;
          transition:all 0.5s ease;
          opacity:0;
          transform:translateY(30px);
          border:1px solid rgba(212,175,55,0.15);
        }

        .project-card.animate-in{
          opacity:1;
          transform:translateY(0);
        }

        .project-card:hover{
          transform:translateY(-10px);
          box-shadow:0 30px 60px rgba(0,0,0,0.4), 0 0 30px var(--gold-glow-light);
          border-color:var(--gold-primary);
        }

        .project-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:transform 0.7s ease;
        }

        .project-card:hover img{
          transform:scale(1.15);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to top, rgba(10,10,10,0.98) 0%, transparent 60%);
          display:flex;
          align-items:flex-end;
          padding:35px;
          transition:all 0.4s ease;
        }

        .overlay h3{
          font-size:clamp(22px, 3vw, 35px);
          font-weight:700;
          transform:translateY(20px);
          opacity:0;
          transition:all 0.4s ease 0.1s;
          background:var(--gold-gradient);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .project-card:hover .overlay h3{
          transform:translateY(0);
          opacity:1;
        }

        /* About Section */
        .about{
          background:rgba(255,255,255,0.03);
        }

        .about-grid{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:60px;
          align-items:center;
        }

        .about img{
          width:100%;
          border-radius:30px;
          height:600px;
          object-fit:cover;
          box-shadow:0 30px 60px rgba(0,0,0,0.3), 0 0 40px var(--gold-glow-light);
          transition:transform 0.5s ease;
          border:1px solid rgba(212,175,55,0.2);
        }

        .about img:hover{
          transform:scale(1.02);
        }

        .about-text h2{
          font-size:clamp(28px, 4vw, 42px);
          margin-bottom:25px;
          font-weight:800;
          background:var(--gold-gradient);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .about-text p{
          color:var(--text-secondary);
          line-height:2;
          margin-bottom:30px;
          font-size:16px;
        }

        .features div{
          margin-bottom:20px;
          background:var(--bg-card);
          padding:20px 25px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.08);
          transition:all 0.3s ease;
          font-size:16px;
          color:var(--text-secondary);
        }

        .features div:hover{
          background:rgba(244,229,163,0.08);
          border-color:var(--gold-primary);
          transform:translateX(10px);
          color:var(--gold-light);
        }

        /* Contact */
        .contact{
          background:linear-gradient(135deg, #0b1020, #0a0a0a);
        }

        .contact-box{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:50px;
        }

        .contact-form{
          background:var(--bg-card);
          padding:40px;
          border-radius:30px;
          border:1px solid rgba(255,255,255,0.08);
          backdrop-filter:blur(10px);
        }

        .contact-form input,
        .contact-form textarea{
          width:100%;
          margin-bottom:20px;
          padding:18px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.1);
          background:rgba(255,255,255,0.05);
          color:var(--white-base);
          outline:none;
          transition:all 0.3s ease;
          font-size:15px;
        }

        .contact-form input::placeholder,
        .contact-form textarea::placeholder{
          color:rgba(255,255,255,0.5);
        }

        .contact-form input:focus,
        .contact-form textarea:focus{
          border-color:var(--gold-primary);
          background:rgba(244,229,163,0.08);
          box-shadow:0 0 0 3px var(--gold-glow);
        }

        /* Footer */
        .footer{
          padding:40px;
          text-align:center;
          border-top:1px solid rgba(255,255,255,0.08);
          color:#999;
          background:#070b16;
        }

        .footer h2,
        .footer h3{
          color:var(--white-base);
        }

        .footer a{
          color:var(--text-secondary);
          transition:all 0.3s ease;
        }

        .footer a:hover{
          color:var(--gold-light) !important;
        }

        /* Responsive Design */
        @media(max-width: 1024px){
          .hero-content,
          .about-grid,
          .contact-box{
            grid-template-columns:1fr;
            gap:50px;
          }

          .hero{
            padding-top:100px;
          }

          .hero-image{
            order:-1;
          }

          .hero-image img{
            height:400px;
          }

          .stats{
            grid-template-columns:1fr;
            gap:15px;
          }
        }

       /* 📱 تابلت وموبايل */
@media(max-width: 768px){
  /* 1. تصغير النافبار وإزالة الشفافية الزائدة */
  .navbar {
    padding: 12px 0 !important;
    background: rgba(5, 8, 22, 0.95) !important;
    backdrop-filter: blur(15px) !important;
  }

  .nav-content {
    padding: 0 15px;
    align-items: center;
  }

  .mobile-toggle {
    display: block;
    font-size: 24px;
    color: var(--gold-light);
    padding: 5px;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    max-width: 340px;
    height: 100vh;
    background: rgba(5, 8, 22, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 1px solid rgba(212, 175, 55, 0.3);
    padding: 0 25px;
  }

  .nav-links.active { right: 0; }
  .nav-links a { font-size: 18px; font-weight: 600; }

  /* 2. تكبير اللوجو وضبطه عشان يبان فخم وواضح */
  .logo-img {
    height: 65px !important;
    width: auto;
    filter: drop-shadow(0 3px 8px rgba(0,0,0,0.5));
    margin: 0;
  }

  /* 3. تقليل المسافة تحت النافبار عشان المحتوى يطلع فوق */
  .hero { padding-top: 95px !important; }
  section { padding: 70px 0; }

  /* 4. ضبط الخطوط والأزرار للموبايل */
  .hero h1 { font-size: 28px; line-height: 1.3; }
  .hero p { font-size: 15px; }
  .section-title h2, .about-text h2 { font-size: 26px; }

  .buttons { flex-direction: column; width: 100%; gap: 12px; }
  .btn { width: 100%; text-align: center; padding: 14px 20px; font-size: 15px; }

  .services-grid, .projects-grid { grid-template-columns: 1fr; gap: 20px; }
  .project-card { height: 320px; }
  .about img { height: 320px; }
  .contact-form { padding: 25px 20px; }
  .stats { grid-template-columns: 1fr; gap: 12px; }
}

/* 📱 موبايل صغير */
@media(max-width: 480px){
  .navbar { padding: 10px 0 !important; }
  .logo-img { height: 55px !important; }
  .container { width: 95%; }

  .hero h1 { font-size: 24px; }
  .section-title h2 { font-size: 22px; }
  .service-card, .testimonial { padding: 25px 20px; }
  .stat-box { padding: 20px 15px; }
  .footer { padding: 25px 15px; }
}
        /* Smooth reveal animation delay */
        .service-card:nth-child(1){transition-delay:0.1s;}
        .service-card:nth-child(2){transition-delay:0.2s;}
        .service-card:nth-child(3){transition-delay:0.3s;}
        .service-card:nth-child(4){transition-delay:0.4s;}
        .service-card:nth-child(5){transition-delay:0.5s;}
        .service-card:nth-child(6){transition-delay:0.6s;}

        .project-card:nth-child(1){transition-delay:0.1s;}
        .project-card:nth-child(2){transition-delay:0.2s;}
        .project-card:nth-child(3){transition-delay:0.3s;}
      `}</style>

      {/* Navbar */}
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo">
            <img
              src="assets/photo_2026-05-13_14-06-03.png"
              alt="EDIL DESIGN Logo"
              className="logo-img"
            />
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div>
            <h1>
              Costruiamo il tuo
              <span className="gradient"> Spazio Perfetto</span>
              <br />
              con Design Moderno
            </h1>

            <p>
              Realizziamo ville moderne, appartamenti di lusso e progetti esclusivi con standard europei, materiali premium e finiture eleganti.
            </p>

            <div className="buttons">
              <button className="btn btn-primary">Inizia Progetto</button>
              <button className="btn btn-outline">Scopri Servizi</button>
            </div>

            <div className="stats">
              <div className="stat-box">
                <h2>12+</h2>
                <p>Anni di Esperienza</p>
              </div>

              <div className="stat-box">
                <h2>650+</h2>
                <p>Progetti Completati</p>
              </div>

              <div className="stat-box">
                <h2>100%</h2>
                <p>Clienti Soddisfatti</p>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1200&auto=format&fit=crop"
              alt="construction"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Servizi Premium" />
            <p>
              Servizi professionali di costruzione e ristrutturazione con tecnologie moderne e finiture di lusso.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card animate-on-scroll" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="container about-grid">
          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
            alt="team"
            className="animate-on-scroll"
          />

          <div className="about-text animate-on-scroll">
            <h2>Perché Scegliere Noi</h2>

            <p>
              La nostra azienda combina innovazione, architettura moderna e materiali di alta qualità per creare progetti esclusivi ed eleganti.
            </p>

            <div className="features">
              <div>✔ Finiture Italiane di Lusso</div>
              <div>✔ Design Moderno ed Elegante</div>
              <div>✔ Team Professionale Certificato</div>
              <div>✔ Materiali Premium</div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section style={{ paddingTop: "40px", paddingBottom: "40px" }}>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="I Nostri Vantaggi" />
            <p>
              Offriamo qualità europea, design moderno e soluzioni innovative per ogni progetto.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">⏱️</div>
              <h3>Consegna Rapida</h3>
              <p>Rispettiamo sempre i tempi di consegna con massima precisione.</p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">🛡️</div>
              <h3>Qualità Garantita</h3>
              <p>Utilizziamo materiali premium e standard professionali europei.</p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">✨</div>
              <h3>Design Moderno</h3>
              <p>Creiamo ambienti eleganti, moderni e funzionali.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Statistiche Aziendali" />
            <p>
              Numeri che dimostrano la nostra esperienza nel settore delle costruzioni.
            </p>
          </div>

          <div className="stats">
            <div className="stat-box animate-on-scroll">
              <h2>850+</h2>
              <p>Clienti Felici</p>
            </div>

            <div className="stat-box animate-on-scroll">
              <h2>15+</h2>
              <p>Anni di Successo</p>
            </div>

            <div className="stat-box animate-on-scroll">
              <h2>24/7</h2>
              <p>Supporto Professionale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Progetti Recenti" />
            <p>
              Scopri ville moderne, appartamenti esclusivi e interni eleganti realizzati con precisione.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card animate-on-scroll" key={index}>
                <img src={project.image} alt={project.title} />
                <div className="overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Recensioni Clienti" />
            <p>
              Scelti da clienti che desiderano qualità, eleganza e professionalità.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial animate-on-scroll">
              <p>
                Incredible quality and professional execution. The team transformed our villa into a modern masterpiece.
              </p>
            </div>

            <div className="testimonial animate-on-scroll">
              <p>
                Elegant design, clean finishing and outstanding project management from start to finish.
              </p>
            </div>

            <div className="testimonial animate-on-scroll">
              <p>
                One of the best construction companies we worked with in Italy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <div className="container contact-box">
          <div className="animate-on-scroll">
            <div className="section-title" style={{ textAlign: "left", marginBottom: "40px" }}>
              <AnimatedTitle text="Contattaci" className="text-left" />
              <p>
                Trasformiamo insieme le tue idee in realtà moderne ed eleganti.
              </p>
            </div>

            <div className="features">
              <div>📞 +3511858486</div>
              <div>📧  contact@edildesigndisaled.com</div>
              <div>📍 Via Padova 31, Milano 20127</div>
            </div>
          </div>

          <div className="contact-form animate-on-scroll">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea rows="6" placeholder="Tell us about your project..."></textarea>
            <button className="btn btn-primary" style={{ width: "100%" }}>
              Invia Richiesta
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{ background: "linear-gradient(135deg,#09111f,#0a0a0a)", padding: "140px 0" }}>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Processo di Lavoro" />
            <p>
              Seguiamo un processo professionale per garantire qualità, precisione e risultati eccezionali.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">1</div>
              <h3>Consulenza</h3>
              <p>Analizziamo il progetto e ascoltiamo le esigenze del cliente con attenzione.</p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">2</div>
              <h3>Progettazione</h3>
              <p>Creiamo design moderni e soluzioni innovative per ogni spazio.</p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">3</div>
              <h3>Realizzazione</h3>
              <p>Il nostro team realizza il progetto con massima qualità e precisione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="Galleria Moderna" />
            <p>
              Alcuni esempi di design eleganti e ambienti moderni realizzati dal nostro team.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop" alt="gallery" />
              <div className="overlay">
                <h3>Villa Moderna</h3>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop" alt="gallery" />
              <div className="overlay">
                <h3>Interni di Lusso</h3>
              </div>
            </div>

            <div className="project-card animate-on-scroll">
              <img src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?q=80&w=1200&auto=format&fit=crop" alt="gallery" />
              <div className="overlay">
                <h3>Architettura Elegante</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section style={{ padding: "140px 0", background: "rgba(255,255,255,0.03)" }}>
        <div className="container">
          <div className="section-title animate-on-scroll">
            <AnimatedTitle text="I Nostri Partner" />
            <p>
              Collaboriamo con aziende e fornitori di alta qualità per garantire risultati eccellenti.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "25px" }}>
            <div className="stat-box animate-on-scroll"><h3>ITALCEMENTI</h3></div>
            <div className="stat-box animate-on-scroll"><h3>EURO DESIGN</h3></div>
            <div className="stat-box animate-on-scroll"><h3>LUX HOUSE</h3></div>
            <div className="stat-box animate-on-scroll"><h3>MODERN BUILD</h3></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "150px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "400px", height: "400px", background: "var(--gold-glow)", filter: "blur(120px)", animation: "pulse 8s ease-in-out infinite" }}></div>
        <div style={{ position: "absolute", bottom: "0", right: "0", width: "400px", height: "400px", background: "rgba(212,175,55,0.1)", filter: "blur(120px)", animation: "pulse 8s ease-in-out infinite 4s" }}></div>

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: "2" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: "25px", fontWeight: "900" }} className="animate-on-scroll">
            Costruiamo il Futuro con <span className="gradient">Eleganza</span>
          </h2>

          <p style={{ maxWidth: "850px", margin: "auto", lineHeight: "2", color: "var(--text-secondary)", fontSize: "clamp(16px, 2vw, 18px)" }} className="animate-on-scroll">
            Ogni progetto rappresenta innovazione, lusso e qualità italiana. La nostra missione è creare ambienti esclusivi che uniscono design moderno e funzionalità.
          </p>

          <div style={{ marginTop: "50px" }} className="animate-on-scroll">
            <button className="btn btn-primary" style={{ marginRight: "20px", marginBottom: "15px" }}>
              Richiedi Preventivo
            </button>
            <button className="btn btn-outline">
              Guarda Progetti
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer" style={{ background: "#070b16", padding: "90px 0 30px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "40px", marginBottom: "60px", textAlign: "left" }}>
            <div>
              <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "20px" }}>
                EDIL<span style={{ background: "var(--gold-gradient)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>DESIGN</span>
              </h2>
              <p style={{ color: "#9ca3af", lineHeight: "1.9", fontSize: "14px" }}>
                Azienda specializzata in costruzioni moderne e ristrutturazioni di lusso con design elegante.
              </p>
            </div>

            <div>
              <h3 style={{ marginBottom: "20px", fontSize: "17px" }}>Servizi</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", color: "#9ca3af", fontSize: "14px" }}>
                <span>Costruzioni Moderne</span>
                <span>Ristrutturazioni</span>
                <span>Design Interni</span>
                <span>Impianti Premium</span>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: "20px", fontSize: "17px" }}>Azienda</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", color: "#9ca3af", fontSize: "14px" }}>
                <span>Chi Siamo</span>
                <span>Progetti</span>
                <span>Partner</span>
                <span>Contatti</span>
              </div>
            </div>

            <div>
              <h3 style={{ marginBottom: "20px", fontSize: "17px" }}>Contatti</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px", color: "#9ca3af", fontSize: "14px" }}>
                <span>📍 Via Padova 31, Milano 20127</span>
                <span>📞 +3511858486</span>
                <span>📧 contact@edildesigndesaleh.com</span>
              </div>
            </div>
          </div>

          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "25px" }}></div>

          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
            <p style={{ color: "#777", fontSize: "13px" }}>
              © 2026 EDIL DESIGN — Tutti i diritti riservati.
            </p>

            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <a
                href="https://wa.me/3511858486"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "22px", color: "#25D366", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              >
                <FaWhatsapp />
              </a>
              <a
                href="mailto:contact@edildesigndesaled.com"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "22px", color: "var(--gold-light)", transition: "transform 0.3s ease" }}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
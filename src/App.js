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
          // Trigger letter animation for titles
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

  // Helper function to create animated title with letter-by-letter effect
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
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body{
          background:#050816;
          color:white;
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
          background:${scrolled ? 'rgba(5,8,22,0.95)' : 'rgba(5,8,22,0.3)'};
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
  height: 110px;          /* ارتفاع ثابت يناسب الـ Navbar */
  width: auto;           /* يحافظ على نسبة الأبعاد الأصلية */
  max-width: 100%;       /* يمنع الخروج عن الإطار في الشاشات الصغيرة */
  object-fit: contain;   /* يضمن عدم تشويه أو تمديد الصورة */
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
          background:linear-gradient(90deg, #ff2d55, #3b82f6);
          transition:width 0.3s ease;
        }

        .nav-links a:hover{
          color:#fff;
        }

        .nav-links a:hover::after{
          width:100%;
        }

        /* Mobile Menu Toggle */
        .mobile-toggle{
          display:none;
          background:none;
          border:none;
          color:white;
          font-size:28px;
          cursor:pointer;
          z-index:1001;
          padding:5px;
        }

        /* Hero Section */
        .hero{
          min-height:100vh;
          display:flex;
          align-items:center;
          background:
            radial-gradient(circle at top left, rgba(255,45,85,0.25), transparent 40%),
            radial-gradient(circle at bottom right, rgba(59,130,246,0.2), transparent 40%),
            #050816;
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
          background:radial-gradient(circle, rgba(255,45,85,0.1) 0%, transparent 70%);
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
          background:linear-gradient(135deg,#ff2d55 0%,#3b82f6 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          display:inline-block;
        }

        .hero p{
          color:#c7c7c7;
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
          background:rgba(255,255,255,0.3);
          transform:translate(-50%, -50%);
          transition:width 0.6s, height 0.6s;
        }

        .btn:hover::before{
          width:300px;
          height:300px;
        }

        .btn-primary{
          background:linear-gradient(135deg,#ff2d55 0%,#3b82f6 100%);
          color:white;
          box-shadow:0 10px 30px rgba(255,45,85,0.3);
        }

        .btn-outline{
          background:transparent;
          color:white;
          border:2px solid rgba(255,255,255,0.3);
          backdrop-filter:blur(10px);
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
          box-shadow:0 30px 60px rgba(0,0,0,0.5);
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
          background: linear-gradient(135deg, #fff 0%, #ff2d55 100%);
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
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.1);
          border-radius:20px;
          padding:30px;
          text-align:center;
          transition:all 0.4s ease;
          backdrop-filter:blur(10px);
        }

        .stat-box:hover{
          transform:translateY(-8px);
          background:rgba(255,255,255,0.08);
          border-color:rgba(255,45,85,0.3);
          box-shadow:0 20px 40px rgba(255,45,85,0.1);
        }

        .stat-box h2{
          font-size:clamp(28px, 4vw, 38px);
          margin-bottom:10px;
          background:linear-gradient(135deg, #3b82f6, #ff2d55);
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
          background:linear-gradient(135deg, #fff 0%, #ff2d55 100%);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .section-title p{
          color:#b3b3b3;
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
          background:rgba(255,255,255,0.05);
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
          background:rgba(255,255,255,0.08);
          border-color:rgba(255,45,85,0.3);
          box-shadow:0 20px 50px rgba(0,0,0,0.3);
        }

        .service-icon{
          width:80px;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:35px;
          border-radius:20px;
          background:linear-gradient(135deg,#ff2d55,#3b82f6);
          margin-bottom:25px;
          transition:transform 0.3s ease;
        }

        .service-card:hover .service-icon{
          transform:rotate(10deg) scale(1.1);
        }

        .service-card h3{
          font-size:clamp(20px, 2.5vw, 28px);
          margin-bottom:15px;
          font-weight:700;
        }

        .service-card p,
        .testimonial p{
          color:#bdbdbd;
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
        }

        .project-card.animate-in{
          opacity:1;
          transform:translateY(0);
        }

        .project-card:hover{
          transform:translateY(-10px);
          box-shadow:0 30px 60px rgba(0,0,0,0.4);
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
          background:linear-gradient(to top,rgba(5,8,22,0.95) 0%,transparent 60%);
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
          box-shadow:0 30px 60px rgba(0,0,0,0.3);
          transition:transform 0.5s ease;
        }

        .about img:hover{
          transform:scale(1.02);
        }

        .about-text h2{
          font-size:clamp(28px, 4vw, 42px);
          margin-bottom:25px;
          font-weight:800;
        }

        .about-text p{
          color:#c7c7c7;
          line-height:2;
          margin-bottom:30px;
          font-size:16px;
        }

        .features div{
          margin-bottom:20px;
          background:rgba(255,255,255,0.05);
          padding:20px 25px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.08);
          transition:all 0.3s ease;
          font-size:16px;
        }

        .features div:hover{
          background:rgba(255,45,85,0.1);
          border-color:rgba(255,45,85,0.3);
          transform:translateX(10px);
        }

        /* Contact */
        .contact{
          background:linear-gradient(135deg,#0b1020,#081225);
        }

        .contact-box{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:50px;
        }

        .contact-form{
          background:rgba(255,255,255,0.05);
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
          color:white;
          outline:none;
          transition:all 0.3s ease;
          font-size:15px;
        }

        .contact-form input:focus,
        .contact-form textarea:focus{
          border-color:#ff2d55;
          background:rgba(255,255,255,0.08);
          box-shadow:0 0 0 3px rgba(255,45,85,0.1);
        }

        /* Footer */
        .footer{
          padding:40px;
          text-align:center;
          border-top:1px solid rgba(255,255,255,0.08);
          color:#999;
          background:#070b16;
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

        @media(max-width: 768px){
          .mobile-toggle{
            display:block;
          }

          .nav-links{
            position:fixed;
            top:0;
            right:-100%;
            width:80%;
            max-width:400px;
            height:100vh;
            background:rgba(5,8,22,0.98);
            backdrop-filter:blur(20px);
            flex-direction:column;
            justify-content:center;
            gap:40px;
            transition:right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-left:1px solid rgba(255,255,255,0.1);
          }

          .nav-links.active{
            right:0;
          }

          .nav-links a{
            font-size:20px;
            font-weight:600;
          }
  .logo-img {
    height: 35px;
  }
          section{
            padding:80px 0;
          }

          .hero h1{
            font-size:32px;
          }

          .section-title h2,
          .about-text h2{
            font-size:28px;
          }

          .buttons{
            flex-direction:column;
            width:100%;
          }

          .btn{
            width:100%;
            text-align:center;
          }

          .services-grid,
          .projects-grid{
            grid-template-columns:1fr;
          }

          .project-card{
            height:350px;
          }

          .about img{
            height:350px;
          }

          .contact-form{
            padding:30px 20px;
          }
        }

        @media(max-width: 480px){
          .container{
            width:95%;
          }

          .hero h1{
            font-size:28px;
          }

          .section-title h2{
            font-size:24px;
          }

          .service-card,
          .testimonial{
            padding:30px 25px;
          }

          .stat-box{
            padding:25px 20px;
          }

          .footer{
            padding:30px 20px;
          }
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
<nav className="navbar">
  <div className="container nav-content">
    <div className="logo">
      <img src="assets/photo_2026-05-13_14-06-03.png" alt="EDIL DESIGN Logo" className="logo-img" />
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

      <section style={{ background: "linear-gradient(135deg,#09111f,#10192f)", padding: "140px 0" }}>
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
              <p>
                Analizziamo il progetto e ascoltiamo le esigenze del cliente con attenzione.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">2</div>
              <h3>Progettazione</h3>
              <p>
                Creiamo design moderni e soluzioni innovative per ogni spazio.
              </p>
            </div>

            <div className="service-card animate-on-scroll">
              <div className="service-icon">3</div>
              <h3>Realizzazione</h3>
              <p>
                Il nostro team realizza il progetto con massima qualità e precisione.
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <section style={{ padding: "150px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "400px", height: "400px", background: "rgba(255,0,85,0.15)", filter: "blur(120px)", animation: "pulse 8s ease-in-out infinite" }}></div>
        <div style={{ position: "absolute", bottom: "0", right: "0", width: "400px", height: "400px", background: "rgba(0,120,255,0.15)", filter: "blur(120px)", animation: "pulse 8s ease-in-out infinite 4s" }}></div>

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: "2" }}>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", marginBottom: "25px", fontWeight: "900" }} className="animate-on-scroll">
            Costruiamo il Futuro con Eleganza
          </h2>

          <p style={{ maxWidth: "850px", margin: "auto", lineHeight: "2", color: "#cfcfcf", fontSize: "clamp(16px, 2vw, 18px)" }} className="animate-on-scroll">
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

      <footer className="footer" style={{ background: "#070b16", padding: "90px 0 30px" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "40px", marginBottom: "60px", textAlign: "left" }}>
            <div>
              <h2 style={{ fontSize: "26px", fontWeight: "900", marginBottom: "20px" }}>
                ITAL<span style={{ color: "#ff2d55" }}>BUILD</span>
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
              © 2026 ITALBUILD — Tutti i diritti riservati.
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
                style={{ fontSize: "22px", color: "#EA4335", transition: "transform 0.3s ease" }}
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
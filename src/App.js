import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function LuxuryConstructionWebsite() {
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
          font-family:Arial, sans-serif;
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

        .navbar{
          position:fixed;
          top:0;
          left:0;
          width:100%;
          padding:20px 0;
          background:rgba(0,0,0,0.4);
          backdrop-filter:blur(12px);
          z-index:1000;
          border-bottom:1px solid rgba(255,255,255,0.08);
        }

        .nav-content{
          display:flex;
          justify-content:space-between;
          align-items:center;
        }

        
        .logo img{
          height:42px;
        }


        .logo span{
          color:#ff2d55;
        }

        .nav-links a{
          text-decoration:none;
          color:white;
          margin-left:30px;
          transition:0.3s;
          font-size:15px;
        }

        .nav-links a:hover{
          color:#3b82f6;
        }

        .hero{
          min-height:100vh;
          display:flex;
          align-items:center;
          background:
            radial-gradient(circle at top left, rgba(255,0,70,0.3), transparent 30%),
            radial-gradient(circle at bottom right, rgba(0,100,255,0.3), transparent 30%),
            #050816;
          padding-top:120px;
        }

        .hero-content{
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:70px;
          align-items:center;
        }

        .hero h1{
          font-size:58px;
          line-height:1.1;
          margin-bottom:30px;
          font-weight:900;
        }

        .gradient{
          background:linear-gradient(to right,#ff2d55,#3b82f6);
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
        }

        .hero p{
          color:#c7c7c7;
          line-height:1.9;
          font-size:18px;
          margin-bottom:40px;
        }

        .buttons{
          display:flex;
          gap:20px;
          flex-wrap:wrap;
        }

        .btn{
          padding:16px 30px;
          border:none;
          border-radius:14px;
          cursor:pointer;
          font-size:16px;
          transition:0.3s;
          font-weight:bold;
        }

        .btn-primary{
          background:linear-gradient(to right,#ff2d55,#3b82f6);
          color:white;
        }

        .btn-outline{
          background:transparent;
          color:white;
          border:1px solid rgba(255,255,255,0.2);
        }

        .btn:hover{
          transform:translateY(-5px);
        }

        .hero-image{
          position:relative;
        }

        .hero-image img{
          width:100%;
          height:700px;
          object-fit:cover;
          border-radius:35px;
          animation:float 4s ease-in-out infinite;
          box-shadow:0 20px 50px rgba(0,0,0,0.5);
        }

        @keyframes float{
          0%{transform:translateY(0px)}
          50%{transform:translateY(-10px)}
          100%{transform:translateY(0px)}
        }

        .stats{
          display:grid;
          grid-template-columns:repeat(3,1fr);
          gap:20px;
          margin-top:50px;
        }

        .stat-box{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:20px;
          padding:30px;
          text-align:center;
          transition:0.3s;
        }

        .stat-box:hover,
        .service-card:hover,
        .project-card:hover,
        .testimonial:hover{
          transform:translateY(-10px);
        }

        .stat-box h2{
          font-size:38px;
          margin-bottom:10px;
          color:#3b82f6;
        }

        section{
          padding:120px 0;
        }

        .section-title{
          text-align:center;
          margin-bottom:70px;
        }

        .section-title h2{
          font-size:42px;
          margin-bottom:20px;
        }

        .section-title p{
          color:#b3b3b3;
          max-width:700px;
          margin:auto;
          line-height:1.8;
        }

        .services-grid,
        .projects-grid,
        .testimonial-grid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(320px,1fr));
          gap:30px;
        }

        .service-card,
        .testimonial{
          background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:28px;
          padding:40px;
          transition:0.4s;
          backdrop-filter:blur(10px);
        }

        .service-icon{
          width:80px;
          height:80px;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:35px;
          border-radius:20px;
          background:linear-gradient(to right,#ff2d55,#3b82f6);
          margin-bottom:25px;
        }

        .service-card h3{
          font-size:28px;
          margin-bottom:15px;
        }

        .service-card p,
        .testimonial p{
          color:#bdbdbd;
          line-height:1.9;
        }

        .project-card{
          position:relative;
          overflow:hidden;
          border-radius:30px;
          height:500px;
          transition:0.4s;
        }

        .project-card img{
          width:100%;
          height:100%;
          object-fit:cover;
          transition:0.5s;
        }

        .project-card:hover img{
          transform:scale(1.1);
        }

        .overlay{
          position:absolute;
          inset:0;
          background:linear-gradient(to top,rgba(0,0,0,0.9),transparent);
          display:flex;
          align-items:flex-end;
          padding:40px;
        }

        .overlay h3{
          font-size:35px;
        }

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
        }

        .about-text h2{
          font-size:42px;
          margin-bottom:25px;
        }

        .about-text p{
          color:#c7c7c7;
          line-height:2;
          margin-bottom:30px;
        }

        .features div{
          margin-bottom:20px;
          background:rgba(255,255,255,0.05);
          padding:20px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.08);
        }

        .contact{
          background:linear-gradient(to right,#0b1020,#081225);
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
        }

        .contact-form input,
        .contact-form textarea{
          width:100%;
          margin-bottom:20px;
          padding:18px;
          border-radius:16px;
          border:1px solid rgba(255,255,255,0.08);
          background:rgba(255,255,255,0.04);
          color:white;
          outline:none;
        }

        .footer{
          padding:40px;
          text-align:center;
          border-top:1px solid rgba(255,255,255,0.08);
          color:#999;
        }

        @media(max-width:992px){

          .hero-content,
          .about-grid,
          .contact-box{
            grid-template-columns:1fr;
          }

          .hero h1{
            font-size:38px;
          }

          .section-title h2,
          .about-text h2{
            font-size:40px;
          }

          .stats{
            grid-template-columns:1fr;
          }

          .nav-links{
            display:none;
          }
        }

      `}</style>

      <nav className="navbar">
        <div className="container nav-content">
          {/* LOGO */}
          <div className="logo">
            <img src="public/photo_2026-05-13_14-06-03.jpg" alt="logo" />
          </div>


          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
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
          <div className="section-title">
            <h2>Servizi Premium</h2>
            <p>
              Servizi professionali di costruzione e ristrutturazione con tecnologie moderne e finiture di lusso.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
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
          />

          <div className="about-text">
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
          <div className="section-title">
            <h2>I Nostri Vantaggi</h2>
            <p>
              Offriamo qualità europea, design moderno e soluzioni innovative per ogni progetto.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">⏱️</div>
              <h3>Consegna Rapida</h3>
              <p>Rispettiamo sempre i tempi di consegna con massima precisione.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">🛡️</div>
              <h3>Qualità Garantita</h3>
              <p>Utilizziamo materiali premium e standard professionali europei.</p>
            </div>

            <div className="service-card">
              <div className="service-icon">✨</div>
              <h3>Design Moderno</h3>
              <p>Creiamo ambienti eleganti, moderni e funzionali.</p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "rgba(255,255,255,0.03)" }}>
        <div className="container">
          <div className="section-title">
            <h2>Statistiche Aziendali</h2>
            <p>
              Numeri che dimostrano la nostra esperienza nel settore delle costruzioni.
            </p>
          </div>

          <div className="stats">
            <div className="stat-box">
              <h2>850+</h2>
              <p>Clienti Felici</p>
            </div>

            <div className="stat-box">
              <h2>15+</h2>
              <p>Anni di Successo</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Supporto Professionale</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <div className="section-title">
            <h2>Progetti Recenti</h2>
            <p>
              Scopri ville moderne, appartamenti esclusivi e interni eleganti realizzati con precisione.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
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
          <div className="section-title">
            <h2>Recensioni Clienti</h2>
            <p>
              Scelti da clienti che desiderano qualità, eleganza e professionalità.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial">
              <p>
                Incredible quality and professional execution. The team transformed our villa into a modern masterpiece.
              </p>
            </div>

            <div className="testimonial">
              <p>
                Elegant design, clean finishing and outstanding project management from start to finish.
              </p>
            </div>

            <div className="testimonial">
              <p>
                One of the best construction companies we worked with in Italy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact-box">
          <div>
            <div className="section-title" style={{ textAlign: "left" }}>
              <h2>Contattaci</h2>
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

          <div className="contact-form">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <textarea rows="6" placeholder="Tell us about your project..."></textarea>

            <button className="btn btn-primary" style={{ width: "100%" }}>
              Invia Richiesta
            </button>
          </div>
        </div>
      </section>

      <section style={{ background: "linear-gradient(to right,#09111f,#10192f)", padding: "140px 0" }}>
        <div className="container">
          <div className="section-title">
            <h2>Processo di Lavoro</h2>
            <p>
              Seguiamo un processo professionale per garantire qualità, precisione e risultati eccezionali.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">1</div>
              <h3>Consulenza</h3>
              <p>
                Analizziamo il progetto e ascoltiamo le esigenze del cliente con attenzione.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">2</div>
              <h3>Progettazione</h3>
              <p>
                Creiamo design moderni e soluzioni innovative per ogni spazio.
              </p>
            </div>

            <div className="service-card">
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
          <div className="section-title">
            <h2>Galleria Moderna</h2>
            <p>
              Alcuni esempi di design eleganti e ambienti moderni realizzati dal nostro team.
            </p>
          </div>

          <div className="projects-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1200&auto=format&fit=crop" alt="gallery" />
              <div className="overlay">
                <h3>Villa Moderna</h3>
              </div>
            </div>

            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1200&auto=format&fit=crop" alt="gallery" />
              <div className="overlay">
                <h3>Interni di Lusso</h3>
              </div>
            </div>

            <div className="project-card">
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
          <div className="section-title">
            <h2>I Nostri Partner</h2>
            <p>
              Collaboriamo con aziende e fornitori di alta qualità per garantire risultati eccellenti.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "25px" }}>
            <div className="stat-box"><h3>ITALCEMENTI</h3></div>
            <div className="stat-box"><h3>EURO DESIGN</h3></div>
            <div className="stat-box"><h3>LUX HOUSE</h3></div>
            <div className="stat-box"><h3>MODERN BUILD</h3></div>
          </div>
        </div>
      </section>

      <section style={{ padding: "150px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "0", left: "0", width: "400px", height: "400px", background: "rgba(255,0,85,0.15)", filter: "blur(120px)" }}></div>
        <div style={{ position: "absolute", bottom: "0", right: "0", width: "400px", height: "400px", background: "rgba(0,120,255,0.15)", filter: "blur(120px)" }}></div>

        <div className="container" style={{ textAlign: "center", position: "relative", zIndex: "2" }}>
          <h2 style={{ fontSize: "60px", marginBottom: "25px", fontWeight: "900" }}>
            Costruiamo il Futuro con Eleganza
          </h2>

          <p style={{ maxWidth: "850px", margin: "auto", lineHeight: "2", color: "#cfcfcf", fontSize: "18px" }}>
            Ogni progetto rappresenta innovazione, lusso e qualità italiana. La nostra missione è creare ambienti esclusivi che uniscono design moderno e funzionalità.
          </p>

          <div style={{ marginTop: "50px" }}>
            <button className="btn btn-primary" style={{ marginRight: "20px" }}>
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
                <span>📧 contact@edildesigndisaleh.com</span>
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
                style={{ fontSize: "22px", color: "#25D366" }}
              >
                <FaWhatsapp />
              </a>

              <a
                href="mailto:contact@edildesigndesaled.com"
                target="_blank"
                rel="noreferrer"
                style={{ fontSize: "22px", color: "#EA4335" }}
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

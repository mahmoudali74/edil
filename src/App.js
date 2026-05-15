import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

export default function LuxuryConstructionWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      setShowWhatsApp(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = { threshold: 0.15, rootMargin: "0px 0px -80px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const services = [
    { icon: "🏗️", title: "Costruzioni Moderne", desc: "Costruzioni moderne di lusso con finiture eleganti europee." },
    { icon: "🎨", title: "Tinteggiatura Professionale", desc: "Soluzioni di pittura premium con colori e texture moderne." },
    { icon: "⚡", title: "Impianti Elettrici", desc: "Impianti elettrici certificati con alti standard di sicurezza." },
    { icon: "🚿", title: "Idraulica", desc: "Soluzioni professionali di idraulica e manutenzione." },
    { icon: "🧱", title: "Cartongesso e Soffitti", desc: "Soffitti in cartongesso di lusso e pareti creative." },
    { icon: "🏡", title: "Ristrutturazione Completa", desc: "Ristrutturazione completa per ville e appartamenti." },
  ];

  const projects = [
    { title: "Villa di Lusso", image: "/assets/photo_2026-05-15_20-37-36.jpg" },
    { title: "Appartamento Moderno", image: "/assets/photo_2026-05-15_21-14-40.jpg" },
    { title: "Interni Premium", image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80" },
  ];

  const advantages = [
    { icon: "⏱️", title: "Consegna Rapida", desc: "Rispettiamo sempre i tempi di consegna con massima precisione." },
    { icon: "🛡️", title: "Qualità Garantita", desc: "Utilizziamo materiali premium e standard professionali europei." },
    { icon: "✨", title: "Design Moderno", desc: "Creiamo ambienti eleganti, moderni e funzionali." },
  ];

  const testimonials = [
    { text: "Qualità incredibile ed esecuzione professionale. Il team ha trasformato la nostra villa in un capolavoro moderno.", author: "Marco R." },
    { text: "Design elegante, finiture pulite e gestione del progetto eccezionale dall'inizio alla fine.", author: "Giulia B." },
    { text: "Una delle migliori imprese edili con cui abbiamo lavorato in Italia.", author: "Alessandro M." },
  ];

  const galleryImages = [
    { title: "Villa Moderna", image: "/assets/photo_2026-05-15_21-14-53.jpg" },
    { title: "Interni di Lusso", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&q=80" },
    { title: "Architettura Elegante", image: "/assets/photo_2026-05-15_21-14-57.jpg" },
  ];

  const partners = ["ITALCEMENTI", "EURO DESIGN", "LUX HOUSE", "MODERN BUILD"];

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
          --black-soft: #1a1a1a;
          --white: #FFFFFF;
          --gray-light: #F8F8F8;
          --gray-text: #666;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; font-family: 'Segoe UI', system-ui, sans-serif; }
        
        html { scroll-behavior: smooth; }
        
        body {
          background: var(--white);
          color: var(--black);
          overflow-x: hidden;
          line-height: 1.6;
        }

        .container {
          width: 92%;
          max-width: 1200px;
          margin: auto;
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          padding: 15px 0;
          background: ${scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)'};
          backdrop-filter: blur(15px);
          z-index: 1000;
          box-shadow: ${scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : '0 1px 10px rgba(0,0,0,0.05)'};
          transition: all 0.3s ease;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-img {
          height: 150px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo-img:hover { transform: scale(1.05); }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--black);
          font-weight: 600;
          font-size: 14px;
          position: relative;
          padding: 5px 0;
          transition: color 0.3s;
        }

        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--gold), var(--gold-dark));
          transition: width 0.3s;
        }

        .nav-links a:hover { color: var(--gold-dark); }
        .nav-links a:hover::after { width: 100%; }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: var(--black);
          cursor: pointer;
          padding: 5px;
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 120px 0 80px;
          background: linear-gradient(135deg, var(--white) 0%, var(--gray-light) 100%);
          position: relative;
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -5%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--black);
          color: var(--gold-light);
          padding: 8px 20px;
          border-radius: 30px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 25px;
          animation: fadeInUp 0.8s ease;
        }

        .hero h1 {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.2;
          margin-bottom: 20px;
          font-weight: 800;
          animation: fadeInUp 0.8s ease 0.1s backwards;
        }

        .gradient {
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero p {
          color: var(--gray-text);
          font-size: 16px;
          margin-bottom: 35px;
          animation: fadeInUp 0.8s ease 0.2s backwards;
        }

        .buttons {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          animation: fadeInUp 0.8s ease 0.3s backwards;
        }

        .btn {
          padding: 14px 30px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          font-size: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .btn-primary {
          background: var(--black);
          color: var(--gold-light);
          box-shadow: 0 8px 25px rgba(10,10,10,0.2);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 35px rgba(10,10,10,0.3);
          background: var(--gold-dark);
          color: var(--black);
        }

        .btn-outline {
          background: transparent;
          color: var(--black);
          border: 2px solid var(--black);
        }

        .btn-outline:hover {
          background: var(--black);
          color: var(--gold-light);
          transform: translateY(-3px);
        }

        .hero-image {
          position: relative;
          animation: fadeIn 1s ease 0.4s backwards;
        }

        .hero-image img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 20px;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .hero-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 50px;
          animation: fadeInUp 0.8s ease 0.5s backwards;
        }

        .stat-item {
          text-align: center;
          padding: 20px;
          background: var(--white);
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          transition: transform 0.3s;
        }

        .stat-item:hover { transform: translateY(-5px); }

        .stat-number {
          font-size: 32px;
          font-weight: 800;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 5px;
        }

        .stat-label {
          font-size: 13px;
          color: var(--gray-text);
          font-weight: 500;
        }

        /* Sections */
        section { padding: 80px 0; }

        .section-header {
          text-align: center;
          margin-bottom: 50px;
        }

        .section-tag {
          display: inline-block;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          color: var(--black);
          padding: 6px 20px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 15px;
        }

        .section-title {
          font-size: clamp(28px, 3vw, 38px);
          font-weight: 800;
          margin-bottom: 15px;
          color: var(--black);
        }

        .section-subtitle {
          color: var(--gray-text);
          max-width: 600px;
          margin: auto;
          font-size: 15px;
        }

        /* Services */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 25px;
        }

        .service-card {
          background: var(--black);
          padding: 35px 30px;
          border-radius: 20px;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(30px);
        }

        .service-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .service-icon {
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          border-radius: 15px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          margin-bottom: 20px;
        }

        .service-card h3 {
          color: var(--gold-light);
          font-size: 20px;
          margin-bottom: 12px;
          font-weight: 700;
        }

        .service-card p {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          line-height: 1.7;
        }

        /* About */
        .about { background: var(--gray-light); }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-img {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        .about-img img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          display: block;
        }

        .about-content h2 {
          font-size: clamp(28px, 3vw, 36px);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .about-content p {
          color: var(--gray-text);
          margin-bottom: 25px;
          font-size: 15px;
          line-height: 1.8;
        }

        .feature-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .feature-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          background: var(--white);
          border-radius: 12px;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s;
        }

        .feature-item:hover {
          transform: translateX(8px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }

        .feature-icon {
          width: 30px;
          height: 30px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--black);
          font-size: 14px;
        }

        /* Projects */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 25px;
        }

        .project-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          height: 400px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease;
          background: var(--black);
        }

        .project-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.2);
        }

        .project-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .project-card:hover img { transform: scale(1.1); }

        .project-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 30px;
          background: linear-gradient(to top, rgba(10,10,10,0.95), transparent);
          transform: translateY(20px);
          opacity: 0;
          transition: all 0.4s ease;
        }

        .project-card:hover .project-overlay {
          transform: translateY(0);
          opacity: 1;
        }

        .project-overlay h3 {
          color: var(--gold-light);
          font-size: 24px;
          font-weight: 700;
        }

        /* Testimonials */
        .testimonials { background: var(--gray-light); }

        .testimonial-card {
          background: var(--black);
          padding: 35px;
          border-radius: 20px;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease;
        }

        .testimonial-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .testimonial-card p {
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 20px;
        }

        .testimonial-author {
          color: var(--gold-light);
          font-weight: 700;
          font-size: 14px;
        }

        /* Process */
        .process-step {
          background: var(--black);
          padding: 35px 30px;
          border-radius: 20px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease;
        }

        .process-step.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .process-step:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: 800;
          color: var(--black);
          margin: 0 auto 20px;
        }

        .process-step h3 {
          color: var(--gold-light);
          font-size: 20px;
          margin-bottom: 12px;
        }

        .process-step p {
          color: rgba(255,255,255,0.7);
          font-size: 14px;
          line-height: 1.7;
        }

        /* Gallery */
        .gallery { background: var(--gray-light); }

        /* Partners */
        .partners-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 25px;
        }

        .partner-card {
          background: var(--black);
          padding: 30px;
          border-radius: 15px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.4s ease;
        }

        .partner-card.animate-in {
          opacity: 1;
          transform: translateY(0);
        }

        .partner-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }

        .partner-card h3 {
          color: var(--gold-light);
          font-size: 18px;
          font-weight: 700;
        }

        /* CTA */
        .cta {
          background: var(--black);
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: -10%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta::after {
          content: '';
          position: absolute;
          bottom: -10%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
          border-radius: 50%;
        }

        .cta-content {
          position: relative;
          z-index: 1;
        }

        .cta h2 {
          font-size: clamp(32px, 4vw, 50px);
          color: var(--white);
          margin-bottom: 20px;
          font-weight: 800;
        }

        .cta p {
          color: rgba(255,255,255,0.8);
          max-width: 800px;
          margin: 0 auto 40px;
          font-size: 16px;
          line-height: 1.8;
        }

        /* Contact */
        .contact { background: var(--gray-light); }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-card {
          background: var(--black);
          padding: 25px;
          border-radius: 15px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
          transition: all 0.3s;
        }

        .contact-card:hover {
          transform: translateX(8px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }

        .contact-card-icon {
          width: 50px;
          height: 50px;
          background: linear-gradient(135deg, var(--gold) 0%, var(--gold-dark) 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-card-content h3 {
          color: var(--gold-light);
          font-size: 16px;
          margin-bottom: 5px;
        }

        .contact-card-content p {
          color: rgba(255,255,255,0.8);
          font-size: 14px;
        }

        .contact-form {
          background: var(--white);
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        .form-group { margin-bottom: 20px; }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 15px;
          border: 2px solid #e5e5e5;
          border-radius: 10px;
          font-size: 14px;
          transition: all 0.3s;
          font-family: inherit;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--gold);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        /* Footer */
        .footer {
          background: var(--black);
          color: rgba(255,255,255,0.7);
          padding: 60px 0 30px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand h2 {
          color: var(--white);
          font-size: 28px;
          margin-bottom: 15px;
        }

        .footer-brand p {
          font-size: 14px;
          line-height: 1.8;
        }

        .footer-col h3 {
          color: var(--gold-light);
          font-size: 16px;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .footer-col ul {
          list-style: none;
        }

        .footer-col li {
          margin-bottom: 12px;
        }

        .footer-col a {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s;
        }

        .footer-col a:hover { color: var(--gold-light); }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-bottom p {
          font-size: 13px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-links a {
          width: 40px;
          height: 40px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--white);
          font-size: 18px;
          transition: all 0.3s;
        }

        .social-links a:hover {
          background: var(--gold);
          transform: translateY(-3px);
        }

        /* WhatsApp Fixed */
        .whatsapp-fixed {
          position: fixed;
          bottom: 25px;
          right: 25px;
          z-index: 999;
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .whatsapp-fixed.show {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .whatsapp-btn {
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4);
          animation: pulse 2s infinite;
          transition: transform 0.3s;
        }

        .whatsapp-btn:hover {
          transform: scale(1.1);
        }

        .whatsapp-btn svg {
          font-size: 28px;
          color: white;
        }

        @keyframes pulse {
          0%, 100% { box-shadow: 0 8px 25px rgba(37, 211, 102, 0.4); }
          50% { box-shadow: 0 8px 35px rgba(37, 211, 102, 0.6); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Mobile Responsive */
        @media (max-width: 968px) {
          .hero-content,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-image { order: -1; }
          .hero-image img { height: 350px; }

          .hero-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .footer-grid {
            grid-template-columns: 1fr 1fr;
          }

          .nav-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 75%;
            max-width: 300px;
            height: 100vh;
            background: var(--black);
            flex-direction: column;
            justify-content: center;
            padding: 0 30px;
            transition: right 0.4s ease;
            gap: 25px;
          }

          .nav-links.active { right: 0; }

          .nav-links a {
            color: var(--white);
            font-size: 16px;
          }

          .mobile-toggle { display: block; }

          .logo-img { height: 130px; }

          section { padding: 60px 0; }

          .buttons { flex-direction: column; width: 100%; }
          .btn { width: 100%; justify-content: center; }

          .contact-form { padding: 25px; }

          .footer-grid { grid-template-columns: 1fr; gap: 30px; }
          .footer-bottom { flex-direction: column; text-align: center; }
        }

        @media (max-width: 480px) {
          .container { width: 95%; }
          
          .hero { padding: 100px 0 50px; }
          
          .hero h1 { font-size: 28px; }
          
          .section-title { font-size: 24px; }
          
          .services-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .service-card { padding: 25px 20px; }
          
          .about-img img { height: 300px; }
          
          .project-card { height: 300px; }

          .whatsapp-fixed {
            bottom: 20px;
            right: 20px;
          }

          .whatsapp-btn {
            width: 55px;
            height: 55px;
          }
        }

        /* Smooth animations */
        .animate-on-scroll {
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* WhatsApp Fixed Button */}
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
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Progetti</a>
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
              <span>✨</span> Impresa Edile Premium
            </div>
            <h1>
              Costruiamo il tuo <span className="gradient">Spazio Perfetto</span> con Design Moderno
            </h1>
            <p>
              Realizziamo ville moderne, appartamenti di lusso e progetti esclusivi con standard europei, materiali premium e finiture eleganti.
            </p>
            <div className="buttons">
              <a href="#contact" className="btn btn-primary">Inizia Progetto</a>
              <a href="#services" className="btn btn-outline">Scopri Servizi</a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">12+</div>
                <div className="stat-label">Anni di Esperienza</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">650+</div>
                <div className="stat-label">Progetti Completati</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100%</div>
                <div className="stat-label">Clienti Soddisfatti</div>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construction" onError={handleImageError} />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">I Nostri Servizi</span>
            <h2 className="section-title">Cosa Offriamo</h2>
            <p className="section-subtitle">Servizi professionali di costruzione e ristrutturazione con tecnologie moderne e finiture di lusso.</p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container about-grid">
          <div className="about-img animate-on-scroll">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80" alt="Team" onError={handleImageError} />
          </div>
          <div className="about-content animate-on-scroll">
            <span className="section-tag">Perché Scegliere Noi</span>
            <h2>Costruiamo l'Eccellenza</h2>
            <p>La nostra azienda combina innovazione, architettura moderna e materiali di alta qualità per creare progetti esclusivi ed eleganti.</p>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                Finiture Italiane di Lusso
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                Design Moderno ed Elegante
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                Team Professionale Certificato
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                Materiali Premium
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">I Nostri Vantaggi</span>
            <h2 className="section-title">Qualità e Professionalità</h2>
            <p className="section-subtitle">Offriamo qualità europea, design moderno e soluzioni innovative per ogni progetto.</p>
          </div>
          <div className="services-grid">
            {advantages.map((item, i) => (
              <div key={i} className="service-card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <div className="service-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--gray-light)' }}>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Le Nostre Statistiche</span>
            <h2 className="section-title">Numeri che Contano</h2>
            <p className="section-subtitle">Numeri che dimostrano la nostra esperienza nel settore delle costruzioni.</p>
          </div>
          <div className="hero-stats">
            <div className="stat-item animate-on-scroll">
              <div className="stat-number">850+</div>
              <div className="stat-label">Clienti Felici</div>
            </div>
            <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="stat-number">15+</div>
              <div className="stat-label">Anni di Successo</div>
            </div>
            <div className="stat-item animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Supporto Professionale</div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Portfolio</span>
            <h2 className="section-title">Progetti Recenti</h2>
            <p className="section-subtitle">Scopri ville moderne, appartamenti esclusivi e interni eleganti realizzati con precisione.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, i) => (
              <div key={i} className="project-card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <img src={project.image} alt={project.title} onError={handleImageError} loading="lazy" />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Testimonianze</span>
            <h2 className="section-title">Cosa Dicono i Clienti</h2>
            <p className="section-subtitle">Scelti da clienti che desiderano qualità, eleganza e professionalità.</p>
          </div>
          <div className="services-grid">
            {testimonials.map((item, i) => (
              <div key={i} className="testimonial-card animate-on-scroll" style={{ transitionDelay: `${i * 0.15}s` }}>
                <p>"{item.text}"</p>
                <div className="testimonial-author">— {item.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Come Lavoriamo</span>
            <h2 className="section-title">Processo di Lavoro</h2>
            <p className="section-subtitle">Seguiamo un processo professionale per garantire qualità, precisione e risultati eccezionali.</p>
          </div>
          <div className="services-grid">
            <div className="process-step animate-on-scroll">
              <div className="step-number">1</div>
              <h3>Consulenza</h3>
              <p>Analizziamo il progetto e ascoltiamo le esigenze del cliente con attenzione.</p>
            </div>
            <div className="process-step animate-on-scroll" style={{ transitionDelay: '0.1s' }}>
              <div className="step-number">2</div>
              <h3>Progettazione</h3>
              <p>Creiamo design moderni e soluzioni innovative per ogni spazio.</p>
            </div>
            <div className="process-step animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <div className="step-number">3</div>
              <h3>Realizzazione</h3>
              <p>Il nostro team realizza il progetto con massima qualità e precisione.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Galleria</span>
            <h2 className="section-title">Galleria Moderna</h2>
            <p className="section-subtitle">Alcuni esempi di design eleganti e ambienti moderni realizzati dal nostro team.</p>
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

      {/* Partners */}
      <section>
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Partners</span>
            <h2 className="section-title">I Nostri Partner</h2>
            <p className="section-subtitle">Collaboriamo con aziende e fornitori di alta qualità per garantire risultati eccellenti.</p>
          </div>
          <div className="partners-grid">
            {partners.map((partner, i) => (
              <div key={i} className="partner-card animate-on-scroll" style={{ transitionDelay: `${i * 0.1}s` }}>
                <h3>{partner}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <div className="container cta-content">
          <h2 className="animate-on-scroll">
            Costruiamo il Futuro con <span className="gradient">Eleganza</span>
          </h2>
          <p className="animate-on-scroll">
            Ogni progetto rappresenta innovazione, lusso e qualità italiana. La nostra missione è creare ambienti esclusivi che uniscono design moderno e funzionalità.
          </p>
          <div className="buttons animate-on-scroll" style={{ justifyContent: 'center' }}>
            <a href="#contact" className="btn btn-primary">Richiedi Preventivo</a>
            <a href="#projects" className="btn btn-outline" style={{ borderColor: 'var(--gold-light)', color: 'var(--gold-light)' }}>Guarda Progetti</a>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-tag">Contatti</span>
            <h2 className="section-title">Parliamo del Tuo Progetto</h2>
            <p className="section-subtitle">Trasformiamo insieme le tue idee in realtà moderne ed eleganti.</p>
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
            </div>
            <div className="contact-form animate-on-scroll">
              <div className="form-group">
                <input type="text" placeholder="Il Tuo Nome" />
              </div>
              <div className="form-group">
                <input type="email" placeholder="La Tua Email" />
              </div>
              <div className="form-group">
                <textarea placeholder="Raccontaci del tuo progetto..."></textarea>
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Invia Richiesta</button>
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
              <p>Azienda specializzata in costruzioni moderne e ristrutturazioni di lusso con design elegante.</p>
            </div>
            <div className="footer-col">
              <h3>Servizi</h3>
              <ul>
                <li><a href="#services">Costruzioni Moderne</a></li>
                <li><a href="#services">Ristrutturazioni</a></li>
                <li><a href="#services">Design Interni</a></li>
                <li><a href="#services">Impianti Premium</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Azienda</h3>
              <ul>
                <li><a href="#about">Chi Siamo</a></li>
                <li><a href="#projects">Progetti</a></li>
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
            <p>© 2026 EDIL DESIGN — Tutti i diritti riservati.</p>
            <div className="social-links">
              <a href="https://wa.me/3511858486" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
              <a href="mailto:contact@edildesigndisaleh.com"><FaEnvelope /></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
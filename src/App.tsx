import React, { useState, useEffect } from "react";
import {
  Pill,
  ShieldCheck,
  Award,
  Globe,
  FileText,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Send,
  Check,
  Plus,
  Trash2,
  ChevronRight,
  ExternalLink,
  Search,
  Download,
  Info,
  Clock,
  Briefcase,
  Activity,
  HeartPulse,
  Microscope,
  FileSpreadsheet,
  CheckCircle2,
  SlidersHorizontal,
  MessageCircle,
  Truck,
  FileCheck,
  Factory,
  CheckCircle,
  HelpCircle,
  DownloadCloud
} from "lucide-react";
import { PRODUCTS, Product } from "./productsData";

export function RuskinLogoIcon({ className = "w-11 h-11" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hexagonal Outer Border with precision geometric paths matching the attached trademark */}
      <path 
        d="M 50,7 L 91,30.5 V 69.5 L 50,93" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      <path 
        d="M 50,7 L 9,30.5 V 69.5" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* Center vertical stem of the primary letter mark */}
      <path 
        d="M 28,27 V 73" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
      />
      
      {/* The outer loop of the 'R' / 'P' */}
      <path 
        d="M 28,27 H 55 C 64,27 68.5,32 68.5,40 C 68.5,48 64,53 55,53 H 28" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* The diagonal kick-leg of the 'R' that sweeps down-left to form the bottom-left of the hexagon */}
      <path 
        d="M 40,53 L 18,75 L 50,93" 
        stroke="currentColor" 
        strokeWidth="9" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
      />
      
      {/* The inner 'C' character nested beautifully inside the 'R' loop */}
      <path 
        d="M 54,46.5 A 6.5 6.5 0 1 1 54,33.5" 
        stroke="currentColor" 
        strokeWidth="7" 
        strokeLinecap="round" 
      />
    </svg>
  );
}

export default function App() {
  // Navigation: pages state
  const [currentPage, setCurrentPage] = useState<string>("home");
  
  // Mobile menu control
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // Search and filters for products page
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [formFilter, setFormFilter] = useState<string>("All");
  
  // Inquiry Basket (Corporate Trade Cart)
  const [inquiryBasket, setInquiryBasket] = useState<Product[]>([]);
  
  // Inquiry form states
  const [inquiryName, setInquiryName] = useState<string>("");
  const [inquiryEmail, setInquiryEmail] = useState<string>("");
  const [inquiryCompany, setInquiryCompany] = useState<string>("");
  const [inquiryCountry, setInquiryCountry] = useState<string>("");
  const [inquiryPhone, setInquiryPhone] = useState<string>("");
  const [inquiryDivision, setInquiryDivision] = useState<string>("Human Pharmaceuticals");
  const [inquiryMessage, setInquiryMessage] = useState<string>("");
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  
  // Simulated Quick-WhatsApp Drawer Desk
  const [chatOpen, setChatOpen] = useState<boolean>(false);
  const [chatMessage, setChatMessage] = useState<string>("");
  const [chatHistory, setChatHistory] = useState<Array<{ sender: 'user' | 'agent', text: string, time: string }>>([
    {
      sender: "agent",
      text: "Welcome to Ruskin Chemipharm Export & Trade Desk. How can we assist with your pharmaceutical registration or bulk sourcing requirement today?",
      time: "9:00 AM"
    }
  ]);

  // Catalog PDF generation simulation state
  const [isDownloading, setIsDownloading] = useState<boolean>(false);
  const [downloadSuccess, setDownloadSuccess] = useState<boolean>(false);

  // Sticky Nav scrolled state
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Active region state for interactive global map
  const [activeMapRegion, setActiveMapRegion] = useState<string>("africa");

  // Table vs Grid View state for formulations
  const [viewMode, setViewMode] = useState<"grid" | "table">("grid");

  // Detailed B2B Quote Modal states
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quoteName, setQuoteName] = useState<string>("");
  const [quoteEmail, setQuoteEmail] = useState<string>("");
  const [quoteCompany, setQuoteCompany] = useState<string>("");
  const [quoteCountry, setQuoteCountry] = useState<string>("");
  const [quotePhone, setQuotePhone] = useState<string>("");
  const [quoteCategory, setQuoteCategory] = useState<string>("Human Bulk Formulations");
  const [quoteQuantity, setQuoteQuantity] = useState<string>("");
  const [quoteUnit, setQuoteUnit] = useState<string>("Tablets");
  const [quoteIncoterms, setQuoteIncoterms] = useState<string>("FOB (Free On Board)");
  const [quotePort, setQuotePort] = useState<string>("JNPT Mumbai (Default)");
  const [quoteMessage, setQuoteMessage] = useState<string>("");
  const [quoteDocs, setQuoteDocs] = useState<string[]>([
    "CTD Dossier (Zone IV-B)",
    "Certificate of Analysis (COA)"
  ]);
  const [quoteSubmitted, setQuoteSubmitted] = useState<boolean>(false);

  // Track window scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when changing pages
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setMobileMenuOpen(false);
  }, [currentPage]);

  // Inquiry Basket Functions
  const toggleBasket = (product: Product) => {
    const exists = inquiryBasket.find(item => item.id === product.id);
    if (exists) {
      setInquiryBasket(inquiryBasket.filter(item => item.id !== product.id));
    } else {
      setInquiryBasket([...inquiryBasket, product]);
    }
  };

  const removeFromBasket = (id: string) => {
    setInquiryBasket(inquiryBasket.filter(item => item.id !== id));
  };

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName || !inquiryEmail || !inquiryCompany) {
      alert("Please enter Name, Email, and Company Name.");
      return;
    }
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setInquirySubmitted(true);
    }, 1200);
  };

  // Chat/WhatsApp Simulator
  const handleSendChatMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;
    
    const userMsg = {
      sender: 'user' as const,
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setChatHistory(prev => [...prev, userMsg]);
    const originalMsg = chatMessage;
    setChatMessage("");
    
    // Simulate smart reply from Global Sourcing Manager
    setTimeout(() => {
      let reply = "Thank you. Our Exports Director is reviewing your request. We specialize in WHO-GMP regulatory files (dossiers) in CTD/ACTD format. Let's schedule a call.";
      if (originalMsg.toLowerCase().includes("human") || originalMsg.toLowerCase().includes("tablet") || originalMsg.toLowerCase().includes("capsule")) {
        reply = "Understood. Our separate Human Health division supports advanced tablets, capsules, and liquid oral preparations. We can supply the CTD dossier to support registrations in your target market.";
      } else if (originalMsg.toLowerCase().includes("veterinary") || originalMsg.toLowerCase().includes("animal") || originalMsg.toLowerCase().includes("feed")) {
        reply = "Excellent. Ruskin is a prominent manufacturer of both Veterinary Formulation injections/boluses and Feed Supplements (calcium liquids, chelated mixtures) and Ectoparasiticides. We export to over 40 countries.";
      } else if (originalMsg.toLowerCase().includes("catalog") || originalMsg.toLowerCase().includes("catalogue") || originalMsg.toLowerCase().includes("price")) {
        reply = "I see! Please download our consolidated catalogue on the Product Catalogue page or send us your inquiry selection. We will email the bulk FOB pricing shortly.";
      }
      
      setChatHistory(prev => [...prev, {
        sender: 'agent',
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1500);
  };

  // Simulated PDF Catalogue Download trigger
  const triggerCatalogDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      // Create a CSV/Text layout file mock
      const headers = "RUSKIN CHEMIPHARM - PRODUCT LISTING CATALOGUE\n\nNAME,COMPOSITION,CATEGORY,DIVISION,DOSAGE FORM,PACK SIZE\n";
      const rows = PRODUCTS.map(p => `"${p.name}","${p.composition}","${p.category}","${p.division}","${p.form}","${p.packSize}"`).join("\n");
      const blob = new Blob([headers + rows], { type: 'text/csv' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = "Ruskin_Chemipharm_Corporate_Catalogue.csv";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => setDownloadSuccess(false), 4000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 font-sans selection:bg-blue-100 selection:text-clinical-blue relative">
      
      {/* 1. TOP UTILITY STRIP */}
      <div className="bg-[#0A2540] text-slate-300 text-xs py-2 px-4 border-b border-blue-900/40 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <a href="mailto:exports@ruskinchemipharm.com" className="hover:text-white transition">exports@ruskinchemipharm.com</a>
            </span>
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mobile No: Krishnakumar Iyer – +91-9322226307 , Yash Jhaveri – +91-98198 26611</span>
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-slate-400">Quality Standard: <strong className="text-emerald-400">WHO-GMP & ISO 9001:2015 Certified</strong></span>
            <span className="text-slate-400">|</span>
            <span className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-indigo-400" />
              <span>Global Exporter</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. CORPORATE MAIN NAVIGATION */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-all duration-300 py-3 md:py-4 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Brand Brand */}
          <div className="flex items-center cursor-pointer select-none shrink-0 group py-1.5" onClick={() => setCurrentPage("home")}>
            <img 
              src="/logo-header.svg" 
              alt="Ruskin Chemipharm" 
              className="h-[76px] sm:h-[84px] md:h-[100px] lg:h-[108px] xl:h-[112px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.015]"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Nav Actions */}
          <nav className="hidden xl:flex items-center gap-1 text-[13.5px] font-semibold text-slate-600">
            <button 
              onClick={() => setCurrentPage("home")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "home" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Home
            </button>
            <button 
              onClick={() => setCurrentPage("about")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "about" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              About Us
            </button>

            {/* Megamenu dropdown for divisions */}
            <div className="relative group/menu">
              <button className="px-3 py-2 rounded-lg hover:text-clinical-blue hover:bg-slate-50 flex items-center gap-1 cursor-default">
                Therapeutic Divisions
                <span className="text-[10px] opacity-70">▼</span>
              </button>
              <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-xl py-3 mt-1 opacity-0 pointer-events-none group-hover/menu:opacity-100 group-hover/menu:pointer-events-auto transition-all duration-200 z-50">
                <div className="px-4 py-1.5 border-b border-slate-100 mb-2">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Human Health Care</span>
                </div>
                <button 
                  onClick={() => setCurrentPage("human-pharma")}
                  className="w-full text-left px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-clinical-blue text-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue"></div>
                    <span>Human Pharmaceuticals</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => setCurrentPage("human-supplements")}
                  className="w-full text-left px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-clinical-blue text-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-clinical-blue"></div>
                    <span>Human Supplements</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition" />
                </button>

                <div className="px-4 py-1.5 border-b border-slate-100 mt-3 mb-2">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">Veterinary Health Care</span>
                </div>
                <button 
                  onClick={() => setCurrentPage("vet-pharma")}
                  className="w-full text-left px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-clinical-blue text-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                    <span>Veterinary Pharmaceuticals</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => setCurrentPage("vet-supplements")}
                  className="w-full text-left px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-clinical-blue text-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-600"></div>
                    <span>Veterinary Feed Supplements</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition" />
                </button>
                <button 
                  onClick={() => setCurrentPage("ectoparasites")}
                  className="w-full text-left px-5 py-2.5 hover:bg-slate-50 text-slate-700 hover:text-clinical-blue text-xs flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div>
                    <span>Ectoparasiticides</span>
                  </div>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-1 transition" />
                </button>
              </div>
            </div>

            <button 
              onClick={() => setCurrentPage("contract-mfg")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "contract-mfg" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Contract Manufacturing
            </button>
            <button 
              onClick={() => setCurrentPage("quality-regulatory")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "quality-regulatory" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Quality & Regulatory
            </button>
            <button 
              onClick={() => setCurrentPage("export-markets")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "export-markets" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Export Markets
            </button>
            <button 
              onClick={() => setCurrentPage("catalogue")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "catalogue" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Product Catalogue
            </button>
            <button 
              onClick={() => setCurrentPage("contact")}
              className={`px-3 py-2 rounded-lg transition-all ${currentPage === "contact" ? "bg-clinical-blue text-white shadow-xs" : "hover:text-clinical-blue hover:bg-slate-50"}`}
            >
              Contact
            </button>
          </nav>

          {/* Right inquiry indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsQuoteModalOpen(true)}
              className="px-4.5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md shadow-emerald-600/20 transition-all duration-300 flex items-center gap-1.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>

            <button
              onClick={() => setCurrentPage("catalogue")}
              className="relative px-3 py-2 bg-[#F4F8FC] border border-blue-100 hover:border-blue-200 text-clinical-blue rounded-xl text-xs font-semibold flex items-center gap-1.5 transition cursor-pointer"
            >
              <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
              <span className="hidden md:inline">Basket</span>
              <span className="bg-clinical-blue text-white rounded-full w-5 h-5 flex items-center justify-center text-[10px] font-bold">
                {inquiryBasket.length}
              </span>
            </button>

            {/* Mobile Menu Trigger */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* 3. MOBILE DROPDOWN DRAWER */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-t border-slate-100 py-4 px-4 shadow-lg absolute top-full left-0 w-full z-40 max-h-[85vh] overflow-y-auto">
            <div className="flex flex-col gap-1.5 text-sm font-semibold">
              <button 
                onClick={() => { setCurrentPage("home"); setMobileMenuOpen(false); }} 
                className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "home" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
              >
                Home
              </button>
              <button 
                onClick={() => { setCurrentPage("about"); setMobileMenuOpen(false); }} 
                className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "about" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
              >
                About Us
              </button>
              
              <div className="border-t border-slate-100 my-2 pt-2">
                <span className="px-4 py-1 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Human Health Care</span>
                <button 
                  onClick={() => { setCurrentPage("human-pharma"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-6 py-2 rounded-lg ${currentPage === "human-pharma" ? "text-clinical-blue font-bold" : "text-slate-600"}`}
                >
                  Human Pharmaceuticals
                </button>
                <button 
                  onClick={() => { setCurrentPage("human-supplements"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-6 py-2 rounded-lg ${currentPage === "human-supplements" ? "text-clinical-blue font-bold" : "text-slate-600"}`}
                >
                  Human Supplements
                </button>
              </div>

              <div className="border-t border-slate-100 my-2 pt-2">
                <span className="px-4 py-1 block text-[11px] font-bold uppercase text-slate-400 tracking-wider">Veterinary Division</span>
                <button 
                  onClick={() => { setCurrentPage("vet-pharma"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-6 py-2 rounded-lg ${currentPage === "vet-pharma" ? "text-emerald-700 font-bold" : "text-slate-600"}`}
                >
                  Veterinary Pharmaceuticals
                </button>
                <button 
                  onClick={() => { setCurrentPage("vet-supplements"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-6 py-2 rounded-lg ${currentPage === "vet-supplements" ? "text-emerald-700 font-bold" : "text-slate-600"}`}
                >
                  Veterinary Feed Supplements
                </button>
                <button 
                  onClick={() => { setCurrentPage("ectoparasites"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-6 py-2 rounded-lg ${currentPage === "ectoparasites" ? "text-rose-600 font-bold" : "text-slate-600"}`}
                >
                  Ectoparasiticides
                </button>
              </div>

              <div className="border-t border-slate-100 my-2 pt-2">
                <button 
                  onClick={() => { setCurrentPage("contract-mfg"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "contract-mfg" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
                >
                  Contract Manufacturing
                </button>
                <button 
                  onClick={() => { setCurrentPage("quality-regulatory"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "quality-regulatory" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
                >
                  Quality & Regulatory
                </button>
                <button 
                  onClick={() => { setCurrentPage("export-markets"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "export-markets" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
                >
                  Export Markets
                </button>
                <button 
                  onClick={() => { setCurrentPage("catalogue"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "catalogue" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
                >
                  Product Catalogue ({inquiryBasket.length})
                </button>
                <button 
                  onClick={() => { setCurrentPage("contact"); setMobileMenuOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 rounded-lg ${currentPage === "contact" ? "bg-clinical-blue text-white" : "hover:bg-slate-50 text-slate-700"}`}
                >
                  Contact
                </button>

                <button 
                  onClick={() => { setIsQuoteModalOpen(true); setMobileMenuOpen(false); }} 
                  className="w-full text-center mt-4 px-4 py-3 bg-emerald-600 text-white font-extrabold rounded-xl text-xs uppercase tracking-wider shadow-md hover:bg-emerald-500 transition cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Request a B2B Quote</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>


      {/* 4. MAIN CONTENT ROUTER DISPLAY */}
      <main className="pb-16">
        
        {/* ==================== PAGE: HOME ==================== */}
        {currentPage === "home" && (
          <div>
            {/* Premium Full-Screen Hero Banner */}
            <section className="relative min-h-[82vh] lg:min-h-[88vh] flex items-center bg-[#07192E] text-white overflow-hidden py-16 lg:py-24">
              <div className="absolute inset-0 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1579152183423-a1789c09bdcb?q=80&w=1600&auto=format&fit=crop" 
                  alt="Premium Pharmaceutical Sterile Production Facility" 
                  className="w-full h-full object-cover object-center opacity-20 scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#07192E] via-[#07192E]/90 to-transparent"></div>
                <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center w-full">
                <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    WHO-GMP & ISO 9001:2015 Approved Sourcing
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight font-display leading-[1.12] text-white">
                    Global Partner for <br className="hidden sm:inline" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">Human & Veterinary</span> <br />
                    Healthcare Solutions
                  </h1>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                    Manufacturing, Exporting, Contract Manufacturing, Private Label, Human Pharmaceuticals, Human Nutraceuticals, Veterinary Pharmaceuticals, Veterinary Feed Supplements and Ectoparasiticides.
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setIsQuoteModalOpen(true)}
                      className="px-7 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold rounded-xl shadow-lg shadow-emerald-600/30 hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 text-xs uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <FileText className="w-4.5 h-4.5" />
                      Request a Quote
                    </button>
                    <button 
                      onClick={triggerCatalogDownload}
                      disabled={isDownloading}
                      className="px-7 py-4 bg-white/10 hover:bg-white/15 text-white font-extrabold rounded-xl transition-all duration-300 border border-white/25 hover:border-white/40 flex items-center gap-2.5 text-xs uppercase tracking-wider cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0 backdrop-blur-xs"
                    >
                      {isDownloading ? (
                        <>
                          <Clock className="w-4.5 h-4.5 animate-spin" />
                          <span>Generating...</span>
                        </>
                      ) : (
                        <>
                          <DownloadCloud className="w-4.5 h-4.5" />
                          <span>Download Product Catalogue</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Right Interactive Live Trade Terminal Widget */}
                <div className="lg:col-span-4 hidden lg:block bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-2xl space-y-6">
                  <div>
                    <h3 className="text-lg font-bold font-display flex items-center gap-2 text-white">
                      <Activity className="w-5 h-5 text-emerald-400" />
                      B2B Sourcing Terminal
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">
                      Get real-time pricing and CTD/ACTD dossier regulatory approval documentation lists for active registration divisions.
                    </p>
                  </div>
                  <form onSubmit={(e) => { e.preventDefault(); setCurrentPage("contact"); }} className="space-y-4 text-xs">
                    <div>
                      <input 
                        type="text" 
                        placeholder="Company Name" 
                        required
                        className="w-full px-4 py-3 bg-[#031D33] border border-blue-900/50 rounded-xl text-slate-200 placeholder-slate-400 focus:outline-none focus:border-emerald-500 text-xs transition"
                      />
                    </div>
                    <div>
                      <select className="w-full px-4 py-3 bg-[#031D33] border border-blue-900/50 rounded-xl text-slate-300 focus:outline-none focus:border-emerald-500 text-xs transition">
                        <option>Human Pharmaceuticals</option>
                        <option>Human Nutraceuticals & Supplements</option>
                        <option>Veterinary Pharmaceuticals</option>
                        <option>Veterinary Feed Supplements</option>
                        <option>Ectoparasiticides Division</option>
                        <option>Contract Manufacturing (OEM)</option>
                      </select>
                    </div>
                    <button className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold rounded-xl transition uppercase tracking-wider font-sans cursor-pointer text-[11px] shadow-lg shadow-emerald-600/10">
                      Proceed To Sourcing
                    </button>
                  </form>
                </div>
              </div>
            </section>

            {/* Quick Metrics Strip */}
            <section className="bg-white border-b border-slate-100 py-10 shadow-sm relative z-10">
              <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                <div className="px-2">
                  <span className="block text-4xl font-black text-clinical-blue font-display tracking-tight">35+</span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-2">Years of Industry Presence</span>
                </div>
                <div className="px-2">
                  <span className="block text-4xl font-black text-emerald-600 font-display tracking-tight">40+</span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-2">Global Export Markets</span>
                </div>
                <div className="px-2">
                  <span className="block text-4xl font-black text-clinical-blue font-display tracking-tight">500+</span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-2">Registered Formulations</span>
                </div>
                <div className="px-2">
                  <span className="block text-4xl font-black text-emerald-600 font-display tracking-tight">100%</span>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mt-2">WHO-GMP & ISO Approved</span>
                </div>
              </div>
            </section>

            {/* Structured Divisions Grid - Highly Polished Six Product Cards */}
            <section className="py-24 max-w-7xl mx-auto px-4 lg:px-6 text-center">
              <div className="mb-16 space-y-4">
                <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full ring-1 ring-emerald-600/10 inline-block font-mono">Our Global Portfolio</span>
                <h2 className="text-3xl sm:text-4xl font-black text-clinical-blue font-display tracking-tight">Dedicated Therapeutic Divisions</h2>
                <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                  We manufacture, formulate, and package premium products across six specialized divisions under strict WHO-GMP cross-contamination control protocols.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: Human Pharmaceuticals */}
                <div 
                  onClick={() => setCurrentPage("human-pharma")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop" 
                      alt="Human Pharmaceuticals Production Line"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-clinical-blue text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      Human Care
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-clinical-blue group-hover:bg-clinical-blue group-hover:text-white transition-colors duration-300">
                      <HeartPulse className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Human Pharmaceuticals
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Comprehensive range of life-saving antibiotics, analgesics, antidiabetics, and cardiovascular therapies formulated as Tablets, Capsules, and Oral Suspensions.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Antibiotics & Analgesics</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Tablets, Capsules & Liquids</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>WHO-GMP Approved Sourcing</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("human-pharma");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Formulation Listing <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 2: Human Nutraceuticals & Supplements */}
                <div 
                  onClick={() => setCurrentPage("human-supplements")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?q=80&w=600&auto=format&fit=crop" 
                      alt="Human Nutraceuticals & Supplements"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      Wellness
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Activity className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Human Nutraceuticals & Supplements
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-6">
                        Daily health vitamins, joint boosters, iron matrices, and omega fish lipid softgels developed for general wellness, immunity support, and structural bone health.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Vitamins & Minerals</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Joint Support Softgels</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Premium Wellness Formulations</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("human-supplements");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Supplement Listing <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 3: Veterinary Pharmaceuticals */}
                <div 
                  onClick={() => setCurrentPage("vet-pharma")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?q=80&w=600&auto=format&fit=crop" 
                      alt="Veterinary Pharmaceuticals Sourcing"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      Animal Health
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
                      <Pill className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Veterinary Pharmaceuticals
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Endectocides, deworming boluses, anti-inflammatory injections, and advanced cephalosporin treatments designed to protect livestock, poultry, and companion animals.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Anti-infective Boluses</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Advanced Dewormers</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Injectable Therapeutics</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("vet-pharma");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Veterinary Listing <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 4: Veterinary Feed Supplements */}
                <div 
                  onClick={() => setCurrentPage("vet-supplements")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=600&auto=format&fit=crop" 
                      alt="Veterinary Feed Supplements"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-indigo-600 text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      Nutrition
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                      <FileSpreadsheet className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Veterinary Feed Supplements
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        High-absorption oral calcium liquids, chelated mineral mixtures, hepatoprotectives, anti-heat stress powders, and bypass fats to maximize dairy milk yield and poultry FCR.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>High-Absorption Oral Calcium</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Chelated Minerals & Vitamins</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Dairy Yield & FCR Boosters</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("vet-supplements");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Supplements Listing <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 5: Ectoparasiticides */}
                <div 
                  onClick={() => setCurrentPage("ectoparasites")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1607619056574-7b8f304f3c6f?q=80&w=600&auto=format&fit=crop" 
                      alt="Ectoparasiticides Block"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      Specialty Block
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                      <Microscope className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Ectoparasiticides
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Dedicated chemical block manufacturing Amitraz, Cypermethrin, Deltamethrin, and Flumethrin pour-ons and sprays. Prevents ticks, lice, mites, and scabies infestations in dairy herds.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Amitraz & Cypermethrin</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Pour-on & Spray Formulations</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Eradicates Ticks, Lice & Mites</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("ectoparasites");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Parasiticides Listing <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card 6: Contract Manufacturing */}
                <div 
                  onClick={() => setCurrentPage("contract-mfg")}
                  className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-200/80 transition-all duration-300 flex flex-col justify-between text-left group cursor-pointer"
                >
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600&auto=format&fit=crop" 
                      alt="Contract Manufacturing Capabilities"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent"></div>
                    <span className="absolute top-4 left-4 bg-slate-700 text-white text-[10px] font-black px-3 py-1.5 rounded-md uppercase tracking-wider font-mono shadow-md">
                      OEM & B2B
                    </span>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-md text-slate-700 group-hover:bg-slate-700 group-hover:text-white transition-colors duration-300">
                      <Factory className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-clinical-blue transition-colors duration-200 mb-2">
                        Contract Manufacturing
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mb-4">
                        Comprehensive private labeling, custom formulation development, and clinical trial sample supply services. Seamless technical transfer under WHO-GMP requirements.
                      </p>
                      
                      <div className="space-y-2 mb-6 border-t border-slate-50 pt-4">
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Private Label Formulations</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Technical Transfer Support</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                          <span>Custom Clinical Trial Supply</span>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentPage("contract-mfg");
                      }}
                      className="w-full text-center py-3 px-4 bg-slate-50 hover:bg-clinical-blue hover:text-white border border-slate-100 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      View Manufacturing Strengths <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Global Sourcing Showcase Banner */}
            <section className="bg-gradient-to-r from-clinical-blue to-blue-900 text-white py-16 px-6 lg:px-10 rounded-3xl max-w-7xl mx-auto my-12 relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <div className="relative z-10 max-w-4xl flex flex-col md:flex-row items-center gap-8 justify-between text-left">
                <div>
                  <span className="text-[10px] uppercase tracking-widest font-bold text-emerald-400 font-mono bg-white/10 px-2.5 py-1 rounded-md">B2B Trade & Registrations</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display mt-3 mb-3">Expanding Global Registrations & Sourcing</h3>
                  <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                    We supply full Chemistry, Manufacturing, and Control (CMC) documentation, ACTD/CTD dossiers, and stability studies at various climatic zones (Zone IV-B compliance) to facilitate rapid local health authority approvals.
                  </p>
                </div>
                <button 
                  onClick={() => setCurrentPage("export-markets")}
                  className="px-6 py-3.5 bg-white text-clinical-blue font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-slate-100 transition whitespace-nowrap cursor-pointer shadow-md"
                >
                  View Export Coverage
                </button>
              </div>
            </section>

            {/* Why Choose Us Section with exact 6 points */}
            <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="text-center mb-16 space-y-3">
                  <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-100/60 px-4 py-1.5 rounded-full inline-block font-mono">Uncompromising Quality</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-clinical-blue font-display tracking-tight">Why Choose Ruskin Chemipharm?</h2>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    We combine pharmaceutical excellence with robust global supply pipelines to fulfill public health tenders and private label sourcing projects.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
                  {/* Point 1: 35+ Years of Industry Experience */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
                      <Clock className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">35+ Years of Industry Experience</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Founded in 1991, we have spent over three decades delivering reliable, consistent formulation chemistry, guiding hundreds of product launches internationally.
                    </p>
                  </div>

                  {/* Point 2: WHO-GMP Quality Standards */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-clinical-blue flex items-center justify-center mb-6">
                      <Award className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">WHO-GMP Quality Standards</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our plants undergo continuous cleanroom validation, HPLC testing, and computer-logged batch controls to fulfill strict WHO-GMP compliance guidelines.
                    </p>
                  </div>

                  {/* Point 3: Global Export Network */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                      <Globe className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Global Export Network</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Exporting to over 40 countries across Africa, Asia, CIS & Eastern Europe, the Middle East, and Latin America. Registered with multiple ministries of health.
                    </p>
                  </div>

                  {/* Point 4: Regulatory Support */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
                      <FileCheck className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Regulatory Support</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Our specialized regulatory affairs division provides complete CTD and ACTD dossier sets, FSCs, COPPs, and stability studies conforming to climatic Zone IV-B requirements.
                    </p>
                  </div>

                  {/* Point 5: Private Label Manufacturing */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-6">
                      <Factory className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Private Label Manufacturing</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      From custom molecule branding and blister graphics to specific therapeutic strengths and flavors, we provide comprehensive OEM solutions.
                    </p>
                  </div>

                  {/* Point 6: Fast Worldwide Delivery */}
                  <div className="bg-white p-8 rounded-2xl shadow-xs border border-slate-100 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6">
                      <Truck className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-3 text-lg">Fast Worldwide Delivery</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Strategically located near major shipping hubs like JNPT seaport, ensuring temperature-validated ocean freight container routing to global destinations.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Interactive World Map Section */}
            <section className="py-24 bg-[#07192E] text-white overflow-hidden relative border-t border-slate-800">
              <div className="absolute inset-0 z-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1600&auto=format&fit=crop" 
                  alt="Abstract global connectivity grid" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="max-w-7xl mx-auto px-4 lg:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                  <span className="text-[11px] font-black text-emerald-400 uppercase tracking-widest bg-emerald-500/10 border border-emerald-500/30 px-4 py-1.5 rounded-full inline-block font-mono">Global Footprint</span>
                  <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white">Active B2B Export Markets</h2>
                  <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                    Click any export region below to view registered countries, climate-specific dossier compliance, and sea/air shipment transit metrics.
                  </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Left Column: Interactive Region Selection */}
                  <div className="lg:col-span-5 space-y-4 text-left">
                    <div className="space-y-2.5">
                      <button 
                        onClick={() => setActiveMapRegion("africa")}
                        className={`w-full p-4.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${activeMapRegion === "africa" ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg" : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-white"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🌍</span>
                          <div>
                            <strong className="block text-sm">Africa Division</strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">West, East & Central Africa Tenders</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button 
                        onClick={() => setActiveMapRegion("asia")}
                        className={`w-full p-4.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${activeMapRegion === "asia" ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg" : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-white"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🌏</span>
                          <div>
                            <strong className="block text-sm">Southeast Asia</strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">ACTD Format Compliant Approvals</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button 
                        onClick={() => setActiveMapRegion("cis")}
                        className={`w-full p-4.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${activeMapRegion === "cis" ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg" : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-white"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🏛️</span>
                          <div>
                            <strong className="block text-sm">CIS & Central Asia</strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">Ministry Registrations & Dossiers</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button 
                        onClick={() => setActiveMapRegion("middle_east")}
                        className={`w-full p-4.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${activeMapRegion === "middle_east" ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg" : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-white"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🕌</span>
                          <div>
                            <strong className="block text-sm">Middle East & GCC</strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">GCC Format & Public Tenders</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>

                      <button 
                        onClick={() => setActiveMapRegion("latin_america")}
                        className={`w-full p-4.5 rounded-xl border text-left transition-all duration-300 flex items-center justify-between group cursor-pointer ${activeMapRegion === "latin_america" ? "bg-emerald-600/20 border-emerald-500 text-white shadow-lg" : "bg-slate-900/40 border-slate-800 text-slate-400 hover:bg-slate-900/60 hover:text-white"}`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">🏝️</span>
                          <div>
                            <strong className="block text-sm">Latin America</strong>
                            <span className="text-[10px] text-slate-400 block mt-0.5">Spanish Dossier Language Support</span>
                          </div>
                        </div>
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dynamic Region Data Visualization */}
                  <div className="lg:col-span-7 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 text-left space-y-6">
                    {activeMapRegion === "africa" && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <span className="text-4xl">🌍</span>
                          <div>
                            <h3 className="text-xl font-bold font-display">Africa Export Division</h3>
                            <p className="text-xs text-slate-400 mt-0.5">Active Registrations & Sourcing</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇳🇬 Nigeria</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇰🇪 Kenya</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇬🇭 Ghana</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇺🇬 Uganda</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇹🇿 Tanzania</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Dossier Type</span>
                            <strong className="text-emerald-400 text-sm">Zone IV-A & IV-B CTD Dossier</strong>
                          </div>
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Lead Time Metrics</span>
                            <strong className="text-white text-sm">approx. 25-28 Days Sea Freight</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeMapRegion === "asia" && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <span className="text-4xl">🌏</span>
                          <div>
                            <h3 className="text-xl font-bold font-display">Southeast Asia Division</h3>
                            <p className="text-xs text-slate-400 mt-0.5">ASEAN Registration Protocols</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇵🇭 Philippines</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇻🇳 Vietnam</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇲🇲 Myanmar</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇰🇭 Cambodia</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇱🇰 Sri Lanka</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Dossier Type</span>
                            <strong className="text-emerald-400 text-sm">ACTD / CTD Format Compiled</strong>
                          </div>
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Lead Time Metrics</span>
                            <strong className="text-white text-sm">approx. 18-21 Days Sea Freight</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeMapRegion === "cis" && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <span className="text-4xl">🏛️</span>
                          <div>
                            <h3 className="text-xl font-bold font-display">CIS & Central Asia Division</h3>
                            <p className="text-xs text-slate-400 mt-0.5">Ministry of Health Tenders</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇺🇿 Uzbekistan</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇰🇿 Kazakhstan</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇹🇯 Tajikistan</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇦🇿 Azerbaijan</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Dossier Type</span>
                            <strong className="text-emerald-400 text-sm">Russian Language CTD Dossiers</strong>
                          </div>
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Lead Time Metrics</span>
                            <strong className="text-white text-sm">approx. 28-32 Days Sea-Land Route</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeMapRegion === "middle_east" && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <span className="text-4xl">🕌</span>
                          <div>
                            <h3 className="text-xl font-bold font-display">Middle East & GCC</h3>
                            <p className="text-xs text-slate-400 mt-0.5">MOH Ministry Registrations</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇾🇪 Yemen</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇴🇲 Oman</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇦🇪 UAE</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇮🇶 Iraq</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇯🇴 Jordan</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Dossier Type</span>
                            <strong className="text-emerald-400 text-sm">GCC Standard CTD Files</strong>
                          </div>
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Lead Time Metrics</span>
                            <strong className="text-white text-sm">approx. 12-15 Days Direct Transit</strong>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeMapRegion === "latin_america" && (
                      <div className="space-y-6">
                        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                          <span className="text-4xl">🏝️</span>
                          <div>
                            <h3 className="text-xl font-bold font-display">Latin America Division</h3>
                            <p className="text-xs text-slate-400 mt-0.5">Climatic Zone IV-B Dossiers</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇵🇪 Peru</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇧🇴 Bolivia</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇪🇨 Ecuador</span>
                          <span className="px-3 py-1.5 bg-slate-800/80 rounded-lg text-xs font-semibold flex items-center gap-1.5 border border-slate-700">🇩🇴 Dominican Republic</span>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4 text-xs">
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Dossier Type</span>
                            <strong className="text-emerald-400 text-sm">Spanish Language Zone IV-B CTD</strong>
                          </div>
                          <div className="bg-[#031A30]/50 p-4 rounded-xl border border-blue-900/30">
                            <span className="text-slate-400 block mb-1 font-mono uppercase text-[10px]">Lead Time Metrics</span>
                            <strong className="text-white text-sm">approx. 40-45 Days Trans-Oceanic</strong>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </section>

            {/* Premium Certifications Showcase Section */}
            <section className="py-24 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="text-center mb-16 space-y-4">
                  <span className="text-[11px] font-black text-emerald-700 uppercase tracking-widest bg-emerald-50 px-4 py-1.5 rounded-full ring-1 ring-emerald-600/10 inline-block font-mono">Global Standards</span>
                  <h2 className="text-3xl sm:text-4xl font-black text-clinical-blue font-display tracking-tight">Accredited Quality & Compliance</h2>
                  <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                    Our manufacturing hubs operate with continuous validation cycles to satisfy stringent international regulatory benchmarks.
                  </p>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
                  <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl">🏅</span>
                    <strong className="block text-slate-800 text-xs tracking-tight uppercase">WHO-GMP</strong>
                    <span className="text-[10px] text-slate-400">Continuous batch validation and computerized room pressure controls.</span>
                  </div>

                  <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl">📋</span>
                    <strong className="block text-slate-800 text-xs tracking-tight uppercase">ISO 9001:2015</strong>
                    <span className="text-[10px] text-slate-400">Total Quality Management validation from raw API to finished packing.</span>
                  </div>

                  <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl">🔬</span>
                    <strong className="block text-slate-800 text-xs tracking-tight uppercase">Quality Assurance</strong>
                    <span className="text-[10px] text-slate-400">Validated analytical HPLC systems, Gas Chromatography & UV chambers.</span>
                  </div>

                  <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-3">
                    <span className="text-3xl">📂</span>
                    <strong className="block text-slate-800 text-xs tracking-tight uppercase">Regulatory Docs</strong>
                    <span className="text-[10px] text-slate-400">Ready dossier files for immediate compilation under CTD/ACTD formats.</span>
                  </div>

                  <div className="bg-slate-50/60 p-6 rounded-2xl border border-slate-100/80 flex flex-col items-center justify-center space-y-3 col-span-2 lg:col-span-1">
                    <span className="text-3xl">🚢</span>
                    <strong className="block text-slate-800 text-xs tracking-tight uppercase">Export Compliance</strong>
                    <span className="text-[10px] text-slate-400">Temperature validated logs and double-walled thermal master cartons.</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Unified B2B Contact & Sourcing Desk with Google Maps */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-12 gap-12 items-start text-left">
                  
                  {/* Left Column: Coordinates, WhatsApp & Maps */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="bg-white border border-slate-100 rounded-2xl p-6.5 shadow-xs space-y-6">
                      <div>
                        <span className="text-[10px] uppercase font-bold text-emerald-600 font-mono">B2B Sourcing Coordinates</span>
                        <h3 className="text-xl font-bold text-clinical-blue font-display mt-1 border-b border-slate-50 pb-3">Trade Desk Support</h3>
                      </div>

                      {/* direct whatsapp chat */}
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">WhatsApp Trade Desk:</span>
                        <a 
                          href="https://wa.me/919322226307?text=Hello%20Krishnakumar%20Iyer,%20I%20am%20interested%20in%20sourcing%20formulations%20from%20Ruskin%20Chemipharm." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between hover:bg-emerald-50 bg-slate-50 p-3.5 rounded-xl border border-emerald-100/60 transition group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-emerald-600" />
                            <div>
                              <strong className="block text-xs text-slate-800">Krishnakumar Iyer</strong>
                              <span className="text-[10px] text-slate-400 block mt-0.5">Exports Director</span>
                            </div>
                          </div>
                          <span className="font-mono text-xs text-emerald-700 font-black">+91-9322226307</span>
                        </a>

                        <a 
                          href="https://wa.me/919819826611?text=Hello%20Yash%20Jhaveri,%20I%20am%20interested%20in%20sourcing%20formulations%20from%20Ruskin%20Chemipharm." 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center justify-between hover:bg-emerald-50 bg-slate-50 p-3.5 rounded-xl border border-emerald-100/60 transition group cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <MessageCircle className="w-5 h-5 text-emerald-600" />
                            <div>
                              <strong className="block text-xs text-slate-800">Yash Jhaveri</strong>
                              <span className="text-[10px] text-slate-400 block mt-0.5">Licensing & OEM Director</span>
                            </div>
                          </div>
                          <span className="font-mono text-xs text-emerald-700 font-black">+91-98198 26611</span>
                        </a>
                      </div>

                      {/* email action button */}
                      <div className="space-y-3">
                        <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">Email Inquiry:</span>
                        <a 
                          href="mailto:exports@ruskinchemipharm.com?subject=Ruskin%20Chemipharm%20Bulk%20Sourcing%20Inquiry"
                          className="flex items-center gap-3 bg-slate-50 hover:bg-blue-50/50 p-3.5 rounded-xl border border-blue-100/60 transition cursor-pointer"
                        >
                          <Mail className="w-5 h-5 text-clinical-blue" />
                          <div>
                            <strong className="block text-xs text-slate-800">Corporate Export Desk</strong>
                            <span className="text-[10.5px] text-slate-500 font-mono">exports@ruskinchemipharm.com</span>
                          </div>
                        </a>
                      </div>
                    </div>

                    {/* Google Maps Widget Embed */}
                    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-xs h-64 relative">
                      <iframe 
                        title="Ruskin Chemipharm Headquarters Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.834079860642!2d72.828551!3d18.95015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf216ef352d1%3s0x3be7cf216ef352d1!2sKalbadevi%20Rd%2C%20Kalbadevi%2C%20Mumbai%2C%20Maharashtra%20400002!5e0!3m2!1sen!2sin!4v1715494200000!5m2!1sen!2sin"
                        className="w-full h-full border-0 absolute inset-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>

                  {/* Right Column: Detailed Inquiry / Request for Quote Form */}
                  <div className="lg:col-span-7 bg-white border border-slate-100 rounded-2xl p-8 shadow-xs">
                    <span className="text-[10px] uppercase font-bold text-emerald-600 font-mono">Direct Sourcing Form</span>
                    <h3 className="text-xl font-bold text-clinical-blue font-display mt-1 mb-2">Request for Quote (RFQ)</h3>
                    <p className="text-slate-400 text-xs mb-8">
                      Submit your formulation requirement, target packaging layouts, and destination export port details to trigger immediate pricing feedback.
                    </p>

                    <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs text-slate-600">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Contact Person *</label>
                          <input 
                            type="text" 
                            required
                            value={inquiryName}
                            onChange={(e) => setInquiryName(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition"
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Company Email *</label>
                          <input 
                            type="email" 
                            required
                            value={inquiryEmail}
                            onChange={(e) => setInquiryEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition"
                            placeholder="email@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Phone / WhatsApp</label>
                          <input 
                            type="text" 
                            value={inquiryPhone}
                            onChange={(e) => setInquiryPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition"
                            placeholder="+1-234-567-890"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Target Export Country *</label>
                          <input 
                            type="text" 
                            required
                            value={inquiryCountry}
                            onChange={(e) => setInquiryCountry(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition"
                            placeholder="e.g. Philippines"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Therapeutic Division interest *</label>
                        <select 
                          value={inquiryDivision}
                          onChange={(e) => setInquiryDivision(e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition text-slate-600"
                        >
                          <option>Human Pharmaceuticals</option>
                          <option>Human Nutraceuticals & Supplements</option>
                          <option>Veterinary Pharmaceuticals</option>
                          <option>Veterinary Feed Supplements</option>
                          <option>Ectoparasiticides Division</option>
                          <option>Contract Manufacturing (OEM)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-slate-500 font-bold mb-1.5 uppercase tracking-wide">Detailed Molecules & Strengths Required *</label>
                        <textarea 
                          rows={4}
                          required
                          value={inquiryMessage}
                          onChange={(e) => setInquiryMessage(e.target.value)}
                          placeholder="e.g. Paracetamol Tablets 500mg, blister of 10s. Target quantity 100,000 packs, sea transport to JNPT."
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white text-xs transition"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-extrabold rounded-xl transition uppercase tracking-wider text-xs shadow-lg shadow-emerald-600/10 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        Submit Sourcing RFQ
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}


        {/* ==================== PAGE: ABOUT US ==================== */}
        {currentPage === "about" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10">
            <div className="border-b border-slate-200 pb-6 mb-10 text-left">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Corporate Profile</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">About Ruskin Chemipharm</h1>
              <p className="text-slate-500 text-sm mt-2">Over two decades of clinical manufacturing and export reliability across the globe.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7 text-left space-y-6 text-sm leading-relaxed text-slate-600">
                <h3 className="text-xl font-bold text-clinical-blue font-display">Our History & Legacy</h3>
                <p>
                  Founded with a vision to formulate high-standard, affordable medication, <strong>Ruskin Chemipharm</strong> has grown into an international pharmaceutical enterprise. Headquartered with state-of-the-art facilities, we produce life-saving human drugs, nutritional supplements, veterinary products, and ectoparasiticides.
                </p>
                <p>
                  We are driven by the belief that high quality should be universally accessible. By combining modern scientific manufacturing equipment with skilled regulatory experts, we seamlessly satisfy strict international FDA audits, supporting registrations in Africa, Southeast Asia, CIS, and Latin America.
                </p>
                <p className="border-l-4 border-emerald-500 pl-4 bg-emerald-50/50 py-3 rounded-r-xl">
                  "Our core mission is to empower human and veterinary care with affordable, premium formulations that adhere 100% to World Health Organization (WHO) GMP standards."
                </p>
              </div>
              <div className="lg:col-span-5">
                <img 
                  src="https://images.unsplash.com/photo-1579152183423-a1789c09bdcb?q=80&w=1200&auto=format&fit=crop" 
                  alt="Modern chemical testing equipment" 
                  className="rounded-2xl shadow-lg border border-slate-200/80 w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Vision and Mission Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 text-left">
              <div className="bg-[#0A2540] text-white p-8 rounded-2xl shadow-md relative overflow-hidden">
                <span className="text-emerald-400 font-mono text-xs uppercase block mb-3">Our Objective</span>
                <h4 className="text-lg font-bold font-display mb-3">Our Mission</h4>
                <p className="text-slate-300 text-xs leading-relaxed">
                  To manufacture, distribute, and register premium pharmaceutical formulations globally, sustaining health and enhancing yield with absolute compliance.
                </p>
              </div>

              <div className="bg-emerald-800 text-white p-8 rounded-2xl shadow-md relative overflow-hidden">
                <span className="text-teal-300 font-mono text-xs uppercase block mb-3">Long-term Focus</span>
                <h4 className="text-lg font-bold font-display mb-3">Our Vision</h4>
                <p className="text-slate-200 text-xs leading-relaxed">
                  To become an unmatched global pharmaceutical and veterinary manufacturer, distinguished by continuous chemical research, product range variety, and WHO compliance.
                </p>
              </div>

              <div className="bg-white border border-slate-200 p-8 rounded-2xl shadow-xs">
                <span className="text-emerald-600 font-mono text-xs uppercase block mb-3">Governing Truths</span>
                <h4 className="text-lg font-bold font-display text-clinical-blue mb-3">Our Core Values</h4>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Uncompromised Quality, absolute Transparency in raw material sourcing, ethical Trade relationships, and rigorous respect for local regulatory guidelines.
                </p>
              </div>
            </div>

            {/* Leadership Message */}
            <div className="bg-white border border-slate-200/80 rounded-2xl p-6 md:p-8 shadow-sm text-left mb-8">
              <h3 className="text-lg font-bold text-clinical-blue mb-4 font-display">Leadership Message</h3>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-slate-100 border-2 border-emerald-500 flex items-center justify-center shrink-0">
                  <span className="text-xl font-bold text-clinical-blue">MD</span>
                </div>
                <div className="text-sm text-slate-600 space-y-3">
                  <p className="italic font-medium text-slate-800">
                    "At Ruskin Chemipharm, we consider veterinary health as integrated with human wellbeing—a true 'One Health' focus. Our advanced separate production block for ectoparasiticides and veterinary injectables serves farms across continents, guaranteeing clean chemical yields. We thank our trade partners for their continuing trust."
                  </p>
                  <div>
                    <strong className="block text-slate-900 font-display text-sm">Managing Director</strong>
                    <span className="text-xs text-slate-400">Ruskin Chemipharm Limited</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}


        {/* ==================== PAGES: DYNAMIC DIVISIONS LISTING ==================== */}
        {(currentPage === "human-pharma" || 
          currentPage === "human-supplements" || 
          currentPage === "vet-pharma" || 
          currentPage === "vet-supplements" || 
          currentPage === "ectoparasites") && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10">
            
            {/* 1. Header and Clinical Intro depending on selected division */}
            {currentPage === "human-pharma" && (
              <div className="mb-8">
                <div className="bg-[#051E36] text-white rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden text-left shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1200&auto=format&fit=crop" 
                      alt="Human Pharmaceuticals Production"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-mono font-bold uppercase tracking-wide">Division: Human Care</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-2 mb-3">Human Pharmaceuticals</h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      We offer a diverse portfolio of active therapeutic therapies including pain management (NSAIDs), high-throughput broad-spectrum anti-infectives (antibiotics), proton pump inhibitors (PPI gastro-intestinal), and cardiovascular lipids. Formulated as Tablets, Capsules, and Oral Liquids.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === "human-supplements" && (
              <div className="mb-8">
                <div className="bg-[#082E1E] text-white rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden text-left shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=1200&auto=format&fit=crop" 
                      alt="Nutraceuticals Supplements"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-md text-xs font-mono font-bold uppercase tracking-wide">Division: Wellness & Supplements</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-2 mb-3">Human Supplements</h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Developed under meticulous GMP food safety regulations, our premium supplements range features essential daily multivitamins, pure marine Omega-3 softgels, high-absorption hematinic iron boosters, and collagen-joint rebuilders. Supporting daily stamina and structural longevity.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === "vet-pharma" && (
              <div className="mb-8">
                <div className="bg-[#1E2E08] text-white rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden text-left shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?q=80&w=1200&auto=format&fit=crop" 
                      alt="Veterinary Science"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <span className="px-3 py-1 bg-green-500/20 text-green-300 rounded-md text-xs font-mono font-bold uppercase tracking-wide">Division: Animal Care</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-2 mb-3">Veterinary Pharmaceuticals</h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Ruskin manufactures world-class veterinary medicines to treat livestock, poultry, and companion animals. Our formulations range from high-potency systemic dewormers and endectocide injections to anti-inflammatory meloxicam vials and long-acting tetracyclines.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === "vet-supplements" && (
              <div className="mb-8">
                <div className="bg-[#051C2C] text-white rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden text-left shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=1200&auto=format&fit=crop" 
                      alt="Dairy Cattle Nutrition"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-md text-xs font-mono font-bold uppercase tracking-wide">Division: Animal Yield</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-2 mb-3">Veterinary Feed Supplements</h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Optimizing lactation yields and herd immune defenses. Our veterinary feed division specializes in rich liquid calcium suspensions, chelated organic mineral mixes, protective hepatoprotective liver tonics, anti-heat stress powders, and high-energy bypass fats.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {currentPage === "ectoparasites" && (
              <div className="mb-8">
                <div className="bg-[#2D0D19] text-white rounded-2xl p-6 md:p-10 mb-8 relative overflow-hidden text-left shadow-lg">
                  <div className="absolute inset-0 z-0 opacity-20">
                    <img 
                      src="https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1200&auto=format&fit=crop" 
                      alt="Ectoparasiticide treatment"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 max-w-3xl">
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-md text-xs font-mono font-bold uppercase tracking-wide">Division: Parasite Control</span>
                    <h1 className="text-3xl md:text-4xl font-extrabold font-display text-white mt-2 mb-3">Ectoparasiticides</h1>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Produced under a strictly isolated chemical block to prevent cross-contamination of general formulas. We supply gold-standard acaricide solutions including Amitraz 12.5% EC, Cypermethrin, Deltamethrin, and Flumethrin pour-ons and sprays. Essential for controlling scabies, ticks, lice, and mites.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Product Database Explorer for selected division */}
            <div className="bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs text-left">
              
              {/* Filter controls */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 border-b border-slate-100 pb-5">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-4 h-4 text-slate-400" />
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">Search Formulations</span>
                  </div>
                  
                  {/* View Mode Switcher */}
                  <div className="flex bg-slate-100 p-0.5 rounded-lg border border-slate-200/40">
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      className={`px-3 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer ${
                        viewMode === "grid" 
                          ? "bg-white text-clinical-blue shadow-xs border border-slate-200/20" 
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      <span>Showcase Grid</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("table")}
                      className={`px-3 py-1 rounded-md text-[11px] font-bold transition flex items-center gap-1.5 cursor-pointer ${
                        viewMode === "table" 
                          ? "bg-white text-clinical-blue shadow-xs border border-slate-200/20" 
                          : "text-slate-500 hover:text-slate-800"
                      }`}
                    >
                      <span>Directory Table</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-3">
                  {/* Search Bar */}
                  <div className="relative w-full sm:w-64">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input 
                      type="text" 
                      placeholder="Search composition or brand..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-clinical-blue focus:bg-white transition"
                    />
                  </div>
                  {/* Form Filter */}
                  <select
                    value={formFilter}
                    onChange={(e) => setFormFilter(e.target.value)}
                    className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-clinical-blue text-slate-600"
                  >
                    <option value="All">All Forms</option>
                    <option value="Tablet">Tablets</option>
                    <option value="Capsule">Capsules</option>
                    <option value="Injection">Injections</option>
                    <option value="Oral Liquid">Oral Liquids</option>
                    <option value="Bolus">Boluses</option>
                    <option value="Powder">Powders</option>
                    <option value="Pour-on">Pour-ons / Sprays</option>
                  </select>
                </div>
              </div>

              {viewMode === "grid" ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(() => {
                    const targetDivisionMap: Record<string, string> = {
                      "human-pharma": "human-pharma",
                      "human-supplements": "human-nutra",
                      "vet-pharma": "vet-pharma",
                      "vet-supplements": "vet-supplements",
                      "ectoparasites": "ectoparasiticides"
                    };
                    const selectedDivName = targetDivisionMap[currentPage];
                    
                    const filtered = PRODUCTS.filter(p => {
                      if (p.division !== selectedDivName) return false;
                      const s = searchQuery.toLowerCase();
                      if (s && !p.name.toLowerCase().includes(s) && !p.composition.toLowerCase().includes(s) && !p.category.toLowerCase().includes(s)) return false;
                      if (formFilter !== "All") {
                        if (formFilter === "Pour-on" && p.form !== "Pour-on" && p.form !== "Spray") return false;
                        if (p.form !== formFilter && formFilter !== "Pour-on") return false;
                      }
                      return true;
                    });

                    if (filtered.length === 0) {
                      return (
                        <div className="col-span-full py-12 text-center text-slate-400">
                          <Info className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                          <span>No formulations match your search criteria. Please try another keyword.</span>
                        </div>
                      );
                    }

                    return filtered.map(p => {
                      const inBasket = inquiryBasket.some(item => item.id === p.id);
                      
                      // Icon Sourcing Function
                      const getProductIcon = (form: string) => {
                        const f = form.toLowerCase();
                        if (f.includes("tablet")) {
                          return <Pill className="w-5 h-5 text-indigo-600 rotate-90 shrink-0" />;
                        } else if (f.includes("capsule")) {
                          return <Pill className="w-5 h-5 text-teal-600 shrink-0" />;
                        } else if (f.includes("injection") || f.includes("infusion")) {
                          return <Activity className="w-5 h-5 text-rose-500 shrink-0" />;
                        } else if (f.includes("liquid") || f.includes("oral") || f.includes("tonic") || f.includes("suspension")) {
                          return <HeartPulse className="w-5 h-5 text-amber-500 shrink-0" />;
                        } else if (f.includes("powder") || f.includes("premix")) {
                          return <SlidersHorizontal className="w-5 h-5 text-emerald-500 shrink-0" />;
                        } else {
                          return <Microscope className="w-5 h-5 text-blue-500 shrink-0" />;
                        }
                      };

                      return (
                        <div 
                          key={p.id} 
                          className="bg-white border border-slate-200 hover:border-emerald-300 rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group relative overflow-hidden text-left"
                        >
                          <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500/50 group-hover:bg-emerald-500 transition-colors"></div>
                          <div className="space-y-3">
                            <div className="flex justify-between items-start gap-2">
                              <div className="p-2.5 bg-slate-50 rounded-xl group-hover:bg-emerald-50 transition">
                                {getProductIcon(p.form)}
                              </div>
                              <span className="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-bold font-mono uppercase tracking-wide shrink-0">
                                {p.form}
                              </span>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-bold text-clinical-blue group-hover:text-emerald-700 transition font-display tracking-tight leading-tight">
                                {p.name}
                              </h4>
                              <p className="text-[11px] italic text-slate-500 mt-1 font-medium leading-relaxed">
                                {p.composition}
                              </p>
                            </div>

                            <div className="pt-2 flex flex-wrap gap-1.5 text-[10px]">
                              <span className="px-2 py-0.5 bg-blue-50 text-clinical-blue rounded-md font-mono font-semibold">
                                {p.packSize}
                              </span>
                              <span className="px-2 py-0.5 bg-slate-50 text-slate-500 rounded-md font-medium">
                                {p.category}
                              </span>
                            </div>
                          </div>

                          <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setQuoteCategory(p.division === 'human-pharma' || p.division === 'human-nutra' ? "Human Bulk Formulations" : "Veterinary Formulations Sourcing");
                                setQuoteMessage(`Requesting official bulk price quotation and dossier availability check for:\n- BRAND: ${p.name}\n- COMPOSITION: ${p.composition}\n- DOSAGE FORM: ${p.form}\n- PACK SIZE: ${p.packSize}`);
                                setIsQuoteModalOpen(true);
                              }}
                              className="text-[10px] font-bold text-slate-500 hover:text-clinical-blue transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <span>Direct Quote</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </button>

                            <button
                              type="button"
                              onClick={() => toggleBasket(p)}
                              className={`px-3 py-1.5 rounded-lg text-[11px] font-extrabold transition flex items-center gap-1 ${
                                inBasket 
                                  ? "bg-emerald-600 text-white" 
                                  : "bg-slate-50 text-clinical-blue border border-slate-200 hover:bg-slate-100"
                              }`}
                            >
                              {inBasket ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                              <span>{inBasket ? "In Basket" : "Sourcing"}</span>
                            </button>
                          </div>
                        </div>
                      );
                    });
                  })()}
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50/50">
                        <th className="py-3 px-4">Brand Name</th>
                        <th className="py-3 px-4">Composition</th>
                        <th className="py-3 px-4">Form</th>
                        <th className="py-3 px-4">Packaging</th>
                        <th className="py-3 px-4">Therapeutic Area</th>
                        <th className="py-3 px-4 text-right">Inquiry</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs text-slate-600">
                      {(() => {
                        const targetDivisionMap: Record<string, string> = {
                          "human-pharma": "human-pharma",
                          "human-supplements": "human-nutra",
                          "vet-pharma": "vet-pharma",
                          "vet-supplements": "vet-supplements",
                          "ectoparasites": "ectoparasiticides"
                        };
                        const selectedDivName = targetDivisionMap[currentPage];
                        
                        const filtered = PRODUCTS.filter(p => {
                          if (p.division !== selectedDivName) return false;
                          const s = searchQuery.toLowerCase();
                          if (s && !p.name.toLowerCase().includes(s) && !p.composition.toLowerCase().includes(s) && !p.category.toLowerCase().includes(s)) return false;
                          if (formFilter !== "All") {
                            if (formFilter === "Pour-on" && p.form !== "Pour-on" && p.form !== "Spray") return false;
                            if (p.form !== formFilter && formFilter !== "Pour-on") return false;
                          }
                          return true;
                        });

                        if (filtered.length === 0) {
                          return (
                            <tr>
                              <td colSpan={6} className="py-12 text-center text-slate-400">
                                <Info className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                                <span>No formulations match your search criteria. Please try another keyword.</span>
                              </td>
                            </tr>
                          );
                        }

                        return filtered.map(p => {
                          const inBasket = inquiryBasket.some(item => item.id === p.id);
                          return (
                            <tr key={p.id} className="hover:bg-slate-50/50 transition">
                              <td className="py-4 px-4 font-bold text-clinical-blue tracking-wide">{p.name}</td>
                              <td className="py-4 px-4 italic font-medium">{p.composition}</td>
                              <td className="py-4 px-4">
                                <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-[10px] font-medium font-mono">
                                  {p.form}
                                </span>
                              </td>
                              <td className="py-4 px-4 text-[11px] font-mono">{p.packSize}</td>
                              <td className="py-4 px-4 font-medium text-slate-500">{p.category}</td>
                              <td className="py-4 px-4 text-right">
                                <button
                                  type="button"
                                  onClick={() => toggleBasket(p)}
                                  className={`px-3 py-1.5 rounded-lg text-[11px] font-bold transition flex items-center gap-1.5 ml-auto ${
                                    inBasket 
                                      ? "bg-emerald-600 hover:bg-emerald-700 text-white shadow-2xs" 
                                      : "bg-blue-50 hover:bg-blue-100 text-clinical-blue border border-blue-100"
                                  }`}
                                >
                                  {inBasket ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                                  {inBasket ? "In Basket" : "Add to inquiry"}
                                </button>
                              </td>
                            </tr>
                          );
                        });
                      })()}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Disclaimer and Registration reminder */}
              <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-2 text-xs text-slate-500 max-w-3xl">
                  <Info className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                  <p>
                    <strong>Global Registration Assistance:</strong> Full technical files compiled under standard ICH guidelines are accessible for wholesale importers. Add products to your Inquiry Basket and submit to request dossiers.
                  </p>
                </div>
                <button
                  onClick={() => setCurrentPage("catalogue")}
                  className="px-4 py-2 bg-clinical-blue hover:bg-blue-800 text-white rounded-lg text-xs font-bold shrink-0 transition"
                >
                  Review Inquiry Basket ({inquiryBasket.length})
                </button>
              </div>

            </div>

          </div>
        )}


        {/* ==================== PAGE: CONTRACT MANUFACTURING ==================== */}
        {currentPage === "contract-mfg" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 text-left">
            <div className="border-b border-slate-200 pb-6 mb-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">OEM & Private Label Services</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">Third-Party & Contract Manufacturing</h1>
              <p className="text-slate-500 text-sm mt-2">World-class WHO-GMP certified high-throughput facilities accommodating custom batches.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-bold text-clinical-blue font-display">State-Of-The-Art Dedicated Facilities</h3>
                <p>
                  Ruskin Chemipharm provides a comprehensive, turn-key manufacturing service. Our sites boast dedicated, completely segregated sections for different pharmaceutical segments, guaranteeing that raw materials are safely handled with no cross-contamination.
                </p>
                <p>
                  We are equipped with automated tablet press machinery, capsule filling machines, high-shear granulators, and high-speed blister packing equipment. Our modern liquid oral compounding lines support deep customization of volumes and flavorings to fit specific geographic preferences.
                </p>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-xs text-slate-700">Flexible Batch Sizing</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-xs text-slate-700">Custom Tooling Design</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-xs text-slate-700">Complete Quality Analysis</span>
                  </div>
                  <div className="p-3 bg-slate-100 rounded-xl flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-xs text-slate-700">Stability Testing Included</span>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-clinical-blue font-display mb-4 flex items-center gap-2">
                    <Factory className="w-5 h-5 text-emerald-600" />
                    Available Dosage Capacities
                  </h4>
                  
                  <div className="space-y-4 text-xs">
                    <div className="border-b border-slate-100 pb-3">
                      <div className="flex justify-between font-bold text-slate-800 mb-1">
                        <span>Tablets (Coated / Enteric / Uncoated)</span>
                        <span className="text-emerald-600">50 Million / Month</span>
                      </div>
                      <p className="text-slate-400">Blister pack, Alu-Alu pack, and loose bulk drum packs.</p>
                    </div>

                    <div className="border-b border-slate-100 pb-3">
                      <div className="flex justify-between font-bold text-slate-800 mb-1">
                        <span>Hard Gelatin Capsules (Size 0, 1, 2)</span>
                        <span className="text-emerald-600">20 Million / Month</span>
                      </div>
                      <p className="text-slate-400">Modern capsule sorting and precise granular micro-dosing.</p>
                    </div>

                    <div className="border-b border-slate-100 pb-3">
                      <div className="flex justify-between font-bold text-slate-800 mb-1">
                        <span>Liquid Orals (Syrups, Suspensions)</span>
                        <span className="text-emerald-600">10 Million Bottles / Month</span>
                      </div>
                      <p className="text-slate-400">PET bottles, glass bottles ranging from 50ml to 1L.</p>
                    </div>

                    <div className="border-b border-slate-100 pb-3">
                      <div className="flex justify-between font-bold text-slate-800 mb-1">
                        <span>Veterinary Injectables (Aqueous & Oil)</span>
                        <span className="text-emerald-600">5 Million Vials / Month</span>
                      </div>
                      <p className="text-slate-400">Sterile fill cleanroom, Class-100 aseptic environment hoods.</p>
                    </div>

                    <div>
                      <div className="flex justify-between font-bold text-slate-800 mb-1">
                        <span>Ectoparasiticide Pour-ons & Sprays</span>
                        <span className="text-emerald-600">2 Million Liters / Month</span>
                      </div>
                      <p className="text-slate-400">Manufactured in a strictly isolated, automated chemical unit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Turnkey process steps */}
            <div className="bg-[#0A2540] text-white p-8 md:p-10 rounded-3xl mb-12 relative overflow-hidden">
              <h3 className="text-xl font-bold font-display mb-8 text-center">Our Turn-Key Onboarding Cycle</h3>
              
              <div className="grid md:grid-cols-4 gap-6 text-xs text-center">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto">1</div>
                  <strong className="block text-sm text-emerald-400">Feasibility & Formulation</strong>
                  <p className="text-slate-300 leading-relaxed">Reviewing API requirements, custom taste matching, and package specs.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto">2</div>
                  <strong className="block text-sm text-emerald-400">Analytical Development</strong>
                  <p className="text-slate-300 leading-relaxed">Pilot batch preparation, stability checking at various climatic zones, and assay testing.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto">3</div>
                  <strong className="block text-sm text-emerald-400">Regulatory File Filing</strong>
                  <p className="text-slate-300 leading-relaxed">Assisting in CTD/ACTD registration documentation filing for export clearance.</p>
                </div>
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center mx-auto">4</div>
                  <strong className="block text-sm text-emerald-400">Mass Production & Logistcs</strong>
                  <p className="text-slate-300 leading-relaxed">High-efficiency GMP manufacturing and custom packaging, delivered FOB to port.</p>
                </div>
              </div>
            </div>

          </div>
        )}


        {/* ==================== PAGE: QUALITY & REGULATORY ==================== */}
        {currentPage === "quality-regulatory" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 text-left">
            <div className="border-b border-slate-200 pb-6 mb-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Our Absolute Mandate</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">Quality & Regulatory Affairs</h1>
              <p className="text-slate-500 text-sm mt-2">Stringent QA/QC parameters, ISO certifications, and dossiers registration support.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
              
              <div className="lg:col-span-7 space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-bold text-clinical-blue font-display">Uncompromising Analytical Quality Control</h3>
                <p>
                  At <strong>Ruskin Chemipharm</strong>, quality is not just a final audit step—it is integrated into every phase of manufacturing. From testing incoming raw API chemical elements using calibrated High-Performance Liquid Chromatography (HPLC) instrumentation to real-time particulate auditing in cleanrooms, our mandate is perfect safety.
                </p>
                
                <h4 className="text-base font-bold text-slate-900 font-display">In-house Testing Capabilities Include:</h4>
                <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium">
                  <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>HPLC & Gas Chromatography</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Microbiological Testing Laboratories</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Dissolution & Disintegration Testers</span>
                  </div>
                  <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-xl">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Stability Chambers (Zone IV-B compliance)</span>
                  </div>
                </div>

                <p>
                  Our regulatory affairs division has a highly successful track record filing international dossiers. We compile comprehensive Chemistry, Manufacturing, and Controls (CMC) packages in standard Common Technical Document (CTD) and ASEAN Common Technical Document (ACTD) layouts to facilitate registrations with your country's Ministry of Health.
                </p>
              </div>

              <div className="lg:col-span-5 space-y-6">
                <div className="bg-[#0A2540] text-white p-6 rounded-2xl shadow-md border border-slate-800">
                  <h4 className="font-bold text-emerald-400 font-display text-sm mb-4">Official Certifications Held:</h4>
                  
                  <div className="space-y-4 text-xs font-mono">
                    <div className="flex items-start gap-3 border-b border-blue-900 pb-3">
                      <Award className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white text-sm">WHO-GMP Standard</strong>
                        <span className="text-slate-400">Good Manufacturing Practices Certificate</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 border-b border-blue-900 pb-3">
                      <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white text-sm">ISO 9001:2015</strong>
                        <span className="text-slate-400">Quality Management System Certified</span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Microscope className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block text-white text-sm">GLP Guidelines</strong>
                        <span className="text-slate-400">Good Laboratory Practice standards compliance</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6">
                  <h4 className="font-bold text-emerald-800 font-display text-sm mb-2">Registration Documents</h4>
                  <p className="text-xs text-emerald-700 leading-relaxed mb-4">
                    Ruskin Chemipharm provides dynamic support for registrars. We supply Certificate of Analysis (COA), Free Sale Certificate (FSC), Certificate of Pharmaceutical Product (COPP), and Method of Analysis (MOA).
                  </p>
                  <button 
                    onClick={() => setCurrentPage("contact")}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition"
                  >
                    Contact Regulatory Director
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}


        {/* ==================== PAGE: EXPORT MARKETS ==================== */}
        {currentPage === "export-markets" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 text-left">
            <div className="border-b border-slate-200 pb-6 mb-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Global Coverage</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">Export Markets & Logistics</h1>
              <p className="text-slate-500 text-sm mt-2">A strong supply network delivering human and animal formulations to over 40 countries.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-6 space-y-6 text-sm text-slate-600 leading-relaxed">
                <h3 className="text-2xl font-bold text-clinical-blue font-display">A Trusted International Sourcing Partner</h3>
                <p>
                  Ruskin Chemipharm operates an experienced export logistics desk. We safely ship pharmaceutical formulations to major ocean ports and airports, fully conforming to refrigerated cold-chain regulations for temperature-sensitive liquid formulations and injectables.
                </p>
                <p>
                  We are particularly proficient in managing custom inspections, packing list generations, and ocean freight logistics to ensure transit timelines are met. Our export batches utilize double-walled master cartons with internal thermal barriers to safeguard products during hot climate transits.
                </p>
                
                <div className="border-l-4 border-emerald-500 pl-4 bg-emerald-50/40 py-3 rounded-r-xl">
                  <span className="text-xs font-bold text-emerald-800 block">Dossier Customization:</span>
                  <span className="text-xs text-emerald-700 block mt-0.5">We custom format stability dossiers for registration in Zone IV-A and Zone IV-B (hot/humid) requirements.</span>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                  <h4 className="font-bold text-clinical-blue font-display mb-4 flex items-center gap-1.5">
                    <Globe className="w-5 h-5 text-emerald-600" />
                    Focus Export Regions
                  </h4>

                  <div className="grid sm:grid-cols-2 gap-4 text-xs text-slate-700">
                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">🌍</span>
                        <span>Africa (Sub-Saharan & West)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇺🇬 Uganda</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇰🇪 Kenya</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇳🇬 Nigeria</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇬🇭 Ghana</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇨🇮 Côte d'Ivoire</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">🌏</span>
                        <span>Southeast Asia & ASEAN</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇵🇭 Philippines</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇻🇳 Vietnam</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇰🇭 Cambodia</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇲🇲 Myanmar</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇱🇦 Laos</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">🏛️</span>
                        <span>CIS & Eastern Europe</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇺🇿 Uzbekistan</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇬🇪 Georgia</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇦🇿 Azerbaijan</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇰🇿 Kazakhstan</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇹🇲 Turkmenistan</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">🏝️</span>
                        <span>Latin America (LatAm)</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇵🇪 Peru</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇧🇴 Bolivia</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇨🇱 Chile</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇨🇴 Colombia</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇩🇴 Dominican Rep.</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">🕌</span>
                        <span>Middle East & GCC</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇾🇪 Yemen</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇴🇲 Oman</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇯🇴 Jordan</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇮🇶 Iraq</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇱🇧 Lebanon</span>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-50/50 hover:bg-slate-50 rounded-xl border border-slate-150 transition">
                      <div className="flex items-center gap-2 font-bold text-slate-950 mb-2">
                        <span className="text-base">💬</span>
                        <span>Language-Specific Hubs</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇫🇷 French West Africa</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇵🇹 Portuguese Sourcing</span>
                        <span className="px-2 py-1 bg-white border border-slate-100 rounded-lg text-[10px] font-medium flex items-center gap-1">🇪🇸 Spanish Documentation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Logistics metrics */}
            <div className="bg-[#0A2540] text-white p-8 rounded-3xl grid sm:grid-cols-3 gap-8 text-center text-xs">
              <div>
                <strong className="block text-2xl text-emerald-400 font-mono font-bold">14 to 21 Days</strong>
                <span className="text-slate-300 block mt-1">Average production lead time for repeating bulk formulations.</span>
              </div>
              <div className="border-t sm:border-t-0 sm:border-l sm:border-r border-blue-900/60 py-4 sm:py-0 px-4">
                <strong className="block text-2xl text-emerald-400 font-mono font-bold">100% Secure</strong>
                <span className="text-slate-300 block mt-1">Temperature controlled validation logs supplied upon arrival.</span>
              </div>
              <div>
                <strong className="block text-2xl text-emerald-400 font-mono font-bold">FOB / CIF</strong>
                <span className="text-slate-300 block mt-1">Flexible international incoterms supported across all major ports.</span>
              </div>
            </div>

          </div>
        )}


        {/* ==================== PAGE: PRODUCT CATALOGUE ==================== */}
        {currentPage === "catalogue" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 text-left">
            <div className="border-b border-slate-200 pb-6 mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Consolidated B2B Sourcing Desk</span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">Full Catalogue & Inquiry</h1>
                <p className="text-slate-500 text-sm mt-2">Download Ruskin's complete list of registered formulations or coordinate bulk inquiries.</p>
              </div>

              {/* Download Brochure action */}
              <button
                onClick={triggerCatalogDownload}
                disabled={isDownloading}
                className="px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 text-xs uppercase tracking-wide flex items-center gap-2 transition duration-200 self-start md:self-auto"
              >
                {isDownloading ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    <span>Compiling Catalogue PDF...</span>
                  </>
                ) : downloadSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Downloaded successfully!</span>
                  </>
                ) : (
                  <>
                    <DownloadCloud className="w-4 h-4 animate-bounce" />
                    <span>Download Product Catalogue</span>
                  </>
                )}
              </button>
            </div>

            {/* Split Sourcing Basket and Full Catalog Table */}
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Side: Consolidated Catalog Index (7 cols) */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-5 md:p-6 shadow-xs">
                <h3 className="text-base font-bold text-clinical-blue font-display mb-4">Complete Formulation Register ({PRODUCTS.length} Items)</h3>
                <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                  Browse or search our full product inventory. Add targeted segments to your Inquiry Basket on the right side to coordinate pricing.
                </p>

                {/* Filterable dynamic catalog list inside catalog */}
                <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                  {PRODUCTS.map(p => {
                    const inBasket = inquiryBasket.some(item => item.id === p.id);
                    return (
                      <div key={p.id} className="border border-slate-100 rounded-xl p-4 hover:border-blue-100 bg-slate-50/40 hover:bg-white transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <strong className="text-xs text-clinical-blue tracking-wide">{p.name}</strong>
                            <span className={`text-[8px] font-bold uppercase px-1.5 py-0.5 rounded ${
                              p.division === 'human-pharma' || p.division === 'human-nutra' 
                                ? 'bg-blue-50 text-clinical-blue' 
                                : 'bg-green-50 text-emerald-800'
                            }`}>
                              {p.division.replace('-', ' ')}
                            </span>
                          </div>
                          <p className="text-[11px] italic text-slate-600">{p.composition}</p>
                          <p className="text-[10px] text-slate-400 font-medium">Form: {p.form} • Pack Size: {p.packSize}</p>
                        </div>

                        <button
                          onClick={() => toggleBasket(p)}
                          className={`px-3 py-1 rounded-lg text-[10px] font-bold transition flex items-center gap-1.5 shrink-0 ${
                            inBasket 
                              ? "bg-emerald-600 text-white shadow-2xs" 
                              : "bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200/60"
                          }`}
                        >
                          {inBasket ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          {inBasket ? "In Basket" : "Add Sourcing"}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Sourcing Inquiry Basket (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Inquiry Basket state card */}
                <div className="bg-white border-2 border-dashed border-blue-200 rounded-2xl p-5 md:p-6 shadow-xs relative">
                  <h3 className="text-sm font-bold text-clinical-blue uppercase tracking-wider mb-4 flex items-center gap-2">
                    <FileSpreadsheet className="w-4.5 h-4.5 text-emerald-600" />
                    Inquiry Basket Coordination
                  </h3>

                  {inquiryBasket.length === 0 ? (
                    <div className="py-12 text-center text-slate-400 text-xs flex flex-col items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-300">
                        <Plus className="w-5 h-5" />
                      </div>
                      <p className="max-w-xs leading-relaxed">
                        Your inquiry basket is currently empty. Scroll the left list or division tables and click <strong>Add Sourcing</strong> to bundle wholesale price requests.
                      </p>
                    </div>
                  ) : (
                    <div>
                      {/* Cart items listing */}
                      <div className="space-y-2 mb-6 max-h-[220px] overflow-y-auto pr-1">
                        {inquiryBasket.map(item => (
                          <div key={item.id} className="flex justify-between items-center p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs">
                            <div className="truncate pr-3">
                              <span className="font-bold text-slate-800 text-[11px] block">{item.name}</span>
                              <span className="text-[10px] text-slate-400 font-mono truncate block">{item.composition}</span>
                            </div>
                            <button 
                              onClick={() => removeFromBasket(item.id)}
                              className="p-1 text-slate-300 hover:text-red-500 rounded hover:bg-red-50 transition"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ))}
                      </div>

                      {/* Clear selection option */}
                      <button 
                        onClick={() => setInquiryBasket([])}
                        className="text-[10px] font-bold text-red-500 hover:text-red-600 block mb-6 uppercase"
                      >
                        Clear All Selected Products
                      </button>

                      {/* Submit Inquiry Form inside Cart */}
                      {!inquirySubmitted ? (
                        <form onSubmit={handleInquirySubmit} className="space-y-3 border-t border-slate-100 pt-5 text-xs">
                          <h4 className="font-bold text-slate-700 mb-2">Trade Contact Details</h4>
                          
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">Full Name *</label>
                              <input 
                                type="text" 
                                required
                                value={inquiryName}
                                onChange={(e) => setInquiryName(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white"
                                placeholder="Dr. / Mr. / Ms."
                              />
                            </div>
                            <div>
                              <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">Corporate Email *</label>
                              <input 
                                type="email" 
                                required
                                value={inquiryEmail}
                                onChange={(e) => setInquiryEmail(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white"
                                placeholder="name@company.com"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">Company Name *</label>
                              <input 
                                type="text" 
                                required
                                value={inquiryCompany}
                                onChange={(e) => setInquiryCompany(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white"
                                placeholder="Wholesale Ltd."
                              />
                            </div>
                            <div>
                              <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">Target Country *</label>
                              <input 
                                type="text" 
                                required
                                value={inquiryCountry}
                                onChange={(e) => setInquiryCountry(e.target.value)}
                                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white"
                                placeholder="Nigeria / Myanmar"
                              />
                            </div>
                          </div>

                          <div>
                            <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">WhatsApp / Telegram Phone</label>
                            <input 
                              type="text" 
                              value={inquiryPhone}
                              onChange={(e) => setInquiryPhone(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white"
                              placeholder="+234..."
                            />
                          </div>

                          <div>
                            <label className="block text-slate-500 text-[10px] font-bold mb-1 uppercase">Inquiry Description</label>
                            <textarea 
                              rows={2}
                              value={inquiryMessage}
                              onChange={(e) => setInquiryMessage(e.target.value)}
                              className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-clinical-blue focus:bg-white resize-none"
                              placeholder="Required volumes, packing requests, or registration timelines..."
                            ></textarea>
                          </div>

                          <button 
                            type="submit"
                            className="w-full py-3 bg-clinical-blue hover:bg-blue-800 text-white font-bold rounded-xl transition uppercase tracking-wider text-[11px]"
                          >
                            Submit Wholesale Sourcing Request
                          </button>
                        </form>
                      ) : (
                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 text-center text-xs space-y-4">
                          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                          <h4 className="font-bold text-emerald-800 text-sm">Corporate Inquiry Dispatched!</h4>
                          <p className="text-emerald-700 leading-relaxed">
                            Thank you, <strong>{inquiryName}</strong>. Your structured trade list containing <strong>{inquiryBasket.length} formulation segments</strong> has been successfully forwarded to our export director at <strong>{inquiryCompany}</strong>.
                          </p>
                          <button
                            onClick={() => {
                              setInquirySubmitted(false);
                              setInquiryBasket([]);
                            }}
                            className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg text-[10px] transition"
                          >
                            New Inquiry Session
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>

            </div>
          </div>
        )}


        {/* ==================== PAGE: CONTACT US ==================== */}
        {currentPage === "contact" && (
          <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-10 text-left">
            <div className="border-b border-slate-200 pb-6 mb-10">
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-mono">Get in Touch</span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-clinical-blue font-display mt-2">Contact Trade Desk</h1>
              <p className="text-slate-500 text-sm mt-2">Connect with domestic trade and international export divisions directly.</p>
            </div>

            <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
              
              {/* Contact Information (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
                  <h3 className="text-lg font-bold text-clinical-blue font-display border-b border-slate-100 pb-3">Ruskin HQ & Factories</h3>
                  
                  <div className="flex items-start gap-3.5 text-xs text-slate-600">
                    <MapPin className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm mb-1">Corporate Headquarters</strong>
                      <span>Ruskin Chemipharm Limited</span> <br />
                      <span>4/A, Bhangwadi Shopping Arcade, Kalbadevi Road,</span> <br />
                      <span>Mumbai – 400 002, India.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs text-slate-600">
                    <Factory className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm mb-1">Manufacturing Plant Unit</strong>
                      <span>Plot No. 24, G.I.D.C. Industrial Estate,</span> <br />
                      <span>Ankleshwar, Bharuch, Gujarat - 393002, India.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs text-slate-600">
                    <Mail className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm mb-1">Email Communication</strong>
                      <span>General Trade: <a href="mailto:info@ruskinchemipharm.com" className="text-clinical-blue hover:underline">info@ruskinchemipharm.com</a></span> <br />
                      <span>International Exports: <a href="mailto:exports@ruskinchemipharm.com" className="text-clinical-blue hover:underline">exports@ruskinchemipharm.com</a></span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5 text-xs text-slate-600">
                    <Phone className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm mb-1">Phone Connectivity</strong>
                      <span className="font-bold text-slate-700 block mb-1">Mobile No:</span>
                      <ul className="space-y-1.5 text-slate-600 mb-3">
                        <li>
                          <span>Krishnakumar Iyer: </span>
                          <a href="tel:+919322226307" className="hover:text-clinical-blue font-bold text-slate-900">+91-9322226307</a>
                        </li>
                        <li>
                          <span>Yash Jhaveri: </span>
                          <a href="tel:+919819826611" className="hover:text-clinical-blue font-bold text-slate-900">+91-98198 26611</a>
                        </li>
                      </ul>
                      <div className="pt-2 border-t border-slate-100 text-slate-400 text-[11px] space-y-0.5">
                        <span>Wholesale Hotline: +91 22 4978 4541</span> <br />
                        <span>Fax coordinates: +91 22 4978 4542</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated Google Map Widget */}
                <div className="bg-slate-900 text-white rounded-2xl p-6 border border-slate-800 relative overflow-hidden h-48 flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=600&auto=format&fit=crop" 
                      alt="Mumbai Global Shipping Port Map" 
                      className="w-full h-full object-cover opacity-20"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="relative z-10 text-center text-xs space-y-2">
                    <MapPin className="w-8 h-8 text-emerald-400 mx-auto animate-bounce" />
                    <strong className="block text-sm">Ankleshwar GIDC & Mumbai HQ Linked</strong>
                    <span className="text-slate-400 font-mono">Sourcing Gateway to JNPT Seaport Terminal</span>
                  </div>
                </div>
              </div>

              {/* Inquiry Form (7 cols) */}
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
                <h3 className="text-lg font-bold text-clinical-blue font-display mb-2">Detailed Sourcing Form</h3>
                <p className="text-xs text-slate-500 mb-6">Your inquiry will instantly compile and routing directories will transmit your message.</p>
                
                <form onSubmit={handleInquirySubmit} className="space-y-4 text-xs">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Contact Person *</label>
                      <input 
                        type="text" 
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white"
                        placeholder="e.g. Dr. Arthur Pendelton"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Official Email *</label>
                      <input 
                        type="email" 
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white"
                        placeholder="arthur@healthdistributors.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Company Name *</label>
                      <input 
                        type="text" 
                        required
                        value={inquiryCompany}
                        onChange={(e) => setInquiryCompany(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white"
                        placeholder="Pendelton Pharma Group"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Country *</label>
                      <input 
                        type="text" 
                        required
                        value={inquiryCountry}
                        onChange={(e) => setInquiryCountry(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white"
                        placeholder="Sourcing Country"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Phone / Telegram Mobile</label>
                      <input 
                        type="text" 
                        value={inquiryPhone}
                        onChange={(e) => setInquiryPhone(e.target.value)}
                        className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white"
                        placeholder="+44 7911 123456"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-500 font-bold mb-1.5 uppercase">Inquiry Category</label>
                      <select className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue text-slate-600">
                        <option>Human Bulk Formulations</option>
                        <option>Veterinary Formulations Sourcing</option>
                        <option>Feed Additive Wholesale</option>
                        <option>Contract Private Labeling (OEM)</option>
                        <option>Regulatory Dossier (CTD) request</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-500 font-bold mb-1.5 uppercase">Technical Message / Sourcing Scope</label>
                    <textarea 
                      rows={4}
                      value={inquiryMessage}
                      onChange={(e) => setInquiryMessage(e.target.value)}
                      className="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-clinical-blue focus:bg-white resize-none"
                      placeholder="Specify list of APIs, target strengths, required quantities, and target registration timelines..."
                    ></textarea>
                  </div>

                  {/* Inquiry Basket attachment notification */}
                  {inquiryBasket.length > 0 && (
                    <div className="p-3 bg-emerald-50 border border-emerald-100 rounded-xl text-[11px] text-emerald-800 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>
                        <strong>Inquiry Attachment:</strong> Your {inquiryBasket.length} selected products will be automatically bundled with this message.
                      </span>
                    </div>
                  )}

                  <button 
                    type="submit"
                    className="w-full py-3.5 bg-clinical-blue hover:bg-blue-800 text-white font-bold rounded-xl transition uppercase tracking-wider text-xs shadow-md shadow-blue-900/10"
                  >
                    Send Sourcing Message
                  </button>
                </form>
              </div>

            </div>
          </div>
        )}

      </main>


      {/* 5. FLOATING WHATSAPP CHAT DESK HELPER */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {chatOpen && (
          <div className="w-80 h-96 bg-white border border-slate-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-[#0D8249] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-left">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold relative">
                  R
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 border-2 border-[#0D8249] rounded-full"></span>
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-none">Global Exports Desk</h4>
                  <span className="text-[9px] text-emerald-200 block mt-0.5">Ruskin Chemipharm Sourcing</span>
                </div>
              </div>
              <button onClick={() => setChatOpen(false)} className="text-white hover:opacity-75 transition">
                <X className="w-4.5 h-4.5" />
              </button>
            </div>

            {/* Messages Thread */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-slate-50 text-[11px] text-left">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-xl px-3 py-2 ${msg.sender === 'user' ? 'bg-emerald-600 text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-2xs'}`}>
                    <p className="leading-relaxed">{msg.text}</p>
                    <span className={`block text-[8px] text-right mt-1 ${msg.sender === 'user' ? 'text-emerald-200' : 'text-slate-400'}`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSendChatMessage} className="p-2 border-t border-slate-100 bg-white flex gap-1.5">
              <input 
                type="text"
                placeholder="Type exports query..."
                value={chatMessage}
                onChange={(e) => setChatMessage(e.target.value)}
                className="flex-1 text-xs px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-emerald-600 focus:bg-white"
              />
              <button type="submit" className="p-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl transition">
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        )}

        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="p-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center relative group"
        >
          <div className="absolute right-full mr-3 bg-[#0A2540] text-white text-[10px] font-bold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition whitespace-nowrap shadow-md pointer-events-none">
            Connect Sourcing Manager
          </div>
          <MessageCircle className="w-6 h-6 animate-pulse" />
        </button>
      </div>


      {/* 6. COMPREHENSIVE FOOTER */}
      <footer className="bg-[#05111D] text-slate-400 text-xs py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-left">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center cursor-pointer select-none group" onClick={() => setCurrentPage("home")}>
              <img 
                src="/logo-footer.svg" 
                alt="Ruskin Chemipharm" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="leading-relaxed text-slate-500 text-[11px]">
              Leading exporters and manufacturers of high-grade Human Pharmaceuticals, Human Supplements, Veterinary Pharmaceuticals, Veterinary Feed Supplements, and Ectoparasiticides. Registered FDA vendor.
            </p>
            <div className="text-[10px] font-mono text-slate-500 space-y-1">
              <div>WHO-GMP Cert No: COPP/WHO/GMP/2026/041</div>
              <div>ISO Registered: ISO 9001:2015</div>
            </div>
          </div>

          {/* Sourcing Divisions Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Therapeutic Divisions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage("human-pharma")} className="hover:text-emerald-400 transition cursor-pointer">Human Pharmaceuticals</button></li>
              <li><button onClick={() => setCurrentPage("human-supplements")} className="hover:text-emerald-400 transition cursor-pointer">Human Supplements</button></li>
              <li><button onClick={() => setCurrentPage("vet-pharma")} className="hover:text-emerald-400 transition cursor-pointer">Veterinary Pharmaceuticals</button></li>
              <li><button onClick={() => setCurrentPage("vet-supplements")} className="hover:text-emerald-400 transition cursor-pointer">Veterinary Feed Supplements</button></li>
              <li><button onClick={() => setCurrentPage("ectoparasites")} className="hover:text-[#FA5C7C] transition text-rose-400 cursor-pointer">Ectoparasiticides Block</button></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Corporate Actions</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setCurrentPage("about")} className="hover:text-emerald-400 transition">About Company Profile</button></li>
              <li><button onClick={() => setCurrentPage("contract-mfg")} className="hover:text-emerald-400 transition">Contract Private Labeling (OEM)</button></li>
              <li><button onClick={() => setCurrentPage("quality-regulatory")} className="hover:text-emerald-400 transition">Quality Assurance & Regulatory</button></li>
              <li><button onClick={() => setCurrentPage("export-markets")} className="hover:text-emerald-400 transition">Global Export Markets</button></li>
              <li><button onClick={() => setCurrentPage("catalogue")} className="hover:text-emerald-400 transition">Wholesale Sourcing Basket ({inquiryBasket.length})</button></li>
            </ul>
          </div>

          {/* Contact coordinates */}
          <div className="space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-wider">Headquarters Contact</h4>
            <p className="leading-relaxed text-[11px] text-slate-500">
              4/A, Bhangwadi Shopping Arcade, Kalbadevi Road, Mumbai – 400 002, India.
            </p>
            <div className="space-y-2 text-[11px]">
              <div>
                <span className="text-slate-300 font-bold block mb-1">Mobile No:</span>
                <span className="block">Krishnakumar Iyer: <a href="tel:+919322226307" className="hover:text-emerald-400 text-slate-300 font-medium">+91-9322226307</a></span>
                <span className="block">Yash Jhaveri: <a href="tel:+919819826611" className="hover:text-emerald-400 text-slate-300 font-medium">+91-98198 26611</a></span>
              </div>
              <div className="pt-2 border-t border-slate-800/60 text-slate-500 space-y-0.5">
                <div>Hotline: +91 22 4978 4541</div>
                <div>Email: <a href="mailto:exports@ruskinchemipharm.com" className="hover:text-white underline text-slate-400">exports@ruskinchemipharm.com</a></div>
              </div>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 lg:px-6 pt-12 mt-12 border-t border-slate-800/60 text-center text-[10px] text-slate-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ruskin Chemipharm Limited. All international copy and formulation dossiers protected under standard Trade IP laws.</p>
          <div className="flex gap-4">
            <button onClick={() => setCurrentPage("quality-regulatory")} className="hover:underline">Dossier Policies</button>
            <span>•</span>
            <button onClick={() => setCurrentPage("contact")} className="hover:underline">Wholesale Sourcing Policies</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

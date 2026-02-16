import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Users,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  Star,
  Target,
  Zap,
} from "lucide-react";
import Footer from "../Footer/Footer";
import { NavLink } from "react-router-dom";
import invideo from "./Video/invideo.mp4";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);
  const slides = [
    {
      text: "Save Money",
      subtext: "Efficiency Savings for the GPs and the Practice",
      image:
        "https://www.clinicalsupportsolutions.co.uk/storage/app/uploads/public/667/3f0/a68/6673f0a68af27438749031.jpg",
    },
    {
      text: "Smart Savings in Primary Care ",
      subtext: "Quick ways for GPs to cut costs and boost efficiency.",
      image:
        "https://images.pexels.com/photos/5452190/pexels-photo-5452190.jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation observer for sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  // Counter animation logic
  const counterSectionRef = useRef(null);
  const counterRefs = useRef([]);

  useEffect(() => {
    const counters = counterRefs.current;
    const speed = 200;

    const animateCounter = (counter) => {
      const target = +counter.dataset.target;
      let count = +counter.innerText.replace("%", "");
      const increment = target / speed;

      const updateCount = () => {
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + "%";
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + "%";
        }
      };

      requestAnimationFrame(updateCount);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            counters.forEach((counter) => {
              if (!counter.classList.contains("animated")) {
                counter.classList.add("animated");
                animateCounter(counter);
              }
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of section is visible
    );

    if (counterSectionRef.current) {
      observer.observe(counterSectionRef.current);
    }

    return () => {
      if (counterSectionRef.current) {
        observer.unobserve(counterSectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Hero Section with Slider */}
        <section
          id="home"
          className="bg-cover bg-center bg-no-repeat relative overflow-hidden py-20 mt-[100px] transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentSlide].image})`,
            backgroundAttachment: "fixed",
          }}
        >
          <div className="absolute inset-0 bg-blue-700 bg-opacity-20 z-0"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col items-start justify-center min-h-[60vh] text-left">
              <div className="space-y-6">
                <h1
                  className={`text-2xl sm:text-4xl md:text-6xl font-bold text-white leading-tight transition-opacity duration-700 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)",
                  }}
                >
                  {slides[currentSlide].text}
                </h1>
                <p
                  className={`text-base sm:text-xl md:text-2xl text-white transition-opacity duration-700 ${
                    fade ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)",
                  }}
                >
                  {slides[currentSlide].subtext}
                </p>
                <NavLink
                  to="/about"
                  className="inline-flex items-center gap-2 hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-700 bg-blue-600 text-white px-6 py-3 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-700 transition-colors duration-300"
                >
                  Find Out More
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </NavLink>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-all duration-300 ${
                    currentSlide === index
                      ? "bg-blue-600 scale-110"
                      : "bg-gray-300"
                  }`}
                  onClick={() => {
                    setFade(false);
                    setTimeout(() => {
                      setCurrentSlide(index);
                      setFade(true);
                    }, 100);
                  }}
                ></div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Support Section */}
        <section
          id="featured-support"
          className="py-24 bg-gradient-to-b from-gray-50 to-gray-100"
        >
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">
                    About Clinical Prescribing Services
                  </h2>
                  <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl">
                    A multi-award winning dynamic healthcare organisation
                    specialising in clinical services
                  </p>
                  <p className="mt-4 text-base text-gray-900 font-light leading-relaxed max-w-4xl">
                    Clinical Prescribing services offer a range of services
                    managed by Advanced Prescribing Clinical aiming at improving
                    quality as well as delivering cost saving initiatives for
                    the GP Practice.
                  </p>
                  <p className="mt-4 text-base text-gray-900 font-light leading-relaxed max-w-4xl">
                    Key Areas of Service Telephone triage of ‘on the day’
                    appointments Providing Face-2-Face appointments Medication
                    Optimisation QIPP / Cost saving initiatives (de-prescribing,
                    effective medication management adherence and prescription
                    switching) Local enhanced CCG lead incentivised schemes. QOF
                    Targets
                  </p>
                  <p className="mt-4 text-base text-gray-900 font-light leading-relaxed max-w-4xl">
                    Telephone triaging on the day which includes Missing
                    Medication Preparation/Issuing MED3’s after a Patient
                    consultation Contraceptive reviews Medication reviews
                    (including annual, ad hoc reviews like Depression
                    medication) Acute Medication requests Face 2 Face
                    Appointments Providing face-2-face appointment for Minor
                    Aliments clinics Chronic disease management clinics
                    Medication Reviews in the following areas: Polypharmacy
                    Clinics – STOPP (screening tool for older people’s
                    potentially inappropriate prescriptions)/START (screening
                    tool to alert doctors to right/appropriate treatments)
                    identified patients Medication Optimisation Providing cost
                    saving initiatives such as de-prescribing, effective
                    medication management adherence and prescription switching.
                    Actioning clinical letters Repeat Reauthorisation
                    Care/nursing homes medication querie
                  </p>
                </div>
                {/* Right Column: Video */}
                <div className="relative flex items-start justify-center">
                  <div
                    className="relative w-full  max-w-4xl rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.2)] overflow-hidden border-4 border-white animate-fade-in-up"
                    data-aos="slide-up"
                  >
                    <video
                      className="w-full h-auto md:h-[500px] object-cover rounded-2xl"
                      controls
                      loop
                      muted
                      playsInline
                    >
                      <source src={invideo} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">
                Featured In
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                Our work has been celebrated by top-tier publications for
                driving innovation in healthcare.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/images.png"
                    alt="Featured In 1"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />

                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Recognized for innovative healthcare solutions in leading
                    industry publications.
                  </p>
                </div>
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/m.jpg"
                    alt="Featured In 2"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Highlighted for advancing medical technology in top
                    journals.
                  </p>
                </div>
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/10/h.jpg"
                    alt="Featured In 3"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Featured for excellence in patient care and innovation.
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 tracking-tight">
                We Proudly Support
              </h2>
              <p className="mt-4 text-lg text-gray-600 font-medium leading-relaxed max-w-3xl mx-auto">
                We collaborate with leading organizations to advance healthcare
                and support communities.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/11/pharma.jpg"
                    alt="Support 1"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Partnering with pharmaceutical leaders to enhance treatment
                    outcomes.
                  </p>
                </div>
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2024/11/nhs.jpg"
                    alt="Support 2"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Supporting the NHS to deliver world-class healthcare
                    services.
                  </p>
                </div>
                <div className="flex flex-col items-center group bg-white rounded-xl p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2025/06/doctors_in_distress_logo.jpeg"
                    alt="Support 3"
                    className="h-16 max-w-full object-contain mb-4 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <p className="text-gray-900 font-light text-base leading-relaxed text-center">
                    Backing initiatives for doctor well-being and mental health
                    support.
                  </p>
                </div>
              </div>
              <div className="mt-10">
                <NavLink
                  to="/contact"
                  className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                >
                  Join Our Mission
                </NavLink>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section id="services" className="animate-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services and Support
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive healthcare solutions for modern practices
              </p>
            </div>
            <div className="space-y-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative w-full max-w-lg group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="https://i.pinimg.com/1200x/05/60/3d/05603d9cb4fb9cecc023b08be966b4eb.jpg"
                        alt="Clinical Pharmacist Support"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-sm font-bold text-[#3b97d0]">
                        Clinical Support
                      </p>
                      <p className="text-xs text-gray-600">
                        Pharmacist Expertise
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Clinical Pharmacist Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our experienced pharmacists provide remote and on-site
                    support to optimize medication management, improve patient
                    outcomes, and reduce prescribing costs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Medication reviews and optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Clinical decision support</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Chronic disease management</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    PCN Management and Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We provide tailored solutions to streamline Primary Care
                    Network operations, including workforce planning,
                    compliance, and performance optimization.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Streamlined workforce integration</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Compliance and governance support</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-lg group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="https://www.clinicalsupportsolutions.co.uk/storage/app/uploads/public/667/427/389/6674273896438593080114.jpg"
                        alt="PCN Management and Support"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-sm font-bold text-[#3b97d0]">
                        PCN Solutions
                      </p>
                      <p className="text-xs text-gray-600">
                        Operational Excellence
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <div className="relative w-full max-w-lg group">
                    <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                        alt="GP ARRS"
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                    <div
                      className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <p className="text-sm font-bold text-[#3b97d0]">
                        GP ARRS
                      </p>
                      <p className="text-xs text-gray-600">
                        Workforce Solutions
                      </p>
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    GP ARRS
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our cost-neutral ARRS GP workforce solution simplifies
                    recruitment, training, and integration, ensuring seamless
                    support for PCNs.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Cost-neutral recruitment</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span>Full compliance and training</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Digital Innovation Section */}
        <section className="animate-section py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Digital Innovation in Healthcare
              </h2>
              <p className="text-xl text-blue-100">
                Embracing technology to transform patient care
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border hover:translate-y-[-10px] drop-shadow-sm border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Zap className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Telemedicine Solutions
                </h3>
                <p className="text-blue-100 text-center">
                  Remote consultations and digital prescriptions for enhanced
                  patient access.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl hover:translate-y-[-10px] drop-shadow-sm p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Target className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Data Analytics
                </h3>
                <p className="text-blue-100 text-center">
                  Advanced analytics to optimize prescribing patterns and
                  patient outcomes.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border hover:translate-y-[-10px] shadow-slate-300 border-white/20 hover:border-blue-400/50 transition-all duration-300">
                <Users className="w-12 h-12 text-blue-400 mb-6 mx-auto" />
                <h3 className="text-xl font-bold mb-4 text-center">
                  Patient Portal
                </h3>
                <p className="text-blue-100 text-center">
                  Secure platform for patients to manage appointments and
                  medications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Unwavering Commitment to Care */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className="text-center mb-16"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
                Our Unwavering Commitment to Care
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Delivering exceptional healthcare solutions with compassion and
                innovation
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div
                className="space-y-6"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <p className="text-lg text-gray-700 leading-7">
                  At Clinical Prescribing Services, we are dedicated to
                  revolutionizing primary care through innovative,
                  patient-focused solutions. Our passionate team collaborates
                  with the NHS to deliver high-quality care, easing the burden
                  on healthcare providers and enhancing patient outcomes.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Patient-centered care delivery for better health outcomes
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Innovative solutions tailored to modern healthcare
                      challenges
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle
                      className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span className="text-gray-700">
                      Sustainable support for NHS efficiency and resilience
                    </span>
                  </li>
                </ul>
              </div>
              <div
                className="flex justify-center lg:justify-end"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <div className="relative     w-full h-80 lg:h-96 rounded-xl shadow-xl  group">
                  <div className="relative overflow-hidden rounded-xl shadow-xl">
                    <img
                      src="https://i.pinimg.com/1200x/5e/42/2c/5e422ccf8fd88243f0f25019eacd39d2.jpg"
                      alt="Healthcare professional providing compassionate care"
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#3b97d0]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#3b97d0]/20 to-blue-400/20 rounded-full animate-pulse"></div>
                  <div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-white/50 to-gray-200/50 rounded-full animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <p className="text-sm font-bold text-[#3b97d0]">
                      Compassionate Care
                    </p>
                    <p className="text-xs text-gray-600">Patient-Focused</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section id="about" className="animate-section py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                <span className="text-blue-600 italic">
                  "An award-winning healthcare organisation"
                </span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Clinical Prescribing Services is a dynamic, award-winning
                healthcare provider focused on delivering innovative clinical
                services. Our mission is to support the NHS and healthcare
                practices by optimizing medicines management and enhancing
                patient care.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-lg shadowSn">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower healthcare providers with sustainable solutions
                  that improve patient outcomes.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600">
                  To lead the transformation of primary care through clinical
                  excellence and technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Survey Statistics with Counter Animation */}
        <section
          ref={counterSectionRef}
          className="animate-section py-20 bg-blue-600 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Challenge We Address
              </h2>
              <p className="text-xl text-blue-100">
                Understanding the pressures facing healthcare professionals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  value: 55,
                  text: "Clinical pharmacists are the most difficult to recruit",
                },
                {
                  value: 65,
                  text: "Lack of suitably trained/experienced candidates",
                },
                { value: 27, text: "Report unmanageable workloads" },
                { value: 59, text: "Manage their workloads with difficulty" },
                {
                  value: 62,
                  text: "Consider their PCN/practice workloads unmanageable",
                },
                { value: 47, text: "Class morale of their teams as poor" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-10px] duration-300 transition-all"
                >
                  <div
                    ref={(el) => (counterRefs.current[index] = el)}
                    className="counter text-4xl font-bold mb-2"
                    data-target={item.value}
                  >
                    0%
                  </div>
                  <p className="text-blue-100">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="animate-section py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <p className="text-xl text-blue-600 font-semibold mb-8 italic">
                "With rising GP costs and workforce challenges, we bring the
                solution."
              </p>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Our team provides agile, innovative solutions to address the
                unique challenges of modern healthcare, reducing costs and
                improving efficiency.
              </p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="animate-section py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Key Benefits
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive solutions for modern healthcare challenges
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Improved Family and Friends scores
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Significant reduction in GP locum costs
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Frees-up limited consultation rooms
                </p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Reach appointment targets</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Achieve PCCF/PDS targets</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Achieve QOF</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">Innovative patient care</p>
              </div>
              <div className="flex items-start gap-4 p-6 bg-white rounded-lg shadow-sm hover:translate-y-[-10px] transition-all duration-300 hover:shadow-gray-300">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700">
                  Same day response for all urgent queries
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="animate-section py-20 bg-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Clinical Prescribing Services have transformed the way we
                  manage our medicines optimisation. Their expertise and support
                  are invaluable."
                </blockquote>
                <p className="font-semibold text-gray-900">
                  — GP Practice Manager
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <blockquote className="text-lg text-gray-700 italic mb-4">
                  "Their ARRS solution has streamlined our recruitment process,
                  saving us time and resources."
                </blockquote>
                <p className="font-semibold text-gray-900">— PCN Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="animate-section py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to improve your practice's medicines optimisation?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our team to learn how we can support your
              healthcare practice.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
              <div className="flex items-center gap-2">
                <Phone className="w-6 h-6" />
                <span>07961 842 069</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-6 h-6" />
                <span>info@clinicalprescribingservices.co.uk</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-6 h-6" />
                <span>
                  Central Clinic – Tipton Horseley Road, Tipton, DY4 7NB
                </span>
              </div>
            </div>
            <NavLink
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </NavLink>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Home;

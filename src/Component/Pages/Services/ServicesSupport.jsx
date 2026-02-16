import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Stethoscope,
  Pill,
  UserCheck,
  Clock,
  Shield,
  Target,
  Zap,
} from "lucide-react";
import Footer from "../../Footer/Footer";

const ServicesSupport = () => {
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

  const services = [
    {
      title: "Clinical Pharmacist Support Service",
      description:
        "Expert clinical pharmacists providing remote and on-site support for medication management and patient care optimization.",
      icon: <Stethoscope className="w-8 h-8" />,
      link: "/services/clinical-pharmacist",
      features: [
        "Medication Reviews",
        "Clinical Decision Support",
        "Chronic Disease Management",
        "Prescribing Optimization",
      ],
    },
    {
      title: "Primary Care Network Management",
      description:
        "Comprehensive PCN management solutions including workforce planning, compliance, and performance optimization.",
      icon: <Users className="w-8 h-8" />,
      link: "/services/pcn-management",
      features: [
        "Workforce Integration",
        "Compliance Support",
        "Performance Monitoring",
        "Strategic Planning",
      ],
    },
    {
      title: "Medicines Optimisation Service",
      description:
        "Advanced medicines management to improve patient outcomes while reducing costs and medication-related problems.",
      icon: <Pill className="w-8 h-8" />,
      link: "/services/medicines-optimisation",
      features: [
        "Medication Audits",
        "Cost Analysis",
        "Safety Reviews",
        "Protocol Development",
      ],
    },
    {
      title: "Pharmacy Technician Support",
      description:
        "Skilled pharmacy technicians providing technical support for medicines management and administrative tasks.",
      icon: <UserCheck className="w-8 h-8" />,
      link: "/services/pharmacy-technician",
      features: [
        "Technical Support",
        "Inventory Management",
        "Quality Assurance",
        "Administrative Support",
      ],
    },
    {
      title: "GP Practice Pharmacist Support",
      description:
        "Dedicated pharmacist support tailored specifically for GP practices to enhance clinical services.",
      icon: <Shield className="w-8 h-8" />,
      link: "/services/gp-practice-pharmacist",
      features: [
        "Practice Integration",
        "Clinical Support",
        "Training Programs",
        "Quality Improvement",
      ],
    },
    {
      title: "Enhanced & Extended Access Service",
      description:
        "Support for extended hours services ensuring continuity of pharmaceutical care beyond standard hours.",
      icon: <Clock className="w-8 h-8" />,
      link: "/services/enhanced-access",
      features: [
        "Extended Hours Support",
        "Weekend Coverage",
        "Holiday Support",
        "Emergency Services",
      ],
    },
    {
      title: "Additional Roles Reimbursement Scheme",
      description:
        "Complete ARRS management including recruitment, training, and integration of additional healthcare roles.",
      icon: <Target className="w-8 h-8" />,
      link: "/services/arrs",
      features: [
        "Role Recruitment",
        "Training Programs",
        "Compliance Management",
        "Performance Monitoring",
      ],
    },
    {
      title: "GP ARRS Solutions",
      description:
        "Cost-neutral GP workforce solutions through ARRS funding, simplifying recruitment and integration.",
      icon: <Zap className="w-8 h-8" />,
      link: "/services/gp-arrs",
      features: [
        "Cost-Neutral Solutions",
        "Rapid Deployment",
        "Full Compliance",
        "Ongoing Support",
      ],
    },
    {
      title: "Remote Prescribing",
      description:
        "Secure, efficient remote prescribing solutions enabling flexible healthcare delivery.",
      icon: <Users className="w-8 h-8" />,
      link: "/services/remote-prescribing",
      features: [
        "Secure Platform",
        "Clinical Oversight",
        "Compliance Monitoring",
        "Patient Safety",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 1s ease-out forwards;
          }
        `}
      </style>

      {/* Hero Section */}
      <section
        className="animate-section py-20  mt-[180px] md:mt-[100px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500"></div>
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-20 h-20 bg-white/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-8 h-8 bg-white/30 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{ textShadow: "2px 2px 8px rgba(0, 112, 244, 0.75)" }}
            >
              Services & Support
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Comprehensive healthcare solutions for modern practices
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We provide end-to-end healthcare solutions designed to optimize
              clinical outcomes, reduce costs, and improve operational
              efficiency for practices and PCNs across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-blue-600">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={service.link}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Choose Our Services
            </h2>
            <p className="text-xl text-gray-600">
              The advantages that set us apart in healthcare service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Proven Expertise
              </h3>
              <p className="text-gray-600">
                Years of experience in clinical pharmacy and healthcare
                management
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Tailored Solutions
              </h3>
              <p className="text-gray-600">
                Customized services designed to meet your specific practice
                needs
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Rapid Implementation
              </h3>
              <p className="text-gray-600">
                Quick deployment with minimal disruption to your operations
              </p>
            </div>

            <div className="text-center p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Ongoing Support
              </h3>
              <p className="text-gray-600">
                Continuous support and monitoring to ensure optimal outcomes
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Contact us today to discuss how our services can help optimize your
            healthcare delivery and improve patient outcomes.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesSupport;

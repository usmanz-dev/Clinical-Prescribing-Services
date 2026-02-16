import { useEffect } from "react";
import { CheckCircle, Award, Users, Target, Heart, Shield } from "lucide-react";
import Footer from "../Footer/Footer";

const About = () => {
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
        className="animate-section py-20 mt-[130px] bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-blue-900/70"></div>
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
              About Clinical Prescribing Services
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Transforming Healthcare Through Innovation and Excellence
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Clinical Prescribing Services was founded with a clear mission:
                to revolutionize primary care through innovative clinical
                services and technology-driven solutions. We recognized the
                growing challenges facing healthcare providers and set out to
                create sustainable, cost-effective solutions that improve
                patient outcomes.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since our inception, we have grown from a small team of
                dedicated healthcare professionals to an award-winning
                organization that supports hundreds of practices across the UK.
                Our commitment to excellence and innovation has made us a
                trusted partner for the NHS and private healthcare providers
                alike.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-lg group">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Our Story"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
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
                    Our Mission
                  </p>
                  <p className="text-xs text-gray-600">Innovative Healthcare</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Target className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Mission
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To empower healthcare providers with innovative solutions that
                optimize medicines management, reduce costs, and improve patient
                outcomes while supporting the sustainability of the NHS.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Award className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Vision
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                To be the leading provider of clinical pharmacy services in the
                UK, recognized for our innovation, excellence, and commitment to
                transforming primary care through technology and expertise.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]">
              <Heart className="w-12 h-12 text-blue-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Our Values
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Patient-centered care</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Clinical excellence</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Innovation & technology</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Integrity & transparency</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Us Different
            </h2>
            <p className="text-xl text-gray-600">
              Our unique approach to healthcare solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Shield className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Proven Expertise
                </h3>
                <p className="text-gray-600">
                  Our team consists of experienced clinical pharmacists,
                  healthcare managers, and technology specialists with deep
                  understanding of NHS operations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Users className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Collaborative Approach
                </h3>
                <p className="text-gray-600">
                  We work closely with practices and PCNs to understand their
                  unique challenges and develop tailored solutions that fit
                  their specific needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Results-Driven
                </h3>
                <p className="text-gray-600">
                  We focus on measurable outcomes, from cost savings and
                  improved patient satisfaction to enhanced clinical efficiency
                  and compliance.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-blue-50 rounded-lg hover:translate-y-[-5px] transition-all duration-300">
              <Award className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Award-Winning Service
                </h3>
                <p className="text-gray-600">
                  Our commitment to excellence has been recognized through
                  multiple industry awards and certifications, validating our
                  approach and results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">
              Making a difference in healthcare across the UK
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Practices Supported</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">£2M+</div>
              <p className="text-blue-100">Cost Savings Generated</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <p className="text-blue-100">Patients Benefited</p>
            </div>
            <div className="text-center p-6 bg-white/10 rounded-lg backdrop-blur-sm hover:translate-y-[-5px] transition-all duration-300">
              <div className="text-4xl font-bold mb-2">98%</div>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;

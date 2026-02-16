
import { useEffect } from "react"
import { FileText, Calendar } from "lucide-react"
import Footer from "../Footer/Footer"
const TermsConditions = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInSlide")
          }
        })
      },
      { threshold: 0.1 },
    )
    document.querySelectorAll(".animate-section").forEach((section) => {
      observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

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
      <section className="animate-section py-20 mt-[100px] bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 text-white bg-fixed relative">
         <div className="absolute top-48 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

          <div
            className="absolute  bottom-96 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className="absolute top-1/2 left-1/6 sm:left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <FileText className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-2xl mb-4">Legal terms governing the use of our services</p>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Calendar className="w-5 h-5" />
              <span>Last updated: January 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="animate-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms and Conditions ("Terms") govern your use of the services provided by Core Prescribing
              Solutions Ltd ("we", "us", "our"). By accessing or using our services, you agree to be bound by these
              Terms.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Services</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Clinical Prescribing Services provides clinical pharmacy services, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Clinical pharmacist support services</li>
              <li>Primary Care Network management and support</li>
              <li>Medicines optimisation services</li>
              <li>Pharmacy technician support</li>
              <li>Remote prescribing solutions</li>
              <li>Training and development programs</li>
              <li>ARRS implementation and management</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Professional Standards</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All services are provided in accordance with relevant professional standards, including those set by the
              General Pharmaceutical Council (GPhC), Royal Pharmaceutical Society (RPS), and other relevant regulatory
              bodies.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Client Responsibilities</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">Clients are responsible for:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Providing accurate and complete information</li>
              <li>Maintaining appropriate professional indemnity insurance</li>
              <li>Ensuring compliance with relevant regulations and guidelines</li>
              <li>Timely payment of fees as agreed</li>
              <li>Providing safe working environments for our staff</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Confidentiality</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We maintain strict confidentiality regarding all client information and patient data in accordance with
              relevant data protection legislation, including the General Data Protection Regulation (GDPR) and the Data
              Protection Act 2018.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. Limitation of Liability</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our liability is limited to the extent permitted by law. We maintain appropriate professional indemnity
              insurance. Nothing in these Terms excludes or limits our liability for death or personal injury caused by
              our negligence or for fraud or fraudulent misrepresentation.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Intellectual Property</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              All intellectual property rights in materials, tools, and resources developed by us remain our property.
              Clients are granted a non-exclusive license to use such materials solely for the purposes of receiving our
              services.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Termination</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Either party may terminate services with appropriate notice as specified in individual service agreements.
              Termination does not affect accrued rights and obligations.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Governing Law</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              These Terms are governed by English law and subject to the exclusive jurisdiction of the English courts.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Contact Information</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">For questions about these Terms, please contact us at:</p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Clinical Prescribing Services Ltd</strong>
              </p>
              <p className="text-gray-700 mb-2">Email:info@clinicalprescribingservices.co.uk</p>
              <p className="text-gray-700 mb-2">Phone: 07961 842 069</p>
              <p className="text-gray-700">Address: Central Clinic – Tipton Horseley Road, Tipton, DY4 7NB</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default TermsConditions

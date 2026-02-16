import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import invideo from '../Home/Video/invideo.mp4'

const Careers = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    message: "",
    cv: null,
  });

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("opacity-100");
        el.classList.remove("opacity-0");
      }, index * 200);
    });
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.name.endsWith(".doc") ||
        file.name.endsWith(".docx"))
    ) {
      setFormData((prev) => ({
        ...prev,
        cv: file,
      }));
    } else {
      alert("Please upload a PDF, DOC, or DOCX file");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Application submitted successfully! We will contact you soon.");
  };

  const faqData = [
    {
      question: "What are the working hours at Clinical Prescribing Services ?",
      answer:
        "Our working hours are flexible, but generally you will be working from 9am to 5pm.",
    },
    {
      question: "How is the pace of work?",
      answer:
        "Each day is different, so you can expect a mixture of steady and fast-paced days.",
    },
    {
      question: "How is feedback delivered at Clinical Prescribing Services ?",
      answer:
        "Feedback is provided on a regular basis to support training and development.",
    },
    {
      question: "What benefits does Clinical Prescribing Services  offer?",
      answer:
        "If employed by Clinical Prescribing Services , you can enjoy benefits some which include: Over 100 reloadable discount cards and ecards at some of the UK's leading high street brands including M&S, Asda, Argos, B&Q, Boots, Morrisons and Sainsburys. Up to 50% off cinemas across the entire UK network. Best corporate rates at over 3,000 gyms and fitness clubs across the UK. Save up to 50% at some of the best leisure attractions. Alton Towers, Thorpe Park, Madame Tussauds and many more. Working for a well established, supportive company.",
    },
    {
      question: "Are you recruiting at the moment?",
      answer:
        "Yes, we are always seeking to add to our outstanding clinical and non-clinical team.",
    },
    {
      question:
        "What is a remote pharmacist and does Clinical Prescribing Services  deploy them?",
      answer:
        "Yes, Clinical Prescribing Services  has a team of remote pharmacists. A remote pharmacist is a licensed professional who manages prescriptions and assists patients and surgeries remotely.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="fade-in opacity-0 mt-[150px] md:mt-[170px] transition-opacity duration-700 bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 text-white py-20">
          {/* Floating elements */}
          <div className="absolute top-48 left-4 sm:left-10 w-10 sm:w-16 h-10 sm:h-16 bg-white/10 rounded-full animate-pulse"></div>

          <div
            className="absolute  bottom-96 right-4 sm:right-10 w-12 sm:w-20 h-12 sm:h-20 bg-white/20 rounded-full animate-bounce"
            style={{ animationDelay: "1s" }}
          ></div>

          <div
            className="absolute top-1/2 left-1/6 sm:left-1/4 w-6 sm:w-8 h-6 sm:h-8 bg-white/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Careers at Clinical Prescribing Services{" "}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Join our growing team of passionate healthcare professionals
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Overview Section */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Join Our Team
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                At Clinical Prescribing Services , we're always looking for
                passionate and driven healthcare professionals and non-clinical
                team members to join our growing team. Whether you're an
                experienced clinician or looking to take the next step in your
                career, we offer a range of flexible opportunities including
                full-time, part-time, and remote roles designed to suit your
                lifestyle and professional goals.
              </p>
            </div>
          </section>

          {/* Recruitment Video Section */}
          <section className="fade-in opacity-0 transition-opacity duration-1000 ease-out mb-20 px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-4">
                See What Makes Us Different
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Watch our recruitment video to explore exciting career
                opportunities at Clinical Prescribing Services .
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-xl max-w-6xl mx-auto group transition-transform duration-500 hover:scale-[1.01]">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  controls
                  autoPlay
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-2xl"
                 >
                   <source src={invideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>

          {/* Current Opportunities */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Current Opportunities at Clinical Prescribing Services{" "}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Explore detailed information on our specific roles:
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Clinical Pharmacist Role
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  Location: Remote/In-house options available
                </p>
                <p className="text-gray-500 mb-4">
                  Full-time, Part-time available
                </p>
                <p className="text-gray-600 mb-6">
                  Join our team of experienced clinical pharmacists providing
                  excellent patient care. Opportunities for professional growth
                  and development in a supportive environment.
                </p>
                <a
                  href="https://coreprescribingsolutions.co.uk/clinical-pharmacist-jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                >
                  Learn More
                </a>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Pharmacy Technician Role
                </h3>
                <p className="text-blue-600 font-medium mb-2">
                  Location: Various locations available
                </p>
                <p className="text-gray-500 mb-4">
                  Full-time, Part-time available
                </p>
                <p className="text-gray-600 mb-6">
                  Support our clinical pharmacy services and contribute to
                  excellent patient outcomes. Join our dedicated team of
                  pharmacy technicians.
                </p>
                <a
                  href="https://coreprescribingsolutions.co.uk/pharmacy-technician-jobs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                A Day in the Life at Clinical Prescribing Services{" "}
              </h3>
              <blockquote className="text-lg italic text-gray-700 text-center mb-4">
                "Working at CPS has allowed me to grow professionally while
                maintaining a healthy work-life balance. The team's support and
                the organisation's commitment to excellence make it an
                incredibly rewarding place to be."
              </blockquote>
              <p className="text-center text-blue-600 font-medium">
                — Jane, Clinical Pharmacist
              </p>
            </div>
          </section>

          {/* Team Infographic */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center">
              <img
                src="https://clinicalprescribingservices.co.uk/wp-content/uploads/2022/12/no2_young-practitioner-doctor-working-clinic-reception-desk-she-is-answering-phone-calls-sche.jpg"
                alt="Team Members Infographic - Clinical Prescribing Services "
                className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Why Choose Clinical Prescribing Services ?
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                At Clinical Prescribing Services , we believe your career should
                grow with purpose. Whether you're an experienced professional or
                just starting out, we offer a supportive environment where your
                skills are valued, your development is prioritised, and your
                work makes a genuine difference to patient care.
              </p>
              <p className="text-lg text-gray-700 font-medium">
                Here's what sets us apart:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Flexible Working
                </h3>
                <p className="text-gray-600">
                  Remote and in-house roles available
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Professional Development
                </h3>
                <p className="text-gray-600">
                  CPD and mentorship (where applicable), and support
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Real Impact
                </h3>
                <p className="text-gray-600">
                  Your role contributes directly to improved patient care and
                  outcomes
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Supportive Environment
                </h3>
                <p className="text-gray-600">
                  Join a friendly, hardworking, and dedicated team to help you
                  take the next step in your career
                </p>
              </div>
            </div>
          </section>

          {/* Application Form with CV Upload */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Take Your First Step
                </h2>
                <p className="text-lg text-gray-600">
                  Enter your details to take your first step towards working for
                  Clinical Prescribing Services{" "}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Position of Interest</option>
                    <option value="clinical-pharmacist">
                      Clinical Pharmacist
                    </option>
                    <option value="pharmacy-technician">
                      Pharmacy Technician
                    </option>
                    <option value="remote-pharmacist">Remote Pharmacist</option>
                    <option value="gp-practice-pharmacist">
                      GP Practice Pharmacist
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* CV Upload Section */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Upload Your CV (PDF, DOC, DOCX)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors duration-300">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="cv-upload"
                    />
                    <label
                      htmlFor="cv-upload"
                      className="cursor-pointer flex flex-col items-center"
                    >
                      <svg
                        className="w-12 h-12 text-gray-400 mb-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">
                        {formData.cv
                          ? formData.cv.name
                          : "Click to upload your CV or drag and drop"}
                      </span>
                      <span className="text-xs text-gray-400 mt-1">
                        PDF, DOC, DOCX up to 10MB
                      </span>
                    </label>
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your experience and why you'd like to join our team"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-6"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium text-lg"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </section>

          {/* Company Culture */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Company Culture
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We are a clinician-led organisation that deeply understands the
                intrinsic value clinical pharmacists and pharmacy technicians
                add to primary care. Our unwavering commitment to clinical
                excellence ensures patient-centred care remains at the forefront
                of everything we do.
              </p>
            </div>
          </section>

          {/* Career Development */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Career Development at Clinical Prescribing Services{" "}
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-lg text-gray-600 leading-relaxed mb-4">
                  At Clinical Prescribing Services , continuous professional
                  growth is paramount. We provide extensive clinical training
                  programs, workshops, and courses to ensure you thrive (where
                  applicable), whether in remote clinical pharmacist roles,
                  pharmacy technician roles, or GP practice pharmacist
                  positions.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Opportunities to progress organically and further develop
                  clinical expertise are tailored to individual skills and
                  career goals.
                </p>
              </div>
            </div>
          </section>

          {/* Diversity and Inclusion */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Diversity and Inclusion
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
                We foster a diverse, inclusive working environment, ensuring
                fair and unbiased processes for all candidates. Join a team that
                values diversity and empowerment.
              </p>
            </div>

            <div className="text-center">
              <img
                src="https://e7f71d4a.rocketcdn.me/wp-content/uploads/sites/20/2023/11/Diversity-Inclusion-Pillars.png"
                alt="Clinical Prescribing Services  Induction Programme"
                className="mx-auto rounded-xl shadow-lg max-w-full h-auto"
              />
            </div>
          </section>

          {/* Employee Benefits */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Employee Benefits
              </h2>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>
                    Over 100 reloadable discount cards and ecards at some of the
                    UK's leading high street brands including M&S, Asda, Argos,
                    B&Q, Boots, Morrisons and Sainsburys
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>
                    Up to 50% off cinemas across the entire UK network
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>
                    Best corporate rates at over 3,000 gyms and fitness clubs
                    across the UK
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>
                    Save up to 50% at some of the best leisure attractions -
                    Alton Towers, Thorpe Park, Madame Tussauds and many more
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-3 mt-1">•</span>
                  <span>
                    Working for a well established, supportive company
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Team Review */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                So, what's it like working for Clinical Prescribing Services ?
              </h2>
              <p className="text-lg text-gray-600">
                Reviews from current team members:
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRzG3KhIdrA88wKWtOF0i-ov5SBLMVaKIPxQ&s"
                  alt="A Karania - Clinical Pharmacist"
                  className="w-24 h-24 rounded-full object-cover mx-auto md:mx-0"
                />
                <div className="flex-1">
                  <blockquote className="text-lg italic text-gray-700 mb-6 leading-relaxed">
                    "Working for Clinical Prescribing Services has been nothing
                    but excellent… They have a clear objective in their methods
                    to serve the community and patients at scale. The
                    professionalism has been faultless and the support from the
                    leadership team has been seamless. The company really value
                    their teams and has a good ethos. Clinical Prescribing
                    Services has created a good working and respectable culture
                    which brings the best out of everyone as part of the
                    organisation."
                  </blockquote>
                  <p className="text-blue-600 font-medium">
                    Julian Crane (Clinical Pharmacist)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="fade-in opacity-0 transition-opacity duration-700 mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions about Clinical Prescribing Services{" "}
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 mb-4 overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors duration-200"
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-lg font-medium text-gray-800">
                      {faq.question}
                    </span>
                    <span className="text-2xl text-blue-600 font-bold ml-4">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 border-t border-gray-200">
                      <p className="text-gray-600 pt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="fade-in opacity-0 transition-opacity duration-700">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Make a Difference?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join our team and contribute to excellent patient care while
                advancing your career.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Careers;

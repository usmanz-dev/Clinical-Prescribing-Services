import { useEffect } from "react";
import { Linkedin, Mail, Award, GraduationCap } from "lucide-react";
import Footer from "../../Footer/Footer";

const MeetTheTeam = () => {
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

  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Chief Executive Officer",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvTbL5WSUuKYddpZI-SXU6JbudFjCtFCGuw&s",
      bio: "Sarah is a dynamic leader with over 15 years of experience in healthcare management and strategic planning.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Dr. Michael Chen",
      position: "Chief Clinical Officer",
      image:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Chen is a board-certified physician with extensive experience in clinical operations and patient care excellence.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "David Rodriguez",
      position: "Chief Operating Officer",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      bio: "David brings strategic operational expertise and has successfully led multiple healthcare transformations.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Emily Thompson",
      position: "Chief Financial Officer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      bio: "Emily is a chartered accountant with deep financial expertise in the healthcare sector and proven growth strategies.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Dr. Priya Patel",
      position: "Clinical Operations Manager",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Patel combines clinical excellence with operational efficiency, ensuring high-quality patient care delivery.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "James Wilson",
      position: "Head of Business Operations",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      bio: "James has over 12 years of experience in business operations and excels at optimizing healthcare delivery systems.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Lisa Anderson",
      position: "Data Protection Officer",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
      bio: "Lisa specializes in healthcare data security and compliance, ensuring all patient information is protected.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Dr. Rachel Green",
      position: "Co-Head of Training and Development",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Green is passionate about professional development and has designed innovative training programs for healthcare professionals.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Dr. Amanda Foster",
      position: "Co-Head of Training and Development",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Foster brings academic excellence and practical experience to create comprehensive educational frameworks.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Marcus Taylor",
      position: "Head of Talent Acquisition and Compliance",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      bio: "Marcus excels in identifying top talent and ensuring all team members meet the highest professional standards.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Jennifer Lee",
      position: "Management Accountant",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
      bio: "Jennifer provides expert financial analysis and reporting to support strategic decision-making across the organization.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Alex Kumar",
      position: "Head of Digital",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
      bio: "Alex leads digital transformation initiatives and develops innovative technology solutions for healthcare delivery.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Thomas Brown",
      position: "Business Development Executive",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      bio: "Thomas identifies new business opportunities and builds strategic partnerships to expand our healthcare services.",
      qualifications: [],
      specialties: [],
    },
    {
      name: "Rebecca Stone",
      position: "Business Development Executive",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
      bio: "Rebecca specializes in market analysis and relationship building to drive sustainable business growth.",
      qualifications: [],
      specialties: [],
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
        className="bg-fixed animate-section py-20 mt-[150px] md:mt-[130px] bg-cover bg-center bg-no-repeat relative "
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
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
              Meet Our Expert Team
            </h1>
            <p
              className="text-2xl mb-8"
              style={{ textShadow: "1px 1px 6px rgba(0, 112, 244, 0.6)" }}
            >
              Dedicated professionals committed to transforming healthcare
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="animate-section py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of healthcare professionals, technologists, and
              business experts brings together decades of experience in clinical
              pharmacy, healthcare management, and digital innovation. We are
              united by our commitment to improving patient outcomes and
              supporting healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="animate-section py-20 bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-transparent  rounded-lg shadow-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px] overflow-hidden"
              >
                <div className="aspect-w-1  justify-center flex aspect-h-1">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-64 h-64 object-cover  rounded-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </button>
                    <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Contact</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Why Work With Us Section */}
      <section className="animate-section py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Why Work With Us
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Each of our clinicians is fully adaptable with fantastic
          clinical acumen, and must meet vigorous internal specifications.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We carry out a specialised in-depth review of all team members
          to ensure they are fully compliant and trained to an excellent
          standard.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We have an experienced clinical support team who are on hand to
          provide training and support to our team, alongside assistance
          with continuing professional development.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We take immense pride in our colleagues and in hand-selecting
          our team.
        </p>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our team has regular input and training from senior management
          to review any educational and development needs, and to support
          in meeting and exceeding clinical and non-clinical requirements.
          We offer a variety of flexible roles to suit individual
          experience and skill sets. We provide a comprehensive clinical
          and system training package to all clinicians, with access to an
          on-call senior staff member at all times.
        </p>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We are always looking to help individuals flourish in their
          careers. Get in touch to see how we can accommodate you in our
          friendly, vibrant team!
        </p>

        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 mb-6">
          <p>
            In a recent survey, 100% of our team stated that they enjoy
            working for Clinical Prescribing Services
          </p>
          <p className="mt-4 font-semibold text-gray-800">
            Some of their comments:
          </p>
          <ul className="list-disc list-inside space-y-2 mt-2 text-gray-700">
            <li>Good morale, good team and flexibility</li>
            <li>Being clinically involved</li>
            <li>Extremely supportive team</li>
            <li>
              The managing team are very approachable and make working for
              Clinical Prescribing Services very comfortable
            </li>
            <li>
              Excellent trained staff all around. Previously working for
              another company which I found difficult because it was not
              organised as well as Clinical Prescribing Services
            </li>
            <li>
              I have had a great experience so far working with my
              practice; they really appreciate the pharmacist's
              contribution and I feel a valued member of the team
            </li>
          </ul>
        </blockquote>
      </div>

      {/* Image */}
      <div className="flex justify-center md:justify-end">
        <div className="relative w-full max-w-lg group">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/6129494/pexels-photo-6129494.jpeg"
              alt="Why Work With Us"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
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
              Join Our Team
            </p>
            <p className="text-xs text-gray-600">Supportive Environment</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Join Our Team */}
      <section className="animate-section py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented healthcare professionals who share
            our passion for innovation and excellence. Explore career
            opportunities with us.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            View Career Opportunities
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetTheTeam;

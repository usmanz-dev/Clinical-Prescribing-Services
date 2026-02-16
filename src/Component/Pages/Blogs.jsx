import { useEffect, useState } from "react";
import { Calendar, User, ArrowRight, BookOpen, Search, Tag, ArrowLeft, Share2, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import Footer from "../Footer/Footer";

const Blog = () => {
  const [currentView, setCurrentView] = useState("listing");
  const [selectedPostId, setSelectedPostId] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All Posts");
  const [searchTerm, setSearchTerm] = useState("");

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
  }, [currentView]);

  const blogPosts = [
    {
      id: 1,
      title: "What Is a Remote Pharmacist?",
      date: "20th July 2025",
      author: "Liam Hart",
      excerpt: "A remote pharmacist is a fully qualified healthcare professional who delivers clinical pharmacy services from a distance, using digital technology to support patients, practices, GP Federations and PCNs across the UK. The remote pharmacist NHS model is expanding rapidly, enabling...",
      category: "Remote Services",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>A remote pharmacist is a fully qualified healthcare professional who delivers clinical pharmacy services from a distance, using digital technology to support patients, practices, GP Federations and PCNs across the UK. The remote pharmacist NHS model is expanding rapidly, enabling healthcare providers to access specialist pharmacy expertise without geographical constraints.</p>

        <h2>The Evolution of Remote Pharmacy Services</h2>
        <p>The concept of remote pharmacy services has evolved significantly over the past decade, particularly accelerated by the COVID-19 pandemic. What began as a necessity during lockdowns has now become a cornerstone of modern healthcare delivery, offering unprecedented flexibility and access to specialist pharmaceutical care.</p>

        <p>Remote pharmacists leverage advanced digital platforms, secure communication systems, and electronic health records to provide comprehensive pharmaceutical care. This approach has proven particularly valuable in addressing the growing demand for clinical pharmacy services while overcoming traditional barriers such as geographical limitations and workforce shortages.</p>

        <h2>Core Responsibilities of Remote Pharmacists</h2>
        <p>Remote pharmacists perform a wide range of clinical activities that mirror those of their on-site counterparts, including:</p>

        <ul>
          <li><strong>Medication Reviews:</strong> Conducting comprehensive medication reviews for patients with complex polypharmacy needs</li>
          <li><strong>Clinical Consultations:</strong> Providing virtual consultations for medication optimization and patient counseling</li>
          <li><strong>Prescribing Support:</strong> Assisting healthcare providers with evidence-based prescribing decisions</li>
          <li><strong>Medication Safety:</strong> Identifying and resolving drug interactions, contraindications, and adverse effects</li>
          <li><strong>Chronic Disease Management:</strong> Supporting patients with long-term conditions through specialized pharmaceutical care</li>
        </ul>

        <h2>Technology Infrastructure Supporting Remote Pharmacy</h2>
        <p>The success of remote pharmacy services relies heavily on robust technological infrastructure. Modern remote pharmacists utilize:</p>

        <p>Secure video conferencing platforms enable face-to-face consultations with patients and healthcare teams, maintaining the personal connection essential for effective pharmaceutical care. Electronic prescribing systems allow real-time access to patient medication histories, enabling informed decision-making and seamless care coordination.</p>

        <p>Clinical decision support systems provide evidence-based guidance, drug interaction checks, and prescribing alerts, ensuring the highest standards of medication safety. Mobile health applications facilitate patient engagement, medication adherence monitoring, and real-time communication between pharmacists and patients.</p>

        <h2>Benefits for Primary Care Networks</h2>
        <p>Primary Care Networks (PCNs) benefit significantly from remote pharmacist services, experiencing improved access to specialized pharmaceutical expertise without the overhead costs associated with full-time pharmacy staff. This model provides flexibility in service delivery, allowing PCNs to scale pharmacy support based on patient demand and clinical needs.</p>

        <p>Remote pharmacists can support multiple PCNs simultaneously, optimizing resource utilization and ensuring cost-effective service delivery. The model also addresses recruitment challenges, as PCNs can access a broader pool of qualified pharmacists without geographical constraints.</p>

        <h2>Patient Outcomes and Quality of Care</h2>
        <p>Research indicates that remote pharmacy services deliver outcomes comparable to traditional in-person care, with several studies demonstrating improved medication adherence, reduced adverse drug events, and enhanced patient satisfaction. The convenience of virtual consultations often leads to better patient engagement and more frequent follow-up appointments.</p>

        <p>Remote pharmacists can dedicate more time to each patient interaction, as they eliminate travel time between appointments. This enhanced time allocation often results in more thorough medication reviews and comprehensive patient education.</p>

        <h2>Regulatory Framework and Professional Standards</h2>
        <p>Remote pharmacy practice operates within the same regulatory framework as traditional pharmacy services, with pharmacists maintaining their professional registration with the General Pharmaceutical Council (GPhC). All remote pharmacy activities must comply with GPhC standards, ensuring patient safety and professional accountability.</p>

        <p>Clinical governance frameworks ensure appropriate oversight of remote pharmacy services, with regular audits, peer review processes, and continuous professional development requirements maintaining high standards of care.</p>

        <h2>Future Developments in Remote Pharmacy</h2>
        <p>The future of remote pharmacy services looks promising, with ongoing technological advances expanding the scope of services that can be delivered remotely. Artificial intelligence and machine learning are beginning to enhance clinical decision-making, while improved mobile health platforms are making remote consultations more accessible and user-friendly.</p>

        <p>Integration with wearable health devices and remote monitoring systems will enable pharmacists to provide more proactive and personalized care, potentially preventing medication-related problems before they occur.</p>

        <h2>Conclusion</h2>
        <p>Remote pharmacists represent a significant evolution in healthcare delivery, offering flexible, accessible, and high-quality pharmaceutical care. As the NHS continues to embrace digital transformation, remote pharmacy services will play an increasingly important role in supporting primary care, improving patient outcomes, and addressing workforce challenges across the healthcare system.</p>

        <p>For healthcare providers considering remote pharmacy services, the evidence strongly supports this innovative approach to pharmaceutical care delivery, offering both immediate benefits and long-term strategic advantages in an increasingly digital healthcare landscape.</p>
      `,
      tags: ["Remote Pharmacy", "NHS", "Digital Health", "Primary Care", "Telemedicine"],
    },
    {
      id: 2,
      title: "Transitioning from Community to Primary Care – A Pharmacist's Perspective",
      date: "13th July 2025",
      author: "Liam Hart",
      excerpt: "Why Pharmacists Are Making the Move Differences Between Community and Primary Care Pharmacy Essential Skills for Success in Primary Care Overcoming Challenges When Moving to Primary Care Transitioning from community to primary care is becoming a popular route for pharmacists...",
      category: "Career Development",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>Transitioning from community to primary care is becoming a popular route for pharmacists seeking new challenges and career advancement opportunities. This shift represents more than just a change of workplace – it's a fundamental transformation in how pharmacists deliver patient care and contribute to healthcare outcomes.</p>

        <h2>Why Pharmacists Are Making the Move</h2>
        <p>The move from community pharmacy to primary care offers numerous professional advantages. Primary care pharmacists enjoy greater autonomy in clinical decision-making, deeper patient relationships, and the opportunity to work as integral members of multidisciplinary healthcare teams.</p>

        <p>Financial incentives also play a significant role, with primary care positions often offering competitive salaries, better work-life balance, and comprehensive benefits packages. The NHS commitment to expanding clinical pharmacy roles in primary care has created numerous opportunities for career progression.</p>

        <h2>Key Differences Between Community and Primary Care Pharmacy</h2>
        <p>The fundamental difference lies in the scope and depth of patient interaction. While community pharmacists focus primarily on dispensing and medication counseling, primary care pharmacists engage in comprehensive medication management, chronic disease monitoring, and preventive healthcare initiatives.</p>

        <p>Primary care pharmacists work within integrated healthcare teams, collaborating closely with GPs, nurses, and other healthcare professionals to optimize patient outcomes. This collaborative approach enables more holistic patient care and professional development opportunities.</p>

        <h2>Essential Skills for Success in Primary Care</h2>
        <p>Successful transition requires developing specific clinical competencies beyond traditional dispensing skills. Advanced clinical assessment abilities, including physical examination techniques and diagnostic interpretation, are essential for primary care practice.</p>

        <p>Communication skills become even more critical in primary care settings, where pharmacists must effectively collaborate with diverse healthcare professionals and manage complex patient cases. Leadership and project management skills are also valuable for driving quality improvement initiatives.</p>

        <h2>Overcoming Transition Challenges</h2>
        <p>The transition process can present several challenges, including adapting to new technology systems, understanding different clinical protocols, and building relationships with established healthcare teams. Successful pharmacists approach these challenges with patience and commitment to continuous learning.</p>

        <p>Professional development programs and mentorship opportunities can significantly ease the transition process. Many PCNs offer structured onboarding programs specifically designed to support pharmacists making this career change.</p>

        <h2>Conclusion</h2>
        <p>The transition from community to primary care pharmacy represents an exciting career opportunity for pharmacists seeking greater clinical involvement and professional growth. With proper preparation and support, this transition can lead to highly rewarding and impactful healthcare careers.</p>
      `,
      tags: ["Career Development", "Primary Care", "Community Pharmacy", "Professional Growth", "NHS"],
    },
    {
      id: 3,
      title: "NHS 10‑Year Plan: Implications for Primary Care Clinical Pharmacy",
      date: "6th July 2025",
      author: "Liam Hart",
      excerpt: "The NHS 10-Year Plan, set to shape health services into the next decade, aims to rebalance care towards communities, enhance digital health, and focus on preventative healthcare. For Primary Care Networks (PCNs) and clinical pharmacy teams, understanding the impact of...",
      category: "NHS Updates",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>The NHS 10-Year Plan represents the most significant healthcare transformation in recent decades, with far-reaching implications for primary care clinical pharmacy services. Understanding these changes is crucial for pharmacy professionals, PCNs, and healthcare leaders planning for the future.</p>

        <h2>Key Components of the NHS 10-Year Plan</h2>
        <p>The plan focuses on three fundamental shifts: moving care closer to communities, embracing digital-first healthcare delivery, and prioritizing preventive medicine over reactive treatment. These changes create unprecedented opportunities for clinical pharmacists to expand their roles and impact.</p>

        <p>Significant investment in community-based healthcare infrastructure will create new positions for clinical pharmacists in primary care settings. The plan emphasizes the importance of multidisciplinary teams, positioning pharmacists as essential members of integrated care delivery systems.</p>

        <h2>Implications for Primary Care Networks</h2>
        <p>PCNs will play a central role in implementing the 10-year plan, with expanded responsibilities for population health management and preventive care delivery. Clinical pharmacists will be crucial in supporting these expanded roles, particularly in medication optimization and chronic disease management.</p>

        <p>Funding mechanisms will evolve to support enhanced clinical pharmacy services, with new incentive structures rewarding outcomes-based care delivery. This shift creates opportunities for innovative service models and expanded pharmacy roles.</p>

        <h2>Digital Transformation and Pharmacy Practice</h2>
        <p>The digital-first approach outlined in the plan will fundamentally change how pharmacy services are delivered. Remote consultations, AI-powered clinical decision support, and integrated electronic health records will become standard practice.</p>

        <p>Pharmacists must prepare for these technological changes by developing digital literacy skills and understanding new service delivery models. The integration of pharmacy services with broader digital health platforms will create new opportunities for patient engagement and care coordination.</p>

        <h2>Preparing for Implementation</h2>
        <p>Successful implementation requires strategic planning and workforce development. PCNs and pharmacy services should begin preparing now by assessing current capabilities, identifying skill gaps, and developing training programs.</p>

        <p>Collaboration between different healthcare sectors will become increasingly important. Pharmacists should actively engage in local healthcare planning processes to ensure pharmacy perspectives are incorporated into implementation strategies.</p>

        <h2>Conclusion</h2>
        <p>The NHS 10-Year Plan presents exciting opportunities for clinical pharmacy services to expand their impact and improve patient outcomes. Proactive planning and strategic preparation will be essential for maximizing these opportunities and ensuring successful implementation.</p>
      `,
      tags: ["NHS 10-Year Plan", "Healthcare Transformation", "Digital Health", "PCN", "Policy"],
    },
    {
      id: 4,
      title: "Addressing Burnout in Primary Care: Strategies for Workforce Wellbeing",
      date: "1st July 2025",
      author: "Liam Hart",
      excerpt: "Addressing burnout in primary care is now a top priority as increasing workload, administrative pressures, and staffing shortages take a toll on GP practice teams. Protecting primary care workforce wellbeing is essential for safe patient care, staff retention, and service...",
      category: "Workforce Wellbeing",
      readTime: "9 min read",
      image: "https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/3952241/pexels-photo-3952241.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>Addressing burnout in primary care has become a critical priority as healthcare professionals face unprecedented challenges. The combination of increased patient demand, administrative burden, and workforce shortages has created a perfect storm affecting the wellbeing of healthcare teams across the UK.</p>

        <h2>Understanding Burnout in Healthcare</h2>
        <p>Healthcare burnout is characterized by emotional exhaustion, depersonalization, and a reduced sense of personal accomplishment. In primary care settings, this manifests as decreased job satisfaction, increased turnover rates, and ultimately, compromised patient care quality.</p>

        <p>The symptoms extend beyond individual practitioners to affect entire healthcare teams, creating a cycle where remaining staff face increased workloads, perpetuating the problem. Recognition of early warning signs is crucial for implementing effective intervention strategies.</p>

        <h2>Root Causes in Primary Care</h2>
        <p>Several factors contribute to burnout in primary care environments. Excessive administrative burdens, including documentation requirements and regulatory compliance, consume valuable time that could be spent on direct patient care.</p>

        <p>Staffing shortages force existing team members to take on additional responsibilities, often without corresponding increases in resources or support. The emotional toll of caring for increasingly complex patient populations adds another layer of stress.</p>

        <h2>Strategies for Prevention and Management</h2>
        <p>Effective burnout prevention requires a multi-faceted approach addressing both organizational and individual factors. Implementing efficient workflow systems can reduce administrative burden and allow more time for meaningful patient interactions.</p>

        <p>Professional development opportunities and career advancement pathways help maintain engagement and motivation. Creating supportive team environments where staff feel valued and heard is essential for maintaining morale and job satisfaction.</p>

        <h2>The Role of Leadership</h2>
        <p>Healthcare leaders play a crucial role in addressing burnout through proactive management strategies. This includes regular check-ins with staff, providing adequate resources, and fostering a culture that prioritizes wellbeing alongside productivity.</p>

        <p>Investment in technology solutions that streamline processes and reduce repetitive tasks can significantly impact staff satisfaction and efficiency. Leadership must also model healthy work-life balance behaviors.</p>

        <h2>Building Resilient Teams</h2>
        <p>Resilient healthcare teams share common characteristics: strong communication, mutual support, and shared decision-making processes. These teams are better equipped to handle challenges and maintain high performance under pressure.</p>

        <p>Regular team-building activities, peer support programs, and debriefing sessions after challenging cases help build cohesion and provide emotional support for team members.</p>

        <h2>Conclusion</h2>
        <p>Addressing burnout in primary care requires sustained commitment from healthcare organizations, leaders, and individual practitioners. By implementing comprehensive strategies that address both systemic issues and individual needs, we can create healthier work environments that benefit both healthcare professionals and the patients they serve.</p>
      `,
      tags: ["Burnout Prevention", "Workforce Wellbeing", "Healthcare Leadership", "Team Building", "Mental Health"],
    },
    {
      id: 5,
      title: "Training and Development Solutions for PCN Pharmacy Staff",
      date: "23rd June 2025",
      author: "Liam Hart",
      excerpt: "Effective PCN pharmacy training is crucial for building confident, skilled, and resilient pharmacy teams in general practice and primary care networks. With NHS priorities shifting and the demands on pharmacy staff rising, regular pharmacy staff development ensures teams can adapt...",
      category: "Training",
      readTime: "7 min read",
      image: "https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/7551653/pexels-photo-7551653.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>Effective training and development programs are fundamental to building competent, confident pharmacy teams within Primary Care Networks. As the role of pharmacy professionals continues to evolve, comprehensive training solutions ensure teams can meet changing healthcare demands while maintaining the highest standards of patient care.</p>

        <h2>Current Training Challenges in PCNs</h2>
        <p>PCN pharmacy teams face unique training challenges, including diverse skill levels among staff members, limited time for formal training sessions, and the need to balance clinical responsibilities with professional development activities.</p>

        <p>The rapid pace of change in healthcare delivery, particularly following digital transformation initiatives, requires continuous learning and adaptation. Traditional training approaches often struggle to keep pace with these evolving requirements.</p>

        <h2>Comprehensive Training Framework</h2>
        <p>Successful PCN pharmacy training programs incorporate multiple learning modalities to accommodate different learning styles and schedules. This includes online modules, hands-on workshops, peer mentoring, and case-based learning exercises.</p>

        <p>A structured competency framework ensures all team members achieve essential skills while providing pathways for specialized development based on individual interests and PCN needs. Regular assessment and feedback mechanisms track progress and identify areas for improvement.</p>

        <h2>Technology-Enhanced Learning</h2>
        <p>Modern training solutions leverage technology to deliver flexible, accessible learning experiences. Virtual reality simulations allow safe practice of complex procedures, while interactive online platforms provide immediate feedback and progress tracking.</p>

        <p>Mobile learning applications enable staff to access training materials during downtime, maximizing learning opportunities without disrupting patient care activities. Gamification elements can increase engagement and motivation.</p>

        <h2>Peer Learning and Mentorship</h2>
        <p>Peer learning programs create collaborative environments where experienced team members share knowledge with newer staff. This approach builds strong team relationships while ensuring knowledge transfer and continuity of care standards.</p>

        <p>Formal mentorship relationships provide ongoing support for professional development, helping staff navigate career progression opportunities and develop specialized expertise aligned with PCN priorities.</p>

        <h2>Measuring Training Effectiveness</h2>
        <p>Effective training programs include robust evaluation mechanisms to assess both learning outcomes and impact on patient care quality. Regular competency assessments ensure skills are maintained and updated as required.</p>

        <p>Patient satisfaction metrics, clinical outcome measures, and staff confidence surveys provide comprehensive feedback on training program effectiveness and areas for improvement.</p>

        <h2>Conclusion</h2>
        <p>Investment in comprehensive training and development programs is essential for building high-performing PCN pharmacy teams. By combining innovative learning approaches with traditional methods, PCNs can ensure their pharmacy staff are well-equipped to deliver excellent patient care in an evolving healthcare landscape.</p>
      `,
      tags: ["Training Programs", "Professional Development", "PCN", "Competency Framework", "E-Learning"],
    },
    {
      id: 6,
      title: "When to Outsource Clinical Pharmacist Services (and How It Works)",
      date: "15th June 2025",
      author: "Liam Hart",
      excerpt: "Outsourcing clinical pharmacist services allows Primary Care Networks (PCNs), GP Federations and GP practices to access skilled clinical pharmacists quickly and flexibly, without the recruitment, supervision, and management challenges of direct employment. Through effective clinical pharmacist outsourcing, practices can rapidly...",
      category: "Outsourcing",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      detailImage: "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop",
      content: `
        <p>Outsourcing clinical pharmacist services has emerged as a strategic solution for healthcare organizations seeking to access specialized pharmaceutical expertise without the complexities of direct employment. This approach offers flexibility, cost-effectiveness, and immediate access to experienced professionals.</p>

        <h2>When Outsourcing Makes Sense</h2>
        <p>Several scenarios make outsourcing clinical pharmacist services particularly attractive. Organizations experiencing rapid growth or seasonal fluctuations in patient demand can benefit from the scalability that outsourcing provides.</p>

        <p>Practices struggling with recruitment challenges, particularly in rural or underserved areas, can access qualified pharmacists immediately through outsourcing arrangements. This eliminates lengthy recruitment processes and reduces the risk of service disruptions.</p>

        <h2>Benefits of Outsourced Pharmacy Services</h2>
        <p>Outsourcing offers immediate access to experienced clinical pharmacists with specialized expertise in areas such as medication therapy management, chronic disease management, and clinical protocols. This expertise may not be readily available through direct hiring.</p>

        <p>Cost predictability is another significant advantage, with fixed service fees eliminating concerns about salary increases, benefits costs, and recruitment expenses. Organizations can budget more effectively for pharmacy services.</p>

        <h2>How Outsourcing Arrangements Work</h2>
        <p>Successful outsourcing relationships begin with clear service level agreements that define expectations, deliverables, and performance metrics. These agreements ensure both parties understand their responsibilities and maintain accountability.</p>

        <p>Integration with existing healthcare teams requires careful planning and communication protocols. Outsourced pharmacists must understand local workflows, patient populations, and organizational culture to provide effective services.</p>

        <h2>Quality Assurance and Governance</h2>
        <p>Maintaining quality standards in outsourced arrangements requires robust governance frameworks. Regular performance reviews, clinical audits, and patient feedback mechanisms ensure services meet organizational standards.</p>

        <p>Professional oversight and continuous monitoring help identify areas for improvement and ensure compliance with regulatory requirements and best practice guidelines.</p>

        <h2>Technology Integration</h2>
        <p>Successful outsourcing relies on seamless technology integration, including access to electronic health records, prescribing systems, and communication platforms. This integration ensures outsourced pharmacists can work effectively within existing workflows.</p>

        <p>Secure data sharing protocols and compliance with privacy regulations are essential components of any outsourcing arrangement involving patient care services.</p>

        <h2>Conclusion</h2>
        <p>Outsourcing clinical pharmacist services can provide significant benefits for healthcare organizations when implemented thoughtfully. By carefully selecting partners, establishing clear agreements, and maintaining strong governance frameworks, organizations can access high-quality pharmacy services while maintaining flexibility and cost control.</p>
      `,
      tags: ["Outsourcing", "Clinical Pharmacy", "Service Models", "Cost Management", "Healthcare Operations"],
    },
  ];

  const categories = [
    "All Posts",
    "Remote Services",
    "Career Development",
    "NHS Updates",
    "Workforce Wellbeing",
    "Training",
    "Outsourcing",
    "Healthcare Roles",
    "Service Comparison",
    "Clinical Guidelines",
    "Digital Health",
    "Healthcare Networks",
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All Posts" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const showBlogDetail = (postId) => {
    setSelectedPostId(postId);
    setCurrentView("detail");
    window.scrollTo(0, 0);
  };

  const showBlogListing = () => {
    setCurrentView("listing");
    window.scrollTo(0, 0);
  };

  // Blog Listing Component
  const BlogListing = () => (
    <div className="min-h-screen bg-gray-50">
      <style>
        {`
          @keyframes fadeInSlide {
            0% { opacity: 0; transform: translateY(30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeInSlide {
            animation: fadeInSlide 0.8s ease-out forwards;
          }
          .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #1f2937, #06b6d4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .blog-card {
            background: linear-gradient(145deg, #ffffff, #f8fafc);
            border: 1px solid #e2e8f0;
          }
          .floating-icon {
            animation: float 3s ease-in-out infinite;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>

      {/* Hero Section */}
      <section className="animate-section py-24 mt-[100px] bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <BookOpen className="w-20 h-20 mx-auto mb-8 text-blue-200 floating-icon" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
             Clinical Prescribing Services Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Insights, updates, and expert perspectives on primary care pharmacy services
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="animate-section py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search blog posts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 6).map((category, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="animate-section py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold gradient-text mb-4">Latest Post</h2>
          </div>

          <div
            className="blog-card rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={() => showBlogDetail(filteredPosts[0]?.id)}
          >
            <div className="lg:flex">
              <div className="lg:w-1/2">
                <img
                  src={filteredPosts[0]?.image}
                  alt={filteredPosts[0]?.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {filteredPosts[0]?.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-1" />
                    {filteredPosts[0]?.date}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                  {filteredPosts[0]?.title}
                </h3>

                <div className="flex items-center gap-2 mb-6 text-gray-600">
                  <img
                    src="https://coreprescribingsolutions.co.uk/wp-content/uploads/2022/01/adeem-150x150.png"
                    alt=""
                    className="w-10 h-10"
                  />
                  <span className="text-sm">{filteredPosts[0]?.author}</span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">{filteredPosts[0]?.excerpt}</p>

                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-gray-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-gray-900 transition-all duration-300 group">
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="animate-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold gradient-text mb-4">Recent Articles</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest insights in primary care pharmacy services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.slice(1).map((post, index) => (
              <article
                key={post.id}
                className="blog-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                onClick={() => showBlogDetail(post.id)}
              >
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                    <Tag className="inline w-3 h-3 mr-1" />
                    {post.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {post.author}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{post.excerpt}</p>

                  <div className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="animate-section py-20 bg-gradient-to-r from-blue-600 via-gray-800 to-blue-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-8 text-blue-200" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Subscribe to our newsletter to receive the latest insights on primary care pharmacy services and NHS updates.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
              Subscribe
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <p className="text-blue-200 text-sm mt-4">
            Join hundreds of healthcare professionals already subscribed
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="animate-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Have Questions About Our Services?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Our expert team is here to help you understand how our clinical pharmacy services can benefit your practice or PCN.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NavLink
              to="/contact"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-gray-800 text-white px-8 py-4 rounded-xl text-lg font-bold hover:from-blue-700 hover:to-gray-900 transition-all duration-300 inline-flex items-center gap-3 shadow-lg transform hover:scale-105"
            >
              Contact Our Team
              <ArrowRight className="w-6 h-6" />
            </NavLink>
            <div className="text-gray-600">
              <div className="text-lg font-semibold">Call us directly</div>
              <div className="text-2xl font-bold text-blue-600">01274 442076</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );

  // Blog Detail Component
  const BlogDetail = () => {
    const [currentPost, setCurrentPost] = useState(null);
    const [relatedPosts, setRelatedPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const post = blogPosts.find((p) => p.id === selectedPostId) || blogPosts[0];

    const getRelatedPosts = () => {
      return blogPosts
        .filter((p) => p.id !== selectedPostId && p.category === post.category)
        .slice(0, 3)
        .concat(
          blogPosts
            .filter((p) => p.id !== selectedPostId && p.category !== post.category)
            .slice(0, 3 - blogPosts.filter((p) => p.id !== selectedPostId && p.category === post.category).length)
        );
    };

    useEffect(() => {
      setTimeout(() => {
        setCurrentPost(post);
        setRelatedPosts(getRelatedPosts());
        setLoading(false);
      }, 1000);
    }, [selectedPostId]);

    if (loading) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-xl text-gray-600">Loading article...</p>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <style>
          {`
            @keyframes fadeInSlide {
              0% { opacity: 0; transform: translateY(30px); }
              100% { opacity: 1; transform: translateY(0); }
            }
            .animate-fadeInSlide {
              animation: fadeInSlide 0.8s ease-out forwards;
            }
            .gradient-text {
              background: linear-gradient(135deg, #3b82f6, #1f2937, #06b6d4);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
            .floating-icon {
              animation: float 3s ease-in-out infinite;
            }
            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }
            .content h2 {
              font-size: 1.875rem;
              font-weight: 700;
              color: #1f2937;
              margin: 2rem 0 1rem 0;
              border-bottom: 3px solid #3b82f6;
              padding-bottom: 0.5rem;
            }
            .content h3 {
              font-size: 1.5rem;
              font-weight: 600;
              color: #374151;
              margin: 1.5rem 0 0.75rem 0;
            }
            .content p {
              line-height: 1.8;
              margin-bottom: 1.5rem;
              color: #4b5563;
              font-size: 1.1rem;
            }
            .content ul {
              margin: 1.5rem 0;
              padding-left: 1.5rem;
            }
            .content li {
              margin-bottom: 0.75rem;
              line-height: 1.7;
              color: #4b5563;
              font-size: 1.1rem;
            }
            .content strong {
              color: #1f2937;
              font-weight: 600;
            }
          `}
        </style>

        {/* Back Navigation */}
        <div className="bg-white border-b border-gray-200 mt-[100px]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={showBlogListing}
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Blog</span>
            </button>
          </div>
        </div>

        {/* Article Header */}
        <article className="animate-section">
          <div className="relative h-96 bg-gradient-to-br from-blue-600 via-gray-800 to-blue-500 overflow-hidden">
            <div className="absolute inset-0 bg-black/40"></div>
            <img
              src={currentPost?.detailImage || currentPost?.image}
              alt={currentPost?.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
              <div className="text-white">
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    <Tag className="inline w-4 h-4 mr-2" />
                    {currentPost?.category}
                  </span>
                  <div className="flex items-center gap-4 text-blue-200">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{currentPost?.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{currentPost?.readTime}</span>
                    </div>
                  </div>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{currentPost?.title}</h1>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    <span className="font-medium">By {currentPost?.author}</span>
                  </div>
                  <button className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/30 transition-all duration-300">
                    <Share2 className="w-4 h-4" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="animate-section py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="content prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: currentPost?.content }} />

              {/* Tags */}
              <div className="mt-16 pt-8 border-t border-gray-200">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentPost?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-gray-800 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {currentPost?.author?.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">{currentPost?.author}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Liam Hart is a clinical pharmacy expert with extensive experience in primary care services. He specializes in remote pharmacy solutions, PCN support, and healthcare digital transformation. With a passion for improving patient outcomes through innovative pharmaceutical care delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="animate-section py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold gradient-text mb-4">Related Articles</h2>
              <p className="text-xl text-gray-600">Continue exploring our insights on primary care pharmacy services</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <article
                  key={relatedPost.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group cursor-pointer"
                  onClick={() => showBlogDetail(relatedPost.id)}
                >
                  <div className="relative">
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {relatedPost.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-gray-500 text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {relatedPost.date}
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        {relatedPost.author}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">{relatedPost.excerpt?.substring(0, 150)}...</p>

                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 hover:text-blue-800 font-semibold group-hover:gap-3 transition-all duration-300 flex items-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation to Previous/Next Posts */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <button
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group"
                onClick={() => {
                  const prevPost = blogPosts.find((p) => p.id === (currentPost?.id - 1)) || blogPosts[blogPosts.length - 1];
                  showBlogDetail(prevPost.id);
                }}
              >
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <div className="text-left">
                  <div className="text-sm text-gray-500">Previous Article</div>
                  <div className="font-semibold">
                    {(blogPosts.find((p) => p.id === (currentPost?.id - 1)) || blogPosts[blogPosts.length - 1])?.title?.substring(0, 40)}...
                  </div>
                </div>
              </button>

              <button
                className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-colors group text-right"
                onClick={() => {
                  const nextPost = blogPosts.find((p) => p.id === (currentPost?.id + 1)) || blogPosts[0];
                  showBlogDetail(nextPost.id);
                }}
              >
                <div>
                  <div className="text-sm text-gray-500">Next Article</div>
                  <div className="font-semibold">
                    {(blogPosts.find((p) => p.id === (currentPost?.id + 1)) || blogPosts[0])?.title?.substring(0, 40)}...
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="animate-section py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Calendar className="w-16 h-16 mx-auto mb-8 text-blue-200" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Us at These Events</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Book a meeting with our team at any of these upcoming events to discuss how we can support your healthcare practice with our innovative prescribing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <NavLink
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl transform hover:scale-105"
              >
                Contact Us Today
                <ArrowRight className="w-6 h-6" />
              </NavLink>
              <div className="text-blue-100">
                <div className="text-lg font-semibold">Call us directly</div>
                <div className="text-2xl font-bold">07961 842 069</div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    );
  };

  return <div>{currentView === "listing" ? <BlogListing /> : <BlogDetail />}</div>;
};

export default Blog;
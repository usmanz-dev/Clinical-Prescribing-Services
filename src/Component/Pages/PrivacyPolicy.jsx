import { useEffect } from "react"
import { Shield, Calendar } from "lucide-react"
import Footer from "../Footer/Footer"

const PrivacyPolicy = () => {
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
      <section className="animate-section py-20 mt-[150px] bg-fixed bg-gradient-to-r from-blue-900 via-blue-800 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy & Cookies Policy</h1>
            <p className="text-2xl mb-4">How we protect and handle your personal information</p>
            <div className="flex items-center justify-center gap-2 text-blue-100">
              <Calendar className="w-5 h-5" />
              <span>Last updated: March 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="animate-section py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Introduction</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are committed to safeguarding the privacy of our website visitors, service users, employees/contractors and customer personnel.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This policy applies where we are acting as a data controller with respect to the personal data of such persons; in other words, where we determine the purposes and means of the processing of that personal data.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our website incorporates privacy controls which affect how we will process your personal data. By using the privacy controls, you can specify whether you would like to receive direct marketing communications and limit the collection, sharing and publication of your personal data.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We use cookies on our website. Insofar as those cookies are not strictly necessary for the provision of our website and services, we will ask you to consent to our use of cookies when you first visit our website.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In this policy, "we", "us" and "our" refer to Clinical Prescribing Services  Limited, company number 12331551, registered in the United Kingdom.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our privacy policy complies with UK Data Protection law including the Data Protection Act 2018 (Act) and UK General Data Protection Regulation (UK GDPR).
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. The personal data that we collect</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In this Section 2 we have set out the general categories of personal data that we process. The most common source of personal information is the person to whom it refers (for example, you). We may also find information that is publicly available. In addition, we may collect information from suppliers and stakeholders, information you have made available on the public domain (for example, from your website) and information purchased from third party marketing data suppliers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may process data enabling us to get in touch with you ("contact data"). The contact data may include your name, email address, telephone number, postal address and/or social media account identifiers.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may process information relating to our customers, suppliers and stakeholders relationships ("customer relationship data"). The customer relationship data may include your name, the name of your business or employer, your job title or role, your contact details, your classification / categorization within our customer relationship management system and information contained in or relating to communications between us and you, or between us and your employer.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may process information relating to transactions with our customers, and suppliers services, that you enter into with us ("transaction data"). The transaction data may include your name, your contact details, your payment card details, banking details and the transaction details.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may process information contained in or relating to any communication that you send to us or that we send to you ("communication data"). The communication data may include the communication content and metadata associated with the communication.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may process data about your use of our website and services ("usage data"). The usage data may include your IP address, geographical location, browser type and version, operating system, referral source, length of visit, page views and website navigation paths, as well as information about the timing, frequency and pattern of your service use.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Purposes of processing and legal bases</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              In this Section 3, we have set out the purposes for which we may process personal data and the legal bases of the processing. We rely on the following legal bases to use your personal data:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Necessary for performance of a contract with you</li>
              <li>Necessary to comply with a legal obligation</li>
              <li>Necessary for our legitimate interests (for running our business, to study how customers use our services, to develop them and grow our business, to define types of customers for our services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy; to recover debts due to us, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)</li>
              <li>Consent</li>
            </ul>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Operations:</strong> We may process your personal data for the purposes of operating our website, providing our services, generating invoices, bills and other payment-related documentation, and credit control. The legal basis for this processing is our legitimate interests, namely the proper administration of our website, services and business.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Publications:</strong> We may process personal data for the purposes of publishing such data on our website and elsewhere through our services in accordance with your express instructions. The legal basis for this processing is consent.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              <strong>Direct marketing:</strong> We may process contact data and customer relationship data for the purposes of creating, targeting and sending direct marketing communications through social media or by email, SMS, post and/or fax and making contact by telephone for marketing-related purposes.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              <strong>Research and analysis:</strong> We may process usage data, service data and/or transaction data for the purposes of researching and analyzing the use of our website and services, as well as researching and analyzing other interactions with our business.
            </p>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4.  Direct marketing </h2>
             <p className="text-gray-600 mb-4 leading-relaxed">We may process contact data and customer relationship data for the purposes of creating, targeting and sending direct marketing communications through social media or by email, SMS, post and/or fax and making contact by telephone for marketing-related purposes. The legal basis for this processing is our legitimate interests, namely promoting our business and communicating marketing messages and offers to our website visitors and service users.</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Providing your personal data to others</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may disclose employees/contractors and service users personal data to our insurers, professional advisers insofar as reasonably necessary for the purposes of obtaining or maintaining insurance coverage, managing risks and obtaining professional advice.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We may disclose personal details of our service users to our accountants and in some cases to other third-party companies for potential business opportunities after obtaining consent.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may disclose your personal data where such disclosure is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">6. International transfers of your personal data</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              If we use outsourced services outside the UK their processing of your personal data will involve a transfer of data outside the UK. Whenever we transfer your personal data out of the UK, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Where possible, we will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data.</li>
              <li>In other cases, we may use specific contracts approved for use in the UK which give personal data the same protection it has in the UK.</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">7. Retaining and deleting personal data</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Personal data that we process for any purpose or purposes shall not be kept for longer than is necessary for that purpose or those purposes. This includes contact data, customer relationship data, transaction data, employee/contractor data, communication data and usage data.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We may retain your personal data where such retention is necessary for compliance with a legal obligation to which we are subject, or in order to protect your vital interests or the vital interests of another natural person and to support a claim or defence in court.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">8. Security of personal data</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We will take appropriate technical and organisational precautions to secure your personal data and to prevent the loss, misuse or alteration of your personal data.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We will store your personal data on secure servers, personal computers and mobile devices, and in secure manual record-keeping systems.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">9. Your rights</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Your principal rights under data protection law are:
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">10. Third party websites</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">10.1 Our website may include hyperlinks to, and details of, third party websites.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">10.2 In general we have no control over, and are not responsible for, the privacy policies and practices of third parties.</p>
            

            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>The right to access – you can ask for copies of the personal data we hold about you</li>
              <li>The right to rectification – you can ask us to rectify inaccurate personal data we hold about you and to complete incomplete personal data</li>
              <li>The right to erasure – you can ask us to erase your personal data</li>
              <li>The right to restrict processing – you can ask us to restrict the processing of your personal data</li>
              <li>The right to object to processing – you can object to the processing of your personal data</li>
              <li>The right to data portability – you can ask that we transfer your personal data to another organisation or to you</li>
              <li>The right to complain to a supervisory authority – you can complain about our processing of your personal data</li>
              <li>The right to withdraw consent – to the extent that the legal basis of our processing of your personal data is consent, you can withdraw that consent</li>
            </ul>
            <p className="text-gray-600 mb-6 leading-relaxed">
              You may contact us to request any personal information we hold about you. After receiving a legitimate request, we will try to respond within one month. You will not have to pay a fee to access your personal data unless your request is clearly unfounded, repetitive or excessive.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">11. Updating information</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">11.1 Please let us know if the personal information that we hold about you needs to be corrected or updated.</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">12. Acting as a data processor</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">12.1 In respect of patient data, we do not act as a data controller; instead, we act as a data processor.</p>
            <p className="text-gray-600 mb-4 leading-relaxed">12.2 Insofar as we act as a data processor rather than a data controller, this policy shall not apply. Our legal obligations as a data processor are instead set out in the contract between us and the relevant data controller.</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">13. About cookies</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              A cookie is a file containing an identifier (a string of letters and numbers) that is sent by a web server to a web browser and is stored by the browser. The identifier is then sent back to the server each time the browser requests a page from the server.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Cookies may be either "persistent" cookies or "session" cookies: a persistent cookie will be stored by a web browser and will remain valid until its set expiry date, unless deleted by the user before the expiry date; a session cookie, on the other hand, will expire at the end of the user session, when the web browser is closed.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              The law requires you to give explicit consent for use of any cookies that are not strictly necessary for the operation of a website.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">14. Cookies that we use</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 text-gray-600 mb-6 space-y-2">
              <li>Analysis – we use cookies to help us to analyze the use and performance of our website and services</li>
              <li>Cookie consent – we use cookies to store your preferences in relation to the use of cookies more generally</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">15. Cookies used by our service providers</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We use Google Analytics. Google Analytics gathers information about the use of our website by means of cookies. The information gathered is used to create reports about the use of our website. You can find out more about Google's use of information by visiting https://www.google.com/policies/privacy/partners/
            </p>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">16. Managing cookies</h2>
             <p className="text-gray-600 mb-6 leading-relaxed">16.1 Most browsers allow you to refuse to accept cookies and to delete cookies. The methods for doing so vary from browser to browser, and from version to version. You can however obtain up-to-date information about blocking and deleting cookies via these links:</p>
             <ul>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(a) <a href="https://support.google.com/chrome/answer/95647" className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3  hover:text-blue-700 ">https://support.google.com/chrome/answer/95647 </a>(Chrome);</li>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(b) <a href="https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences " className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3  hover:text-blue-700 "> https://support.mozilla.org/en-US/kb/enable-and-disable-cookies-website-preferences  </a>(FireFox);</li>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(c) <a href="https://help.opera.com/en/latest/security-and-privacy/" className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3  hover:text-blue-700 "> https://help.opera.com/en/latest/security-and-privacy/ </a>(Opera);</li>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(d) <a href=" https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies " className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3  hover:text-blue-700 "> https://support.microsoft.com/en-gb/help/17442/windows-internet-explorer-delete-manage-cookies  </a>(Internet Explorer);</li>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(e) <a href=" https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3  hover:text-blue-700 ">https://support.apple.com/en-gb/guide/safari/manage-cookies-and-website-data-sfri11471/mac </a>(Safari);</li>
              <li className="text-gray-600  duration-300 transition-all p-3 bg-white shadow-md rounded-lg mb-4 hover:translate-y-[-7px]" >(f) <a href=" https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy" className="text-gray-500 font-bold  hover:underline  duration-300 transition-all  hover:translate-x-3   hover:text-blue-700 "> https://privacy.microsoft.com/en-us/windows-10-microsoft-edge-and-privacy </a>(Edge);</li>

             </ul>
             <p className="text-gray-600 mb-6 leading-relaxed">16.2 Blocking all cookies will have a negative impact upon the usability of many websites.</p>
             <p className="text-gray-600 mb-6 leading-relaxed">16.3 If you block cookies, you will not be able to use all the features on our website.</p>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">17. Amendments</h2>
             <p className="text-gray-600">17.1 This Policy version was updated in March 2022 — for previous versions of this policy see here</p>
             <p className="text-gray-600">17.2 We may update this policy from time to time by publishing a new version on our website. You should check this page occasionally to ensure you are happy with any changes to this policy.</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">18. Our details</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              This website is owned and operated by Clinical Prescribing Services  Ltd.
            </p>
             <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">19. Data protection registration</h2>
             <p className="text-gray-600 mb-4 leading-relaxed">19.1 We are registered as a data controller with the UK Information Commissioner’s Office.</p>
             <p className="text-gray-600 mb-4 leading-relaxed">19.2 Our data protection registration number is ZA567329.</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong> Clinical Prescribing Services  Ltd</strong>
              </p>
              <p className="text-gray-700 mb-2">Company Registration Number: 12331551</p>
              <p className="text-gray-700 mb-2">Registered Office: Central Clinic – Tipton</p>
              <p className="text-gray-700 mb-2">Data Protection Registration Number: ZA567329</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">20. Data protection officer</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We have a dedicated data protection officer. If you wish to contact them you may do so by:
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">21. Changes of business ownership and control</h2>
            <p className="text-gray-700 mb-4">21.1 Clinical Prescribing Services  Ltd may expand or reduce the business and this may involve the sale and/or the transfer of control of all or part of Clinical Prescribing Services  Ltd.21.2 Any personal data processed and held by us, where it is relevant to any part of our business may be transferred to the new owner or controlling party and they will under the terms of this privacy policy, be permitted to use the data for the purposes for which it was originally supplied to us.21.3 We may also disclose data to a prospective purchaser of our business or any part of it and we will take steps with the aim of ensuring your privacy is protected</p>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-2">
                <strong>Data Protection Officer</strong>
              </p>
              <p className="text-gray-700 mb-2"> Clinical Prescribing Services  Ltd</p>
              <p className="text-gray-700 mb-2">Address: Horseley Road, Tipton, DY4 7NB</p>
              <p className="text-gray-700 mb-2">Contact via our website contact form</p>
              <p className="text-gray-700">Email: Mark correspondence for the attention of the Data Protection Officer</p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">22. Meetings</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Clinical Prescribing Services  Ltd uses AI tools to minute and transcribe internal meetings, all individuals must be vigilant when having discussions during internal meetings, the AI tools can be switched off or paused and should be prior to any discussions of a sensitive nature.
            </p>

            
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy
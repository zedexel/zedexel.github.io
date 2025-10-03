import React from "react";

const SBCCustomerAppPrivacyPolicy = () => {
  return (
    <section className="py-12 md:py-24 bg-dark-950 relative overflow-hidden min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-32 md:w-64 h-32 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-dark-50">Privacy Policy</h1>
          <p className="text-xl md:text-2xl text-aqua-400 mb-2">SBC Express Cargo</p>
          <p className="text-dark-300">Customer App</p>
          <p className="text-dark-400 text-sm mt-4">Effective Date: October 3, 2025</p>
        </div>

        <div className="elevated-card p-8 md:p-12 rounded-2xl text-dark-200 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">1. Introduction</h2>
            <p className="leading-relaxed">
              This Privacy Policy applies to the SBC Express Cargo mobile application (the "App"), developed and managed by <strong className="text-aqua-400">Zedexel Software Solutions</strong> ("we," "our," or "us") for SBC Express Cargo. We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <p className="leading-relaxed mt-3">
              As the technology provider, we develop, host, and maintain the technical infrastructure for this cargo and logistics application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the App.
            </p>
            <p className="leading-relaxed mt-3">
              By using the SBC Express Cargo App, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">2.1 Personal Information</h3>
            <p className="leading-relaxed mb-3">We may collect the following personal information from you:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Full name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
              <li>Account credentials (username and encrypted password)</li>
            </ul>

            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">2.2 Shipment Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pickup and delivery addresses</li>
              <li>Package details (weight, dimensions, contents)</li>
              <li>Tracking information</li>
              <li>Delivery preferences</li>
            </ul>

            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">2.3 Device and Usage Information</h3>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Device type, model, and operating system</li>
              <li>Unique device identifiers</li>
              <li>IP address</li>
              <li>App usage statistics and analytics</li>
              <li>Location data (with your permission) for pickup and delivery services</li>
              <li>Push notification tokens</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">3. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use the collected information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service Delivery:</strong> To process your orders, arrange pickups, track shipments, and facilitate deliveries</li>
              <li><strong>Account Management:</strong> To create and manage your account, authenticate users, and provide customer support</li>
              <li><strong>Communication:</strong> To send order confirmations, tracking updates, delivery notifications, and respond to your inquiries</li>
              <li><strong>Payment Processing:</strong> To process payments and prevent fraudulent transactions</li>
              <li><strong>App Improvement:</strong> To analyze usage patterns, improve our services, and develop new features</li>
              <li><strong>Marketing:</strong> To send promotional offers and updates (with your consent, and you may opt-out at any time)</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms of service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">4. Location Data</h2>
            <p className="leading-relaxed">
              Our App may request access to your device's location services to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Automatically fill pickup addresses</li>
              <li>Provide accurate delivery time estimates</li>
              <li>Enable real-time shipment tracking</li>
              <li>Optimize routing for pickups and deliveries</li>
            </ul>
            <p className="leading-relaxed mt-3">
              You can control location permissions through your device settings. Disabling location services may limit some app functionalities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">5. Data Sharing and Disclosure</h2>
            <p className="leading-relaxed mb-3">We may share your information with:</p>
            
            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">5.1 Service Providers</h3>
            <p className="leading-relaxed">
              Third-party companies that help us operate our business, including payment processors, cloud storage providers, analytics services, and delivery partners.
            </p>

            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">5.2 Business Transfers</h3>
            <p className="leading-relaxed">
              In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new owners.
            </p>

            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">5.3 Legal Requirements</h3>
            <p className="leading-relaxed">
              When required by law, court order, or government regulation, or to protect our rights, property, or safety.
            </p>

            <h3 className="text-xl font-semibold text-aqua-400 mb-3 mt-4">5.4 With Your Consent</h3>
            <p className="leading-relaxed">
              We may share information with other parties when you give us explicit consent to do so.
            </p>

            <p className="leading-relaxed mt-4">
              <strong>We do not sell your personal information to third parties.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">6. Data Security</h2>
            <p className="leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Secure authentication mechanisms</li>
              <li>Regular security audits and assessments</li>
              <li>Access controls and employee training</li>
              <li>Secure data storage infrastructure</li>
            </ul>
            <p className="leading-relaxed mt-3">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">7. Data Retention</h2>
            <p className="leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When your information is no longer needed, we will securely delete or anonymize it.
            </p>
            <p className="leading-relaxed mt-3">
              Shipment and transaction records may be retained for accounting, tax, and legal compliance purposes for a period of up to 7 years or as required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">8. Your Rights and Choices</h2>
            <p className="leading-relaxed mb-3">You have the following rights regarding your personal information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a machine-readable format</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Restrict Processing:</strong> Request limitation of how we use your information</li>
              <li><strong>Object:</strong> Object to certain types of processing of your information</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">9. Children's Privacy</h2>
            <p className="leading-relaxed">
              Our App is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">10. Third-Party Links and Services</h2>
            <p className="leading-relaxed">
              Our App may contain links to third-party websites or services that are not operated by us. We are not responsible for the privacy practices of these third parties. We encourage you to review the privacy policies of any third-party services you access through our App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">11. International Data Transfers</h2>
            <p className="leading-relaxed">
              Your information may be transferred to and processed in countries other than your country of residence. These countries may have different data protection laws. We ensure that appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">12. Push Notifications</h2>
            <p className="leading-relaxed">
              We may send you push notifications regarding your shipments, order updates, and promotional offers. You can control these notifications through your device settings or app preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">13. Changes to This Privacy Policy</h2>
            <p className="leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the new Privacy Policy in the App and updating the "Effective Date" at the top of this policy. Your continued use of the App after such changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">14. Contact Us</h2>
            <p className="leading-relaxed mb-3">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-dark-800/50 p-6 rounded-xl mt-4 space-y-4">
              <div>
                <p className="font-semibold text-dark-50 mb-2">Zedexel Software Solutions</p>
                <p className="text-sm text-dark-400 mb-2">App Developer & Data Processor</p>
                <p>Email: <a href="mailto:info@zedexel.com" className="text-aqua-400 hover:text-aqua-300">info@zedexel.com</a></p>
                <p>Phone: <a href="tel:+971585966095" className="text-aqua-400 hover:text-aqua-300">+971 58 596 6095</a></p>
                <p>Website: <a href="https://www.zedexel.com" target="_blank" rel="noopener noreferrer" className="text-aqua-400 hover:text-aqua-300">www.zedexel.com</a></p>
                <p>Address: Office B44-015, Block B, SRTIP, UAE</p>
              </div>
              <div className="pt-4 border-t border-dark-700">
                <p className="font-semibold text-dark-50 mb-2">SBC Express Cargo</p>
                <p className="text-sm text-dark-400 mb-2">Service Provider</p>
                <p>Email: <a href="mailto:info@sbcexpresscargo.com" className="text-aqua-400 hover:text-aqua-300">support@seabreezecourier.com</a></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-dark-50 mb-4">15. Consent</h2>
            <p className="leading-relaxed">
              By using the SBC Express Cargo App, you acknowledge that you have read and understood this Privacy Policy and consent to the collection, use, and disclosure of your information as described herein.
            </p>
          </section>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-aqua-500/20 hover:bg-aqua-500/30 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 border border-aqua-500/30"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default SBCCustomerAppPrivacyPolicy;


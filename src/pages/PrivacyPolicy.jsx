import { Link } from 'react-router-dom';
import { Shield, ArrowLeft } from 'lucide-react';
import { businessInfo } from '../data/siteData';

const PrivacyPolicy = () => {
    const lastUpdated = "January 1, 2026";

    return (
        <main className="pt-20">
            {/* Header */}
            <section className="section-padding pb-8">
                <div className="container-custom">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-white/60 hover:text-[#00D4FF] transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center">
                            <Shield className="w-7 h-7 text-[#00D4FF]" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-white">Privacy Policy</h1>
                            <p className="text-white/50 text-sm mt-1">Last updated: {lastUpdated}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding pt-0">
                <div className="container-custom">
                    <div className="max-w-4xl">
                        <div className="prose prose-invert max-w-none">
                            {/* Introduction */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Introduction</h2>
                                <p className="text-white/70 leading-relaxed">
                                    Get Fit ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                                    explains how we collect, use, disclose, and safeguard your information when you visit our
                                    fitness center and coffee bar, use our website, or interact with our services. Please read
                                    this privacy policy carefully. By using our services, you consent to the data practices
                                    described in this statement.
                                </p>
                            </div>

                            {/* Information We Collect */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>

                                <h3 className="text-lg font-medium text-white mt-6 mb-3">Personal Information</h3>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    We may collect personal information that you voluntarily provide to us when you:
                                </p>
                                <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                                    <li>Register for a gym membership</li>
                                    <li>Sign up for classes or personal training sessions</li>
                                    <li>Fill out a contact form on our website</li>
                                    <li>Subscribe to our newsletter</li>
                                    <li>Participate in promotions or surveys</li>
                                </ul>
                                <p className="text-white/70 leading-relaxed">
                                    This information may include your name, email address, phone number, date of birth,
                                    emergency contact information, payment details, and health-related information necessary
                                    for safe exercise participation.
                                </p>

                                <h3 className="text-lg font-medium text-white mt-6 mb-3">Automatically Collected Information</h3>
                                <p className="text-white/70 leading-relaxed">
                                    When you access our website, we may automatically collect certain information about your
                                    device, including information about your web browser, IP address, time zone, and some of
                                    the cookies installed on your device. We refer to this automatically-collected information
                                    as "Device Information." We collect Device Information using cookies, log files, web beacons,
                                    tags, and pixels.
                                </p>
                            </div>

                            {/* How We Use Your Information */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    We use the information we collect to:
                                </p>
                                <ul className="list-disc list-inside text-white/70 space-y-2">
                                    <li>Process your membership registration and manage your account</li>
                                    <li>Facilitate class bookings and personal training sessions</li>
                                    <li>Process payments and send transaction receipts</li>
                                    <li>Communicate with you about your membership, classes, and promotions</li>
                                    <li>Improve our facilities, services, and website experience</li>
                                    <li>Ensure the safety and security of our premises and members</li>
                                    <li>Comply with legal obligations</li>
                                    <li>Respond to your inquiries and provide customer support</li>
                                </ul>
                            </div>

                            {/* Information Sharing */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Information Sharing and Disclosure</h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    We do not sell, trade, or rent your personal information to third parties. We may share
                                    your information in the following circumstances:
                                </p>
                                <ul className="list-disc list-inside text-white/70 space-y-2">
                                    <li><strong className="text-white">Service Providers:</strong> We may share information with third-party
                                        vendors who perform services on our behalf, such as payment processing, email delivery,
                                        and website hosting.</li>
                                    <li><strong className="text-white">Legal Requirements:</strong> We may disclose your information if required
                                        by law or in response to valid requests by public authorities.</li>
                                    <li><strong className="text-white">Business Transfers:</strong> In the event of a merger, acquisition, or sale
                                        of assets, your information may be transferred as part of that transaction.</li>
                                    <li><strong className="text-white">Emergency Contacts:</strong> In case of a medical emergency, we may contact
                                        your designated emergency contact.</li>
                                </ul>
                            </div>

                            {/* Data Security */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Data Security</h2>
                                <p className="text-white/70 leading-relaxed">
                                    We implement appropriate technical and organizational measures to protect your personal
                                    information against unauthorized access, alteration, disclosure, or destruction. These
                                    measures include secure socket layer (SSL) encryption, secure servers, firewalls, and
                                    password-protected databases. However, no method of transmission over the Internet or
                                    electronic storage is 100% secure, and we cannot guarantee absolute security.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Cookies and Tracking Technologies</h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Our website uses cookies and similar tracking technologies to enhance your experience.
                                    Cookies are small data files stored on your device. We use:
                                </p>
                                <ul className="list-disc list-inside text-white/70 space-y-2 mb-4">
                                    <li><strong className="text-white">Essential Cookies:</strong> Required for the website to function properly.</li>
                                    <li><strong className="text-white">Analytics Cookies:</strong> Help us understand how visitors interact with our website.</li>
                                    <li><strong className="text-white">Preference Cookies:</strong> Remember your settings and preferences.</li>
                                </ul>
                                <p className="text-white/70 leading-relaxed">
                                    You can control cookies through your browser settings. Please note that disabling certain
                                    cookies may affect the functionality of our website.
                                </p>
                            </div>

                            {/* Your Rights */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    Depending on your location, you may have certain rights regarding your personal information:
                                </p>
                                <ul className="list-disc list-inside text-white/70 space-y-2">
                                    <li><strong className="text-white">Access:</strong> Request a copy of the personal information we hold about you.</li>
                                    <li><strong className="text-white">Correction:</strong> Request correction of inaccurate or incomplete information.</li>
                                    <li><strong className="text-white">Deletion:</strong> Request deletion of your personal information, subject to legal obligations.</li>
                                    <li><strong className="text-white">Opt-out:</strong> Unsubscribe from marketing communications at any time.</li>
                                    <li><strong className="text-white">Data Portability:</strong> Request your data in a machine-readable format.</li>
                                </ul>
                                <p className="text-white/70 leading-relaxed mt-4">
                                    To exercise these rights, please contact us using the information provided below.
                                </p>
                            </div>

                            {/* Children's Privacy */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Children's Privacy</h2>
                                <p className="text-white/70 leading-relaxed">
                                    Our services are not intended for individuals under the age of 16 without parental consent.
                                    We do not knowingly collect personal information from children under 16. If you are a parent
                                    or guardian and believe your child has provided us with personal information without your
                                    consent, please contact us, and we will take steps to delete such information.
                                </p>
                            </div>

                            {/* Health Information */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Health and Fitness Information</h2>
                                <p className="text-white/70 leading-relaxed">
                                    As a fitness facility, we may collect health-related information to ensure your safety and
                                    provide appropriate services. This information may include medical conditions, physical
                                    limitations, or fitness goals. We treat this information with the highest level of
                                    confidentiality and use it solely for the purpose of providing safe and effective fitness
                                    services. We do not share health information with third parties except as required by law or
                                    in case of emergency.
                                </p>
                            </div>

                            {/* Changes to Policy */}
                            <div className="card mb-8">
                                <h2 className="text-xl font-semibold text-white mb-4">Changes to This Privacy Policy</h2>
                                <p className="text-white/70 leading-relaxed">
                                    We may update this Privacy Policy from time to time to reflect changes in our practices or
                                    for other operational, legal, or regulatory reasons. We will notify you of any material
                                    changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                                    We encourage you to review this Privacy Policy periodically.
                                </p>
                            </div>

                            {/* Contact Information */}
                            <div className="card bg-gradient-to-r from-[#00D4FF]/10 to-[#39FF14]/10 border-[#00D4FF]/30">
                                <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                                <p className="text-white/70 leading-relaxed mb-4">
                                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                                </p>
                                <div className="space-y-2 text-white/70">
                                    <p><strong className="text-white">Get Fit</strong></p>
                                    <p>Address: {businessInfo.address}</p>
                                    <p>Phone: <a href={`tel:${businessInfo.phone}`} className="text-[#00D4FF] hover:underline">{businessInfo.phone}</a></p>
                                    <p>Email: <a href={`mailto:${businessInfo.email}`} className="text-[#00D4FF] hover:underline">{businessInfo.email}</a></p>
                                </div>
                            </div>
                        </div>

                        {/* Back to top */}
                        <div className="mt-12 text-center">
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="btn-secondary"
                            >
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PrivacyPolicy;

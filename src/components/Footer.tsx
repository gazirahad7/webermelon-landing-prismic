export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-800 via-slate-900 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Lets get start
              </h3>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
                hi@webermelon.com
              </h2>
            </div>

            {/* Addresses */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* USA Address */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3">
                  USA Address:
                </h4>
                <address className="text-sm text-gray-300 not-italic leading-relaxed">
                  25108 Marguerite Pkwy Suite
                  <br />
                  A-206 Mission Viejo Ca 92692
                </address>
              </div>

              {/* UK Address */}
              <div>
                <h4 className="text-base font-semibold text-white mb-3">
                  UK Address:
                </h4>
                <address className="text-sm text-gray-300 not-italic leading-relaxed">
                  Webermelon Limited 71-75 Shelton
                  <br />
                  Street, Covent Garden London
                </address>
              </div>
            </div>

            {/* Additional USA Address */}
            <div>
              <h4 className="text-base font-semibold text-white mb-3">
                USA Address:
              </h4>
              <address className="text-sm text-gray-300 not-italic leading-relaxed">
                Webermelon, 51/A, Tahirub Tower,
                <br />
                3, Jakir Hossain Road, South
                <br />
                Khulshi, Chittagong
              </address>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div>
            <h4 className="text-base font-semibold text-white mb-6">
              Our Expertise
            </h4>
            <ul className="space-y-3">
              {[
                "Laravel Developer",
                "PHP Developer",
                "WordPress Theme Development",
                "MERN Stack Development",
                "WordPress Developer",
                "Software Developer",
                "Mobile App Developer",
                "Vue Js Developer",
                "Node Js Developer",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-300 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6">
          <p className="text-xs text-gray-400 text-center lg:text-left">
            © 2025 webermelon. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

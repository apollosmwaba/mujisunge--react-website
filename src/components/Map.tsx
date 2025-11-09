const Map = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Location</h2>
        </div>

        <div className="h-96 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61493.15738969!2d28.2636!3d-15.3875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f2d6a4e0d8e7%3A0x7a9c1d5e5e5e5e5e!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1698500000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Lusaka, Zambia - General Area"
          />
        </div>

        {/* Address Display */}
        <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center">
          <h3 className="text-xl font-bold text-[#1e5d3b] dark:text-[#2e8b57] mb-3">
            Our Address
          </h3>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            25a Munali Road, Kwamwena Valley<br />
            Kapwayambale, Lusaka, Zambia
          </p>
          <div className="mt-4">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#2e8b57] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e5d3b] transition-colors duration-300"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              View on Google Maps
            </a>
          </div>
        </div>

      

        {/* Market Segments Section */}
        <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
          <div className="text-center mb-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Mujisunge Farms targets several distinct market segments in Chongwe and Lusaka, including small-scale farmers, agribusinesses, government agencies and NGOs, consumers, and educational institutions. By tailoring its products and services to meet the specific needs of each group, we seek to increase our market reach and profitability.
            </p>
          </div>

          {/* Location Markers */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-colors duration-300">
              <span className="font-semibold text-lg">Chongwe</span>
            </div>
            <div className="flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full shadow-md transition-colors duration-300">
              <span className="font-semibold text-lg">Lusaka</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;

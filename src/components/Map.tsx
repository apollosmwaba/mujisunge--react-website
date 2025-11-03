const Map = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="section-title">
          <h2>Our Location</h2>
        </div>

        <div className="h-96 rounded-lg overflow-hidden shadow-xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3843.322845185831!2d28.28328531482955!3d-15.41392808945152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f2d6a4e0d8e7%3A0x7a9c1d5e5e5e5e5e!2sLusaka%2C%20Zambia!5e0!3m2!1sen!2s!4v1698500000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mujisunge Farm Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Map;

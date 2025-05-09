function Blogs() {
  return (
    <div className="blogs">
      <h1 className="ps">Explore the World with Our Travel Blogs</h1>

      {/* Don't self-close this div with a slash if it's supposed to be a block */}
      <div></div> 

      <div className="img1">
        <video width={300} height={300} controls>
  <source src="/videos/videoplayback.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
      </div>

      <div className="connect">
        <h2>Discover Amazing Destinations</h2>
        <p>Traveling opens the door to new experiences, cultures, and adventures. Whether you are looking for breathtaking landscapes, historic landmarks, or vibrant city life, our blogs provide insights to make your journey unforgettable.</p>
      </div>

      <div className="build">
        <h2>Plan Your Next Adventure</h2>
        <p className="pee">From the beaches of Bali to the mountains of Switzerland, our expert guides offer travel tips, budget hacks, and must-visit attractions to help you plan the perfect trip.</p>
      </div>

      <div className="tips">
        <h2>Essential Travel Tips</h2>
        <ul>
          <li>🌍 Choose the best season to visit your dream destination.</li>
          <li>✈️ Book flights and accommodation in advance for better deals.</li>
          <li>🗺️ Explore off-the-beaten-path locations for unique experiences.</li>
          <li>🍽️ Try local cuisine and immerse yourself in different cultures.</li>
          <li>📷 Capture memories but also live in the moment!</li>
        </ul>
      </div>
    </div>
  );
}

export default Blogs;

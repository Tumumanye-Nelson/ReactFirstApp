
function Experiences() {
  const experiences = [
    {
      id: 1,
      title: "Scenic Mountain Hike",
      description: "Explore breathtaking mountain trails with experienced guides.",
    },
    {
      id: 2,
      title: "Relaxing Beach Getaway",
      description: "Unwind on golden sands and enjoy stunning ocean views.",
    },
    {
      id: 3,
      title: "City Cultural Tour",
      description: "Dive into the culture and history of vibrant cities.",
    },
  ];

  return (
    <div className="experiences">
      <h1>Discover Our Experiences</h1>
      <p>Find your perfect adventure with our curated experiences for travelers.</p>
      <div className="experience-cards">
        {experiences.map((experience) => (
          <div key={experience.id} className="experience-card">
            <img src={experience.image} alt={experience.title} className="experience-image" />
            <h2>{experience.title}</h2>
            <p>{experience.description}</p>
            <button className="book-now-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiences;

import photo from './assets/uganda.jpg';

const Home = () => {
  return (
    <div 
      className="home-container" 
      style={{
        backgroundImage: `url(${photo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        color: 'white'
      }}
    >
      <h1 className='homeh4'>Uganda is the best tourism destination</h1>
      <div className="description">
        <p>We have a variety of tourism cities in Uganda.</p>
        <p>To learn more about tourism destinations, click the link below.</p>
      </div>
      <a 
        className="tourism-link" 
        href="https://www.google.com/search?q=uganda+tourism+attractions" 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'red', textDecoration: 'none' }}
      >
        LINK
      </a>
    </div>
  );
};

export default Home;

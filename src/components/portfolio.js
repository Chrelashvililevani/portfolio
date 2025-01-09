import React from 'react';

const Portfolio = () => {
  return (
    <div className='main-container'>
      <header>
        <h1>Check projects done below</h1>
      </header>
      <main className='portfolio-main'>
        <h2>Live Projects</h2>
        <p><a href="https://art-project-ika.netlify.app/" target="_blank" rel="noopener noreferrer">Art Project</a></p>
        <p><a href="https://perfume-ika.netlify.app/" target="_blank" rel="noopener noreferrer">Perfume Project</a></p>
        <p><a href="https://boqo-wines.netlify.app/" target="_blank" rel="noopener noreferrer">Boqo Wines</a></p>
        <p><a href="https://georgianvine.ge/" target="_blank" rel="noopener noreferrer">Georgian Vine</a></p>
      </main>
    </div>
  );
};

export default Portfolio;

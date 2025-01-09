import React from 'react';

const Portfolio = () => {
  return (
    <>
      <style>
        {`
          .main-container {
            text-align: center;
            background-color: #121212;
            color: white;
            padding: 20px;
            height: 100%
          }

          h1, h2 {
            color: white;
          }

          .portfolio-main a {
            color: white;
            text-decoration: none;
            font-size: 18px;
            display: block;
            margin: 10px 0;
          }

          .portfolio-main a:hover {
            color: #00bcd4;
            text-decoration: underline;
          }
        `}
      </style>
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
    </>
  );
};

export default Portfolio;

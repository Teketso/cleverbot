import React, { useState } from 'react';
import './cards.css';

const Cards = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  const cards = [
    { title: 'STRATEGY', description: 'Money Momentum' ,long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%", percent:'3 yrs CAGR' ,bgClass: 'card-bg-1' },
    { title: 'PLANS', description: 'Long-Term',long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%" ,  percent:'3 yrs CAGR' ,bgClass: 'card-bg-2' },
    { title: 'STRATEGY', description: 'Focussed',long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%" ,  percent:'3 yrs CAGR' , bgClass: 'card-bg-3' },
    { title: 'PLANS', description: 'Fixed Income', long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%",  percent:'3 yrs CAGR' ,bgClass: 'card-bg-4' },
    { title: 'STRATEGY', description: 'This is plan E description.', long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%", percent:'3 yrs CAGR' ,bgClass: 'card-bg-5' },
    { title: 'PPLANS', description: 'This is plan F description.',long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%", percent:'3 yrs CAGR' , bgClass: 'card-bg-6' },
    { title: 'STRATEGY', description: 'This is plan G description.', long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%" , percent:'3 yrs CAGR' ,bgClass: 'card-bg-7' },
    { title: 'PLANS', description: 'This is plan H description.', long_description:'Tract Premium helps you start saver inverstments insights covering', years:"7.20%" , percent:'3 yrs CAGR' ,bgClass: 'card-bg-8' },
  ];

  return (
    <div className="second-component">
      <div className="container">
        <div className="second-component-header">
          <h2 className="left-title">Featured Plans</h2>
          <button className="explore-btn" onClick={toggleShowMore}>
            {showMore ? 'Show Less' : 'Explore All'}
          </button>
        </div>

        <div className="card-container">
          {/* Display the first 4 cards initially */}
          {cards.slice(0, 4).map((card, index) => (
            <div key={index} className={`card ${card.bgClass}`}>
             <p>{card.title}</p>
              <h3>{card.description}</h3>
              <p style={{ textAlign: 'start' }}>{card.long_description}</p>

              <hr/>
             <div className='twoColumn'>
             <div>
             <p>{card.percent}</p>
             <h3>{card.years}</h3>
             </div>
             <div>
             <button class="icon-button">
  <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path d="M0 8a.5.5 0 0 1 .5-.5h12.707L10.854 5.646a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.207 8.5H.5A.5.5 0 0 1 0 8z"/>
  </svg>
</button>

             </div>
             </div>
              
             
            </div>
          ))}

          {/* If showMore is true, display the additional cards */}
          {showMore && (
            cards.slice(4).map((card, index) => (
              <div key={index + 4} className={`card ${card.bgClass}`}>
                
             <p>{card.title}</p>
              <h3>{card.description}</h3>
              <p style={{ textAlign: 'start' }}>{card.long_description}</p>

              <hr/>
             <div className='twoColumn'>
             <div>
             <p>{card.percent}</p>
             <h3>{card.years}</h3>
             </div>
             <div>
             <button class="icon-button">
  <svg width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
    <path d="M0 8a.5.5 0 0 1 .5-.5h12.707L10.854 5.646a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.207 8.5H.5A.5.5 0 0 1 0 8z"/>
  </svg>
</button>

             </div>
             </div>
              
             
            
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;

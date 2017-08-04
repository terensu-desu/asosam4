import React from 'react';

class PortfolioFill extends React.Component {
  render() {
    const clearMargin = {
      marginTop: "0"
    }
    const cardsData = this.props.langData[2]
    const cardMap = cardsData.map((card, i) => 
      <div className="col l4" key={i}>
        <div className="card z-depth-4">
            <div className="card-image video-container">
              <iframe title={"video"+i} width="853" height="480" src={ card.vlink } frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card-content">
              <h5 className="card-title" style={ clearMargin }>{ card.title }</h5>
              <p>{ card.text }</p>
            </div>
              <div className="card-action">
              <a href={ card.url }>View this website</a>
            </div>
          </div>
      </div>                      
    )
    
    return (
      <div>
        { cardMap }
      </div>
    )
  } 
}

export default PortfolioFill
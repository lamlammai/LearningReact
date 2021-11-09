import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./CarouselIcon.css";
const historyIcon={
    heart: "heart",
    play: "play-circle",
    different:"ellipsis-h",
}
function CarouselIcon() {
    return (
      <>
          <div className="HistoryIcon">
                    <a href="123" className="history-link-icon">
                        <FontAwesomeIcon className="HistoryIcon-item" icon={historyIcon.heart}/>
                    </a>
                    <a href="123" className="history-link-icon">
                        <FontAwesomeIcon className="HistoryIcon-item" icon={historyIcon.play}/>
                    </a>
                    <a href="123" className="history-link-icon">
                        <FontAwesomeIcon className="HistoryIcon-item" icon={historyIcon.different}/>
                    </a>
            </div>
      </>
    );
  }
export default CarouselIcon;
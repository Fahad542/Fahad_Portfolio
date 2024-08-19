import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css'; 
import {timelineElements, Projects} from './Data'; 
const Timeline = () => {
  return (
    <div className="verticaltimeline-container">
      <VerticalTimeline >
        {timelineElements.map((element) => (
          <VerticalTimelineElement
            key={element.key}
            date={element.date}
            
            dateClassName="date"
            iconStyle={{ background: 'rgb(33)', color: '#000' }} 
          >
            <h3 className="vertical-timeline-element-title" >{element.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{element.subtitle}</h4>
            <p>{element.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;

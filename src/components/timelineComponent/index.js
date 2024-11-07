import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const TimelineComponent = () => {
  return (
    <div>
      <VerticalTimeline lineColor='black'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work m-0 h-3'
          iconStyle={{
            background: "black",
            color: "black",
            width: "15px",
            height: "15px",
            left: "54%",
          }}
        >
          <p>Tell Us Your Needs</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work m-0 h-3'
          iconStyle={{
            background: "black",
            color: "black",
            width: "15px",
            height: "15px",
            left: "54%",
          }}
        >
          <p>Choose Your Temporary Home</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work h-3'
          iconStyle={{
            background: "black",
            color: "black",
            width: "15px",
            height: "15px",
            left: "54%",
          }}
        >
          <p>Lock in Your Selection</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work h-3'
          iconStyle={{
            background: "black",
            color: "black",
            width: "15px",
            height: "15px",
            left: "54%",
          }}
        >
          <p>Welcome Home</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default TimelineComponent;

"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export const History = () => {
  const events = [
    {
      id: 1,
      date: "2011 - present",
      title: "Evento anómalo",
      subtitle: "Subtítulo",
      description:
        "Foto tomada el día de sembrado a las 15:00 pm para verificar el historial",
    },
    {
      id: 2,
      date: "2011 - present",
      title: "Evento anómalo",
      subtitle: "Subtítulo",
      description:
        "Foto tomada el día de sembrado a las 15:00 pm para verificar el historial",
    },
    {
      id: 3,
      date: "2011 - present",
      title: "Evento anómalo",
      subtitle: "Subtítulo",
      description:
        "Foto tomada el día de sembrado a las 15:00 pm para verificar el historial",
    },
  ];
  return (
    <div className="bg-slate-100">
      <VerticalTimeline>
        {events.map((el) => (
          <VerticalTimelineElement
            key={el.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#fff", color: "black" }}
            contentArrowStyle={{ borderRight: "5px solid  #fff" }}
            date={el.date}
            iconStyle={{ background: "#9bbe41", color: "#fff" }}
            //icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">{el.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {el.subtitle}
            </h4>
            <p>{el.description}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2010 - 2011"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          //icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Art Director</h3>
          <h4 className="vertical-timeline-element-subtitle">
            San Francisco, CA
          </h4>
          <p>
            Creative Direction, User Experience, Visual Design, SEO, Online
            Marketing
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

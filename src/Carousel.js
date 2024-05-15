import React from 'react';

import { FaOilWell } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";
import { Carousel } from 'react-bootstrap';

const Project = ({ image, summary, detailLink }) => (
  <div style={{ marginBottom: '20px' }}>
    {image}
    <p>{summary}</p>
    <a href={detailLink}>More Details</a>
  </div>
);

const ProjectList = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      image: <FaOilWell />,
      summary: 'GCP and Oil/Gas ML',
      detailLink: 'https://github.com/markfyoung0711/model_training'
    },
    {
      id: 2,
      image: <GrReactjs />,
      summary: 'React Personal company website',
      detailLink: 'https://github.com/markfyoung0711/ai_myoung'
    },
    // Add more projects as needed
  ];

  return (
        <section>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <Carousel>
            {projects.map((project, index) => (
                <Carousel.Item key={index}>
                            <Project
                            key={project.id}
                            image={project.image}
                            summary={project.summary}
                            detailLink={project.detailLink}
                            />
                        )}
                <Carousel.Caption>
                    <p>Caption</p>
                </Carousel.Caption>
                </Carousel.Item>
            ))}
            </Carousel>
        </section>
  );
};

export default ProjectList;

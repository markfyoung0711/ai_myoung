import React from 'react';
import { FaOilWell } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";

const Project = ({ image, title, summary, detailLink }) => (
  <div class="border-top border-primary">
    <div class="container">
        <div class="row">
            <div class="col-xs">
                {image}
            </div>

            <div class="col-sm">
                {title}
            </div>

            <div class="col-md">
                {summary}
            </div>

            <div class="col-sm">
                <a href={detailLink}>Details</a>
            </div>
        </div>
    </div>
  </div>
);

const ProjectList = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      image: <FaOilWell />,
      title: 'GCP and Oil/Gas ML',
      summary: 'This uses daily oil gas production numbers to train a machine learning model on Google Cloud Platform',
      detailLink: 'https://github.com/markfyoung0711/model_training'
    },
    {
      id: 2,
      image: <GrReactjs />,
      title: 'React Javascript Website',
      summary: 'This is the code for this website',
      detailLink: 'https://github.com/markfyoung0711/ai_myoung'
    },
    // Add more projects as needed
  ];

  return (
        <section>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
        <div class="jumbotron jumbotron-fluid">
             <div class="container">
                <h1 class="display-4">Projects</h1>
                <p class="lead">
                These are our current projects.
                </p>
                {projects.map(project => (
                    <Project
                    key={project.id}
                    image={project.image}
                    title={project.title}
                    summary={project.summary}
                    detailLink={project.detailLink}
                    />
                ))}
             </div>
        </div>
        </section>
  );
};

export default ProjectList;

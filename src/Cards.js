import React from 'react';
import { FaOilWell } from "react-icons/fa6";
import { GrReactjs } from "react-icons/gr";

const Card = ({ image, title, summary, detailLink }) => (
    <div class="card" style="width: 18rem;">
    {image}
    <div class="card-body">
        <h5 class="card-title">{title}</h5>
        <p class="card-text">{summary}</p>
        <a href="{detailLink}" class="btn btn-primary">Details</a>
    </div>
    </div>
);

const CardList = () => {
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
      title: 'React Personal company website',
      summary: 'Develop this web site',
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
                    <Card
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

export default CardList;

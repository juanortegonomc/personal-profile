import React from 'react';

const TechStack: React.FC = () => {
  const technologies = [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'GraphQL',
    'PostgreSQL',
  ];

  return (
    <div className="tech-stack">
      <h3>Tech Stack</h3>
      <ul>
        {technologies.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default TechStack;

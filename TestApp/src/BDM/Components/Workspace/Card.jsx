import React from 'react';
import CardComponent from './CardComponent';

const Card = () => {
  const cardData = [
    {
      id: 1,
      clause: 'Price Standard',
      status: 'In Progress',
      description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
      tags: ['Company policies', 'HR', 'Code Of Conduct'],
      category: 'Administrative',
      date: '23 May 2023',
      version: 4,
    },
    {
        id: 2,
        clause: 'Price Standard',
        status: 'In Progress',
        description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
        tags: ['Company policies', 'HR', 'Code Of Conduct'],
        category: 'Administrative',
        date: '23 May 2023',
        version: 4,
      },
      {
        id: 3,
        clause: 'Price Standard',
        status: 'Rework',
        description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
        tags: ['Company policies', 'HR', 'Code Of Conduct'],
        category: 'Administrative',
        date: '23 May 2023',
        version: 4,
      },
      {
        id: 4,
        clause: 'Price Standard',
        status: 'Rework',
        description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
        tags: ['Company policies', 'HR', 'Code Of Conduct'],
        category: 'Administrative',
        date: '23 May 2023',
        version: 4,
      },
      {
        id: 5,
        clause: 'Price Standard',
        status: 'Rework',
        description: 'The written agreement includes information about settlement and any penalties for non-payment on the agreement.',
        tags: ['Company policies', 'HR', 'Code Of Conduct'],
        category: 'Administrative',
        date: '23 May 2023',
        version: 4,
      },
    // Add more card data as needed
  ];

  return (
    <div>
      {cardData.map((data) => (
        <CardComponent
          key={data.id}
          clause={data.clause}
          status={data.status}
          description={data.description}
          tags={data.tags}
          category={data.category}
          date={data.date}
          version={data.version}
        />
      ))}
    </div>
  );
};

export default Card;

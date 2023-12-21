import React from 'react';
  const userBenefits = [
    {
      title: 'Developers',
      description: 'Effective task management for organizing coding projects and deadlines.',
      icon: '💻',
    },
    {
      title: 'Corporate Professionals',
      description: 'Efficiently manage tasks and projects in a corporate environment.',
      icon: '👔',
    },
    {
      title: 'Bankers',
      description: 'Organize financial tasks, deadlines, and project workflows.',
      icon: '💰',
    },
    // Add more user types as needed
  ];

const Benifit = () => {
  return (
    <div>
       <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Who Can Benefit?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userBenefits?.map((user, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4 text-center">{user.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-center">{user.title}</h3>
              <p className="text-gray-700 text-center">{user.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default Benifit;
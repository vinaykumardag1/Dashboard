import React from 'react'
import Profile_icon from '../assets/icons8-administrator-male-96.png'
const Info = () => {
  const people = [
    { name: 'John Doe', role: 'Developer', email: 'john@example.com', image:Profile_icon },
    { name: 'Jane Smith', role: 'Designer', email: 'jane@example.com', image: Profile_icon},
    { name: 'Sam Wilson', role: 'Project Manager', email: 'sam@example.com', image: Profile_icon }
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Team Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((person, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md transform transition duration-500 hover:scale-105">
            <img src={person.image} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold text-center">{person.name}</h3>
            <p className="text-center text-gray-700">{person.role}</p>
            <p className="text-center text-gray-500">{person.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Info

import { useState } from 'react';
import ProfileCard from './ProfileCard';


const ProfileGrid = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: 'John Doe',
      description: 'Software Engineer passionate about React',
      imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      buttonText: 'Connect'
    },
    {
      id: 2,
      name: 'Jane Smith',
      description: 'UX Designer with 5+ years of experience',
      imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      buttonText: 'connect'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      description: 'Data Scientist specializing in Machine Learning',
      imageUrl: 'https://randomuser.me/api/portraits/men/3.jpg',
      buttonText: 'connect'
    },
    {
      id: 4,
      name: 'Emily Chen',
      description: 'Product Manager with a focus on AI innovations',
      imageUrl: 'https://randomuser.me/api/portraits/women/4.jpg',
      buttonText: 'connect'
    },
    {
      id: 5,
      name: 'Alex Rodriguez',
      description: 'Cybersecurity Expert and Ethical Hacker',
      imageUrl: 'https://randomuser.me/api/portraits/men/5.jpg',
      buttonText: 'connect'
    },
    {
      id: 6,
      name: 'Sarah Kim',
      description: 'Cloud Solutions Architect and AWS Certified',
      imageUrl: 'https://randomuser.me/api/portraits/women/6.jpg',
      buttonText: 'connect'
    }
  ]);

  return (
    <div className="container-fluid bg-light py-5">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {profiles.map(profile => (
            <div key={profile.id} className="col">
              <ProfileCard
                name={profile.name}
                description={profile.description}
                imageUrl={profile.imageUrl}
                buttonText={profile.buttonText}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProfileGrid;
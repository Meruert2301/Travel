import React from 'react';
import './Guides.css';

function Guides() {
  const guides = [
    {
      name: 'Аспандияр Таукен',
      role: 'Специалист по туристическим объектам Северного Казахстана',
      description:
        'Аспандияр знакомит туристов с живописными озерами и лесами Северного Казахстана.',
      image: '/images/aspan.jpeg',
      whatsapp: '77760714789', 
    },
    {
      name: 'Ариана Кумисбек',
      role: 'Специалист по туристическим объектам Южного Казахстана',
      description:
        'Ариана знает все о древних городах и культурных достопримечательностях Южного Казахстана.',
      image: '/images/ariana.jpeg',
      whatsapp: '77006479396', 
    },
    {
      name: 'Данар Елтай',
      role: 'Специалист по туристическим объектам Западного Казахстана',
      description:
        'Данар специализируется на уникальной природе Западного Казахстана.',
      image: '/images/danar.jpeg',
      whatsapp: '77058922569', 
    },
    {
      name: 'Меруерт Даниярова',
      role: 'Специалист по туристическим объектам Восточного Казахстана',
      description:
        'Меруерт знает все о горных районах, озерах и долинах Восточного Казахстана.',
      image: '/images/meruert.jpeg',
      whatsapp: '77051076809', 
    },
  ];

  return (
    <section id="guides" className="guides">
      <h2>Наши гиды</h2>
      <div className="guide-grid">
        {guides.map((guide, index) => (
          <div key={index} className="guide-member">
            <img src={guide.image} alt={guide.name} className="guide-member-image" />
            <div className="guide-member-content">
              <h3>{guide.name}</h3>
              <p className="guide-member-role">{guide.role}</p>
              <p className="guide-member-description">{guide.description}</p>
              <a
                href={`https://api.whatsapp.com/send?phone=${guide.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="guide-whatsapp-button"
              >
                Связаться WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Guides;
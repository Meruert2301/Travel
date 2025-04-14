import React, { useState } from 'react';
import './Destinations.css';

function Destinations() {
  const [modalData, setModalData] = useState(null);
  const [cityData, setCityData] = useState(null);

  const destinations = [
    {
      title: 'Северный Казахстан',
      description:
        'Северный Казахстан славится своими живописными озерами, лесами и историческими памятниками.',
      image: '/images/severkz.jpg',
      cities: [
        {
          name: 'Боровое',
          image: '/images/borovoe.jpeg',
          sights: [
            { name: 'Озеро Бурабай', image: '/images/ozero_borovoe.jpg' },
            { name: 'Скала Окжетпес', image: '/images/okzhetpes.jpg' },
            { name: 'Гора Бурабай', image: '/images/burabay_mountain.jpg' }
          ],
          hotels: [
            { name: 'Rixos Borovoe', image: '/images/rixos_borovoe.jpeg' },
            { name: 'Green Park Hotel', image: '/images/green_park.jpg' },
            { name: 'Burabay Resort', image: '/images/burabay_resort.jpg' }
          ]
        },
        {
          name: 'Шалкарско-Имантауская зона',
          image: '/images/shalkar.jpeg',
          sights: [
            { name: 'Озеро Шалкар', image: '/images/ozero_shalkar.jpg' },
            { name: 'Имантау', image: '/images/imanatau.jpg' },
            { name: 'Музей природы', image: '/images/museum_nature.jpg' }
          ],
          hotels: [
            { name: 'Shalkar Resort', image: '/images/shalkar_resort.jpg' },
            { name: 'Imantau Hotel', image: '/images/imanatau_hotel.jpg' },
            { name: 'Zhanat Hotel', image: '/images/zhana_hotel.jpeg' }
          ]
        },
        {
          name: 'Озеро Щучье',
          image: '/images/schuchye.jpg',
          sights: [
            { name: 'Щучье озеро', image: '/images/schuchye_ozero.jpg' },
            { name: 'Парк отдыха', image: '/images/park_otdyha.jpg' },
            { name: 'Курортная зона', image: '/images/kurortnaya_zona.jpg' }
          ],
          hotels: [
            { name: 'Schuchye Resort', image: '/images/schuchye_resort.jpeg' },
            { name: 'Dostyk Hotel', image: '/images/dostyk_hotel.jpg' },
            { name: 'Solnechnaya Hotel', image: '/images/solnechnaya_hotel.jpg' }
          ]
        },
        {
          name: 'Астана',
          image: '/images/astana.png',
          sights: [
            { name: 'Байтерек', image: '/images/baiterek.png' },
            { name: 'Триумфальная Арка', image: '/images/triumf.jpeg' },
            { name: 'Ботанический сад', image: '/images/botanicsad.jpg' }
          ],
          hotels: [
            { name: 'Radisson', image: '/images/radisson.jpg' },
            { name: 'Hilton', image: '/images/hilton.png' },
            { name: 'Sheraton Hotel', image: '/images/sheraton.jpg' }
          ]
        }
      ]
    },
    {
      title: 'Южный Казахстан',
      description:
        'Южный Казахстан — это регион с богатой культурой и историей. Здесь находятся древние города, такие как Туркестан, Тараз и знаменитый Алматы.',
      image: '/images/ugkz.jpg',
      cities: [
        {
          name: 'Алматы',
          image: '/images/almaty.jpg',
          sights: [
            { name: 'Медео', image: '/images/medeo.jpg' },
            { name: 'Кок-Тобе', image: '/images/kok-tobe.png' },
            { name: 'Чарынский каньон', image: '/images/charyn.jpg' }
          ],
          hotels: [
            { name: 'InterContinental Almaty', image: '/images/intercontinental_almaty.jpg' },
            { name: 'Ritz-Carlton', image: '/images/ritz_carlton.jpg' },
            { name: 'Grand Hotel', image: '/images/grand_hotel.jpeg' }
          ]
        },
        {
          name: 'Шымкент',
          image: '/images/shymkent.png',
          sights: [
            { name: 'Арбат', image: '/images/arbat.jpg' },
            { name: 'Парк Шымкента', image: '/images/park_shymkent.jpg' },
            { name: 'Шымкент Плаза', image: '/images/shymkent_plaza.jpg' }
          ],
          hotels: [
            { name: 'Emerald', image: '/images/emeraldhotel.jpg' },
            { name: 'Nomad Hotel', image: '/images/nomad_hotel.jpg' },
            { name: 'Hazret', image: '/images/hazret.jpg' }
          ]
        },
        {
          name: 'Тараз',
          image: '/images/taraz.jpg',
          sights: [
            { name: 'Мавзолей Айша-Биби', image: '/images/mausoleum_aysha_bibi.jpg' },
            { name: 'Тектурмас', image: '/images/tekturmas.jpg' },
            { name: 'Площадь Шахристан', image: '/image/shahristanploshad.jpg' }
          ],
          hotels: [
            { name: 'Zhambyl Hotel', image: '/images/taraz_hotel.jpg' },
            { name: 'Duman Hotel', image: '/images/duman_hotel.jpg' },
            { name: 'Dostyk Hotel', image: '/images/dostyk_hotel_taraz.jpg' }
          ]
        },
        {
          name: 'Туркестан',
          image: '/images/turkestan.jpg',
          sights: [
            { name: 'Мавзолей Ходжи Ахмеда Ясави', image: '/images/mausoleum_yasavi.jpg' },
            { name: 'Караван-Сарай', image: '/images/karavan.png' },
            { name: 'Бабаджа-хатун', image: '/images/babadja_khatun.jpg' }
          ],
          hotels: [
            { name: 'Rixos Turkistan', image: '/images/rixosturkistan.jpg' },
            { name: 'Khanaka', image: '/images/khanaka.jpg' },
            { name: 'Hadju', image: '/images/hadju.jpg' }
          ]
        }
      ]
    },
    {
      title: 'Западный Казахстан',
      description:
        'Западный Казахстан известен своей уникальной природой, включая Каспийское море, Атырау и Актау. Это место для любителей необычных пейзажей.',
      image: '/images/zapadkaz.jpg',
      cities: [
        {
          name: 'Атырау',
          image: '/images/atyray.jpeg',
          sights: [
            { name: 'Каспийское море', image: '/images/caspian_sea.jpg' },
            { name: 'Мечеть Хазрет-Султан', image: '/images/hazret_sultan_mosque.jpg' },
            { name: 'Атырауский мост', image: '/images/atyrau_bridge.jpg' }
          ],
          hotels: [
            { name: 'Grand Hotel', image: '/images/atyrau_grand_hotel.jpeg' },
            { name: 'Rixos Atyrau', image: '/images/rixos_atyrau.jpg' },
            { name: 'Aselina Hostel', image: '/images/aselinahostel.jpg' }
          ]
        },
        {
          name: 'Актау',
          image: '/images/aktau.jpeg',
          sights: [
            { name: 'Каспийская коса', image: '/images/caspian_kosa.jpg' },
            { name: 'Гора Джеты-Огуз', image: '/images/dzhetyoguz_mountain.jpg' },
            { name: 'Скальная тропа', image: '/images/tropa.jpeg' }
          ],
          hotels: [
            { name: 'Rixos Hotel Aktaу', image: '/images/rixos_aktau.jpg' },
            { name: 'Seaside Holiday', image: '/images/holiday.png' },
            { name: 'Caspian Riviera', image: '/images/caspianrivivera.jpeg' }
          ]
        },
        {
          name: 'Уральск',
          image: '/images/uralysk.jpg',
          sights: [
            { name: 'Мечеть Достык', image: '/images/holiday.png' },
            { name: 'Уральская крепость', image: '/images/uralsk_fortress.jpg' },
            { name: 'Музей Уральска', image: '/images/uralsk_museum.jpg' }
          ],
          hotels: [
            { name: 'Урал', image: '/images/ural_hotel.jpg' },
            { name: 'Prestige Hotel', image: '/images/prestige_hotel_uralsk.jpg' },
            { name: 'Baikonis', image: '/images/baikonis.jpg' }
          ]
        },
        {
          name: 'Кызылорда',
          image: '/images/kyzylorda.jpg',
          sights: [
            { name: 'Мавзолей Акмешит-Сырдарья', image: '/images/mausoleumakmeshit.jpg' },
            { name: 'Центральная площадь', image: '/images/centralploshad.jpg' },
            { name: 'Парк первого президента РК', image: '/images/parkpresidenta.jpg' }
          ],
          hotels: [
            { name: 'Caribi Complex', image: '/images/caspianrivivera.jpeg' },
            { name: 'Inju', image: '/images/sultanplaza.jpg' },
            { name: 'Park Hotel', image: '/images/selena.jpg' }
          ]
        }
      ]
    },
    {
      title: 'Восточный Казахстан',
      description:
        'Восточный Казахстан — это горные районы, прекрасные озера и живописные долины.',
      image: '/images/vostokkz.jpg',
      cities: [
        {
          name: 'Усть-Каменогорск',
          image: '/images/ustkamenogorsk.jpeg',
          sights: [
            { name: 'Гора Маргуши', image: '/images/margushi_mountain.jpg' },
            { name: 'Озеро Алаколь', image: '/images/alakol_lake.jpg' },
            { name: 'Парк Победы', image: '/images/victory_park.jpg' }
          ],
          hotels: [
            { name: 'Rush Hotel', image: '/images/rushhotel.jpg' },
            { name: 'Han Hotel', image: '/images/khan_hotel.jpeg' },
            { name: 'Rama', image: '/images/Rama.jpg' }
          ]
        },
        {
          name: 'Семей',
          image: '/images/semey.jpg',
          sights: [
            { name: 'Дом музей Абая', image: '/images/abaimuseum.jpg' },
            { name: 'Музей Достоевского', image: '/images/dostoevskimuseum.jpg' },
            { name: 'Навесной мост', image: '/images/degelen.jpeg' }
          ],
          hotels: [
            { name: 'Turist', image: '/images/turist.jpg' },
            { name: 'Semipalatinsk', image: '/images/semipalatinsk.png' },
            { name: 'Arion', image: '/images/arion.png' }
          ]
        },
        {
          name: 'Альтайские Альпы',
          image: '/images/altaiskia.jpg',
          sights: [
            { name: 'Гора Казбек', image: '/images/kazbek_mountain.jpg' },
            { name: 'Гора Белуха', image: '/images/belukha_mountain.jpg' },
            { name: 'Горнолыжная база', image: '/images/baza.png' }
          ],
          hotels: [
            { name: 'Snow Hotel', image: '/images/snowhotel.jpg' },
            { name: 'Altai Resort', image: '/images/altai_resort.png' },
            { name: 'Sky Resort', image: '/images/sky_resort.png' }
          ]
        },
        {
          name: 'Катон-Карагай',
          image: '/images/katonkaragay.jpg',
          sights: [
            { name: 'Гора Катон', image: '/images/katon_mountain.jpg' },
            { name: 'Природный парк', image: '/images/nature_park.jpg' },
            { name: 'Озеро Бозжыра', image: '/images/bozzyra_lake.jpg' }
          ],
          hotels: [
            { name: 'Katon Hotel', image: '/images/katon_hotel.jpg' },
            { name: 'Muz Tau', image: '/images/muztau.jpg' },
            { name: 'Arystan', image: '/images/arystan.jpg' }
          ]
        }
      ]
    }
  ];

  const openModal = (destination) => {
    setModalData(destination);
  };

  const closeModal = () => {
    setModalData(null);
    setCityData(null);
  };

  const openCityModal = (city) => {
    setCityData(city);
  };

  return (
    <section id="destinations" className="destinations">
      <h2>Актуальные направления</h2>
      <div className="destinations-grid">
        {destinations.map((destination, index) => (
          <div key={index} className="destination-card" onClick={() => openModal(destination)}>
            <img src={destination.image} alt={destination.title} className="destination-image" />
            <div className="destination-content">
              <h3>{destination.title}</h3>
              <p>{destination.description}</p>
            </div>
          </div>
        ))}
      </div>

      {modalData && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{modalData.title}</h2>
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            <div className="modal-images">
              {modalData.cities.map((city, index) => (
                <div key={index} className="modal-image-card">
                  <img src={city.image} alt={city.name} />
                  <p>{city.name}</p>
                  <button className="details-button" onClick={() => openCityModal(city)}>
                    Подробнее
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {cityData && (
        <div className="modal-overlay" onClick={() => setCityData(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{cityData.name}</h2>
            <button className="modal-close" onClick={() => setCityData(null)}>
              &times;
            </button>
            <h3>Достопримечательности</h3>
            <div className="sights-grid">
              {cityData.sights.map((sight, index) => (
                <div key={index} className="sight-card">
                  <img src={sight.image} alt={sight.name} />
                  <p>{sight.name}</p>
                </div>
              ))}
            </div>
            <h3>Отели</h3>
            <div className="hotels-grid">
              {cityData.hotels.map((hotel, index) => (
                <div key={index} className="hotel-card">
                  <img src={hotel.image} alt={hotel.name} />
                  <p>{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Destinations;

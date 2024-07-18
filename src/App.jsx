import Card from './components/Card';
import ethiopia from './assets/ethiopia.jpg';
import paris from './assets/paris.jpg';
import ireland from './assets/ireland.jpg';
import rome from './assets/rome.jpg';
import { useState } from 'react';
function App() {
  const data = [
    {
      id: 1,

      price: 2000,
      image: ethiopia,
      title: 'Best Of Ethiopia In 7 Days Tour',
      content:
        "Ethiopia is a land of rich history and cultural diversity, offering an array of unique experiences that enchant travelers. Known as the cradle of humanity, this ancient country is where you can trace the roots of human civilization. On this tour, your knowledgeable guide will immerse you in the very best of Ethiopia's captivating heritage: the rock-hewn churches of Lalibela, the majestic castles of Gondar, the ancient city of Aksum, and the stunning lan'll also have the opportunity to explore the bustling streets of Addis Ababa, visit the holy city of Harar, and take in the vibrant local traditions and festivals.",
    },

    {
      id: 2,

      price: 1000,
      image: paris,
      title: 'Best Of Paris In 7 Days Tour',
      content:
        "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days",
    },
    {
      id: 3,

      price: 1300,
      image: ireland,
      title: 'Best Of Ireland  In 7 Days Tour',
      content:
        "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
    },
    {
      id: 4,

      price: 1400,
      image: rome,
      title: 'Best Of Rome  nd  In 7 Days Tour',
      content:
        "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
    },
  ];
  const [info, setInfo] = useState(data);
  const removeCard = (id) => {
    setInfo(info.filter((place) => place.id !== id));
  };

  if (info.length < 1) {
    return (
      <div className="  flex flex-col items-center justify-center mt-[10%]">
        <h1 className="mb-8 text-3xl font-bold">No Tours</h1>
        <button
          className="bg-purple-500 px-4 inline-block py-2 text-white"
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="px-8  pt-8 mb-8">
      <h1 className="text-center text-3xl font-bold mb-8">Best Destinations</h1>
      <div className="w-full max-w-5xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 items-start  ">
        {info.map((place) => (
          <Card {...place} key={place.id} removeCard={removeCard} />
        ))}
      </div>
    </div>
  );
}

export default App;

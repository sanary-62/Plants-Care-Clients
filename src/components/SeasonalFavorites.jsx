const SeasonalFavorites = () => {
  const favorites = [
    {
      name: "Peace Lily",
      image: "https://i.postimg.cc/VkKJn7Tn/peace-lily-01.jpg",
      season: "Spring",
    },
    {
      name: "Pothos",
      image: "https://i.postimg.cc/J4WHLHZD/golden-pothos-in-hanging-basket.avif",
      season: "Summer",
    },
    {
      name: "Snake Plant",
      image: "https://i.postimg.cc/L89qqdym/snake-plant-4985304-1280-682x1024.jpg",
      season: "Autumn",
    },
  ];

  return (
    <div className="my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-green-800 mb-6">🌼 Seasonal Favorites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {favorites.map((fav, i) => (
          <div key={i} className="bg-base-100 p-4 shadow rounded-xl text-center">
            <img src={fav.image} alt={fav.name} className="h-48 mx-auto rounded-lg object-cover" />
            <h3 className="text-xl mt-4 font-semibold text-green-700">{fav.name}</h3>
            <p className="text-sm text-gray-600">Best for: {fav.season}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SeasonalFavorites;
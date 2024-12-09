export default function CardsGrid() {
    const cards = [
      {
        author: "SaberAli",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mightly.",
        imageUrl: "/blog1.png",
      },
      {
        author: "Surfauxion",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mightly.",
        imageUrl: "/blog2.png",
      },
      {
        author: "SaberAli",
        date: "21 August 2020",
        title: "Top essential Trends in 2021",
        description:
          "More off this less hello samlande lied much over tightly circa horse taped mightly.",
        imageUrl: "/blog3.png",
      },
    ];
  
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md overflow-hidden bg-white"
            >
              <img
                src={card.imageUrl}
                alt={card.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="text-sm text-gray-600 flex items-center mb-2">
                  <span className="mr-2 text-pink-500">●</span>
                  <span>{card.author}</span>
                  <span className="mx-2">|</span>
                  <span>{card.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-700 mb-4">{card.description}</p>
                <a
                  href="#"
                  className="text-sm text-blue-500 font-medium hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
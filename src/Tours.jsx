function Tours() {
    const tours = [
        {
            id: 1,
            name: "Safari Adventure",
            description: "Experience the beauty of the savannah with guided tours.",
            price: 500,
            duration: "3 Days, 2 Nights",
        },
        {
            id: 2,
            name: "Mountain Trekking",
            description: "Conquer breathtaking peaks with experienced guides.",
            price: 300,
            duration: "2 Days, 1 Night",
        },
    ];

    return (
        <div className="tours">
            <h1>Tours</h1>
            {tours.map((tour) => (
                <div key={tour.id} className="tour-card">
                    <h2>{tour.name}</h2>
                    <p>{tour.description}</p>
                    <p><strong>Duration:</strong> {tour.duration}</p>
                    <p><strong>Price:</strong> ${tour.price}</p>
                </div>
            ))}
        </div>
    );
}

export default Tours;

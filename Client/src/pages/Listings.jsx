import { useEffect, useState } from "react";
import { getListings } from "../services/authService";

const Listings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const data = await getListings();
      setListings(data);
    };

    fetchListings();
  }, []);

  return (
    <div>
      <h2>All Listings</h2>
      {listings.map((listing) => (
        <div
          key={listing._id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{listing.title}</h3>

          <img
            src={listing.image}
            alt={listing.title}
            style={{ width: "200px", display: "block" }}
          />

          <p>{listing.description}</p>
          <p>₹{listing.price}</p>

          <small>Posted by: {listing.owner?.name}</small>
        </div>
      ))}
    </div>
  );
};

export default Listings;

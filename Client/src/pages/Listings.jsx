import { useEffect, useState } from "react";
import "../styles/cards.css";

import {
  getListings,
  deleteListing,
  updateListing,
} from "../services/authService";

const Listings = () => {
  // 🔹 React concept: state
  const [listings, setListings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    price: "",
  });

  // 🔹 React concept: useEffect (API side effect)
  useEffect(() => {
    const fetchListings = async () => {
      const data = await getListings();
      setListings(data);
    };
    fetchListings();
  }, []);

  // 🔹 SAFE token decoding (no render crash)
  let loggedInUserId = null;
  const token = localStorage.getItem("token");

  if (token) {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      loggedInUserId = payload.id;
    } catch {
      console.error("Invalid token");
    }
  }

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>All Listings</h2>

      <div className="card-grid">
        {listings.map((listing) => (
          <div className="card" key={listing._id}>
            {/* VIEW MODE */}
            {editingId !== listing._id ? (
              <>
                <img src={listing.image} alt={listing.title} />

                <div className="card-content">
                  <h3 className="card-title">{listing.title}</h3>

                  <p className="card-desc">{listing.description}</p>

                  <p className="card-price">₹{listing.price}</p>

                  <small style={{ color: "#6b7280" }}>
                    Posted by: {listing.owner?.name}
                  </small>

                  {/* 🔐 Owner-only actions */}
                  {listing.owner?._id === loggedInUserId && (
                    <div
                      style={{
                        marginTop: "12px",
                        display: "flex",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() => {
                          setEditingId(listing._id);
                          setEditForm({
                            title: listing.title,
                            description: listing.description,
                            price: listing.price,
                          });
                        }}
                      >
                        Edit
                      </button>

                      <button
                        onClick={async () => {
                          await deleteListing(listing._id);
                          setListings(
                            listings.filter((l) => l._id !== listing._id),
                          );
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              /* EDIT MODE */
              <div className="card-content">
                <input
                  value={editForm.title}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      title: e.target.value,
                    })
                  }
                />

                <input
                  value={editForm.description}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      description: e.target.value,
                    })
                  }
                />

                <input
                  type="number"
                  value={editForm.price}
                  onChange={(e) =>
                    setEditForm({
                      ...editForm,
                      price: e.target.value,
                    })
                  }
                />

                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <button
                    onClick={async () => {
                      const updated = await updateListing(
                        listing._id,
                        editForm,
                      );

                      setListings(
                        listings.map((l) =>
                          l._id === listing._id ? updated : l,
                        ),
                      );

                      setEditingId(null);
                    }}
                  >
                    Save
                  </button>

                  <button onClick={() => setEditingId(null)}>Cancel</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;

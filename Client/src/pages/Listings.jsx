import { useEffect, useState } from "react";
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

  // 🔹 React concept: useEffect (side effect – API call)
  useEffect(() => {
    const fetchListings = async () => {
      const data = await getListings();
      setListings(data);
    };

    fetchListings();
  }, []);

  // 🔹 Get logged-in user id from token (UI auth check)
  const loggedInUserId = JSON.parse(
    atob(localStorage.getItem("token")?.split(".")[1] || "{}")
  ).id;

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
          {/* VIEW MODE */}
          {editingId !== listing._id ? (
            <>
              <h3>{listing.title}</h3>

              <img
                src={listing.image}
                alt={listing.title}
                style={{ width: "200px", display: "block" }}
              />

              <p>{listing.description}</p>
              <p>₹{listing.price}</p>
              <small>Posted by: {listing.owner?.name}</small>

              {/* 🔐 Owner-only actions (UI-level auth) */}
              {listing.owner?._id === loggedInUserId && (
                <div style={{ marginTop: "10px" }}>
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
                    style={{ marginLeft: "10px" }}
                    onClick={async () => {
                      await deleteListing(listing._id);
                      setListings(
                        listings.filter((l) => l._id !== listing._id)
                      );
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </>
          ) : (
            /* EDIT MODE */
            <div>
              <input
                value={editForm.title}
                onChange={(e) =>
                  setEditForm({ ...editForm, title: e.target.value })
                }
              />

              <input
                value={editForm.description}
                onChange={(e) =>
                  setEditForm({ ...editForm, description: e.target.value })
                }
              />

              <input
                type="number"
                value={editForm.price}
                onChange={(e) =>
                  setEditForm({ ...editForm, price: e.target.value })
                }
              />

              <button
                onClick={async () => {
                  const updated = await updateListing(
                    listing._id,
                    editForm
                  );

                  setListings(
                    listings.map((l) =>
                      l._id === listing._id ? updated : l
                    )
                  );

                  setEditingId(null);
                }}
              >
                Save
              </button>

              <button
                style={{ marginLeft: "10px" }}
                onClick={() => setEditingId(null)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Listings;

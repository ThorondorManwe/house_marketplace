import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase.config";
import "swiper/swiper-bundle.css";
import Spinner from "./Spinner";
import { register } from "swiper/element/bundle";

register();

function Slider() {
  const [loading, setLoading] = useState(true);
  const [listings, setListings] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchListings = async () => {
      const listingsRef = collection(db, "listings");
      const q = query(listingsRef, orderBy("timestamp", "desc"), limit(5));
      const querySnap = await getDocs(q);

      let listings = [];

      querySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });

      setListings(listings);
      setLoading(false);
    };

    fetchListings();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (listings.length === 0) {
    return <></>;
  }

  console.log(listings);

  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p>

        <swiper-container slidesPerView={1} pagination={{ clickable: true }}>
          {listings.map(({ data, id }) => (
            <swiper-slide
              key={id}
              onClick={() => navigate(`/category/${data.type}/${id}`)}
            >
              <div
                style={{
                  backgroundImage: `url(${data.imgUrls[0]})`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: "cover",
                }}
                className="swiperSlideDiv"
              >
                <p className="swiperSlideText">{data.name}</p>
                <img src={data.imgUrls[0]} className="listings-cover" />
                <p className="swiperSlidePrice">
                  ${data.discountedPrice ?? data.regularPrice}{" "}
                  {data.type === "rent" && "/ month"}
                </p>
              </div>
            </swiper-slide>
          ))}
        </swiper-container>
      </>
    )
  );
}

export default Slider;

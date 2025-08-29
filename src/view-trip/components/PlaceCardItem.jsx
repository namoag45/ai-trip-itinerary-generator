import { Button } from '@/components/ui/button';
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
    const [photoUrl, setPhotoUrl] = useState();

    useEffect(() => {
        place && GetPlaceImg();
    }, [place])

    const GetPlaceImg = async () => {
        const data = {
            textQuery: place.placeName
        }
        const result = await GetPlaceDetails(data).then(resp => {
            const PhotoUrl = PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[0].name)
            setPhotoUrl(PhotoUrl);
            // console.log("placecarditem");
        // console.log(resp.data);

        })
    }
    return (
        <div>
            <Link to={'https://www.google.com/maps/search/?api=1&query=' + place?.placeName + "," + place?.geoCoordinates} target='_blank'>
                <div className='my-6 bg-gray-50 p-2 gap-6 border rounded-lg flex flex-cols-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer '>

                    <div className='py-2 mx-3'>
                        <img src={photoUrl ? photoUrl : '/road-trip-vocation.jpg'} className='w-[1500px] h-[250px] rounded-xl object-cover' />
                    </div>
                    <div>
                        <h2 className="text-xs font-medium text-gray-500">
  {place.timeRange}
</h2>

                        <h2 className='font-medium text-sm text-orange-600'>{place.day}</h2>
                        <h2 className='font-bold'>{place.placeName}</h2>
                        <p className='text-sm text-gray-500'>{place.placeDetails}</p>
                        <h2 className='text-blue-700 text-sm'>{place.ticketPricing}</h2>
                        <h2 className='text-sm text-yellow-500'>⭐{place.rating}</h2>
                    </div>
                    <div className='mt-36'>
                        <Button><FaLocationDot /></Button>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default PlaceCardItem



// /* eslint-disable react/prop-types */
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { FaLocationDot } from "react-icons/fa6";

// import { Button } from "@/components/ui/button";
// import { GetPlaceDetails, PHOTO_REF_URL } from "@/service/GlobalApi";

// export default function PlaceCardItem({ place }) {
//   const [photoUrl, setPhotoUrl] = useState("/road-trip-vocation.jpg");

//   useEffect(() => {
//     if (!place?.placeName) return;          // guard

//     async function fetchImage() {
//       try {
//         /* 1️⃣ call API with plain text query */
//         const { data } = await GetPlaceDetails({ textQuery: place.placeName });

//         /* 2️⃣ grab first photo safely */
//         const photoName = data?.places?.[0]?.photos?.[0]?.name;
//         if (photoName) setPhotoUrl(PHOTO_REF_URL(photoName));
//       } catch (err) {
//         console.error("Places photo fetch error:", err.response?.data || err);
//         // keep default placeholder image
//       }
//     }

//     fetchImage();
//   }, [place]);

//   return (
//     <Link
//       to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
//         place?.placeName
//       )},${place?.geoCoordinates ?? ""}`}
//       target="_blank"
//     >
//       <div className="my-4 bg-gray-50 p-2 gap-2 border rounded-lg flex hover:scale-105 transition-all hover:shadow-md cursor-pointer">
//         {/* Image */}
//         <div className="py-2 mx-3">
//           <img
//             src={photoUrl}
//             alt={place?.placeName}
//             className="w-[140px] h-[140px] rounded-xl object-cover"
//           />
//         </div>

//         {/* Text info */}
//         <div className="flex-grow">
//           <h2 className="font-medium text-sm text-orange-600">{place.day}</h2>
//           <h2 className="font-bold">{place.placeName}</h2>
//           <p className="text-sm text-gray-500">{place.placeDetails}</p>
//           <h2 className="text-blue-700 text-sm">{place.ticketPricing}</h2>
//           <h2 className="text-sm text-yellow-500">⭐{place.rating}</h2>
//         </div>

//         {/* Map icon */}
//         <div className="self-end mb-1">
//           <Button size="icon">
//             <FaLocationDot />
//           </Button>
//         </div>
//       </div>
//     </Link>
//   );
// }

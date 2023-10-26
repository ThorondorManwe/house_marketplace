/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
//import DeleteIcon from '../assets/svg/deleteIcon';
import DeleteIcon from "../assets/svg/deleteIcon.jsx";
import EditIcon from '../assets/svg/editIcon.jsx';
import bedIcon from '../assets/svg/bedIcon.svg'
import bathtubIcon from '../assets/svg/bathtubIcon.svg'

function ListingItem({ listing, id, onEdit, onDelete }) {
  return (
    <li className='categoryListing'>
      <Link
        to={`/category/${listing.type}/${id}`}
        className='categoryListingLink'
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className='categoryListingImg'
        />
        <div className='categoryListingDetails'>
          <p className='categoryListingLocation'>{listing.location}</p>
          <p className='categoryListingName'>{listing.name}</p>

          <p className='categoryListingPrice'>
            $
            {listing.offer
              ? listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
              : listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            {listing.type === 'rent' && ' / Month'}
          </p>
          <div className='categoryListingInfoDiv'>
            <img src={bedIcon} alt='bed' />
            <p className='categoryListingInfoText'>
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : '1 Bedroom'}
            </p>
            <img src={bathtubIcon} alt='bath' />
            <p className='categoryListingInfoText'>
              {listing.bathrooms > 1
                ? `${listing.bathrooms} Bathrooms`
                : '1 Bathroom'}
            </p>
          </div>
        </div>
      </Link>

      {onDelete && (
        <>
          <ul>
            <li className="navbarListItem" onClick={() => onDelete(listing.id, listing.name)}>
              <DeleteIcon
                className='removeIcon'
                fill='rgb(231, 76,60)'
                
              />
            </li>
          </ul>
        </>
      )}

      {onEdit && (
        <>
            <ul>
              <li className="navbarListItem" onClick={() => onEdit(id)}>
                  <EditIcon className='editIcon'  />
              </li>
            </ul>
        </>
      )}
    </li>
  )
}

export default ListingItem

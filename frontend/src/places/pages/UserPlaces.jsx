import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageURL: 'https://www.esbnyc.com/sites/default/files/2024-01/entry-prit-goyani-2023-08-17.jpg',
        address: '20 W 34th St., New York, NY 10001, United States',
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: 'u1'

    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'cool building',
        imageURL: 'https://www.esbnyc.com/sites/default/files/2024-01/entry-prit-goyani-2023-08-17.jpg',
        address: '20 W 34th St., New York, NY 10001',
        location: {
            lat: 40.7484445,
            lng: -73.9882393
        },
        creator: 'u2'

    }
]

const UserPlaces = () => {

    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter((place) => (
        place.creator === userId
    ))

    return (
        <PlaceList places={loadedPlaces} />
    )
}

export default UserPlaces;
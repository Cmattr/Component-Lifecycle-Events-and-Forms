import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterDetail = ({ characterId }) => {
    const [characterDetails, setCharacterDetails] = useState(null);

    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(`https://gateway.marvel.com/v1/public/characters/${characterId}`, {
                    params: {
                        ts: '1',
                        apikey: '3c8d82e9011b075d7c2944801844a515',
                        hash: 'fe47f85e586754bc95a7724c6f529bae'
                    }
                });
                setCharacterDetails(response.data.data.results[0]);
            } catch (error) {
                console.error('Error fetching character details:', error);
            }
        };

        fetchCharacterDetails();
    }, [characterId]);

    if (!characterDetails) return <div>Loading...</div>;

    return (
        <div>
            <h2>{characterDetails.name}</h2>
            <p>{characterDetails.description}</p>
            <h3>Comics</h3>
            <ul>
                {characterDetails.comics.items.map(comic => (
                    <li key={comic.resourceURI}>{comic.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default CharacterDetail;
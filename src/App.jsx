import React, { useState } from 'react';
import CharacterList from './Components/CharacterList'; // Adjust the path if necessary
import CharacterDetail from './Components/CharacterDetail'; // Adjust the path if necessary

const App = () => {
    const [inputValue, setInputValue] = useState('');
    const [characterName, setCharacterName] = useState('');
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    const handleCharacterSelect = (characterId) => {
        setSelectedCharacterId(characterId);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setCharacterName(inputValue);
    };

    return (
        <div>
            <h1>Marvel Characters</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter character name"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Search</button>
            </form>
            <CharacterList
                characterName={characterName}
                onCharacterSelect={handleCharacterSelect}
            />
            {selectedCharacterId && (
                <CharacterDetail characterId={selectedCharacterId} />
            )}
        </div>
    );
};

export default App;
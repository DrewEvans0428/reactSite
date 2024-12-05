import React, { useState, useEffect } from "react";
import axios from 'axios';
import AddDataForm from './AddDataForm';
import CardList from './CardList';

function CardManager() {
    const [cards, setCards] = useState([]);

    const fetchCards = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/cards');
            setCards(response.data);
        } catch (err) {
            console.error('Error fetching cards', err);
        }
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div>
        <h3>Manage Card Games</h3>
        <AddDataForm onDataAdded={fetchCards} />
        <CardList cards={cards} />
        </div>
    );
}

export default CardManager;

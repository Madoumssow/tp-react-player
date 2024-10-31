// src/Player.js
import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Player({ nom, equipe, nationalite, numero, age, imageUrl }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={imageUrl} alt={nom} />
      <Card.Body>
        <Card.Title>{nom}</Card.Title>
        <Card.Text>
          <strong>Équipe :</strong> {equipe}<br />
          <strong>Nationalité :</strong> {nationalite}<br />
          <strong>Numéro :</strong> {numero}<br />
          <strong>Âge :</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

Player.propTypes = {
  nom: PropTypes.string,
  equipe: PropTypes.string,
  nationalite: PropTypes.string,
  numero: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

Player.defaultProps = {
  nom: "Joueur inconnu",
  equipe: "Équipe inconnue",
  nationalite: "Nationalité inconnue",
  numero: 0,
  age: 0,
  imageUrl: "https://via.placeholder.com/150",
};

export default Player;

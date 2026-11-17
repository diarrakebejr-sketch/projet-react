import React, { useState } from 'react';
import BookCard from './components/BookCard';

export default function App() {
  // 1. État initial avec un tableau d'au moins 4 livres
  const [books, setBooks] = useState([
    { id: 1, titre: 'Les Misérables', auteur: 'Victor Hugo', estDisponible: true },
    { id: 2, titre: 'Le Petit Prince', auteur: 'Antoine de Saint-Exupéry', estDisponible: false },
    { id: 3, titre: 'L’Étranger', auteur: 'Albert Camus', estDisponible: true },
    { id: 4, titre: '1984', auteur: 'George Orwell', estDisponible: true }
  ]);

  // États pour les champs contrôlés du formulaire d'ajout
  const [nouveauTitre, setNouveauTitre] = useState('');
  const [nouveauAuteur, setNouveauAuteur] = useState('');

  // 2. Fonction pour inverser la disponibilité d'un livre selon son ID
  const handleOnClickEmprunt = (bookId) => {
    setBooks(
      books.map((book) =>
        book.id === bookId ? { ...book, estDisponible: !book.estDisponible } : book
      )
    );
  };

  // 3. Gestion de la soumission du formulaire d'ajout
  const handleAjouterLivre = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page

    // Vérifier que les champs ne sont pas vides
    if (nouveauTitre.trim() === '' || nouveauAuteur.trim() === '') {
      alert('Veuillez remplir tous les champs !');
      return;
    }

    const nouveauLivre = {
      id: Date.now(), // ID unique basé sur le timestamp
      titre: nouveauTitre,
      auteur: nouveauAuteur,
      estDisponible: true // Disponible par défaut
    };

    // Ajouter le livre à la liste et vider les champs
    setBooks([...books, nouveauLivre]);
    setNouveauTitre('');
    setNouveauAuteur('');
  };

  // Calcul en temps réel du nombre de livres disponibles
  const livresDisponiblesCount = books.filter((book) => book.estDisponible).length;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Gestion de la Bibliothèque Universitaire</h1>
      
      {/* Titre principal indiquant le nombre total de livres disponibles en temps réel */}
      <h2>Livres disponibles en temps réel : {livresDisponiblesCount} / {books.length}</h2>

      <hr style={{ margin: '20px 0' }} />

      {/* Formulaire d'ajout de livre */}
      <section style={{ marginBottom: '30px', padding: '15px', background: '#eef2f3', borderRadius: '8px', maxWidth: '400px' }}>
        <h3>Ajouter un nouveau livre</h3>
        <form onSubmit={handleAjouterLivre}>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Titre :</label>
            <input
              type="text"
              value={nouveauTitre}
              onChange={(e) => setNouveauTitre(e.target.value)}
              placeholder="Ex: Candide"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Auteur :</label>
            <input
              type="text"
              value={nouveauAuteur}
              onChange={(e) => setNouveauAuteur(e.target.value)}
              placeholder="Ex: Voltaire"
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px', background: '#007BFF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Ajouter le livre
          </button>
        </form>
      </section>

      <hr style={{ margin: '20px 0' }} />

      {/* Affichage de la liste des livres avec .map() */}
      <div>
        <h3>Catalogue des livres</h3>
        {books.map((book) => (
          <BookCard
            key={book.id} // N'oubliez pas l'attribut key unique
            titre={book.titre}
            auteur={book.auteur}
            estDisponible={book.estDisponible}
            onClickEmprunt={() => handleOnClickEmprunt(book.id)}
          />
        ))}
      </div>
    </div>
  );
}
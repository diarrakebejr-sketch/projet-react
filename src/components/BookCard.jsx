export default function BookCard({ titre, auteur, estDisponible, onClickEmprunt }) {
  return (
    <div style={cardStyle}>
      <h3>{titre}</h3>
      <p>Auteur : {auteur}</p>
      <p>
        Statut : {' '}
        <span style={{ color: estDisponible ? 'green' : 'red', fontWeight: 'bold' }}>
          {estDisponible ? 'Disponible' : 'Emprunté'}
        </span>
      </p>
      <button onClick={onClickEmprunt}>
        {estDisponible ? 'Emprunter' : 'Rendre'}
      </button>
    </div>
  );
}

// Un petit style de base pour la carte (exigé à l'étape 2)
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px 0',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
  maxWidth: '400px'
};
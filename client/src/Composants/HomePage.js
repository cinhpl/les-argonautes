import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';

const HomePage = () => {
  const [getMembers, setGetMembers] = useState([]);
  const [newMember, setNewMember] = useState({ name: "" });

  // Ajout d'un nouveau membre avec la requête POST  
  const formSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/database', {
      name: newMember.name
    })
    .then((res) => {
      setGetMembers([...getMembers, newMember]); 
      setNewMember({ name: "" }); 
    })
    .catch((err) => {
      console.log('Unable to add new member', err);
    })
  }

  // Récupère tous les membres avec la requête GET  
  useEffect(() => {
    axios.get('http://localhost:5000/database')
      .then(response => {
        setGetMembers(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, [])

  return (
    <div>
      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <form className="new-member-form" method="POST" onSubmit={formSubmit}>
          <label htmlFor="name">Nom de l'Argonaute</label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Charalampos"
            value={newMember.name}
            onInput={(e) => setNewMember({ name: e.target.value })}
          />
          <button type="submit">Envoyer</button>
        </form>
        <h2>Membres de l'équipage</h2>
        <section className="member-list">
            {getMembers.map((member, index) => (
            <div className='member-item' key={index}>{member.name}</div>
          ))}
         
        </section>
      </main>
    </div>
  )
}

export default HomePage;
/* eslint-disable array-callback-return */
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import User from './User';
import Error from './Error';
import Notes from './Notes';

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';



function App() {


  const [users, setUsers] = useState([]);
  const [notes, setNotes] = useState([]);

  const firebaseConfig = {
    //API here
  };



  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);



  const fetchUsers = async () => {
    const temp = [];
    const usersCol = collection(db, 'users');
    const usersSnapshot = await getDocs(usersCol);
    usersSnapshot.docs.map(doc => {
      var k = doc.data();
      k['id'] = doc.id;
      temp.push(k)
    }

    );

    setUsers(temp);

  }


  // eslint-disable-next-line no-unused-vars
  const fetchNotes = async () => {
    const temp = [];
    const usersCol = collection(db, 'notes');
    const usersSnapshot = await getDocs(usersCol);
    usersSnapshot.docs.map(doc => {


      temp.push(doc.data());
    }
    );
    setNotes(temp);
  }


  useEffect(() => {
    // Update the document title using the browser API
    fetchUsers();
    fetchNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);




  return (
    <div className="container">
      <div className="content">
        <BrowserRouter basename={process.env.PUBLIC_URL}>

          <Switch>
            <Route exact path="/" render={(props) => <Home users={users} {...props} />} />

            <Route exact path="/user/:index" render={({ match }) => (
              <User user={users[match.params.index]} />
            )} />
            <Route path="/user/notes/:id/:farmname/:index/:username">
              <Notes notes={notes}></Notes>
            </Route>

            <Route component={Error} />



          </Switch>
        </BrowserRouter>
      </div>
    </div>


  );
}

export default App;

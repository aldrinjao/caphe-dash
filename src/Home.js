import './App.css';


import React from 'react';
import { Link } from 'react-router-dom';



function Home({ users }) {
    return (
        <div>
            <div className="pageTitle">
            Caphe Users:
            </div>
            <table className="userTable">
                <thead>
                    <tr>
                        <td>
                            Username
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    </tr>
                    {users.map((user, index, records) => (

                        <tr key={index}>
                            <td>
                                <Link to={"user/".concat(index.toString())}>{user.name}</Link>

                            </td>
                        </tr>


                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Home;

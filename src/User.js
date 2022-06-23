import './App.css';
import { useParams, Link } from 'react-router-dom';

import React from 'react';

function User({ user }) {

     const { index } = useParams();

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function dateformatter(t) {
        var dateTime = new Date(t.seconds * 1000);
        var datestring = months[dateTime.getUTCMonth()] + " " + dateTime.getUTCDate() + ", " + dateTime.getFullYear();
        return datestring.toString();
    }


    if (user == null) {
        console.log('refreshed');
        return (<div>loading...</div>);
    } else {
        return (
            <div>

                <Link to={"/"}>Home</Link>
                <div className="pageTitle">

                    Username: {user.name}
                </div>
                <table className='userTable'>
                    <thead>
                        <tr>
                            <td>farm name</td>
                            <td>species</td>
                            <td>bbch stage observed</td>
                            <td>Date observed</td>
                            <td>Notes</td>
                        </tr>
                    </thead>
                    <tbody>
                        {user.records.map((farm, uindex) => (
                            <tr key={uindex}>
                                <td>
                                    {farm.name}
                                </td>
                                <td>
                                    {farm.species}
                                </td>
                                <td>
                                    {farm.bbch}
                                </td>
                                <td>
                                    {dateformatter(farm.date)}
                                </td>
                                <td>
                                    <Link to={"notes/".concat(user.id).concat("/").concat(farm.name).concat("/").concat(index).concat("/").concat(user.name)}>Read Notes</Link>
                                </td>
                            </tr>

                        ))}
                    </tbody>
                </table>
            </div>

        );
    }
}

export default User;

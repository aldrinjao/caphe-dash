import './App.css';
import React from 'react';
import {
    useParams, Link
} from "react-router-dom";

function Notes({ notes }) {


    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    function dateformatter(t) {
        var dateTime = new Date(t.seconds * 1000);
        var datestring = months[dateTime.getUTCMonth()] + " " + dateTime.getUTCDate() + ", " + dateTime.getFullYear();
        return datestring.toString();
    }

    const { id, farmname, index, username } = useParams();

    let filterednotes = notes.filter(note => note.farm_name === farmname);
    let filterednotes2 = filterednotes.filter(note => note.user === id);
    if (notes == null) {
        return (<div>loading...</div>);
    } else {
        return (

            <div>
                <Link to={"/"}>Home</Link> &gt; <Link to={"/user/".concat(index)}>{ username}</Link>
                <div className="pageTitle">

                    Farm name: {farmname}
                </div>
                <table className="userTable">
                    <thead>
                        <tr>
                            <td>Note For</td>
                            <td>Note</td>
                            <td>Sent</td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            filterednotes2.map((f, index) => (
                                <tr key={index}>
                                    <td>
                                        {dateformatter(f.noteForDate)}
                                    </td>
                                    <td>
                                        {f.note}
                                    </td>
                                    <td>
                                        {dateformatter(f.date)}
                                    </td>

                                </tr>
                            ))

                        }
                    </tbody>
                </table>
            </div>

        );
    }
}

export default Notes;

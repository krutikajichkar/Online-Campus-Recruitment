import React, { useEffect, useState } from 'react'
import './PlacedStudents.css';
import React , {useState} from 'react'
import { db } from '../../Firebase';
import { getDocs, collection } from 'firebase/firestore';

function PlacedStudents() {
    const [data ,setdata] = useState([]);

    const getData = async() => {
        const collectionRef = collection(db,'PlacedStudents');
        const user = await getDocs(collectionRef);
        setdata(data.docs.map((doc) => ({
            ...doc.data(),id: doc.id
        })))

    }

    useEffect(() => {
        getData();
    },[]);

    return (
        <div className="placedStudent">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Sr. No.</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Department</th>
                        <th scope="col">Company Name</th>
                        <th scope="col">Package</th>
                        <th scope="col">LinkedIn Profile</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">1</td>
                        <td>Ritik Gaikwad</td>
                        <td>IT</td>
                        <td>TCS</td>
                        <td>12Lakhs</td>
                        <td><a href='https://www.linkedin.com/in/ritik-gaikwad-645957219'>View Profile</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PlacedStudents
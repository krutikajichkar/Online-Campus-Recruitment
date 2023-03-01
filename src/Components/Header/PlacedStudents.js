import React, { useEffect, useState } from 'react'
import './PlacedStudents.css';

import { db } from '../../Firebase';
import { getDocs, collection } from 'firebase/firestore';
import Navbar from '../Navbar';
import Header from './Header';

function PlacedStudents() {
    const [data ,setdata] = useState([]);

    const getData = async() => {
        const collectionRef = collection(db,'PlacedStudents');
        const user = await getDocs(collectionRef);
        setdata(user.docs.map((doc) => ({
            ...doc.data(),id: doc.id
        })))

    }

    useEffect(() => {
        getData();
    },[]);

    return (
       <>
       <Header/>
       <Navbar/>
      

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
                   {
                    data.map((e,i) => {
                        return(
                            <tr key={e.id}>
                            <td scope="row">{i+1}</td>
                            <td>{e.Name}</td>
                            <td>{e.Department}</td>
                            <td>{e.Company}</td>
                            <td>{e.Package}</td>
                            <td><a href={`https://${e.LinkedinProfile}`}>View Profile</a></td>
                        </tr>
                        )
                    })
                   }
                </tbody>
            </table>
        </div>
        </>
    )
}

export default PlacedStudents
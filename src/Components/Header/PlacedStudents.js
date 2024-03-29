import React, { useEffect, useState } from 'react'
import './PlacedStudents.css';
import { db } from '../../Firebase';
import { getDocs, collection } from 'firebase/firestore';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Navbar from '../Navbar';
import Header from './Header';
import Loader from '../Loader';
import { Link} from "react-router-dom";

function PlacedStudents() {
    const [data, setdata] = useState([]);
    const [loading, setloading] = useState(true)




    const getData = async () => {
        const collectionRef = collection(db, 'PlacedStudents');
        const user = await getDocs(collectionRef);
        setdata(user.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))
        setloading(false)

    }

    useEffect(() => {
        getData();

    }, []);

    return (
        <>
            <Header />
            {/* <Navbar /> */}
           

            {loading && <Loader />}

            {!loading && <div className="placedStudent">
           <Link to="/studentdashboard"> <ArrowBackIcon style={{paddingBottom:'10px', fontSize:'40px'}} /></Link> 

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Package</th>
                            <th scope="col">LinkedIn Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((e, i) => {
                                return (
                                    <tr key={e.id}>
                                        <td >{i + 1}</td>
                                        <td>{e.Name}</td>
                                        <td>{e.Department}</td>
                                        <td>{e.Company}</td>
                                        <td>{e.Designation}</td>
                                        <td>{e.Package}</td>
                                        {e.LinkedInProfile ? <td><a href={`https://${e.LinkedInProfile}`} target="_blank" rel="noreferrer" >View Profile</a></td> : <td>-</td>}
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>}
        </>
    )
}

export default PlacedStudents
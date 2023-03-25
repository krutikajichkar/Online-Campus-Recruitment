import React, { useEffect, useState } from 'react'
import './PlacedStudents.css';
import { db } from '../../Firebase';
import { getDocs, collection } from 'firebase/firestore';
import Navbar from '../Navbar';
import Header from './Header';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';




function PlacedStudents() {
    const [data, setdata] = useState([]);
    const [text, setText] = useState(" ");
   


    const handleChange = () => {
        return data.filter(
            (e) =>
                e.Name.toLowerCase().includes(text.toLowerCase())
                ||
                e.Department.toLowerCase().includes(text.toLowerCase())
                ||
                e.Company.toLowerCase().includes(text.toLowerCase())
                ||
                e.Package.toString().includes(text.toLowerCase())
        )
    }


    const getData = async () => {
        const collectionRef = collection(db, 'PlacedStudents');
        const user = await getDocs(collectionRef);
        setdata(user.docs.map((doc) => ({
            ...doc.data(), id: doc.id
        })))

    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <Header />
            <Navbar />
            
            <div className='placed-search' >
                <SearchOutlinedIcon></SearchOutlinedIcon>
                <span>
                    <input className='search-input'
                        type="text"
                        value={text}
                        placeholder="Search"
                        onChange={(e) => setText(e.target.value)}
                    ></input></span>
            </div>


            <div className="placedStudent">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Sr. No.</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Session</th>
                            <th scope="col">Company Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Package</th>
                            <th scope="col">LinkedIn Profile</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            handleChange()
                                .map((e, i) => {
                                    return (
                                        <tr key={e.id}>
                                            <td scope="row">{i + 1}</td>
                                            <td>{e.Name}</td>
                                            <td>{e.Department}</td>
                                            <td>{e.Session}</td>
                                            <td>{e.Company}</td>
                                            <td>{e.Designation}</td>
                                            <td>{e.Package}</td>
                                            <td><a href={`https://${e.LinkedInProfile}`}>View Profile</a></td>
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
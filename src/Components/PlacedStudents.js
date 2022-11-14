import React from 'react'
import './PlacedStudents.css';

function PlacedStudents() {
    return (
        <div class="placedStudent">
            <table class="table table-striped">
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
                        <th scope="row">1</th>
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
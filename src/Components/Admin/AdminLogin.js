import React from 'react'
import Login from './Login'

export default function AdminLogin() {
    return (
        <div>
            <Login person='Admin'  collection="AdminData" path='admindashboard'/>
        </div>
    )
}

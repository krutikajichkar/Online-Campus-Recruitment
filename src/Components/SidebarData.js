import React from 'react';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AccountTreeOutlinedIcon from "@mui/icons-material/AccountTreeOutlined";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

 


export const SidebarData = [
    {
        title: "Student Details",
        icon: <PermIdentityIcon />,
        link: "/studentdashboard"
    },
    {
        title: "Edit Profile",
        icon: <EditOutlinedIcon />,
        link: "/"
    },
    {
        title: "Drives",
        icon: <HourglassEmptyIcon />,
        link: "/studentdrive"
    },
    {
        title: "Test",
        icon: <ContentPasteSearchIcon />,
        link: "/test"
    },
    {
        title: "Progress",
        icon: <EqualizerOutlinedIcon />,
        link: "/"
    },
    {
        title: "Departments",
        icon: <AccountTreeOutlinedIcon />,
        link: "/"
    },
    {
        title: "File Upload",
        icon: <CloudUploadIcon />,
        link: "/"
    },

]

export const AdminSidebar = [
    {
        title: "Admin Detail",
        icon: <PermIdentityIcon />,
        link: "/admindashboard"
    },
    {
        title: "Edit Profile",
        icon: <EditOutlinedIcon />,
        link: "/"
    },
    {
        title: "Manage Drives",
        icon: <FolderSharedOutlinedIcon />,
        link: "/adddrive"
    },
    {
        title: "Drives",
        icon: <HourglassEmptyIcon />,
        link: "/studentdrive"
    },
    {
        title: "Manage Training",
        icon: <AccessTimeOutlinedIcon />,
        link: "/"
    },
   
    {
        title: "Search Student",
        icon: <PersonSearchOutlinedIcon />,
        link: "/"
    },

]


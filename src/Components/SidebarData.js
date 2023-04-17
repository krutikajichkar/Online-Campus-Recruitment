import React from 'react';
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';
import FolderSharedOutlinedIcon from '@mui/icons-material/FolderSharedOutlined';

 


export const SidebarData = [
    {
        title: "Student Details",
        icon: <PermIdentityIcon />,
        link: "/studentdashboard"
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
        title: "Placed Students",
        icon: <PersonSearchOutlinedIcon />,
        link: "/placedstudents"
    },

]

export const AdminSidebar = [
    {
        title: "Admin Detail",
        icon: <PermIdentityIcon />,
        link: "/admindashboard"
    },

    {
        title: "Manage Drives",
        icon: <FolderSharedOutlinedIcon />,
        link: "/adddrive"
    },
    {
        title: "Drives",
        icon: <HourglassEmptyIcon />,
        link: "/admindrive"
    },
    {
        title: "Manage Training",
        icon: <AccessTimeOutlinedIcon />,
        link: "/"
    },
   

]


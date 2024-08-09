import { MdDashboard, MdDarkMode} from "react-icons/md";
import { FaPenFancy, FaBook, FaUser } from "react-icons/fa";
import { IoTrophySharp, IoSettings,IoLogOut } from "react-icons/io5";


import { RiShoppingBagLine } from "react-icons/ri";
import { AiOutlineLike,AiOutlineDislike  } from "react-icons/ai";
import { CiStar } from "react-icons/ci";


export const menuList = [
    {
        id: 1,
        menu: 'Dashboard',
        link: '/dashboard',
        icon: MdDashboard
    },  
    {
        id: 2,
        menu: 'Tests',
        link: '/tests',
        icon: FaPenFancy

    },  
    {
        id: 3,
        menu: 'Courses',
        link: '/courses',
        icon: FaBook

    },  
    {
        id: 4,
        menu: 'Profile',
        link: '/profile',
        icon: FaUser

    },  
    {
        id: 5,
        menu: 'LeaderBoard',
        link: '/leaderboard',
        icon: IoTrophySharp

    },  
    {
        id: 6,
        menu: 'Darkmode',
        link: null,
        icon: MdDarkMode

    },  
    {
        id: 7,
        menu: 'Settings',
        link: '/settings',
        icon: IoSettings

    },  
    {
        id: 8,
        menu: 'Logout',
        link: null,
        icon: IoLogOut

    },  
]

export const newList = [
    {
      id: 1,
      icon: RiShoppingBagLine,
      number: 32,
      text: "No of Tests",
      color: '#afc7e1'
    },
    {
      id: 2,
      icon: AiOutlineLike,
      number: 12,
      text: "Passed",
      color: '#b0dab1'
    },
    {
      id: 3,
      icon: AiOutlineDislike ,
      number: 19,
      text: "Failed",
      color: '#f8b9cc'
    },
    {
      id: 4,
      icon: CiStar,
      number: 1,
      text: "Waiting For the Result",
      color: '#a5b2ba'
    },
  ];

  export const leaderBoardItems = [
    {
      id: 1,
      name: "Jhone Leboo",
      userImage:
        "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rankimage:
        "https://img.freepik.com/premium-psd/gold-medal-with-number-1-transparent-background_1019762-3049.jpg?w=740",
    },
    {
      id: 2,
      name: "Samuel Kingasunye",
      userImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rankimage:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQO4UuUpPWLa0wR_zd6fROpmbgnEozVEjZDnvFYkWJzJEJ1S3Bo",
    },
    {
      id: 3,
      name: "Stephen Keruba",
      userImage:
        "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rankimage:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ1NXstaHCYAFGhqBkk7BOvdjVi7-4SU1A18Wq9-RYwExrWfWjp",
    },
  ];
  
  export const testList = [
    {
      id: 1,
      language: "C Programming",
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      percentage: "79",
    },
    {
      id: 2,
      language: "Python Programming",
      image:
        "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      percentage: "39",
    },
  ];
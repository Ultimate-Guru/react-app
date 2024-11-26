import { GoGoal } from "react-icons/go";
import { GrPlan } from "react-icons/gr";
import {
    IoIosStats,
    IoIosSettings,
    IoIosPerson,
    IoIosPersonAdd,
    IoIosEyeOff,
} from "react-icons/io";

import {
    FaHome,
    FaHistory,
    FaUserFriends,
    FaShieldAlt,
    FaUser,
} from "react-icons/fa";

import user01 from "../assets/img/user01.png";
import user02 from "../assets/img/user02.png";
import user03 from "../assets/img/user03.png";

export const links = [
    {
        href: "#",
        icon: FaHome,
        text: "Home",
    },
    {
        href: "#",
        icon: FaHistory,
        text: "Transaction History",
        badge: {
            text: "Pro",
            color: "bg-gray-100 text-gray-800",
            darkColor: "dark:bg-gray-700 dark:text-gray-300",
        },
    },
    {
        href: "#",
        icon: FaUserFriends,
        text: "Beneficiary",
        badge: {
            text: "4",
            color: "bg-blue-100 text-blue-800",
            darkColor: "dark:bg-blue-900 dark:text-blue-300",
        },
    },
    {
        href: "#",
        icon: FaShieldAlt,
        text: "Account Limits",
    },
    {
        href: "#",
        icon: FaUser,
        text: "Profile",
    },
];

export const empolyeesData = [
    {
        title: "Total Empolyees",
        icon: IoIosPerson,
        count: 200,
        bgColor: "bg-gray-100",
    },
    {
        title: "On Leave",
        icon: IoIosEyeOff,
        count: 15,
        bgColor: "bg-blue-100",
    },
    {
        title: "New Joinee",
        icon: IoIosPersonAdd,
        count: 25,
        bgColor: "bg-yellow-100",
    },
];

export const shortcutLink = [
    {
        title: "Goals",
        icon: GoGoal,
    },
    {
        title: "Plan",
        icon: GrPlan,
    },
    {
        title: "Stats",
        icon: IoIosStats,
    },
    {
        title: "Setting",
        icon: IoIosSettings,
    },
];

export const users = [
    {
        name: "Robert Fox",
        country: "USA",
        role: "Python Developer",
        image: user01,
        bgColor: "bg-yellow-100",
    },
    {
        name: "Jane Doe",
        country: "UK",
        role: "Frontend Developer",
        image: user02,
        bgColor: "bg-blue-100",
    },
    {
        name: "John Smith",
        country: "Canada",
        role: "Backend Developer",
        image: user03,
        bgColor: "bg-gray-100",
    },
    {
        name: "Alice Johnson",
        country: "Australia",
        role: "Full Stack Developer",
        image: user01,
        bgColor: "bg-slate-100",
    },
];

export const events = [
    {
        date: "01 Aug",
        title: "Upcoming Event",
        description: "Lorem ipsum dolor sit amet.",
    },
    {
        date: "15 Sept",
        title: "Annual Conference",
        description: "Join us for our annual conference.",
    },
    {
        date: "20 Sept",
        title: "Networking Meetup",
        description: "Connect with professionals in your field.",
    },
];

// ------- ==
// chart data, later we will use this!!!

// const options = {
//   series: [44, 55, 41],
//   options: {
//     chart: {
//       type: "donut",
//       height: 350,
//     },
//     labels: ["Desktop", "Tablet", "Mobile"],
//     colors: ["#FF5733", "#33FF57", "#3357FF"],
//     legend: {
//       position: "bottom",
//       labels: {
//         colors: darkMode ? "#dddddd" : "#000000",
//       },
//     },
//     dataLabels: {
//       style: {
//         colors: ["#dddddd"],
//       },
//     },
//     responsive: [
//       {
//         breakpoint: 480,
//         options: {
//           chart: {
//             width: 200,
//           },
//           legend: {
//             position: "bottom",
//           },
//         },
//       },
//     ],
//   },
// };

// ..........
// const chartConfig = {
//   series: [
//     {
//       name: "Sales",
//       data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
//     },
//   ],
//   options: {
//     chart: {
//       type: "bar",
//       height: 240,
//       toolbar: {
//         show: false,
//       },
//     },
//     title: {
//       show: false,
//     },
//     dataLabels: {
//       enabled: false,
//     },
//     colors: ["#020617"],
//     plotOptions: {
//       bar: {
//         columnWidth: "40%",
//         borderRadius: 2,
//       },
//     },
//     xaxis: {
//       axisTicks: {
//         show: false,
//       },
//       axisBorder: {
//         show: false,
//       },
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//       categories: [
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//       ],
//     },
//     yaxis: {
//       labels: {
//         style: {
//           colors: darkMode ? "#dddddd" : "#616161",
//           fontSize: "12px",
//           fontFamily: "inherit",
//           fontWeight: 400,
//         },
//       },
//     },
//     grid: {
//       show: true,
//       borderColor: "#a0a0a0",
//       strokeDashArray: 5,
//       xaxis: {
//         lines: {
//           show: true,
//         },
//       },
//       padding: {
//         top: 5,
//         right: 20,
//       },
//     },
//     fill: {
//       opacity: 0.8,
//     },
//     tooltip: {
//       theme: "dark",
//     },
//   },
// };
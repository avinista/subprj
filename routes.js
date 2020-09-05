/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import TrackChangesIcon from '@material-ui/icons/TrackChanges';
import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import SyncIcon from '@material-ui/icons/Sync';
import WidgetsIcon from '@material-ui/icons/Widgets';
import DomainIcon from '@material-ui/icons/Domain';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PaymentIcon from '@material-ui/icons/Payment';
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "مالی",
    rtlName: "مالی",
    icon: PaymentIcon,
    component: DashboardPage,
    layout: "/admin",
    id: "1",
        children: [
          {
            name: 'هزینه',
            url: '/cost'
         },{
           name: 'ارزش گذاری',
           url: '/rate'
         },{
           name: 'درآمد / سود',
           url: '/income'
         }
        ]
  },
  {
    path: "/user",
    name: "نیروی انسانی",
    rtlName: "نیروی انسانی",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
    id: "2", 
        children: [
           {
            name: 'بانک',
            url: '/bank'
           },{
            name: ' شرکت های تابعه',
            url: '/subsidiaries'
           },{
           name: 'شرکت های سهام دار',
           url: '/companies'
          }
        ]
      },
  {
    path: "/table",
    name: "برنامه ها",
    rtlName: "برنامه ها",
    icon: EventNoteIcon,
    component: TableList,
    layout: "/admin",
    id: "3" ,
          children: [
           {
             name: 'هولدینگ',
             url: '/holding'
           },{
             name: ' غیر هولدینگ',
             url: '/non-holding'
           }
         ]
       },
  {
    path: "/typography",
    name: "شرکت ها",
    rtlName: "شرکت ها",
    icon: DomainIcon,
    component: Typography,
    layout: "/admin",
    id: "4" ,
         children: [
          {
            name: 'تابعه',
            url: '/subsidiary'
           },{
            name: '  سهام دار',
            url: '/shareholder'
          }, {
            name: 'طرف قرارداد',
            url: '/contracting'
           }
         ]
  },
  {
    path: "/icons",
    name: "سرویس ها",
    rtlName: "سرویس ها",
    icon: WidgetsIcon,
    component: Icons,
    layout: "/admin",
    id: "5",
           children: [
            {
             name: 'زیرساخت',
             url: '/Infrastructure'
            },{
             name: '  نرم افزار',
             url: '/software'
           }, {
             name: 'سخت افزار ',
             url: '/hardware'
            }
            ]
  },
  {
    path: "/maps",
    name: "فرآیند ها",
    rtlName: "فرآیند ها",
    icon: SyncIcon,
    component: Maps,
    layout: "/admin",
    id: "6" , 
          children: [
            {
              name : 'مبتنی بر COBJTو JTJL',
              url: '/method'
            }
          ]
  },
  {
    path: "/notifications",
    name: "IT ریسک های ",
    rtlName: "IT ریسک های",
    icon: TrendingUpIcon,
    component: NotificationsPage,
    layout: "/admin",
    id: "7"
  },
  {
    path: "/notifications",
    name: "اهداف و استراتژی ها",
    rtlName: "اهداف و استراتژی ها",
    icon: TrackChangesIcon,
    component: NotificationsPage,
    layout: "/admin",
    id: "8"
  },
  {
    path: "/notifications",
    name: "بخش نامه ها و دستور العمل ها",
    rtlName: "بخش نامه ها و دستور العمل ها",
    icon: LibraryBooks,
    component: NotificationsPage,
    layout: "/admin",
    id: "9"
  },
  {
    path: "/notifications",
    name: "تنظیمات",
    rtlName: "تنظیمات",
    icon: SettingsIcon,
    component: NotificationsPage,
    layout: "/admin",
    id: "10"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl",
    id: "11"
  },
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  }
];

const layerRoutes = [
  {
    path: "/sterategic",
    name: "استراتژیک",
    rtlName: "استراتژیک",
    icon: BubbleChart,
    component: UserProfile,
    id: "1"
  },
  {
    path: "/tecnical",
    name: "تاکتیکی",
    rtlName: "تاکتیکی",
    icon: BubbleChart,
    component: UserProfile,
    id: "2"
  },
  {
    path: "/operational",
    name: "عملیاتی",
    rtlName: "عملیاتی",
    icon: BubbleChart,
    component: UserProfile,
    id: "3"
  }
]



export default dashboardRoutes;

import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";


export const ItOfflineServices = [
  {
    path: "/entity",
    name: "برمبنای موجودیت ",
    icon: "perm_identity",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffa726" + ")"
  },
  {
    path: "/assestscatacory",
    name: "برمبنای دارایی ها",
    icon: "attach_money",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffa726" + ")"
  },
  {
    path: "/controls",
    name: "برمبنای کنترل ها",
    icon: "exposure",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffa726" + ")"
  },
  {
    path: "/importants",
    name: "بر مبنای اهمیت",
    icon: "import_export",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffa726" + ")"
  },
  {
    path: "/itchanels",
    name: "برمبنای کانال",
    icon: "clear_all",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffa726" + ")"
  },
  {
    path: "/itservices",
    name: "برمبنای سرویس",
    icon: "account_tree",
    color: "linear-gradient(60deg, " + "#ffa726" + ", " + "#ffb300" + ")"
  }
];

export const layerRoutes = [
  {
    path: "/dashboard",
    name: "گزارشات بر مبنای سطوح راهبردی",
    rtlName: "سطوح کلان",
    layout: "/admin",
    children: [
      {
        path: "/dashboard",
        name: "سطح استراتژیک",
        rtlName: "استراتژیک",
        icon: "fa-coins",
        layout: "/admin",
        id: "1"
      },
      {
        path: "/dashboard",
        name: "سطح تاکتیکی ",
        rtlName: "تاکتیکی",
        icon: "fa-coins",
        layout: "/admin",
        id: "2"
      },
      {
        path: "/dashboard",
        name: "سطح عملیاتی",
        rtlName: " عملیاتی",
        icon: "fa-coins",
        layout: "/admin",
        id: "3"
      }
    ]
  }
];

export const areaRoutes = [
  {
    path: "/dashboard",
    name: "گزارشات بر مبنای حوزه ها",
    component: DashboardPage,
    layout: "/admin",
    children: [
      {
        path: "/dashboard",
        name: "مالی",
        rtlName: "مالی",
        component: DashboardPage,
        icon: "fa-coins",
        layout: "/admin",
        id: "1",
        children: [
          {
            name: "هزینه",
            url: "/cost"
          },
          {
            name: "ارزش گذاری",
            url: "/rate"
          },
          {
            name: "درآمد / سود",
            url: "/income"
          }
        ]
      },
      {
        path: "/user",
        name: "نیروی انسانی",
        rtlName: "نیروی انسانی",
        component: UserProfile,
        icon: "fa-users",
        layout: "/admin",
        id: "2",
        children: [
          {
            name: "بانک",
            url: "/bank"
          },
          {
            name: " شرکت های تابعه",
            url: "/subsidiaries"
          },
          {
            name: "شرکت های سهام دار",
            url: "/companies"
          }
        ]
      },
      {
        path: "/table",
        name: "برنامه ها",
        rtlName: "برنامه ها",
        component: TableList,
        icon: "fa-solar-panel",
        layout: "/admin",
        id: "3",
        children: [
          {
            name: "هولدینگ",
            url: "/holding"
          },
          {
            name: " غیر هولدینگ",
            url: "/non-holding"
          }
        ]
      },
      {
        path: "/typography",
        name: "شرکت ها",
        rtlName: "شرکت ها",
        icon: "fa-building",
        component: Typography,
        layout: "/admin",
        id: "4",
        children: [
          {
            name: "تابعه",
            url: "/subsidiary"
          },
          {
            name: "  سهام دار",
            url: "/shareholder"
          },
          {
            name: "طرف قرارداد",
            url: "/contracting"
          }
        ]
      },
      {
        path: "/icons",
        name: "سرویس ها",
        rtlName: "سرویس ها",
        icon: "fa-server",
        component: Icons,
        layout: "/admin",
        id: "5",
        children: [
          {
            name: "زیرساخت",
            url: "/Infrastructure"
          },
          {
            name: "  نرم افزار",
            url: "/software"
          },
          {
            name: "سخت افزار ",
            url: "/hardware"
          }
        ]
      },
      {
        path: "/maps",
        name: "فرآیند ها",
        rtlName: "فرآیند ها",
        component: Maps,
        icon: "fa-chalkboard-teacher",
        layout: "/admin",
        id: "6",
        children: [
          {
            name: "مبتنی بر COBJTو JTJL",
            url: "/method"
          }
        ]
      },
      {
        path: "/notifications",
        name: "ریسک های IT",
        rtlName: "ریسک های IT",
        component: NotificationsPage,
        icon: "fa-asymmetrik",
        layout: "/admin",
        id: "7",
        children: [
          {
            name: "ریسک های خدمات حضوری"
          },
          {
            name: "ریسک های خدمات غیرحضوری",
            url: "/itrisk"
          }
        ]
      },
      {
        path: "/notifications",
        name: "اهداف و استراتژی ها",
        rtlName: "اهداف و استراتژی ها",
        component: NotificationsPage,
        icon: "fa-bezier-curve",
        layout: "/admin",
        id: "8"
      },
      {
        path: "/notifications",
        name: "بخش نامه ها و دستور العمل ها",
        rtlName: "بخش نامه ها و دستور العمل ها",
        component: NotificationsPage,
        icon: "fa-clipboard-list",
        layout: "/admin",
        id: "9"
      },
      {
        path: "/notifications",
        name: "تنظیمات",
        rtlName: "تنظیمات",
        component: NotificationsPage,
        icon: "fa-cogs",
        layout: "/admin",
        id: "10"
      }
    ]
  }
];

export const itviewCards = [
  {
    path: "/itrisk",
    name: "ریسک های IT",
    rtlName: "ریسک های IT",
    icon: "important_devices",
    layout: "/admin",
    color: "#ffb74d",
    id: "1"
  },
  {
    path: "/financestatus",
    name: "وضعیت مالی ",
    rtlName: "وضعیت مالی",
    icon: "euro_symbol",
    layout: "/admin",
    color: "#f9a825",
    id: "2"
  },
  {
    path: "/itprojects",
    name: "پروژه های IT",
    rtlName: "پروژه های IT",
    icon: "list",
    layout: "/admin",
    color: "#f9a825",
    id: "3"
  },
  {
    path: "/personsstatus",
    name: "نیروی انسانی",
    rtlName: "نیروی انسانی",
    icon: "supervised_user_circle",
    layout: "/admin",
    color: "#ffb74d",
    id: "4"
  }
];

export const EntityCard = [
  {
    path: "pmo",
    name: "PMO",
    color: "#ffab00"
  },
  {
    path: "sequrity_lab",
    name: "آزمایشگاه امنیت",
    color: "#ffab00"
  },
  {
    path: "pay_tools",
    name: "ابزارهای پرداخت",
    color: "#ffab00"
  },
  {
    path: "centall_bilding",
    name: "اداره کل ساختمان",
    color: "#ffab00"
  },
  {
    path: "marketing",
    name: "بازاریابی",
    color: "#ffab00"
  },
  {
    path: "personal_banking",
    name: "بانکداری شخصی",
    color: "#ffab00"
  },
  {
    path: "security_planning",
    name: "برنامه ریزی امنیت",
    color: "#ffab00"
  },
  {
    path: "herasat_Equipment",
    name: "حراست- ایمنی و تجهیزات",
    color: "#ffab00"
  },
  {
    path: "company-central-office",
    name: "اداره کل سازمان",
    color: "#ffab00"
  },
  {
    path: "herasat_videos",
    name: "حراست تصویری",
    color: "#ffab00"
  },
  {
    path: "publicـrelations",
    name: "روابط عمومی",
    color: "#ffab00"
  },
  {
    path: "Infrastructure_hardware",
    name: "زیرساخت-سخت‌افزار",
    color: "#ffab00"
  },
  {
    path: "Infrastructure_security",
    name: "سرویس های زیرساختی امنیت",
    color: "#ffab00"
  },
  {
    path: "switches",
    name: "سوییچ",
    color: "#ffab00"
  },
  {
    path: "communicationـnetworks",
    name: "شبکه‌های ارتباطی",
    color: "#ffab00"
  },
  {
    path: "goverment_branch",
    name: "شعبه  دولت",
    color: "#ffab00"
  },
  {
    path: "bank_group",
    name: "گروه بانکی",
    color: "#ffab00"
  },
  {
    path: "security_managmnent",
    name: "مدیریت امنیت اطلاعات",
    color: "#ffab00"
  },
  {
    path: "data_centers",
    name: "مراکز داده",
    color: "#ffab00"
  },
  {
    path: "security_central",
    name: "مرکز عملیات امنیت",
    color: "#ffab00"
  },
  {
    path: "security_Audit",
    name: "ممیزي امنیت",
    color: "#ffab00"
  },
  {
    path: "managers_itsection",
    name: "واحد مدیران ارشد فناوری اطلاعات و امنیت",
    color: "#ffab00"
  },
  {
    path: "managers_risksection",
    name: "واحد مدیریت ریسک فناوری اطلاعات",
    color: "#ffab00"
  },
  {
    path: "events_managment",
    name: "کارشناسی مدیریت رخداد",
    color: "#ffab00"
  }
];

export const AssetCategory = [
  {
    path: "information",
    name: "اطلاعات و مستندات",
    color: "#fbc02d"
  },
  {
    path: "executive_services",
    name: "خدمات و سرویسهاي اجرایی",
    color: "#fbc02d"
  },
  {
    path: "hardware",
    name: "سخت افزار",
    color: "#fbc02d"
  },
  {
    path: "executiv_process",
    name: "فرآیندهای اجرایی",
    color: "#fbc02d"
  },
  {
    path: "phisycal_environment",
    name: "محیط  فیزیکی",
    color: "#fbc02d"
  },
  {
    path: "software",
    name: "نرم افزار",
    color: "#fbc02d"
  },
  {
    path: "persons",
    name: "نیروی انسانی",
    color: "#fbc02d"
  }
];

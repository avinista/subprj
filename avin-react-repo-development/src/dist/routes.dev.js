"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.itviewCards = exports.areaRoutes = exports.layerRoutes = exports.ItOfflineServices = void 0;

var _Dashboard = _interopRequireDefault(require("views/Dashboard/Dashboard.js"));

var _UserProfile = _interopRequireDefault(require("views/UserProfile/UserProfile.js"));

var _TableList = _interopRequireDefault(require("views/TableList/TableList.js"));

var _Typography = _interopRequireDefault(require("views/Typography/Typography.js"));

var _Icons = _interopRequireDefault(require("views/Icons/Icons.js"));

var _Maps = _interopRequireDefault(require("views/Maps/Maps.js"));

var _Notifications = _interopRequireDefault(require("views/Notifications/Notifications.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ItOfflineServices = [{
  path: "/itchanels",
  name: "برمبنای کانال",
  icon: "clear_all",
  color: "danger"
}, {
  path: "/itservices",
  name: "برمبنای سرویس",
  icon: "fa-coins",
  color: "primary"
}, {
  path: "/entitis",
  name: "برمبنای موجودیت ",
  icon: "fa-coins",
  color: "primary"
}, {
  path: "/finance",
  name: "برمبنای دارایی ها",
  icon: "fa-coins",
  color: "primary"
}, {
  path: "/controls",
  name: "برمبنای کنترل ها",
  icon: "fa-coins",
  color: "primary"
}, {
  path: "/importants",
  name: "بر مبنای اهمیت",
  icon: "fa-coins",
  color: "primary"
}];
exports.ItOfflineServices = ItOfflineServices;
var layerRoutes = [{
  path: "/dashboard",
  name: "گزارشات بر مبنای سطوح راهبردی",
  rtlName: "سطوح کلان",
  layout: "/admin",
  children: [{
    path: "/dashboard",
    name: "سطح استراتژیک",
    rtlName: "استراتژیک",
    icon: "fa-coins",
    layout: "/admin",
    id: "1"
  }, {
    path: "/dashboard",
    name: "سطح تاکتیکی ",
    rtlName: "تاکتیکی",
    icon: "fa-coins",
    layout: "/admin",
    id: "2"
  }, {
    path: "/dashboard",
    name: "سطح عملیاتی",
    rtlName: " عملیاتی",
    icon: "fa-coins",
    layout: "/admin",
    id: "3"
  }]
}];
exports.layerRoutes = layerRoutes;
var areaRoutes = [{
  path: "/dashboard",
  name: "گزارشات بر مبنای حوزه ها",
  component: _Dashboard["default"],
  layout: "/admin",
  children: [{
    path: "/dashboard",
    name: "مالی",
    rtlName: "مالی",
    component: _Dashboard["default"],
    icon: "fa-coins",
    layout: "/admin",
    id: "1",
    children: [{
      name: "هزینه",
      url: "/cost"
    }, {
      name: "ارزش گذاری",
      url: "/rate"
    }, {
      name: "درآمد / سود",
      url: "/income"
    }]
  }, {
    path: "/user",
    name: "نیروی انسانی",
    rtlName: "نیروی انسانی",
    component: _UserProfile["default"],
    icon: "fa-users",
    layout: "/admin",
    id: "2",
    children: [{
      name: "بانک",
      url: "/bank"
    }, {
      name: " شرکت های تابعه",
      url: "/subsidiaries"
    }, {
      name: "شرکت های سهام دار",
      url: "/companies"
    }]
  }, {
    path: "/table",
    name: "برنامه ها",
    rtlName: "برنامه ها",
    component: _TableList["default"],
    icon: "fa-solar-panel",
    layout: "/admin",
    id: "3",
    children: [{
      name: "هولدینگ",
      url: "/holding"
    }, {
      name: " غیر هولدینگ",
      url: "/non-holding"
    }]
  }, {
    path: "/typography",
    name: "شرکت ها",
    rtlName: "شرکت ها",
    icon: "fa-building",
    component: _Typography["default"],
    layout: "/admin",
    id: "4",
    children: [{
      name: "تابعه",
      url: "/subsidiary"
    }, {
      name: "  سهام دار",
      url: "/shareholder"
    }, {
      name: "طرف قرارداد",
      url: "/contracting"
    }]
  }, {
    path: "/icons",
    name: "سرویس ها",
    rtlName: "سرویس ها",
    icon: "fa-server",
    component: _Icons["default"],
    layout: "/admin",
    id: "5",
    children: [{
      name: "زیرساخت",
      url: "/Infrastructure"
    }, {
      name: "  نرم افزار",
      url: "/software"
    }, {
      name: "سخت افزار ",
      url: "/hardware"
    }]
  }, {
    path: "/maps",
    name: "فرآیند ها",
    rtlName: "فرآیند ها",
    component: _Maps["default"],
    icon: "fa-chalkboard-teacher",
    layout: "/admin",
    id: "6",
    children: [{
      name: "مبتنی بر COBJTو JTJL",
      url: "/method"
    }]
  }, {
    path: "/notifications",
    name: "ریسک های IT",
    rtlName: "ریسک های IT",
    component: _Notifications["default"],
    icon: "fa-asymmetrik",
    layout: "/admin",
    id: "7",
    children: [{
      name: "ریسک های خدمات حضوری"
    }, {
      name: "ریسک های خدمات غیرحضوری",
      url: "/itrisk"
    }]
  }, {
    path: "/notifications",
    name: "اهداف و استراتژی ها",
    rtlName: "اهداف و استراتژی ها",
    component: _Notifications["default"],
    icon: "fa-bezier-curve",
    layout: "/admin",
    id: "8"
  }, {
    path: "/notifications",
    name: "بخش نامه ها و دستور العمل ها",
    rtlName: "بخش نامه ها و دستور العمل ها",
    component: _Notifications["default"],
    icon: "fa-clipboard-list",
    layout: "/admin",
    id: "9"
  }, {
    path: "/notifications",
    name: "تنظیمات",
    rtlName: "تنظیمات",
    component: _Notifications["default"],
    icon: "fa-cogs",
    layout: "/admin",
    id: "10"
  }]
}];
exports.areaRoutes = areaRoutes;
var itviewCards = [{
  path: "/itrisks",
  name: "ریسک های IT",
  rtlName: "ریسک های IT",
  icon: "important_devices",
  layout: "/admin",
  color: "primary",
  id: "1"
}, {
  path: "/financestatus",
  name: "وضعیت مالی ",
  rtlName: "وضعیت مالی",
  icon: "frequest_page",
  layout: "/admin",
  color: "primary",
  id: "2"
}, {
  path: "/itprojects",
  name: "پروژه های IT",
  rtlName: "پروژه های IT",
  icon: "list",
  layout: "/admin",
  color: "primary",
  id: "3"
}, {
  path: "/personsstatus",
  name: "نیروی انسانی",
  rtlName: "نیروی انسانی",
  icon: "supervised_user_circle",
  layout: "/admin",
  color: "primary",
  id: "4"
}];
exports.itviewCards = itviewCards;
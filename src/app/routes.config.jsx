import App from "./components/App";
import EventDetail from "./components/events/EventDetail";
import CourtSearch from "./components/courts/CourtSearch";
import CourtDetail from "./components/courts/CourtDetail";

export default [{
    name: "Court Detail",
    path: "/app/court/detail/:id",
    rawPath: "/app/court/detail",
    component: CourtDetail,
    siteMap: ["Home"]
}, {
    name: "Court Search",
    path: "/app/court/search/:sportId",
    rawPath: "/app/court/search",
    component: CourtSearch,
    siteMap: ["Home"]
}, {
    name: "Event",
    path: "/app/event",
    rawPath: "/app/event",
    component: EventDetail,
    siteMap: ["Home"]
}, {
    name: "Home",
    path: "/app",
    rawPath: "/app",
    component: App,
    siteMap: []
}]
import ContactUs from "./ContactUs";
import FavoriteItems from "./FavoriteItems";
import Home from "./Home";

const routes = [
    {
        path : "/contactus", Element : <ContactUs />, errorElement : null
    },
    {
        path : "/favoriteitems", Element : <FavoriteItems />, errorElement : null
    },
    {
        path : "/", Element : <Home />, errorElement : null
    },
];

export default routes;
import ContactUs from "./ContactUs";
import ErrorPage from "./ErrorPage";
import FavoriteItems from "./FavoriteItems";
import Home from "./Home";

const routes = [
    {
        path : '/', Element : <Home />, errorElement : <ErrorPage />
    },
    {
        path : '/contact', Element : <ContactUs />, errorElement : <ErrorPage />
    },
    {
        path : '/favoriteitems', Element : <FavoriteItems />, errorElement : <ErrorPage />
    }
];

export default routes;
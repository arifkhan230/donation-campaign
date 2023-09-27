import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-amber-500">404</h1>
            <h1 className="text-5xl font-bold text-amber-500">Page not found</h1>
            <Link to="/">
                <button className="btn btn-secondary text-xl font-bold mt-6 text-white">Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
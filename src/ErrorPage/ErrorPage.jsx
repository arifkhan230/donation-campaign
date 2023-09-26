import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold text-amber-500">Error: No data found</h1>
            <Link>
                <button className="btn btn-secondary text-xl font-bold mt-6 text-white">Go back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
    return (
        <div className="flex min-h-screen w-full">
            {/* Left Section */}
            <div className="hidden lg:flex items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black w-1/2 px-12">
                <div className="max-w-md space-y-6 text-center text-white">
                    <h1 className="text-4xl font-extrabold tracking-tight">
                        Welcome to ShopSphere
                    </h1>
                    <p className="text-lg font-medium">
                        Your ultimate destination for seamless shopping.
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-1 items-center justify-center bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
                <Outlet />
            </div>
        </div>
    );
};

export default AuthLayout;

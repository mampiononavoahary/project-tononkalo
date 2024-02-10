import Link from "next/link";
import Image from "next/image";

export default function Login() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden bg-blue-300">
      <div className="w-full p-6 shadow-lg rounded-md shadow-md lg:max-w-xl bg-blue-400">
        <Image className="w-90 h-200 mx-auto" src='images/logo.png' alt=''/>
        <form className="mt-2">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-black"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-black"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-gray-400 focus:ring-gray-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link
            href="/forget"
            className="text-sm text-blue-200 hover:underline"
          >
            Forget Password?
          </Link>
          <div className="mt-2">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-black rounded-md hover:bg-gray-600 focus:outline-none hover:bg-red-600 ">
              Sign In
            </button>
          </div>
        </form>
        <p className="mt-4 text-sm text-center text-black">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-blue-200 hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
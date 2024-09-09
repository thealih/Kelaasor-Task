"use client";

import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { useEffect, useRef } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    // Ensure the ref is not null and code only runs on the client
    if (!contentRef.current) return;

    // Create the IntersectionObserver instance
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Find the ".content-bar" element inside the observed element
        const progress = entry.target.querySelector(
          ".content-bar"
        ) as HTMLElement | null;

        if (!progress) return; // Skip if the element is not found

        if (entry.isIntersecting) {
          progress.classList.add("square-animation");
        } else {
          // progress.classList.remove("square-animation");
        }
      });
    });

    // Start observing the element
    observer.observe(contentRef.current);

    // Clean up the observer when the component unmounts
    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);
  return (
    <>
      <div
        ref={contentRef}
        className="xl:mx-10 mx-auto p-4 bg-white rounded-lg shadow-md lg:mt-8 "
      >
        <h1 className="text-2xl font-bold text-center mb-6 text-white bg-blue-950 rounded-lg py-5">
          User List
        </h1>
        <div className=" content-bar opacity-0">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {users.map((user: any) => (
              <Link href={`users/${user.id}`}>
                <li
                  key={user.id}
                  className="p-4 mb-4 bg-gray-100 rounded-md shadow-sm hover:bg-gray-200 leading-8 space-y-3 duration-300 hover:shadow-xl"
                >
                  <div className="flex justify-center align-middle">
                    <FaUser className="text-5xl text-gray-500 text-center rounded-full border-solid border-gray-500 border-2 p-1" />
                  </div>
                  <h2 className="text-xl font-semibold text-center text-black">
                    {user.name}
                  </h2>
                  <p className="text-gray-700">
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p className="text-gray-700">
                    <strong>Address:</strong> {user.address.city},{" "}
                    {user.address.street}
                  </p>
                  <p className="text-gray-700">
                    <strong>Tel:</strong> {user.phone}
                  </p>
                  <Link
                    href={"#"}
                    className="bg-blue-950 text-white rounded-xl text-center px-5 py-1 inline-block "
                    target="_blank"
                  >
                    more info
                  </Link>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserList;

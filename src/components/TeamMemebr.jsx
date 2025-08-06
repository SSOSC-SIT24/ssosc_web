import React from "react";
import { teamMembers } from "../Constant";
import Link from "next/link";
import Image from "next/image";

const TeamIntroduction = () => {
  // Extract Shailesh Shetty separately
  const facultyAdvisor = teamMembers.find((member) => member.Role === "Faculty Advisor");
  const otherMembers = teamMembers.filter((member) => member.Role !== "Faculty Advisor");

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-6xl font-extrabold text-white text-center my-12 hover:underline">
          Our Awesome Team
        </h2>

        {/* Centered Faculty Advisor */}
        {facultyAdvisor && (
          <div className="flex justify-center mb-16">
            <Link href={facultyAdvisor.LInk || "#"}>
              <div className="border-2 overflow-hidden shadow-sm rounded-lg transition ease-in-out hover:scale-105 hover:shadow-md hover:duration-300 p-6 flex items-center space-x-4 max-w-md">
                <Image
                  src={facultyAdvisor.imageUrl}
                  alt={facultyAdvisor.Name}
                  width={1900}
                  height={100}
                  className="h-24 w-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-white">{facultyAdvisor.Name}</h3>
                  <p className="text-sm text-gray-300">{facultyAdvisor.Role}</p>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Grid of other members */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {otherMembers.map((member, index) => (
            <Link key={index} href={member.LInk || "#"}>
              <div className="border-2 overflow-hidden shadow-sm rounded-lg transition ease-in-out hover:scale-105 hover:shadow-md hover:duration-300">
                <div className="p-6 flex items-center space-x-4">
                  <Image
                    src={member.imageUrl}
                    alt={member.Name}
                    width={1900}
                    height={100}
                    className="h-20 w-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-medium text-white">{member.Name}</h3>
                    <p className="text-sm text-gray-300">{member.Role}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamIntroduction;

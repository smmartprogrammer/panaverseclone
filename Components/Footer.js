import React from "react";

function Footer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">About</h5>
        <p>Panaverse</p>
        <p>Newsroom</p>
        <p>Stackholder</p>
        <p>Latest Courses</p>
        <p>Faculties</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Programs</h5>
        <p>Web 3.0 and Metaverse Developer</p>
        <p>Artificial Intelligence</p>
        <p>Cloud Native Computing</p>
        <p>Ambient Computing and IoT</p>
        <p>Network Programmability and Automation</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Semester</h5>
        <p>Quater 1</p>
        <p>Quater 2</p>
        <p>Quater 3</p>
        <p>Quater 4</p>
        <p>Quater 5</p>
      </div>

      <div className="space-y-4 text-xs text-gray-800">
        <h5 className="font-bold">Panaverse Dao</h5>
        <p>NextJs</p>
        <p>Tailwind Css</p>
        <p>Github</p>
        <p>Vercel</p>
        <p>Dao</p>
      </div>

    </div>
  );
}

export default Footer;

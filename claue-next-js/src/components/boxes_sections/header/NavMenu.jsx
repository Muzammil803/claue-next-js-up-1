import Link from "next/link";
import React from "react";
import "./header.css"
const navList = [
  {
    title: "Demo",
    path: "/",
    children: [
      [
        { name: "Home Page", path: "#", link: false },
        { name: "home page", path: "#", link: true },
        { name: "home page", path: "#", link: true },
        { name: "home page", path: "#", link: true },
        { name: "home page", path: "#", link: true },
        { name: "home page", path: "#", link: true },
        {
          name: "home page",
          path: "#",
          link: true,
          label: "super",
          label_color: "red",
        },
      ],
      [
        { name: "Headers Layout", path: "#", link: false },
        { name: "headers", path: "#", link: true },
        { name: "headers", path: "#", link: true },
        { name: "headers", path: "#", link: true },
        { name: "headers", path: "#", link: true },
      ],
    ],
  },
  {
    title: "Shop",
    path: "/",
    children: [
      [
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
    ],
    label: "New",
    label_color: "#ec0101",
  },
  {
    title: "Product",
    path: "/",
    children: [
      [
        { name: "dropdown1", path: "#", link: false },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
      [
        { name: "dropdown1", path: "#", link: false },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
    ],
  },
  {
    title: "Sale",
    path: "/",
    label:"Sale",
    label_color:"#FFA800",
    defaultColor: "#ec0101",
    children: [],
  },
  {
    title: "Portfolio",
    path: "/",
    children: [
      [
        { name: "dropdown1", path: "#", link: false },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
    ],
  },
  {
    title: "Lookbook",
    path: "/",
    children: [
      [
        { name: "dropdown1", path: "#", link: false },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
    ],
  },
  {
    title: "Blog",
    path: "/",
    children: [
      [
        { name: "dropdown1", path: "#", link: false },
        { name: "dropdown1", path: "#", link: true },
        { name: "dropdown1", path: "#", link: true },
      ],
    ],
  },
];

const Navbar = () => {
  return (
    <nav className="p-4">
      <ul className="flex space-x-6 ">
        {
          navList.map((nav_item,index)=>
          <NavItem key={index} nav_item={nav_item}/>
          )
        }
       
        
      </ul>
    </nav>
  );
};

const NavItem = ({ nav_item }) => {
  return (
    <li className="relative group">
      <Link href={nav_item?.path} className="hover:text-theme_cgreen">
        {nav_item?.title}
      </Link>
     {nav_item?.children.length? <Dropdown nav_dropdown={nav_item?.children} />:<></>}
      {nav_item?.label?<span className={`absolute top-[-15px] right-[-20px] text-[8px]  text-white px-2 py-1 rounded-full`} style={{backgroundColor:nav_item?.label_color}}>{nav_item?.label}</span>:<></> }
    </li>
  );
};

const Dropdown = ({ nav_dropdown }) => {
  return (
    <div className="hidden group-hover:flex absolute z-50 bg-white p-1 pt-3 rounded animate-fade-in opacity-[0.96]">
    {nav_dropdown.map((dropdown_list, index) => (
      <div key={index} className="mb-2">
        {dropdown_list.map((d_list_item, subIndex) => (
          <div key={subIndex} className="mb-2 pb-2 mx-2 w-[140px] border-b">
            {d_list_item.link ? (
              <Link
                href={d_list_item.path}
                className="text-gray-800 hover:text-theme_cgreen transition duration-300"
              >
                {d_list_item.name}
              </Link>
            ) : (
              <p className="font-semibold text-gray-800">{d_list_item.name}</p>
            )}
          </div>
        ))}
      </div>
    ))}
  </div>
  
  );
};




export default Navbar;

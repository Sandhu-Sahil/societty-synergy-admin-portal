'use client';
import React, { useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loggedin, setloggedin] = useState(false)
  let router = useRouter();
  useEffect(() => {
    if (localStorage.getItem('synergy-token')) {
      setloggedin(true);
    }
  }, [])
  const menuItems = [
    "Overview",
    "Events",
    "Members",
  ];

  const handleLogout = async () => {
    // localStorage.removeItem('synergy-token');
    // const token = localStorage.getItem('synergy-token')
    // await fetch('',
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ token })
    //   }
    // )
    router.push('/login')
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-bg2-col/60">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-primary-col"
        />
        <NavbarBrand>
          <p className="font-bold  text-primary-col">Society Synergy</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-x-14" justify="center">
        <NavbarItem>
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="#">
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="#" >
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="#">
            Members
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {loggedin && <Button onClick={() => { handleLogout() }} as={Link} className="text-primary-col bg-bg1-col" href="#" variant="flat">
            Log Out
          </Button>}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-bg1-col/90 overflow-hidden">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-text-col active:text-primary-col hover:text-primary-col"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
        <Button as={Link} onClick={() => { handleLogout() }} className="text-red-500 bg-bg2-col w-10 ml-[-1%]" size="lg" href="#" variant="flat">
          Log Out
        </Button>
      </NavbarMenu>
    </Navbar>
  );
}
'use client';
import React, { useContext, useEffect, useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Context from "@/ContextAPI";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const context = useContext(Context);
  const {loggedin,setloggedin} = context;
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
    setloggedin(false);
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
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="/">
            Overview
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="/events" >
            Events
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-text-col active:text-primary-col hover:text-primary-col" href="/members">
            Members
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          {loggedin && <Button onClick={() => { handleLogout() }} className="text-red-500 bg-bg1-col sm:flex hidden" variant="flat">
            Log Out
          </Button>}
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="bg-bg1-col/90 overflow-hidden">
        <NavbarMenuItem>
          <Link
            className="text-text-col active:text-primary-col hover:text-primary-col"
            href="/"
            size="lg"
          >
            Overview
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>

          <Link
            className="text-text-col active:text-primary-col hover:text-primary-col"
            href="/events"
            size="lg"
          >
            Events
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>

          <Link
            className="text-text-col active:text-primary-col hover:text-primary-col"
            href="/members"
            size="lg"
          >
            Members
          </Link>
        </NavbarMenuItem>
        {loggedin && <Button onClick={() => { handleLogout() }} className="text-red-500 bg-bg2-col w-10 ml-[-1%]" size="lg" variant="flat">
          Log Out
        </Button>}
      </NavbarMenu>
    </Navbar>
  );
}
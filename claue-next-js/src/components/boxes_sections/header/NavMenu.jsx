"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"



export function NavMenu() {
  return (
    <NavigationMenu>
    <NavigationMenuList>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[#56cfe1]" >Demo</NavigationMenuTrigger>
        <NavigationMenuContent className="p-4">
          <NavigationMenuLink>Link</NavigationMenuLink>
        </NavigationMenuContent>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger >Product</NavigationMenuTrigger>
       
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger >Shop</NavigationMenuTrigger>
       
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger className="text-[#ec0101] text-[14px]" >Sale</NavigationMenuTrigger>
        
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger >Portfolio</NavigationMenuTrigger>
        
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger >Lookbook</NavigationMenuTrigger>
        
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuTrigger >Blog</NavigationMenuTrigger>
        
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
  
  )
}

const ListItem = (({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

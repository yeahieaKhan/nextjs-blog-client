import * as React from "react";

// import { SearchForm } from "@/components/shared/search-form";
// import { VersionSwitcher } from "@/components/shared/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  // SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { adminRoute } from "@/app/routes/admiRoutes";
import { userRoutes } from "@/app/routes/userRoutes";
import { Route } from "@/type";
import { Roles } from "@/app/contrains/roles";

// This is sample data.
// const data = {
//   versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
//   navMain: [
//     {
//       title: "Getting Started",
//       url: "#",
//       items: [
//         {
//           title: "Admin Dashboard",
//           url: "/admin-dashboard",
//         },
//         {
//           title: "user-dashboard",
//           url: "/dashboard",
//         },
//       ],
//     },
//   ],
// };

export function AppSidebar({
  user,
  ...props
}: {
  user: { role: string } & React.ComponentProps<typeof Sidebar>;
}) {
  let routes: Route[] = [];

  switch (user.role) {
    case Roles.admin:
      routes = adminRoute;
      break;

    case Roles.user:
      routes = userRoutes;
      break;

    default:
      routes = [];
  }

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {routes.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}

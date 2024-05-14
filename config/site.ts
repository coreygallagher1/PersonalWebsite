export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "coreygallagher.dev",
	description: "My Personal Website",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "About Me",
      href: "/about",
    },
    {
      label: "Work Experience",
      href: "/work",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Blog",
      href: "/blog",
    }
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		github: "https://github.com/coreygallagher1?tab=repositories",
		instagram: "https://www.instagram.com/coreygallagher1/",
		linkedin: "https://www.linkedin.com/in/coreygallagher/",
	},
};

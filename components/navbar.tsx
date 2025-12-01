import {
	Navbar as NextUINavbar,
	NavbarContent,
	NavbarBrand,
	NavbarItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";
import { ThemeSwitch } from "@/components/theme-switch";
import Logo from "@/public/pictures/cgLogo.webp";

export const Navbar = () => {

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="px-4 sm:px-6">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-2 sm:gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-2 sm:gap-3" href="/">
						<Image src={Logo} alt="logo" width={30} height={30} className="w-7 h-7 sm:w-8 sm:h-8" />
						<p className="font-bold text-inherit text-sm sm:text-base">Corey Gallagher</p>
					</NextLink>
				</NavbarBrand>
				<ul className="hidden lg:flex gap-4 lg:gap-5 xl:gap-6 justify-start ml-4 lg:ml-6">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} isActive>
							<NextLink
								className={clsx(
									linkStyles({ color: "foreground" }),
									"data-[active=true]:text-primary data-[active=true]:font-large text-sm lg:text-base px-2"
								)}
								color="foreground"
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<NavbarItem className="hidden sm:flex">
					<ThemeSwitch />
				</NavbarItem>
			</NavbarContent>
		</NextUINavbar>
	);
};

import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Tea Time with Mary",
	subtitle: "Recensioni di una picky eater incurabile",
	lang: "it",
	themeColor: {
		hue: 340, // rosa cipria
		fixed: false,
	},
	banner: {
		enable: false,
		src: "assets/images/demo-banner.png",
		position: "center",
		credit: {
			enable: false,
			text: "",
			url: "",
		},
	},
	toc: {
		enable: true,
		depth: 2,
	},
	favicon: [
		{ src: "/favicon/favicon-32.png", sizes: "32x32" },
		{ src: "/favicon/favicon-128.png", sizes: "128x128" },
		{ src: "/favicon/favicon-180.png", sizes: "180x180" },
		{ src: "/favicon/favicon-192.png", sizes: "192x192" },
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.png",
	name: "Mara",
	bio: "Picky eater incurabile a passeggio tra ristoranti, trattorie e pasticcerie. Recensioni sincere, senza filtri e senza sponsorizzazioni.",
	links: [
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://instagram.com/teatimewithmary",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: false,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

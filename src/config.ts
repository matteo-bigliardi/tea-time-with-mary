import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Tavola Rosa",
	subtitle: "Recensioni di ristoranti, con dolcezza",
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
	favicon: [],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/demo-avatar.png",
	name: "Il tuo nome",
	bio: "Racconto i ristoranti che provo, tra atmosfera, piatti e piccoli dettagli che fanno la differenza.",
	links: [
		{
			name: "Instagram",
			icon: "fa6-brands:instagram",
			url: "https://instagram.com",
		},
		{
			name: "TikTok",
			icon: "fa6-brands:tiktok",
			url: "https://tiktok.com",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	theme: "github-dark",
};

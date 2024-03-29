import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "@components/icons/search-icon";
import { siteSettings } from "@settings/site-settings";
import HeaderMenu from "@components/layout/header/header-menu";
import Logo from "@components/ui/logo";
import { useUI } from "@contexts/ui.context";
import { ROUTES } from "@utils/routes";
import { addActiveScroll } from "@utils/add-active-scroll";
import dynamic from "next/dynamic";
import { useTranslation } from "next-i18next";
import FavoriteIcon from "@components/icons/favorites-icon";
const AuthMenu = dynamic(() => import("./auth-menu"), { ssr: false });
const CartButton = dynamic(() => import("@components/cart/cart-button"), {
	ssr: false,
});

type DivElementRef = React.MutableRefObject<HTMLDivElement>;
const { site_header } = siteSettings;
const Header: React.FC = () => {
	const {
		// openSidebar,
		// setDrawerView,
		openSearch,
		openModal,
		setModalView,
		isAuthorized,
	} = useUI();
	const { t } = useTranslation("common");
	const siteHeaderRef = useRef() as DivElementRef;
	addActiveScroll(siteHeaderRef);

	function handleLogin() {
		setModalView("LOGIN_VIEW");
		return openModal();
	}
	// function handleMobileMenu() {
	// 	setDrawerView("MOBILE_MENU");
	// 	return openSidebar();
	// }

	const [scrollY, setScrollY] = useState<number>(0);

	useEffect(() => {
		const handleScroll = () => {
		  setScrollY(window.scrollY);
		};
	
		// just trigger this so that the initial state 
		// is updated as soon as the component is mounted
		// related: https://stackoverflow.com/a/63408216
		handleScroll();
	
		window.addEventListener("scroll", handleScroll);
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	
		// eslint-disable-next-line react-hooks/exhaustive-deps
	  }, []);

	return (
		<header className={`top-7 z-100 page-header ${scrollY > 150 ? 'is-sticky': ''}`}>
			<div className="h-16 w-full">
				<nav className="px-10 h-full w-full items-center justify-center" style={{justifyContent: 'center'}}>
					<a href="" className="justify-start ">
						<Logo />
					</a>
					<HeaderMenu
		 				data={site_header.menu}
		 				className="for-desktop lg:flex md:ms-6 xl:ms-10 justify-center"
		 			/>
					<div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
		 				<button
		 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		 					onClick={openSearch}
		 					aria-label="search-button"
		 				>
		 					<SearchIcon />
		 				</button>
		 				<button
		 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		 					onClick={() => {
		 						console.log("not working yet")
		 					}}
		 					aria-label="search-button"
		 				>
		 					<FavoriteIcon />
		 				</button>
		 				<div className="-mt-0.5 flex-shrink-0">
		 					<AuthMenu
		 						isAuthorized={isAuthorized}
		 						href={ROUTES.ACCOUNT}
		 						className="text-sm xl:text-base text-heading menu-text font-semibold"
		 						btnProps={{
		 							className:
		 								" font-josephine text-sm xl:text-base text-heading font-semibold focus:outline-none",
		 							children: "Sign in",
		 							onClick: handleLogin,
		 						}}
		 					>
		 						{t("text-account") as string}
		 					</AuthMenu>
		 				</div>
		 				<CartButton />
		 			</div>
				</nav>
			</div>
			{/* <div className="container h-12 w-full">
				<ul className="flex justify-center">
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
					<li>hi</li>
				</ul>
			</div> */}
		</header>
		// <header
		// 	id="siteHeader"
		// 	ref={siteHeaderRef}
		// 	className="w-full h-16 sm:h-20 lg:h-24 relative z-20"
		// >
		// 	<div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ps-4 md:ps-0 lg:ps-6 pe-4 lg:pe-6 transition duration-200 ease-in-out">
		// 		<div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
		// 			<button
		// 				aria-label="Menu"
		// 				className="menuBtn hidden md:flex lg:hidden flex-col items-center justify-center px-5 2xl:px-7 flex-shrink-0 h-full outline-none focus:outline-none"
		// 				onClick={handleMobileMenu}
		// 			>
		// 				<span className="menuIcon">
		// 					<span className="bar" />
		// 					<span className="bar" />
		// 					<span className="bar" />
		// 				</span>
		// 			</button>
		// 			<Logo />

		// 			<HeaderMenu
		// 				data={site_header.menu}
		// 				className="hidden lg:flex md:ms-6 xl:ms-10 justify-center"
		// 			/>

		// 			{/* <div className="flex-shrink-0 ms-auto lg:me-5 xl:me-8 2xl:me-10">
		// 				<LanguageSwitcher />
		// 			</div> */}
		// 			<div className="hidden md:flex justify-end items-center space-s-6 lg:space-s-5 xl:space-s-8 2xl:space-s-10 ms-auto flex-shrink-0">
		// 				<button
		// 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		// 					onClick={openSearch}
		// 					aria-label="search-button"
		// 				>
		// 					<SearchIcon />
		// 				</button>
		// 				<button
		// 					className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
		// 					onClick={() => {
		// 						console.log("not working yet")
		// 					}}
		// 					aria-label="search-button"
		// 				>
		// 					<FavoriteIcon />
		// 				</button>
		// 				<div className="-mt-0.5 flex-shrink-0">
		// 					<AuthMenu
		// 						isAuthorized={isAuthorized}
		// 						href={ROUTES.ACCOUNT}
		// 						className="text-sm xl:text-base text-heading menu-text font-semibold"
		// 						btnProps={{
		// 							className:
		// 								"text-sm xl:text-base text-heading font-semibold focus:outline-none",
		// 							children: t("text-sign-in"),
		// 							onClick: handleLogin,
		// 						}}
		// 					>
		// 						{t("text-account")}
		// 					</AuthMenu>
		// 				</div>
		// 				<CartButton />
		// 			</div>
		// 		</div>
		// 	</div>
		// </header>
	);
};

export default Header;

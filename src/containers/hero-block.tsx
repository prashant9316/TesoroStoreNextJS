import BannerCard from "@components/common/banner-card";
import Carousel from "@components/ui/carousel/carousel";
import { homeOneHeroBanner as banners } from "@framework/static/banner";
// import { useWindowSize } from "@utils/use-window-size";
import { ROUTES } from "@utils/routes";
import { SwiperSlide } from "swiper/react";

const breakpoints = {
	"1500": {
		slidesPerView: 1,
	},
	"0": {
		slidesPerView: 1,
	},
};

const HeroBlock: React.FC = () => {
	// const { width } = useWindowSize();
	return (
		<div className="heroBannerOne relative left-0 mt-[10vh] max-w-[1920px] mb-5 lg:mx-auto overflow-hidden " style={{
			maxHeight: '100vh'
		}}>
			<Carousel
				breakpoints={breakpoints}
				centeredSlides={false}
				autoplay={{ delay: 4000 }}
				className="mx-0 max-w-[100vw]"
				buttonClassName="hidden"
				pagination={{
					clickable: true,
				}}
			>
				{banners?.map((banner: any) => (
					<SwiperSlide
						className="carouselItem px-5 h-[100vh] max-w-[100vw]"
						key={`banner--key-${banner?.id}`}
					>
						<BannerCard
							banner={banner}
							href={`${ROUTES.CATEGORY}/${banner.slug}`}
						/>
					</SwiperSlide>
				))}
			</Carousel>
		</div>
	);
};

export default HeroBlock;

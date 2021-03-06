import React, { useEffect, useState } from "react";
import {
    MapMarkerIcon,
	EnvelopeIcon,
	AngleRightIcon,
	InstagramIcon,
	FacebookFIcon
} from "react-line-awesome";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import FsLightbox from "fslightbox-react";

import Nav from "./components/Nav/Nav";
import EventBox from "./components/EventBox/EventBox";
import TeamBox from "./components/TeamBox/TeamBox";
import ContactBox from "./components/ContactBox/ContactBox";

import { getEvents, getGallery, getTeam } from "./services/EventService";
import { ModelEvent, ModelImage, ModelTeam } from "./models/Models";
import { GetImageUrl } from "./helpers/ImageHelper";

import logo_rgbvisual from "./assets/img/sponsors/rgbvisual_ts.png";
import logo_scs from "./assets/img/sponsors/scs_tr.png";
import logo_rockgolyo from "./assets/img/sponsors/rockgolyo_tr.png";
import logo_ehok from "./assets/img/sponsors/ehok_tr.png";
import logo_helix from "./assets/img/sponsors/helix_tr.png";
import since from "./assets/img/since.png";

import "swiper/css";
import "./App.scss";
import "./Responsive.scss";

const App: React.FC = () => {
	const [events, setEvents] = useState<{
		loading: boolean,
		events: ModelEvent[],
	}>({
		loading: true,
		events: [],
	});
	const [team, setTeam] = useState<{
		loading: boolean,
		team: ModelTeam[],
	}>({
		loading: true,
		team: [],
	});
	const [gallery, setGallery] = useState<{
		loading: boolean,
		gallery: ModelImage[],
		lightbox: string[],
	}>({
		loading: true,
		gallery: [],
		lightbox: [],
	});
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1
	});
		
	const openLightboxOnSlide = (number: number) => {
		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: number
		});
	}

	useEffect(() => {
		getEvents()
			.then((res: any) => {
				setEvents({
					loading: false,
					events: res.data.events,
				});
			})
			.catch((err: any) => {
				setEvents({
					loading: false,
					events: [],
				});
			});

		getTeam()
			.then((res: any) => {
				setTeam({
					loading: false,
					team: res.data.team,
				});
			})
			.catch((err: any) => {
				setTeam({
					loading: false,
					team: [],
				});
			});

		getGallery()
			.then((res: any) => {
				let _tempLightbox: string[] = [];
				res.data.gallery.forEach((element: ModelImage) => {
					if (element?.image) {
						_tempLightbox.push(GetImageUrl(element));
					}
				});
				setGallery({
					loading: false,
					gallery: res.data.gallery,
					lightbox: _tempLightbox,
				});
			})
			.catch((err: any) => {
				setGallery({
					loading: false,
					gallery: [],
					lightbox: [],
				});
			});
	}, []);

	return (
		<div className="App">
			<Nav />
			{!events.loading && events.events.length > 0 &&
				<div className="header-blur" style={{ backgroundImage: `url(${GetImageUrl(events.events[0])})` }} />
			}
			<section id="events">
				<div className="container">
					{!events.loading && events.events.length > 0 &&
						<div className="events-wrapper">
							{events.events.map((event: ModelEvent, index: number) => (
								<EventBox key={index} event={event} />
							))}
						</div>
					}
				</div>
			</section>
			<section id="aboutus">
				<div className="container">
					<h2 className="section-title">
						R??lunk
					</h2>
					<h3 className="section-sub-title">
						Hangos??tunk ??s hangoskodunk.
					</h3>
					<p>
						Kis t??lz??ssal nevezhetn??nk ezt a csapatot az egyetemi rendezv??nyek lelk??nek. Legyen sz?? g??lyah??tr??l, szakestekr??l, kari rendezv??nyekr??l, Mi mindenhol r??szt vesz??nk valamilyen form??ban.
					</p>
					<p>
						Foglalkozunk hang- ??s f??nytechnik??val, vide??z??ssal, valamint rendezv??nyek k??zvet??t??s??vel.
					</p>
					<p>
						A Koll??giumi St??di?? egy t??bb, mint 40 ??ves m??ltra visszatekint?? szervezet.
					</p>
					<img src={since} alt="" className="since" />
				</div>
			</section>
			<section id="sponsors">
				<div className="container">
					<img src={logo_ehok} alt="" />
					<img src={logo_helix} alt="" />
					<img src={logo_rgbvisual} alt="" />
					<img src={logo_rockgolyo} alt="" />
					<img src={logo_scs} alt="" />
				</div>
			</section>
			<section id="team">
				<div className="container">
					<h2 className="section-title">
						Csapatunk
					</h2>
					<h3 className="section-sub-title">
						Jelenleg {team.team.length??" - "} taggal b??szk??lkedhet??nk, azonban folyamatosan v??rjuk ??j tagok jelentkez??s??t!
					</h3>
					{!team.loading && team.team.length > 0 &&
						<div className="team-grid">
							{team.team.map((team: ModelTeam, index: number) => (
								<TeamBox key={index} team={team} />
							))}
						</div>
					}
					<div className="alert">
						<div className="alert-head">Jelentkezz te is St??di??snak</div>
						<div className="alert-body">
							K??ldd el nek??nk f??nyk??pes ??n??letrajzod ??s motiv??ci??s leveled a jelentkez??shez!
							<br/>
							<AngleRightIcon />
							{" "}
							<a href="mailto:szestuvez@gmail.com" target="_blank" rel="noreferrer">Jelentkezem</a>
						</div>
					</div>
				</div>
			</section>
			<section id="gallery">
				{(!gallery.loading && gallery.gallery.length > 0) &&
					<>
						<Swiper
							modules={[
								Autoplay
							]}
							spaceBetween={0}
							autoplay={{ delay: 3000 }}
							loop={true}
							breakpoints={{
								640: {
									slidesPerView: 1,
								},
								768: {
									slidesPerView: 2,
								},
								1920: {
									slidesPerView: 3,
								},
							}}
						>
							{gallery.gallery.map((image: ModelImage, index: number) => (
								<SwiperSlide key={index} onClick={() => openLightboxOnSlide(index + 1)}>
									<img src={GetImageUrl(image)} alt="" />
								</SwiperSlide>
							))}
						</Swiper>
						<FsLightbox
							toggler={lightboxController.toggler}
							sources={gallery.lightbox}
							slide={lightboxController.slide}
						/>
					</>
				}
			</section>
			<section id="contact">
				<div className="container">
					<h2 className="section-title">
						Kapcsolat
					</h2>
					<h3 className="section-sub-title">
						??rj ha b??rmilyen k??rd??sed van!
					</h3>
					<div className="contact-grid">
						<ContactBox
							url="mailto:szestuvez@gmail.com"
						>
							<EnvelopeIcon />
							<span>
								szestuvez@gmail.com
							</span>
						</ContactBox>
						<ContactBox
							url="https://goo.gl/maps/ZLPEATLByKXce2Wo8"
						>
							<MapMarkerIcon />
							<span>
								9026 GY??R, EGYETEM T??R 1. - K/3
							</span>
						</ContactBox>
						<ContactBox
							url="https://www.facebook.com/studioSZE"
						>
							<FacebookFIcon />
							<span>
								Facebook
							</span>
						</ContactBox>
						<ContactBox
							url="https://www.instagram.com/kollegiumistudio/"
						>
							<InstagramIcon />
							<span>
								Instagram
							</span>
						</ContactBox>
					</div>
				</div>
			</section>
			<footer>
				<div className="container">
					<p>
						?? {new Date().getFullYear()} Koll??giumi St??di??  ??? Minden jog fenntartva!
					</p>
					<p>
						<a href="https://kvn.hu/">KVN.hu</a>
					</p>
				</div>
			</footer>
		</div>
	);
};

export default App;

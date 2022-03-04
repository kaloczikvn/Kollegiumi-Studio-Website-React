import React, { useEffect, useState } from "react";
import {
    MapMarkerIcon,
	EnvelopeIcon,
	AngleRightIcon,
	InstagramIcon,
	FacebookFIcon
} from "react-line-awesome";

import Nav from "./components/Nav/Nav";
import EventBox from "./components/EventBox/EventBox";
import TeamBox from "./components/TeamBox/TeamBox";

import { getEvents, getTeam } from "./services/EventService";
import { ModelEvent, ModelTeam } from "./models/Models";
import { GetImageUrl } from "./helpers/ImageHelper";

import logo_rgbvisual from "./assets/img/sponsors/rgbvisual_ts.png";
import logo_scs from "./assets/img/sponsors/scs_tr.png";
import logo_rockgolyo from "./assets/img/sponsors/rockgolyo_tr.png";
import logo_ehok from "./assets/img/sponsors/ehok_tr.png";
import since from "./assets/img/since.png";

import "./App.scss";

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
						<>
							{events.events.map((event: ModelEvent, index: number) => (
								<EventBox key={index} event={event} />
							))}
						</>
					}
				</div>
			</section>
			<section id="aboutus">
				<div className="container">
					<h2 className="section-title">
						Rólunk
					</h2>
					<h3 className="section-sub-title">
						Hangosítunk és hangoskodunk.
					</h3>
					<p>
						Kis túlzással nevezhetnénk ezt a csapatot az egyetemi rendezvények lelkének. Legyen szó gólyahétről, szakestekről, kari rendezvényekről, Mi mindenhol részt veszünk valamilyen formában.
					</p>
					<p>
						Foglalkozunk hang- és fénytechnikával, videózással, valamint rendezvények közvetítésével.
					</p>
					<p>
						A Kollégiumi Stúdió egy több, mint 40 éves múltra visszatekintő szervezet.
					</p>
					<img src={since} alt="" className="since" />
				</div>
			</section>
			<section id="sponsors">
				<div className="container">
					<img src={logo_rgbvisual} alt="" />
					<img src={logo_scs} alt="" />
					<img src={logo_rockgolyo} alt="" />
					<img src={logo_ehok} alt="" />
				</div>
			</section>
			<section id="team">
				<div className="container">
					<h2 className="section-title">
						Csapatunk
					</h2>
					<h3 className="section-sub-title">
						Jelenleg {team.team.length??" - "} taggal büszkélkedhetünk, azonban folyamatosan várjuk új tagok jelentkezését!
					</h3>
					{!team.loading && team.team.length > 0 &&
						<div className="team-grid">
							{team.team.map((team: ModelTeam, index: number) => (
								<TeamBox key={index} team={team} />
							))}
						</div>
					}
					<div className="alert">
						<div className="alert-head">Jelentkezz te is Stúdiósnak</div>
						<div className="alert-body">
							Küldd el nekünk fényképes önéletrajzod és motivációs leveled a jelentkezéshez!
							<br/>
							<AngleRightIcon />
							{" "}
							<a href="mailto:szestuvez@gmail.com" target="_blank">Jelentkezem</a>
						</div>
					</div>
				</div>
			</section>
			<section id="contact">
				<div className="container">
					<h2 className="section-title">
						Kapcsolat
					</h2>
					<h3 className="section-sub-title">
						Írj ha bármilyen kérdésed van!
					</h3>
					<div className="contact-grid">
						<a href="mailto:szestuvez@gmail.com" target="_blank" className="contact-box">
							<EnvelopeIcon />
							<span>
								szestuvez@gmail.com
							</span>
						</a>
						<a href="https://goo.gl/maps/ZLPEATLByKXce2Wo8" target="_blank" className="contact-box">
							<MapMarkerIcon />
							<span>
								9026 GYŐR, EGYETEM TÉR 1. - K/3
							</span>
						</a>
						<a href="https://www.facebook.com/studioSZE" target="_blank" className="contact-box">
							<FacebookFIcon />
							<span>
								Facebook
							</span>
						</a>
						<a href="https://www.instagram.com/kollegiumistudio/" target="_blank" className="contact-box">
							<InstagramIcon />
							<span>
								Instagram
							</span>
						</a>
					</div>
				</div>
			</section>
			<footer>
				<div className="container">
					<p>
						© {new Date().getFullYear()} Kollégiumi Stúdió  • Minden jog fenntartva!
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

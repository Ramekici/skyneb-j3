import React from 'react';
import { Link } from 'react-router-dom';
import './Platform.css';
import Samsung from '../assets/samsung.png';
import LeftPic from '../assets/left.png';
import RightPic from '../assets/right.png';
import GooglePlay from '../assets/googlestore.png';
import AppStore from '../assets/appstore.png';

export default function Platform() {



    return (
        <div className="container">
            <div className="platform-row">
                <div className="platform-col">
                    <div className="eleman">
                        <div className="image">
                            <img src={LeftPic} alt="left-icon" />
                        </div>
                        <h3 className="title"> SkyNeb </h3>
                        <h4 className="subtitle"> Web Platform  </h4>
                        <p className="paragraf"> Richard McClinctok, a Latin professor at Hampten-Sidney
                    College in Virginia, looked up one of the more obscure Latin words, consectetur </p>
                        <ul className="nav-item">
                            <li className="nav-link">
                                <Link
                                    className="linkel"
                                    to={{
                                        pathname: "https://www.skyneb.com/",
                                        state: { fromDashboard: true }
                                    }}
                                    target="_blank" >Download SkyNeb for Windows
                                <i className="fas fa-arrow-right"></i></Link>

                            </li>
                            <li className="nav-link">
                                <Link
                                    className="linkel"
                                    to={{
                                        pathname: "https://www.skyneb.com/",
                                        state: { fromDashboard: true }
                                    }} target="_blank" >Launch SkyNeb for Mac or in Browser
                                <i className="fas fa-arrow-right"></i>
                                </Link>

                            </li>
                        </ul>
                    </div>
                </div>
                <div className="platform-col">
                    <div className="center-image">
                        <img src={Samsung} alt="iletisim" />
                    </div>
                </div>
                <div className="platform-col">
                    <div className="eleman">
                        <div className="image">
                            <img src={RightPic} alt="right-icon" />
                        </div>
                        <h3 className="title"> SkyNeb </h3>
                        <h4 className="subtitle"> for Mobile </h4>
                        <p className="paragraf"> Richard McClinctok, a Latin professor at Hampten-Sidney
                    College in Virginia, looked up one of the more obscure Latin words, consectetur </p>
                        <div className="button-group">
                            <Link
                                style={{ marginRight: "0.5rem" }}
                                to={{
                                    pathname: 'https://play.google.com/store/apps/details?id=com.skyneb.skyneb_dna&hl=en_US&gl=US',
                                    state: { fromDashboard: true }
                                }} target="_blank">
                                <div className="button-playstore">
                                    <img src={GooglePlay} alt="playstore" />
                                </div>
                            </Link>
                            <Link
                                style={{ marginRight: "0.5rem" }}
                                to={{
                                    pathname: 'https://apps.apple.com/gb/app/skyneb-dna/id1483445650?l=tr',
                                    state: { fromDashboard: true }
                                }} target="_blank">
                                <div className="button-playstore">
                                    <img src={AppStore} alt="appstore" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

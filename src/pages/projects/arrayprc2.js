/*
import Arrayprc from "./arrayprc";
import "./array.css";
import Header from "../../Header/header_new";

function arrayprc2() {
    const bts = [
        {
            team: "Admin.",
            what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",
            link: "https://naver.com",
        },
        {
            team: "Rebit.",
            what: "딥러닝활용 환경보호 습관유도 게임 어플리케이션",
            link: "https://naver.com",
        },
        {
            team: "BBANGYA.",
            what: "슬기로운 빵세권 라이프 어플리케이션",
            link: "https://naver.com",
        },
        {
            team: "HOT GIRL.",
            what: "AI기반 실시간 사용자 맞춤 키오스크",
            link: "https://naver.com",
        },
        {
            team: "FULL HOUSE.",
            what: "AI기반 실시간 사용자 맞춤 키오스크",
            link: "https://naver.com",
        },
        {
            team: "Admin.",
            what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",
            link: "https://naver.com",
        },
        {
            team: "Admin.",
            what: "소상공인을 위한 무인매장 인공지능능 솔루션 어플리케이션",
            link: "https://naver.com",
        },
    ];

    const handleTextClick = (e, link) => {
        if (e.target.className === "team" || e.target.className === "subject") {
            window.location.href = link;
        }
    };
    return (
        <div>
            <div className="Header">
                <Header />
            </div>
            <div className="sub_con">PROJECTS</div>
            <div className="every_">
                <div
                    className="every"
                    style={{
                        fontFamily: "Apple",
                        letterSpacing: "2px",
                    }}
                >
                    {bts.map((bt, index) => (
                        <div
                            key={index}
                            onClick={(e) => handleTextClick(e, bt.link)}
                        >
                            <Arrayprc team={bt.team} subject={bt.what} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default arrayprc2;
*/
import React from "react";
import Arrayprc from "./arrayprc";
import "./array.css";
import Header from "../../Header/header_new";
import { Link } from "react-router-dom";

function Arrayprc2() {
    const bts = [
        {
            team: "REBIT",
            what: "딥러닝 활용 환경보호 습관 유도 게임 어플리케이션",
            link: "/team1",
        },
        {
            team: "PUPPY WATCH",
            what: "딥러닝 활용 반려견 행동 패턴분석 어플리케이션 ",
            link: "/team2",
        },
        {
            team: "HOT GIRL",
            what: "AI 실시간 사용자 맞춤형 키오스크",
            link: "/team3",
        },
        {
            team: "FULL HOUSE",
            what: "인테리어 플랜을 위한 3D 가구 배치 시뮬레이션 체험 쇼핑몰",
            link: "/team4",
        },
        {
            team: "ADMIN",
            what: "소상공인을 위한 무인매장 인공지능 솔루션 어플리케이션",
            link: "/team5",
        },
        {
            team: "Skrr!",
            what: "Computer Vision 기반 간편한 주차 예약 및 관리 서비스",
            link: "/team6",
        },
        {
            team: "BBANG YA",
            what: "슬기로운 빵세권 라이프 어플리케이션",
            link: "/team7",
        },
    ];

    const handleTextClick = (link) => {
        window.location.href = link;
    };

    return (
        <div>
            {/* Header 컴포넌트는 이곳에 한 번만 렌더링 */}
            <div className="Header">
                <Header />
            </div>
            <div
                className="every"
                style={{
                    fontFamily: "Apple",
                    letterSpacing: "2px",
                }}
            >
                <div className="oval-text">/*PROJECTS*/</div>

                {bts.map((bt, index) => (
                    <div key={index} onClick={() => handleTextClick(bt.link)}>
                        <Link to={bt.link}>
                            <Arrayprc team={bt.team} subject={bt.what} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Arrayprc2;

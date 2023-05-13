import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Membership.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//import NavbarHome from './NavbarHome.js';
gsap.registerPlugin(ScrollTrigger);
//import Image1 from '../../client/public/gym.jpg';
//import Image2 from '../../assets/images/Treadmill.jpg';


export default function Workout() {
    let text = useRef(null);

    useEffect(() => {
        gsap.to(text, {
            duration: 1,
            y: '10',
            opacity: 1,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: text,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let cor1 = useRef(null);
    useEffect(() => {
        gsap.to(cor1, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: cor1,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let cor2 = useRef(null);
    useEffect(() => {
        gsap.to(cor2, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: cor2,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let corri1 = useRef(null);
    useEffect(() => {
        gsap.to(corri1, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            stagger: 0.4,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: corri1,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let corri2 = useRef(null);
    useEffect(() => {
        gsap.to(corri2, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            stagger: 0.4,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: corri2,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);


    let cor3 = useRef(null);
    useEffect(() => {
        gsap.to(cor3, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: cor3,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let cor4 = useRef(null);
    useEffect(() => {
        gsap.to(cor4, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: cor4,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let corri3 = useRef(null);
    useEffect(() => {
        gsap.to(corri3, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            stagger: 0.4,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: corri3,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    let corri4 = useRef(null);
    useEffect(() => {
        gsap.to(corri4, {
            delay: 0.4,
            duration: 1,
            x: '0',
            y: '0',
            opacity: 1,
            stagger: 0.4,
            ease: 'ease-out',
            scrollTrigger: {
                trigger: corri4,
                start: 'top 90%',
                end: 'bottom 60%',
                toggleActions: 'restart complete ',
                //options: play, pause, resume, reset, restart, complete, reverse,none
            },
        });
    }, []);

    return (
        <>
            
            <div className="membership">
                <div className="membership--container">
                    <h1>Services Offered</h1>
                    <p className="membership--desc">

                    </p>
                    <div
                        className="membership--wrap"
                        ref={(el) => {
                            text = el;
                        }}
                    >
                    </div>
                </div>
            </div>

            <div className="join-us">
                <div className="joinus--container">
                    <img
                        src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="membership"
                        ref={(el) => {
                            cor1 = el;
                        }}
                    />
                    <div
                        className="joinus--headline"
                        ref={(el) => {
                            corri1 = el;
                        }}
                    >
                        <h3>Available classes</h3>
                        <p>
                        Visit you nearest store today to get more details
                        </p>
                        {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
        </Button> */}
                    </div>
                </div>
            </div>


            <div className="join-us">
                <div className="joinus--container">

                    <div
                        className="joinus--headline"
                        ref={(el) => {
                            corri2 = el;
                        }}
                    >
                        <h3>Treadmill</h3>
                        <p>
                            Enhance your agility today with our specialized regimen using treadmill
                        </p>
                        {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
        </Button> */}
                    </div>
                    <img
                        src="https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="membership"
                        ref={(el) => {
                            cor2 = el;
                        }}
                    />
                </div>
            </div>

            <div className="join-us">
                <div className="joinus--container">

                    <div
                        className="joinus--headline"
                        ref={(el) => {
                            corri3 = el;
                        }}
                    >
                        <h3>Staircase</h3>
                        <p>
                            Enhance your Stamina today with our specialized regimen using Staircase
                        </p>
                        {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
        </Button> */}
                    </div>
                    <img
                        src="https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="membership"
                        ref={(el) => {
                            cor3 = el;
                        }}
                    />
                </div>
            </div>

            <div className="join-us">
                <div className="joinus--container">

                    <div
                        className="joinus--headline"
                        ref={(el) => {
                            corri4 = el;
                        }}
                    >
                        <h3>Weight lifting</h3>
                        <p>
                            Enhance your Strength today with our specialized regimen using Weights
                        </p>
                        {/* <Button buttonStyle="btn--primary" buttonSize="btn--large">
            Join Us{' '}
        </Button> */}
                    </div>
                    <img
                        src="https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800"
                        alt="membership"
                        ref={(el) => {
                            cor4 = el;
                        }}
                    />
                </div>
            </div>

        </>
    );
}

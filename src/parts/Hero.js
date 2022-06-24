import React from 'react'

import iconTreveler from 'assets/images/icon/ic_traveler.svg'
import iconCities from 'assets/images/icon/ic_cities.svg'
import iconTreasure from 'assets/images/icon/ic_treasure.svg'
import heroPicture from 'assets/images/img-hero-picture.jpg'
import heroFrame from 'assets/images/img-hero-frame.jpg'
import formatNumber from 'utils/NumberFormat'

import Button from 'elements/Button'

export default function Hero(props) {

    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        })
    }

    return (
        <section className="container pt-4">
            <div className="row align-item-center">
                <div className="col-auto pr-5" style={{width: 550}}>
                    <h1 className="font-weight-bold line-height-1 mb-3">
                        Capture Your Journey, <br />
                        Traveling With <span style={{ color: "#3252DF" }}>Travel</span>-[ink].
                    </h1>

                    <p className="mb-4 font-weight-light text-gray-500 w-75" style={{lineHeight: "170%"}}>
                        We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
                    </p>

                    <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className="row" style={{marginTop: 80}}>
                        <div className="col-auto" style={{marginRight: 30}}>
                            <img
                                width="35"
                                height="35" 
                                src={iconTreveler} 
                                alt={`${props.data.travelers} Travelers`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.travelers)}{" "}
                                <span className="text-gray-500 font-weight-lihgt">
                                    Travelers
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto" style={{marginRight: 30}}>
                            <img
                                width="35"
                                height="35" 
                                src={iconTreasure} 
                                alt={`${props.data.treasures} Treasures`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.treasures)}{" "}
                                <span className="text-gray-500 font-weight-lihgt">
                                    Treasures
                                </span>
                            </h6>
                        </div>

                        <div className="col-auto">
                            <img
                                width="35"
                                height="35" 
                                src={iconCities} 
                                alt={`${props.data.cities} cities`} 
                            />
                            <h6 className="mt-3">
                                {formatNumber(props.data.cities)}{" "}
                                <span className="text-gray-500 font-weight-lihgt">
                                    Cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className="col-6 pl-5">
                    <div style={{width:520, height:410}}>
                        <img className='img-fluid position-absolute' src={heroPicture} alt="Room with Couches" style={{margin: '0 0 0 -30px', zIndex: 1}} />
                        <img className='img-fluid position-absolute' src={heroFrame} alt="Room with Couches Frame" style={{margin: '30px -15px -15px 0'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

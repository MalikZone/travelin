 import React, {Component} from 'react'

 import Header from 'parts/Header'
 import Hero from 'parts/Hero';

 import LandingPageJson from 'json/landingPage.json'
 
 export default class LandingPage extends Component {
   render() {
        return ( <>
                <Header></Header>
                <Hero data={LandingPageJson.hero}/>
            </>
        );
   }
 }
 
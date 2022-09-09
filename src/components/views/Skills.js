import React, { Component } from 'react'

import { Carousel } from 'react-circular-carousel'
import 'react-circular-carousel/dist/index.css'
import AppleCarousel from "react-apple-carousel/src/AppleCarousel";


const skills = [
        {
            src: "",
            name: "C / C++",
            info: ""
        },
        {
            info: "",
            name: "JS",
            src: "img/js.png"
        },
        {
            info: "",
            name: "HTML",
            src: "img/html.png"
        },
        {
            src: "",
            name: "CSS / SCSS / SASS",
            info: "img/css.png"
        },
        {
            src: "",
            name: "CSS / SCSS / SASS",
            info: "img/css.png"
        },
        {
            src: "",
            name: "CSS / SCSS / SASS",
            info: "img/css.png"
        },
    ]


class Example extends Component {
    render() {
        return (
            <AppleCarousel
                renderSlides={[
                    ({ activeItemIndex, index }) => <Slide1 isActive={index === activeItemIndex} />,
                    ({ slide }) => <Slide2 animationValue={slide} />,
                    () => <Slide3 />,
                    () => <Slide4 />,
                ]}
            />
        )
    }
}

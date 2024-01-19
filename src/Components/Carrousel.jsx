import React from "react";
import Slider from "react-slick";
import image1 from "../Assets/BleachTYBW.jpg";
import BleachPanel from "../Assets/BleachPanel.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyleCarousel = styled.div`
    
    margin-top:4.75rem ;
    
    
    .text-right {
        float: right;
        width: 50%;
        margin-top: 5.85rem;
        display: inline-flex;
        min-height: 37.25rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .image-left {
        float: left;
        width: 50%;
        text-align: -webkit-center;
    }
    
    .text-left {
        float: left;
        width: 50%;
    }
    .image-right {
        float: right;
        width: 50%;
    }
    
    .ImgCarousel {
        max-width: 70%;
        height: auto;
    }
    
    & h2 {
        color: #9B3C00;
        text-transform: uppercase;
        text-align: center;

        font-family: Inria Serif;
        font-size: 42px;
        font-style: italic;
        font-weight: 700;
        line-height: normal;
    }
    
    & p {
        width: fit-content;
        padding: 1.875rem 1.25rem;
        border-radius: 0.625rem;
        border: 1px solid #4B4B4B;

        background: linear-gradient(126deg, rgba(155, 60, 0, 0.50) 11.63%, rgba(220, 113, 28, 0.50) 52.19%, rgba(240, 178, 76, 0.50) 90.85%);
        backdrop-filter: blur(18px);
        color: #000;

        text-align: justify;
        font-family: Inria Serif;
        font-size: 1.75rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
        
        margin: auto;
    }

`;
function CustomCarousel() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        pauseOnHover: true,
    };

    return (
        <StyleCarousel>
            <Slider {...settings}>
                <div className="Carousel">
                    <div className="image-left">
                        <img src={image1} alt="Image 1" className="ImgCarousel"/>
                    </div>
                    <div className="text-right">
                        <h2>Decouvrer l'histoire d'ichigo kurosaki</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            vLorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            vLorem ipsum dolor sit amet consectetur </p>
                    </div>
                </div>
                <div>
                    <div className="text-left">
                        <h2>Titre 2</h2>
                        <p>Texte descriptif 2</p>
                    </div>
                    <div className="image-right">
                        <img src={BleachPanel} alt="Image 2" className="ImgCarousel"/>
                    </div>
                </div>
                {/* Ajoutez plus de diapositives en suivant ce schéma */}
            </Slider>
        </StyleCarousel>
    );
}

export default CustomCarousel;

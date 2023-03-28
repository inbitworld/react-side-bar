import React, { useState } from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Multicarousel.css"

function Multicarousel() {
    const items = [
        {
            id: 1,
            title: "Item 1",

        },
        {
            id: 2,
            title: "Item 2",

        },
        {
            id: 3,
            title: "Item 3",

        },
        {
            id: 4,
            title: "Item 4",

        },
        {
            id: 5,
            title: "Item 5",

        },
        {
            id: 6,
            title: "Item 6",

        },
        {
            id: 7,
            title: "Item 7",

        },
        {
            id: 8,
            title: "Item 8",

        },
    ];

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3, // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2, // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

    const centerItemStyle = {
        width: "300px",
        height: "200px",
        borderRadius: "20px",
        boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.1)",
        marginRight: "10px",
        marginLeft: "10px",
        fontSize: "24px",
        fontWeight: "bold",
        color: "#555",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#fff",
    };

    const biggerCenterItemStyle = {
        ...centerItemStyle,
      
        
    };



    const [currentItemIndex, setCurrentItemIndex] = useState(0);

    const handleBeforeSlide = (currentIndex, nextIndex) => {
        console.log("currentIndex:", currentIndex, "nextIndex:", nextIndex);
        setCurrentItemIndex(nextIndex);
    };

    return (
        <Carousel
            responsive={responsive}
            centerMode={true}
            containerClass="carousel-container"
            itemClass="carousel-item"
            beforeSlide={handleBeforeSlide}
        >
            {items.map((item, index) => {
                console.log("currentItemIndex:", currentItemIndex);
                const isCentered = index === currentItemIndex;
                const style = isCentered ? biggerCenterItemStyle : centerItemStyle;
                return (
                    <div key={item.id} style={style}>
                        {/* <img src={item.image} alt={item.title} /> */}
                    </div>
                );
            })}
        </Carousel>
    );
}

export default Multicarousel
import React from "react";
import Carousel from "react-multi-carousel";
import Card from "./PlayerCard";

function Carousels(props) {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    const pakistani_players = props.players.filter(player => player.country == "Pakistan");
    const australian_players = props.players.filter(player => player.country == "Australia");
    const bengali_players = props.players.filter(player => player.country == "Bangladesh");
    const british_players = props.players.filter(player => player.country == "England");
    const indian_players = props.players.filter(player => player.country == "India");
    const kiwis = props.players.filter(player => player.country == "New Zealand");
    const wendies = props.players.filter(player => player.country == "West Indies");
    const lankan_players = props.players.filter(player => player.country == "Sri Lanka");
    const southafrican_players = props.players.filter(player => player.country == "South Africa");
    const others = props.players.filter(player => player.country != "Sri Lanka" && player.country != "West Indies" && player.country != "New Zealand" && 
    player.country != "India" && player.country != "England" && player.country != "Bangladesh" && player.country != "Australia" && player.country != "Pakistan" && player.country != "South Africa");

    return (
        <>
        <div className="my-3">
        <h2>Pakistan</h2>
        <Carousel responsive={responsive}>
            {pakistani_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>Australia</h2>
        <Carousel responsive={responsive}>
            {australian_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>Bangladesh</h2>
        <Carousel responsive={responsive}>
            {bengali_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>England</h2>
        <Carousel responsive={responsive}>
            {british_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>India</h2>
        <Carousel responsive={responsive}>
            {indian_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>New Zealand</h2>
        <Carousel responsive={responsive}>
            {kiwis.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>West Indies</h2>
        <Carousel responsive={responsive}>
            {wendies.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>South Africa</h2>
        <Carousel responsive={responsive}>
            {southafrican_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>Sri Lanka</h2>
        <Carousel responsive={responsive}>
            {lankan_players.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        <div className="my-3">
        <h2>Others</h2>
        <Carousel responsive={responsive}>
            {others.map((player) => (
                <Card player={player} />
            ))}
        </Carousel>
        </div>
        </>
    );
}

export default Carousels;
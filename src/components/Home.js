import React from "react";
import "../css/Home.css";
import ItemCard from "./ItemCard";

function Home() {
  return (
    <div className="home">
      <div>
        <img
          src="https://m.media-amazon.com/images/I/713ezibaREL._SX3000_.jpg"
          alt=""
          className="site_banner"
        />
      </div>

      <div className="item__card__one">
        <ItemCard
          title="2021 Apple 10.2-inch iPad (Wi-Fi, 64GB) - Space Gray"
          id={10}
          stars={5}
          price={439}
          imgUrl="https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_SX466_.jpg"
        />
        <ItemCard
          title="2020 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Space Gray (4th Generation)"
          id={11}
          stars={4}
          price={539}
          imgUrl="https://images-na.ssl-images-amazon.com/images/I/719UcXKzXHL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
        />
        <ItemCard
          title="2021 Apple iPad Mini (Wi-Fi, 64GB) - Space Gray"
          id={12}
          stars={5}
          price={530}
          imgUrl="https://m.media-amazon.com/images/I/71ey-9D8yDL._AC_SX522_.jpg"
        />
        <ItemCard
          title="2021 Apple 12.9-inch iPad Pro (Wi‑Fi, 128GB) - Space Gray"
          id={13}
          stars={5}
          price={1199}
          imgUrl="https://m.media-amazon.com/images/I/81+N4PFF7jS._AC_SX522_.jpg"
        />
      </div>

      <div className="home_bannar">
        <img
          src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"
          alt=""
        />
      </div>

      <div className="item__card__one">
        <ItemCard
          title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money"
          id={1}
          stars={5}
          price={19}
          imgUrl="https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          id={2}
          stars={5}
          price={59}
          imgUrl="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="Zero to One: Notes on Start Ups, or How to Build the Future"
          id={3}
          stars={5}
          price={29}
          imgUrl="https://m.media-amazon.com/images/P/B00KHX0II4.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="Start With Why: The Inspiring Million-Copy Bestseller That Will Help You Find Your Purpose"
          id={4}
          stars={5}
          price={199}
          imgUrl="https://m.media-amazon.com/images/P/0241958229.01._SCLZZZZZZZ_SX500_.jpg"
        />
      </div>

      <div className="item__card__one">
        <ItemCard
          title="Adcom Luminosa - Wireless Bluetooth Over-Ear Stereo Headphone (Black)"
          id={5}
          stars={3}
          price={250}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41lLjpNrn9L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <ItemCard
          title="iQOO 7 5G (8GB RAM, 3GB Extended RAM, 128GB Storage, Android 11, Funtouch OS 11.1) - Storm Black"
          id={6}
          stars={4}
          price={400}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41VhxuplejL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <ItemCard
          title="Inalsa Air Fryer Fully Adjustable Temperature Control, (Black/Silver)"
          id={7}
          stars={4}
          price={1999}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41Q02Oik26L._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

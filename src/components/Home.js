import React from "react";
import Card from "./Card";
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

      <div className="card__one">
        <Card
          heading="Up to 70% off | Clearance store"
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/Clearance/Clearance_store_Desktop_CC_1x._SY304_CB628315133_.jpg"
        />
        <Card
          heading="For all birthday gifting and celebration needs"
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GWBdaystore/Birthday_PC_CC_1x._SY304_CB663001103_.jpg"
        />
        <Card
          heading="Topmost collections to make your wedding special"
          imgUrl="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Wedding-Store/btf/rev2/PC_CC-11x._SY304_CB653473418_.jpg"
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
          stars={5}
          imgUrl="https://m.media-amazon.com/images/P/B07C7M8SX9.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses"
          stars={5}
          imgUrl="https://m.media-amazon.com/images/P/0670921602.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="Zero to One: Notes on Start Ups, or How to Build the Future"
          stars={5}
          imgUrl="https://m.media-amazon.com/images/P/B00KHX0II4.01._SCLZZZZZZZ_SX500_.jpg"
        />
        <ItemCard
          title="Start With Why: The Inspiring Million-Copy Bestseller That Will Help You Find Your Purpose"
          stars={5}
          imgUrl="https://m.media-amazon.com/images/P/0241958229.01._SCLZZZZZZZ_SX500_.jpg"
        />
      </div>

      <div className="item__card__one">
        <ItemCard
          title="Adcom Luminosa - Wireless Bluetooth Over-Ear Stereo Headphone (Black)"
          stars={3}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41lLjpNrn9L._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <ItemCard
          title="iQOO 7 5G (8GB RAM, 3GB Extended RAM, 128GB Storage, Android 11, Funtouch OS 11.1) - Storm Black"
          stars={4}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41VhxuplejL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <ItemCard
          title="Inalsa Air Fryer Fully Adjustable Temperature Control, (Black/Silver)"
          stars={4}
          imgUrl="https://images-eu.ssl-images-amazon.com/images/I/41Q02Oik26L._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;

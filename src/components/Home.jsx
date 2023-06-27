import React from "react";
import Rocket from './Rocket';
import StarBackground from "./StarBackground";

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome!</h1>
      <p>My name is David Gamble. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, velit est deleniti iusto eligendi quia ab! Voluptates ut nulla deleniti vero natus? Dignissimos quibusdam dicta eaque est ducimus odio repellat!  Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quidem at tempore magni omnis reprehenderit debitis fugit, possimus sequi atque modi eos officiis tenetur ut impedit soluta sed quibusdam error!</p>
      <Rocket />
      <StarBackground />
    </div>
  );
}

export default Home;
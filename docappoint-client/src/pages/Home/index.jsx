import {
  Helmet,
} from "react-helmet-async";

import Hero from "../../components/Hero/Hero";

import TopDoctors from "../../components/TopDoctors/TopDoctors";

import Services from "../../components/Services/Services";

import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";

const Home = () => {

  return (

    <div>

      <Helmet>

        <title>
          Home | DocAppoint
        </title>

        <meta
          name="description"
          content="Book appointments with trusted doctors easily using DocAppoint."
        />

      </Helmet>

      <Hero />

      <TopDoctors />

      <Services />

      <WhyChooseUs />

    </div>

  );

};

export default Home;
import Hero from "./Hero/Hero"
import WebPlans from "./WebPlans/WebPlans";

const HomePage = () => {
  console.log("Home Page Is Rendering")
  return (
    <div>
      <Hero/>
      <WebPlans/>
    </div>
  )
}

export default HomePage

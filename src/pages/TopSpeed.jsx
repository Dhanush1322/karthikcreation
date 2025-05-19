import TopSpeedSecutity from "../components/Topspeed/TopSpeedSecutity"
import TopSpeedBanner from "../components/Topspeed/TopSpeedBanner"
import SecurityServices from "../components/Topspeed/SecurityServices"
import ServiceEquipments from "../components/Topspeed/ServiceEquipments"
import EventInfrastuture from "../components/Topspeed/EventInfrastuture"
function TopSpeed() {
  return (
    <div>
    <TopSpeedBanner/>
      <TopSpeedSecutity/>
       <SecurityServices/>
        <ServiceEquipments/>
         <EventInfrastuture/>
    </div>
  )
}

export default TopSpeed
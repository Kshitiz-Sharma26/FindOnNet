import React from 'react'
import UpcomingProduct from '../components/upcomingProduct';
import Navbar from '../components/Navbar';
function UpcomingProducts() {
  return (
    <div>
        <Navbar/>

      <h1 style={{marginTop:"7%",textAlign:"center"}}>Upcoming Products</h1>
      <UpcomingProduct
        name="HeadPhones new generation"
        description="Description of Product 1"
        launchDate={new Date('2023-08-01T00:00:00')}
        imgsrc = "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTaJtvX3HWNAqZrE5mWmEBLYukYW_mV_asgxWIrf7GEYSSO6kXcmat20dpOTejMvetGtSoEl0ndeihYsa9i4vw8xrSSNka8vw1lSFd1wup4ORJHPVVNpDK81puC0arL8wCdlo8&usqp=CAc"
      />
      <UpcomingProduct
        name="Iphone13"
        description="Description of Product 2"
        launchDate={new Date('2023-09-15T12:00:00')}
        imgsrc="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRhzM_XByTzFlQ66Y2gSGMHo-x03_tejX2GPRBs1UgAXb_npIbh1ZJ-ZNc7vkrfepvkZmVFvoWr1DeeIUTzBu_DJbIn0JRhsgbOt4jUtexnS0-Az1Gpi1LCHus"
      />
      {/* Add more products */}
    </div>
  )
}

export default UpcomingProducts;

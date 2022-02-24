import React from 'react'

const Frontpage = () => {
  return (
    <div className="dog-card-container">
      <div className="dog-card">
        <h1>B RKMATES</h1>
        <img className="dog-card-nav" src='/images/nav-icon.png'/>
        <img className="dog-card-img" src='/images/Caesar.jpg'/>
        {/* <b>//Name :// </b> */}
        <h2> Caesar </h2>

        {/* <b>Age : </b> */}
        <p> 5 months </p>

        {/* <b>Breed : </b> */}
        <p> American Pocket Bully </p>

        {/* <b>Description: </b> */}
        <p> Little lover boy!!</p>

        <div className="clear"></div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Frontpage
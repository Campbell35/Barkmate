import React from 'react'

const Frontpage = () => {
  return (
    <>
      <div className="dog-card-container">
        <div className="dog-card">
          <h1>BRKMATES</h1>
          <img className="dog-card-nav" src='/images/nav-icon.png'/>
          <img className="dog-card-img" src='/images/Caesar.jpg'/>
          {/* <b>//Name :// </b> */}
          <h1> Caesar </h1>

          {/* <b>Age : </b> */}
          <p> 5 months </p>

          {/* <b>Breed : </b> */}
          <p> American Pocket Bully </p>

          {/* <b>Description: </b> */}
          <p> Little lover boy!!</p>

          <p> VIEW PROFILE... </p>

          <div className="clear"></div>
          <img className="leftArrow" src='/images/leftArrow.png'/>

          <img className="rightArrow" src='/images/rightArrow.png'/>

        </div>
      </div>

      <div>
        <div className="leftSideCard">
          <button>
            <h3>SEND TREATS</h3>
          </button>
        </div>

        <div className="rightSideCard">
          <button>
            <h3>SEND PATS</h3>
          </button>
        </div>
      </div>
    </>
  )
}

export default Frontpage

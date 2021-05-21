import React from 'react'

const MainCover = () => {
  return (
    <div className="mainCover">
        <div className="container center-rt">
          <div className="mainCoverTxtWrap flex flex-col ">
           
              <div className="mainTxt flex-1">
                  <div className="mainTxtHeader">
                    Build better
                  </div>
                  <div className="mainTxtDesc">
                    Your customers won’t settle and neither should you. With Pluralsight, technology teams know more and work better together. Develop the skills you need for your top priorities. Improve workflows with actionable data. Build better—every time.
                  </div>
              </div>
              <div className="mainBtn flex-1">
                <div className="flex flex-row">
                    <button className="btn btn-bk text-sm uppercase mr-5">view plans</button>
                    <button className="btn btn-line text-sm uppercase">try for free</button>
                </div>
              </div>
            
          </div>
        </div>
    </div>
  )
}

export default MainCover

import React from 'react'
import { Link } from 'react-router-dom'

const Growth = () => {

  const imgLink = 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_1609496607/parsys/columns/column-parsys-1/animation_wrapper/parsys/image/image-res.img.adc8053f-2636-4dcb-b372-53dea5b04b98.png'
  
  return (
    <div className="growth-cover bg-bl">
        <div className="container-lg">
            <div className="flex flex-row">
                <div className="flex-none w-4/6 text-wh h-full">
                  <div className="inline-block relative">
                    <div className="py-10">
                      <div className="">
                          <img className="h-32" src={imgLink} alt="img"/>
                      </div>
                      <div className="px-10">
                        <div className="text-wh text-5xl font-bold">
                        See our growth, progress and evolution
                        </div>
                        <div className="py-6 text-wh">
                        At Pluralsight, we see first-hand every day how technology makes the impossible, possible. It’s why Pluralsight One exists: To advance our mission of democratizing technology skills, challenging assumptions about solutions and create significant, lasting social impact.
                        </div>
                        <div className="flex flex-row">
                            <Link to="/" className="btn btn-df uppercase mr-5 inline-block">
                                View our 2020 impact book
                            </Link>
                            <Link to="/" className="btn btn-line uppercase inline-block">
                                for nonprofits
                            </Link>
                        </div>
                      </div>
                    </div>  
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Growth

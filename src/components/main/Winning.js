import React from 'react'
import { Link } from 'react-router-dom'

const Winning = () => {

  const imgLink = 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/targeted_section/targeted-parsys-default/generic_block_143764/parsys/columns/column-parsys-2/generic_block/parsys/column_control/column-parsys-1/image/image-res.img.7cab6eaa-5afb-40e4-813c-f180da1a4327.png'

  return (
    <div className="bg-bl">
        <div className="winning-cover">
            <div className="flex flex-row center-rt ">
                <div className="flex-none w-2/5 text-wh h-full bg-gd-t">
                  <div className="inline-block relative">
                    <div className="px-16 py-10">
                      <div className="overflow-hidden">
                          <img className="h-4" src={imgLink} alt="img"/>
                      </div>
                      <div className="pt-6 text-wh text-2xl font-bold">
                      Winning the talent war with a scalable tech skills platform
                      </div>
                      <div className="py-6 text-wh">
                      Evolving a 20-year-old company, increasing innovation and accelerating time to delivery requires fresh skills. See how VMware’s globally dispersed teams use Pluralsight to leverage the latest developments in technology as they find new ways to serve customers.
                      </div>
                      <div>
                      <Link to="/" className="btn btn-bk inline-block relative">
                          HOW THEY'RE SKILLING UP
                      </Link>
                      </div>
                    </div>  
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Winning

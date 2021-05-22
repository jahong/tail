import React from 'react'
import { Link } from 'react-router-dom'

const Insights = () => {

  return (
    <div className="section-pad bg-bl">
        <div className="container-lg px-10">
            <div className="flex flex-row">
                <div className="flex-none w-4/6 text-wh h-full">
                  <div className="text-wh text-5xl font-bold">
                  Insights that give you an edge
                  </div>
                </div>
                <div className="flex-none w-2/6 text-right h-full">
                    <Link to="/" className="btn btn-df uppercase mr-5 inline-block">
                        View our 2020 impact book
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Insights

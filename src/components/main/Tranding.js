import React from 'react'

const pathList = [
  {title: 'test'},
  {title: 'test'},
  {title: 'test'},
  {title: 'test'},
]

const MainCover = () => {
  return (
    <div>
        <div className="container-lg">
          <div className="flex flex-row">
            <div className="flex-1">
              <div>
                  <ul className="flex flex-wrap flex-row">
                    {pathList.map( (item,i)=> {
                        return (
                            <li className="w-2/4" key={i}>
                                <div className="box-path text-wh">{item.title}</div>
                            </li>
                        )
                    })}
                  </ul>
              </div>
            </div>
            <div className="flex-1">  
                TRENDING TECHNOLOGIES
                Popular topics
                to learn now
                Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what’s topping the charts and get recommended courses to skill up. 

                View the index 
            </div>
          </div>
        </div>
    </div>
  )
}

export default MainCover

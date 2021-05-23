import React from 'react'
import { Link } from 'react-router-dom'

const pathList = [
  {title: 'JavaScript', course: 11, uri: 'https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png'},
  {title: 'Angular', course: 14,  uri: 'https://pluralsight.imgix.net/paths/path-icons/angular-14a0f6532f.png'},
  {title: 'Core Python', course: 12,  uri: 'https://pluralsight.imgix.net/paths/python-7be70baaac.png'},
  {title: 'C#', course: 19,  uri: 'https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png?'},
]

const Tranding = () => {
  return (
    <div className="section-pad bg-bl">
        <div className="container-lg px-5">
          <div className="flex flex-row">
            <div className="flex-none w-7/12">
              <div>
                  <ul className="flex flex-wrap flex-row">
                    {pathList.map( (item,i)=> {
                        return (
                            <li className="w-2/4" key={i}>
                              <Link to="/">
                                <div className="box-path-wrap text-wh">
                                  <div className="box-path relative">
                                    <img className="absolute w-24 right-0 top-0" src={item.uri} alt="img"/>
                                    <div className="text-prm uppercase">path</div>
                                    <div className="pt-4 text-2xl">
                                        {item.title}
                                    </div>
                                    <div className="text-wh">
                                        {item.course} Courses
                                    </div>
                                    <div className="pt-4 font-bold">
                                        Take a look
                                    </div>
                                  </div>  
                                </div>
                              </Link>
                            </li>
                        )
                    })}
                  </ul>
              </div>
            </div>
            <div className="flex-none w-5/12"> 
              <div className="py-10 pl-5">
                  <div className="text-prm">TRENDING TECHNOLOGIES</div>
                  <div className="text-wh py-5 text-4xl font-bold">
                    Popular topics<br/>
                    to learn now<br/>
                  </div>
                  <div className="text-wh">
                    Not sure what technologies to focus on? The Technology Index ranks 850+ technologies by their relative popularity. See what’s topping the charts and get recommended courses to skill up. 
                  </div>
                  <div className="text-wh">
                    <Link className="py-5 inline-block" to="/">
                      View the index 
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Tranding

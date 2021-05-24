import React from 'react'
import { Link } from 'react-router-dom'

const pathList = [
  {
    sub: 'labs',
    width: 'full',
    title: 'Create better cloud outcomes with hands-on experience', 
    desc: 'Your teams need the right skills and a place to practice to ensure they’re ready to deliver on your cloud objectives. Labs enable learners to get hands-on practice in a provisioned cloud environment in AWS, Azure and Google Cloud (Google Cloud powered by Quiklabs).',
    titleUri: 'https://www.pluralsight.com/content/dam/pluralsight2/product/v2/logos/logo-skills.png',
    imgUri: 'https://www.pluralsight.com/content/dam/pluralsight2/homepage/Cloud-labs-image2x.png'
  },
  {
    titleUri: 'https://www.pluralsight.com/content/dam/pluralsight2/homepage/certification-prep.png',
    title: 'Empower your teams to grow their skills and their careers', 
    desc: 'Prepare your team for certification exams with our expert authored content and practice exams.',
    imgUri: ''
  },
  {
    titleUri: 'https://www.pluralsight.com/content/dam/pluralsight2/homepage/delivery-module.png',
    title: 'Make lasting workflow improvements with insights from your Jira data', 
    desc: 'Go beyond Jira data and get visibility into what’s happening within your user stories, tasks and bugs. Flow’s delivery module helps you better understand how your team is working and can make lasting improvements to your workflow.',
    imgUri: ''
  },
  {
    titleUri: 'https://www.pluralsight.com/content/dam/pluralsight2/homepage/sandboxes.png',
    title: 'Utilize a space for unrestricted exploration', 
    desc: "Sandboxes gives your team a safe environment to practice what they're learning from expert-authored courses.",
    imgUri: ''
  },
]

const Features = () => {
  return (
    <div className="section-pad bg-darkDp">
        <div className="container-lg px-5">
            <div>
                <div className="font-semibold text-prm">
                  SEE WHAT'S NEW
                </div>
                <div className="setion-title pt-3 text-wh">
                    Our latest features
                </div>
            </div>
            <div className="pt-5">
                <ul className="flex flex-wrap flex-row">
                  {pathList.map( (item,i)=> {
                      return (
                          <li className={(item.width === 'full' ? 'flex-none w-full' : 'flex-none w-1/3')} key={i}>
                            <div className="box-path-wrap text-wh h-full">
                              <Link to="/" className="box-path rounded-3xl m-0 inline-block h-full bg-darkLt relative">
                                {item.imgUri ? 
                                  <div className="flex flex-row relative">
                                    <div className="flex-1">
                                      <div className="m-10 relative">
                                          <div className="text-lg text-wh inline-block">
                                              <div className="flex flex-row">
                                                <img className="h-5" src={item.titleUri} alt="img"/>
                                                <div className="ml-5">
                                                {item.sub}
                                                </div>
                                              </div>
                                          </div>
                                          <div className="pt-4 text-3xl font-bold">
                                              {item.title}
                                          </div>
                                          <div className="py-4 text-wh">
                                              {item.desc}
                                          </div>
                                          <div className="font-bold">
                                              Learn more
                                          </div>
                                      </div>
                                    </div>
                                    <div className="flex-1">
                                        <img className="w-full right-0 top-0" src={item.imgUri} alt="img"/>
                                    </div>
                                  </div>  
                                :
                                <div className="m-10 relative ">
                                  <div className="text-lg text-wh inline-block">
                                      <img className="h-5" src={item.titleUri} alt="img"/>
                                      {item.sub}
                                  </div>
                                  <div className="pt-4 text-3xl font-bold">
                                      {item.title}
                                  </div>
                                  <div className="py-4 text-wh">
                                      {item.desc}
                                  </div>
                                  <div className="font-bold">
                                      Learn more
                                  </div>
                                </div> 
                                }
                              </Link>
                            </div>
                          </li>
                      )
                  })}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Features

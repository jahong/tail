import React from 'react'
import { Link } from 'react-router-dom'

const pathList = [
  {
    titleUri: 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_383891725/parsys/image/image-res.img.c841623a-6250-4b9d-beed-6573ca4af861.jpg',
    title: 'GUIDE: NAVIGATING BETWEEN WATERFALL AND AGILE', 
    desc: 'Make the move without getting stuck in the wagile trap.',
  },
  {
    titleUri: 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block/parsys/image/image-res.img.5f30f98e-a449-4314-a79c-d289a9e68217.jpg',
    title: 'WHAT IS PLURALSIGHT SKILLS?', 
    desc: 'Discover the fastest, most effective path to developing technology skills.',
  },
  {
    titleUri: 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1875049544/parsys/image/image-res.img.f1066e41-e92f-4776-8b97-bb8d6a51adc0.jpg',
    title: 'CREATE YOUR FREE ACCOUNT', 
    desc: 'Build new tech skills on us with free access to 50+ expert-led courses, assessments and more.',
  },
  {
    titleUri: 'https://www.pluralsight.com/content/pluralsight/en/jcr:content/main/generic_block_135160/parsys/columns/column-parsys-1/flex_block/parsys/flex_open_block_copy_1041088069/parsys/image/image-res.img.2fa6197c-13d1-47c8-9a6c-c938d5497b75.jpg',
    title: 'WHAT IS PLURALSIGHT FLOW?', 
    desc: "See how our engineering analytics platform gives you everything you need to build a more efficient workflow.",
  },
]

const Discover = () => {
  return (
    <div className="section-pad bg-bl">
        <div className="container-lg px-5">
            <div>
                <div className="font-semibold text-prm">
                KEEP UP TO DATE
                </div>
                <div className="setion-title pt-3 text-wh">
                Discover more about Pluralsight
                </div>
            </div>
            <div className="pt-5">
                <ul className="flex flex-wrap flex-row">
                  {pathList.map( (item,i)=> {
                      return (
                          <li className='flex-none w-1/4' key={i}>
                            <div className="box-path-wrap text-wh h-full">
                              <Link to="/" className="inline-block relative">
                                <div className="">
                                  <div className="rounded-2xl overflow-hidden">
                                      <img className="" src={item.titleUri}/>
                                  </div>
                                  <div className="pt-4 text-yellow text-md font-bold">
                                      {item.title}
                                  </div>
                                  <div className="py-4 text-wh">
                                      {item.desc}
                                  </div>
                                </div>  
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

export default Discover

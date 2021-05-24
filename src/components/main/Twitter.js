import React from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TwitterList = [
  {
      id: '1362843439730196480', 
      userImg: 'https://pbs.twimg.com/profile_images/844846692956459009/moM6ACpu_bigger.jpg',
      name: 'Martin Therkelsen', link: '@bill_ver3', date: '2월 17일', 
      desc: 'Yesterday I passed the AZ-104 exam. <a class="text-prm" href="/">@pluralsight</a> courses are great to help prepare for these exams. <a class="text-prm" href="/">#citrixctp</a> <a class="text-prm" href="/">#azure</a>'
  },
  {
      id: '1361892058147921925', 
      userImg: 'https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg',
      name: 'William Masci', link: '@bill_ver3', date: '2월 17일', 
      desc: "Just passed the #Cisco DEVASC 200-901 exam! Tough exam, but it was a great experience. I'm excited to be part of the #DevNet Class of 2020! Also big thanks to <a class='text-prm' href='/'>@nickrusso42518</a>  for his amazing study plan and <a class='text-prm' href='/'>@pluralsight</a> course. I highly recommend it if you're studying for DEVASC"
  },
  { 
      id: '1355665037667545089', 
      userImg: 'https://pbs.twimg.com/profile_images/1289580947009155072/uegFC50F_bigger.jpg',
      name: 'Judy', link: '@bill_ver3', date: '2월 17일', 
      desc: 'The best thing that happened to me in 2020 was <a class="text-prm" href="/">#GADS2020</a> which introduced me to @pluralsight . My interest in IT and programming peaked when i joined the program and now i believe  this is the career path i want to take.'
  },
  {
      id: '1362843439730196480', 
      userImg: 'https://pbs.twimg.com/profile_images/844846692956459009/moM6ACpu_bigger.jpg',
      name: 'Martin Therkelsen', link: '@bill_ver3', date: '2월 17일', 
      desc: 'Yesterday I passed the AZ-104 exam. <a class="text-prm" href="/">@pluralsight</a> courses are great to help prepare for these exams. <a class="text-prm" href="/">#citrixctp</a> <a class="text-prm" href="/">#azure</a>'
  },
]

const Twitter = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
    ]
  };

  return (
    <div className="section-pad bg-bl">
      <div>
        <div className="text-center">
            <div className="font-semibold text-prm">
            FOLLOW US
            </div>
            <div className="setion-title pt-3 text-wh">
            Share your skills
            </div>
        </div>
        <div className="pt-10 px-16">
            <Slider {...settings}>
              {TwitterList.map( (item,i) =>{
                return (
                  <div key={i} className="box-path-wrap h-full">
                      <div className="box-path rounded-lg inline-block h-full relative slide-box">
                        <div className="relative">
                            <div className="absolute">
                              <Link to="/" className="">
                                <img className="w-10" src={item.userImg} alt="img"/>
                              </Link>
                            </div>
                            <div className="ml-12">
                              <Link to="/" >
                                <div className="text-sm font-bold hover:text-blue">{item.name}</div>
                                <div className="text-sm">{item.link}</div>
                              </Link>
                            </div>
                        </div>
                        <div className="py-3">
                            <div dangerouslySetInnerHTML={ { __html: item.desc } }></div>
                        </div>
                        <div className="absolute bottom-2">
                          <div className="flex flex-row">
                              <Link className="slide-btn bg-con-comment" to={'https://twitter.com/intent/tweet?in_reply_to=' + item.id}>
                                  <div className="hidden">commentt</div>
                              </Link>
                              <Link className="slide-btn bg-con-re" to={'https://twitter.com/intent/retweet?tweet_id=' + item.id}>
                                  <div className="hidden">retwit</div>
                              </Link>
                              <Link className="slide-btn bg-con-like" to={'https://twitter.com/intent/favorite?tweet_id=' + item.id}>
                                  <div className="hidden">like</div>
                              </Link>
                          </div>
                        </div>
                      </div>
                  </div>
                )
              })}
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Twitter

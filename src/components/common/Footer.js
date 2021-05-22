import React from 'react'
import { Link } from 'react-router-dom'

const footerList = [
  {title: 'SOLUTIONS', subLink: [
    {title: 'Pluralsight Skills'},
    {title: 'Pluralsight Flow'},
    {title: 'Government'},
    {title: 'Gift of Pluralsight'},
    {title: 'View Pricing'},
    {title: 'Contact Sales'},
    {title: 'Skill up for free'},
  ]},
  {title: 'PLATFORM', subLink: [
    {title: 'Browse library'},
    {title: 'Role IQ'},
    {title: 'Skill IQ'},
    {title: 'Authors'},
    {title: 'Professional Services'},
    {title: 'Technology Index'},
  ]},
  {title: 'COMPANY', subLink: [
    {title: 'About us'},
    {title: 'Customer stories'},
    {title: 'Careers'},
    {title: 'Blog'},
    {title: 'Newsroom'},
    {title: 'Resource center'},
    {title: 'Guides'},
  ]},
  {title: 'RESOURCES', subLink: [
    {title: 'Download Pluralsight'},
    {title: 'Events'},
    {title: 'Teach'},
    {title: 'Partners'},
    {title: 'Affiliate program'},
    {title: 'PluralsightOne.org'},
    {title: 'Subscribe'},
  ]},
  {title: 'SUPPORT', subLink: [
    {title: 'Contact'},
    {title: 'Help center'},
    {title: 'IP whitelist'},
    {title: 'Sitemap'},
  ]},
]

const footerSocialList = [
  {title: 'Terms of Use'},
  {title: 'Privacy Policy'},
  {title: 'Like on Facebook', con: true, conUrl: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/desktop/Facebook_Icon.svg'},
  {title: 'Follow on Instagram', con: true, conUrl: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/desktop/Instagram_Icon.svg'},
  {title: 'Follow on Twitter', con: true, conUrl: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/desktop/Twitter_Icon.svg'},
  {title: 'Connect on LinkedIn', con: true, conUrl: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/desktop/LinkedIn_Icon.svg'},
  {title: 'Connect on LinkedIn', con: true, conUrl: 'https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/icons/desktop/YouTube_Icon.svg'},
]

const Footer = () => {

  return (
    <div className="bg-darkLt">
        <div className="py-20 container-lg px-10">
          <div className="flex flex-wrap justify-around">
              {footerList.map( (item,i) => {
                return (
                    <div key={i} className="">
                        <div className="text-wh mb-9">
                            {item.title}
                        </div>
                        {item.subLink ? 
                        <div>
                        {item.subLink.map( (subItem, i) =>{
                          return (
                            <div key={i}>
                              <Link to="/" className="footer-link text-sm py-2 inline-block">
                                {subItem.title}
                              </Link>
                            </div>
                          )
                        })}
                        </div>
                        :null}
                    </div>
                )
              })}
          </div>
        </div>

        <div className="flex flex-wrap justify-around px-10 py-10 border-t border-dkGray">
            <div className="text-aGray text-sm">
            Copyright © 2004 - 2021 Pluralsight LLC. All rights reserved
            </div>
            <div className="text-wh flex flex-row">
                {footerSocialList.map( (item,i) => {
                  return (
                    <Link to="/" key={i} className="justify-items-center">
                        {item.con ? 
                        <div className="px-4">
                          <img className="w-4 inline-block" src={item.conUrl}/>
                        </div>
                        :
                        <div className="text-sm text-aGray px-5">
                          {item.title}
                        </div>
                        }
                    </Link>
                  )
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer

import React, { Component } from 'react';
import {Avatar, Divider} from 'antd'
import '../public/style/components/author.css'
const Author = ()=>{
  return (
    <div className="author-div comm-box"> 
      <div><Avatar size={100} src='https://thirdqq.qlogo.cn/g?b=sdk&k=DMNx8d5libvCAropfx325Yg&s=40&t=1588516589'/></div>
      <div className="author-introduction">
        前端攻城狮，大三在读
      </div>
      <Divider>社交账号</Divider>
      <a href="https://github.com/1549664680" > 
      <Avatar size={28} icon="github" className="account git" />
      </a>
      <a href="" className="qqa"> 
      <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/52d7f5e4c688d0b9458b84124056288ad3cf768807fe515dea0fcfb2c84cbbb15d90dd268059902d499fa47ec88f9d07?pictype=scale&from=30113&version=3.3.3.3&uin=1549664680&fname=qq_pic_merged_1591360789956.jpg&size=750"/>
      <Avatar size={28} icon="qq" className="account qq"/>
      </a>
      <a href="" className="wechata"> 
      <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/6546e375a95224c8b9e4c07ead3de3d54f89e87bdb84a1050475498138bfbe225673b4acba916114e3feef96f83a2d75?pictype=scale&from=30113&version=3.3.3.3&uin=1549664680&fname=qq_pic_merged_1591360973423.jpg&size=750"/>
      <Avatar size={28} icon="wechat" className="account wechat"/>
      </a>
      <Divider>Avengers</Divider>
    </div>
  )
}

export default Author
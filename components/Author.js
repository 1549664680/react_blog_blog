import { Avatar, Divider, Tooltip, Tag } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/c8cbcee5d3d196134d3a9c73b3c8d3b8778369de6715b210a4ffd6531a986fe1f4eb1aee05db5810ade667f4dcc6f48e?pictype=scale&from=30013&version=3.3.3.3&uin=1549664680&fname=psc.webp&size=750" />
      </div>
      <div className="author-introduction">
        <div>大三在校生</div>
        <div className="author-tag">
          <Tag color="green">热爱开源</Tag>
          <Tag color="blue">底层学习中</Tag>
          <Tag color="geekblue">算法爱好者</Tag>
        </div>
        <Divider>社交账号</Divider>
        <a href="https://github.com/1549664680" >
        <Avatar size={28} icon={<GithubOutlined />} className="account git " />
        </a>
        <a href="#" className="qqa">
          <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/52d7f5e4c688d0b9458b84124056288ad3cf768807fe515dea0fcfb2c84cbbb15d90dd268059902d499fa47ec88f9d07?pictype=scale&from=30113&version=3.3.3.3&uin=1549664680&fname=qq_pic_merged_1591360789956.jpg&size=750" />
          <Avatar size={28} icon={<QqOutlined />} className="account qq " />
        </a>
        <a href="#" className="wechata">
          <img src="https://picabstract-preview-ftn.weiyun.com/ftn_pic_abs_v3/6546e375a95224c8b9e4c07ead3de3d54f89e87bdb84a1050475498138bfbe225673b4acba916114e3feef96f83a2d75?pictype=scale&from=30113&version=3.3.3.3&uin=1549664680&fname=qq_pic_merged_1591360973423.jpg&size=750" />
          <Avatar size={28} icon={<WechatOutlined />} className="account wechat" />
        </a>
        <Divider>Avengers</Divider>
      </div>
    </div>
  )
}

export default Author
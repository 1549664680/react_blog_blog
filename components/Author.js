import { Avatar, Divider, Tooltip, Tag } from 'antd'
import { GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons';
import '../public/style/components/author.css'
const Author = () => {
  return (
    <div className="author-div comm-box">
      <div>
        <Avatar size={100} src="http://a1.qpic.cn/psc?/V111DTaP0fnaJ7/IuPP.iXwoDzL23w4nRtQcmF23OBoap9mMPAX4jLKU7d1.8kDlXImeVAl2cT0NW1XsRKhX6D2QvHnwGprxGry1w!!/c&ek=1&kp=1&pt=0&bo=6APoAwAAAAARFyA!&tl=3&vuin=1549664680&tm=1591704000&sce=60-2-2&rf=0-0" />
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
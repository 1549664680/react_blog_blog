import '../public/style/components/footer.css'
import moment from 'moment'
import { useEffect, useState } from 'react'
const Footer = () => {
  let startTime = new Date("2020/05/05 00:00:00")
  let [time, setTime] = useState({})
  // let a = moment.duration(new Date() - startTime)
  // console.log(a._data)
  useEffect(() => {
    let myTime = setInterval(function() {
      setTime(moment.duration(new Date() - startTime)._data)
    }, 1000)
    return () => {
      clearInterval(myTime)
    }
  })
  // console.log(time)
  return (
  <div className="footer-div">
    <div>系统是由React+Node+Ant Design</div>
    <div>ljrblog.com</div>
    <div>
      <span>本站已在风雨中运行：</span>
      <span>{time.years} </span>年&nbsp;
      <span>{time.months} </span>月&nbsp;
      <span>{time.days} </span>天&nbsp;
      <span>{time.hours} </span>小时&nbsp;
      <span>{time.minutes} </span>分&nbsp;
      <span>{time.seconds} </span>秒&nbsp;
    </div>
    <a className="footer-a" href="http://www.beian.miit.gov.cn/">
      <span className="footer-span">赣ICP备20003575号</span>
    </a>
    <br/>
    <a className="footer-a" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=36031302000122">
      <span className="footer-span">赣公网安备 36031302000122号</span>
    </a>
    <script async src="//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>
  </div>
  )
}

export default Footer
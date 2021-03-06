import React, { Component } from 'react'
import Banner from '../Components/Banner';
import Temple from '../assets/images/temple.jpg';
import CardContents from '../Components/CardContents';

class TempleList extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let Data = [
            {
                id: "1",
                title: "วัดเวฬุราชิณ",
                subtitle: "ประเภทวัด   พระอารามหลวง นิกาย มหานิกาย",
                detail:"เจ้าพระยาพลเทพ (เอี่ยม ชูโต) เป็นผู้สร้างในสมัยรัตนโกสินทร์ ตอนปลายรัชกาลที่ 3โดยนำเงิน ค่าภาษีไม้ไผ่สีสุกที่ท่านเป็นเจ้าภาษีรับสัมปทานผูกขาดการเก็บอยู่มาใช้เป็นค่าสร้างวัด เมื่อแรกสร้างเรียกชื่อวัดตามสภาพภูมิศาสตร์ที่ตั้งวัดที่เป็นคุ้งน้ำใหญ่ในคลองบางกอกใหญ่ว่า “วัดใหม่ท้องคุ้ง” สร้างเสร็จบริบูรณ์ในต้นรัชกาลที่ 4 เจ้าพระยาพลเทพจึงน้อมเกล้าฯ ถวายเป็นพระอารามหลวงพ่อท่านคล้ายรับนิมนต์ไปในงานสร้างวิหารคล้ายนิมิตร ณ วัดเวฬุราชิณ ธนบุรี โดยวิหารคล้ายนิมิตรปัจจุบันได้ถูกรื้อไปแล้ว และได้สร้างวิหารพระนอนขึ้นมาแทน ชาวบ้านละแวกวัดเล่าว่าตอนนั้นเมื่อพ่อท่านคล้ายมาถึงวัดเวฬุราชิณ ได้มีคนมาทำบุญที่วัดเยอะมาก ทุกคนต่างอยากได้พระเครื่องและวัตถุมงคลจากพ่อท่าน แย่งกันจนประตูพัง ใครทำบุญกี่บาทก็ตามแต่ พ่อท่านก็จะหยิบพระเครื่องในย่ามให้เป็นจำนวนมาก 1 กำมือบ้าง 2 กำมือก็มี ในที่นี้ได้มีการสร้างผ้ายันต์และเหรียญหลวงพ่อบุศย์ อดีตเจ้าอาวาสวัดเวฬุราชิณอีกด้วย",
                img: [
                    "https://taladphlumarket.files.wordpress.com/2017/03/dsc0374.jpg?w=768&h=512",
                    "https://www.wreathnawat.com/wp-content/uploads/2018/temple/Wnw_WatWerurachin_20.JPG",
                ],
            },
            {
                id: 2,
                title: "วัดอินทาราม",
                subtitle: "ประเภทวัด พระอารามหลวงนิกายมหานิกาย",
                detail:"วัดอินทาราม  เป็นวัดสำคัญของสมัยกรุงธนบุรีเป็นราชธานี  เป็นวัดอนุสรณ์สันติสถานที่สมเด็จพระเจ้ากรุงธนบุรี  มหาวีระกษัตริย์ของไทยเราทรงประกอบพระราชกุศล  มีโบราณวัตถุที่เกี่ยวเนื่องกับพระองค์เป็นชีวิตจิตใจหลายอย่าง  ที่นับว่าสำคัญน่าชมและศึกษา คือพระแท่นบรรทมไสยาสน์  เป็นพระราชอาสน์ที่พระองค์ทรงประทับแรมทรงศีลแลทรงเจริญกรรมฐาน ประวัติที่น่าศึกษาของวัดนี้คือ  เป็นที่ประดิษฐาน (ฝัง) พระบรมศพของสมเด็จพระเจ้ากรุงธนบุรีเมื่อพุทธศักราช ๒๓๒๗  และบรมศพพระอัครมเหสีของพระองค์  ก็ได้ถวายพระเพลิงและบรรจุพระบรมอัฐิไว้ ณ วัดนี้ทั้งสองพระองค์วัดอินทารามขณะนี้เป็นอารามหลวงชั้นตรี ชนิดวรวิหาร  ตั้งอยู่ที่ถนนเทอดไท  ปากคลองบางยี่เรือ  ริมคลองบางกอกใหญ่ (คลองบางหลวง) แขวงบางยี่เรือ  เขตธนบุรี  กรุงเทพมหานคร  (แต่เดิมหน้าวัดอยู่ทางคลองบางกอกใหญ่  แต่เมื่อตัดถนนแล้ว  จึงใช้ทางหลวงเป็นหน้าวัดด้วย)  เนื้อที่ของวัดนี้เดิมเป็นแปลงเดียวตลอดกันทั้งวัด  ต่อมาทางรถไฟสายมหาชัยได้ตัดทางเข้ามาทางหลังวัด  กินเนื้อที่วัดเข้ามาเขตตะวันออกจดคลองบางยี่เรือ (คลองสำเหร่)  และเทศบาลนครธนบุรีได้ตัดทางรถยนต์เข้ามาทางด้านตะวันออก  เฉียดกำแพงรอบนอกพระอุโบสถจดถึงลำคลองบางยี่เรือ  เพราะเหตุนี้วัดจึงแยกเป็นสองแปลง  เนื้อที่ตั้งวัดประมาณ ๑๕ ไร่ ๒ งาน  เป็นที่ธรณีสงฆ์สำหรับจัดหาผลประโยชน์บำรุงวัดประมาณ ๙ ไร่ ๒ งาน ๙๐ ตารางวา  รวมเนื้อที่ทั้งหมดประมาณ ๒๕ ไร่ ",
                img: [
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_%2824%29.jpg/450px-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%B4%E0%B8%99%E0%B8%97%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%A1%E0%B8%A7%E0%B8%A3%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3_%E0%B9%80%E0%B8%82%E0%B8%95%E0%B8%98%E0%B8%99%E0%B8%9A%E0%B8%B8%E0%B8%A3%E0%B8%B5_%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%99%E0%B8%84%E0%B8%A3_%2824%29.jpg",
                    "https://taladphlumarket.files.wordpress.com/2017/01/dsc0402.jpg",
                ],
            },
            {
                id: 3,
                title: "ราชคฤห์วรวิหาร",
                subtitle: " เป็นพระอารามหลวงชั้นตรี ชนิดวรวิหาร เป็นวัดโบราณสร้างขึ้นตั้งแต่สมัยกรุงศรีอยุธยา",
                detail:"วัดจันทารามวรวิหารเดิมมีชื่อว่า วัดบางยี่เรือกลาง หรือ วัดกลาง เพราะอยู่กลางระหว่างวัด 2 วัด คือวัดบางยี่เรือใน (วัดราชคฤห์ ปัจจุบัน) กับ วัดอินทาราม กล่าวคือ เมืองธนบุรีเดิมในสมัยที่กรุงศรีอยุธยาเป็นราชธานี ตั้งอยู่ที่วัดศาลา 4หน้า (วัดคูหาสวรรค์ ปัจจุบัน) ในคลองบางกอกใหญ่ จากเมืองเก่ามาก็ถึงวัดราชคฤห์ก่อนจึงเรียกวัดราชคฤห์ว่า วัดบางยี่เรือใน เหนือ ส่วนวัดจันทารามอยู่กลางจึงเรียกว่า วัดบางยี่เรือกลาง ถัดมาก็ถึงวัดอินทาราม จึงเรียกว่า วัดบางยี่เรือนอก(ใต้)ในสมัยโบราณนั้นไม่มีการตั้งชื่อวัดเป็นกิจจะลักษณะหรือเป็นทางการเหมือนอย่างในสมัยปัจจุบัน จะเรียกชื่อวัดจากที่ตั้ง ตำบล ที่ตั้งอยู่และถ้าตำบลนั้นมีหลายวัดด้วยกันและอยู่ใกล้กันเป็นลำดับซึ่งอาจกำหนดจากตัวเมืองได้ว่า ใน กลาง  นอก ก็จะเรียกวัดที่อยู่ใกล้ว่า วัดใน วัดถัดไปก็เรียกว่าวัดกลาง และวัดสุดท้ายก็ เรียกว่า วัดนอก ตามแต่ที่จะเข้าใจกันตามยุคสมัยหรือเรียกตามสถานที่วัดจันทาราม เป็นวัดโบราณมีอายุยาวนานกว่า 100 ปี ตามตำนานพระอารามหลวงโดยสังเขป พระนิพนธ์ในสมเด็จพระเจ้าบรมวงศ์เธอ กรมพระยาดำรงราชานุภาพ และพระราชพงศาวดารกรุงรัตนโกสินทร์ ในสมัยรัชกาลที่ 3 ของเจ้าพระยาทิพากรวงศ์ ให้ข้อมูลที่ตรงกันคือ พระยาสุรเสนา (ขุนเณร) เป็นผู้สร้าง และพระบาทสมเด็จพระนั่งเกล้าเจ้าอยู่หัว รัชกาลที่ 3 ทรงปฏิสังขรณ์แล้วได้พระราชทานนามให้ใหม่ว่า วัดจันทาราม แต่วัดนี้จะสร้างเมื่อไรไม่มีหลักฐานที่จะให้ค้นคว้าอ้างอิงได้ในพระอุโบสถวัดจันทารามวรวิหารมีพระพุทธรูปปางห้ามสมุทรทรงเทริดซึ่งประทับอยู่ภายใน ซึ่งกรมศิลปากรขึ้นทะเบียนไว้ เมื่อทางกรมศิลปากรไม่ขัดข้องในการจุบูรณะซ่อมแซม ได้สั่งเจ้าหน้าที่มาตรวจสอบสภาพของพระอุโบสถและได้แจ้งให้ทราบ ภาพจิตรกรรมฝาผนังเป็นศิลปะแบบจีน เครื่องสูงของจีนเขียนด้วยมืออาสาอย่างประณีต จึงได้อนุรักษ์ไว้ทั้งสภาพจิตรกรรมฝาผนังและลายเพดาน แต่ทางวัดขออนุญาตเพิ่มเติมส่วนที่ชำรุดไปโดยจะไม่เขียนภาพทับของเก่า จะหาช่างจากกรมศิลปากรที่เชื่อถือและรับรองให้เขียนภาพได้ จึงได้เขียนภาพจิตรกรรมฝาผนังเพิ่มเติมดังที่ได้ปรากฏอยู่ขณะนี้"
                ,
                img: [
                    "https://taladphlumarket.files.wordpress.com/2017/03/dsc0496.jpg?w=768&h=512",
                    "https://www.bloggang.com/data/a/aumteerama/picture/1519928866.jpg",
                ],
            },
            {
                id: 4,
                title: "วัดนาคปรก",
                subtitle: "ประเภทวัด วัดราษฎร์ นิกาย  มหานิกาย; ชนิด  วัดที่ได้รับพระราชทานวิสุงคามสีมา",
                detail:"วัดนาคปรกตามประวัติเล่าสืบกันว่า เมื่อสมัยอยุธยาตอนปลาย-กรุงรัตนโกสินทร์ตอนต้น (รัชกาลที่ ๓-๔) มีพ่อค้าเรือสำเภาชาวจีน ชื่อ พระบริบูรณ์ธนากร (เจ้าสัวพุก แซ่ตัน) เดินทางมาประกอบการค้าขายที่พระนคร ฝั่งธนบุรี ย่านตลาดพลู เจ้าสัวพุก เป็นผู้มีศรัทธาเลื่อมใสยิ่งในพระพุทธศาสนา มีฐานะดีพอที่จะเกื้อกูลประโยชน์แก่คนอื่น จึงได้คิดริเริ่มก่อสร้างวัดขึ้น เพื่อใช้เป็นสถานที่ประกอบพิธีกรรม กิจกรรม และศาสนกิจทางพระพุทธศาสนา อีกประการหนึ่ง เพื่อเป็นการตอบแทนคุณชาวไทยที่ทำให้การค้าขายของตนเติบโตก้าวหน้า วัดนาคปรกตามประวัติเล่าสืบกันว่า เมื่อสมัยอยุธยาตอนปลาย-กรุงรัตนโกสินทร์ตอนต้น (รัชกาลที่ ๓-๔) มีพ่อค้าเรือสำเภาชาวจีน ชื่อ พระบริบูรณ์ธนากร (เจ้าสัวพุก แซ่ตัน) เดินทางมาประกอบการค้าขายที่พระนคร ฝั่งธนบุรี ย่านตลาดพลู เจ้าสัวพุก เป็นผู้มีศรัทธาเลื่อมใสยิ่งในพระพุทธศาสนา มีฐานะดีพอที่จะเกื้อกูลประโยชน์แก่คนอื่น จึงได้คิดริเริ่มก่อสร้างวัดขึ้น เพื่อใช้เป็นสถานที่ประกอบพิธีกรรม กิจกรรม และศาสนกิจทางพระพุทธศาสนา อีกประการหนึ่ง เพื่อเป็นการตอบแทนคุณชาวไทยที่ทำให้การค้าขายของตนเติบโตก้าวหน้า",
                img: [
                    "https://watportal.com/th/file/get/file/201812249faf1072369354260c715e2804030251165108.jpg",
                    "https://static.wixstatic.com/media/48fa88_2c9a1bb2c2ad4493986d30b53544c883~mv2_d_5666_3777_s_4_2.jpg/v1/fill/w_640,h_788,al_t,q_85,usm_0.66_1.00_0.01/48fa88_2c9a1bb2c2ad4493986d30b53544c883~mv2_d_5666_3777_s_4_2.webp",
                ],
            },
            {
                id: 5,
                title: "วัดปากน้ำ",
                subtitle: "เป็นพระอารามหลวงชั้นตรี นิกาย เถรวาท มหานิกาย",
                detail:"วัดปากน้ำ เป็นพระอารามหลวงชั้นตรี ชนิดสามัญ[1] ตั้งอยู่ ณ ที่ราบลุ่มบางกอกซึ่งเป็นส่วนหนึ่งของดินดอนสามเหลี่ยมปากแม่น้ำเจ้าพระยา ตั้งอยู่ริมคลองหลวงหรือ คลองบางกอกใหญ่ อันเป็นลำแม่น้ำเจ้าพระยาเดิม ก่อนที่จะมีการขุดคลองลัดหน้าวัดอรุณราชวรารามราชวรมหาวิหาร และกลายเป็นลำแม่น้ำเจ้าพระยาในปัจจุบัน เนื่องจากวัดตั้งอยู่บริเวณปากคลองด่านที่แยกไปจากคลองบางหลวงอีกทีหนึ่ง ชื่อของวัดจึงถูกเรียกขานตามตำบลที่ตั้งว่า วัดปากน้ำ ซึ่งชื่อนี้มีปรากฏเรียกใช้ในจดหมายเหตุโบราณหลายฉบับ แต่ได้พบชื่อของวัดที่แปลกออกไปในแผนที่กรุงเทพฯ พ.ศ. 2453 และ พ.ศ. 2474 ว่า วัดสมุทธาราม แต่ไม่เป็นที่นิยมเรียกขานกันอย่างนั้น คงเรียกว่า วัดปากน้ำ มาโดยตลอด",
                img: [
                    "http://carparkcenter.com/wp-content/uploads/2016/07/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%99%E0%B9%89%E0%B8%B3.jpg",
                    "https://ed.files-media.com/static-cache/resize-cache/790x528/ud/images/1/26/77943/ATR_5198_Cover.jpg",
                    "http://109wat.com/wp-content/uploads/2019/03/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%99%E0%B9%89%E0%B8%B3%E0%B8%A0%E0%B8%B2%E0%B8%A9%E0%B8%B5%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D1.jpg"
                ],
            },
        ]
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Banner images={`${Temple}`} />
                        <div className="col-12">
                            <div className="topMargin">
                                <h3>
                                    <span style={{ border: '2px solid orange', borderRadius: '2%' }}>
                                        &nbsp; วัดดังย่านตลาดพลู &nbsp;
                                        </span>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            {Data.map(data => {
                                return (                                    
                                    < CardContents title = { data.title } sTitle = {data.subtitle} imgSrc = { data } id_detail = { data.id } />
                                )
                            })}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TempleList;

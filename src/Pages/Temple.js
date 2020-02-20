import React, { Component } from 'react'
import Banner from '../Components/Banner';
import Temple from '../assets/images/temple.jpg';
import ReactYoutube from '../Components/ReactYoutube';
class TemplePage extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <div className="row">
                        <Banner images={`${Temple}`} />
                        <div className="col-12">
                            <div className="topMargin">
                                <h3>
                                    <span style={{ border: '2px solid orange', borderRadius: '2%' }}>
                                        &nbsp; ความสำคัญของวัด &nbsp;
                                        </span>
                                </h3>
                            </div>
                            <div className="mt-5">
                            <ReactYoutube/>
                            </div>
                            <div className="container mt-5">
                                <div className="row">
                                    <div className="col-12">
                                        <ul>
                                            <li>
                                                &nbsp;&nbsp;&nbsp;&nbsp;พระพุทธศาสนาเป็นศาสนาที่ชาวไทยส่วนใหญ่นับถือ ประชากรส่วนใหญ่ของประเทศร้อยละ 95 นับถือพระพุทธศาสนาสืบต่อมาจากบรรพบุรุษไทย นับตั้งแต่ไทยมีประวัติศาสตร์ชัดเจนชาวไทยก็นับถือพระพุทธศาสนาอยู่แล้ว หลักฐานโบราณ ได้แก่ โบราณสถานที่เป็นศาสนสถาน โบราณวัตถุ เช่น พระธรรมจักร ใบเสมา พระพุทธรูป ศิลาจารึก เป็นต้น แสดงว่าผู้คนในดินแดนไทยรับนับถือพระพุทธศาสนา  (ทั้งนิกายเถรวาทและมหายาน) มาตั้งแต่พุทธศตวรรษที่ 12 กล่าวได้ว่าพระพุทธศาสนาเป็นศาสนา<br />ประจำชาติไทยมาช้านานแล้ว
                                  </li>
                                            <li className="my-5">
                                                &nbsp;&nbsp;&nbsp;&nbsp;พระพุทธศาสนาเป็นรากฐานสำคัญของวัฒนธรรมไทย เนื่องจากชาวไทยนับถือพระพุทธศาสนามาช้านาน จนหลักธรรมทางพระพุทธศาสนาได้หล่อหลอมซึมซับลงในวิถีไทย กลายเป็นรากฐานวิถีชีวิตของคนไทยในทุกด้าน ทั้งด้านวิถีชีวิตความเป็นอยู่ ภาษา ขนบธรรมเนียมประเพณีและศีลธรรม
                                  </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-4 mb-5">
                                        <img className="img-responsive" style={{borderRadius:'2%'}} src="https://images.pexels.com/photos/1911580/pexels-photo-1911580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img-temple" width="100%"/>
                                    </div>
                                    <div className="col-md-4 mb-5">
                                        <img className="img-responsive" style={{borderRadius:'2%'}} src="https://images.pexels.com/photos/50709/thailand-buddhists-monks-and-50709.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="img-temple" width="100%"/>
                                    </div>
                                    <div className="col-md-4 mb-5">
                                        <img className="img-responsive" style={{borderRadius:'2%'}} src="https://images.pexels.com/photos/161183/thailand-monks-temple-tourism-161183.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="img-temple" width="100%"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default TemplePage;

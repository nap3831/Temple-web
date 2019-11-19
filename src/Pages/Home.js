import React, { Component } from 'react'
import Banner from '../Components/Banner';
import Temple from '../assets/images/temple.jpg';
class Home extends Component {
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
                                        &nbsp; วัด, อาวาส หรือ อาราม &nbsp;
                                        </span>
                                </h3>
                                <div className="lead mt-5 mb-5">
                                    วัดโดยส่วนใหญ่นิยมแบ่งเขตภายในวัดออกเป็นสองส่วนคือ พุทธาวาส และสังฆาวาส โดยส่วนพุทธาวาสจะเป็นที่ตั้งของสถูปเจดีย์ อุโบสถ สถานที่ประกอบกิจกรรมทางพระพุทธศาสนา และส่วน <br />
                                    สังฆาวาส จะเป็นส่วนกุฎิสงฆ์สำหรับภิกษุสามเณรจำพรรษา และในปัจจุบันแทบทุกวัดจะเพิ่มส่วนฌาปนสถานเข้าไปด้วย เพื่อประโยชน์ในด้านการประกอบพิธีทางศาสนาของชุมชน เช่น การฌาปนกิจศพ
                                <br />โดยในอดีตส่วนนี้จะเป็นป่าช้า ซึ่งอยู่ติดหรือใกล้วัด ตามธรรมเนียมของแต่ละท้องถิ่น ซึ่งส่วนใหญ่กลุ่มฌาปนสถานในวัดพุทธศาสนาในประเทศไทยจะตั้งอยู่บนพื้นที่ ๆ เป็นป่าช้าเดิม
                                <p />
                                    วัดในประเทศไทยแบ่งได้เป็นสองประเภทใหญ่ได้แก่ พระอารามหลวง หรือ วัดหลวง คือวัดที่พระเจ้าแผ่นดินทรงสร้าง หรือทรงพระกรุณาโปรดเกล้าฯ ให้เข้าจำนวนในบัญชีเป็นพระอารามหลวง<br />
                                    และวัดราษฎร์ คือวัดที่ได้รับพระราชทานที่วิสุงคามสีมา แต่มิได้เข้าบัญชีเป็นพระอารามหลวง
                                <br />
                                    <p />
                                </div>
                            </div>
                            <div className="container">
                                <ul>
                                    <h4>พระอารามหลวงมี 3 ชั้นมีชั้นต่างๆดังนี้</h4>
                                    <li>
                                        ชั้นเอก มี 3 ชนิด ได้แก่
                                        <div className="ml-5">
                                            <li>
                                                ราชวรมหาวิหาร
                                        </li>
                                            <li>
                                                ราชวรวิหาร
                                        </li>
                                            <li>
                                                วรมหาวิหาร
                                        </li>
                                        </div>
                                    </li>

                                    <li>
                                        ชั้นโท มี 4 ชนิด ได้แก่
                                        <div className="ml-5">
                                            <li>
                                                ราชวรมหาวิหาร
                                        </li>
                                            <li>
                                                ราชวรวิหาร
                                        </li>
                                            <li>
                                                วรมหาวิหาร
                                        </li>
                                            <li>
                                                วรวิหาร
                                            </li>
                                        </div>
                                    </li>
                                    <li>
                                        ชั้นตรี มี 3 ชนิด ได้แก่
                                        <div className="ml-5">
                                            <li>
                                                ราชวรวิหาร
                                            </li>
                                            <li>
                                                วรวิหาร
                                        </li>
                                            <li>
                                                สามัญ (ไม่มีสร้อยต่อท้าย)
                                        </li>

                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Home;

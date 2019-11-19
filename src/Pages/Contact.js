import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faPrint, faPhone } from '@fortawesome/fontawesome-free-solid';

class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container mb-5">
                    <div className="topMargin row">
                        <div className="col-12 mt-5">
                            <h1 >
                                ติดต่อฉัน
                        </h1>
                            <img className="img-responsive my-5" src="https://scontent.fbkk12-1.fna.fbcdn.net/v/t1.15752-9/61021286_1542490422553616_8653466744674844672_n.jpg?_nc_cat=101&_nc_eui2=AeH0XHJaERYrmA1a4Nk_rS45VkJewcCSGfnNViyPvPXgkMN-TYy7Oml3JmBaT4NDAKkQoBjJLC8V-qJAVdiGXydU8mBq89y-DsGATpu8F918tw&_nc_oc=AQl2imISxBubU2AWykCitCl0iY-_2zdJWWA0ENEzo9uGS3IVB-p3dZhjYdHR6EV-neQ&_nc_ht=scontent.fbkk12-1.fna&oh=9922521f8f5d0f4bf7da226adc1cdee9&oe=5E834CEB" alt="photo me" width="40%" />
                        </div >
                        <div className="col-12">
                            <FontAwesomeIcon size="10x"
                                icon={faAddressCard} style={{color:'#00ff00'}}/>
                        </div>
                        <div className="col-12" style={{ width: '100%' }}>
                            <div className="my-5">
                                <h5>รหัสนักศึกษา</h5>
                                <p>5921414007</p>
                            </div>
                        </div>
                        <div className="col-md-6  col-12" style={{ width: '100%' }}>
                            <div className="mt-5 ">
                                <span className="lead">นายรณชัย สดหลับ</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-12" style={{ width: '100%' }}>
                            <div className="mt-5 ">
                                <h5>เบอร์โทรศัพท์</h5>
                                <a href="tel:083-241-1260 ">083-241-1260 </a>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Contact
import React, { Component } from 'react';
import {Link , NavLink } from 'react-router-dom';
import {Card , CardBody ,CardImg , CardTitle , CardSubtitle} from 'reactstrap';
class CardContents extends Component {
    render() {
        let { title, sTitle, imgSrc , id_detail } = this.props;
        return (
            <div className="col-lg-4 col-12">
                <div className="wrap-card-img my-5" >
                    <div className="shadows">
                        <Card>
                            <NavLink className="wrapper-card-img " to={`/TempleListDetail/${id_detail}`}>
                                <CardImg className="card-img-top text-center" src={imgSrc.img[0]} alt="Card image cap" />
                            </NavLink>
                            <CardBody className="text-center" style={{ height: '18vh' }}>
                                <CardTitle className="text-center">
                                    <h2>
                                        {title}
                                    </h2>
                                </CardTitle>
                                <hr />
                                <CardSubtitle className="my-3">
                                    {sTitle}
                                </CardSubtitle>
                            </CardBody>
                            <div style={{ marginTop: '80px', marginBottom: '80px', marginLeft: '100px', marginRight: '100px' }}>
                                <Link className=" btn btn-primary text-center w-100" to={`/TempleListDetail/${id_detail}`}>
                                    อ่านต่อ
                                </Link>
                            </div>
                        </Card>
                    </div>
                </div>

            </div>
        )
    }
}
export default CardContents;
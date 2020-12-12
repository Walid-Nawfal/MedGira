import React from 'react';
import { Card, CardImg, CardImgOverlay,
    CardTitle ,Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl1 } from '../shared/baseUrl';
import SearchComponent from './SearchComponent'

    function RenderMenuItem ({center}) {
        //alert(JSON.stringify(center));
        return (
            <Card>
                <Link to={`/centers/${center._id}`}>
                    <CardImg width="100%" src={baseUrl1 + center.image} alt={center.name} height="400" />
                    <CardImgOverlay>
                        <CardTitle className="text-white">{center.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }

    const Menu = (props) => {
        const menu = props.centers.map((center) => {
            return (
                <div className="col-12 col-md-6 mb-2"  key={center.id}>
                    <RenderMenuItem center={center}/>
                </div>
            );
        });
        
        if (props.isLoading) {
            return(
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row"> 
                        <div className="col-12">
                            <h4>{props.centers.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
            }
        else
        return (
            <div className="container mt-3">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Our Centers</BreadcrumbItem>
                    </Breadcrumb>
                    {/* <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div> */}
                    <span id="route" className="ml-3 text-secondary"> Our Centers </span>
                    <span className="ml-auto mr-auto"><SearchComponent centers={props.allCenters}/></span>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }

export default Menu;
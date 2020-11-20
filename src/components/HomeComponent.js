import React from 'react';
import { Carousel } from 'react-bootstrap'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components'

function RenderCard({item, isLoading, errMess}) {
    
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else 
        return(
            <FadeTransform in transformProps = {{
                exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                {/* <Card className="d-flex justify-content-center">
                    <CardImg src={baseUrl + item.image} alt={item.name} id="CardImg" />
                    <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null }
                    <CardText>{item.description}</CardText>
                    </CardBody>
                </Card> */}
                <Carousel id="carousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={baseUrl + item[0].image}
                      alt="First slide"
                    />
                    <Carousel.Caption className="caption">
                      <h3>{item[0].name}</h3>
                      <p>{item[0].description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={baseUrl + item[1].image}
                      alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                      <h3>{item[1].name}</h3>
                      <p>{item[1].description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={baseUrl + item[2].image}
                      alt="Third slide"
                    />

                    <Carousel.Caption className="caption">
                      <h3>{item[2].name}</h3>
                      <p>{item[2].description}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
            </FadeTransform>
        );

}

function Home(props) {
    return(
        <div className="container">
            <div className="row align-items-start justify-content-center">


                <div className="col-12 col-md-8 m-5 offset-2">
                    <RenderCard item={props.center} isLoading={props.centersLoading} errMess={props.centerErrMess} />
                </div>



                {/* <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} isLoading={props.leadersLoading} errMess={props.leadersErrMess}/>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
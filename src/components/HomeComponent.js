import React from 'react';
import { Carousel } from 'react-bootstrap'
import { Loading } from './LoadingComponent';
import { baseUrl1 } from '../shared/baseUrl';
import { FadeTransform } from 'react-animation-components';
import SearchComponent from './SearchComponent';
import SignUp from './SignUpComponent'

function RenderCard({ item, isLoading, errMess }) {

  if (isLoading) {
    return (
      <div id="box">
        <Loading />
      </div>
    );
  }
  else if (errMess) {
    return (
      <div id="box">
        <h4>{errMess}</h4>
      </div>
    );
  }
  else
    return (
      <FadeTransform in transformProps={{
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
              src={baseUrl1 + item[0].image}
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
              src={baseUrl1 + item[1].image}
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
              src={baseUrl1 + item[2].image}
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
  return (
    <React.Fragment>
      <div className="myContainer">
        <div className="row align-items-start justify-content-center">
          <div className="col-12 col-md-3 m-5 pt-2" id="signInCon">
            <h4 className="m-2">Sign Up ✔</h4>
              <img src="assets/images/profile.png" alt="Profile" id="profileImg"/>
            <SignUp />
          </div>
          <div className="col-12 col-md-6 m-5">
            <RenderCard item={props.center} isLoading={props.centersLoading} errMess={props.centerErrMess} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-start justify-content-center p-1">
          <div className="col-12 col-md-8 m-5 offset-2">
            <SearchComponent centers={props.centers} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
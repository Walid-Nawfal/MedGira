/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';
import { Link } from 'react-router-dom';


const SpecialtyOptions = (props) => {
    const options = props.centers.map((center) => {
        return(
            <option value={center.category}>{center.category}</option>
        );
    });
    return options;
}

const CentersOptions = (props) => {
    const options = props.centers.map((center) => {
        return(
            <option value={center.country}>{center.country}</option>
        );
    });
    return options;
}


class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "Lebanon",
            specialty: "Cosmetic Surgeries"
        }
        // this.handleSearch = this.handleSearch.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleSpecialtyChange = this.handleSpecialtyChange.bind(this);

    }
    handleCountryChange(event) {
        this.setState({country: event.target.value});
    }
    handleSpecialtyChange(event) {
        this.setState({specialty: event.target.value})
    }
    // handleSearch(event) {
    //     <Link to={`/menu/${this.state.specialty}`}>
            
    //     </Link>
    // }

    render() {
        return(
            <React.Fragment>
                <LocalForm>
                    <Row className="form-group p-4 searchRow">
                        {/* <Label htmlFor="center" md={2}>Country: </Label> */}
                        <Col md={3} style={{margin:'5px'}}>
                            <Control.select model=".center" id="center" name="center" type="select" value={this.state.country} onChange={this.handleCountryChange}>
                                <CentersOptions centers={this.props.centers} />
                            </Control.select>
                        </Col>
                        {/* <Label htmlFor="specialty" md={2}>Specialty: </Label> */}
                        <Col md={4} style={{margin:'5px'}}>
                            <Control.select model=".specailty" id="specailty" name="specailty" type="select" value={this.state.specialty} onChange={this.handleSpecialtyChange}>
                                <SpecialtyOptions centers={this.props.centers} />
                            </Control.select>
                        </Col>
                        <Link to={`/menu/${this.state.specialty}`}>
                            <Button md={2} className="btn btn-light text-primary ml-auto" type="submit" value="submit"><span className="fa fa-search fa-lg"></span></Button>
                        </Link>
                    </Row>
                </LocalForm>
            </React.Fragment>
        );
    }
    
}

export default SearchComponent;
/* eslint-disable no-lone-blocks */
/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import {Row, Col, Button} from 'reactstrap';
import { Control, LocalForm } from 'react-redux-form';


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


const SearchComponent = (props) => {
    return(
        <React.Fragment>
            <LocalForm>
                <Row className="form-group p-4 searchRow">
                    {/* <Label htmlFor="center" md={2}>Country: </Label> */}
                    <Col md={3} style={{margin:'5px'}} className="ml-4">
                        <Control.select model=".center" id="center" name="center" type="select">
                            <CentersOptions centers={props.centers} />
                        </Control.select>
                    </Col>
                    {/* <Label htmlFor="specialty" md={2}>Specialty: </Label> */}
                    <Col md={4} style={{margin:'5px'}}>
                        <Control.select model=".specailty" id="specailty" name="specailty" type="select">
                            <SpecialtyOptions centers={props.centers} />
                        </Control.select>
                    </Col>
                    <Button md={2} className="btn btn-light text-primary ml-auto" type="submit" value="submit"><span className="fa fa-search fa-lg"></span></Button>
                </Row>
            </LocalForm>
        </React.Fragment>
    );
}

export default SearchComponent;
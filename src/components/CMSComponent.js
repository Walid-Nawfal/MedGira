import Axios from 'axios';
import React, { Component } from 'react'
import { baseUrl } from '../shared/baseUrl';

class CMS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            country: "",
            category: "",
            description: "",
            image: ""
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleCategoryChange = this.handleCategoryChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleNameChange(event) {this.setState({name: event.target.value})}
    handleCountryChange(event) {this.setState({country: event.target.value})}
    handleCategoryChange(event) {this.setState({category: event.target.value})}
    handleDescriptionChange(event) {this.setState({description: event.target.value})}
    handleImageChange(event) {this.setState({image: event.target.value})}
    
    handleDel(event) {
        Axios({
            method:'DELETE',
            url: baseUrl + 'centers/' + event.target.name
        })
    }

    handleAdd(event) {
        Axios({
            method:'post',
            url: baseUrl + 'centers',
            data : {
                name: this.state.name,
                country: this.state.country,
                category: this.state.category,
                description: this.state.description,
                image: this.state.image
            } 
        })
    }

    render() {
        const collection = this.props.centers.map((center) => {
            return (
                <tr>
                    <th className="d-none" scope="row">{center._id}</th>
                    <td> <input style={{ width: "6vw" }} value={center.name} /> </td>
                    <td> <input style={{ width: "6vw" }} value={center.country}></input> </td>
                    <td> <input value={center.category}></input> </td>
                    <td> <input value={center.description}></input> </td>
                    <td> <input value={center.image}></input> </td>
                    <td id="CMSTableControls"><button name={center._id} onClick={this.handleEdit} className="fa fa-pencil border-0"></button></td>
                    <td id="CMSTableControls"><button name={center._id} onClick= {this.handleDel} className="fa fa-trash border-0"></button></td>
                </tr>
            )
        });
        return (
            <div className="container pt-3" >
                <h2 id="CMSHeader">Back Office</h2>
                <table class="table table-hover table-striped" id="CMSTable">
                    <thead>
                        <tr>
                            <th className="d-none" scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Country</th>
                            <th scope="col">Specialty</th>
                            <th scope="col">Description</th>
                            <th scope="col">Image</th>
                            <th colSpan="2" scope="col">Control</th>
                        </tr>
                    </thead>
                    <tbody>
                        {collection}
                        <tr>
                            <th className="d-none" scope="row">Add Center</th>
                            <td> <input name="name" onChange={this.handleNameChange}/> </td>
                            <td> <input name="country" onChange={this.handleCountryChange} /> </td>
                            <td> <input name="specialty" onChange={this.handleCategoryChange} /> </td>
                            <td> <input name="description" onChange={this.handleDescriptionChange} /> </td>
                            <td> <input name="image" onChange={this.handleImageChange} /> </td>
                            <td id="CMSTableControls"> <button onClick={this.handleAdd} className="fa fa-plus-square border-0"></button> </td>
                            <td id="CMSTableControls" className="text-dark"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

}

export default CMS;
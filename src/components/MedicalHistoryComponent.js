import Axios from 'axios'
import React from 'react'
import { Chart } from 'react-google-charts'
import { Link } from 'react-router-dom'
import { baseUrl } from '../shared/baseUrl'

function handleLogout () {
    Axios({
        method: 'get',
        url: baseUrl + 'users/logout'
    })
    window.localStorage.setItem('success', "false");
    window.location.reload();
}

const MedcialHistory = (props) => {
    if(window.localStorage.getItem('success') === "false"){
        window.location.replace("http://localhost:3001/");
        return
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center"><h2>Welcome Back!</h2><h3>We have all your records set neat!</h3><Link to="/menu"><button className="btn btn-dark p-2 mt-4">Book More!</button></Link></div>
                <div className="col-12 col-md-7"><img src="assets/images/MedHistory.png" alt="We Care For You" id="medHistory" /></div>
            </div>
            <div className="row">
                <h4>Your Medical Status</h4>
                <Chart
                    width={'100%'}
                    height={'400px'}
                    chartType="Gantt"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            { type: 'string', label: 'Task ID' },
                            { type: 'string', label: 'Task Name' },
                            { type: 'date', label: 'Start Date' },
                            { type: 'date', label: 'End Date' },
                            { type: 'number', label: 'Duration' },
                            { type: 'number', label: 'Percent Complete' },
                            { type: 'string', label: 'Dependencies' },
                        ],
                        [
                            'Research',
                            'First Trip',
                            new Date(2015, 0, 1),
                            new Date(2015, 0, 5),
                            null,
                            100,
                            null,
                        ],
                        [
                            'Write',
                            'Checkout',
                            null,
                            new Date(2015, 0, 9),
                            3 * 24 * 60 * 60 * 1000,
                            25,
                            'Research,Outline',
                        ],
                        [
                            'Cite',
                            'Second Trip',
                            null,
                            new Date(2015, 0, 7),
                            1 * 24 * 60 * 60 * 1000,
                            20,
                            'Research',
                        ],
                        [
                            'Complete',
                            'Hand in paper',
                            null,
                            new Date(2015, 0, 10),
                            1 * 24 * 60 * 60 * 1000,
                            0,
                            'Cite,Write',
                        ],
                        [
                            'Outline',
                            'Third Trip',
                            null,
                            new Date(2015, 0, 6),
                            1 * 24 * 60 * 60 * 1000,
                            100,
                            'Research',
                        ],
                    ]}
                    rootProps={{ 'data-testid': '1' }}
                />
            </div>
            <button onClick={handleLogout} className="btn btn-dark p-2 mt-4">Log Out!</button>
        </div>
    )
}

export default MedcialHistory;
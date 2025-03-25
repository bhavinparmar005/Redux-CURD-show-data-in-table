
import React from 'react'
import './ShowData.css'
import { useSelector } from 'react-redux'


function ShowData() {

    const { foodReview } = useSelector((state) => {
        return (
            state.foodReview
        )
    })
    console.log(foodReview);

    const fillterData = (e) => {
        let input = e.toLowerCase()

        let fillter = foodReview.filter((val)=>{
            return(
                val.name.toLowerCase().includes(input)
            )
        })
        console.log(fillter);
        
    }

    return (
        <>
            <div className="container mt-4">
                <h2 className="text-center mb-4">Food Review Data</h2>
                <div className="d-flex flex-wrap justify-content-between mb-3">
                    <div>
                        <label htmlFor="entries" className="form-label">Show</label>
                        <select id="entries" className="form-select w-auto d-inline-block">
                            <option value={10}>10</option>
                            <option value={25}>25</option>
                            <option value={50}>50</option>
                        </select>
                        <span> results per page</span>
                    </div>
                    <input type="text" id="search" className="form-control search-container " placeholder="Filter in records..." onChange={(e) => fillterData(e.target.value)} />
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Postcode</th>
                                <th>Rating</th>
                                <th>Type of Food</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                foodReview.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.name}</td>
                                            <td>{val.address}</td>
                                            <td>{val.postcode} </td>
                                            <td> {val.rating} <i className="bi bi-star-fill text-warning" /></td>
                                            <td> {val.typeoffood}</td>
                                            <td className="action-buttons">
                                                <button className="btn btn-primary btn-sm w-100"><i className="bi bi-pencil-square fs-5" /></button>
                                                <button className="btn btn-danger btn-sm w-100"><i className="bi bi-trash fs-5" /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }



                        </tbody>
                    </table>
                </div>
            </div>




        </>
    )
}

export default ShowData


import React, { use, useState } from 'react'
import './ShowData.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { deleteReviwe } from '../feature/FoodReviewSlice'
import { useDispatch } from 'react-redux'


function ShowData() {

    let nav = useNavigate()

    let dispacth = useDispatch()

    const [searchQuery, setSearchQuery] = useState('');

    const { foodReview } = useSelector((state) => {
        return (
            state.foodReview
        )
    })
    const fillterData = foodReview.filter((val) => {
        return (
            val.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
    })

    // console.log(fillterData);



    const deleteData = (id) => {

      
        dispacth(deleteReviwe(id))

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
                    <input type="text" id="search" className="form-control search-container " placeholder="Filter in records..." onChange={(e) => setSearchQuery(e.target.value)} />
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

                            {fillterData.length > 0 ? (

                                fillterData.map((val) => {
                                    return (
                                        <tr>
                                            <td>{val.name}</td>
                                            <td>{val.address}</td>
                                            <td>{val.postcode} </td>
                                            <td> {val.rating} <i className="bi bi-star-fill text-warning" /></td>
                                            <td> {val.typeoffood}</td>
                                            <td className="action-buttons">
                                                <button className="btn btn-primary btn-sm w-100" onClick={() => nav(`/editpage` , {state:val})}><i className="bi bi-pencil-square fs-5" /></button>
                                                <button className="btn btn-danger btn-sm w-100" onClick={() => deleteData(val.id)}><i className="bi bi-trash fs-5" /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            ) : (
                                <tr>
                                    <th colSpan="6" >No data found</th>
                                </tr>
                            )
                            }



                        </tbody>
                    </table>
                </div>
            </div>




        </>
    )
}

export default ShowData

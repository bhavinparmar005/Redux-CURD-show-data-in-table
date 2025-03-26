import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editReviwe } from '../feature/FoodReviewSlice'
import { useLocation, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

function EditPage() {
  const dispacth = useDispatch()
  let editData = useLocation()
  let nav = useNavigate()

  const [data, setData] = useState({
    id: "" || editData.state.id,
    name: "" || editData.state.name,
    address: "" || editData.state.address,
    postcode: "" || editData.state.postcode,
    rating: "" || editData.state.rating,
    typeoffood: "" || editData.state.typeoffood
  })


  const resiveData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(pre => ({ ...pre, [name]: value }));
  }
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispacth(editReviwe(data))
    // console.log(foodReview);

    setData({
      name: "",
      address: "",
      postcode: "",
      rating: "",
      typeoffood: ""
    })

    setTimeout(() => {
      nav('/showpage')
    }, 2000);

    Swal.fire({
      title: " Edit Food Review Successfully",
      icon: "success",
      draggable: true,
      showConfirmButton: false,
      timer: 1900
    });
  }
  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2 className="text-center mb-4">Food Review Edit Form</h2>
          <form onSubmit={handelSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" name='name' onChange={resiveData} value={data.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" rows={'3'} placeholder="Enter your address" name='address' onChange={resiveData} value={data.address} />
            </div>
            <div className="mb-3">
              <label htmlFor="postcode" className="form-label">Postcode</label>
              <input type="text" className="form-control" id="postcode" placeholder="Enter your postcode" name='postcode' onChange={resiveData} value={data.postcode} />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <input type="number" minLength={1} max={5} className="form-control" id="rating" placeholder="Give a rating (1-5)" name='rating' onChange={resiveData} value={data.rating} />
            </div>
            <div className="mb-3">
              <label htmlFor="typeOfFood" className="form-label">Type of Food</label>
              <select className="form-select" id="typeOfFood" name='typeoffood' onChange={resiveData} value={data.typeoffood} >
                <option selected>Select food type</option>
                <option value={"Italian"}>Italian</option>
                <option value={"Chinese"}>Chinese</option>
                <option value={"Mexican"}>Mexican</option>
                <option value={"Indian"}>Indian</option>
                <option value={"Others"}>Others</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Edit Review</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditPage

import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [data,setData]=useState({
    name:"",
    address:"",
    postcode:"",
    rating:"",
    typeoffood:""
  })

  const resiveData =(e)=>{
    const name =e.target.name;

  }

  return (
    <>
      <div className="container">
        <div className="form-container">
          <h2 className="text-center mb-4">Food Review Form</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">Address</label>
              <textarea className="form-control" id="address" rows={3} placeholder="Enter your address" defaultValue={""} />
            </div>
            <div className="mb-3">
              <label htmlFor="postcode" className="form-label">Postcode</label>
              <input type="text" className="form-control" id="postcode" placeholder="Enter your postcode" />
            </div>
            <div className="mb-3">
              <label htmlFor="rating" className="form-label">Rating</label>
              <input type="number" className="form-control" id="rating" placeholder="Give a rating (1-5)" />
            </div>
            <div className="mb-3">
              <label htmlFor="typeOfFood" className="form-label">Type of Food</label>
              <select className="form-select" id="typeOfFood">
                <option selected>Select food type</option>
                <option value={1}>Italian</option>
                <option value={2}>Chinese</option>
                <option value={3}>Mexican</option>
                <option value={4}>Indian</option>
                <option value={5}>Others</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Submit</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App

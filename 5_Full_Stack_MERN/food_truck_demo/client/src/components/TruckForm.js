import React from 'react'

const TruckForm = (props) => {
    const { truck, changeHandler, errors, action } = props;

    return (
        <>
            <div className="form-group row">
                <label htmlFor="name" className="col-sm-4">Name: </label>
                <input type="text" name="name" onChange={changeHandler} className="col-sm-8 form-control" value={truck.name}/>
            </div>

            <div className="form-group row">
                <label htmlFor="style" className="col-sm-4">Style: </label>
                <input type="text" name="style" onChange={changeHandler} className="col-sm-8 form-control" value={truck.style} />
            </div>

            <div className="form-group row">
                <label htmlFor="description" className="col-sm-4">Description: </label>
                <input type="text" name="description" onChange={changeHandler} className="col-sm-8 form-control" value={truck.description} />
            </div>

            <div className="form-group row">
                {
                    action === "edit" ?
                    <>
                        <button type="button" className="offset-sm-6 col-sm-2">Delete</button>
                        <button type="button" className="col-sm-2 btn btn-secondary">Cancel</button>
                        <button type="submit" className="col-sm-2 btn btn-primary">Update</button>
                    </>
                    :
                    <>
                        <button type="button" className="offset-sm-8 col-sm-2 btn btn-secondary">Cancel</button>
                        <button type="submit" className="col-sm-2 btn btn-primary">Submit</button>
                    </>
                }
            </div>
        </>
    )
}

export default TruckForm
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdateForm from './UpdateForm';

const Vehicle = () => {
    const [data,setData]=useState();
    const [value,setValue]=useState();
    const [modal,setModal]=useState(false);

    //Calling the Api 
    useEffect( async ()=>{
        try{
        let response = await axios.get('https://devapi.pikpart.com/api/vehicle/models');
        setData(response?.data?.data)

        }
        catch(err){
            <h1>{err}</h1>
        }
    },[])

    //When Update button gets clicked
    const onUpdate=(e,val)=>{
    e.preventDefault();
      setModal(true);
      setValue(val)

    }
    // handler function to pass data from child to parent
    const handler=(a)=>{
        setModal(a)
    }


    return (
        <>
            <div className="container text-center">
                <h3 className="text-primary">PikPart</h3>
            </div>
            <div className="card text-center" style={{width:"60%",marginLeft:"20%",marginRight:"20%"}}>
                <div className="header bg-primary">
                    <h5 className="text-light" style={{padding:"10px"}}>Vehicle List</h5>
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr className="text-primary">
                                <td>Id</td>
                                <td>Vehicle Brand</td>
                                <td>Name</td>
                                <td>Vehicle Type</td>
                            </tr>
                        </thead>
                    {data?.map((val)=>{
                        return (
                            <>
                           <tbody>
                               <tr>
                                   <td>{val.id}</td>
                                   <td>{val.vehicleBrandId}</td>
                                   <td>{val.name}</td>
                                   <td>{val.vehicleType}</td>
                                   <button onClick={(e)=>onUpdate(e,val)} className="btn btn-warning">Update</button>
                               </tr>
                              
                               </tbody>
                               <br/>
                            </>
                        )
                    })}
                     </table>
                </div>
                {modal?<UpdateForm val={value} handle={handler}/>:null}
                </div>
           

        </>
    );
};

export default Vehicle;
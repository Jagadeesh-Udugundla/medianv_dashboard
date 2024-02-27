import React, { useState } from 'react';
import './Table.css';
import DirectionsBusIcon from '@mui/icons-material/DirectionsBus';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Sampledata from "./Sampledata.js";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import PersonIcon from '@mui/icons-material/Person';
import CircleIcon from '@mui/icons-material/Circle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Tabledata = () => {
  const [selectedRow, setSelectedRow] = useState(null);

  const handleDetailsClick = (index) => {
    setSelectedRow(index === selectedRow ? null : index);
  };

  return (
    <div className='tablecontainermain'>
    <div style={{ padding: '20px', overflow: 'scroll',height:"500px" }}>
      <div className='tablecontainer'>
        <div className='btnstable'>
          <h5 className='navbtnt' >Live(30)</h5>
          <h5 className='navbtn' style={{color:"green"}}>Responded(30)</h5>
          <h5 className='navbtn' style={{color:"red"}}>Unresponded(30)</h5>
        </div>
        <div className='btnstable'>
          <h5 className='navbtn'>Bid Created</h5>
          <h5 className='navbtn'>Today</h5>
          <h5 className='navbtn'>Yesterday</h5>
          <select className='da'>
            <option>Calender</option>
          </select>
          <FilterAltIcon className='navbtnt' style={{ color: "blue" }} />
        </div>
      </div>
      <div>
        <table style={{ width: "100%",backgroundColor:"white" }}>
          <thead className='tablehead'>
            <tr>
              <th>S.No</th>
              <th>Bid Number<br /> Created By</th>
              <th>Start Date<br /> & Time</th>
              <th>Bid Time <br />Remaining</th>
              <th>From city<br /> To city</th>
              <th>Vehicle Type, Size Body<br /> No. of Vehicle</th>
              <th>Material Weight</th>
              <th>Response</th>
              <th>Assigned Staff</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {Sampledata.map((data, index) => (
              <React.Fragment key={index}>
                <tr >
                  <td style={{padding:"20px"}}>{data.sno}</td>
                  <td>{data.bidnumber}</td>
                  <td>{data.startdata}</td>
                  <td>{data.bidtime}</td>
                  <td>{data.fromtocity}</td>
                  <td>{data.vehicaltype}</td>
                  <td>{data.materialweight}</td>
                  <td>{data.response}</td>
                  <td>{data.assgnedstaff}</td>
                  <td><button className='btnview' onClick={() => handleDetailsClick(index)}>View Details</button></td>
                </tr>
                {selectedRow === index && (
                  <tr>
                    <td colSpan="10">
                      <div className='addcontainer'>
                        <div className='moredetails'>
                            <div>
                                <h5 style={{textAlign:"start"}}>Bid No: {data.bidnumber} ({data.name})</h5>
                                <div className='moredetailscontainer'> <CircleIcon style={{color:"green",paddingRight:"10px"}}/> <h4>{data.from_city}</h4></div>
                                <div style={{display:'flex',alignItems:'center'}}>
                                <Divider sx={{ height: 50,marginLeft:"8px",width:"3px",backgroundColor: "gray",fontWeight:"30px", textAlign:"start"}} orientation="vertical" />
                                <div style={{width:"80%",paddingLeft:"20px"}}>
                                    <p style={{color:"green"}}>Loading Point: <span style={{color:"black"}}>{data.load_point}</span></p>
                                </div>
                                </div>
                                <div className='moredetailscontainer'> <LocationOnIcon style={{color:"red",paddingRight:"10px"}}/> <h4>{data.to_city}</h4></div>
                                <div style={{width:"80%",marginLeft:"40px"}}>
                                    <p style={{color:"red"}}>Unloading Point: <span style={{color:"black"}}>{data.unloading_point}</span></p>
                                </div>
                            </div>
                            <div>
                                <div className='moredetailscontainer'>
                                    <CalendarTodayIcon style={{paddingRight:"10px"}}/>
                                    <h5>Vehical Loading date:{data.v_loadingdata} </h5>
                                </div>
                                <div className='moredetailscontainer'>
                                    <DirectionsBusIcon style={{paddingRight:"10px"}}/>
                                    <h5>Vehical Type:{data.v_type} </h5>
                                </div>
                                    <div className='moredetailscontainer'>
                                        <ViewQuiltIcon style={{paddingRight:"10px"}}/>
                                        <h5>Material:{data.material} </h5>
                                        <h5 style={{paddingLeft:"20px"}}>Weight: {data.materialweight}</h5>
                                    </div>
                                    
                                <div className='moredetailscontainer'>
                                    <CalendarTodayIcon  style={{paddingRight:"10px"}}/>
                                    <h5>Rewuest date:{data.startdata} </h5>
                                    <CalendarTodayIcon style={{paddingLeft:"20px",paddingRight:"10px"}}/>
                                    <h5 >Expiry date:{data.expiry_date} </h5>
                                </div>
                                <div className='moredetailscontainer'><h5>Remarks : {data.remark}</h5></div>
                                
                            </div>
                            <div>
                                <div className='moredetailscontainer'>
                                    <PersonIcon style={{paddingRight:"10px"}}/>
                                    <h5>Assgned Staff: {data.assgnedstaff}</h5>
                                </div>
                                <div className='moredetailscontainer'>
                                    <LocalPhoneIcon  style={{paddingRight:"10px"}}/>
                                    <h5>Phone Number: {data.phone_number}</h5>
                                </div>
                                <div  className='moredetailscontainer'><h5>Target Price: {data.target_price}</h5></div>
                                
                                <div className='moredetailscontainer'><h5>Number of Bider for this Bid: {data.no_of_bider_for_this_bid}</h5></div>
                                
                            </div>
                        </div>
                        
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Tabledata;

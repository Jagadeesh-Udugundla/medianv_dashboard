import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';
import WidgetsIcon from '@mui/icons-material/Widgets';
import "./Dashboard.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import UserSelect from "./components/UserSelect.js"
import BelowNavbar from "./BelowNavbar/BelowNavbar.js"
import Tabledata from "./TableData/Tabledata.js"

const Dashboard = () => {
  return (
    <div className='main'>
        <div className='sidecontainer'>
            <div style={{display:'flex',alignItems:'center'}}>
                <CircleIcon style={{height:"50px",width:"50px"}} />
                <h1>Logo</h1>
            </div>
            <div>
            <div style={{display:'flex',flexDirection:'column',justifyContent:"space-between"}}>
                {/* <div style={{display:'flex',flexDirection:"column",justifyContent:"space-between"}}> */}
                    <div style={{padding:"20px"}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Bid</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>POD</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Vendor</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>User</p>
                        </div>
                    </div>
            </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:'space-between'}}>
                    <div style={{padding:"20px"}}>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Setting</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Profile</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Contact Us</p>
                        </div>
                        <div style={{display:'flex',alignItems:'center',justifyContent:"flex-start"}}>
                            <WidgetsIcon style={{paddingRight:"10px"}}/>
                            <p>Logout</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className='rightside'>
            <div className='nav'>
                <p className='navbtn'>Bid</p>
                <p className='navbtn'>Pod</p>
                <p className='navbtn'>Vendor</p>
                <p className='navbtn'>User</p>
                <AccountCircleIcon/>
                <UserSelect  />
            </div>
            <BelowNavbar/>
            <Tabledata/>
        </div>
    </div>
  )
}

export default Dashboard
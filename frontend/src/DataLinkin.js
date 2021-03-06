import React, {createContext, useState, useEffect} from 'react'
import axios from 'axios';

// khởi tạo context mới
export const DataContext = createContext();
// Tham số truyền vào là object DataContext.

export const DataLinkin = (props) => {
    //user
    const [adminUser, setadminUser] = useState([])
    useEffect(()=>{
        axios.get('https://linkin-olive.herokuapp.com/users')
            .then(res=>{
                setadminUser(res.data.users)
            })
            .catch(err =>{
                console.log(err);
            })
    },[]);

    const value = {
        users: [adminUser, setadminUser]
    }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}



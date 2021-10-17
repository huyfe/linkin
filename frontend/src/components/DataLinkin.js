import React, {createContext, useState, useEffect} from 'react'

// khởi tạo context mới
export const DataContext = createContext();
// Tham số truyền vào là object DataContext.

export const DataLinkin = (props) => {

    //user
    const [adminUser, setadminUser] = useState([])
    useEffect(()=>{
        // get data database ở đây (dùng axios hay fetch gì đó)
    },[]);

    const value = {
        // chọn 1 key value để qua bến layout gọi
        users: [adminUser, setadminUser]
    }

    
    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}



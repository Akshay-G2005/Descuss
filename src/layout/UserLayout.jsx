import React from 'react'
import { Route, Routes } from 'react-router-dom'

const UserLayout = () => {
  return (
    <>
        <Routes>
            <Route element={<UserLayout/>}>
                
            </Route>
        </Routes>
    </>
  )
}

export default UserLayout
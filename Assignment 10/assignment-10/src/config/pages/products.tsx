import '../../App.css'
import CCard from "../Components/Card"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios"
import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Products() {
    const Navigate =  useNavigate()
    const [List, setList]: any[] = React.useState([])

    async function getData() {
        const { data } = await axios.get("https://fakestoreapi.com/products")
        setList([...data])
    }
    let clickhandler = (obj:any) => {
        Navigate(`/products/${obj.id}` , { state : obj} )

    }
    console.log(List)

    return (
        <>
            <div className='container my-5'>
                <h1 className="text-center fw-bolder">Our Products</h1>
                <div className="my-5 d-flex gap-4 flex-wrap justify-content-center">
                    {List.map((x: any, i: number) => <CCard cursor='pointer' Click={() => { clickhandler(x) }} key={i} Data={x} />)}
                </div>
                {(List.length <= 0) ? <Button variant="contained" onClick={() => { getData() }}>Get Data</Button> : null}
            </div>
        </>
    )
}
export default Products;
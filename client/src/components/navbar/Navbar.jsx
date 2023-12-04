import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import newRequest from '../../../utils/newRequest.js'
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()
    // console.log(pathname);
    const isActive = () => {

        window.scrollY > 0 ? setActive(true) : setActive(false)
    }



    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

    // const currentUser = {
    //     id: 1,
    //     username: "John Doe",
    //     isSeller: true
    // }
    const navigate = useNavigate();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const handleLogout = async () => {
        try {
            await newRequest.post("/auth/logout")
            localStorage.setItem("currentUser", null);
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
                <div className="container">
                    <div className="logo">
                        <Link className='link' to='/'>
                            <span className='text'>fiverr</span>
                            <span className='dot'>.</span>

                        </Link>
                    </div>
                    <div className="links">
                        <span>Fiver Business</span>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Sign In</span>
                        {currentUser?.isSeller && <span>Become a Seller</span>}
                        {!currentUser && <button>Join</button>}
                        {currentUser && (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img src={currentUser.img || "/img/noavatar.jpg"} alt="" />
                                <span>{currentUser?.username} </span>
                                {open && <div className='options'>
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <Link className='link' to='/mygigs'>Gigs</Link>
                                                <Link className='link' to='/add'>Add New Gigs</Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to='/orders'>Orders</Link>
                                    <Link className='link' to='/messages'>Messages</Link>
                                    <Link className='link' onClick={handleLogout} >Logout</Link>
                                </div>}
                            </div>
                        )}
                    </div>
                </div>
                {active || pathname !== '/' && (

                    <>
                        <hr />
                        {/* BURAYA COPY PASTE AT */}
                        <div className="menu">
                            <span>Test1</span>
                            <span>Test2</span>
                            <span>Test3</span>
                            <span>Test4</span>
                            <span>Test5</span>
                            <span>Test6</span>
                        </div>
                        <hr />
                    </>
                )
                }
            </div >

        </>
    )
}

export default Navbar
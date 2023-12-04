import { Link } from 'react-router-dom'
import './message.scss'

import React from 'react'

const Message = () => {

    const currentUser = {
        id: 1,
        username: "Anna",
        isSeller: true,
    };
    const message = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
      maxime cum corporis esse aspernatur laborum dolorum? Animi
      molestias aliquam, cum nesciunt, aut, ut quam vitae saepe repellat
      nobis praesentium placeat.`;
    return (
        <>
            <div className='message'>
                <div className="container">
                    <span className="breadcrumbs">
                        <Link className='link' to='/messages' >MESSAGES </Link> / KADİRCAN DOE /
                    </span>
                    <div className="messages">
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="item owner">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="item owner">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="item">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                        <div className="item owner">
                            <img
                                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                alt="" />
                            <p>
                                {message}
                            </p>
                        </div>
                    </div>
                    <hr />
                    <div className="write">
                        <textarea name="" placeholder='write a message' id="" cols="30" rows="10">

                        </textarea>
                        <button>
                            Send
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Message
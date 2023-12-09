import { Link, useParams } from 'react-router-dom'
import './message.scss'
import React from 'react'
import { useQueryClient, useQuery, useMutation } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest.js';



const Message = () => {

    const { id } = useParams();

    const currentUser = JSON.parse(localStorage.getItem("currentUser"))

    const queryClient = useQueryClient();

    const { isLoading, error, data } = useQuery({
        queryKey: ["messages"],
        queryFn: () =>
            newRequest.get(`/messages/${id}`).then((res) => {
                return res.data
            })
    })

    const mutation = useMutation({
        mutationFn: (message) => {
            return newRequest.post(`/messages`, message);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(["messages"]);
        },
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({
            conversationId: id,
            desc: e.target[0].value,
        });
        e.target[0].value = "";
    };



    return (
        <>
            <div className='message'>
                <div className="container">
                    <span className="breadcrumbs">
                        <Link className='link' to='/messages' >MESSAGES </Link> / KADİRCAN DOE /
                    </span>
                    {isLoading ? "Loading..." : error ? "Something went Wrong"
                        : <div className="messages">
                            {data.map((message, i) => (

                                <div className={message.userId === currentUser._id ? "owner item" : "item"} key={i}>
                                    <img
                                        src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                        alt=""
                                    />
                                    <p>
                                        {message.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    }
                    <hr />
                    <form className="write" onSubmit={handleSubmit}>
                        <textarea
                            type='text' placeholder='write a message'
                            id="" cols="30" rows="10"
                        >

                        </textarea>
                        <button type='submit'>
                            Send
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Message
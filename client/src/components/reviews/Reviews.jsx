import React from 'react'
import './reviews.scss'
import Review from '../review/Review'
import newRequest from '../../../utils/newRequest';
import { useQuery } from '@tanstack/react-query';

const Reviews = ({ gigId }) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ["reviews"],
        queryFn: () =>
            newRequest.get(
                `/reviews/${gigId}`
            )
                .then((res) => {
                    return res.data;
                })
    });

    return (
        <div className="reviews">
            <h2>Reviews</h2>
            {isLoading
                ? "loading"
                : error
                    ? "Something went wrong"
                    : data.map((review, i) => <Review key={i} review={review} />)}

        </div>
    )
}

export default Reviews
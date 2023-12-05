import Gig from '../models/gigModel.js';
import { createError } from '../utils/createError.js';

export const createGig = async (req, res, next) => {
    if (!req.isSeller) return next(createError(403, "Only sellers can create a gig"));

    const newGig = new Gig({
        userId: req.userId,
        ...req.body
    })

    try {
        const savedGig = await newGig.save();

        res.status(201).json(savedGig);
    } catch (err) {
        next(err)
    }


}

export const deleteGig = async (req, res, next) => {

    try {
        const gig = await Gig.findById(req.params.id);
        if (gig.userId !== req.userId) return next(createError(403, "You can delete only your gigs !!"))

        await Gig.findByIdAndDelete(req.params.id);
        res.status(200).send("Gig has been delete")

    } catch (err) {
        next(err)
    }

}

export const getGig = async (req, res, next) => {

    try {
        const gig = await Gig.findById(req.params.id);

        if (!gig) return next(createError(403, "There is no gig with this id"))

        res.status(200).json(gig)
    } catch (err) {
        next(err)
    }

}

export const getGigs = async (req, res, next) => {

    const q = req.query;

    const filters = {
        ...(q.userId && { userId: q.userId }),
        ...(q.cat && { cat: q.cat }),
        ...(q.search && { title: { $regex: q.search, $options: "i" } }),
        ...(q.min || q.max && { price: { ...(q.min ? { $gt: q.min } : { $lt: q.max }) } }),

    }

    try {
        const gigs = await Gig.find(filters);

        if (!gigs) return next(createError(403, "There is no gig "))

        res.status(200).json(gigs)



    } catch (err) {
        next(err)
    }

}
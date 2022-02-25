import { request } from "express";

// post new humans details 
export function postHumans () {
    return request.post('/api/v1/humans')
    .send()
}

// get new humans details 
export function getHuman () {
    const res = await request.get('/api/v1/humans')
    return res.body
}


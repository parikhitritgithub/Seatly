import { Inngest } from "inngest";
import User from "../models/User.js"
export const inngest = new Inngest({ id: "movie-ticket-booking" });


const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'} , 
    {event:'clerk/user.created'} , 
     async ({ event }) => {
            const { id, first_name, last_name, email_addresses, image_url } = event.data;
            const userdata = {
                _id: id,
                name: first_name + ' ' + last_name,
                email: email_addresses[0].email_address,
                image: image_url
            }
            await User.create(userdata);
        }
)
const userUpdated = inngest.createFunction(
    { id: 'update-user' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;
        const userdata = {
            _id: id,
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userdata);
    }
)
const syncUserDeleted = inngest.createFunction(
    { id: 'delete-user-with-clerk' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data;
        await User.findByIdAndDelete(id);
    }
)

const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-clerk' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id , first_name, last_name,email_addresses, image_url } = event.data; 
            const userdata = {
            _id: id,
            name: first_name + ' ' + last_name,
            email: email_addresses[0].email_address,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userdata);

        
    }
)




export const functions =[syncUserCreation] ;
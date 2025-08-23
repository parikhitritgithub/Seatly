import express from 'express' ;
import cors from 'cors' ; 
import 'dotenv/config'; 
import connectDB from './config/db.js';
import { clerkMiddleware } from '@clerk/express'
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js"

const app = express() ; 
const port  = 3000 ; 

await connectDB() ; 

// middleware 
app.use(express.json())
app.use(cors()) 
app.use(clerkMiddleware())
//Routes
app.get('/', (req,res) => {res.send('Server is live!')});
app.use("/api/inngest", serve({ client: inngest, functions }));
// app.use("/api/show", showRouter);
// app.use("/api/booking", bookingRouter);
// app.use("/api/admin", adminRouter);
// app.use('/api/user', userRouter);

// Listen at port : 3000
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

export default app;
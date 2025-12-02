import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server"
import Event from "@/database/event.model";
export async function POST(req: NextRequest) {
try{
    await connectDB();
    const formData=await req.formData(); //get the response via form data as we are sending multipart form data from the client side and images also which can be easilt handled by the form data


    let event;
    try{
        event=Object.fromEntries(formData.entries());

    }catch(e){
        return NextResponse.json({
            message:"Invalid form data",
            error:e instanceof Error ? e.message : "Unknown error",
            status:400,
        })
    }

    const createEvent=await Event.create(event);
    return NextResponse.json({
        message:"Event created successfully",
        event:createEvent,
        status:201,
    })
    

}catch(e){
    console.error("Error in events route:", e);
    return NextResponse.json({
        message:"Event creation failed",
        error:e instanceof Error ? e.message : "Unknown error",
    })
}
}
import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server"
import Event from "@/database/event.model";
import { v2 as cloudinary } from "cloudinary";
export async function POST(req: NextRequest) {
try{
    await connectDB();
    const formData=await req.formData(); //get the response via form data as we are sending multipart form data from the client side and images also which can be easilt handled by the form data
// console.log("image:", formData.get("image"));

    let event:any;
    // log(event);
    try{
        event=Object.fromEntries(formData.entries());

    }catch(e){
        return NextResponse.json({
            message:"Invalid form data",
            error:e instanceof Error ? e.message : "Unknown error",
            status:400,
        })
    }
    // console.log("Event data received:", event);
    const file=formData.get("image") as File;
    if(!file){
        return NextResponse.json({
            message:"Image file is required",
            status:400,
        })
    }
    const arrayBuffer=await file.arrayBuffer();
    const buffer=Buffer.from(arrayBuffer);

    const uploadResult=await new Promise((resolve,reject)=>{
        cloudinary.uploader.upload_stream({
            folder:"devevents",
            resource_type:"image",
        },(error,result)=>{
            if(error){
                reject(error);
            }else{
                resolve(result);
            }
        }).end(buffer);
    })
    event.image=(uploadResult as any).secure_url;
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

export async function GET() {
    try{
        await connectDB();
        const events=await Event.find().sort({createdAt:-1});
        return NextResponse.json({
            message:"Events fetched successfully",
            events,
            status:200,
        })
    }catch(e){
        return NextResponse.json({
            message:"Failed to fetch events",
            error:e instanceof Error ? e.message : "Unknown error",
            status:500,
        })
    }
}
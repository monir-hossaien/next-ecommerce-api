import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";

export async function POST(req,res){

    try{
        
        let headerList= headers();
        let id=parseInt(headerList.get('id'));

        const reqBody= await req.json();
        
        const prisma=new PrismaClient;
        const customer=await prisma.customer_profiles.findUnique({
            where:{user_id:id}
        })
        reqBody.customer_id=customer['id']
        
        const result=await prisma.product_reviews.create({
            data:reqBody
        })
        

        return NextResponse.json({status:'success', data:result});
    }
    catch(e){
        return NextResponse.json({status:'success', data:e});
    }
}
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
const prisma=new PrismaClient();

export async function POST(req,res){
    try{
        let headerList=new headers;
        let id=parseInt(headerList.get('id'));

        const reqBody=await req.json();
        reqBody.user_id=id
        const result=await prisma.product_carts.create({
            data:reqBody
        })

        return NextResponse.json({status:'success',data:result});
    }
    catch(e){
        return NextResponse.json({status:'success',data:e});
    }
}

export async function GET(req,res){
    try{
        let headerList=new headers;
        let id=parseInt(headerList.get('id'));
        const result=await prisma.product_carts.findMany({
            where:{user_id:id},
            include:{products:true}
        })

        return NextResponse.json({status:'success',data:result});
    }
    catch(e){
        return NextResponse.json({status:'success',data:e});
    }
}

export async function PUT(req,res){
    try{
        let headerList=new headers;
        let user_id=parseInt(headerList.get('id'));
        const reqBody=await req.json();
        const result=await prisma.product_carts.updateMany({
            where:{
                AND:[
                    {id:reqBody['id']},
                    {user_id:user_id}
                ]
            },
            data:reqBody    
        });
        return NextResponse.json({status:'success',data:result});
    }
    catch(e){
        return NextResponse.json({status:'success',data:e});
    }
}

export async function DELETE(req,res){
    try{
        
        let headerList=new headers;
        let user_id=parseInt(headerList.get('id'));
        
        const reqBody=await req.json();
        const result=await prisma.product_carts.deleteMany({
            where:{
                AND:[
                    {id:reqBody['id']},
                    {user_id:user_id}
                ]
            }
                
        });
        return NextResponse.json({status:'success',data:result});
    }
    catch(e){
        return NextResponse.json({status:'success',data:e});
    }
}
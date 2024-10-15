import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";
const prisma=new PrismaClient();

export async function POST(req,res){
    try {
        const headerList=headers();
        const id=parseInt(headerList.get('id'));
        const reqBody=await req.json();
        const result=await prisma.product_wishes.create({
            data:{product_id:reqBody['product_id'],user_id:id}
        })
        return NextResponse.json({status:'success',data:result})


    }catch (e) {
        return NextResponse.json({status:'fail', data:e})
    }
}


export async function GET(req,res){
    try {
        const headerList=headers();
        const id=parseInt(headerList.get('id'));

        const result=await prisma.product_wishes.findMany({
            where:{user_id:id},
            include:{products:true}
        })
        return NextResponse.json({status:'success',data:result})


    }catch (e) {
        return NextResponse.json({status:'fail', data:e})
    }
}

export async function DELETE(req,res){
    try {
        const headerList=headers();
        const id=parseInt(headerList.get('id'));
        const reqBody=await req.json();

        const result=await prisma.product_wishes.deleteMany({
            where:{
                AND:[
                    {product_id:reqBody['product_id']},
                    {user_id:id}
                ]
            }

        })
        return NextResponse.json({status:'success',data:result})


    }catch (e) {
        return NextResponse.json({status:'fail', data:e})
    }
}

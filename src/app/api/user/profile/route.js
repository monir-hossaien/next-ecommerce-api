import {NextResponse} from "next/server";
import {PrismaClient} from "@prisma/client";
import {headers} from "next/headers";
const prisma=new PrismaClient();

export async function POST(req,res){
    try{
        const headerList=headers();
        const id=parseInt(headerList.get('id'));
        const reqBody=await req.json();

        const result=await prisma.customer_profiles.upsert({
            where:{user_id:id},
            update:reqBody,
            create:{...reqBody,user_id:id}
        })
        return NextResponse.json({status:'success', data:result})
    }
    catch (e) {
        return NextResponse.json({status:'fail', data:e})
    }
}

export async function GET(req,res){
    try{
        const headerList=headers();
        const id=parseInt(headerList.get('id'));

        const result=await prisma.customer_profiles.findUnique({
            where:{user_id:id}
        })
        return NextResponse.json({status:'success',data:result})
    }catch (e) {
        return NextResponse.json({status:'fail', data:e});
    }
}
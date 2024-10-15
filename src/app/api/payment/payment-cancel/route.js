import { NextResponse} from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma=new PrismaClient;

export async function POST(req,res){
    try{
       
        const {searchParams}=new URL(req.url);
        const tran_id= searchParams.get('tran_id');

        const result=await prisma.invoices.updateMany({
            where:{
                AND:[
                    {tran_id:tran_id}
                ]
            },
            data:{payment_status:"cancel"}
        })

        return NextResponse.json({status:'success',data:result});
    }
    catch(e){
        return NextResponse.json({status:'fail',data:e});
    }
}
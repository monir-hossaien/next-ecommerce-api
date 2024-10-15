import { NextResponse} from "next/server";
import { PrismaClient} from "@prisma/client";
import { headers } from "next/headers";

export async function GET(req,res){
    try{
      
        const headerList= headers();
        const user_id=parseInt(headerList.get('id'));
        
        const prisma=new PrismaClient;
        const result=await prisma.invoices.findMany({
            where:{
                user_id:user_id
            }
        })
        return NextResponse.json({status:'success', data:result});
    }
    catch(e){
        return NextResponse.json({status:'fail', data:e});
    }
}
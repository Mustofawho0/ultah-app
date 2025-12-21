// let TARGET_TIME : number | null = null

// export async function GET(){
//     if(!TARGET_TIME){
//         TARGET_TIME = Date.now() + 2 * 24 * 60 * 60 * 1000
//     }
//     return Response.json({
//         targetTime : TARGET_TIME
//     })
// }

import { redis } from "@/lib/redis";

const KEY = 'launch_countdown'

export async function GET() {
    let targetTime = await redis.get<number>(KEY)

    if(!targetTime){
        targetTime = Date.now() + 1 * 24 * 60 * 60 * 1000
        await redis.set(KEY, targetTime)
    }

    return Response.json({
        targetTime
    })
}
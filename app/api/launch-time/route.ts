import { redis } from "@/lib/redis";

const KEY = 'launch_countdown'

export async function GET() {
    let targetTime = await redis.get<number>(KEY)

    if(!targetTime){
        targetTime = Date.now() + 2 * 24 * 60 * 60 * 1000
        await redis.set(KEY, targetTime)
    }

    return Response.json({
        targetTime
    })
}
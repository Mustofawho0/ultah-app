let TARGET_TIME : number | null = null

export async function GET(){
    if(!TARGET_TIME){
        TARGET_TIME = Date.now() + 2 * 24 * 60 * 60 * 1000
    }
    return Response.json({
        targetTime : TARGET_TIME
    })
}
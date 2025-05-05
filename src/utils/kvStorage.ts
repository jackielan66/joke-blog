// kvStorage.ts
import { Redis } from '@upstash/redis'

// let redis = new Redis({
//     url: process.env.UPSTASH_REDIS_REST_URL!,
//     token: process.env.UPSTASH_REDIS_REST_TOKEN!,
// })

const redis = Redis.fromEnv(); 

export async function clearItemFromKv(key: string) {
    await redis.del(key)
}
export async function addItemToKv(key: string, item: any) {   
    await redis.lpush(key, JSON.stringify(item))
}

export async function getListItemsFromKv(key: string, limit = 10) {
    const rawItems = await redis.lrange(key, -limit,-1)
    return rawItems;
}

// kvStorage.ts
import { Redis } from '@upstash/redis'

export const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
})

export async function clearItemFromKv(key: string) {
    await redis.del('ease-news')
}
export async function addItemToKv(key: string, item: any) {   
    await redis.lpush(key, JSON.stringify(item))
}

export async function getListItemsFromKv(key: string, limit = 10) {
    const rawItems = await redis.lrange(key, -10,-1)
    return rawItems;
}

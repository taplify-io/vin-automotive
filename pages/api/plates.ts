// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { numberToPriceMYR } from '@/lib/currency'
import { IPlate } from '@/types/plate'
import { readFileSync } from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'

export default async function handler(req: NextApiRequest, res: NextApiResponse<IPlate[]>) {
    const filePath = path.join(process.cwd(), 'public/docs/car-plates.csv')
    const fileContent = readFileSync(filePath, 'utf-8')

    const rows = fileContent.trim().split('\r\n')

    const data = rows.slice(1).map((row) => {
        const [no, price, state, isAvailable] = row.split(',')

        return {
            no,
            price: numberToPriceMYR(Number(price)),
            state,
            isAvailable: isAvailable === 'TRUE',
        }
    })

    res.status(200).json(data)
}

import { z } from "zod"
// import { prisma } from "../../lib/prisma"
import { FastifyInstance } from "fastify"

export async function createContest(app: FastifyInstance) {
  app.post('/contests', async (request, reply) => {
    const createPollBody = z.object({
      title: z.string(),
      description: z.string(),
    })

    const { title, description } = createPollBody.parse(request.body)

    // const poll = await prisma.poll.create({
    //   data: {
    //     title,
    //   }
    // })

    // await Promise.all(options.map((option) => {
    //   return prisma.pollOption.create({
    //     data: {
    //       title: option,
    //       pollId: poll.id
    //     }
    //   })
    // }))

    // return reply.status(201).send({ pollId: poll.id })
    return reply.status(201).send({ title, description })
  })

}
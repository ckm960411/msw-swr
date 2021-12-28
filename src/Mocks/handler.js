import { rest } from "msw";

export const handlers = [
  rest.get("https://localhost:3000/api/user/:userId", async (req, res, ctx) => {
    const { userId } = req.params
    return res(
      ctx.json({
        name: `KMin (${userId})`
      })
    )
    // return res(ctx.status(400))
  }),
  rest.get("https://localhost:3000/api/user-name", async (req, res, ctx) => {
    const id = req.url.searchParams.get("id")
    return res(
      ctx.json({
        name: id === "1" ? "The one" : "The others"
      })
    )
    // return res(ctx.status(400))
  }),
  rest.get("https://localhost:3000/todo", async (req, res, ctx) => {
    return res(
      ctx.json({
        todo: {
          task: 'Todo from Server',
        }
      })
    )
  }),
  rest.put("https://localhost:3000/counter/increment", async (req, res, ctx) => {
    const { value } = req.body
    return res(
      ctx.json({
        value: value + 2,
      })
    )
  }),
  rest.get("https://localhost:3000/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        id: "f79e82e8-c34a-4dc7-a49e-9fadc0979fda",
        firstName: "John",
        lastName: "Maverick",
      })
    );
  }),
  rest.get("https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json", async (req, res, ctx) => {
    const id = req.url.searchParams.get('id')

    const originalResponse = await ctx.fetch(req)
    const originalResponseData = await originalResponse.json()

    // return res(
    //   ctx.status(403),
    //   // And a response body, if neccessary
    //   ctx.json({
    //     errorMessage: '데이터 불러오기 대~실패!'
    //   })
    // )

    return res(
      ctx.json({
        data: {
          people: [
            ...originalResponseData.data.people,
            {
              name: id,
              age: 135,
            },
          ],
        },
      })
    );
  }),
]


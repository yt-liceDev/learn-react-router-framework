import { data } from "react-router"
import { z } from "zod"
import AddPost from "~/components/add-post"
import ListPost from "~/components/list-post"
import type { Route } from "./+types/home"

export async function loader() {
  const res = await fetch(import.meta.env.VITE_API)
  return res.json()
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()

  if (request.method === "DELETE") {
    const idPost = formData.get("idPost")
    await fetch(`${import.meta.env.VITE_API}/${idPost}`, {
      method: "DELETE",
    })

    return { message: "success" }
  }

  const schema = z.object({
    title: z.string().min(1),
    content: z.string().min(1),
  })

  const parsedData = schema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  })

  if (!parsedData.success) {
    return data(
      {
        errors: parsedData.error.issues,
      },
      {
        status: 400,
      },
    )
  }

  const postData = parsedData.data

  await fetch(import.meta.env.VITE_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  })

  return {
    message: "success",
  }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main className='p-4'>
      <div className='flex justify-center my-8'>
        <AddPost />
      </div>
      <h1 className='text-2xl font-bold'>All Posts</h1>
      <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4'>
        <ListPost posts={loaderData} />
      </div>
    </main>
  )
}

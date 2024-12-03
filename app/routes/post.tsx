import { Link } from "react-router"
import type { Route } from "./+types/post"

export async function loader({ params }: Route.LoaderArgs) {
  const res = await fetch(`${import.meta.env.VITE_API}/${params.id}`)
  return res.json()
}

export default function Post({ loaderData }: Route.ComponentProps) {
  return (
    <div className='p-4'>
      <Link to='/' viewTransition>
        Go Back
      </Link>
      <h1 className='text-2xl font-bold'>{loaderData.title}</h1>
      <p>{loaderData.content}</p>
    </div>
  )
}

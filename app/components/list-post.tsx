import { Form, Link } from "react-router"

type Post = {
  id: string
  title: string
  content: string
}

type DataProps = {
  posts: Post[]
}

export default function ListPost({ posts }: DataProps) {
  return (
    <>
      {posts?.map((post) => (
        <div key={post.id} className='bg-white/70 shadow-md rounded-lg p-4 my-4'>
          <h2 className='tex-xl'>{post.title}</h2>
          <p>{post.content}</p>
          <div className='flex gap-4'>
            <Link
              to={`posts/${post.id}`}
              className='py-2 px-4 bg-blue-600 rounded-md text-zinc-100'
            >
              Detail
            </Link>
            <Form method='delete'>
              <input type='hidden' name='idPost' value={post.id} />
              <button
                type='submit'
                className='px-4 py-2 rounded-md bg-red-600 text-zinc-100'
              >
                Delete
              </button>
            </Form>
          </div>
        </div>
      ))}
    </>
  )
}

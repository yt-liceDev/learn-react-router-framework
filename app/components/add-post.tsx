import { useFetcher } from "react-router"
import { fieldError } from "~/utils/field-error"

export default function AddPost() {
  const fetcher = useFetcher()
  const errros = fetcher.data?.errors

  const titleError = fieldError("title", errros)
  const contentError = fieldError("content", errros)

  return (
    <div className='bg-white/70 rounded-md p-4 shadow-md max-w-lg w-full'>
      <h1 className='text-2xl font-bold text-center mb-4'>Add Post</h1>
      <fetcher.Form method='post' className='flex flex-col gap-4'>
        <div className='flex flex-col gap-2'>
          <label htmlFor='title'>Title</label>
          <input className='border' type='text' name='title' id='title' />
          {titleError && <p className='text-red-500'>{titleError}</p>}
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor='content'>Content</label>
          <textarea className='border' name='content' id='content'></textarea>
          {contentError && <p className='text-red-500'>{contentError}</p>}
        </div>
        <div className='text-center'>
          <button
            type='submit'
            disabled={fetcher.state === "submitting"}
            className='bg-blue-600 py-2 px-6 rounded-md text-zinc-100'
          >
            Post
          </button>
        </div>
      </fetcher.Form>
    </div>
  )
}

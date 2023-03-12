import { dayjsHelper } from "@app/lib/timeHelper";
import { ChatMessageIncome } from "./components/ChatMessageIncome";
import { ChatMessageOutcome } from "./components/ChatMessageOutcome";

import "./page.module.css";

export default function Page() {
  return (
    <main className='flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden'>
      <div className='flex flex-col flex-grow h-0 p-4 overflow-auto'>
        <ChatMessageOutcome
          message='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.'
          time={dayjsHelper().subtract(5, "minutes").toString()}
        />
        <ChatMessageIncome
          message='Lorem ipsum dolor sit. 2'
          time={dayjsHelper().subtract(2, "minutes").toString()}
        />
      </div>

      <div className='bg-gray-300 p-4 flex gap-5'>
        <input
          className='flex items-center h-10 w-full rounded px-3 text-sm'
          type='text'
          placeholder='Type your message…'
        />
        <button className='flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0 transition duration-300'>
          <span>Send</span>
          <span className='ml-2'>
            <svg
              className='w-4 h-4 transform rotate-45 -mt-px'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </main>
  );
}

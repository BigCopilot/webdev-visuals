import '@/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, Flip} from 'react-toastify';

import type { AppProps } from 'next/app'
import { Portal } from '@/components/portal/Portal';

export default function App({ Component, pageProps }: AppProps) {
  return <>
           <ToastContainer 
              hideProgressBar={true} 
              theme='dark'
              className="z-50"
              transition={Flip}
           />
           <Portal>
              <Component {...pageProps} />
           </Portal>
         </> 
}

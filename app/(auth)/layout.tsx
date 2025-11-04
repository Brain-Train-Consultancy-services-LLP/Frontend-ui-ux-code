import React , {ReactNode} from 'react';
import Image from 'next/image';

const Layout = ({children} : {children : ReactNode}) =>{
    return(
     <main className='auth-container'>
        <section className= 'auth-form'>
            <div className = 'auth-box'>
                <div className='flex flex-row gap-3'>
                <Image src='/assets/logo.png' alt='logo' width={37} height={37} />
                <h1 className='text-2xl font-semibold text-white'>BrainTrain Consultancy Services LLP</h1>
                </div>
                <div>{children}</div>
            </div>

            <section className = 'auth-illustration'>
                <Image src='/assets/auth-illustration.png' alt='illustration' width={100} height={100} className ="size-full object-cover"/>
            </section>
        </section>
     </main>
    )
}
export default Layout;
//import React from "react";
import herDoImage from'../assets/heroImage.webp';

export const Home = () => {
    return(

        <div className="w-full mx-[20px] text-white">
            <div className='flex justify-between mt-[70px] '    >

                <div className='block mt-[50px]   pr-[80px]'>


                    
                    <p className='text-[purple] uppercase font-bold text-[20px] mb-3'>Lifestyle Agency</p>

                             
       <h1 className='font-black text-white text-[70px] font-sans leading-none '> Full Service AI-Focused Lifestyle Agency</h1>
        
        <p className='font-sans mt-10'> The importance of Lifestyle services for companies seeking to 
            attract new customers and increase traffic cannot be overstated.</p>

            <button className='bg-[purple] px-16 py-[15px] rounded-xl '>Watch Video</button>

                </div>
                <div>

                    <img src= {herDoImage} alt="Hero Image"/>
                </div>
            </div>
      
       
        </div>
    );
};
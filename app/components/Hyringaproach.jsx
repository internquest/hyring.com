'use client'
import React, { useState } from 'react'

const Hyringaproach = () => {
    const [isDragging, setIsDragging] = useState(false);
    const [positionY, setPositionY] = useState(30);
    const [dragStartY, setDragStartY] = useState(0);
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setDragStartY(e.clientY - positionY);
      };
    // console.log(dragStartY);
    
      const handleMouseMove = (e) => {
        if (!isDragging) return;
        
        // Calculate new position
        const newPosition = e.clientY - dragStartY;
        
        // Clamp the position between 30 and 744
        const clampedPosition = Math.min(Math.max(newPosition, 30), 744);
        setPositionY(clampedPosition);
      };
    
      const handleMouseUp = () => {
        setIsDragging(false);
      };
    // console.log(positionY);
    
  return (
<div>
    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] mt-28 md:flex hidden m-0 p-0">
            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] ml-auto mr-auto mb-0 mt-0 max-w-[1800px] m-0 p-0">
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] relative ml-5 mr-5 h-[750px] m-0 p-0">
                    <div class="box-border  border-[solid] border-[rgb(229,231,235)] flex h-[93vh] md:h-[780px] flex-col rounded-bl-xl rounded-br-xl rounded-tl-2xl rounded-tr-2xl bg-primary-brown border pb-6 pt-8 m-0 p-0">
                        <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] pl-20 pr-20 pt-1 m-0 p-0 pb-4">
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row m-0 p-0">
                                <svg width="50" height="49" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                    <g clip-path="url(#a)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                        <path d="M30.553 30.384a8.274 8.274 0 0 0 .021-11.752c-3.259-3.25-8.552-3.257-11.823-.016a8.274 8.274 0 0 0-.022 11.752c3.26 3.25 8.553 3.257 11.824.016Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path d="M37.146 24.5c0 2.986-1.066 5.727-2.839 7.87a.775.775 0 0 0 .05 1.044l7.512 7.466c.32.318.84.3 1.14-.033 4-4.434 6.397-10.325 6.287-16.775-.23-13.46-11.461-24.26-25.003-24.07C10.843.192 0 11.086 0 24.5c0 6.29 2.385 12.024 6.305 16.363.298.33.818.34 1.134.026l7.512-7.466a.773.773 0 0 0 .051-1.042 12.32 12.32 0 0 1-2.843-8.243c.185-6.498 5.459-11.796 11.992-12.05 7.116-.275 12.995 5.4 12.995 12.412Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path d="M30.05 35.695a12.465 12.465 0 0 1-3.22 1.034.782.782 0 0 0-.56.417l-.442.882a.768.768 0 0 0-.054.555l1.587 5.68a.335.335 0 0 1-.107.348l-2.385 2.031a.335.335 0 0 1-.221.082.335.335 0 0 1-.222-.082l-2.385-2.031a.338.338 0 0 1-.107-.348l1.587-5.68a.777.777 0 0 0-.053-.555l-.443-.88a.778.778 0 0 0-.559-.417 12.448 12.448 0 0 1-3.21-1.03.792.792 0 0 0-.897.148l-7.734 7.686a.776.776 0 0 0 .115 1.195A24.63 24.63 0 0 0 24.648 49a24.63 24.63 0 0 0 13.917-4.278.777.777 0 0 0 .114-1.194l-7.73-7.686a.795.795 0 0 0-.9-.147Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path d="M70.853 26.208H61.67v9.252h-4.165V13.568h4.165v8.97h9.183v-8.97h4.165V35.46h-4.165v-9.252ZM90.038 19.088h3.787l-6.627 19.289a8.141 8.141 0 0 1-.71 1.52 3.792 3.792 0 0 1-.93 1.05c-.357.272-.79.47-1.295.597-.505.126-1.094.188-1.767.188h-2.43v-3.23h2.967l.757-2.285-5.9-17.127h4.008l2.87 8.637 1.073 4.13h.19l1.135-4.13 2.872-8.64ZM96.476 35.46V19.088h4.04v3.387h.157c.105-.438.267-.862.489-1.27.221-.408.51-.769.867-1.083a4.142 4.142 0 0 1 1.279-.752c.494-.188 1.067-.282 1.719-.282h.883v3.795h-1.262c-1.367 0-2.397.199-3.092.596-.694.398-1.04 1.045-1.04 1.945V35.46h-4.04ZM110.894 16.705c-.84 0-1.446-.188-1.813-.564-.368-.376-.552-.857-.552-1.443v-.628c0-.585.184-1.066.552-1.442.367-.376.973-.565 1.813-.565.822 0 1.42.189 1.8.565.378.376.568.857.568 1.442v.627c0 .585-.19 1.066-.568 1.442-.379.378-.978.566-1.8.566Zm-2.019 2.383h4.04V35.46h-4.04V19.088ZM117.583 35.46V19.088h4.04v2.729h.157a5.228 5.228 0 0 1 1.595-2.21c.726-.597 1.729-.895 3.013-.895 1.705 0 3.008.553 3.913 1.663.905 1.108 1.357 2.686 1.357 4.735v10.35h-4.04v-9.942c0-1.17-.211-2.05-.63-2.635-.422-.585-1.116-.878-2.084-.878-.421 0-.826.059-1.215.172a3.405 3.405 0 0 0-1.041.502c-.305.22-.552.492-.741.817-.189.324-.284.706-.284 1.144v10.82h-4.04ZM151 36.84c0 .857-.154 1.615-.457 2.275-.305.658-.805 1.208-1.5 1.646-.694.439-1.588.774-2.681 1.005-1.094.229-2.429.344-4.008.344-1.388 0-2.567-.089-3.534-.266-.968-.178-1.762-.43-2.383-.752-.622-.325-1.068-.728-1.341-1.209a3.244 3.244 0 0 1-.411-1.63c0-.921.257-1.636.773-2.15.516-.512 1.236-.84 2.162-.987v-.345c-.673-.166-1.194-.496-1.562-.99-.368-.491-.551-1.073-.551-1.742 0-.419.083-.79.251-1.114.168-.325.395-.602.679-.832.283-.231.605-.425.962-.58a5.876 5.876 0 0 1 1.135-.363v-.126c-1.01-.46-1.762-1.096-2.256-1.91-.495-.815-.741-1.766-.741-2.852 0-1.671.578-3.013 1.735-4.026s2.851-1.52 5.081-1.52c.505 0 1.005.031 1.499.093.495.063.952.167 1.373.314v-.534c0-1.588.778-2.383 2.335-2.383h2.556v3.074h-3.502v.44c.862.48 1.503 1.109 1.924 1.88.422.774.632 1.663.632 2.666 0 1.652-.573 2.979-1.719 3.983-1.146 1.004-2.845 1.505-5.097 1.505-.967 0-1.81-.095-2.524-.283-.316.148-.589.341-.821.58-.232.242-.346.54-.346.895 0 .816.716 1.222 2.145 1.222h4.419c2.019 0 3.486.414 4.402 1.239.914.825 1.371 1.97 1.371 3.433Zm-3.786.47c0-.523-.211-.93-.631-1.222-.421-.293-1.146-.438-2.177-.438h-5.617c-.567.418-.851.983-.851 1.694 0 .627.262 1.118.789 1.475.525.354 1.419.532 2.681.532h2.019c1.325 0 2.287-.169 2.887-.502.6-.335.9-.848.9-1.538Zm-4.86-10.317c1.978 0 2.966-.832 2.966-2.495v-.53c0-1.663-.989-2.495-2.966-2.495-1.978 0-2.967.832-2.967 2.495v.53c0 1.663.989 2.495 2.967 2.495Z" fill="#462B34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </g>
                                    <defs class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                        <clippath id="a" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                            <path fill="#fff" d="M0 0h151v49H0z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </clippath>
                                    </defs>
                                </svg>
                                <h1 class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] text-[32px] font-bold m-0 pb-1 pl-4 pt-1 text-[#fafafa] p-0">Hyring Approach 😎</h1>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Employees</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Transparent salary information for both parties</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Flat fixed commissions ranging from 20% to 40%</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Monthly compensation</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Engagement with a single client only</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Sophisticated mobile and web app</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Comprehensive employee, payroll, benefits, and security partnership</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Fully remote</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#fafafa] text-[18px] p-0">No-compromise health insurance for employees, spouses, children, and parents</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">High-config Apple or equivalent Windows laptop</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Monthly payments</p>
                            </div>
                            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] animate-[5s_linear_0s_infinite_normal_none_running_spin] m-0 p-0">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 33 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                        <path fill="#B6ECCC" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path stroke="#462B34" d="M11.225 22.584a19.625 19.625 0 015.687 10.741 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.967-.546-7.8-2.329-10.936-5.305C18.888 8.42 17.023 4.599 16.337.655A19.46 19.46 0 0111.03 11.59 19.46 19.46 0 01.289 17.278c4.018.546 7.85 2.277 10.936 5.306z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </svg>
                                </div>
                                <p class="box-border border-[0px] text-[#fafafa] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[18px] p-0">Recognised as employee of the contracted company in LinkedIn</p>
                            </div>
                        </div>
                    </div>
                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] absolute top-0 w-full m-0 p-0 z-[1]">
                        <div style={{height:positionY}} class=" ">
                            <div class="box-border  border-[solid] bg-[#fafafa] border-[rgb(229,231,235)] flex h-full w-full flex-col items-start overflow-hidden rounded-tl-xl rounded-tr-xl border pt-4 m-0 p-0">
                                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] pl-20 pr-20 m-0 p-0 pb-4 pt-7">
                                    <h1 class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] text-[32px] font-bold m-0  p-0">Traditional C2H approach 😐</h1>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Contractors</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Concealed salary and commission information</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">80% to 150% of fees per candidate per month</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Compensation on an hourly basis</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Involvement in multiple clients and projects</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Utilization of third-party applications</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Payroll partners</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Remote and on-site work</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Limited or no health insurance coverage</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Basic or personal laptop provision</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">60-day delayed payment</p>
                                    </div>
                                    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-5 pt-6 m-0 p-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        </svg>
                                        <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 font-[var(--font-whyte-regular)] text-[#727272] text-[18px] p-0">Recognised as contractor in LinkedIn</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div  onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp} draggable="false" class="box-border hover:cursor-grab active:cursor-grabbing border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0 select-none">
                            <div  onMouseDown={handleMouseDown} class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] -mt-[48px] flex w-full translate-x-[var(--tw-translate-x)] translate-y-[var(--tw-translate-y)] rotate-[var(--tw-rotate)] skew-x-[var(--tw-skew-x)] skew-y-[var(--tw-skew-y)] scale-x-[var(--tw-scale-x)] scale-y-[var(--tw-scale-y)] animate-[1s_ease_0s_infinite_normal_none_running_bouncer] flex-row items-center justify-center m-0 p-0">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none" viewBox="0 0 151 151" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                                    <g filter="url(#filter0_d_3569_4984)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                        <circle cx="75.5" cy="71.5" r="51.289" fill="#F5F5F5" stroke="#462B34" stroke-width="0.422" transform="rotate(90 75.5 71.5)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></circle>
                                        <circle cx="75.714" cy="71.286" r="30.075" fill="#F5F5F5" stroke="#462B34" stroke-width="0.422" transform="rotate(90 75.714 71.286)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></circle>
                                        <circle cx="117.714" cy="69.285" r="2.286" fill="#462B34" transform="rotate(90 117.714 69.285)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></circle>
                                        <circle cx="35.714" cy="74.285" r="2.286" fill="#462B34" transform="rotate(90 35.714 74.285)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></circle>
                                        <path fill="#462B34" d="M112.232 77L122 79.962l-1.039 3.456c-.416 1.41-1.178 2.398-2.356 3.033-1.177.634-2.424.705-3.879.282-1.524-.494-2.563-1.27-3.187-2.398-.623-1.129-.693-2.469-.277-3.95l.97-3.386zm.9 1.763l-.554 1.763c-.693 2.398.139 3.95 2.564 4.726 1.108.352 2.078.282 2.909-.07.832-.424 1.386-1.2 1.732-2.328l.554-1.905-7.205-2.186zM107.613 88L116 93.868l-2.586 3.52c-.559.829-1.258 1.312-2.027 1.52-.769.206-1.468.068-2.167-.415-.629-.483-.978-.966-.978-1.588 0-.62.21-1.242.629-1.863l-.489-.346c-.42.553-.839.898-1.328 1.036-.42.138-.979 0-1.678-.276L103 94.35l.909-1.311 2.236 1.035c.559.276 1.118.345 1.538.276.419-.138.839-.483 1.258-1.035l1.258-1.726-3.425-2.416.839-1.174zm3.704 4.418l-1.537 2.14c-.35.484-.56.967-.49 1.45.07.483.28.828.699 1.174.42.345.909.414 1.328.276.42-.138.839-.415 1.188-.967l1.538-2.14-2.726-1.933zM95.357 100.452l2.429 1.506 3.714-2.488-.857-2.619 1.286-.851 3.071 9.887-1.643 1.113L94 101.369l1.357-.917zm6.572.262L99 102.679l2.5 1.571c.786.524 1.429 1.048 1.857 1.571l.5-.327a9.903 9.903 0 01-1.071-2.095l-.857-2.685zM93.71 106.952c.483 1.425.345 2.851-.277 4.134-.622 1.283-1.658 2.21-2.971 2.638-1.106.356-2.142.356-3.04.071a4.278 4.278 0 01-2.211-1.64l1.244-1.069c1.036 1.354 2.21 1.782 3.661 1.283.899-.285 1.59-.927 2.004-1.782.415-.927.484-1.925.138-3.136-.345-1.212-.967-2.068-1.796-2.567-.83-.499-1.727-.57-2.695-.285-.829.285-1.45.784-1.865 1.426-.415.642-.484 1.354-.346 2.067l3.317-1.069.414 1.283-4.767 1.568-1.52-4.918 1.313-.428a5.05 5.05 0 01.138 2.281l.622-.214c0-.641.207-1.283.622-1.924.345-.642 1.036-1.141 2.003-1.426 1.313-.428 2.488-.285 3.593.356 1.105.642 1.934 1.711 2.418 3.351zM74 105.515L71.89 115l-1.582-.263.904-3.952-5.726-.988-.904 3.952-1.582-.263L65.11 104l1.581.264-.904 4.281 5.726.988.904-4.281 1.582.263zM62 102.467L56.667 111 50 107.6l.74-1.133 5.334 2.733 1.556-2.466-4-2 .666-1.134 4 2L60 102.867l-5.333-2.733.74-1.133L62 102.466zM53 96.857L45.193 104l-3.109-3.286C41.361 99.929 41 99.143 41 98.357c0-.786.29-1.5.867-2.071.579-.572 1.23-.786 1.88-.643.65.143 1.229.428 1.807 1l.434-.429c-.506-.571-.795-1.071-.795-1.5 0-.428.217-1 .65-1.571L47.433 91l1.157 1.214-1.59 2c-.434.5-.578 1-.578 1.5.072.429.289.929.795 1.5l1.518 1.572 3.18-2.929 1.085 1zm-5.277 2.786l-1.88-2c-.433-.5-.867-.714-1.373-.786-.506-.071-.94.072-1.301.5-.362.429-.579.786-.579 1.286 0 .428.29.928.723 1.428l1.88 2 2.53-2.428zM45 88.557L35.983 93 33 86.371l1.153-.564 2.372 5.289 2.577-1.27-1.763-3.948 1.153-.564 1.762 3.948 2.916-1.41-2.373-5.288L41.949 82 45 88.556zM40.624 63.999L31 60.797l1.1-3.41c.481-1.392 1.238-2.366 2.406-2.923 1.169-.557 2.475-.626 3.85-.14 1.512.488 2.543 1.323 3.162 2.437.618 1.113.618 2.436.137 3.897L40.625 64zm-.825-1.81l.55-1.74c.756-2.366-.069-3.897-2.406-4.732-1.1-.348-2.062-.348-2.887 0-.825.348-1.375 1.113-1.787 2.227l-.619 1.81 7.15 2.436zM45.247 53L37 46.94l2.656-3.443c.629-.827 1.328-1.309 2.097-1.446.769-.138 1.467 0 2.166.482.63.482.909 1.033.909 1.652 0 .62-.21 1.24-.63 1.86l.49.344c.42-.55.909-.895 1.328-1.033.42-.069.979 0 1.608.344L50 46.802l-.978 1.24-2.237-1.102c-.56-.276-1.048-.413-1.538-.276-.419.138-.838.483-1.258 1.033l-1.258 1.653 3.425 2.48-.909 1.17zm-3.564-4.476l1.607-2.135c.35-.482.56-.964.56-1.446s-.28-.826-.7-1.17c-.419-.345-.908-.414-1.327-.345-.42.138-.84.413-1.189.895l-1.607 2.135 2.656 2.066zM58.562 41.313l-2.373-1.704-3.81 2.627.79 2.84-1.366.923L49 35.207l1.725-1.208 9.274 6.32-1.437.994zm-6.615-.497l3.02-2.06-2.517-1.774c-.79-.568-1.366-1.136-1.797-1.704l-.503.355c.431.71.79 1.42 1.006 2.272l.791 2.911zM60.253 34.876c-.416-1.407-.347-2.813.416-4.08.693-1.266 1.733-2.11 3.05-2.532 1.11-.351 2.15-.351 3.051 0 .902.352 1.665.915 2.22 1.688l-1.249.985c-.97-1.336-2.219-1.758-3.675-1.336-.9.281-1.594.844-2.08 1.758-.485.915-.554 1.9-.208 3.095.347 1.196.902 2.04 1.734 2.603.832.492 1.733.633 2.704.351.832-.281 1.525-.703 1.872-1.406.416-.634.555-1.337.416-2.04l-3.398.984-.346-1.336 4.853-1.407L71 37.127l-1.387.422c-.208-.703-.208-1.477-.069-2.25l-.624.21a4.237 4.237 0 01-.693 1.9c-.416.632-1.04 1.125-2.08 1.406-1.318.352-2.497.211-3.606-.492-1.11-.704-1.872-1.9-2.288-3.447zM80 37.225L82.108 27l1.429.285-.884 4.26 5.102 1.136.884-4.26 1.36.355L87.891 39l-1.429-.284.953-4.616-5.103-1.136-.952 4.615-1.36-.355zM92 40.172L97.486 31 104 34.828l-.732 1.228-5.195-3.106-1.61 2.6 3.878 2.311-.732 1.156-3.878-2.311-1.756 2.96 5.195 3.106L98.44 44l-6.44-3.828zM101 45.928L108.904 39l3.018 3.357c.719.785 1.078 1.571 1.078 2.357 0 .785-.287 1.5-.934 2.071-.575.572-1.222.715-1.868.572-.647-.143-1.222-.5-1.725-1l-.503.428c.503.572.719 1.072.719 1.5 0 .429-.216 1-.647 1.572l-1.653 2.142-1.078-1.214 1.581-2c.431-.5.647-1 .575-1.428 0-.429-.287-.929-.79-1.5l-1.437-1.643-3.234 2.857L101 45.928zm5.246-2.643l1.868 2.072c.431.5.862.785 1.365.857.431.071.934-.072 1.293-.429.432-.357.647-.785.575-1.285 0-.43-.215-.93-.646-1.43L108.832 41l-2.586 2.285zM108 54.187l9.136-4.188L120 56.741l-1.227.568-2.318-5.393-2.591 1.206 1.704 3.974-1.159.568-1.704-3.974-2.932 1.348 2.318 5.394-1.227.567L108 54.188z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                        <path fill="#FFB65E" stroke="#462B34" d="M75.122 88.81a.5.5 0 01-.866 0l-7.048-12.207a.5.5 0 01.433-.75h14.095a.5.5 0 01.433.75L75.122 88.81zM75.122 54.19a.5.5 0 00-.866 0l-7.048 12.207a.5.5 0 00.433.75h14.095a.5.5 0 00.433-.75L75.122 54.19z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                                    </g>
                                    <defs class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                        <filter id="filter0_d_3569_4984" width="151" height="151" x="0" y="0" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                            <feflood flood-opacity="0" result="BackgroundImageFix" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></feflood>
                                            <fecolormatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></fecolormatrix>
                                            <feoffset dy="4" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></feoffset>
                                            <fegaussianblur stdDeviation="12" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></fegaussianblur>
                                            <fecomposite in2="hardAlpha" operator="out" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></fecomposite>
                                            <fecolormatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></fecolormatrix>
                                            <feblend in2="BackgroundImageFix" result="effect1_dropShadow_3569_4984" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></feblend>
                                            <feblend in="SourceGraphic" in2="effect1_dropShadow_3569_4984" result="shape" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></feblend>
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <div class="flex md:hidden mt-20">
    <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] ml-5 mr-5 flex md:hidden flex-col flex-wrap m-0 p-0">
            <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] bg-[#fafafa] mb-4 rounded-xl p-4 m-0">
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row m-0 p-0">
                    <h1 class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] text-[20px] font-bold m-0 pb-4  p-0">Traditional C2H approach 😐</h1>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Contractors</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Concealed salary and commission information</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">80% to 150% of fees per candidate per month</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Compensation on an hourly basis</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Involvement in multiple clients and projects</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Utilization of third-party applications</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Payroll partners</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Remote and on-site work</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Limited or no health insurance coverage</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Basic or personal laptop provision</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">60-day delayed payment</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Recognised as contractor in LinkedIn</p>
                </div>
            </div>
            <div class="box-border border-[0px] border-[solid] bg-primary-brown text-[#FAFAFA] border-[rgb(229,231,235)] rounded-xl p-4 m-0">
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center gap-4 pb-4 m-0 p-0">
                    <svg width="50" height="49" fill="none"
                        xmlns="http://www.w3.org/2000/svg" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                        <g clip-path="url(#a)" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                            <path d="M30.553 30.384a8.274 8.274 0 0 0 .021-11.752c-3.259-3.25-8.552-3.257-11.823-.016a8.274 8.274 0 0 0-.022 11.752c3.26 3.25 8.553 3.257 11.824.016Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path d="M37.146 24.5c0 2.986-1.066 5.727-2.839 7.87a.775.775 0 0 0 .05 1.044l7.512 7.466c.32.318.84.3 1.14-.033 4-4.434 6.397-10.325 6.287-16.775-.23-13.46-11.461-24.26-25.003-24.07C10.843.192 0 11.086 0 24.5c0 6.29 2.385 12.024 6.305 16.363.298.33.818.34 1.134.026l7.512-7.466a.773.773 0 0 0 .051-1.042 12.32 12.32 0 0 1-2.843-8.243c.185-6.498 5.459-11.796 11.992-12.05 7.116-.275 12.995 5.4 12.995 12.412Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path d="M30.05 35.695a12.465 12.465 0 0 1-3.22 1.034.782.782 0 0 0-.56.417l-.442.882a.768.768 0 0 0-.054.555l1.587 5.68a.335.335 0 0 1-.107.348l-2.385 2.031a.335.335 0 0 1-.221.082.335.335 0 0 1-.222-.082l-2.385-2.031a.338.338 0 0 1-.107-.348l1.587-5.68a.777.777 0 0 0-.053-.555l-.443-.88a.778.778 0 0 0-.559-.417 12.448 12.448 0 0 1-3.21-1.03.792.792 0 0 0-.897.148l-7.734 7.686a.776.776 0 0 0 .115 1.195A24.63 24.63 0 0 0 24.648 49a24.63 24.63 0 0 0 13.917-4.278.777.777 0 0 0 .114-1.194l-7.73-7.686a.795.795 0 0 0-.9-.147Z" fill="#EAA24B" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path d="M70.853 26.208H61.67v9.252h-4.165V13.568h4.165v8.97h9.183v-8.97h4.165V35.46h-4.165v-9.252ZM90.038 19.088h3.787l-6.627 19.289a8.141 8.141 0 0 1-.71 1.52 3.792 3.792 0 0 1-.93 1.05c-.357.272-.79.47-1.295.597-.505.126-1.094.188-1.767.188h-2.43v-3.23h2.967l.757-2.285-5.9-17.127h4.008l2.87 8.637 1.073 4.13h.19l1.135-4.13 2.872-8.64ZM96.476 35.46V19.088h4.04v3.387h.157c.105-.438.267-.862.489-1.27.221-.408.51-.769.867-1.083a4.142 4.142 0 0 1 1.279-.752c.494-.188 1.067-.282 1.719-.282h.883v3.795h-1.262c-1.367 0-2.397.199-3.092.596-.694.398-1.04 1.045-1.04 1.945V35.46h-4.04ZM110.894 16.705c-.84 0-1.446-.188-1.813-.564-.368-.376-.552-.857-.552-1.443v-.628c0-.585.184-1.066.552-1.442.367-.376.973-.565 1.813-.565.822 0 1.42.189 1.8.565.378.376.568.857.568 1.442v.627c0 .585-.19 1.066-.568 1.442-.379.378-.978.566-1.8.566Zm-2.019 2.383h4.04V35.46h-4.04V19.088ZM117.583 35.46V19.088h4.04v2.729h.157a5.228 5.228 0 0 1 1.595-2.21c.726-.597 1.729-.895 3.013-.895 1.705 0 3.008.553 3.913 1.663.905 1.108 1.357 2.686 1.357 4.735v10.35h-4.04v-9.942c0-1.17-.211-2.05-.63-2.635-.422-.585-1.116-.878-2.084-.878-.421 0-.826.059-1.215.172a3.405 3.405 0 0 0-1.041.502c-.305.22-.552.492-.741.817-.189.324-.284.706-.284 1.144v10.82h-4.04ZM151 36.84c0 .857-.154 1.615-.457 2.275-.305.658-.805 1.208-1.5 1.646-.694.439-1.588.774-2.681 1.005-1.094.229-2.429.344-4.008.344-1.388 0-2.567-.089-3.534-.266-.968-.178-1.762-.43-2.383-.752-.622-.325-1.068-.728-1.341-1.209a3.244 3.244 0 0 1-.411-1.63c0-.921.257-1.636.773-2.15.516-.512 1.236-.84 2.162-.987v-.345c-.673-.166-1.194-.496-1.562-.99-.368-.491-.551-1.073-.551-1.742 0-.419.083-.79.251-1.114.168-.325.395-.602.679-.832.283-.231.605-.425.962-.58a5.876 5.876 0 0 1 1.135-.363v-.126c-1.01-.46-1.762-1.096-2.256-1.91-.495-.815-.741-1.766-.741-2.852 0-1.671.578-3.013 1.735-4.026s2.851-1.52 5.081-1.52c.505 0 1.005.031 1.499.093.495.063.952.167 1.373.314v-.534c0-1.588.778-2.383 2.335-2.383h2.556v3.074h-3.502v.44c.862.48 1.503 1.109 1.924 1.88.422.774.632 1.663.632 2.666 0 1.652-.573 2.979-1.719 3.983-1.146 1.004-2.845 1.505-5.097 1.505-.967 0-1.81-.095-2.524-.283-.316.148-.589.341-.821.58-.232.242-.346.54-.346.895 0 .816.716 1.222 2.145 1.222h4.419c2.019 0 3.486.414 4.402 1.239.914.825 1.371 1.97 1.371 3.433Zm-3.786.47c0-.523-.211-.93-.631-1.222-.421-.293-1.146-.438-2.177-.438h-5.617c-.567.418-.851.983-.851 1.694 0 .627.262 1.118.789 1.475.525.354 1.419.532 2.681.532h2.019c1.325 0 2.287-.169 2.887-.502.6-.335.9-.848.9-1.538Zm-4.86-10.317c1.978 0 2.966-.832 2.966-2.495v-.53c0-1.663-.989-2.495-2.966-2.495-1.978 0-2.967.832-2.967 2.495v.53c0 1.663.989 2.495 2.967 2.495Z" fill="#462B34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </g>
                        <defs class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                            <clippath id="a" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0">
                                <path fill="#fff" d="M0 0h151v49H0z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            </clippath>
                        </defs>
                    </svg>
                    <h1 class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] text-[20px] font-bold m-0  p-0">Hyring Approach 😎</h1>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Employees</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Transparent salary information for both parties</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Flat fixed commissions ranging from 20% to 40%</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Monthly compensation</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Engagement with a single client only</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Sophisticated mobile and web app</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Comprehensive employee, payroll, benefits, and security partnership</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Fully remote</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">No-compromise health insurance for employees, spouses, children, and parents</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">High-config Apple or equivalent Windows laptop</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Monthly payments</p>
                </div>
                <div class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] flex flex-row items-center pl-2 pr-2 pb-2 pt-2 m-0 p-0">
                    <div class="scale-[.6]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg" width="22" height="24" fill="none" viewBox="0 0 34 34" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] block align-middle m-0 p-0">
                            <path fill="#D8D8D8" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                            <path stroke="#462B34" d="M11.553 22.72a19.625 19.625 0 015.687 10.742 19.46 19.46 0 015.306-10.935 19.46 19.46 0 0110.742-5.688c-3.966-.546-7.8-2.329-10.936-5.305-3.135-2.977-5.001-6.798-5.687-10.742a19.46 19.46 0 01-5.306 10.935A19.46 19.46 0 01.617 17.415c4.018.546 7.85 2.277 10.936 5.305z" class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 p-0"></path>
                        </svg>
                    </div>
                    <p class="box-border border-[0px] border-[solid] border-[rgb(229,231,235)] m-0 pl-4 font-[var(--font-whyte-regular)] text-[15px] p-0">Recognised as employee of the contracted company in LinkedIn</p>
                </div>
            </div>
        </div>
        </div>
</div>
  )
}

export default Hyringaproach

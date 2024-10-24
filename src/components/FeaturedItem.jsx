import React from 'react';

function FeaturedItem() {
    return (
        <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-10">
            {/* TITLE */}
            <h1 className="poppins-bold text-4xl text-darkgreen">Your Picnic</h1>
            <hr className="mb-6 mt-4 w-1/3 border-pastelgreen" />

            {/* BOX */}
            <div className="relative mx-auto flex h-fit w-fit flex-col rounded-3xl border-2 border-transparent bg-gradient-to-r from-pastelblue to-pastelgreen p-1 shadow-2xl">
                {/* Inner White Box with Shadow */}
                <div className="rounded-3xl bg-white p-8 shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">
                    <div className="flex items-center">
                        {/* Location Image with Hover Effect */}
                        <img
                            className="h-[300px] w-[450px] rounded-2xl object-cover shadow-md transition-transform duration-500 hover:rotate-3 hover:scale-110"
                            src="/images/Texarkana.jpg"
                            alt="Used Bike"
                        />
                        
                        {/* TEXT */}
                        <div className="ml-8 w-1/2 space-y-6">
                            {/* Location Title */}
                            <h1 className="poppins-extrabold text-3xl text-darkblue drop-shadow-lg">Lake Texarkana</h1>
                            {/* RSVP Details */}
                            <p className="inter-regular text-lg text-gray-600">
                                4 Going | 3 Unsure
                            </p>
                            {/* Picnic Description */}
                            <p className="inter-regular text-darkgreen">
                                Time for a day of relaxation on the lake. Bring a floatie and a swimsuit!
                            </p>
                            
                            {/* RSVP Status */}
                            <div className="flex justify-between items-center pt-4">
                                <p className="poppins-bold text-2xl text-emerald-500">
                                    Going
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Glow Effect */}
            <div className="absolute top-20 left-10 h-32 w-32 animate-pulse rounded-full bg-pastelgreen opacity-50 blur-lg"></div>
            <div className="absolute bottom-20 right-20 h-40 w-40 animate-pulse rounded-full bg-pastelblue opacity-50 blur-lg"></div>
        </div>
    );
}

export default FeaturedItem;

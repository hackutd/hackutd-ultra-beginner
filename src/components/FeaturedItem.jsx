import React from 'react';

function FeaturedItem() {
    return (
        <div className="mx-auto flex w-screen max-w-screen-lg flex-col items-center py-10">
            {/* TITLE */}
            <h1 className="text-4xl">Your Picnic</h1>
            <hr className="mb-6 mt-4 w-1/3" />

            {/* BOX */}
            <div className="relative mx-auto flex h-fit w-fit flex-col p-1">
                {/* Inner White Box with Shadow */}
                <div className="p-8">
                    <div className="flex items-center">
                        {/* Location Image with Hover Effect */}
                        <img
                            className="h-[300px] w-[450px] object-cover"
                            src="/images/Texarkana.jpg"
                            alt="Used Bike"
                        />
                        
                        {/* TEXT */}
                        <div className="ml-8 w-1/2 space-y-6">
                            {/* Location Title */}
                            <h1 className="">Lake Texarkana</h1>
                            {/* RSVP Details */}
                            <p className="">
                                4 Going | 3 Unsure
                            </p>
                            {/* Picnic Description */}
                            <p className="">
                                Time for a day of relaxation on the lake. Bring a floatie and a swimsuit!
                            </p>
                            
                            {/* RSVP Status */}
                            <div className="flex justify-between items-center pt-4">
                                <p className="">
                                    Going
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;

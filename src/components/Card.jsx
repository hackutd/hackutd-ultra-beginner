import React from 'react';

function Card(props) {
    return (
        <div className="p-4">
            {/* Card Container with a Gradient Border */}
            <div className="relative h-full w-full max-w-xs rounded-2xl border-2 p-1">
                {/* Inner Box */}
                <div className="h-full w-full rounded-2xl p-4">
                    {/* Image */}
                    <img
                        className="mx-auto my-4 h-40 w-full object-cover"
                        src={props.img}
                        alt=""
                    />
                    {/* Text Content */}
                    <div className="space-y-3">
                        {/* Title */}
                        <h1 className="">{props.name}</h1>

                        <div className="flex py-1">
                            <p>Bringing: {props.bringing}</p>
                        </div>

                        {/* Status */}
                        <div className="flex justify-between items-center">
                            {/* Status */}
                            <p className="">
                                {props.status}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;

import React from "react";

interface Props {
    imageUrl: string;
    title: string;
    description: string;
}

const UserCard: React.FC<Props> = ({ imageUrl, title, description }) => {
    return (
        <>
            <div className="min-w-48 bg-white rounded-xl shadow-md overflow-hidden">
                <img
                    className="h-48 max-w-48 w-full object-cover"
                    src={imageUrl}
                    alt="Card image"
                />
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">
                        {title}
                    </h2>
                    <p className="mt-2 text-gray-600">{description}</p>
                </div>
            </div>
        </>
    );
};

export default UserCard;

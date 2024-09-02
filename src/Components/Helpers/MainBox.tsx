import React from 'react';

interface MainBoxProps {
    name: string;
}

const MainBox: React.FC<MainBoxProps> = ({ name }) => {
    return (
        <div>
            <div className="mx-auto mt-10 pt-28" style={{ width: '70%' }}>
                <div className="bg-white shadow-md rounded-lg p-8 border-2 border-gray-200">
                    <h1 className=''>{name}</h1>
                </div>
            </div>
        </div>
    );
};

export default MainBox;

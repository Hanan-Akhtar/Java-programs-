import React, { useState } from 'react';

export const Boxes = () => {
    const [list, setList] = useState([{ box: 1 }, { box: 2 }, { box: 3 }, { box: 4 }]);
    const [reversedList, setReversedList] = useState([]);

    const handleReverse = () => {
        const newList = [];
        for (let i = list.length - 1; i >= 0; i--) {
            newList.push(list[i]);
        }
        setList(newList);
    };
    return (
        <div className='container'>
            <div style={{ display: "flex" }}>
                {list.map((value) => {
                    return (
                        <div className="shadow " >
                            <div className="card" style={{ padding: 10, marginLeft: "10%", marginRight: "10%", border: "1px solid", width: 200, height: 200, backgroundColor: 'blue' }}>
                                <h3>{value.box}</h3>

                            </div>

                        </div>
                    );
                })
                }
            </div>
            <button onClick={handleReverse}>Reverse List</button>
            <div>
                {reversedList.map((value, index) => {
                    console.log(index);
                    return (
                        <div className="shadow " style={{ float: "left" }}>
                            <div className="card" style={{ padding: 10, marginLeft: "10%", marginRight: "10%", border: "1px solid", width: 200, height: 200, backgroundColor: 'blue' }}>
                                <h3>{value.box}</h3>

                            </div>

                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}

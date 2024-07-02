const Task12 = () => {
    const array = ['s', 'e', 'w', 'w', 'h', 'h','f','s'];
    const caseInsensitive = [];
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        const lowercaseItem = item.toLowerCase();

        if (!caseInsensitive[lowercaseItem]) {
            caseInsensitive[lowercaseItem] = true;
            uniqueArray.push(item);
        }

    }
    return (
        <div>
            <h1>Remove duplicate items from an array</h1>
            <h2>{array}</h2>
            <h2>{uniqueArray}</h2>
        </div>
    );
}

export default Task12;
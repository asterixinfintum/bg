import Pair from '../models/pair';

async function updatetradingpairsorders() {
    try {
        // Find the first 20 items
        const pairs = await Pair.find({ inview: true })
        const promises = pairs.map(processPair);

        // Use Promise.all to wait for all promises to resolve
        await Promise.all(promises);

        //return items;
    } catch (error) {
        console.error('Error fetching items:', error);
        throw error; // Or handle it as needed
    }
}

const processPair = async (pair) => {
    const pairitem = await Pair.findOne({ _id: pair._id });

    pairitem.gendumborders();
    console.log(pairitem.pair)
};


export default updatetradingpairsorders;
import mongoose from "mongoose";
import S from "@/model/S"; // Adjust the path as needed

async function searchAndSortByCommodity(data) {
    console.log(data)
    try {
        // Connect to MongoDB
        await mongoose.connect("mongodb+srv://pixel:sdgbfhsdgfyusdfuy@myatlasclusteredu.lwtmj66.mongodb.net/agriwatch",{useNewUrlParser:true,  useUnifiedTopology: true,});
    
        // await mongoose.connect("mongodb://localhost:27017/agriwatch", {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });

        const { commodity,district,state,o} = data;

        // Define search query for commodity
        // const searchQuery = {};
        // if (commodity) {
        //     searchQuery.commodity = { $regex: commodity, $options: 'i' }; // Case-insensitive search
        //     searchQuery.district = district; // Case
        //     searchQuery.state = state; // Case
        // }

        // Determine sort order
        
            // sortQuery = {modal_price: o}; 
        

        // const results = await Base.aggregate([
        //     {
        //         $match: searchQuery
        //     },
        //     {
        //         $sort: {modal_price: o}
        //     },
        //     {
        //         $project: { // Project only specific fields
        //             state: 1,
        //             district: 1,
        //             market: 1,
        //             commodity: 1,
        //             variety: 1,
        //             grade: 1,
        //             arrival_date: 1,
        //             min_price: 1,
        //             max_price: 1,
        //             modal_price: 1
        //         }
        //     }
        // ]);
        const results = await S.find({
            commodity: { '$regex': commodity, '$options': 'i' },
            district: district,
            state: state,
        }).sort({modal_price: o});
        // console.log(searchQuery);
        return results;
    } catch (err) {
        console.error(err);
    } finally {
        // Ensure connection is closed after the operation
        await mongoose.disconnect();
    }
}

// Example usage
searchAndSortByCommodity({ commodity: "Banana", },1).then(results => {
    console.log(results);
}).catch(err => {
    console.error(err);
});

export default searchAndSortByCommodity;

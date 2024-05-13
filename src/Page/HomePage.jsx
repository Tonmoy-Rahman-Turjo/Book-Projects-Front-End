
import Bannar from "../Components/Bannar/Bannar";
import BookCatagory from "../Components/BookCatagory/BookCatagory";
import BookExtra from "../Components/Bookextra/BookExtra";
import ExtraSectionTow from "../Components/ExtraSectionTow/ExtraSectionTow";


const HomePage = () => {
    return (
        <div>
            <Bannar></Bannar>
            <BookCatagory></BookCatagory>
            <BookExtra></BookExtra>
            <ExtraSectionTow></ExtraSectionTow>
        </div>
    );
};

export default HomePage;
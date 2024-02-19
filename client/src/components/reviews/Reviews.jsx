import Review from "../review/Review"
import "./reviews.scss"


const Reviews = () => {


    return (
        <div className="reviews">
            <Review />
            <Review />
            <Review />
            <div className="add">
                <h3>Add a review</h3>
                <form className="addForm" action="">
                    <input type="text" placeholder="write you opinion" />
                    <select name="" id="">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    <button>Send</button>
                </form>
            </div>
            <hr />
        </div >
    )
}

export default Reviews
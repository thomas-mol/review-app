import { useState } from "react";
import ReviewList from "../components/ReviewList";
import ReviewFilter from "../components/ReviewFilter";
import ReviewForm from "../components/ReviewForm";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Dok36",
      score: 10,
      description: "Fijne koffie!",
      category: "Coffee",
    },
    {
      id: 2,
      name: "Maona",
      score: 7.5,
      description: "Lekkere koffie bonen en goed terras.",
      category: "Coffee",
    },
    {
      id: 3,
      name: "Ruba",
      score: 9.5,
      description: "Healthy takeaway.",
      category: "Food",
    },
    {
      id: 4,
      name: "Albert Heijn Hessenplein",
      score: 8,
      description: "Op een na beste Albert Heijn in de buurt.",
      category: "Other",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("");

  const visibleReviews = selectedCategory
    ? reviews.filter((review) => review.category === selectedCategory)
    : reviews;

  return (
    <>
      <div className="row row-cols-1 row-cols-xl-2 g-4">
        <div className="col mb-4">
          <h5 className="mb-4">Add a review</h5>
          <ReviewForm
            onSubmit={(review) =>
              setReviews([...reviews, { ...review, id: reviews.length + 1 }])
            }
          />
        </div>
        <div className="col mb-4">
          <h5 className="mb-4">Reviews</h5>
          <div className="mb-4">
            <ReviewFilter
              onSelectCategory={(category) => setSelectedCategory(category)}
            />
          </div>
          <ReviewList
            reviews={visibleReviews}
            onDelete={(id) => setReviews(reviews.filter((r) => r.id !== id))}
          />
        </div>
      </div>
    </>
  );
};

export default ReviewComponent;

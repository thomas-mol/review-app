import { useState } from "react";
import ReviewList from "../components/ReviewList";
import ReviewFilter from "../components/ReviewFilter";
import ReviewForm from "../components/ReviewForm";

const ReviewComponent = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Dok36",
      description: "Fijne koffie!",
      category: "Coffee",
    },
    {
      id: 2,
      name: "Maona",
      description: "Lekkere koffie bonen en goed terras.",
      category: "Coffee",
    },
    {
      id: 3,
      name: "Ruba",
      description: "Healthy takeaway.",
      category: "Food",
    },
    {
      id: 4,
      name: "Albert Heijn Hessenplein",
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
      <div className="mb-5">
        <ReviewForm
          onSubmit={(review) =>
            setReviews([...reviews, { ...review, id: reviews.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ReviewFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ReviewList
        reviews={visibleReviews}
        onDelete={(id) => setReviews(reviews.filter((r) => r.id !== id))}
      />
    </>
  );
};

export default ReviewComponent;

import React from "react";

interface Review {
  id: number;
  name: string;
  score: number;
  description: string;
  category: string;
}

interface Props {
  reviews: Review[];
  onDelete: (id: number) => void;
}

const ReviewList = ({ reviews, onDelete }: Props) => {
  if (reviews.length === 0) {
    return null;
  }

  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="col">
              <div className="card">
                <div className="card-header d-flex justify-content-between">
                  <h5>{review.name}</h5>
                  <button
                    className="btn btn-close"
                    onClick={() => onDelete(review.id)}
                    aria-label="Close"
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">{review.description}</p>
                  <div className="d-flex justify-content-between">
                    <span className="badge text-bg-light">
                      {review.category}
                    </span>
                    <span
                      className={
                        review.score >= 8
                          ? "badge bg-success ms-3"
                          : "badge bg-warning ms-3"
                      }
                    >
                      {review.score}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No reviews found.</p>
        )}
      </div>
    </>
  );
};

export default ReviewList;

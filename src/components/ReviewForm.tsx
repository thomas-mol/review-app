import { z } from "zod";
import { useForm } from "react-hook-form";
import categories from "../categories";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod.js";

const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Name should be at least 3 characters long." })
    .max(20),
  score: z.coerce.number().min(1).max(10),
  description: z
    .string()
    .max(50, { message: "Description can not be longer than 50 characters." }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ReviewFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ReviewFormData) => void;
}

const ReviewForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="form-floating mb-4">
        <input
          {...register("name")}
          id="name"
          type="text"
          className={errors.name ? "form-control is-invalid" : "form-control"}
          placeholder="name"
        />
        <label htmlFor="name">Name</label>
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="score">Score</label>
        <input
          {...register("score")}
          id="score"
          type="number"
          min={1}
          max={10}
          step={0.5}
          className={errors.score ? "form-control is-invalid" : "form-control"}
        />
        {errors.score && <p className="text-danger">{errors.score.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          id="category"
          className={errors.category ? "form-select is-invalid" : "form-select"}
        >
          <option value="">-- Choose a category --</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <textarea
          {...register("description")}
          id="description"
          rows={4}
          className={
            errors.description ? "form-control is-invalid" : "form-control"
          }
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default ReviewForm;

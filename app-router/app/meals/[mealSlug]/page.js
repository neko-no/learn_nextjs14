export default function MealDetailsPage({ params }) {
    return (
        <>
            <h1>Meal detail</h1>
            <p>{params.mealSlug}</p>
        </>
    )
}

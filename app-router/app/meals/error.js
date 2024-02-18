'use client';

export default function Error({ error }) {
    return (
        <main className="error">
            <h1>An erro occured!</h1>
            <p>Failed to fetch meal data. Please try again latter.</p>
        </main>
    )
}

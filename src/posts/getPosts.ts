export async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        // forward server error text/status for debugging
        const text = await res.text();
        throw new Error(`Fetch failed: ${res.status} ${res.statusText} - ${text.slice(0, 500)}`);
    }
    const contentType = res.headers.get('content-type') || '';
    if (!contentType.includes('application/json')) {
        const text = await res.text();
        throw new Error(`Expected JSON but received: ${text.slice(0, 500)}`);
    }
    return res.json();
}
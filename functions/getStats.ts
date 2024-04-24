export async function onRequest(ctx) {
    let api = await fetch("https://mh.scottnet.dev/api/stats")
    let body = await api.json()
    return body
}
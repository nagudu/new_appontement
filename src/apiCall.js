export const apiUrl = "http://localhost:34567"
export function _postApi(url, data, success, error) {
    fetch(`${apiUrl}/${url}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then((raw) => raw.json())
        .then((res) => success(res))
        .catch(err => error(err))

}


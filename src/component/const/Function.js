export function getTitleByUrl(url, constObj) {
    for (const key in constObj) {
        if (constObj[key].url === url) {
            return constObj[key].title;
        }
    }
    return null;
}
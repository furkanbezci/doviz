export const SortDatas = (data) => {
    console.log(data)
    return data.sort((a, b) => (a.priority - b.priority))
}
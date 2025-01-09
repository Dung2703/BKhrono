
function getFunction(onClickFunction, type) {
    if (type === "toggle") {
        onClickFunction(prevPage => prevPage === 0 ? 1 : 0); // setPage(page === 0 ? 1 : 0)
    }
}

export default function Button({ onClickFunction, type }) {

    return (
        <div>
            <button onClick={() => getFunction(onClickFunction, type)}>{type.toUpperCase()}</button>
        </div>
    )
}
